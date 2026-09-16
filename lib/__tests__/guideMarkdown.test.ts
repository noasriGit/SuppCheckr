import { describe, expect, it, vi } from "vitest";
import { createElement, type ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { GuideMarkdown } from "@/components/content/GuideMarkdown";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    className,
  }: {
    href: string;
    children?: ReactNode;
    className?: string;
  }) => createElement("a", { href, className, "data-internal-link": "true" }, children),
}));

function renderMarkdown(markdown: string): string {
  return renderToStaticMarkup(createElement(GuideMarkdown, { markdown }));
}

describe("GuideMarkdown", () => {
  it("renders bold and italic text instead of raw Markdown markers", () => {
    const html = renderMarkdown("This compares **publicly available label information** and *not* medical outcomes.");
    expect(html).toContain("<strong");
    expect(html).toContain("publicly available label information");
    expect(html).toContain("<em>");
    expect(html).not.toContain("**publicly available");
    expect(html).not.toContain("*not*");
  });

  it("renders unordered and ordered lists", () => {
    const html = renderMarkdown(`- LMNT discloses sodium, potassium, and magnesium
- Liquid I.V. discloses sodium, potassium, and sugar

1. Confirm the cited SKU
2. Read the Nutrition Facts panel
`);
    expect(html).toContain("<ul");
    expect(html).toContain("<ol");
    expect(html).toContain("<li>");
    expect(html).toContain("LMNT discloses sodium");
    expect(html).toContain("Confirm the cited SKU");
  });

  it("renders GitHub-flavored Markdown tables as accessible tables", () => {
    const html = renderMarkdown(`| Factor | LMNT | Liquid I.V. |
| --- | --- | --- |
| Sodium per serving | 1,000 mg | 500 mg |
`);
    expect(html).toContain("<table");
    expect(html).toContain("<thead");
    expect(html).toContain("<th scope=\"col\"");
    expect(html).toContain("<td");
    expect(html).toContain("1,000 mg");
    expect(html).not.toContain("| Factor |");
  });

  it("renders internal links with Next.js navigation", () => {
    const html = renderMarkdown(
      "See the [electrolyte supplements comparison](/supplements/electrolytes/compare).",
    );
    expect(html).toContain('href="/supplements/electrolytes/compare"');
    expect(html).toContain("data-internal-link=\"true\"");
    expect(html).not.toContain("target=\"_blank\"");
  });

  it("renders external links with safe rel attributes", () => {
    const html = renderMarkdown(
      "NIH materials: [Sodium fact sheet](https://ods.od.nih.gov/factsheets/Sodium-HealthProfessional/).",
    );
    expect(html).toContain('href="https://ods.od.nih.gov/factsheets/Sodium-HealthProfessional/"');
    expect(html).toContain('rel="noopener noreferrer"');
    expect(html).toContain('target="_blank"');
    expect(html).not.toContain("data-internal-link");
  });

  it("does not render raw HTML tags from Markdown", () => {
    const html = renderMarkdown('Safe text <script>alert("xss")</script> and <em>html em</em>.');
    expect(html).not.toContain("<script>");
    expect(html).not.toContain('alert("xss")');
    expect(html).not.toContain("<em>html em</em>");
  });
});
