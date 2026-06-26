import type { MetadataRoute } from "next";
import { siteConfig, shouldBlockAllCrawlers } from "@/config/site";
import {
  getIndexableBrands,
  getIndexableCategories,
  getIndexableComparisons,
  getIndexableGuides,
  getIndexableIngredients,
  getIndexableProducts,
  getCategories,
} from "@/lib/content/loader";
import { getSitemapStaticPaths } from "@/lib/seo/indexing";

export default function sitemap(): MetadataRoute.Sitemap {
  if (shouldBlockAllCrawlers()) {
    return [];
  }

  const base = siteConfig.url;
  const categoryById = new Map(getCategories().map((c) => [c.id, c]));

  const entries: MetadataRoute.Sitemap = getSitemapStaticPaths().map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));

  for (const ingredient of getIndexableIngredients()) {
    entries.push({
      url: `${base}/ingredients/${ingredient.slug}`,
      lastModified: new Date(ingredient.editorial.lastUpdated),
    });
  }

  for (const guide of getIndexableGuides()) {
    entries.push({
      url: `${base}/guides/${guide.slug}`,
      lastModified: new Date(guide.editorial.lastUpdated),
    });
  }

  for (const cat of getIndexableCategories()) {
    entries.push({
      url: `${base}/supplements/${cat.slug}`,
      lastModified: new Date(cat.editorial.lastUpdated),
    });
  }

  for (const product of getIndexableProducts()) {
    entries.push({
      url: `${base}/supplements/${product.categoryId}/products/${product.slug}`,
      lastModified: new Date(product.editorial.lastUpdated),
    });
  }

  for (const brand of getIndexableBrands()) {
    entries.push({
      url: `${base}/brands/${brand.slug}`,
      lastModified: new Date(brand.editorial.lastUpdated),
    });
  }

  for (const comparison of getIndexableComparisons()) {
    if (comparison.type !== "category_ranking" || !comparison.categoryId) continue;
    const category = categoryById.get(comparison.categoryId);
    if (!category) continue;
    entries.push({
      url: `${base}/supplements/${category.slug}/compare`,
      lastModified: new Date(comparison.editorial.lastUpdated),
    });
  }

  return entries;
}
