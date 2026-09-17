import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import {
  getBrandBySlug,
  getBrandPageProducts,
  getBrands,
  getCategories,
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
  publishedBrandHref,
} from "@/lib/content/loader";
import { resolveProductAffiliateCta } from "@/lib/affiliate/resolveProductAffiliateCta";
import {
  assertNoDisallowedProductFields,
  buildGuideArticleJsonLd,
  buildIngredientArticleJsonLd,
  buildProductJsonLd,
} from "@/lib/seo/jsonld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { CANONICAL_ORIGIN } from "@/lib/seo/canonical";
import {
  collectIndexablePageMetadata,
  DESCRIPTION_MAX_LENGTH,
  DESCRIPTION_MIN_LENGTH,
} from "@/lib/seo/entityMetadata";
import { getSitemapRecords } from "@/lib/seo/htmlSitemap";
import { collapseWhitespace } from "@/lib/seo/text";
import { validatePublishedComparison } from "@/lib/validation/publishedContent";

const LIFE_EXTENSION_SLUG = "life-extension-super-ubiquinol-coq10-100-mg-60-softgels";
const JARROW_SLUG = "jarrow-q-absorb-coq10-100-mg-60-softgels";
const NOW_SLUG = "now-foods-coq10-200-mg-60-veg-capsules";
const FORM_GUIDE_SLUG = "ubiquinol-vs-ubiquinone";
const HOWTO_GUIDE_SLUG = "how-to-choose-a-coq10-supplement";

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

function clusterText(): string {
  const category = getCategoryBySlug("coq10")!;
  const ingredient = getIngredientBySlug("coq10")!;
  const comparison = getCategoryComparison("coq10")!;
  const formGuide = getGuideBySlug(FORM_GUIDE_SLUG)!;
  const howToGuide = getGuideBySlug(HOWTO_GUIDE_SLUG)!;
  const products = PUBLISHED_COQ10_PATHS.filter((path) => path.includes("/products/")).map((path) => {
    const slug = path.split("/").at(-1)!;
    return getProductBySlug("coq10", slug)!;
  });
  return JSON.stringify({
    category,
    ingredient,
    comparison,
    formGuide,
    howToGuide,
    products,
  }).toLowerCase();
}

describe("CoQ10 Phase 15E publication candidate", () => {
  it("makes exactly eight CoQ10 routes indexable with www canonicals and index, follow", () => {
    const indexablePaths = collectIndexablePageMetadata().map((page) => page.path);
    const publishedCoq10 = indexablePaths.filter(
      (path) =>
        path.includes("coq10") ||
        path.includes("ubiquinol") ||
        path.includes("ubiquinone"),
    );
    expect(publishedCoq10).toHaveLength(8);
    expect(publishedCoq10.sort()).toEqual([...PUBLISHED_COQ10_PATHS].sort());

    for (const path of PUBLISHED_COQ10_PATHS) {
      const page = collectIndexablePageMetadata().find((entry) => entry.path === path);
      expect(page, path).toBeDefined();
      const metadata = buildPageMetadata({
        title: page!.title,
        description: page!.description,
        path,
        noindex: false,
      });
      expect(metadata.alternates?.canonical).toBe(`${CANONICAL_ORIGIN}${path}`);
      expect(metadata.robots).toEqual({ index: true, follow: true });
    }
  });

  it("grows the sitemap from 77 to 85 www URLs and keeps draft brand pages out", () => {
    const xml = sitemap();
    const records = getSitemapRecords();
    expect(xml).toHaveLength(85);
    expect(records).toHaveLength(85);

    for (const entry of xml) {
      expect(entry.url.startsWith(CANONICAL_ORIGIN)).toBe(true);
      expect(entry.url).toContain("www.suppcheckr.com");
    }

    for (const path of PUBLISHED_COQ10_PATHS) {
      expect(xml.some((entry) => entry.url === `${CANONICAL_ORIGIN}${path}`)).toBe(true);
    }
    expect(xml.some((entry) => entry.url.includes("/brands/life-extension"))).toBe(false);
    expect(xml.some((entry) => entry.url.includes("/brands/jarrow-formulas"))).toBe(false);
  });

  it("lists CoQ10 in the supplements directory and keeps unique metadata", () => {
    expect(getIndexableCategories().some((category) => category.slug === "coq10")).toBe(true);
    expect(getCategoryBySlug("coq10")?.featured).toBe(false);

    const pages = collectIndexablePageMetadata().filter(
      (page) =>
        PUBLISHED_COQ10_PATHS.includes(page.path as (typeof PUBLISHED_COQ10_PATHS)[number]),
    );
    const titles = pages.map((page) => page.title);
    const descriptions = pages.map((page) => page.description);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);

    const category = getCategoryBySlug("coq10")!;
    expect(collapseWhitespace(category.seo.description ?? "").length).toBeGreaterThanOrEqual(
      DESCRIPTION_MIN_LENGTH,
    );
    expect(collapseWhitespace(category.seo.description ?? "").length).toBeLessThanOrEqual(
      DESCRIPTION_MAX_LENGTH,
    );
  });

  it("keeps Life Extension and Jarrow brand pages draft and unpublished-product-safe", () => {
    const lifeExtension = getBrandBySlug("life-extension")!;
    const jarrow = getBrandBySlug("jarrow-formulas")!;
    const now = getBrandBySlug("now-foods")!;

    expect(isIndexable(lifeExtension)).toBe(false);
    expect(isIndexable(jarrow)).toBe(false);
    expect(publishedBrandHref(lifeExtension)).toBeNull();
    expect(publishedBrandHref(jarrow)).toBeNull();
    expect(publishedBrandHref(now)).toBe("/brands/now-foods");
    expect(getIndexableBrands().some((brand) => brand.slug === "life-extension")).toBe(false);
    expect(getIndexableBrands().some((brand) => brand.slug === "jarrow-formulas")).toBe(false);

    const nowProducts = getBrandPageProducts(now);
    expect(nowProducts.some((product) => product.slug === NOW_SLUG)).toBe(true);
  });

  it("matches comparison facts, prices, dates, and scores to product YAML", () => {
    const comparison = getComparisons().find((item) => item.slug === "coq10-supplements-compared")!;
    const lifeExtension = getProductBySlug("coq10", LIFE_EXTENSION_SLUG)!;
    const jarrow = getProductBySlug("coq10", JARROW_SLUG)!;
    const now = getProductBySlug("coq10", NOW_SLUG)!;

    expect(comparison.lockedReviewSet).toBe(true);
    expect(validatePublishedComparison(comparison, [lifeExtension, jarrow, now])).toEqual([]);
    expect(comparison.priceCheckedAt).toBe("2026-09-17");
    expect(lifeExtension.pricing.lastPriceCheckedAt).toBe("2026-09-17");
    expect(jarrow.pricing.lastPriceCheckedAt).toBe("2026-09-17");
    expect(now.pricing.lastPriceCheckedAt).toBe("2026-09-17");

    expect(lifeExtension.pricing.msrp).toBe(37.5);
    expect(lifeExtension.pricing.pricePerServing).toBe(0.63);
    expect(lifeExtension.pricing.pricePerActiveDose).toBe(0.63);
    expect(lifeExtension.rating.overallScore).toBe(74);

    expect(jarrow.pricing.msrp).toBe(34.99);
    expect(jarrow.pricing.pricePerServing).toBe(0.58);
    expect(jarrow.pricing.pricePerActiveDose).toBe(0.58);
    expect(jarrow.rating.overallScore).toBe(74);
    expect(jarrow.supplementFacts.allergens).toEqual(["Soy"]);
    expect(JSON.stringify(jarrow).toLowerCase()).toContain("soy");

    expect(now.pricing.msrp).toBe(37.99);
    expect(now.pricing.pricePerServing).toBe(0.63);
    expect(now.pricing.pricePerActiveDose).toBe(0.32);
    expect(now.rating.overallScore).toBe(86);
    expect(now.thirdPartyTesting.status).toBe("claimed");
    expect(now.thirdPartyTesting.details.toLowerCase()).toContain("manufacturer");
    expect(now.flags.thirdPartyTested).toBe(false);
  });

  it("emits Product JSON-LD without placeholder images, offers, or affiliate claims", () => {
    const brands = getBrands();
    const category = getCategoryBySlug("coq10")!;
    for (const slug of [LIFE_EXTENSION_SLUG, JARROW_SLUG, NOW_SLUG]) {
      const product = getProductBySlug("coq10", slug)!;
      const brand = brands.find((item) => item.id === product.brandId);
      const path = `/supplements/coq10/products/${slug}`;
      const jsonLd = buildProductJsonLd({ product, brand, category, path });
      expect(jsonLd).not.toBeNull();
      const serialized = JSON.stringify(jsonLd);
      expect(serialized).toContain(product.name);
      expect(serialized).toContain(brand?.name);
      expect(serialized).toContain(`"ratingValue":${product.rating.overallScore}`);
      expect(serialized).toContain(CANONICAL_ORIGIN);
      expect(serialized).not.toContain("placeholder.svg");
      expect(serialized).not.toContain("draft page");
      expect(serialized.toLowerCase()).not.toContain("best overall");
      expect(serialized.toLowerCase()).not.toContain("independently certified");
      expect(assertNoDisallowedProductFields(jsonLd!)).toEqual([]);
    }

    const formGuide = getGuideBySlug(FORM_GUIDE_SLUG)!;
    const howToGuide = getGuideBySlug(HOWTO_GUIDE_SLUG)!;
    const ingredient = getIngredientBySlug("coq10")!;
    expect(buildGuideArticleJsonLd(formGuide, `/guides/${FORM_GUIDE_SLUG}`)).not.toBeNull();
    expect(buildGuideArticleJsonLd(howToGuide, `/guides/${HOWTO_GUIDE_SLUG}`)).not.toBeNull();
    expect(buildIngredientArticleJsonLd(ingredient, "/ingredients/coq10")).not.toBeNull();
  });

  it("keeps conservative claims, no Best Overall wording, and no Amazon affiliate CTAs", () => {
    const text = clusterText();
    expect(text).not.toContain("best overall");
    expect(text).not.toContain("best for everyone");
    expect(text).not.toContain("amazon.com");
    expect(text).toContain("manufacturer");
    expect(text).toContain("soy");
    expect(text).toContain("not a complete market ranking");

    for (const slug of [LIFE_EXTENSION_SLUG, JARROW_SLUG, NOW_SLUG]) {
      const product = getProductBySlug("coq10", slug)!;
      expect(product.affiliate.enabled).toBe(false);
      const cta = resolveProductAffiliateCta(product, `/supplements/coq10/products/${slug}`, {
        associateTag: "suppcheckr-20",
      });
      expect(cta.variant).toBe("retailer");
      expect(cta.href).not.toContain("amazon.com");
      expect(cta.href).not.toContain("tag=");
    }
  });

  it("does not regress existing published clusters", () => {
    expect(getIndexableCategories().map((category) => category.slug).sort()).toEqual(
      ["coq10", "creatine", "electrolytes", "magnesium", "vitamin-c"].sort(),
    );
    expect(getIndexableGuides().some((guide) => guide.slug === "what-is-creatine")).toBe(true);
    expect(getIndexableIngredients().some((ingredient) => ingredient.slug === "creatine-monohydrate")).toBe(
      true,
    );
    expect(getIndexableComparisons().some((comparison) => comparison.slug === "creatine-monohydrate-compared")).toBe(
      true,
    );
    expect(getIndexableProducts().some((product) => product.slug === "now-sports-creatine-monohydrate-capsules-120")).toBe(
      true,
    );
    expect(getCategories().filter((category) => category.slug === "coq10")).toHaveLength(1);
  });
});
