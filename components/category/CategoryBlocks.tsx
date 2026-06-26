import Link from "next/link";
import type { Category } from "@/lib/schemas/category";
import type { Product } from "@/lib/schemas/product";
import type { CategoryDisplayLabels } from "@/lib/content/categoryDisplayLabels";
import { defaultCategoryDisplayLabels } from "@/lib/content/categoryDisplayLabels";
import { ScoreBadge } from "@/components/rating/ScoreDisplay";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/supplements/${category.slug}`}
      className="block rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary/40 hover:bg-surface-elevated"
    >
      <h3 className="font-semibold text-heading">{category.name}</h3>
      <p className="mt-2 text-sm text-foreground">
        {category.shortDescription || "Category overview."}
      </p>
      {category.isPlaceholder && (
        <span className="mt-3 inline-block rounded bg-warning-bg px-2 py-0.5 text-xs text-warning-text">
          Shell placeholder
        </span>
      )}
      {!category.isPlaceholder && category.status === "review_ready" && (
        <span className="mt-3 inline-block rounded bg-warning-bg px-2 py-0.5 text-xs text-warning-text">
          Draft — not indexed
        </span>
      )}
    </Link>
  );
}

export function CategoryProductTable({
  products,
  categorySlug,
  displayLabels = defaultCategoryDisplayLabels,
}: {
  products: Pick<Product, "slug" | "name" | "isPlaceholder" | "status" | "rating" | "pricing">[];
  categorySlug: string;
  displayLabels?: CategoryDisplayLabels;
}) {
  if (products.length === 0) {
    return (
      <p className="rounded-lg border border-border bg-surface p-4 text-sm text-muted">
        No active products in this category yet.
      </p>
    );
  }

  const sorted = [...products].sort(
    (a, b) => b.rating.overallScore - a.rating.overallScore,
  );

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="min-w-full text-sm">
        <thead className="bg-table-header text-left">
          <tr>
            <th scope="col" className="px-4 py-3 font-medium text-heading">Product</th>
            <th scope="col" className="px-4 py-3 font-medium text-heading">Score</th>
            <th scope="col" className="px-4 py-3 font-medium text-heading">
              {displayLabels.priceNormalizationLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((p) => {
            const pricePerActiveDose = p.pricing.pricePerActiveDose ?? p.pricing.pricePerServing;
            return (
              <tr key={p.slug} className="border-t border-table-row-border">
                <td className="px-4 py-3">
                  <Link
                    href={`/supplements/${categorySlug}/products/${p.slug}`}
                    className="text-link hover:text-link-hover hover:underline"
                  >
                    {p.name}
                  </Link>
                  {p.isPlaceholder && (
                    <span className="ml-2 rounded bg-warning-bg px-1.5 py-0.5 text-xs text-warning-text">
                      Demo
                    </span>
                  )}
                  {!p.isPlaceholder && p.status === "review_ready" && (
                    <span className="ml-2 rounded bg-warning-bg px-1.5 py-0.5 text-xs text-warning-text">
                      Draft
                    </span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <ScoreBadge
                    score={p.rating.overallScore}
                    isDemo={p.isPlaceholder}
                    size="sm"
                  />
                </td>
                <td className="px-4 py-3 tabular-nums text-foreground">
                  ${pricePerActiveDose.toFixed(2)} <span className="text-muted">(dated)</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="border-t border-table-row-border px-4 py-3 text-xs text-muted">
        Manual prices with last-checked dates on each product page — check current price at the retailer.
      </p>
    </div>
  );
}