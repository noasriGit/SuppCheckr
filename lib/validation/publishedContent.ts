import type { Brand } from "@/lib/schemas/brand";
import type { Category } from "@/lib/schemas/category";
import type { Comparison, Guide } from "@/lib/schemas/comparison";
import type { Ingredient } from "@/lib/schemas/ingredient";
import type { Product } from "@/lib/schemas/product";
import type { Citation } from "@/lib/schemas/common";
import { computeWeightedScore } from "@/lib/scoring/computeScore";
import { resolveScoringProfile } from "@/lib/content/loader";

export const MIN_PUBLISHED_COMPARISON_PRODUCTS = 5;
export const MIN_PUBLISHED_INGREDIENT_SOURCES = 2;
export const MIN_PUBLISHED_CATEGORY_SOURCES = 3;
export const MIN_PUBLISHED_GUIDE_SOURCES = 2;

export function isPublishedEntity(entity: {
  status: string;
  isPlaceholder: boolean;
}): boolean {
  return entity.status === "published" && !entity.isPlaceholder;
}

export function isRealCitationUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return !host.includes("example.com") && !host.includes("example.org");
  } catch {
    return false;
  }
}

export function validatePublishedEditorial(
  entity: { editorial: { reviewedBy: string; lastReviewed: string } },
  label: string,
): string[] {
  const errors: string[] = [];
  if (!entity.editorial.reviewedBy.trim()) {
    errors.push(`${label}: published content requires editorial.reviewedBy`);
  }
  if (!entity.editorial.lastReviewed.trim()) {
    errors.push(`${label}: published content requires editorial.lastReviewed`);
  }
  return errors;
}

export function validatePublishedSources(
  sources: Citation[],
  label: string,
  options: { minCount?: number } = {},
): string[] {
  const errors: string[] = [];
  const minCount = options.minCount ?? 1;

  if (sources.length < minCount) {
    errors.push(`${label}: published content requires at least ${minCount} source(s)`);
  }

  for (const source of sources) {
    if (!isRealCitationUrl(source.url)) {
      errors.push(
        `${label}: source "${source.id}" must use a real URL (not example.com) when published`,
      );
    }
    if (!source.accessDate.trim()) {
      errors.push(`${label}: source "${source.id}" requires accessDate`);
    }
  }

  return errors;
}

export function validateProductScoreConsistency(product: Product): string[] {
  const errors: string[] = [];
  const profile = resolveScoringProfile(product.categoryId);
  const expected = computeWeightedScore(product.rating.criteriaScores, profile);

  if (product.rating.overallScore !== expected) {
    errors.push(
      `Product ${product.id}: overallScore ${product.rating.overallScore} does not match computed score ${expected} (profile: ${profile.id})`,
    );
  }

  if (product.rating.profileId !== profile.id) {
    errors.push(
      `Product ${product.id}: rating.profileId "${product.rating.profileId}" does not match resolved profile "${profile.id}"`,
    );
  }

  return errors;
}

export function validatePublishedProduct(product: Product): string[] {
  if (!isPublishedEntity(product)) return [];

  const label = `Product ${product.id}`;
  const errors = [
    ...validatePublishedEditorial(product, label),
    ...validateProductScoreConsistency(product),
  ];

  if (product.noindex) {
    errors.push(`${label}: published product should have noindex: false`);
  }

  errors.push(...validatePublishedSources(product.sources, label, { minCount: 1 }));

  const hasBrandLabel = product.sources.some((s) => s.sourceType === "brand_label");
  const hasRetailerListing = product.sources.some((s) => s.sourceType === "retailer_listing");

  if (!hasBrandLabel) {
    errors.push(`${label}: published product requires at least one brand_label source`);
  }
  if (!hasRetailerListing) {
    errors.push(`${label}: published product requires at least one retailer_listing source for price`);
  }
  if (!product.pricing.lastPriceCheckedAt.trim()) {
    errors.push(`${label}: published product requires pricing.lastPriceCheckedAt`);
  }
  if (product.affiliate.enabled) {
    errors.push(
      `${label}: affiliate.enabled must be false until Amazon Associates approval`,
    );
  }

  return errors;
}

export function validatePublishedCategory(category: Category): string[] {
  if (!isPublishedEntity(category)) return [];

  const label = `Category ${category.id}`;
  return [
    ...validatePublishedEditorial(category, label),
    ...validatePublishedSources(category.sources, label, {
      minCount: MIN_PUBLISHED_CATEGORY_SOURCES,
    }),
  ];
}

export function validatePublishedIngredient(ingredient: Ingredient): string[] {
  if (!isPublishedEntity(ingredient)) return [];

  const label = `Ingredient ${ingredient.id}`;
  const errors = [
    ...validatePublishedEditorial(ingredient, label),
    ...validatePublishedSources(ingredient.sources, label, {
      minCount: MIN_PUBLISHED_INGREDIENT_SOURCES,
    }),
  ];

  const hasAuthoritative = ingredient.sources.some((s) =>
    ["NIH", "PubMed", "National_Academies", "consensus_body"].includes(s.sourceType),
  );
  if (!hasAuthoritative) {
    errors.push(
      `${label}: published ingredient requires at least one NIH, PubMed, National_Academies, or consensus_body source`,
    );
  }

  return errors;
}

export function validatePublishedGuide(guide: Guide): string[] {
  if (!isPublishedEntity(guide)) return [];

  const label = `Guide ${guide.slug}`;
  return [
    ...validatePublishedEditorial(guide, label),
    ...validatePublishedSources(guide.sources, label, {
      minCount: MIN_PUBLISHED_GUIDE_SOURCES,
    }),
  ];
}

export function validatePublishedBrand(brand: Brand): string[] {
  if (!isPublishedEntity(brand)) return [];

  const label = `Brand ${brand.id}`;
  return [
    ...validatePublishedEditorial(brand, label),
    ...validatePublishedSources(brand.sources, label, { minCount: 1 }),
  ];
}

export function validatePublishedComparison(
  comparison: Comparison,
  products: Product[],
): string[] {
  if (!isPublishedEntity(comparison)) return [];

  const label = `Comparison ${comparison.id}`;
  const errors = [
    ...validatePublishedEditorial(comparison, label),
    ...validatePublishedSources(comparison.sources, label, { minCount: 1 }),
  ];

  if (comparison.type === "category_ranking") {
    if (comparison.productIds.length < MIN_PUBLISHED_COMPARISON_PRODUCTS) {
      errors.push(
        `${label}: published category comparison requires at least ${MIN_PUBLISHED_COMPARISON_PRODUCTS} products`,
      );
    }

    const productById = new Map(products.map((p) => [p.id, p]));
    for (const productId of comparison.productIds) {
      const product = productById.get(productId);
      if (!product) {
        errors.push(`${label}: productId "${productId}" not found`);
      } else if (!isPublishedEntity(product)) {
        errors.push(
          `${label}: productId "${productId}" must be published before comparison is indexable`,
        );
      }
    }
  }

  if (comparison.noindex) {
    errors.push(`${label}: published comparison should have noindex: false`);
  }

  return errors;
}

/** Collect YAML-adjacent prose fields from a product for risky-term scanning. */
export function getProductProseFields(product: Product): string[] {
  return [
    product.name,
    product.labelTransparencyNotes,
    product.evidenceNotes,
    ...product.pros,
    ...product.cons,
    ...product.bestFor,
    ...product.avoidIf,
    ...product.additives,
    product.thirdPartyTesting.details,
    ...product.claims.map((c) => c.text),
  ];
}

export function getGuideProseFields(guide: Guide): string[] {
  return [guide.title, guide.excerpt, guide.body];
}

export function getIngredientProseFields(ingredient: Ingredient): string[] {
  return [
    ingredient.name,
    ingredient.evidenceSummary,
    ingredient.typicalDosageRange,
    ingredient.safetyNotes,
    ingredient.interactions,
  ];
}

export function getCategoryProseFields(category: Category): string[] {
  return [category.name, category.description, category.shortDescription];
}
