export const RESERVED_SLUGS = [
  "compare",
  "products",
  "reviews",
  "best",
  "guides",
  "ingredients",
  "brands",
  "methodology",
  "search",
  "about",
  "contact",
  "editorial-policy",
  "medical-disclaimer",
  "affiliate-disclosure",
  "advertising-policy",
  "privacy-policy",
  "terms-of-use",
  "corrections-policy",
  "source-standards",
  "accessibility",
  "supplements",
] as const;

export type ReservedSlug = (typeof RESERVED_SLUGS)[number];

export function isReservedSlug(slug: string): boolean {
  return (RESERVED_SLUGS as readonly string[]).includes(slug.toLowerCase());
}
