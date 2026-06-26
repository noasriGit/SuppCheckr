import { describe, expect, it } from "vitest";
import { computeWeightedScore, validateProfileWeights } from "@/lib/scoring/computeScore";
import { buildAmazonLink } from "@/lib/affiliate/buildAmazonLink";
import { isReservedSlug } from "@/config/reserved-slugs";
import { shouldShowAdPlaceholder, shouldLoadLiveAds } from "@/config/monetization";

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
  it("shows placeholders when showPlaceholders is true and route is allowed", () => {
    expect(shouldShowAdPlaceholder("/")).toBe(true);
    expect(shouldShowAdPlaceholder("/privacy-policy")).toBe(false);
  });

  it("does not load live ads when disabled", () => {
    expect(shouldLoadLiveAds("/")).toBe(false);
  });
});

describe("affiliate", () => {
  it("returns placeholder when disabled", () => {
    const link = buildAmazonLink({ url: "https://amazon.com/dp/TEST" });
    expect(link.isPlaceholder).toBe(true);
    expect(link.href).toBe("#amazon-placeholder");
    expect(link.rel).toContain("sponsored");
  });
});

describe("reserved slugs", () => {
  it("blocks system slugs", () => {
    expect(isReservedSlug("compare")).toBe(true);
    expect(isReservedSlug("creatine")).toBe(false);
  });
});
