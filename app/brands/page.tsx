import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { PageContainer } from "@/components/layout/SiteChrome";
import { AffiliateDisclosure, MedicalDisclaimer } from "@/components/trust/TrustModules";
import { getCatalogBrands, isIndexable } from "@/lib/content/loader";

export const metadata = buildPageMetadata({
  title: "Supplement Brands | SuppCheckr",
  description: "Brand profiles for supplements reviewed on SuppCheckr.",
  path: "/brands",
  noindex: true,
});

export default function BrandsIndexPage() {
  const brands = getCatalogBrands();

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-heading">Brands</h1>
      <p className="mt-3 text-foreground">
        Brand profiles linked to SuppCheckr product reviews.
      </p>
      <ul className="mt-8 space-y-3">
        {brands.map((brand) => (
          <li key={brand.id} className="rounded-lg border border-border bg-surface p-3">
            <Link
              href={`/brands/${brand.slug}`}
              className="text-link hover:text-link-hover hover:underline"
            >
              {brand.name}
            </Link>
            {!isIndexable(brand) && (
              <span className="ml-2 text-xs text-muted">Draft — not indexed</span>
            )}
          </li>
        ))}
      </ul>
      <AffiliateDisclosure />
      <MedicalDisclaimer />
    </PageContainer>
  );
}
