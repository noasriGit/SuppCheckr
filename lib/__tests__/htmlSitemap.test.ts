import { describe, expect, it } from "vitest";
import {
  getSitemapRecords,
  getSitemapSections,
  validateSitemapRecords,
} from "@/lib/seo/htmlSitemap";
import { getSearchIndexEntries } from "@/lib/seo/searchIndex";
import {
  DRAFT_LEGAL_PATHS,
  INDEXABLE_STATIC_PAGES,
  NOINDEX_STATIC_PATHS,
} from "@/lib/seo/indexing";
import sitemap from "@/app/sitemap";

describe("html sitemap records", () => {
  it("builds records from authoritative content sources", () => {
    const records = getSitemapRecords();
    expect(records.length).toBeGreaterThanOrEqual(76);
    expect(records.some((r) => r.url === "/")).toBe(true);
    expect(records.some((r) => r.url === "/sitemap")).toBe(true);
    expect(records.some((r) => r.contentType === "product")).toBe(true);
    expect(records.some((r) => r.contentType === "guide")).toBe(true);
  });

  it("passes validation with no duplicate urls or ids", () => {
    const result = validateSitemapRecords();
    expect(result.valid).toBe(true);
    expect(result.issues).toHaveLength(0);
    expect(result.entryCount).toBe(getSitemapRecords().length);
  });

  it("excludes noindex static and draft legal paths", () => {
    const urls = new Set(getSitemapRecords().map((r) => r.url));
    for (const path of NOINDEX_STATIC_PATHS) {
      expect(urls.has(path)).toBe(false);
    }
    for (const path of DRAFT_LEGAL_PATHS) {
      expect(urls.has(path)).toBe(false);
    }
  });

  it("uses paths without trailing slashes", () => {
    for (const record of getSitemapRecords()) {
      if (record.url.length > 1) {
        expect(record.url.endsWith("/")).toBe(false);
      }
    }
  });

  it("includes every indexable static page", () => {
    const urls = new Set(getSitemapRecords().map((r) => r.url));
    for (const page of INDEXABLE_STATIC_PAGES) {
      expect(urls.has(page.path)).toBe(true);
    }
  });

  it("organizes category groups with nested products and guides", () => {
    const sections = getSitemapSections();
    expect(sections.categoryGroups.length).toBe(4);
    expect(sections.categoryGroups.every((g) => g.products.length > 0)).toBe(true);
    expect(sections.categoryGroups.every((g) => g.guides.length > 0)).toBe(true);
    expect(sections.categoryGroups.every((g) => g.compare)).toBe(true);
  });

  it("surfaces featured pages from structural importance and category flags", () => {
    const sections = getSitemapSections();
    const featuredUrls = new Set(sections.featured.map((r) => r.url));
    expect(featuredUrls.has("/")).toBe(true);
    expect(featuredUrls.has("/supplements")).toBe(true);
    expect(featuredUrls.has("/guides")).toBe(true);
    expect(featuredUrls.has("/methodology")).toBe(true);
    expect(featuredUrls.has("/supplements/creatine")).toBe(true);
    expect(featuredUrls.has("/supplements/magnesium")).toBe(true);
  });

  it("sorts recently updated by stored editorial dates", () => {
    const sections = getSitemapSections();
    expect(sections.recentlyUpdated.length).toBeGreaterThan(0);
    expect(sections.recentlyUpdated.length).toBeLessThanOrEqual(15);
    const dates = sections.recentlyUpdated.map((r) => r.updatedAt ?? "");
    expect([...dates].sort((a, b) => b.localeCompare(a))).toEqual(dates);
  });

  it("keeps search index entries aligned with sitemap records", () => {
    const records = getSitemapRecords();
    const search = getSearchIndexEntries();
    expect(search).toHaveLength(records.length);
    const recordUrls = new Set(records.map((r) => r.url));
    const searchUrls = new Set(search.map((e) => e.href));
    expect(searchUrls).toEqual(recordUrls);
  });

  it("keeps xml sitemap urls aligned with sitemap records", () => {
    const records = getSitemapRecords();
    const xml = sitemap();
    expect(xml).toHaveLength(records.length);
    const recordUrls = records.map((r) => r.url).sort();
    const xmlPaths = xml.map((e) => new URL(e.url).pathname).sort();
    expect(xmlPaths).toEqual(recordUrls);
  });
});
