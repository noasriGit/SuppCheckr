import { describe, expect, it } from "vitest";
import {
  isPlaceholderProductImage,
  resolveProductImageAlt,
  resolveProductImageContext,
} from "@/lib/product/productImageContext";
import type { Product } from "@/lib/schemas/product";

const baseProduct = {
  id: "test",
  slug: "test-product",
  name: "Test Product",
  brandId: "brand",
  categoryId: "creatine",
  images: {
    product: {
      src: "/images/products/placeholder.svg",
      alt: "Test — product photo pending",
      attribution: "Placeholder",
    },
    label: null,
  },
  supplementFacts: {
    servingSize: "1 scoop (5 g)",
    servingsPerContainer: 100,
    ingredients: [{ name: "Creatine Monohydrate", amount: "5 g" }],
    otherIngredients: [],
    allergens: [],
  },
  pricing: {
    msrp: 10,
    currency: "USD",
    pricePerServing: 0.1,
    lastManualUpdate: "2026-06-26",
    lastPriceCheckedAt: "2026-06-26",
  },
  retailers: [],
  certifications: [],
  thirdPartyTesting: { status: "unknown" as const, details: "", sources: [] },
  additives: [],
  flags: {},
  rating: {
    profileId: "creatine",
    criteriaScores: {
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
    overallScore: 80,
  },
  pros: [],
  cons: [],
  bestFor: [],
  avoidIf: [],
  labelTransparencyNotes: "",
  evidenceNotes: "",
  relatedProductIds: [],
  comparisonGroupIds: [],
  claims: [],
  sources: [],
  affiliate: { enabled: false },
  seo: {},
  status: "published" as const,
  isPlaceholder: false,
  noindex: false,
  claimRiskLevel: "low" as const,
  editorial: {
    lastUpdated: "2026-06-26",
    lastReviewed: "2026-06-26",
    reviewedBy: "editorial",
    updateLog: [],
  },
} satisfies Product;

describe("productImageContext", () => {
  it("detects placeholder image paths", () => {
    expect(isPlaceholderProductImage("/images/products/placeholder.svg")).toBe(true);
    expect(isPlaceholderProductImage("/images/products/nutricost.jpg")).toBe(false);
  });

  it("derives creatine powder context", () => {
    const context = resolveProductImageContext({
      ...baseProduct,
      name: "Nutricost Creatine Monohydrate Powder (500 g)",
    });
    expect(context.categoryLabel).toBe("Creatine");
    expect(context.format).toBe("powder");
    expect(context.formatLabel).toBe("Powder");
    expect(context.primaryFormLabel).toBe("Creatine monohydrate");
  });

  it("derives magnesium capsule context", () => {
    const context = resolveProductImageContext({
      ...baseProduct,
      categoryId: "magnesium",
      name: "Klean Athlete Klean Magnesium (90 Vegetarian Capsules)",
      supplementFacts: {
        ...baseProduct.supplementFacts,
        servingSize: "1 vegetarian capsule",
        ingredients: [{ name: "Magnesium (as magnesium glycinate)", amount: "120 mg" }],
      },
    });
    expect(context.categoryLabel).toBe("Magnesium");
    expect(context.format).toBe("capsule");
    expect(context.primaryFormLabel).toBe("Magnesium glycinate");
  });

  it("derives magnesium tablet context", () => {
    const context = resolveProductImageContext({
      ...baseProduct,
      categoryId: "magnesium",
      name: "Nature Made Magnesium Oxide 250 mg Tablets (100 Tablets)",
      supplementFacts: {
        ...baseProduct.supplementFacts,
        servingSize: "1 tablet",
        ingredients: [{ name: "Magnesium (as magnesium oxide)", amount: "250 mg" }],
      },
    });
    expect(context.format).toBe("tablet");
    expect(context.primaryFormLabel).toBe("Magnesium oxide");
  });

  it("uses honest placeholder alt text", () => {
    const alt = resolveProductImageAlt(baseProduct, true);
    expect(alt).toContain("Label-first review illustration");
    expect(alt).toContain("product photo not shown");
    expect(alt).not.toContain("pending");
  });
});
