"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/schemas/product";
import type { Brand } from "@/lib/schemas/brand";
import type { CategoryDisplayLabels } from "@/lib/content/categoryDisplayLabels";
import { defaultCategoryDisplayLabels } from "@/lib/content/categoryDisplayLabels";
import { ScoreBadge } from "@/components/rating/ScoreDisplay";
import { MonetizationSafeZone } from "@/components/monetization/AdSlot";

type SortKey = "overallScore" | "pricePerServing" | "pricePerActiveDose";
type FilterThirdParty = "all" | "verified" | "claimed" | "not_claimed";

const selectClass =
  "ml-1 rounded border border-input-border bg-input-bg px-2 py-1 text-foreground";

function testingLabel(product: Product): string {
  const status = product.thirdPartyTesting.status;
  if (status === "verified") return "Verified";
  if (status === "claimed") return "Claimed";
  if (status === "not_claimed") return "Not claimed";
  return "Unknown";
}

export function ComparisonTable({
  products,
  brands,
  categorySlug,
  productCriterionLabels,
  priceCheckedAt,
  displayLabels = defaultCategoryDisplayLabels,
}: {
  products: Product[];
  brands: Brand[];
  categorySlug?: string;
  productCriterionLabels?: Map<string, string[]>;
  priceCheckedAt?: string;
  displayLabels?: CategoryDisplayLabels;
}) {
  const [sortKey, setSortKey] = useState<SortKey>("overallScore");
  const [sortAsc, setSortAsc] = useState(false);
  const [thirdPartyFilter, setThirdPartyFilter] = useState<FilterThirdParty>("all");

  const brandMap = useMemo(
    () => new Map(brands.map((b) => [b.id, b])),
    [brands],
  );

  const filtered = useMemo(() => {
    let list = [...products];
    if (thirdPartyFilter === "verified") {
      list = list.filter((p) => p.thirdPartyTesting.status === "verified");
    } else if (thirdPartyFilter === "claimed") {
      list = list.filter((p) => p.thirdPartyTesting.status === "claimed");
    } else if (thirdPartyFilter === "not_claimed") {
      list = list.filter(
        (p) =>
          p.thirdPartyTesting.status === "not_claimed" ||
          p.thirdPartyTesting.status === "unknown",
      );
    }
    list.sort((a, b) => {
      const av =
        sortKey === "overallScore"
          ? a.rating.overallScore
          : sortKey === "pricePerActiveDose"
            ? (a.pricing.pricePerActiveDose ?? a.pricing.pricePerServing)
            : a.pricing.pricePerServing;
      const bv =
        sortKey === "overallScore"
          ? b.rating.overallScore
          : sortKey === "pricePerActiveDose"
            ? (b.pricing.pricePerActiveDose ?? b.pricing.pricePerServing)
            : b.pricing.pricePerServing;
      return sortAsc ? av - bv : bv - av;
    });
    return list;
  }, [products, sortKey, sortAsc, thirdPartyFilter]);

  return (
    <MonetizationSafeZone>
      <div className="mb-4 flex flex-wrap gap-4 rounded-lg border border-border bg-surface p-4">
        <label className="text-sm text-foreground">
          Sort by{" "}
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            className={selectClass}
          >
            <option value="overallScore">SuppCheckr score</option>
            <option value="pricePerActiveDose">{displayLabels.priceNormalizationSortLabel}</option>
            <option value="pricePerServing">Price per serving</option>
          </select>
        </label>
        <label className="text-sm text-foreground">
          Order{" "}
          <select
            value={sortAsc ? "asc" : "desc"}
            onChange={(e) => setSortAsc(e.target.value === "asc")}
            className={selectClass}
          >
            <option value="desc">High to low</option>
            <option value="asc">Low to high</option>
          </select>
        </label>
        <label className="text-sm text-foreground">
          Third-party testing{" "}
          <select
            value={thirdPartyFilter}
            onChange={(e) => setThirdPartyFilter(e.target.value as FilterThirdParty)}
            className={selectClass}
          >
            <option value="all">All</option>
            <option value="verified">Verified</option>
            <option value="claimed">Claimed only</option>
            <option value="not_claimed">Not claimed / unknown</option>
          </select>
        </label>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="min-w-full text-sm">
          <thead className="bg-table-header text-left">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium text-heading">Product</th>
              <th scope="col" className="px-4 py-3 font-medium text-heading">Brand</th>
              <th scope="col" className="px-4 py-3 font-medium text-heading">Score</th>
              <th scope="col" className="px-4 py-3 font-medium text-heading">
                {displayLabels.priceNormalizationLabel}
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-heading">Price / serving</th>
              <th scope="col" className="px-4 py-3 font-medium text-heading">Testing</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((product) => {
              const brand = brandMap.get(product.brandId);
              const href = categorySlug
                ? `/supplements/${categorySlug}/products/${product.slug}`
                : `#`;
              const pricePerActiveDose =
                product.pricing.pricePerActiveDose ?? product.pricing.pricePerServing;
              const labels = productCriterionLabels?.get(product.id) ?? [];

              return (
                <tr key={product.id} className="border-t border-table-row-border">
                  <td className="px-4 py-3">
                    <Link
                      href={href}
                      className="font-medium text-link hover:text-link-hover hover:underline"
                    >
                      {product.name}
                    </Link>
                    {product.isPlaceholder && (
                      <span className="ml-2 rounded bg-warning-bg px-1.5 py-0.5 text-xs text-warning-text">
                        Demo
                      </span>
                    )}
                    {!product.isPlaceholder && product.status === "review_ready" && (
                      <span className="ml-2 rounded bg-warning-bg px-1.5 py-0.5 text-xs text-warning-text">
                        Draft
                      </span>
                    )}
                    {labels.length > 0 && (
                      <ul className="mt-2 flex flex-wrap gap-1">
                        {labels.map((label) => (
                          <li
                            key={label}
                            className="rounded bg-surface-elevated px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            {label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                  <td className="px-4 py-3 text-foreground">{brand?.name ?? "—"}</td>
                  <td className="px-4 py-3">
                    <ScoreBadge
                      score={product.rating.overallScore}
                      isDemo={product.isPlaceholder}
                      size="sm"
                    />
                  </td>
                  <td className="px-4 py-3 tabular-nums text-foreground">
                    ${pricePerActiveDose.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 tabular-nums text-foreground">
                    ${product.pricing.pricePerServing.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-foreground">{testingLabel(product)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="border-t border-table-row-border px-4 py-3 text-xs text-muted">
          Manual dated prices only — not live retailer prices.
          {priceCheckedAt ? ` Last checked ${priceCheckedAt}.` : ""} Check current price at the retailer.
        </p>
      </div>
    </MonetizationSafeZone>
  );
}
