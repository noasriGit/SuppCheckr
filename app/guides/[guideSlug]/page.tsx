import { notFound } from "next/navigation";
import Link from "next/link";
import { buildPageMetadata, entityNoindex } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/layout/SiteChrome";
import {
  PlaceholderBanner,
  MedicalDisclaimer,
  EditorialDates,
  AffiliateDisclosure,
} from "@/components/trust/TrustModules";
import { SourcesList } from "@/components/citations/ContentBlocks";
import {
  getGuides,
  getGuideBySlug,
  getCategoryBySlug,
} from "@/lib/content/loader";
import { isIndexable } from "@/lib/content/loader";

export async function generateStaticParams() {
  return getGuides()
    .filter((g) => g.status !== "archived")
    .map((g) => ({ guideSlug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ guideSlug: string }>;
}) {
  const { guideSlug } = await params;
  const guide = getGuideBySlug(guideSlug);
  if (!guide) return {};
  return buildPageMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/guides/${guideSlug}`,
    noindex: entityNoindex(guide),
  });
}

function renderGuideBody(body: string) {
  const blocks = body.trim().split(/\n(?=## )/);

  return blocks.map((block, index) => {
    const lines = block.split("\n");
    const firstLine = lines[0]?.trim() ?? "";

    if (firstLine.startsWith("## ")) {
      const heading = firstLine.replace(/^## /, "");
      const content = lines.slice(1).join("\n").trim();
      return (
        <section key={index} className="mt-8">
          <h2 className="text-xl font-semibold text-heading">{heading}</h2>
          <div className="prose mt-3 max-w-3xl whitespace-pre-wrap text-sm leading-relaxed text-foreground">
            {renderInlineMarkdown(content)}
          </div>
        </section>
      );
    }

    return (
      <div
        key={index}
        className="prose mt-4 max-w-3xl whitespace-pre-wrap text-sm leading-relaxed text-foreground"
      >
        {renderInlineMarkdown(block.trim())}
      </div>
    );
  });
}

function renderInlineMarkdown(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      return (
        <Link
          key={i}
          href={href}
          className="text-link underline hover:text-link-hover"
        >
          {label}
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ guideSlug: string }>;
}) {
  const { guideSlug } = await params;
  const guide = getGuideBySlug(guideSlug);
  if (!guide || guide.status === "archived") notFound();

  const category = guide.categoryId ? getCategoryBySlug(guide.categoryId) : undefined;
  const relatedGuides = guide.relatedGuideSlugs
    .map((slug) => getGuideBySlug(slug))
    .filter((g) => g && g.slug !== guide.slug && g.status !== "archived");

  return (
    <PageContainer>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          ...(category
            ? [
                { label: "Supplements", href: "/supplements" as const },
                {
                  label: category.name,
                  href: `/supplements/${category.slug}` as const,
                },
              ]
            : []),
          { label: guide.title },
        ]}
      />
      {guide.isPlaceholder && <PlaceholderBanner />}
      <h1 className="text-3xl font-bold text-heading">{guide.title}</h1>
      <p className="mt-3 text-foreground">{guide.excerpt}</p>
      <EditorialDates
        lastUpdated={guide.editorial.lastUpdated}
        lastReviewed={guide.editorial.lastReviewed}
      />
      <article className="mt-4">{renderGuideBody(guide.body)}</article>

      {(relatedGuides.length > 0 || category) && (
        <section className="mt-10 rounded-lg border border-border bg-surface p-4">
          <h2 className="text-lg font-semibold text-heading">Related reading</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground">
            {category && (
              <li>
                <Link
                  href={`/supplements/${category.slug}`}
                  className="text-link hover:text-link-hover hover:underline"
                >
                  {category.name} category overview
                </Link>
                {!isIndexable(category) && (
                  <span className="text-muted"> (draft — not indexed)</span>
                )}
              </li>
            )}
            {category?.ingredientSlug && (
              <li>
                <Link
                  href={`/ingredients/${category.ingredientSlug}`}
                  className="text-link hover:text-link-hover hover:underline"
                >
                  {category.ingredientPageLinkLabel ?? `${category.name} ingredient reference`}
                </Link>
              </li>
            )}
            {category && isIndexable(category) && (
              <li>
                <Link
                  href={`/supplements/${category.slug}/compare`}
                  className="text-link hover:text-link-hover hover:underline"
                >
                  {category.comparisonCtaLabel ?? `${category.name} comparison table`}
                </Link>
              </li>
            )}
            {category?.buyersGuideSlug && (
              <li>
                <Link
                  href={`/guides/${category.buyersGuideSlug}`}
                  className="text-link hover:text-link-hover hover:underline"
                >
                  How to choose a {category.name.toLowerCase()} supplement
                </Link>
              </li>
            )}
            {relatedGuides.map((related) =>
              related ? (
                <li key={related.slug}>
                  <Link
                    href={`/guides/${related.slug}`}
                    className="text-link hover:text-link-hover hover:underline"
                  >
                    {related.title}
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-heading">Sources</h2>
        <div className="mt-3">
          <SourcesList sources={guide.sources} />
        </div>
      </section>
      <AffiliateDisclosure />
      <MedicalDisclaimer />
    </PageContainer>
  );
}
