import { shouldBlockAllCrawlers } from "@/config/site";

/** Legal pages with LegalReviewBanner — noindex until attorney review. */
export const DRAFT_LEGAL_PATHS = [
  "/privacy-policy",
  "/terms-of-use",
  "/medical-disclaimer",
  "/affiliate-disclosure",
  "/advertising-policy",
] as const;

/** Utility or demo-heavy hubs — excluded from indexing in prelaunch. */
export const NOINDEX_STATIC_PATHS = [
  "/search",
  "/compare",
  "/ingredients",
  "/brands",
] as const;

/**
 * Marketing/trust pages indexable in prelaunch (no fake supplement claims).
 * Also used as the sitemap static page list.
 */
export const INDEXABLE_STATIC_PAGES = [
  { path: "/", title: "Home", description: "SuppCheckr homepage" },
  { path: "/about", title: "About SuppCheckr", description: "About SuppCheckr" },
  { path: "/methodology", title: "Review Methodology", description: "How SuppCheckr scores supplements" },
  { path: "/editorial-policy", title: "Editorial Policy", description: "Editorial standards" },
  { path: "/corrections-policy", title: "Corrections Policy", description: "How to report errors" },
  { path: "/source-standards", title: "Source Standards", description: "Citation requirements" },
  { path: "/accessibility", title: "Accessibility Statement", description: "Accessibility commitment" },
  { path: "/contact", title: "Contact", description: "Contact SuppCheckr" },
  { path: "/supplements", title: "Supplement Categories", description: "Browse supplement categories" },
  { path: "/guides", title: "Supplement Guides", description: "Educational guides for published categories" },
  { path: "/sitemap", title: "Site Map", description: "Browse all indexable SuppCheckr pages" },
] as const;

export type IndexableStaticPage = (typeof INDEXABLE_STATIC_PAGES)[number];

export function isDraftLegalPath(path: string): boolean {
  return (DRAFT_LEGAL_PATHS as readonly string[]).includes(path);
}

export function isNoindexStaticPath(path: string): boolean {
  return (
    isDraftLegalPath(path) ||
    (NOINDEX_STATIC_PATHS as readonly string[]).includes(path)
  );
}

export function shouldNoindexStaticPath(path: string): boolean {
  return shouldBlockAllCrawlers() || isNoindexStaticPath(path);
}

export function getSitemapStaticPaths(): string[] {
  return INDEXABLE_STATIC_PAGES.map((p) => p.path);
}

export function getSearchableStaticPages(): IndexableStaticPage[] {
  return [...INDEXABLE_STATIC_PAGES];
}
