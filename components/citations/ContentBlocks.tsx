import type { Citation } from "@/lib/schemas/common";

export function SourcesList({ sources }: { sources: Citation[] }) {
  if (sources.length === 0) {
    return (
      <p className="rounded-lg border border-border bg-surface p-4 text-sm text-muted">
        No sources listed yet (placeholder page).
      </p>
    );
  }

  return (
    <ol className="list-decimal space-y-2 pl-5 text-sm text-foreground">
      {sources.map((source) => (
        <li key={source.id}>
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link underline hover:text-link-hover"
          >
            {source.title}
          </a>
          <span className="text-muted"> — {source.publisher} ({source.sourceType})</span>
        </li>
      ))}
    </ol>
  );
}

export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-surface p-4">
        <h3 className="font-medium text-heading">Pros</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground">
          {pros.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-border bg-surface p-4">
        <h3 className="font-medium text-heading">Cons</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground">
          {cons.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
