import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { PageContainer } from "@/components/layout/SiteChrome";
import {
  getCategories,
  getIndexableCategories,
  getIndexableComparisons,
} from "@/lib/content/loader";

export const metadata = buildPageMetadata({
  title: "Supplement Comparisons | SuppCheckr",
  description:
    "Published Creatine, Magnesium, and Vitamin C comparison tables by label transparency, dosage clarity, testing, and dated value.",
  path: "/compare",
});

const comparisonBoundaries = [
  "Label clarity and ingredient disclosure on the product label",
  "Source quality and how claims are supported in our reviews",
  "Third-party testing documentation (verified, claimed, or unknown)",
  "Price normalization using dated manual prices and category-specific rules",
  "No universal “best for everyone” ranking or condition-specific suitability claims",
] as const;

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

export default function CompareIndexPage() {
  const comparisons = getIndexableComparisons();
  const categorySlugById = new Map(getCategories().map((c) => [c.id, c.slug]));
  const categoryNameById = new Map(getIndexableCategories().map((c) => [c.id, c.name]));

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-heading">Comparisons</h1>
      <p className="mt-3 max-w-2xl text-foreground">
        SuppCheckr comparison tables evaluate supplements by transparent label criteria, dated
        manual pricing, and category-specific scoring — not medical outcomes or personal
        suitability. Published tables cover Creatine monohydrate, Magnesium, and Vitamin C.
      </p>

      <section className="mt-8 rounded-lg border border-border bg-surface p-5">
        <h2 className="text-lg font-semibold text-heading">Comparison boundaries</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-foreground">
          {comparisonBoundaries.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          Sort order reflects overall SuppCheckr scores within a category. See{" "}
          <Link href="/methodology" className="text-link hover:text-link-hover hover:underline">
            methodology
          </Link>{" "}
          for criteria weights and testing-status definitions.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-heading">Published comparison tables</h2>
        <ul className="mt-4 space-y-3">
          {comparisons.map((c) => {
            const categoryName = c.categoryId
              ? categoryNameById.get(c.categoryId)
              : undefined;
            return (
              <li key={c.id} className="rounded-lg border border-border bg-surface p-4">
                {categoryName && (
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">
                    {categoryName}
                  </p>
                )}
                <Link
                  href={comparisonHref(c, categorySlugById)}
                  className="font-medium text-link hover:text-link-hover hover:underline"
                >
                  {c.title}
                </Link>
                {c.subtitle && (
                  <p className="mt-1 text-sm text-muted">{c.subtitle}</p>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </PageContainer>
  );
}
