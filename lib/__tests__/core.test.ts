import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { computeWeightedScore, validateProfileWeights } from "@/lib/scoring/computeScore";
import { buildAmazonLink } from "@/lib/affiliate/buildAmazonLink";
import { getProductPurchaseUrl } from "@/lib/affiliate/getProductPurchaseUrl";
import { resolveProductAffiliateCta } from "@/lib/affiliate/resolveProductAffiliateCta";
import { isAmazonUrl, isValidAssociateTag } from "@/lib/affiliate/isAmazonUrl";
import { getProducts, isActiveContent } from "@/lib/content/loader";
import { isReservedSlug } from "@/config/reserved-slugs";
import {
  monetizationConfig,
  isAffiliateEnabledForPath,
  isAffiliateFrameworkActive,
  shouldShowAdPlaceholder,
  shouldLoadLiveAds,
} from "@/config/monetization";

const mockProfile = {
  id: "default",
  categoryId: null,
  label: "Default",
  notes: "",
  criteriaWeights: {
    ingredientTransparency: 12,
    doseTransparency: 12,
    evidenceAlignment: 11,
    formulaQuality: 11,
    thirdPartyTesting: 12,
    priceValue: 12,
    additives: 9,
    labelClarity: 10,
    brandTransparency: 11,
  },
};

describe("scoring", () => {
  it("computes weighted score", () => {
    const score = computeWeightedScore(
      {
        ingredientTransparency: 80,
        doseTransparency: 80,
        evidenceAlignment: 80,
        formulaQuality: 80,
        thirdPartyTesting: 80,
        priceValue: 80,
        additives: 80,
        labelClarity: 80,
        brandTransparency: 80,
      },
      mockProfile,
    );
    expect(score).toBe(80);
  });

  it("validates profile weights sum to 100", () => {
    expect(validateProfileWeights(mockProfile)).toBe(true);
  });
});

describe("ads", () => {
  it("keeps live ads disabled in prelaunch config", () => {
    expect(monetizationConfig.ads.enabled).toBe(false);
    expect(monetizationConfig.ads.loadScripts).toBe(false);
  });

  it("shows placeholders when showPlaceholders is true and route is allowed", () => {
    expect(shouldShowAdPlaceholder("/")).toBe(true);
    expect(shouldShowAdPlaceholder("/privacy-policy")).toBe(false);
  });

  it("does not load live ads when disabled", () => {
    expect(shouldLoadLiveAds("/")).toBe(false);
    expect(shouldLoadLiveAds("/supplements/creatine")).toBe(false);
  });
});

describe("affiliate", () => {
  it("keeps global affiliate framework enabled after Phase 7A", () => {
    expect(monetizationConfig.affiliate.enabled).toBe(true);
    expect(monetizationConfig.affiliate.disableGlobally).toBe(false);
    expect(isAffiliateFrameworkActive()).toBe(true);
  });

  it("enables affiliate paths when framework is active", () => {
    expect(isAffiliateEnabledForPath("/")).toBe(true);
    expect(isAffiliateEnabledForPath("/supplements/creatine/products/example")).toBe(true);
  });

  it("returns placeholder when associate tag is missing", () => {
    expect(monetizationConfig.affiliate.amazonAssociateTag).toBe("");
    const link = buildAmazonLink({ url: "https://www.amazon.com/dp/B00TEST123" });
    expect(link.isPlaceholder).toBe(true);
    expect(link.href).toBe("#amazon-placeholder");
    expect(link.rel).toContain("sponsored");
  });

  it("creates tagged Amazon URL when enabled with valid tag and Amazon URL", () => {
    const link = buildAmazonLink({
      url: "https://www.amazon.com/dp/B00TEST123",
      associateTag: "suppcheckr-20",
    });
    expect(link.isPlaceholder).toBe(false);
    expect(link.href).toContain("tag=suppcheckr-20");
    expect(link.href).toContain("amazon.com/dp/B00TEST123");
  });

  it("replaces existing tag param instead of duplicating", () => {
    const link = buildAmazonLink({
      url: "https://www.amazon.com/dp/B00TEST123?tag=other-20",
      associateTag: "suppcheckr-20",
    });
    expect(link.isPlaceholder).toBe(false);
    expect(link.href).toContain("tag=suppcheckr-20");
    expect(link.href).not.toContain("other-20");
  });

  it("uses View on Amazon CTA label for affiliate products", () => {
    expect(monetizationConfig.affiliate.ctaLabel).toBe("View on Amazon");
  });

  it("returns placeholder for non-Amazon URL even with tag", () => {
    const link = buildAmazonLink({
      url: "https://nutricost.com/products/example",
      associateTag: "suppcheckr-20",
    });
    expect(link.isPlaceholder).toBe(true);
    expect(link.href).not.toContain("tag=");
  });

  it("rejects placeholder associate tags", () => {
    expect(isValidAssociateTag("yourtag-20")).toBe(false);
    expect(isValidAssociateTag("example-tag-20")).toBe(false);
    expect(isValidAssociateTag("")).toBe(false);
    expect(isValidAssociateTag("suppcheckr-20")).toBe(true);
  });

  it("detects Amazon URLs", () => {
    expect(isAmazonUrl("https://www.amazon.com/dp/B00TEST123")).toBe(true);
    expect(isAmazonUrl("https://nutricost.com/products/example")).toBe(false);
    expect(isAmazonUrl("#amazon-placeholder")).toBe(false);
  });

  it("resolves Amazon purchase URL when affiliate enabled", () => {
    const url = getProductPurchaseUrl({
      affiliate: { enabled: true },
      retailers: [
        {
          retailerId: "nutricost",
          url: "https://nutricost.com/products/example",
          isPrimary: true,
        },
        {
          retailerId: "amazon",
          url: "https://www.amazon.com/dp/B00GL2HMES",
          isPrimary: false,
        },
      ],
    } as Parameters<typeof getProductPurchaseUrl>[0]);
    expect(url).toBe("https://www.amazon.com/dp/B00GL2HMES");
  });

  it("keeps primary retailer URL when affiliate disabled", () => {
    const url = getProductPurchaseUrl({
      affiliate: { enabled: false },
      retailers: [
        {
          retailerId: "nutricost",
          url: "https://nutricost.com/products/example",
          isPrimary: true,
        },
        {
          retailerId: "amazon",
          url: "https://www.amazon.com/dp/B00GL2HMES",
          isPrimary: false,
        },
      ],
    } as Parameters<typeof getProductPurchaseUrl>[0]);
    expect(url).toBe("https://nutricost.com/products/example");
  });

  const affiliateEnabledProduct = {
    affiliate: { enabled: true },
    retailers: [
      {
        retailerId: "nutricost",
        url: "https://nutricost.com/products/example",
        isPrimary: true,
      },
      {
        retailerId: "amazon",
        url: "https://www.amazon.com/dp/B00GL2HMES",
        isPrimary: false,
      },
    ],
  } as Parameters<typeof resolveProductAffiliateCta>[0];

  const affiliateDisabledProduct = {
    affiliate: { enabled: false },
    retailers: [
      {
        retailerId: "klean-athlete",
        url: "https://www.kleanathlete.com/klean-magnesium.html",
        isPrimary: true,
      },
    ],
  } as Parameters<typeof resolveProductAffiliateCta>[0];

  it("resolveProductAffiliateCta fails closed when associate tag is missing", () => {
    const cta = resolveProductAffiliateCta(
      affiliateEnabledProduct,
      "/supplements/creatine/products/nutricost-creatine-monohydrate-500g",
    );
    expect(cta.variant).toBe("amazon");
    expect(cta.isPlaceholder).toBe(true);
    expect(cta.href).toBe("#amazon-placeholder");
    expect(cta.label).toBe("View on Amazon");
  });

  it("resolveProductAffiliateCta creates tagged Amazon href when tag is configured", () => {
    const cta = resolveProductAffiliateCta(
      affiliateEnabledProduct,
      "/supplements/creatine/products/nutricost-creatine-monohydrate-500g",
      { associateTag: "suppcheckr-20" },
    );
    expect(cta.variant).toBe("amazon");
    expect(cta.isPlaceholder).toBe(false);
    expect(cta.href).toContain("tag=suppcheckr-20");
    expect(cta.href).toContain("amazon.com/dp/B00GL2HMES");
    expect(cta.label).toBe("View on Amazon");
  });

  it("resolveProductAffiliateCta keeps Klean Magnesium on direct retailer link", () => {
    const cta = resolveProductAffiliateCta(
      affiliateDisabledProduct,
      "/supplements/magnesium/products/klean-athlete-klean-magnesium",
      { associateTag: "suppcheckr-20" },
    );
    expect(cta.variant).toBe("retailer");
    expect(cta.href).toBe("https://www.kleanathlete.com/klean-magnesium.html");
    expect(cta.label).toBe("Check current price at retailer");
    expect(cta.href).not.toContain("amazon.com");
  });

  it("resolveProductAffiliateCta uses retailer CTA for non-affiliate direct products", () => {
    const cta = resolveProductAffiliateCta(
      affiliateDisabledProduct,
      "/supplements/magnesium/products/klean-athlete-klean-magnesium",
    );
    expect(cta.variant).toBe("retailer");
    expect(cta.label).toBe("Check current price at retailer");
  });

  it("AffiliateButton client component does not read AMAZON_ASSOCIATE_TAG", () => {
    const source = readFileSync(
      join(process.cwd(), "components/monetization/AffiliateButton.tsx"),
      "utf8",
    );
    expect(source).toContain('"use client"');
    expect(source).not.toContain("buildAmazonLink");
    expect(source).not.toContain("AMAZON_ASSOCIATE_TAG");
    expect(source).not.toContain("monetizationConfig");
    expect(source).not.toContain("resolveProductAffiliateCta");
  });

  it("has exactly 18 active affiliate-enabled products with untagged Amazon URLs", () => {
    const active = getProducts().filter(isActiveContent);
    const affiliateActive = active.filter((p) => p.affiliate.enabled);
    expect(affiliateActive).toHaveLength(18);

    const kleanMag = active.find((p) => p.slug === "klean-athlete-klean-magnesium");
    expect(kleanMag?.affiliate.enabled).toBe(false);

    for (const product of affiliateActive) {
      const amazon = product.retailers.find((r) => isAmazonUrl(r.url));
      expect(amazon?.url).toBeDefined();
      expect(amazon!.url).not.toContain("tag=");
    }
  });

  it("Vitamin C activated products have untagged Amazon URLs and tagged generated links", () => {
    const active = getProducts().filter(isActiveContent);
    const vitaminCActivated = active.filter(
      (p) => p.categoryId === "vitamin-c" && p.affiliate.enabled,
    );
    expect(vitaminCActivated).toHaveLength(5);

    const nowFoods = vitaminCActivated.find(
      (p) => p.slug === "now-foods-vitamin-c-1000-veg-capsules",
    );
    expect(nowFoods?.retailers.find((r) => r.retailerId === "amazon")?.url).toBe(
      "https://www.amazon.com/dp/B001AIXCU6",
    );

    const cta = resolveProductAffiliateCta(
      nowFoods!,
      "/supplements/vitamin-c/products/now-foods-vitamin-c-1000-veg-capsules",
      { associateTag: "suppcheckr-20" },
    );
    expect(cta.variant).toBe("amazon");
    expect(cta.isPlaceholder).toBe(false);
    expect(cta.href).toContain("tag=suppcheckr-20");
    expect(cta.href).toContain("amazon.com/dp/B001AIXCU6");
    expect(cta.label).toBe("View on Amazon");
  });

  it("Klean Magnesium remains held back without Amazon affiliate CTA", () => {
    const active = getProducts().filter(isActiveContent);
    const kleanMag = active.find((p) => p.slug === "klean-athlete-klean-magnesium");
    expect(kleanMag?.affiliate.enabled).toBe(false);
    expect(kleanMag?.retailers.some((r) => isAmazonUrl(r.url))).toBe(false);

    const cta = resolveProductAffiliateCta(
      kleanMag!,
      "/supplements/magnesium/products/klean-athlete-klean-magnesium",
      { associateTag: "suppcheckr-20" },
    );
    expect(cta.variant).toBe("retailer");
    expect(cta.href).not.toContain("amazon.com");
  });

  it("Electrolytes activated products have untagged Amazon URLs and tagged generated links", () => {
    const active = getProducts().filter(isActiveContent);
    const electrolytesActivated = active.filter(
      (p) => p.categoryId === "electrolytes" && p.affiliate.enabled,
    );
    expect(electrolytesActivated).toHaveLength(4);

    const cases = [
      { slug: "lmnt-citrus-salt-30", asin: "B07TT8B1JJ" },
      { slug: "liquid-iv-hydration-multiplier-lemon-lime-16", asin: "B01IT9NLHW" },
      { slug: "ultima-replenisher-lemonade-20-sticks", asin: "B01IIGOR42" },
      { slug: "thorne-catalyte-lemon-lime-30-servings", asin: "B07VS6XSN7" },
    ] as const;

    for (const { slug, asin } of cases) {
      const product = electrolytesActivated.find((p) => p.slug === slug);
      expect(product?.retailers.find((r) => r.retailerId === "amazon")?.url).toBe(
        `https://www.amazon.com/dp/${asin}`,
      );

      const cta = resolveProductAffiliateCta(
        product!,
        `/supplements/electrolytes/products/${slug}`,
        { associateTag: "suppcheckr-20" },
      );
      expect(cta.variant).toBe("amazon");
      expect(cta.isPlaceholder).toBe(false);
      expect(cta.href).toBe(`https://www.amazon.com/dp/${asin}?tag=suppcheckr-20`);
      expect(cta.label).toBe("View on Amazon");
      expect(cta.rel).toBe("sponsored nofollow");
      expect(cta.showAffiliateDisclosure).toBe(true);
    }
  });

  it("all 18 affiliate-enabled products generate tagged Amazon CTAs with associate tag", () => {
    const active = getProducts().filter(isActiveContent);
    const affiliateActive = active.filter((p) => p.affiliate.enabled);
    expect(affiliateActive).toHaveLength(18);

    for (const product of affiliateActive) {
      const cta = resolveProductAffiliateCta(
        product,
        `/supplements/${product.categoryId}/products/${product.slug}`,
        { associateTag: "suppcheckr-20" },
      );
      expect(cta.variant).toBe("amazon");
      expect(cta.isPlaceholder).toBe(false);
      expect(cta.href).toContain("tag=suppcheckr-20");
      expect(cta.href).not.toContain("#amazon-placeholder");
      expect(cta.rel).toBe("sponsored nofollow");
    }
  });

  it("Nuun Sport Lemon Lime remains held back without Amazon affiliate CTA", () => {
    const active = getProducts().filter(isActiveContent);
    const nuun = active.find((p) => p.slug === "nuun-sport-lemon-lime-10-tablets");
    expect(nuun?.affiliate.enabled).toBe(false);
    expect(nuun?.retailers.some((r) => isAmazonUrl(r.url))).toBe(false);

    const cta = resolveProductAffiliateCta(
      nuun!,
      "/supplements/electrolytes/products/nuun-sport-lemon-lime-10-tablets",
      { associateTag: "suppcheckr-20" },
    );
    expect(cta.variant).toBe("retailer");
    expect(cta.href).not.toContain("amazon.com");
  });
});

describe("reserved slugs", () => {
  it("blocks system slugs", () => {
    expect(isReservedSlug("compare")).toBe(true);
    expect(isReservedSlug("creatine")).toBe(false);
  });
});
