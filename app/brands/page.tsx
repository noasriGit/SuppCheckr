import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { PageContainer } from "@/components/layout/SiteChrome";
import { AffiliateDisclosure, MedicalDisclaimer } from "@/components/trust/TrustModules";
import {
  getBrandPageProducts,
  getIndexableBrands,
} from "@/lib/content/loader";

export const metadata = buildPageMetadata({
  title: "Supplement Brands | SuppCheckr",
  description:
    "Brand profiles for supplements with published SuppCheckr product reviews in Creatine and Magnesium categories.",
  path: "/brands",
  noindex: true,
});

export default function BrandsIndexPage() {
  const brands = getIndexableBrands()
    .map((brand) => ({
      brand,
      products: getBrandPageProducts(brand),
    }))
    .filter(({ products }) => products.length > 0)
    .sort((a, b) => a.brand.name.localeCompare(b.brand.name));

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-heading">Brands</h1>
      <p className="mt-3 max-w-2xl text-foreground">
        Brand pages summarize products currently reviewed by SuppCheckr. Each profile links to
        published product reviews and notes transparency or testing context where available.
      </p>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Profiles reflect our published Creatine and Magnesium coverage — not a complete catalog
        of every product a brand sells.
      </p>

      <ul className="mt-8 space-y-3">
        {brands.map(({ brand, products }) => (
          <li key={brand.id} className="rounded-lg border border-border bg-surface p-4">
            <Link
              href={`/brands/${brand.slug}`}
              className="font-medium text-link hover:text-link-hover hover:underline"
            >
              {brand.name}
            </Link>
            <p className="mt-1 text-sm text-muted">
              {products.length} published review{products.length === 1 ? "" : "s"}
            </p>
            {brand.description && (
              <p className="mt-2 text-sm text-foreground">
                {brand.description.slice(0, 180)}
                {brand.description.length > 180 ? "…" : ""}
              </p>
            )}
          </li>
        ))}
      </ul>

      <AffiliateDisclosure />
      <MedicalDisclaimer />
    </PageContainer>
  );
}
