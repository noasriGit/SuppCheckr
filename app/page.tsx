import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { seoTemplates } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { PageContainer } from "@/components/layout/SiteChrome";
import { SidebarLayout } from "@/components/layout/SiteChrome";
import { CategoryCard } from "@/components/category/CategoryBlocks";
import { ProductCard } from "@/components/product/ProductBlocks";
import { AdSlot } from "@/components/monetization/AdSlot";
import { AffiliateDisclosure } from "@/components/trust/TrustModules";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import {
  getCategories,
  getBrands,
  getCategoryBySlug,
  getActiveProductsByCategory,
  getIndexableComparisons,
  isIndexable,
} from "@/lib/content/loader";

export const metadata = buildPageMetadata({
  title: seoTemplates.home.title,
  description: seoTemplates.home.description,
  path: "/",
});

function comparisonHref(
  comparison: { type: string; slug: string; categoryId?: string | null },
  categorySlugById: Map<string, string>,
): string {
  if (comparison.type === "category_ranking" && comparison.categoryId) {
    const slug = categorySlugById.get(comparison.categoryId);
    if (slug) return `/supplements/${slug}/compare`;
  }
  return `/compare/${comparison.slug}`;
}

export default function HomePage() {
  const categories = getCategories().filter((c) => c.featured);
  const allCategories = getCategories();
  const categorySlugById = new Map(allCategories.map((c) => [c.id, c.slug]));
  const creatineCategory = getCategoryBySlug("creatine");
  const creatineProducts = creatineCategory
    ? creatineCategory.featuredProductIds
        .map((id) =>
          getActiveProductsByCategory(creatineCategory.id).find((p) => p.id === id),
        )
        .filter((p): p is NonNullable<typeof p> => Boolean(p && isIndexable(p)))
    : [];
  const brands = getBrands();
  const brandMap = new Map(brands.map((b) => [b.id, b]));
  const comparisons = getIndexableComparisons();

  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-surface-elevated to-background">
        <PageContainer className="py-12 md:py-16">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            {siteConfig.siteMode} mode
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-heading md:text-5xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground">
            {siteConfig.description}
          </p>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            SuppCheckr has published its first evidence-aware Creatine monohydrate content
            cluster in prelaunch mode. More supplement categories are planned. Product images
            use label-first placeholders where product photos are not shown.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/supplements/creatine"
              className="rounded-lg bg-primary-muted px-5 py-2.5 text-sm font-medium text-heading transition-colors hover:bg-primary-hover"
            >
              Browse Creatine reviews
            </Link>
            <Link
              href="/methodology"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-surface"
            >
              How ratings work
            </Link>
          </div>
        </PageContainer>
      </section>

      <SidebarLayout sidebar={<AdSlot slotId="sidebarDesktop" pathname="/" />}>
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-heading">Find supplements</h2>
          <p className="mt-2 text-sm text-foreground">
            Search published SuppCheckr pages, including the Creatine cluster, guides, and
            category hubs.
          </p>
          <Link
            href="/search"
            className="mt-4 inline-flex w-full max-w-md items-center rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted transition-colors hover:border-primary/40 hover:text-foreground"
          >
            Search products, ingredients, categories…
          </Link>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-heading">Supplement categories</h2>
          <p className="mt-2 text-sm text-muted">
            Creatine monohydrate is the first published category. Additional categories are
            in development.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-heading">Creatine product reviews</h2>
          <p className="mt-2 text-sm text-muted">
            Published reviews compare label transparency, dosage clarity, third-party testing
            status, additives, dated manual value, and evidence alignment — not medical
            outcomes or personal suitability.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {creatineProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                categorySlug="creatine"
                brandName={brandMap.get(product.brandId)?.name ?? "Unknown brand"}
              />
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-lg border border-border bg-surface p-5">
          <h2 className="text-xl font-semibold text-heading">How ratings work</h2>
          <p className="mt-2 text-sm text-foreground">
            SuppCheckr scores supplements out of 100 using transparent criteria including
            ingredient transparency, dose transparency, evidence alignment, testing
            documentation, dated price value, additives, and label clarity. Scores are not
            medical advice and do not guarantee results.
          </p>
          <Link href="/methodology" className="mt-3 inline-block text-sm text-link hover:text-link-hover hover:underline">
            Read full methodology
          </Link>
        </section>

        {comparisons.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-heading">Published comparisons</h2>
            <p className="mt-2 text-sm text-muted">
              Side-by-side tables use SuppCheckr scoring criteria and dated manual pricing.
              Sort order reflects overall score — not medical suitability or broad product
              recommendations.
            </p>
            <ul className="mt-4 space-y-2">
              {comparisons.map((c) => (
                <li key={c.id}>
                  <Link
                    href={comparisonHref(c, categorySlugById)}
                    className="text-link hover:text-link-hover hover:underline"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-10 rounded-lg border border-border bg-surface p-4">
          <h2 className="font-medium text-heading">Trust & disclaimer</h2>
          <p className="mt-2 text-sm text-foreground">
            SuppCheckr provides informational content only. Consult a healthcare
            professional before starting supplements.
          </p>
          <Link href="/medical-disclaimer" className="mt-2 inline-block text-sm text-link hover:text-link-hover hover:underline">
            Medical disclaimer
          </Link>
        </section>

        <section className="mb-10">
          <AffiliateDisclosure />
        </section>

        <section className="rounded-lg border border-border bg-surface p-6">
          <h2 className="font-semibold text-heading">Newsletter (placeholder)</h2>
          <p className="mt-2 text-sm text-foreground">
            Email capture infrastructure for deal alerts, new reviews, and category updates.
          </p>
          <NewsletterSignup />
        </section>
      </SidebarLayout>
    </>
  );
}
