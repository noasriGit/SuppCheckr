import Link from "next/link";
import type { SitemapRecord } from "@/lib/seo/htmlSitemap";

export function SitemapEntryLink({ record }: { record: SitemapRecord }) {
  return (
    <li className="rounded-lg border border-border bg-surface p-4">
      <Link
        href={record.url}
        className="font-medium text-link hover:text-link-hover hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
      >
        {record.title}
      </Link>
      {record.description && (
        <p className="mt-2 text-sm text-foreground">{record.description}</p>
      )}
      <p className="mt-2 text-xs text-muted">
        {record.contentType.charAt(0).toUpperCase() + record.contentType.slice(1)}
        {record.category ? ` · ${record.category}` : ""}
        {record.updatedAt ? ` · Updated ${record.updatedAt}` : ""}
      </p>
    </li>
  );
}

export function SitemapEntryList({ records }: { records: SitemapRecord[] }) {
  if (records.length === 0) return null;

  return (
    <ul className="mt-4 space-y-3">
      {records.map((record) => (
        <SitemapEntryLink key={record.id} record={record} />
      ))}
    </ul>
  );
}

export function SitemapCompactList({ records }: { records: SitemapRecord[] }) {
  if (records.length === 0) return null;

  return (
    <ul className="mt-3 space-y-2">
      {records.map((record) => (
        <li key={record.id}>
          <Link
            href={record.url}
            className="text-link hover:text-link-hover hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
          >
            {record.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
