import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildPageMetadata, entityNoindex } from "@/lib/seo/metadata";
import { seoTemplates } from "@/config/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/layout/SiteChrome";
import {
  PlaceholderBanner,
  MedicalDisclaimer,
  EditorialDates,
  AffiliateDisclosure,
} from "@/components/trust/TrustModules";
import { SourcesList } from "@/components/citations/ContentBlocks";
import { ProductCard } from "@/components/product/ProductBlocks";
import {
  getIngredients,
  getIngredientBySlug,
  getGuideBySlug,
  getCategoryBySlug,
  getProducts,
  getBrands,
  isIndexable,
  isActiveContent,
} from "@/lib/content/loader";

export async function generateStaticParams() {
  return getIngredients()
    .filter((i) => i.status !== "archived")
    .map((i) => ({ ingredientSlug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ingredientSlug: string }>;
}) {
  const { ingredientSlug } = await params;
  const ingredient = getIngredientBySlug(ingredientSlug);
  if (!ingredient) return {};
  const seo = seoTemplates.ingredient(ingredient.name);
  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/ingredients/${ingredientSlug}`,
    noindex: entityNoindex(ingredient),
  });
}

function ProseSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-border bg-surface p-4">
      <h2 className="text-lg font-semibold text-heading">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-foreground">{children}</p>
    </section>
  );
}

export default async function IngredientPage({
  params,
}: {
  params: Promise<{ ingredientSlug: string }>;
}) {
  const { ingredientSlug } = await params;
  const ingredient = getIngredientBySlug(ingredientSlug);
  if (!ingredient || ingredient.status === "archived") notFound();

  const category = ingredient.categories[0]
    ? getCategoryBySlug(ingredient.categories[0])
    : undefined;

  const relatedGuides = ingredient.relatedGuideSlugs
    .map((slug) => getGuideBySlug(slug))
    .filter((g) => g && g.status !== "archived");

  const relatedProducts = ingredient.relatedProductIds
    .map((id) => getProducts().find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p && isActiveContent(p) && !p.isPlaceholder));

  const brands = getBrands();

  return (
    <PageContainer>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Ingredients", href: "/ingredients" },
          { label: ingredient.name },
        ]}
      />
      {ingredient.isPlaceholder && <PlaceholderBanner />}
      <h1 className="text-3xl font-bold text-heading">{ingredient.name}</h1>
      <p className="mt-2 text-sm text-muted">
        Educational ingredient reference — not medical advice.
      </p>
      <EditorialDates
        lastUpdated={ingredient.editorial.lastUpdated}
        lastReviewed={ingredient.editorial.lastReviewed}
      />

      <div className="mt-8 space-y-4">
        <ProseSection title="What it is">
          {ingredient.evidenceSummary || "—"}
        </ProseSection>
        <ProseSection title="Common forms on labels">
          {ingredient.commonForms.join(", ") || "—"}
        </ProseSection>
        <ProseSection title="Typical dosage context (not a personal recommendation)">
          {ingredient.typicalDosageRange || "—"}
        </ProseSection>
        <ProseSection title="Safety context">
          {ingredient.safetyNotes || "—"}
        </ProseSection>
        <ProseSection title="Interactions and medical questions">
          {ingredient.interactions || "—"}
        </ProseSection>
      </div>

      {relatedProducts.length > 0 && category && (
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-heading">Related product reviews</h2>
          {!isIndexable(category) && (
            <p className="mt-2 text-sm text-muted">Draft reviews — not indexed until publication.</p>
          )}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                categorySlug={category.slug}
                brandName={brands.find((b) => b.id === product.brandId)?.name ?? "Unknown brand"}
              />
            ))}
          </div>
        </section>
      )}

      {(relatedGuides.length > 0 || category) && (
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-heading">Related reading</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground">
            {category && (
              <li>
                <Link
                  href={`/supplements/${category.slug}`}
                  className="text-link hover:text-link-hover hover:underline"
                >
                  {category.name} supplements overview
                </Link>
                {!isIndexable(category) && (
                  <span className="text-muted"> (draft — not indexed)</span>
                )}
              </li>
            )}
            {category?.slug === "creatine" && (
              <li>
                <Link
                  href="/supplements/creatine/compare"
                  className="text-link hover:text-link-hover hover:underline"
                >
                  Creatine monohydrate product comparison
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
      )}

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-heading">Sources</h2>
        <div className="mt-3">
          <SourcesList sources={ingredient.sources} />
        </div>
      </section>
      <AffiliateDisclosure />
      <MedicalDisclaimer />
    </PageContainer>
  );
}
