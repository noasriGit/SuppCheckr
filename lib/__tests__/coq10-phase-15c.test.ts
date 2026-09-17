import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import {
  getBrandBySlug,
  getBrandPageProducts,
  getBrands,
  getCategories,
  getCategoryBySlug,
  getComparisons,
  getGuides,
  getIndexableBrands,
  getIndexableCategories,
  getIndexableComparisons,
  getIndexableIngredients,
  getIndexableProducts,
  getIngredientBySlug,
  getIngredients,
  getProductBySlug,
  getProducts,
  getScoringProfile,
  isIndexable,
} from "@/lib/content/loader";
import { computeWeightedScore } from "@/lib/scoring/computeScore";
import { validateProductScoreConsistency } from "@/lib/validation/publishedContent";
import { resolveProductAffiliateCta } from "@/lib/affiliate/resolveProductAffiliateCta";
import { buildProductJsonLd } from "@/lib/seo/jsonld";
import { buildPageMetadata, entityNoindex } from "@/lib/seo/metadata";
import { CANONICAL_ORIGIN } from "@/lib/seo/canonical";
import { getSitemapRecords } from "@/lib/seo/htmlSitemap";
import { collectIndexablePageMetadata } from "@/lib/seo/entityMetadata";

const LIFE_EXTENSION_SLUG = "life-extension-super-ubiquinol-coq10-100-mg-60-softgels";
const JARROW_SLUG = "jarrow-q-absorb-coq10-100-mg-60-softgels";
const NOW_SLUG = "now-foods-coq10-200-mg-60-veg-capsules";

const COQ10_SLUGS = [LIFE_EXTENSION_SLUG, JARROW_SLUG, NOW_SLUG] as const;

function coq10Product(slug: (typeof COQ10_SLUGS)[number]) {
  const product = getProductBySlug("coq10", slug);
  expect(product, slug).toBeDefined();
  return product!;
}

describe("CoQ10 Phase 15C draft products", () => {
  it("loads three unique draft records with the locked slugs", () => {
    const products = COQ10_SLUGS.map((slug) => coq10Product(slug));
    expect(products).toHaveLength(3);

    const slugs = getProducts().map((product) => product.slug);
    expect(new Set(slugs).size).toBe(slugs.length);

    const ids = getProducts().map((product) => product.id);
    expect(new Set(ids).size).toBe(ids.length);

    for (const product of products) {
      expect(product.status).toBe("draft");
      expect(product.noindex).toBe(true);
      expect(product.isPlaceholder).toBe(false);
      expect(product.affiliate.enabled).toBe(false);
      expect(product.images.product.src).toBe("/images/products/placeholder.svg");
      expect(product.images.product.attribution.toLowerCase()).toContain("todo");
      expect(product.certifications).toEqual([]);
      expect(product.flags.thirdPartyTested).toBe(false);
      expect(product.comparisonGroupIds).toEqual([]);
      expect(product.pricing.lastPriceCheckedAt).toBe("2026-09-17");
    }
  });

  it("keeps UPC and SKU values on the correct variants", () => {
    const lifeExtension = coq10Product(LIFE_EXTENSION_SLUG);
    const now = coq10Product(NOW_SLUG);
    const jarrow = coq10Product(JARROW_SLUG);

    expect(lifeExtension.labelTransparencyNotes).toContain("737870192961");
    expect(lifeExtension.labelTransparencyNotes).toContain("01929");
    expect(lifeExtension.name).toContain("01929");
    expect(now.labelTransparencyNotes).toContain("733739031761");
    expect(now.labelTransparencyNotes).toContain("3176");
    expect(now.name).toContain("3176");
    expect(jarrow.labelTransparencyNotes).not.toContain("737870192961");
    expect(jarrow.labelTransparencyNotes).not.toContain("733739031761");
    expect(jarrow.labelTransparencyNotes).not.toContain("3176");
  });

  it("attaches official one-time prices and correct per-serving and per-100-mg math", () => {
    const lifeExtension = coq10Product(LIFE_EXTENSION_SLUG);
    const jarrow = coq10Product(JARROW_SLUG);
    const now = coq10Product(NOW_SLUG);

    expect(lifeExtension.pricing.msrp).toBe(37.5);
    expect(lifeExtension.pricing.pricePerServing).toBe(0.63);
    expect(lifeExtension.pricing.pricePerActiveDose).toBe(0.63);
    expect(Number((lifeExtension.pricing.msrp / 60).toFixed(2))).toBe(0.63);

    expect(jarrow.pricing.msrp).toBe(34.99);
    expect(jarrow.pricing.pricePerServing).toBe(0.58);
    expect(jarrow.pricing.pricePerActiveDose).toBe(0.58);
    expect(Number((jarrow.pricing.msrp / 60).toFixed(2))).toBe(0.58);

    expect(now.pricing.msrp).toBe(37.99);
    expect(now.pricing.pricePerServing).toBe(0.63);
    expect(now.pricing.pricePerActiveDose).toBe(0.32);
    expect(Number((now.pricing.msrp / 60).toFixed(2))).toBe(0.63);
    expect(Number((now.pricing.msrp / 120).toFixed(2))).toBe(0.32);
  });

  it("represents Life Extension as ubiquinol and Jarrow/NOW as ubiquinone", () => {
    const lifeExtension = coq10Product(LIFE_EXTENSION_SLUG);
    const jarrow = coq10Product(JARROW_SLUG);
    const now = coq10Product(NOW_SLUG);

    const leForm = lifeExtension.supplementFacts.ingredients.map((item) => item.name).join(" ");
    const jarrowForm = jarrow.supplementFacts.ingredients.map((item) => item.name).join(" ");
    const nowForm = now.supplementFacts.ingredients.map((item) => item.name).join(" ");

    expect(leForm).toMatch(/ubiquinol/i);
    expect(leForm).not.toMatch(/ubiquinone/i);
    expect(jarrowForm).toMatch(/ubiquinone/i);
    expect(jarrowForm).not.toMatch(/ubiquinol/i);
    expect(nowForm).toMatch(/ubiquinone/i);
    expect(nowForm).not.toMatch(/ubiquinol/i);
  });

  it("preserves Jarrow soy disclosure and does not credit unknown or claimed testing as verified", () => {
    const jarrow = coq10Product(JARROW_SLUG);
    const lifeExtension = coq10Product(LIFE_EXTENSION_SLUG);
    const now = coq10Product(NOW_SLUG);

    expect(jarrow.supplementFacts.allergens).toEqual(["Soy"]);
    expect(jarrow.thirdPartyTesting.status).toBe("unknown");
    expect(lifeExtension.thirdPartyTesting.status).toBe("unknown");
    expect(now.thirdPartyTesting.status).toBe("claimed");

    expect(lifeExtension.rating.criteriaScores.thirdPartyTesting).toBe(0);
    expect(jarrow.rating.criteriaScores.thirdPartyTesting).toBe(0);
    expect(now.rating.criteriaScores.thirdPartyTesting).toBe(50);
    expect(now.rating.criteriaScores.thirdPartyTesting).toBeLessThan(100);
    expect(now.flags.thirdPartyTested).toBe(false);
  });

  it("keeps displayed totals equal to the CoQ10 weighted component sum", () => {
    const profile = getScoringProfile("coq10");
    expect(profile).toBeDefined();

    for (const slug of COQ10_SLUGS) {
      const product = coq10Product(slug);
      const expected = computeWeightedScore(product.rating.criteriaScores, profile!);
      expect(product.rating.overallScore).toBe(expected);
      expect(validateProductScoreConsistency(product)).toEqual([]);
    }

    expect(coq10Product(LIFE_EXTENSION_SLUG).rating.overallScore).toBe(74);
    expect(coq10Product(JARROW_SLUG).rating.overallScore).toBe(74);
    expect(coq10Product(NOW_SLUG).rating.overallScore).toBe(86);
  });

  it("uses draft robots, www canonicals, and no Product JSON-LD", () => {
    for (const slug of COQ10_SLUGS) {
      const product = coq10Product(slug);
      const path = `/supplements/coq10/products/${slug}`;
      expect(entityNoindex(product)).toBe(true);

      const metadata = buildPageMetadata({
        title: product.seo.title ?? product.name,
        description: product.seo.description ?? product.name,
        path,
        noindex: entityNoindex(product),
      });
      expect(metadata.alternates?.canonical).toBe(`${CANONICAL_ORIGIN}${path}`);
      expect(metadata.robots).toEqual({ index: false, follow: true });

      expect(
        buildProductJsonLd({
          product,
          path,
        }),
      ).toBeNull();
    }
  });

  it("keeps draft CoQ10 URLs out of the sitemap and indexable registries", () => {
    const xml = sitemap();
    expect(xml).toHaveLength(77);
    expect(getSitemapRecords()).toHaveLength(77);

    for (const entry of xml) {
      expect(entry.url.toLowerCase()).not.toContain("coq10");
      expect(entry.url.startsWith(CANONICAL_ORIGIN)).toBe(true);
    }

    const indexableSlugs = new Set(getIndexableProducts().map((product) => product.slug));
    for (const slug of COQ10_SLUGS) {
      expect(indexableSlugs.has(slug)).toBe(false);
      expect(isIndexable(coq10Product(slug))).toBe(false);
    }

    expect(isIndexable(getCategoryBySlug("coq10")!)).toBe(false);
    expect(isIndexable(getIngredientBySlug("coq10")!)).toBe(false);
    expect(getIndexableCategories().some((category) => category.slug === "coq10")).toBe(false);
    expect(getIndexableIngredients().some((ingredient) => ingredient.slug === "coq10")).toBe(
      false,
    );

    const indexablePaths = collectIndexablePageMetadata().map((page) => page.path);
    for (const slug of COQ10_SLUGS) {
      expect(indexablePaths).not.toContain(`/supplements/coq10/products/${slug}`);
    }
    expect(indexablePaths).not.toContain("/supplements/coq10");
    expect(indexablePaths).not.toContain("/ingredients/coq10");
  });

  it("does not expose draft CoQ10 products from published pages or affiliate mappings", () => {
    const coq10Ids = new Set(COQ10_SLUGS.map((slug) => coq10Product(slug).id));

    for (const product of getProducts().filter(isIndexable)) {
      expect(product.relatedProductIds.some((id) => coq10Ids.has(id))).toBe(false);
      expect(COQ10_SLUGS.includes(product.slug as (typeof COQ10_SLUGS)[number])).toBe(false);
    }

    for (const category of getCategories().filter(isIndexable)) {
      expect(category.featuredProductIds.some((id) => coq10Ids.has(id))).toBe(false);
    }

    for (const ingredient of getIngredients().filter(isIndexable)) {
      expect(ingredient.relatedProductIds.some((id) => coq10Ids.has(id))).toBe(false);
    }

    for (const comparison of getComparisons().filter(isIndexable)) {
      expect(comparison.productIds.some((id) => coq10Ids.has(id))).toBe(false);
    }

    for (const guide of getGuides().filter(isIndexable)) {
      expect(JSON.stringify(guide).toLowerCase()).not.toContain("coq10");
    }

    const nowBrand = getBrandBySlug("now-foods");
    expect(nowBrand).toBeDefined();
    expect(isIndexable(nowBrand!)).toBe(true);
    expect(getBrandPageProducts(nowBrand!).some((product) => product.categoryId === "coq10")).toBe(
      false,
    );

    expect(getIndexableBrands().some((brand) => brand.slug === "life-extension")).toBe(false);
    expect(getIndexableBrands().some((brand) => brand.slug === "jarrow-formulas")).toBe(false);
    expect(getIndexableComparisons().some((comparison) => comparison.categoryId === "coq10")).toBe(
      false,
    );

    for (const slug of COQ10_SLUGS) {
      const product = coq10Product(slug);
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

  it("keeps required brand records draft except the existing published NOW Foods brand", () => {
    const lifeExtension = getBrands().find((brand) => brand.id === "life-extension");
    const jarrow = getBrands().find((brand) => brand.id === "jarrow-formulas");
    const now = getBrands().find((brand) => brand.id === "now-foods");

    expect(lifeExtension?.status).toBe("draft");
    expect(lifeExtension?.noindex).toBe(true);
    expect(jarrow?.status).toBe("draft");
    expect(jarrow?.noindex).toBe(true);
    expect(now?.status).toBe("published");
    expect(now?.noindex).toBe(false);
  });
});
