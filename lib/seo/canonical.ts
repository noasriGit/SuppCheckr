import { siteConfig } from "@/config/site";

export const CANONICAL_ORIGIN = siteConfig.canonicalOrigin;

/** Absolute canonical URL for a site path or already-absolute URL. */
export function canonicalUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${CANONICAL_ORIGIN}${normalized}`;
}

export function isCanonicalHost(url: string): boolean {
  try {
    return new URL(url).origin === CANONICAL_ORIGIN;
  } catch {
    return false;
  }
}
