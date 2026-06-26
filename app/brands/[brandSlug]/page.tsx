import { notFound } from "next/navigation";
import { buildPageMetadata, entityNoindex } from "@/lib/seo/metadata";
import { seoTemplates } from "@/config/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/layout/SiteChrome";
import {
  EditorialDates,
  AffiliateDisclosure,
  MedicalDisclaimer,
} from "@/components/trust/TrustModules";
import { SourcesList } from "@/components/citations/ContentBlocks";
import { ProductCard } from "@/components/product/ProductBlocks";
import {
  getBrands,
  getBrandBySlug,
  getProducts,
  getCategories,
  isActiveContent,
} from "@/lib/content/loader";

export async function generateStaticParams() {
  return getBrands()
    .filter((b) => isActiveContent(b) && !b.isPlaceholder)
    .map((b) => ({ brandSlug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brandSlug: string }>;
}) {
  const { brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);
  if (!brand) return {};
  const seo = seoTemplates.brand(brand.name);
  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/brands/${brandSlug}`,
    noindex: entityNoindex(brand),
  });
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brandSlug: string }>;
}) {
  const { brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);
  if (!brand || !isActiveContent(brand) || brand.isPlaceholder) notFound();

  const products = getProducts().filter(
    (p) => p.brandId === brand.id && isActiveContent(p) && !p.isPlaceholder,
  );

  return (
    <PageContainer>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Brands", href: "/brands" },
          { label: brand.name },
        ]}
      />
      {brand.status === "review_ready" && (
        <p className="mb-4 rounded-lg border border-warning-border bg-warning-bg px-4 py-2 text-sm text-warning-text">
          Draft brand profile — not indexed until publication.
        </p>
      )}
      <h1 className="text-3xl font-bold text-heading">{brand.name}</h1>
      <p className="mt-3 text-foreground">{brand.description}</p>
      <EditorialDates
        lastUpdated={brand.editorial.lastUpdated}
        lastReviewed={brand.editorial.lastReviewed}
      />

      <section className="mt-8 space-y-3 rounded-lg border border-border bg-surface p-4 text-sm text-foreground">
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={brand.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link underline hover:text-link-hover"
          >
            {brand.website}
          </a>
        </p>
        <p>
          <strong>Categories covered:</strong> {brand.categories.join(", ")}
        </p>
        {brand.testingNotes && (
          <p>
            <strong>Testing notes:</strong> {brand.testingNotes}
          </p>
        )}
        {brand.transparencyNotes && (
          <p>
            <strong>Transparency notes:</strong> {brand.transparencyNotes}
          </p>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-heading">Product reviews</h2>
        {products.length === 0 ? (
          <p className="mt-4 text-sm text-muted">No active product reviews for this brand yet.</p>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {products.map((product) => {
              const category = getCategories().find((c) => c.id === product.categoryId);
              const categorySlug = category?.slug ?? product.categoryId;
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  categorySlug={categorySlug}
                  brandName={brand.name}
                />
              );
            })}
          </div>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-heading">Sources</h2>
        <div className="mt-3">
          <SourcesList sources={brand.sources} />
        </div>
      </section>
      <AffiliateDisclosure />
      <MedicalDisclaimer />
    </PageContainer>
  );
}
