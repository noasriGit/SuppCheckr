"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/SiteChrome";
import type { SearchIndexEntry } from "@/lib/seo/searchIndex";

export function SearchClient({ index }: { index: SearchIndexEntry[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index;
    return index.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q),
    );
  }, [query, index]);

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-heading">Search</h1>
      <p className="mt-3 text-sm text-foreground">
        Search published SuppCheckr pages, including Creatine, Magnesium, and Vitamin C product
        reviews, guides, comparisons, and ingredient references. Legal pages in review are excluded.
      </p>
      <div className="mt-6">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search site pages…"
          className="w-full max-w-md rounded-lg border border-input-border bg-input-bg px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground"
          aria-label="Search"
        />
      </div>
      <ul className="mt-8 space-y-3">
        {results.length === 0 ? (
          <li className="rounded-lg border border-border bg-surface p-4 text-sm text-muted">
            No results found.
          </li>
        ) : (
          results.map((item) => (
            <li key={item.href} className="rounded-lg border border-border bg-surface p-3">
              <span className="text-xs uppercase text-muted-foreground">{item.type}</span>
              <Link href={item.href} className="block text-link hover:text-link-hover hover:underline">
                {item.title}
              </Link>
            </li>
          ))
        )}
      </ul>
    </PageContainer>
  );
}
