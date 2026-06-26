import type { Brand } from "@/lib/schemas/brand";
import type { Category } from "@/lib/schemas/category";
import type { Comparison, Guide } from "@/lib/schemas/comparison";
import type { Ingredient } from "@/lib/schemas/ingredient";
import type { Product } from "@/lib/schemas/product";
import type { ScoringProfile } from "@/lib/schemas/scoring";

export interface ContentGraph {
  categories: Category[];
  products: Product[];
  brands: Brand[];
  ingredients: Ingredient[];
  comparisons: Comparison[];
  guides: Guide[];
  scoringProfiles: ScoringProfile[];
}

export function validateForeignKeys(graph: ContentGraph): string[] {
  const errors: string[] = [];

  const categoryIds = new Set(graph.categories.map((c) => c.id));
  const brandIds = new Set(graph.brands.map((b) => b.id));
  const productIds = new Set(graph.products.map((p) => p.id));
  const profileIds = new Set([
    ...graph.scoringProfiles.map((p) => p.id),
    "default",
  ]);
  const guideSlugs = new Set(graph.guides.map((g) => g.slug));

  for (const category of graph.categories) {
    if (!profileIds.has(category.scoringProfileId)) {
      errors.push(
        `Category ${category.id}: scoringProfileId "${category.scoringProfileId}" not found`,
      );
    }
    for (const guideSlug of category.relatedGuides) {
      if (!guideSlugs.has(guideSlug)) {
        errors.push(
          `Category ${category.id}: relatedGuides references unknown slug "${guideSlug}"`,
        );
      }
    }
    if (category.buyersGuideSlug && !guideSlugs.has(category.buyersGuideSlug)) {
      errors.push(
        `Category ${category.id}: buyersGuideSlug "${category.buyersGuideSlug}" not found`,
      );
    }
    for (const relatedId of category.relatedCategories) {
      if (!categoryIds.has(relatedId)) {
        errors.push(
          `Category ${category.id}: relatedCategories references unknown id "${relatedId}"`,
        );
      }
    }
  }

  for (const product of graph.products) {
    if (!categoryIds.has(product.categoryId)) {
      errors.push(`Product ${product.id}: categoryId "${product.categoryId}" not found`);
    }
    if (!brandIds.has(product.brandId)) {
      errors.push(`Product ${product.id}: brandId "${product.brandId}" not found`);
    }
    if (!profileIds.has(product.rating.profileId)) {
      errors.push(
        `Product ${product.id}: rating.profileId "${product.rating.profileId}" not found`,
      );
    }
    for (const relatedId of product.relatedProductIds) {
      if (!productIds.has(relatedId)) {
        errors.push(
          `Product ${product.id}: relatedProductIds references unknown id "${relatedId}"`,
        );
      }
    }
  }

  for (const ingredient of graph.ingredients) {
    for (const categoryId of ingredient.categories) {
      if (!categoryIds.has(categoryId)) {
        errors.push(
          `Ingredient ${ingredient.id}: categories references unknown id "${categoryId}"`,
        );
      }
    }
    for (const productId of ingredient.relatedProductIds) {
      if (!productIds.has(productId)) {
        errors.push(
          `Ingredient ${ingredient.id}: relatedProductIds references unknown id "${productId}"`,
        );
      }
    }
    for (const guideSlug of ingredient.relatedGuideSlugs) {
      if (!guideSlugs.has(guideSlug)) {
        errors.push(
          `Ingredient ${ingredient.id}: relatedGuideSlugs references unknown slug "${guideSlug}"`,
        );
      }
    }
  }

  for (const comparison of graph.comparisons) {
    if (comparison.categoryId && !categoryIds.has(comparison.categoryId)) {
      errors.push(
        `Comparison ${comparison.id}: categoryId "${comparison.categoryId}" not found`,
      );
    }
    for (const productId of comparison.productIds) {
      if (!productIds.has(productId)) {
        errors.push(
          `Comparison ${comparison.id}: productIds references unknown id "${productId}"`,
        );
      }
    }
  }

  for (const guide of graph.guides) {
    if (guide.categoryId && !categoryIds.has(guide.categoryId)) {
      errors.push(`Guide ${guide.slug}: categoryId "${guide.categoryId}" not found`);
    }
  }

  for (const brand of graph.brands) {
    for (const categoryId of brand.categories) {
      if (!categoryIds.has(categoryId)) {
        errors.push(`Brand ${brand.id}: categories references unknown id "${categoryId}"`);
      }
    }
  }

  return errors;
}
