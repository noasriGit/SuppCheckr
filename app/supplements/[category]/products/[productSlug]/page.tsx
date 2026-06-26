import { notFound } from "next/navigation";
import Link from "next/link";
import { buildPageMetadata, entityNoindex } from "@/lib/seo/metadata";
import { seoTemplates } from "@/config/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/layout/SiteChrome";
import { SidebarLayout } from "@/components/layout/SiteChrome";
import {
  PlaceholderBanner,
  MedicalDisclaimer,
  EditorialDates,
  AffiliateDisclosure,
} from "@/components/trust/TrustModules";
import { ScoreBadge, ScoreBreakdown, ScoreDisclaimer } from "@/components/rating/ScoreDisplay";
import {
  SupplementFactsTable,
  ProductCard,
  ProductImage,
} from "@/components/product/ProductBlocks";
import { ProsCons, SourcesList } from "@/components/citations/ContentBlocks";
import { AffiliateButton } from "@/components/monetization/AffiliateButton";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { AdSlot } from "@/components/monetization/AdSlot";
import {
  getCategoryBySlug,
  getProductBySlug,
  getActiveProductsByCategory,
  getCategories,
  getBrands,
  getCategoryComparison,
  getGuideBySlug,
  isActiveContent,
} from "@/lib/content/loader";
import { resolveCategoryDisplayLabels } from "@/lib/content/categoryDisplayLabels";

export async function generateStaticParams() {
  const params: { category: string; productSlug: string }[] = [];
  for (const cat of getCategories()) {
    for (const product of getActiveProductsByCategory(cat.id)) {
      params.push({ category: cat.slug, productSlug: product.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; productSlug: string }>;
}) {
  const { category, productSlug } = await params;
  const product = getProductBySlug(category, productSlug);
  if (!product) return {};
  const brand = getBrands().find((b) => b.id === product.brandId);
  const seo = seoTemplates.product(product.name, brand?.name ?? "Brand");
  return buildPageMetadata({
    title: product.seo.title ?? seo.title,
    description: product.seo.description ?? seo.description,
    path: `/supplements/${category}/products/${productSlug}`,
    noindex: entityNoindex(product),
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; productSlug: string }>;
}) {
  const { category: categorySlug, productSlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const product = getProductBySlug(categorySlug, productSlug);
  if (!category || !product || !isActiveContent(product)) notFound();

  const brand = getBrands().find((b) => b.id === product.brandId);
  const related = product.relatedProductIds
    .map((id) => getActiveProductsByCategory(category.id).find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const comparison = getCategoryComparison(categorySlug);
  const comparisonProducts =
    comparison?.productIds
      .map((id) => getActiveProductsByCategory(category.id).find((p) => p.id === id))
      .filter((p): p is NonNullable<typeof p> => Boolean(p)) ?? [];

  const criterionLabelMap = comparison
    ? new Map(comparison.productCriterionLabels.map((e) => [e.productId, e.labels]))
    : undefined;

  const relatedGuides = category.relatedGuides
    .map((slug) => getGuideBySlug(slug))
    .filter((g) => g && g.status !== "archived");

  const displayLabels = resolveCategoryDisplayLabels(category);

  return (
    <SidebarLayout
      sidebar={
        <AdSlot
          slotId="sidebarDesktop"
          pathname={`/supplements/${categorySlug}/products/${productSlug}`}
        />
      }
    >
      <PageContainer className="py-0">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Supplements", href: "/supplements" },
            { label: category.name, href: `/supplements/${categorySlug}` },
            { label: product.name },
          ]}
        />
        {product.isPlaceholder && <PlaceholderBanner />}
        {!product.isPlaceholder && product.status === "review_ready" && (
          <p className="mb-4 rounded-lg border border-warning-border bg-warning-bg px-4 py-2 text-sm text-warning-text">
            Draft product review — not indexed until Phase 2F QA and publication.
          </p>
        )}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="text-3xl font-bold text-heading">{product.name}</h1>
            <p className="mt-2 text-foreground">
              by{" "}
              {brand ? (
                <Link
                  href={`/brands/${brand.slug}`}
                  className="text-link hover:text-link-hover hover:underline"
                >
                  {brand.name}
                </Link>
              ) : (
                "Unknown brand"
              )}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <ScoreBadge
              score={product.rating.overallScore}
              isDemo={product.isPlaceholder}
              size="lg"
            />
            <ScoreDisclaimer text={product.evidenceNotes} />
          </div>
        </div>
        <EditorialDates
          lastUpdated={product.editorial.lastUpdated}
          lastReviewed={product.editorial.lastReviewed}
        />

        <section className="mt-6 rounded-lg border border-border bg-surface p-4 text-sm text-foreground">
          <h2 className="font-semibold text-heading">{displayLabels.exploreCategoryHeading}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <Link
                href={`/supplements/${categorySlug}`}
                className="text-link hover:text-link-hover hover:underline"
              >
                {category.pluralName} category overview
              </Link>
            </li>
            {comparison && (
              <li>
                <Link
                  href={`/supplements/${categorySlug}/compare`}
                  className="text-link hover:text-link-hover hover:underline"
                >
                  {displayLabels.comparisonCtaLabel}
                </Link>
              </li>
            )}
            {category.ingredientSlug && (
              <li>
                <Link
                  href={`/ingredients/${category.ingredientSlug}`}
                  className="text-link hover:text-link-hover hover:underline"
                >
                  {displayLabels.ingredientReferenceLabel}
                </Link>
              </li>
            )}
            {relatedGuides.map((guide) =>
              guide ? (
                <li key={guide.slug}>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="text-link hover:text-link-hover hover:underline"
                  >
                    {guide.title}
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <ProductImage product={product} />
            <SupplementFactsTable product={product} displayLabels={displayLabels} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-heading">Score breakdown</h2>
            <div className="mt-4">
              <ScoreBreakdown
                scores={product.rating.criteriaScores}
                isDemo={product.isPlaceholder}
              />
            </div>
          </div>
        </div>

        <section className="mt-10">
          <ProsCons pros={product.pros} cons={product.cons} />
        </section>

        {product.labelTransparencyNotes && (
          <section className="mt-10 rounded-lg border border-border bg-surface p-4 text-sm text-foreground">
            <h2 className="font-semibold text-heading">Label clarity notes</h2>
            <p className="mt-2 leading-relaxed">{product.labelTransparencyNotes}</p>
          </section>
        )}

        <section className="mt-10 grid gap-6 text-sm text-foreground md:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="font-medium text-heading">May fit if you want</h3>
            <ul className="mt-2 list-disc pl-5">
              {product.bestFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="font-medium text-heading">May not fit if</h3>
            <ul className="mt-2 list-disc pl-5">
              {product.avoidIf.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-heading">Check current price at retailer</h2>
          <p className="mt-2 text-sm text-muted">
            Manual price ${product.pricing.msrp.toFixed(2)} observed on{" "}
            {product.pricing.lastPriceCheckedAt}. Prices change — verify at the retailer.
          </p>
          <div className="mt-4">
            <AffiliateButton
              url={product.retailers[0]?.url ?? "#"}
              pathname={`/supplements/${categorySlug}/products/${productSlug}`}
            />
          </div>
        </section>

        {comparisonProducts.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-heading">Compare in this cluster</h2>
            <p className="mt-2 text-sm text-muted">
              Sorted by SuppCheckr score by default — not a personal recommendation.
            </p>
            <div className="mt-4">
              <ComparisonTable
                products={comparisonProducts}
                brands={getBrands()}
                categorySlug={categorySlug}
                productCriterionLabels={criterionLabelMap}
                priceCheckedAt={comparison?.priceCheckedAt}
                displayLabels={displayLabels}
              />
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-heading">Related products in this cluster</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  categorySlug={categorySlug}
                  brandName={
                    getBrands().find((b) => b.id === p.brandId)?.name ?? "Unknown brand"
                  }
                />
              ))}
            </div>
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-heading">Sources</h2>
          <div className="mt-3">
            <SourcesList sources={product.sources} />
          </div>
        </section>

        <AffiliateDisclosure />
        <MedicalDisclaimer />
      </PageContainer>
    </SidebarLayout>
  );
}
