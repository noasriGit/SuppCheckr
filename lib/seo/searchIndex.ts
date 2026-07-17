import { getSitemapRecords, type SitemapRecord } from "@/lib/seo/htmlSitemap";

export interface SearchIndexEntry {
  type: string;
  title: string;
  href: string;
  description: string;
}

const SEARCH_TYPE_LABELS: Record<SitemapRecord["contentType"], string> = {
  page: "Page",
  category: "Category",
  product: "Product",
  guide: "Guide",
  ingredient: "Ingredient",
  brand: "Brand",
  comparison: "Comparison",
};

function toSearchEntry(record: SitemapRecord): SearchIndexEntry {
  return {
    type: SEARCH_TYPE_LABELS[record.contentType],
    title: record.title,
    href: record.url,
    description: record.description ?? record.title,
  };
}

/** Published/indexable entity pages plus marketing static pages. */
export function getSearchIndexEntries(): SearchIndexEntry[] {
  return getSitemapRecords().map(toSearchEntry);
}
