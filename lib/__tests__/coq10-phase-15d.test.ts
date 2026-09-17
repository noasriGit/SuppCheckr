import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import {
  getBrandPageProducts,
  getBrands,
  getCategoryBySlug,
  getCategoryComparison,
  getComparisons,
  getGuideBySlug,
  getIndexableBrands,
  getIndexableCategories,
  getIndexableComparisons,
  getIndexableGuides,
  getIndexableIngredients,
  getIndexableProducts,
  getIngredientBySlug,
  getProductBySlug,
  isIndexable,
} from "@/lib/content/loader";
import { resolveProductAffiliateCta } from "@/lib/affiliate/resolveProductAffiliateCta";
import {
  buildGuideArticleJsonLd,
  buildIngredientArticleJsonLd,
  buildProductJsonLd,
} from "@/lib/seo/jsonld";
import { buildPageMetadata, entityNoindex } from "@/lib/seo/metadata";
import { CANONICAL_ORIGIN } from "@/lib/seo/canonical";
import { getSitemapRecords } from "@/lib/seo/htmlSitemap";
import { collectIndexablePageMetadata } from "@/lib/seo/entityMetadata";
import { collapseWhitespace } from "@/lib/seo/text";

const LIFE_EXTENSION_SLUG = "life-extension-super-ubiquinol-coq10-100-mg-60-softgels";
const JARROW_SLUG = "jarrow-q-absorb-coq10-100-mg-60-softgels";
const NOW_SLUG = "now-foods-coq10-200-mg-60-veg-capsules";
const FORM_GUIDE_SLUG = "ubiquinol-vs-ubiquinone";
const HOWTO_GUIDE_SLUG = "how-to-choose-a-coq10-supplement";
const COMPARISON_SLUG = "coq10-supplements-compared";

const COQ10_PRODUCT_SLUGS = [LIFE_EXTENSION_SLUG, JARROW_SLUG, NOW_SLUG] as const;
const PUBLISHED_COQ10_PATHS = [
  "/supplements/coq10",
  "/ingredients/coq10",
  "/supplements/coq10/compare",
  `/guides/${FORM_GUIDE_SLUG}`,
  `/guides/${HOWTO_GUIDE_SLUG}`,
  `/supplements/coq10/products/${LIFE_EXTENSION_SLUG}`,
  `/supplements/coq10/products/${JARROW_SLUG}`,
  `/supplements/coq10/products/${NOW_SLUG}`,
] as const;
const DRAFT_COQ10_BRAND_PATHS = ["/brands/life-extension", "/brands/jarrow-formulas"] as const;

describe("CoQ10 Phase 15D cluster publication candidate", () => {
  it("loads published hub, ingredient, comparison, and two guides", () => {
    const category = getCategoryBySlug("coq10");
    const ingredient = getIngredientBySlug("coq10");
    const comparison = getCategoryComparison("coq10");
    const formGuide = getGuideBySlug(FORM_GUIDE_SLUG);
    const howToGuide = getGuideBySlug(HOWTO_GUIDE_SLUG);

    expect(category).toBeDefined();
    expect(ingredient).toBeDefined();
    expect(comparison?.slug).toBe(COMPARISON_SLUG);
    expect(formGuide).toBeDefined();
    expect(howToGuide).toBeDefined();

    for (const entity of [category!, ingredient!, comparison!, formGuide!, howToGuide!]) {
      expect(entity.status).toBe("published");
      expect(entity.noindex).toBe(false);
      expect(entity.isPlaceholder).toBe(false);
      expect(isIndexable(entity)).toBe(true);
      expect(entityNoindex(entity)).toBe(false);
    }
  });

  it("keeps hub metadata, featured products, and draft-only related links internally consistent", () => {
    const category = getCategoryBySlug("coq10")!;
    expect(category.seo.title).toBe("Best CoQ10 Supplements Compared by Label");
    expect(collapseWhitespace(category.seo.description ?? "").length).toBeGreaterThanOrEqual(120);
    expect(collapseWhitespace(category.seo.description ?? "").length).toBeLessThanOrEqual(160);
    expect(category.buyersGuideSlug).toBe(HOWTO_GUIDE_SLUG);
    expect(category.relatedGuides).toEqual([HOWTO_GUIDE_SLUG, FORM_GUIDE_SLUG]);
    expect(category.featuredProductIds).toEqual([
      "coq10-now-foods-coq10-200-3176",
      "coq10-life-extension-super-ubiquinol-01929",
      "coq10-jarrow-q-absorb-100-60",
    ]);
    expect(category.intro.length).toBeGreaterThan(80);
    expect(category.faq.length).toBeGreaterThanOrEqual(4);
    expect(category.featured).toBe(false);

    const ingredient = getIngredientBySlug("coq10")!;
    expect(ingredient.relatedGuideSlugs).toEqual([HOWTO_GUIDE_SLUG, FORM_GUIDE_SLUG]);
    expect(ingredient.relatedProductIds).toEqual(category.featuredProductIds);

    const comparison = getComparisons().find((item) => item.slug === COMPARISON_SLUG)!;
    expect(comparison.productIds).toEqual(category.featuredProductIds);
    expect(comparison.seo.title).toBe("CoQ10 Products Compared");
    expect(collapseWhitespace(comparison.seo.description ?? "").length).toBeGreaterThanOrEqual(120);
    expect(collapseWhitespace(comparison.seo.description ?? "").length).toBeLessThanOrEqual(160);
    expect(JSON.stringify(comparison).toLowerCase()).not.toContain("best overall");
    expect(JSON.stringify(comparison).toLowerCase()).not.toContain("best for everyone");

    for (const slug of COQ10_PRODUCT_SLUGS) {
      const product = getProductBySlug("coq10", slug)!;
      expect(product.comparisonGroupIds).toEqual([COMPARISON_SLUG]);
      expect(product.affiliate.enabled).toBe(false);
    }
  });

  it("uses conservative guide excerpts as metadata and links inside the CoQ10 cluster", () => {
    const formGuide = getGuideBySlug(FORM_GUIDE_SLUG)!;
    const howToGuide = getGuideBySlug(HOWTO_GUIDE_SLUG)!;

    expect(formGuide.title).toBe("Ubiquinol vs Ubiquinone: Label Differences");
    expect(howToGuide.title).toBe("How to Choose a CoQ10 Supplement");
    expect(collapseWhitespace(formGuide.excerpt).length).toBeGreaterThanOrEqual(120);
    expect(collapseWhitespace(formGuide.excerpt).length).toBeLessThanOrEqual(160);
    expect(collapseWhitespace(howToGuide.excerpt).length).toBeGreaterThanOrEqual(120);
    expect(collapseWhitespace(howToGuide.excerpt).length).toBeLessThanOrEqual(160);

    for (const guide of [formGuide, howToGuide]) {
      expect(guide.body).toContain("/supplements/coq10");
      expect(guide.body).toContain("/ingredients/coq10");
      expect(guide.body).toContain("/supplements/coq10/compare");
      expect(guide.body.toLowerCase()).not.toContain("amazon.com");
      expect(guide.body.toLowerCase()).not.toContain("best overall");
      expect(guide.claimRiskLevel).toBe("medium");
    }

    expect(formGuide.body).toContain(`/supplements/coq10/products/${LIFE_EXTENSION_SLUG}`);
    expect(formGuide.body).toContain(`/supplements/coq10/products/${JARROW_SLUG}`);
    expect(formGuide.body).toContain(`/supplements/coq10/products/${NOW_SLUG}`);
    expect(howToGuide.body.toLowerCase()).toContain("statin");
    expect(howToGuide.slug).not.toContain("dosage");
  });

  it("emits index, follow robots, www canonicals, and Article or Product JSON-LD", () => {
    const formGuide = getGuideBySlug(FORM_GUIDE_SLUG)!;
    const howToGuide = getGuideBySlug(HOWTO_GUIDE_SLUG)!;
    const ingredient = getIngredientBySlug("coq10")!;
    const comparison = getCategoryComparison("coq10")!;
    const category = getCategoryBySlug("coq10")!;

    const pages = [
      { title: category.seo.title ?? category.name, description: category.seo.description ?? "", path: "/supplements/coq10", entity: category },
      { title: "CoQ10", description: ingredient.evidenceSummary, path: "/ingredients/coq10", entity: ingredient },
      { title: comparison.seo.title ?? comparison.title, description: comparison.seo.description ?? "", path: "/supplements/coq10/compare", entity: comparison },
      { title: formGuide.title, description: formGuide.excerpt, path: `/guides/${FORM_GUIDE_SLUG}`, entity: formGuide },
      { title: howToGuide.title, description: howToGuide.excerpt, path: `/guides/${HOWTO_GUIDE_SLUG}`, entity: howToGuide },
    ] as const;

    for (const page of pages) {
      const metadata = buildPageMetadata({
        title: page.title,
        description: page.description,
        path: page.path,
        noindex: entityNoindex(page.entity),
      });
      expect(metadata.alternates?.canonical).toBe(`${CANONICAL_ORIGIN}${page.path}`);
      expect(metadata.robots).toEqual({ index: true, follow: true });
    }

    expect(buildGuideArticleJsonLd(formGuide, `/guides/${FORM_GUIDE_SLUG}`)).not.toBeNull();
    expect(buildGuideArticleJsonLd(howToGuide, `/guides/${HOWTO_GUIDE_SLUG}`)).not.toBeNull();
    expect(buildIngredientArticleJsonLd(ingredient, "/ingredients/coq10")).not.toBeNull();

    for (const slug of COQ10_PRODUCT_SLUGS) {
      const product = getProductBySlug("coq10", slug)!;
      const jsonLd = buildProductJsonLd({
        product,
        path: `/supplements/coq10/products/${slug}`,
      });
      expect(jsonLd).not.toBeNull();
      expect(JSON.stringify(jsonLd)).not.toContain("placeholder.svg");
    }
  });

  it("grows the production sitemap from 77 to 85 URLs and omits draft CoQ10 brand pages", () => {
    const xml = sitemap();
    expect(xml).toHaveLength(85);
    expect(getSitemapRecords()).toHaveLength(85);

    for (const entry of xml) {
      expect(entry.url.startsWith(CANONICAL_ORIGIN)).toBe(true);
      expect(entry.url.toLowerCase()).not.toContain("/brands/life-extension");
      expect(entry.url.toLowerCase()).not.toContain("/brands/jarrow-formulas");
    }

    const indexablePaths = collectIndexablePageMetadata().map((page) => page.path);
    for (const path of PUBLISHED_COQ10_PATHS) {
      expect(indexablePaths).toContain(path);
    }
    for (const path of DRAFT_COQ10_BRAND_PATHS) {
      expect(indexablePaths).not.toContain(path);
    }

    expect(getIndexableCategories().some((category) => category.slug === "coq10")).toBe(true);
    expect(getIndexableIngredients().some((ingredient) => ingredient.slug === "coq10")).toBe(true);
    expect(getIndexableComparisons().some((comparison) => comparison.categoryId === "coq10")).toBe(
      true,
    );
    expect(getIndexableGuides().some((guide) => guide.categoryId === "coq10")).toBe(true);
    expect(
      getIndexableProducts().some((product) => product.categoryId === "coq10"),
    ).toBe(true);
    expect(getIndexableBrands().some((brand) => brand.slug === "life-extension")).toBe(false);
    expect(getIndexableBrands().some((brand) => brand.slug === "jarrow-formulas")).toBe(false);
  });

  it("does not add affiliate mappings or Amazon buttons", () => {
    const nowBrand = getBrands().find((brand) => brand.slug === "now-foods");
    expect(nowBrand).toBeDefined();
    expect(isIndexable(nowBrand!)).toBe(true);
    expect(getBrandPageProducts(nowBrand!).some((product) => product.categoryId === "coq10")).toBe(
      true,
    );

    for (const slug of COQ10_PRODUCT_SLUGS) {
      const product = getProductBySlug("coq10", slug)!;
      const cta = resolveProductAffiliateCta(
        product,
        `/supplements/coq10/products/${slug}`,
        { associateTag: "suppcheckr-20" },
      );
      expect(cta.variant).toBe("retailer");
      expect(cta.href).not.toContain("amazon.com");
      expect(cta.href).not.toContain("tag=");
    }
  });
});
