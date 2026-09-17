import type { ReactNode } from "react";
import Link from "next/link";
import Markdown, { defaultUrlTransform, type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const linkClassName = "text-link underline hover:text-link-hover";

function isHashHref(href: string): boolean {
  return href.startsWith("#");
}

function isInternalHref(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}

function MarkdownLink({ href, children }: { href?: string; children?: ReactNode }) {
  if (!href) {
    return <>{children}</>;
  }

  if (isHashHref(href) || isInternalHref(href)) {
    return (
      <Link href={href} className={linkClassName}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={linkClassName} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

const markdownComponents: Components = {
  a: ({ href, children }) => <MarkdownLink href={href}>{children}</MarkdownLink>,
  h1: ({ children }) => (
    <h2 className="mt-8 text-xl font-semibold text-heading first:mt-0">{children}</h2>
  ),
  h2: ({ children }) => (
    <h2 className="mt-8 text-xl font-semibold text-heading first:mt-0">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 text-lg font-semibold text-heading">{children}</h3>
  ),
  p: ({ children }) => <p className="mt-3 first:mt-0">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-heading">{children}</strong>,
  em: ({ children }) => <em>{children}</em>,
  ul: ({ children }) => <ul className="mt-3 list-disc space-y-1 pl-5">{children}</ul>,
  ol: ({ children }) => <ol className="mt-3 list-decimal space-y-1 pl-5">{children}</ol>,
  li: ({ children }) => <li>{children}</li>,
  br: () => <br />,
  table: ({ children }) => (
    <div
      className="mt-4 overflow-x-auto rounded-lg border border-border"
      role="region"
      aria-label="Guide comparison table"
      tabIndex={0}
    >
      <table className="min-w-[36rem] w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-table-header text-left">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr className="border-t border-table-row-border first:border-t-0">{children}</tr>,
  th: ({ children }) => (
    <th scope="col" className="px-3 py-2 font-medium text-heading">
      {children}
    </th>
  ),
  td: ({ children }) => <td className="px-3 py-2 text-foreground">{children}</td>,
};

export function GuideMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="guide-markdown prose max-w-3xl text-sm leading-relaxed text-foreground">
      <Markdown
        remarkPlugins={[remarkGfm]}
        skipHtml
        urlTransform={defaultUrlTransform}
        components={markdownComponents}
      >
        {markdown}
      </Markdown>
    </div>
  );
}
