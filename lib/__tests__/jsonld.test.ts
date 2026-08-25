import { describe, expect, it } from "vitest";
import {
  assertNoDisallowedProductFields,
  buildBreadcrumbJsonLd,
  buildGlobalGraphJsonLd,
  buildGuideArticleJsonLd,
  buildIngredientArticleJsonLd,
  buildProductJsonLd,
  REVIEW_BEST_RATING,
  REVIEW_WORST_RATING,
  serializeJsonLd,
} from "@/lib/seo/jsonld";
import {
  getBrands,
  getCategories,
  getGuideBySlug,
  getIngredientBySlug,
  getProductBySlug,
  getProducts,
} from "@/lib/content/loader";
import { isPlaceholderProductImage } from "@/lib/product/productImageContext";
import { CANONICAL_ORIGIN } from "@/lib/seo/canonical";

describe("json-ld builders", () => {
  it("serializes script-safe JSON", () => {
    const serialized = serializeJsonLd({
      "@type": "Article",
      headline: "A <script>alert(1)</script> title",
    });
    expect(serialized).toContain("\\u003cscript\\u003e");
    expect(serialized).not.toContain("<script>");
  });

  it("builds Organization and WebSite graph without invented fields", () => {
    const graph = buildGlobalGraphJsonLd();
    const serialized = JSON.stringify(graph);
    expect(serialized).toContain('"Organization"');
    expect(serialized).toContain('"WebSite"');
    expect(serialized).not.toContain("aggregateRating");
    expect(serialized).not.toContain("medicalReviewer");
  });

  it("builds breadcrumbs with canonical host", () => {
    const json = buildBreadcrumbJsonLd([
      { label: "Home", path: "/" },
      { label: "Creatine", path: "/supplements/creatine" },
    ]);
    expect(JSON.stringify(json)).toContain(CANONICAL_ORIGIN);
  });

  it("adds Product + editorial Review for published products and excludes placeholder images", () => {
    const product = getProductBySlug("creatine", "nutricost-creatine-monohydrate-500g");
    expect(product).toBeDefined();
    const brand = getBrands().find((b) => b.id === product!.brandId);
    const category = getCategories().find((c) => c.id === product!.categoryId);
    const json = buildProductJsonLd({
      product: product!,
      brand,
      category,
      path: `/supplements/creatine/products/${product!.slug}`,
    });

    expect(json).not.toBeNull();
    const serialized = JSON.stringify(json);
    expect(serialized).toContain('"Product"');
    expect(serialized).toContain('"Review"');
    expect(serialized).toContain(`"bestRating":${REVIEW_BEST_RATING}`);
    expect(serialized).toContain(`"worstRating":${REVIEW_WORST_RATING}`);
    expect(serialized).not.toContain("aggregateRating");
    expect(assertNoDisallowedProductFields(json!)).toEqual([]);
    expect(isPlaceholderProductImage(product!.images.product.src)).toBe(true);
    expect(serialized).not.toContain("placeholder.svg");
    expect(serialized).not.toContain('"image"');
  });

  it("keeps draft, placeholder, and noindexed products out of Product JSON-LD", () => {
    const excluded = getProducts().filter(
      (product) =>
        product.status !== "published" || product.isPlaceholder || product.noindex,
    );
    expect(excluded.length).toBeGreaterThan(0);
    for (const product of excluded) {
      expect(
        buildProductJsonLd({
          product,
          path: `/supplements/${product.categoryId}/products/${product.slug}`,
        }),
      ).toBeNull();
    }
  });

  it("adds Article JSON-LD only for indexable guides and ingredients", () => {
    const guide = getGuideBySlug("what-is-creatine");
    const ingredient = getIngredientBySlug("creatine-monohydrate");
    expect(buildGuideArticleJsonLd(guide!, `/guides/${guide!.slug}`)).not.toBeNull();
    expect(
      buildIngredientArticleJsonLd(ingredient!, `/ingredients/${ingredient!.slug}`),
    ).not.toBeNull();

    const demoGuide = getGuideBySlug("demo-guide-shell");
    if (demoGuide) {
      expect(buildGuideArticleJsonLd(demoGuide, `/guides/${demoGuide.slug}`)).toBeNull();
    }
  });
});
