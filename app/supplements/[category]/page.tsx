import { notFound } from "next/navigation";
import Link from "next/link";
import { buildPageMetadata, entityNoindex } from "@/lib/seo/metadata";
import { resolveCategorySeo } from "@/lib/seo/entityMetadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/layout/SiteChrome";
import { SidebarLayout } from "@/components/layout/SiteChrome";
import {
  PlaceholderBanner,
  MedicalDisclaimer,
  EditorialDates,
  AffiliateDisclosure,
} from "@/components/trust/TrustModules";
import {
  CategoryProductTable,
} from "@/components/category/CategoryBlocks";
import { SourcesList } from "@/components/citations/ContentBlocks";
import { AdSlot } from "@/components/monetization/AdSlot";
import {
  getCategoryBySlug,
  getCategories,
  getActiveProductsByCategory,
  getGuideBySlug,
  getCategoryComparison,
  isIndexable,
} from "@/lib/content/loader";
import { resolveCategoryDisplayLabels } from "@/lib/content/categoryDisplayLabels";
import { InlineMarkdown } from "@/components/content/InlineMarkdown";
import { isReservedSlug } from "@/config/reserved-slugs";

export async function generateStaticParams() {
  return getCategories()
    .filter((c) => !isReservedSlug(c.slug))
    .map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};
  const seo = resolveCategorySeo(category);
  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/supplements/${categorySlug}`,
    noindex: entityNoindex(category),
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const allActive = getActiveProductsByCategory(category.id);
  const featuredIds = new Set(category.featuredProductIds);
  const products = (
    featuredIds.size > 0
      ? category.featuredProductIds.map((id) => allActive.find((p) => p.id === id))
      : allActive
  ).filter((p): p is (typeof allActive)[number] => Boolean(p));

  const relatedGuides = category.relatedGuides
    .map((slug) => getGuideBySlug(slug))
    .filter((g) => g && g.status !== "archived")
    .map((g) => ({ slug: g!.slug, title: g!.title }));

  const displayLabels = resolveCategoryDisplayLabels(category);
  const categoryComparison = getCategoryComparison(categorySlug);

  return (
    <SidebarLayout
      sidebar={<AdSlot slotId="sidebarDesktop" pathname={`/supplements/${categorySlug}`} />}
    >
      <PageContainer className="py-0">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Supplements", href: "/supplements" },
            { label: category.name },
          ]}
          currentPath={`/supplements/${categorySlug}`}
        />
        {category.isPlaceholder && <PlaceholderBanner />}
        {!category.isPlaceholder && !isIndexable(category) && (
          <p className="mb-4 rounded-lg border border-warning-border bg-warning-bg px-4 py-2 text-sm text-warning-text">
            Draft category page — not indexed. This page is a preview only.
          </p>
        )}
        <h1 className="text-3xl font-bold text-heading">{category.pluralName}</h1>
        <p className="mt-3 text-foreground">
          <InlineMarkdown text={category.intro || category.description} />
        </p>
        <EditorialDates
          lastUpdated={category.editorial.lastUpdated}
          lastReviewed={category.editorial.lastReviewed}
        />

        {category.evaluationSummary && (
          <section className="mt-8 rounded-lg border border-border bg-surface p-4">
            <h2 className="text-lg font-semibold text-heading">What SuppCheckr evaluates</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              {category.evaluationSummary}
            </p>
          </section>
        )}

        {category.clusterScopeNote && (
          <section className="mt-6 rounded-lg border border-border bg-surface p-4">
            <h2 className="text-lg font-semibold text-heading">Coverage scope</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              <InlineMarkdown text={category.clusterScopeNote} />
            </p>
          </section>
        )}

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-heading">Ingredient reference</h2>
          <p className="mt-2 text-sm text-foreground">
            {category.ingredientSlug ? (
              <Link
                href={`/ingredients/${category.ingredientSlug}`}
                className="text-link hover:text-link-hover hover:underline"
              >
                {displayLabels.ingredientPageLinkLabel}
              </Link>
            ) : (
              "Ingredient link pending."
            )}
          </p>
        </section>

        {relatedGuides.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-semibold text-heading">Related guides</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground">
              {relatedGuides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="text-link hover:text-link-hover hover:underline"
                  >
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {category.buyingConsiderations.length > 0 && (
          <section className="mt-8 rounded-lg border border-border bg-surface p-4">
            <h2 className="text-lg font-semibold text-heading">Buying considerations</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground">
              {category.buyingConsiderations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {category.buyersGuideSlug && (
              <p className="mt-4 text-sm">
                <Link
                  href={`/guides/${category.buyersGuideSlug}`}
                  className="text-link hover:text-link-hover hover:underline"
                >
                  Read the full buyer&apos;s guide
                </Link>
              </p>
            )}
          </section>
        )}

        <section className="mt-10">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-heading">
              {isIndexable(category) ? "Product reviews" : "Product reviews (draft)"}
            </h2>
            {categoryComparison && (
              <Link
                href={`/supplements/${categorySlug}/compare`}
                className="text-sm text-link hover:text-link-hover hover:underline"
              >
                Open full comparison table
              </Link>
            )}
          </div>
          <CategoryProductTable
            products={products}
            categorySlug={categorySlug}
            displayLabels={displayLabels}
          />
          {products.some((product) => product.editorialReview?.summary) && (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-foreground">
              {products
                .filter((product) => product.editorialReview?.summary)
                .map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/supplements/${categorySlug}/products/${product.slug}`}
                      className="text-link hover:text-link-hover hover:underline"
                    >
                      {product.name}
                    </Link>
                    {" — "}
                    {product.editorialReview?.summary.split(/(?<=\.)\s/)[0]}
                  </li>
                ))}
            </ul>
          )}
        </section>

        {category.faq.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-heading">FAQ</h2>
            <dl className="mt-4 space-y-4">
              {category.faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-lg border border-border bg-surface p-4"
                >
                  <dt className="font-medium text-heading">{item.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-foreground">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {category.sources.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-heading">Sources</h2>
            <div className="mt-3">
              <SourcesList sources={category.sources} />
            </div>
          </section>
        )}

        <div className="mt-10">
          <AdSlot slotId="inContent" pathname={`/supplements/${categorySlug}`} />
        </div>

        <MedicalDisclaimer />
        <AffiliateDisclosure />
      </PageContainer>
    </SidebarLayout>
  );
}
