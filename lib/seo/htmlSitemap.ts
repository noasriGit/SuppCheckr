import {
  getCategories,
  getIndexableBrands,
  getIndexableCategories,
  getIndexableComparisons,
  getIndexableGuides,
  getIndexableIngredients,
  getIndexableProducts,
} from "@/lib/content/loader";
import {
  DRAFT_LEGAL_PATHS,
  INDEXABLE_STATIC_PAGES,
  NOINDEX_STATIC_PATHS,
  type IndexableStaticPage,
} from "@/lib/seo/indexing";

export type SitemapContentType =
  | "page"
  | "category"
  | "product"
  | "guide"
  | "ingredient"
  | "brand"
  | "comparison";

export interface SitemapRecord {
  id: string;
  title: string;
  url: string;
  description?: string;
  contentType: SitemapContentType;
  category?: string;
  categorySlug?: string;
  updatedAt?: string;
  featured?: boolean;
  sortPriority: number;
}

export interface SitemapCategoryGroup {
  categorySlug: string;
  categoryName: string;
  pluralName: string;
  hub: SitemapRecord;
  compare?: SitemapRecord;
  ingredient?: SitemapRecord;
  products: SitemapRecord[];
  guides: SitemapRecord[];
}

export interface SitemapSections {
  featured: SitemapRecord[];
  categoryGroups: SitemapCategoryGroup[];
  ingredients: SitemapRecord[];
  brands: SitemapRecord[];
  trustPages: SitemapRecord[];
  recentlyUpdated: SitemapRecord[];
  all: SitemapRecord[];
}

const FEATURED_STATIC_PATHS = new Set([
  "/",
  "/supplements",
  "/guides",
  "/methodology",
]);

const TRUST_PAGE_PATHS = new Set([
  "/about",
  "/editorial-policy",
  "/corrections-policy",
  "/source-standards",
  "/accessibility",
  "/contact",
]);

function fromStaticPage(page: IndexableStaticPage, sortPriority: number): SitemapRecord {
  return {
    id: `page:${page.path}`,
    title: page.title,
    url: page.path,
    description: page.description,
    contentType: "page",
    featured: FEATURED_STATIC_PATHS.has(page.path),
    sortPriority,
    updatedAt: undefined,
  };
}

function sortByTitle(records: SitemapRecord[]): SitemapRecord[] {
  return [...records].sort((a, b) => a.title.localeCompare(b.title));
}

function sortByUpdatedDesc(records: SitemapRecord[]): SitemapRecord[] {
  return [...records]
    .filter((r) => r.updatedAt)
    .sort((a, b) => (b.updatedAt ?? "").localeCompare(a.updatedAt ?? ""));
}

/** All indexable pages derived from authoritative content loaders and static page config. */
export function getSitemapRecords(): SitemapRecord[] {
  const records: SitemapRecord[] = INDEXABLE_STATIC_PAGES.map((page, index) =>
    fromStaticPage(page, index),
  );

  const categoryById = new Map(getCategories().map((c) => [c.id, c]));

  for (const category of getIndexableCategories()) {
    records.push({
      id: `category:${category.id}`,
      title: category.pluralName,
      url: `/supplements/${category.slug}`,
      description: category.shortDescription || undefined,
      contentType: "category",
      category: category.name,
      categorySlug: category.slug,
      updatedAt: category.editorial.lastUpdated,
      featured: category.featured || FEATURED_STATIC_PATHS.has(`/supplements/${category.slug}`),
      sortPriority: 100,
    });
  }

  for (const product of getIndexableProducts()) {
    const category = categoryById.get(product.categoryId);
    records.push({
      id: `product:${product.id}`,
      title: product.name,
      url: `/supplements/${product.categoryId}/products/${product.slug}`,
      description: product.seo.description ?? undefined,
      contentType: "product",
      category: category?.name,
      categorySlug: category?.slug,
      updatedAt: product.editorial.lastUpdated,
      sortPriority: 200,
    });
  }

  for (const guide of getIndexableGuides()) {
    const category = guide.categoryId ? categoryById.get(guide.categoryId) : undefined;
    records.push({
      id: `guide:${guide.slug}`,
      title: guide.title,
      url: `/guides/${guide.slug}`,
      description: guide.excerpt || undefined,
      contentType: "guide",
      category: category?.name,
      categorySlug: category?.slug,
      updatedAt: guide.editorial.lastUpdated,
      sortPriority: 300,
    });
  }

  for (const ingredient of getIndexableIngredients()) {
    records.push({
      id: `ingredient:${ingredient.slug}`,
      title: ingredient.name,
      url: `/ingredients/${ingredient.slug}`,
      description: ingredient.evidenceSummary.slice(0, 160) || undefined,
      contentType: "ingredient",
      updatedAt: ingredient.editorial.lastUpdated,
      sortPriority: 400,
    });
  }

  for (const brand of getIndexableBrands()) {
    records.push({
      id: `brand:${brand.slug}`,
      title: brand.name,
      url: `/brands/${brand.slug}`,
      description: brand.description.slice(0, 160) || undefined,
      contentType: "brand",
      updatedAt: brand.editorial.lastUpdated,
      sortPriority: 500,
    });
  }

  for (const comparison of getIndexableComparisons()) {
    if (comparison.type !== "category_ranking" || !comparison.categoryId) continue;
    const category = categoryById.get(comparison.categoryId);
    if (!category) continue;
    records.push({
      id: `comparison:${comparison.id}`,
      title: comparison.title,
      url: `/supplements/${category.slug}/compare`,
      description: comparison.subtitle || undefined,
      contentType: "comparison",
      category: category.name,
      categorySlug: category.slug,
      updatedAt: comparison.editorial.lastUpdated,
      sortPriority: 150,
    });
  }

  return records;
}

/** Organized sections for the HTML sitemap page. */
export function getSitemapSections(): SitemapSections {
  const all = getSitemapRecords();
  const byUrl = new Map(all.map((r) => [r.url, r]));

  const featured = all
    .filter((r) => r.featured)
    .sort((a, b) => a.sortPriority - b.sortPriority || a.title.localeCompare(b.title));

  const trustPages = all
    .filter((r) => TRUST_PAGE_PATHS.has(r.url))
    .sort((a, b) => a.sortPriority - b.sortPriority);

  const ingredients = sortByTitle(all.filter((r) => r.contentType === "ingredient"));
  const brands = sortByTitle(all.filter((r) => r.contentType === "brand"));

  const categoryGroups: SitemapCategoryGroup[] = getIndexableCategories()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((category) => {
      const hubUrl = `/supplements/${category.slug}`;
      const hub = byUrl.get(hubUrl);
      if (!hub) {
        throw new Error(`Missing sitemap hub record for category ${category.slug}`);
      }

      const compareUrl = `/supplements/${category.slug}/compare`;
      const ingredientSlug = category.ingredientSlug;
      const ingredientUrl = ingredientSlug ? `/ingredients/${ingredientSlug}` : undefined;

      return {
        categorySlug: category.slug,
        categoryName: category.name,
        pluralName: category.pluralName,
        hub,
        compare: byUrl.get(compareUrl),
        ingredient: ingredientUrl ? byUrl.get(ingredientUrl) : undefined,
        products: sortByTitle(
          all.filter((r) => r.contentType === "product" && r.categorySlug === category.slug),
        ),
        guides: sortByTitle(
          all.filter((r) => r.contentType === "guide" && r.categorySlug === category.slug),
        ),
      };
    });

  const recentlyUpdated = sortByUpdatedDesc(all).slice(0, 15);

  return {
    featured,
    categoryGroups,
    ingredients,
    brands,
    trustPages,
    recentlyUpdated,
    all,
  };
}

export interface SitemapValidationIssue {
  code: string;
  message: string;
  recordId?: string;
  url?: string;
}

export interface SitemapValidationResult {
  valid: boolean;
  entryCount: number;
  issues: SitemapValidationIssue[];
  excludedCounts: Record<string, number>;
}

const EXCLUDED_PATH_PREFIXES = ["/api/"];

function isExcludedPath(path: string): string | null {
  if ((DRAFT_LEGAL_PATHS as readonly string[]).includes(path)) return "draft_legal";
  if ((NOINDEX_STATIC_PATHS as readonly string[]).includes(path)) return "noindex_static";
  if (EXCLUDED_PATH_PREFIXES.some((prefix) => path.startsWith(prefix))) return "api_or_internal";
  return null;
}

/** Validates sitemap records for duplicates, missing fields, and policy violations. */
export function validateSitemapRecords(records: SitemapRecord[] = getSitemapRecords()): SitemapValidationResult {
  const issues: SitemapValidationIssue[] = [];
  const seenIds = new Map<string, string>();
  const seenUrls = new Map<string, string>();

  for (const record of records) {
    if (!record.id) {
      issues.push({ code: "missing_id", message: "Record is missing id", url: record.url });
    } else if (seenIds.has(record.id)) {
      issues.push({
        code: "duplicate_id",
        message: `Duplicate id ${record.id}`,
        recordId: record.id,
        url: record.url,
      });
    } else {
      seenIds.set(record.id, record.url);
    }

    if (!record.title?.trim()) {
      issues.push({
        code: "missing_title",
        message: "Record is missing title",
        recordId: record.id,
        url: record.url,
      });
    }

    if (!record.url) {
      issues.push({
        code: "missing_url",
        message: "Record is missing url",
        recordId: record.id,
      });
      continue;
    }

    if (!record.url.startsWith("/")) {
      issues.push({
        code: "invalid_url",
        message: `URL must start with /: ${record.url}`,
        recordId: record.id,
        url: record.url,
      });
    }

    if (record.url.length > 1 && record.url.endsWith("/")) {
      issues.push({
        code: "trailing_slash",
        message: `URL must not have trailing slash: ${record.url}`,
        recordId: record.id,
        url: record.url,
      });
    }

    if (seenUrls.has(record.url)) {
      issues.push({
        code: "duplicate_url",
        message: `Duplicate url ${record.url}`,
        recordId: record.id,
        url: record.url,
      });
    } else {
      seenUrls.set(record.url, record.id);
    }

    const exclusion = isExcludedPath(record.url);
    if (exclusion) {
      issues.push({
        code: "excluded_path",
        message: `Excluded path included in sitemap: ${record.url} (${exclusion})`,
        recordId: record.id,
        url: record.url,
      });
    }
  }

  const excludedCounts: Record<string, number> = {
    draft_legal: (DRAFT_LEGAL_PATHS as readonly string[]).length,
    noindex_static: (NOINDEX_STATIC_PATHS as readonly string[]).length,
  };

  return {
    valid: issues.length === 0,
    entryCount: records.length,
    issues,
    excludedCounts,
  };
}
