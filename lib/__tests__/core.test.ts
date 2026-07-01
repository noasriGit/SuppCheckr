import { describe, expect, it } from "vitest";
import { computeWeightedScore, validateProfileWeights } from "@/lib/scoring/computeScore";
import { buildAmazonLink } from "@/lib/affiliate/buildAmazonLink";
import { getProductPurchaseUrl } from "@/lib/affiliate/getProductPurchaseUrl";
import { isAmazonUrl, isValidAssociateTag } from "@/lib/affiliate/isAmazonUrl";
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
});

describe("reserved slugs", () => {
  it("blocks system slugs", () => {
    expect(isReservedSlug("compare")).toBe(true);
    expect(isReservedSlug("creatine")).toBe(false);
  });
});
