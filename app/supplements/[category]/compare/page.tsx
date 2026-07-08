import { notFound } from "next/navigation";
import Link from "next/link";
import { buildPageMetadata, entityNoindex } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/layout/SiteChrome";
import { SidebarLayout } from "@/components/layout/SiteChrome";
import {
  PlaceholderBanner,
  MedicalDisclaimer,
  EditorialDates,
  AffiliateDisclosure,
} from "@/components/trust/TrustModules";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { SourcesList } from "@/components/citations/ContentBlocks";
import { AdSlot } from "@/components/monetization/AdSlot";
import {
  getCategoryBySlug,
  getCategories,
  getProducts,
  getBrands,
  getCategoryComparison,
  getComparisons,
} from "@/lib/content/loader";
import { resolveCategoryDisplayLabels } from "@/lib/content/categoryDisplayLabels";

export async function generateStaticParams() {
  const comparisons = getComparisons().filter(
    (c) => c.type === "category_ranking" && c.status !== "archived",
  );
  return comparisons
    .map((c) => {
      const category = getCategories().find((cat) => cat.id === c.categoryId);
      return category ? { category: category.slug } : null;
    })
    .filter(Boolean) as { category: string }[];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const comparison = getCategoryComparison(categorySlug);
  if (!comparison) return { robots: { index: false } };
  return buildPageMetadata({
    title: comparison.title,
    description: comparison.subtitle,
    path: `/supplements/${categorySlug}/compare`,
    noindex: entityNoindex(comparison),
  });
}

export default async function CategoryComparePage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const comparison = getCategoryComparison(categorySlug);
  if (!category || !comparison) notFound();

  const allProducts = getProducts();
  const products = comparison.productIds
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean) as typeof allProducts;
  const brands = getBrands();

  const criterionLabelMap = new Map(
    comparison.productCriterionLabels.map((entry) => [entry.productId, entry.labels]),
  );

  const displayLabels = resolveCategoryDisplayLabels(category);

  return (
    <SidebarLayout
      sidebar={
        <AdSlot slotId="sidebarDesktop" pathname={`/supplements/${categorySlug}/compare`} />
      }
    >
      <PageContainer className="py-0">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Supplements", href: "/supplements" },
            { label: category.name, href: `/supplements/${categorySlug}` },
            { label: "Compare" },
          ]}
        />
        {comparison.isPlaceholder && <PlaceholderBanner />}
        {!comparison.isPlaceholder && comparison.status === "review_ready" && (
          <p className="mb-4 rounded-lg border border-warning-border bg-warning-bg px-4 py-2 text-sm text-warning-text">
            Draft comparison — not indexed until Phase 2F QA and publication.
          </p>
        )}
        <h1 className="text-3xl font-bold text-heading">{comparison.title}</h1>
        <p className="mt-3 text-foreground">{comparison.subtitle}</p>
        {comparison.orderingNote && (
          <p className="mt-3 text-sm text-foreground">{comparison.orderingNote}</p>
        )}
        <EditorialDates
          lastUpdated={comparison.editorial.lastUpdated}
          lastReviewed={comparison.editorial.lastReviewed}
        />
        {comparison.methodologyNote && (
          <section className="mt-6 rounded-lg border border-border bg-surface p-4 text-sm leading-relaxed text-foreground">
            <h2 className="text-sm font-semibold text-heading">How to use this comparison</h2>
            <p className="mt-2">
              This table is a label and sourcing tool — not a medical recommendation. Scores summarize dose transparency,
              form clarity, testing documentation, additives, and dated manual price context using our methodology. They do
              not determine which product is right for you or suitable for any health condition. Use filters to re-sort by
              price per active dose or testing status when those criteria matter more to you.
            </p>
            <p className="mt-3">{comparison.methodologyNote}</p>
            <p className="mt-3">
              <Link href="/methodology" className="text-link hover:text-link-hover hover:underline">
                Read scoring methodology
              </Link>
              {category.ingredientSlug && (
                <>
                  {" · "}
                  <Link
                    href={`/ingredients/${category.ingredientSlug}`}
                    className="text-link hover:text-link-hover hover:underline"
                  >
                    {category.ingredientPageLinkLabel ?? `${category.name} ingredient reference`}
                  </Link>
                </>
              )}
              {category.buyersGuideSlug && (
                <>
                  {" · "}
                  <Link
                    href={`/guides/${category.buyersGuideSlug}`}
                    className="text-link hover:text-link-hover hover:underline"
                  >
                    Buying guide
                  </Link>
                </>
              )}
            </p>
          </section>
        )}

        {comparison.caveats.length > 0 && (
          <section className="mt-6 rounded-lg border border-border bg-surface p-4">
            <h2 className="text-sm font-semibold text-heading">Comparison caveats</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground">
              {comparison.caveats.map((caveat) => (
                <li key={caveat}>{caveat}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-8">
          <ComparisonTable
            products={products}
            brands={brands}
            categorySlug={categorySlug}
            productCriterionLabels={criterionLabelMap}
            priceCheckedAt={comparison.priceCheckedAt}
            displayLabels={displayLabels}
          />
        </div>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-heading">Individual product reviews</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground">
            {products.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/supplements/${categorySlug}/products/${product.slug}`}
                  className="text-link hover:text-link-hover hover:underline"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10">
          <AdSlot slotId="inContent" pathname={`/supplements/${categorySlug}/compare`} />
        </div>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-heading">Sources</h2>
          <div className="mt-3">
            <SourcesList sources={comparison.sources} />
          </div>
        </section>
        <AffiliateDisclosure />
        <MedicalDisclaimer />
      </PageContainer>
    </SidebarLayout>
  );
}
