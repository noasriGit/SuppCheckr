import {
  getIndexableBrands,
  getIndexableCategories,
  getIndexableComparisons,
  getIndexableGuides,
  getIndexableIngredients,
  getIndexableProducts,
  getCategories,
} from "@/lib/content/loader";
import { getSearchableStaticPages, type IndexableStaticPage } from "@/lib/seo/indexing";

export interface SearchIndexEntry {
  type: string;
  title: string;
  href: string;
  description: string;
}

function fromStatic(page: IndexableStaticPage): SearchIndexEntry {
  return {
    type: "Page",
    title: page.title,
    href: page.path,
    description: page.description,
  };
}

/** Published/indexable entity pages plus marketing static pages. */
export function getSearchIndexEntries(): SearchIndexEntry[] {
  const entries: SearchIndexEntry[] = getSearchableStaticPages().map(fromStatic);

  for (const ingredient of getIndexableIngredients()) {
    entries.push({
      type: "Ingredient",
      title: ingredient.name,
      href: `/ingredients/${ingredient.slug}`,
      description: ingredient.evidenceSummary.slice(0, 160),
    });
  }

  for (const guide of getIndexableGuides()) {
    entries.push({
      type: "Guide",
      title: guide.title,
      href: `/guides/${guide.slug}`,
      description: guide.excerpt.slice(0, 160),
    });
  }

  for (const product of getIndexableProducts()) {
    entries.push({
      type: "Product",
      title: product.name,
      href: `/supplements/${product.categoryId}/products/${product.slug}`,
      description: product.seo.description ?? product.name,
    });
  }

  for (const brand of getIndexableBrands()) {
    entries.push({
      type: "Brand",
      title: brand.name,
      href: `/brands/${brand.slug}`,
      description: brand.description.slice(0, 160),
    });
  }

  for (const category of getIndexableCategories()) {
    entries.push({
      type: "Category",
      title: category.pluralName,
      href: `/supplements/${category.slug}`,
      description: category.shortDescription.slice(0, 160),
    });
  }

  const categoryById = new Map(getCategories().map((c) => [c.id, c]));
  for (const comparison of getIndexableComparisons()) {
    const category = comparison.categoryId
      ? categoryById.get(comparison.categoryId)
      : undefined;
    if (!category) continue;
    entries.push({
      type: "Comparison",
      title: comparison.title,
      href: `/supplements/${category.slug}/compare`,
      description: comparison.subtitle.slice(0, 160),
    });
  }

  return entries;
}
