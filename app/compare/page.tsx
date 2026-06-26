import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { PageContainer } from "@/components/layout/SiteChrome";
import {
  getCategories,
  getIndexableComparisons,
} from "@/lib/content/loader";

export const metadata = buildPageMetadata({
  title: "Supplement Comparisons | SuppCheckr",
  description:
    "Browse published SuppCheckr supplement comparisons by label transparency, dosage clarity, testing, and value.",
  path: "/compare",
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

export default function CompareIndexPage() {
  const comparisons = getIndexableComparisons();
  const categorySlugById = new Map(getCategories().map((c) => [c.id, c.slug]));

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-heading">Comparisons</h1>
      <p className="mt-3 max-w-2xl text-foreground">
        Published SuppCheckr comparison tables evaluate supplements by label transparency,
        dosage clarity, third-party testing status, additives, dated manual value, and
        evidence alignment — not medical outcomes or personal suitability.
      </p>
      {comparisons.length === 0 ? (
        <p className="mt-8 text-sm text-muted">No published comparisons yet.</p>
      ) : (
        <ul className="mt-8 space-y-3">
          {comparisons.map((c) => (
            <li key={c.id} className="rounded-lg border border-border bg-surface p-3">
              <Link
                href={comparisonHref(c, categorySlugById)}
                className="text-link hover:text-link-hover hover:underline"
              >
                {c.title}
              </Link>
              {c.subtitle && (
                <p className="mt-1 text-sm text-muted">{c.subtitle}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </PageContainer>
  );
}
