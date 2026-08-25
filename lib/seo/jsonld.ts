import type { Brand } from "@/lib/schemas/brand";
import type { Category } from "@/lib/schemas/category";
import type { Guide } from "@/lib/schemas/comparison";
import type { Ingredient } from "@/lib/schemas/ingredient";
import type { Product } from "@/lib/schemas/product";
import { siteConfig } from "@/config/site";
import { isPlaceholderProductImage } from "@/lib/product/productImageContext";
import { isIndexable } from "@/lib/content/loader";
import { CANONICAL_ORIGIN, canonicalUrl } from "@/lib/seo/canonical";
import { resolveDocumentTitle } from "@/lib/seo/titles";

export const ORGANIZATION_ID = `${CANONICAL_ORIGIN}/#organization`;
export const WEBSITE_ID = `${CANONICAL_ORIGIN}/#website`;

export const REVIEW_BEST_RATING = 100;
export const REVIEW_WORST_RATING = 0;

export type JsonLdPrimitive = string | number | boolean | null;
export type JsonLdValue = JsonLdPrimitive | JsonLdObject | JsonLdValue[];
export type JsonLdObject = { [key: string]: JsonLdValue };

export type BreadcrumbItem = {
  label: string;
  path: string;
};

function withContext(node: JsonLdObject | JsonLdObject[]): JsonLdObject {
  if (Array.isArray(node)) {
    return {
      "@context": "https://schema.org",
      "@graph": node,
    };
  }
  return {
    "@context": "https://schema.org",
    ...node,
  };
}

/** Serialize JSON-LD for a script tag without introducing XSS via `<` in values. */
export function serializeJsonLd(data: JsonLdObject): string {
  return JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");
}

export function buildOrganizationJsonLd(): JsonLdObject {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    url: CANONICAL_ORIGIN,
    description: siteConfig.description,
    email: siteConfig.contactEmail,
  };
}

export function buildWebSiteJsonLd(): JsonLdObject {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: CANONICAL_ORIGIN,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function buildGlobalGraphJsonLd(): JsonLdObject {
  return withContext([buildOrganizationJsonLd(), buildWebSiteJsonLd()]);
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): JsonLdObject | null {
  const cleaned = items.filter((item) => item.label.trim() && item.path.trim());
  if (cleaned.length === 0) {
    return null;
  }

  return withContext({
    "@type": "BreadcrumbList",
    itemListElement: cleaned.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: canonicalUrl(item.path),
    })),
  });
}

function organizationAuthor(): JsonLdObject {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
  };
}

export function resolveProductReviewBody(product: Product): string | undefined {
  const summary = product.editorialReview?.summary?.trim();
  if (summary) return summary;
  const notes = product.evidenceNotes.trim();
  return notes || undefined;
}

export function resolveIndexableProductImageSrc(product: Product): string | undefined {
  const src = product.images.product.src.trim();
  if (!src || isPlaceholderProductImage(src)) {
    return undefined;
  }
  return src;
}

export function buildProductJsonLd(options: {
  product: Product;
  brand?: Brand;
  category?: Category;
  path: string;
}): JsonLdObject | null {
  const { product, brand, category, path } = options;
  if (!isIndexable(product)) {
    return null;
  }

  const reviewBody = resolveProductReviewBody(product);
  const imageSrc = resolveIndexableProductImageSrc(product);

  const review: JsonLdObject = {
    "@type": "Review",
    author: organizationAuthor(),
    publisher: { "@id": ORGANIZATION_ID },
    reviewRating: {
      "@type": "Rating",
      ratingValue: product.rating.overallScore,
      bestRating: REVIEW_BEST_RATING,
      worstRating: REVIEW_WORST_RATING,
    },
  };
  if (reviewBody) {
    review.reviewBody = reviewBody;
    review.name = resolveDocumentTitle(
      product.seo.title ?? `${product.name} Review`,
    );
  }
  if (product.editorial.lastUpdated) {
    review.datePublished = product.editorial.lastUpdated;
    review.dateModified = product.editorial.lastUpdated;
  }

  const node: JsonLdObject = {
    "@type": "Product",
    name: product.name,
    url: canonicalUrl(path),
    brand: {
      "@type": "Brand",
      name: brand?.name ?? "Unknown brand",
    },
    review,
  };

  if (category?.name) {
    node.category = category.name;
  }
  if (product.seo.description) {
    node.description = product.seo.description.trim();
  }
  if (imageSrc) {
    node.image = canonicalUrl(imageSrc);
  }

  return withContext(node);
}

function buildArticleJsonLd(options: {
  headline: string;
  description?: string;
  path: string;
  dateModified?: string;
  datePublished?: string;
}): JsonLdObject {
  const node: JsonLdObject = {
    "@type": "Article",
    headline: options.headline,
    url: canonicalUrl(options.path),
    mainEntityOfPage: canonicalUrl(options.path),
    author: organizationAuthor(),
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-US",
  };
  if (options.description) {
    node.description = options.description.trim();
  }
  if (options.datePublished) {
    node.datePublished = options.datePublished;
  }
  if (options.dateModified) {
    node.dateModified = options.dateModified;
  }
  return withContext(node);
}

export function buildGuideArticleJsonLd(guide: Guide, path: string): JsonLdObject | null {
  if (!isIndexable(guide)) {
    return null;
  }
  return buildArticleJsonLd({
    headline: guide.title,
    description: guide.excerpt,
    path,
    datePublished: guide.editorial.lastUpdated,
    dateModified: guide.editorial.lastUpdated,
  });
}

export function buildIngredientArticleJsonLd(
  ingredient: Ingredient,
  path: string,
): JsonLdObject | null {
  if (!isIndexable(ingredient)) {
    return null;
  }
  return buildArticleJsonLd({
    headline: ingredient.name,
    description: ingredient.evidenceSummary,
    path,
    datePublished: ingredient.editorial.lastUpdated,
    dateModified: ingredient.editorial.lastUpdated,
  });
}

export function assertNoDisallowedProductFields(node: JsonLdObject): string[] {
  const serialized = JSON.stringify(node);
  const issues: string[] = [];
  for (const field of ["aggregateRating", "sku", "offers", "gtin", "mpn"]) {
    if (new RegExp(`"${field}"\\s*:`).test(serialized)) {
      issues.push(`Disallowed Product field present: ${field}`);
    }
  }
  return issues;
}
