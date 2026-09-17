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
import { JsonLd } from "@/components/seo/JsonLd";
import { GuideMarkdown } from "@/components/content/GuideMarkdown";
import { resolveGuideSeo } from "@/lib/seo/entityMetadata";
import { buildGuideArticleJsonLd } from "@/lib/seo/jsonld";
import {
  getGuides,
  getGuideBySlug,
  getCategoryBySlug,
  getCategoryComparison,
  isIndexable,
} from "@/lib/content/loader";

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
  const seo = resolveGuideSeo(guide);
  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/guides/${guideSlug}`,
    noindex: entityNoindex(guide),
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
  const guidePath = `/guides/${guideSlug}`;

  return (
    <PageContainer>
      <JsonLd data={buildGuideArticleJsonLd(guide, guidePath)} />
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
        currentPath={guidePath}
      />
      {guide.isPlaceholder && <PlaceholderBanner />}
      {!guide.isPlaceholder && !isIndexable(guide) && (
        <p className="mb-4 rounded-lg border border-warning-border bg-warning-bg px-4 py-2 text-sm text-warning-text">
          Draft guide — not indexed. This page is a preview only.
        </p>
      )}
      <h1 className="text-3xl font-bold text-heading">{guide.title}</h1>
      <p className="mt-3 text-foreground">{guide.excerpt}</p>
      <EditorialDates
        lastUpdated={guide.editorial.lastUpdated}
        lastReviewed={guide.editorial.lastReviewed}
      />
      <article className="mt-4">
        <GuideMarkdown markdown={guide.body} />
      </article>

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
            {category &&
              getCategoryComparison(category.slug) &&
              (isIndexable(category) || !isIndexable(guide)) && (
              <li>
                <Link
                  href={`/supplements/${category.slug}/compare`}
                  className="text-link hover:text-link-hover hover:underline"
                >
                  {category.comparisonCtaLabel ?? `${category.name} comparison table`}
                </Link>
                {!isIndexable(category) && (
                  <span className="text-muted"> (draft — not indexed)</span>
                )}
              </li>
            )}
            {category?.buyersGuideSlug &&
              !relatedGuides.some((related) => related?.slug === category.buyersGuideSlug) && (
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
