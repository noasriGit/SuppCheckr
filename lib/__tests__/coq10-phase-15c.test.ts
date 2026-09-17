import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import {
  getBrandBySlug,
  getBrandPageProducts,
  getBrands,
  getCategoryBySlug,
  getIndexableBrands,
  getIndexableCategories,
  getIndexableComparisons,
  getIndexableIngredients,
  getIndexableProducts,
  getIngredientBySlug,
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

describe("CoQ10 Phase 15C product records", () => {
  it("loads three unique published records with the locked slugs", () => {
    const products = COQ10_SLUGS.map((slug) => coq10Product(slug));
    expect(products).toHaveLength(3);

    const slugs = getProducts().map((product) => product.slug);
    expect(new Set(slugs).size).toBe(slugs.length);

    const ids = getProducts().map((product) => product.id);
    expect(new Set(ids).size).toBe(ids.length);

    for (const product of products) {
      expect(product.status).toBe("published");
      expect(product.noindex).toBe(false);
      expect(product.isPlaceholder).toBe(false);
      expect(product.affiliate.enabled).toBe(false);
      expect(product.images.product.src).toBe("/images/products/placeholder.svg");
      expect(product.images.product.attribution.toLowerCase()).toContain("todo");
      expect(product.certifications).toEqual([]);
      expect(product.flags.thirdPartyTested).toBe(false);
      expect(product.comparisonGroupIds).toEqual(["coq10-supplements-compared"]);
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

  it("uses index, follow robots, www canonicals, and Product JSON-LD without placeholder images", () => {
    for (const slug of COQ10_SLUGS) {
      const product = coq10Product(slug);
      const path = `/supplements/coq10/products/${slug}`;
      expect(entityNoindex(product)).toBe(false);
      expect(isIndexable(product)).toBe(true);

      const metadata = buildPageMetadata({
        title: product.seo.title ?? product.name,
        description: product.seo.description ?? product.name,
        path,
        noindex: entityNoindex(product),
      });
      expect(metadata.alternates?.canonical).toBe(`${CANONICAL_ORIGIN}${path}`);
      expect(metadata.robots).toEqual({ index: true, follow: true });

      const jsonLd = buildProductJsonLd({
        product,
        path,
      });
      expect(jsonLd).not.toBeNull();
      const serialized = JSON.stringify(jsonLd);
      expect(serialized).toContain('"Product"');
      expect(serialized).toContain('"Review"');
      expect(serialized).not.toContain("placeholder.svg");
      expect(serialized).not.toContain('"image"');
      expect(serialized).not.toContain("aggregateRating");
      expect(serialized).not.toContain('"offers"');
    }
  });

  it("includes the three CoQ10 product URLs in the 85-URL sitemap", () => {
    const xml = sitemap();
    expect(xml).toHaveLength(85);
    expect(getSitemapRecords()).toHaveLength(85);

    for (const entry of xml) {
      expect(entry.url.startsWith(CANONICAL_ORIGIN)).toBe(true);
    }

    const indexableSlugs = new Set(getIndexableProducts().map((product) => product.slug));
    for (const slug of COQ10_SLUGS) {
      expect(indexableSlugs.has(slug)).toBe(true);
      expect(isIndexable(coq10Product(slug))).toBe(true);
    }

    expect(isIndexable(getCategoryBySlug("coq10")!)).toBe(true);
    expect(isIndexable(getIngredientBySlug("coq10")!)).toBe(true);
    expect(getIndexableCategories().some((category) => category.slug === "coq10")).toBe(true);
    expect(getIndexableIngredients().some((ingredient) => ingredient.slug === "coq10")).toBe(
      true,
    );

    const indexablePaths = collectIndexablePageMetadata().map((page) => page.path);
    for (const slug of COQ10_SLUGS) {
      expect(indexablePaths).toContain(`/supplements/coq10/products/${slug}`);
    }
    expect(indexablePaths).toContain("/supplements/coq10");
    expect(indexablePaths).toContain("/ingredients/coq10");
  });

  it("does not enable affiliate mappings and keeps Life Extension and Jarrow brands draft", () => {
    const nowBrand = getBrandBySlug("now-foods");
    expect(nowBrand).toBeDefined();
    expect(isIndexable(nowBrand!)).toBe(true);
    expect(getBrandPageProducts(nowBrand!).some((product) => product.categoryId === "coq10")).toBe(
      true,
    );

    expect(getIndexableBrands().some((brand) => brand.slug === "life-extension")).toBe(false);
    expect(getIndexableBrands().some((brand) => brand.slug === "jarrow-formulas")).toBe(false);
    expect(getIndexableComparisons().some((comparison) => comparison.categoryId === "coq10")).toBe(
      true,
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
