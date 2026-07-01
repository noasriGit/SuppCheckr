import { describe, expect, it } from "vitest";
import {
  validateCitationBidirectional,
  validateClaimSourceTypes,
  validateClaimsHaveCitations,
} from "@/lib/claims/validateClaims";
import { isAllowedSourceForClaim } from "@/lib/claims/sourceTypeRules";
import { computeWeightedScore } from "@/lib/scoring/computeScore";
import { validateForeignKeys } from "@/lib/validation/foreignKeys";
import {
  isPublishedEntity,
  validateProductScoreConsistency,
  validatePublishedComparison,
  validateProductAffiliate,
} from "@/lib/validation/publishedContent";
import type { Claim, Citation } from "@/lib/schemas/common";
import type { Product } from "@/lib/schemas/product";
import type { Comparison } from "@/lib/schemas/comparison";

const creatineProfile = {
  id: "creatine",
  categoryId: "creatine",
  label: "Creatine",
  notes: "",
  criteriaWeights: {
    ingredientTransparency: 11,
    doseTransparency: 17,
    evidenceAlignment: 9,
    formulaQuality: 10,
    thirdPartyTesting: 15,
    priceValue: 13,
    additives: 9,
    labelClarity: 10,
    brandTransparency: 6,
  },
};

const baseScores = {
  ingredientTransparency: 80,
  doseTransparency: 85,
  evidenceAlignment: 90,
  formulaQuality: 88,
  thirdPartyTesting: 70,
  priceValue: 75,
  additives: 92,
  labelClarity: 86,
  brandTransparency: 65,
};

describe("claim validation", () => {
  it("requires citations for medium-risk claims in strict mode", () => {
    const claims: Claim[] = [
      {
        id: "health-1",
        text: "Creatine is studied for muscle energy support.",
        claimType: "health_context",
        claimRiskLevel: "medium",
        citationIds: [],
      },
    ];
    const issues = validateClaimsHaveCitations(claims, [], { strict: true });
    expect(issues.some((i) => i.level === "error")).toBe(true);
  });

  it("enforces health_context source types", () => {
    const claims: Claim[] = [
      {
        id: "health-1",
        text: "Creatine is studied for muscle energy support.",
        claimType: "health_context",
        claimRiskLevel: "medium",
        citationIds: ["price-1"],
      },
    ];
    const citations: Citation[] = [
      {
        id: "price-1",
        title: "Retailer",
        publisher: "Example",
        url: "https://example.com/product",
        accessDate: "2026-06-01",
        sourceType: "retailer_listing",
        supportsClaimIds: ["health-1"],
      },
    ];
    const issues = validateClaimSourceTypes(claims, citations, { strict: true });
    expect(issues.length).toBeGreaterThan(0);
    expect(isAllowedSourceForClaim("health_context", "PubMed")).toBe(true);
    expect(isAllowedSourceForClaim("health_context", "retailer_listing")).toBe(false);
  });

  it("validates bidirectional citation links", () => {
    const claims: Claim[] = [
      {
        id: "label-1",
        text: "Label states 5 g creatine monohydrate per serving.",
        claimType: "label_fact",
        claimRiskLevel: "medium",
        citationIds: ["label-src-1"],
      },
    ];
    const citations: Citation[] = [
      {
        id: "label-src-1",
        title: "Label",
        publisher: "Brand",
        url: "https://brand.example/label.pdf",
        accessDate: "2026-06-01",
        sourceType: "brand_label",
        supportsClaimIds: [],
      },
    ];
    const issues = validateCitationBidirectional(claims, citations, { strict: true });
    expect(issues.some((i) => i.message.includes("supportsClaimIds"))).toBe(true);
  });
});

describe("score consistency", () => {
  it("computes creatine weighted score", () => {
    const expected = computeWeightedScore(baseScores, creatineProfile);
    expect(expected).toBeGreaterThan(0);
    expect(expected).toBeLessThanOrEqual(100);
  });
});

describe("published entity helpers", () => {
  it("identifies published entities", () => {
    expect(isPublishedEntity({ status: "published", isPlaceholder: false })).toBe(true);
    expect(isPublishedEntity({ status: "draft", isPlaceholder: false })).toBe(false);
  });
});

describe("comparison publication gate", () => {
  it("requires five products for published category comparison", () => {
    const comparison = {
      id: "cmp-1",
      slug: "creatine-compared",
      type: "category_ranking" as const,
      title: "Compare",
      categoryId: "creatine",
      subtitle: "",
      productIds: ["a", "b", "c"],
      comparisonFields: [],
      methodologyNote: "",
      orderingNote: "",
      priceCheckedAt: "",
      productCriterionLabels: [],
      caveats: [],
      filtersEnabled: true,
      defaultSort: "overallScore",
      sources: [],
      status: "published" as const,
      isPlaceholder: false,
      noindex: false,
      claimRiskLevel: "low" as const,
      editorial: {
        lastUpdated: "2026-06-01",
        lastReviewed: "2026-06-01",
        reviewedBy: "editor",
        updateLog: [],
      },
    } satisfies Comparison;

    const errors = validatePublishedComparison(comparison, []);
    expect(errors.some((e) => e.includes("at least 5 products"))).toBe(true);
  });
});

describe("foreign keys", () => {
  it("flags missing brand on product", () => {
    const product = {
      id: "p1",
      slug: "product-a",
      name: "Product A",
      brandId: "missing-brand",
      categoryId: "creatine",
      relatedProductIds: [],
      comparisonGroupIds: [],
      rating: { profileId: "creatine", criteriaScores: baseScores, overallScore: 80 },
    } as unknown as Product;

    const errors = validateForeignKeys({
      categories: [
        {
          id: "creatine",
          slug: "creatine",
          name: "Creatine",
          pluralName: "Creatine",
          description: "",
          shortDescription: "",
          featured: false,
          relatedCategories: [],
          relatedGuides: [],
          buyersGuideSlug: null,
          scoringProfileId: "creatine",
          ingredientSlug: null,
          intro: "",
          evaluationSummary: "",
          clusterScopeNote: "",
          buyingConsiderations: [],
          faq: [],
          featuredProductIds: [],
          sources: [],
          seo: {},
          status: "placeholder",
          isPlaceholder: true,
          noindex: true,
          claimRiskLevel: "low",
          editorial: {
            lastUpdated: "",
            lastReviewed: "",
            reviewedBy: "",
            updateLog: [],
          },
        },
      ],
      products: [product],
      brands: [],
      ingredients: [],
      comparisons: [],
      guides: [],
      scoringProfiles: [creatineProfile],
    });

    expect(errors.some((e) => e.includes("brandId"))).toBe(true);
  });
});

describe("published product monetization gate", () => {
  it("rejects affiliate.enabled without a valid Amazon retailer URL", () => {
    const expectedScore = computeWeightedScore(baseScores, creatineProfile);
    const product = {
      id: "p1",
      status: "published",
      isPlaceholder: false,
      noindex: false,
      affiliate: { enabled: true },
      retailers: [
        {
          retailerId: "nutricost",
          url: "https://nutricost.com/products/example",
          isPrimary: true,
        },
      ],
      editorial: {
        reviewedBy: "editor",
        lastReviewed: "2026-06-01",
        lastUpdated: "2026-06-01",
        updateLog: [],
      },
      categoryId: "creatine",
      rating: {
        profileId: "creatine",
        criteriaScores: baseScores,
        overallScore: expectedScore,
      },
      sources: [
        {
          id: "s1",
          title: "Label",
          publisher: "Brand",
          url: "https://brand.example/label",
          accessDate: "2026-06-01",
          sourceType: "brand_label",
          supportsClaimIds: [],
        },
        {
          id: "s2",
          title: "Retailer",
          publisher: "Store",
          url: "https://store.example/product",
          accessDate: "2026-06-01",
          sourceType: "retailer_listing",
          supportsClaimIds: [],
        },
      ],
      pricing: {
        lastPriceCheckedAt: "2026-06-01",
        msrp: 10,
        currency: "USD",
        pricePerServing: 0.5,
        lastManualUpdate: "2026-06-01",
      },
    } as unknown as Product;

    const errors = validateProductAffiliate(product);
    expect(errors.some((e) => e.includes("valid Amazon product URL"))).toBe(true);
  });

  it("allows affiliate.enabled when Amazon retailer URL is present", () => {
    const expectedScore = computeWeightedScore(baseScores, creatineProfile);
    const product = {
      id: "p1",
      status: "published",
      isPlaceholder: false,
      noindex: false,
      affiliate: { enabled: true },
      retailers: [
        {
          retailerId: "amazon",
          url: "https://www.amazon.com/dp/B00TEST123",
          isPrimary: true,
        },
      ],
      editorial: {
        reviewedBy: "editor",
        lastReviewed: "2026-06-01",
        lastUpdated: "2026-06-01",
        updateLog: [],
      },
      categoryId: "creatine",
      rating: {
        profileId: "creatine",
        criteriaScores: baseScores,
        overallScore: expectedScore,
      },
      sources: [
        {
          id: "s1",
          title: "Label",
          publisher: "Brand",
          url: "https://brand.example/label",
          accessDate: "2026-06-01",
          sourceType: "brand_label",
          supportsClaimIds: [],
        },
        {
          id: "s2",
          title: "Retailer",
          publisher: "Store",
          url: "https://store.example/product",
          accessDate: "2026-06-01",
          sourceType: "retailer_listing",
          supportsClaimIds: [],
        },
      ],
      pricing: {
        lastPriceCheckedAt: "2026-06-01",
        msrp: 10,
        currency: "USD",
        pricePerServing: 0.5,
        lastManualUpdate: "2026-06-01",
      },
    } as unknown as Product;

    const errors = validateProductAffiliate(product);
    expect(errors).toEqual([]);
  });

  it("rejects affiliate.enabled on draft products", () => {
    const product = {
      id: "p1",
      status: "draft",
      isPlaceholder: false,
      affiliate: { enabled: true },
      retailers: [
        {
          retailerId: "amazon",
          url: "https://www.amazon.com/dp/B00TEST123",
          isPrimary: true,
        },
      ],
    } as unknown as Product;

    const errors = validateProductAffiliate(product);
    expect(errors.some((e) => e.includes("draft"))).toBe(true);
  });
});

describe("product score drift", () => {
  it("detects overallScore mismatch", () => {
    const expected = computeWeightedScore(baseScores, creatineProfile);
    const product = {
      id: "p1",
      categoryId: "creatine",
      rating: {
        profileId: "creatine",
        criteriaScores: baseScores,
        overallScore: expected + 5,
      },
    } as Product;

    const errors = validateProductScoreConsistency(product);
    expect(errors.some((e) => e.includes("does not match computed score"))).toBe(true);
  });
});
