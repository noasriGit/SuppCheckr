import { seoTemplates } from "@/config/seo";
import {
  getBrands,
  getCategories,
  getIndexableBrands,
  getIndexableCategories,
  getIndexableComparisons,
  getIndexableGuides,
  getIndexableIngredients,
  getIndexableProducts,
} from "@/lib/content/loader";
import type { Brand } from "@/lib/schemas/brand";
import type { Category } from "@/lib/schemas/category";
import type { Comparison, Guide } from "@/lib/schemas/comparison";
import type { Ingredient } from "@/lib/schemas/ingredient";
import type { Product } from "@/lib/schemas/product";
import { INDEXABLE_STATIC_PAGES } from "@/lib/seo/indexing";
import { resolveDocumentTitle } from "@/lib/seo/titles";
import { collapseWhitespace } from "@/lib/seo/text";

export const PRIORITY_SEO_PATHS = [
  "/supplements/creatine/products/now-sports-creatine-monohydrate-capsules-120",
  "/supplements/creatine/products/nutricost-creatine-monohydrate-500g",
  "/supplements/creatine/products/bulksupplements-creatine-monohydrate-1kg",
  "/supplements/creatine/compare",
  "/guides/lmnt-vs-liquid-iv",
] as const;

export const TITLE_MAX_LENGTH = 60;
export const DESCRIPTION_MIN_LENGTH = 120;
export const DESCRIPTION_MAX_LENGTH = 160;

export function ingredientMetaDescription(ingredient: Pick<Ingredient, "name">): string {
  return collapseWhitespace(
    `${ingredient.name} ingredient reference covering common forms, typical dosage context, and safety notes. Educational only — not medical advice.`,
  );
}

export function brandMetaDescription(brand: Pick<Brand, "name" | "categories">): string {
  const base = `${brand.name} brand profile: published product reviews, testing notes, and label transparency. Not a manufacturer website.`;
  if (collapseWhitespace(base).length >= DESCRIPTION_MIN_LENGTH) {
    return collapseWhitespace(base);
  }

  const categories = brand.categories.filter(Boolean).slice(0, 2).join(", ");
  if (!categories) {
    return collapseWhitespace(base);
  }

  const withCategories = `${brand.name} brand profile covering ${categories}: published product reviews, testing notes, and label transparency. Not a manufacturer website.`;
  const collapsed = collapseWhitespace(withCategories);
  return collapsed.length <= DESCRIPTION_MAX_LENGTH ? collapsed : collapseWhitespace(base);
}

export function resolveProductSeo(product: Product, brandName: string): {
  title: string;
  description: string;
} {
  const fallback = seoTemplates.product(product.name, brandName);
  return {
    title: product.seo.title ?? fallback.title,
    description: collapseWhitespace(product.seo.description ?? fallback.description),
  };
}

export function resolveIngredientSeo(ingredient: Ingredient): {
  title: string;
  description: string;
} {
  const fallback = seoTemplates.ingredient(ingredient.name);
  return {
    title: fallback.title,
    description: ingredientMetaDescription(ingredient),
  };
}

export function resolveBrandSeo(brand: Brand): {
  title: string;
  description: string;
} {
  const fallback = seoTemplates.brand(brand.name);
  return {
    title: fallback.title,
    description: brandMetaDescription(brand),
  };
}

export function resolveGuideSeo(guide: Guide): { title: string; description: string } {
  return {
    title: guide.title,
    description: collapseWhitespace(guide.excerpt),
  };
}

export function resolveComparisonSeo(comparison: Comparison): {
  title: string;
  description: string;
} {
  const fallback = seoTemplates.comparison(comparison.title);
  return {
    title: comparison.seo.title ?? comparison.title,
    description: collapseWhitespace(comparison.seo.description ?? fallback.description),
  };
}

export function resolveCategorySeo(category: Category): {
  title: string;
  description: string;
} {
  const fallback = seoTemplates.category(category.name);
  return {
    title: category.seo.title ?? fallback.title,
    description: collapseWhitespace(
      category.seo.description ?? category.shortDescription ?? fallback.description,
    ),
  };
}

export interface IndexablePageMetadata {
  path: string;
  title: string;
  description: string;
  kind: string;
}

const STATIC_SEO_OVERRIDES: Record<string, { title: string; description: string }> = {
  "/": seoTemplates.home,
  "/supplements": seoTemplates.supplementsIndex,
  "/guides": seoTemplates.guidesIndex,
};

export function collectIndexablePageMetadata(): IndexablePageMetadata[] {
  const pages: IndexablePageMetadata[] = [];
  const brands = getBrands();
  const categories = getCategories();
  const brandNameById = new Map(brands.map((brand) => [brand.id, brand.name]));
  const categoryById = new Map(categories.map((category) => [category.id, category]));

  for (const page of INDEXABLE_STATIC_PAGES) {
    const override = STATIC_SEO_OVERRIDES[page.path];
    pages.push({
      path: page.path,
      title: resolveDocumentTitle(override?.title ?? page.title),
      description: collapseWhitespace(override?.description ?? page.description),
      kind: "static",
    });
  }

  for (const category of getIndexableCategories()) {
    const seo = resolveCategorySeo(category);
    pages.push({
      path: `/supplements/${category.slug}`,
      title: resolveDocumentTitle(seo.title),
      description: seo.description,
      kind: "category",
    });
  }

  for (const product of getIndexableProducts()) {
    const category = categoryById.get(product.categoryId);
    if (!category) continue;
    const seo = resolveProductSeo(product, brandNameById.get(product.brandId) ?? "Brand");
    pages.push({
      path: `/supplements/${category.slug}/products/${product.slug}`,
      title: resolveDocumentTitle(seo.title),
      description: seo.description,
      kind: "product",
    });
  }

  for (const guide of getIndexableGuides()) {
    const seo = resolveGuideSeo(guide);
    pages.push({
      path: `/guides/${guide.slug}`,
      title: resolveDocumentTitle(seo.title),
      description: seo.description,
      kind: "guide",
    });
  }

  for (const ingredient of getIndexableIngredients()) {
    const seo = resolveIngredientSeo(ingredient);
    pages.push({
      path: `/ingredients/${ingredient.slug}`,
      title: resolveDocumentTitle(seo.title),
      description: seo.description,
      kind: "ingredient",
    });
  }

  for (const brand of getIndexableBrands()) {
    const seo = resolveBrandSeo(brand);
    pages.push({
      path: `/brands/${brand.slug}`,
      title: resolveDocumentTitle(seo.title),
      description: seo.description,
      kind: "brand",
    });
  }

  for (const comparison of getIndexableComparisons()) {
    const seo = resolveComparisonSeo(comparison);
    if (comparison.type === "category_ranking" && comparison.categoryId) {
      const category = categoryById.get(comparison.categoryId);
      if (!category) continue;
      pages.push({
        path: `/supplements/${category.slug}/compare`,
        title: resolveDocumentTitle(seo.title),
        description: seo.description,
        kind: "comparison",
      });
      continue;
    }

    pages.push({
      path: `/compare/${comparison.slug}`,
      title: resolveDocumentTitle(seo.title),
      description: seo.description,
      kind: "comparison",
    });
  }

  return pages;
}
