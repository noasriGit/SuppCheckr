import { notFound } from "next/navigation";
import { buildPageMetadata, entityNoindex } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/layout/SiteChrome";
import {
  PlaceholderBanner,
  MedicalDisclaimer,
  EditorialDates,
  AffiliateDisclosure,
} from "@/components/trust/TrustModules";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { SourcesList } from "@/components/citations/ContentBlocks";
import {
  getComparisons,
  getComparisonBySlug,
  getProducts,
  getBrands,
  getCategories,
} from "@/lib/content/loader";

export async function generateStaticParams() {
  return getComparisons()
    .filter((c) => c.type !== "category_ranking" && c.status !== "archived")
    .map((c) => ({ comparisonSlug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ comparisonSlug: string }>;
}) {
  const { comparisonSlug } = await params;
  const comparison = getComparisonBySlug(comparisonSlug);
  if (!comparison) return {};
  return buildPageMetadata({
    title: comparison.title,
    description: comparison.subtitle,
    path: `/compare/${comparisonSlug}`,
    noindex: entityNoindex(comparison),
  });
}

export default async function HeadToHeadPage({
  params,
}: {
  params: Promise<{ comparisonSlug: string }>;
}) {
  const { comparisonSlug } = await params;
  const comparison = getComparisonBySlug(comparisonSlug);
  if (!comparison || comparison.type === "category_ranking" || comparison.status === "archived") {
    notFound();
  }

  const allProducts = getProducts();
  const products = comparison.productIds
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean) as typeof allProducts;
  const brands = getBrands();
  const category = comparison.categoryId
    ? getCategories().find((c) => c.id === comparison.categoryId)
    : undefined;

  return (
    <PageContainer>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Compare", href: "/compare" },
          { label: comparison.title },
        ]}
      />
      {comparison.isPlaceholder && <PlaceholderBanner />}
      <h1 className="text-3xl font-bold text-heading">{comparison.title}</h1>
      <p className="mt-3 text-foreground">{comparison.subtitle}</p>
      <EditorialDates
        lastUpdated={comparison.editorial.lastUpdated}
        lastReviewed={comparison.editorial.lastReviewed}
      />
      <div className="mt-8">
        <ComparisonTable
          products={products}
          brands={brands}
          categorySlug={category?.slug ?? "creatine"}
        />
      </div>
      <section className="mt-10 rounded-lg border border-dashed border-border bg-surface p-4 text-sm text-foreground">
        Verdict placeholder — non-medical editorial summary slot for Phase 2.
      </section>
      <section className="mt-8">
        <SourcesList sources={comparison.sources} />
      </section>
      <AffiliateDisclosure />
      <MedicalDisclaimer />
    </PageContainer>
  );
}
