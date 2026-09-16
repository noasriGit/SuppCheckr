import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";
import { canonicalHostRedirects } from "@/lib/seo/hostRedirects";
import {
  getSitemapRecords,
  validateSitemapRecords,
} from "@/lib/seo/htmlSitemap";
import { CANONICAL_ORIGIN, isCanonicalHost } from "@/lib/seo/canonical";
import {
  getIndexableBrands,
  getIndexableCategories,
  getIndexableComparisons,
  getIndexableIngredients,
  getIndexableProducts,
  getProductBySlug,
  getProducts,
  getActiveProductsByCategory,
  getCategories,
  isIndexable,
} from "@/lib/content/loader";
import { DRAFT_LEGAL_PATHS, NOINDEX_STATIC_PATHS } from "@/lib/seo/indexing";

const NOW_SLUG = "now-sports-creatine-monohydrate-capsules-120";
const NOW_PATH = `/supplements/creatine/products/${NOW_SLUG}`;

describe("xml sitemap canonicalization and dates", () => {
  it("uses the canonical www.suppcheckr.com host for every URL", () => {
    const xml = sitemap();
    expect(xml.length).toBeGreaterThan(0);
    for (const entry of xml) {
      expect(isCanonicalHost(entry.url)).toBe(true);
      expect(entry.url.startsWith(CANONICAL_ORIGIN)).toBe(true);
    }
  });

  it("omits lastModified when the registry has no stored date", () => {
    const xml = sitemap();
    const records = getSitemapRecords();
    const byPath = new Map(records.map((record) => [record.url, record]));

    for (const entry of xml) {
      const path = new URL(entry.url).pathname;
      const record = byPath.get(path === "" ? "/" : path);
      expect(record).toBeDefined();
      if (record?.updatedAt) {
        expect(entry.lastModified).toEqual(new Date(record.updatedAt));
      } else {
        expect(entry.lastModified).toBeUndefined();
      }
    }
  });

  it("does not stamp static pages with the current date", () => {
    const home = sitemap().find((entry) => new URL(entry.url).pathname === "/");
    expect(home).toBeDefined();
    expect(home?.lastModified).toBeUndefined();
  });

  it("excludes noindex utility pages, legal drafts, and non-indexable entities", () => {
    const urls = new Set(getSitemapRecords().map((record) => record.url));
    for (const path of [...NOINDEX_STATIC_PATHS, ...DRAFT_LEGAL_PATHS]) {
      expect(urls.has(path)).toBe(false);
    }
    for (const product of getProducts().filter((item) => !isIndexable(item))) {
      expect(urls.has(`/supplements/${product.categoryId}/products/${product.slug}`)).toBe(
        false,
      );
    }
  });

  it("keeps sitemap URLs unique", () => {
    const result = validateSitemapRecords();
    expect(result.valid).toBe(true);
    const urls = getSitemapRecords().map((record) => record.url);
    expect(new Set(urls).size).toBe(urls.length);
  });
});

describe("robots.txt and host redirects", () => {
  it("references only the canonical www sitemap", () => {
    const manifest = robots();
    expect(manifest.sitemap).toBe(`${CANONICAL_ORIGIN}/sitemap.xml`);
    expect(JSON.stringify(manifest)).not.toContain("https://suppcheckr.com/sitemap.xml");
  });

  it("permanently redirects the apex host to www", () => {
    const redirects = canonicalHostRedirects();
    expect(redirects).toEqual([
      {
        source: "/:path*",
        has: [{ type: "host", value: "suppcheckr.com" }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },
    ]);
  });
});

describe("NOW Sports creatine capsules crawl surface", () => {
  it("is published, indexable, and present in static params and sitemaps", () => {
    const product = getProductBySlug("creatine", NOW_SLUG);
    expect(product).toBeDefined();
    expect(isIndexable(product!)).toBe(true);
    expect(getIndexableProducts().some((item) => item.slug === NOW_SLUG)).toBe(true);

    const params = getCategories().flatMap((category) =>
      getActiveProductsByCategory(category.id).map((product) => ({
        category: category.slug,
        productSlug: product.slug,
      })),
    );
    expect(
      params.some((entry) => entry.category === "creatine" && entry.productSlug === NOW_SLUG),
    ).toBe(true);

    const recordUrls = getSitemapRecords().map((record) => record.url);
    expect(recordUrls).toContain(NOW_PATH);
    expect(sitemap().some((entry) => entry.url === `${CANONICAL_ORIGIN}${NOW_PATH}`)).toBe(
      true,
    );
  });

  it("remains in the creatine hub, comparison, ingredient, and brand registries", () => {
    const category = getIndexableCategories().find((item) => item.slug === "creatine");
    expect(category?.featuredProductIds).toContain("creatine-now-sports-capsules-120");

    const comparison = getIndexableComparisons().find(
      (item) => item.slug === "creatine-monohydrate-compared",
    );
    expect(comparison?.productIds).toContain("creatine-now-sports-capsules-120");

    const ingredient = getIndexableIngredients().find(
      (item) => item.slug === "creatine-monohydrate",
    );
    expect(ingredient?.relatedProductIds).toContain("creatine-now-sports-capsules-120");

    const brand = getIndexableBrands().find((item) => item.slug === "now-foods");
    expect(brand).toBeDefined();
    expect(getIndexableProducts().some((item) => item.brandId === brand!.id && item.slug === NOW_SLUG)).toBe(
      true,
    );
  });
});
