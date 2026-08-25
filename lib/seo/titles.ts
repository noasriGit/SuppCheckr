import { siteConfig } from "@/config/site";

const SITE_NAME = siteConfig.name;
const SUFFIX = ` | ${SITE_NAME}`;
const SITE_NAME_PATTERN = new RegExp(`\\b${escapeRegExp(SITE_NAME)}\\b`, "i");

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Strip repeated trailing `| SuppCheckr` suffixes without touching the rest of a custom title. */
export function stripSiteNameSuffix(title: string): string {
  let result = title.trim().replace(/\s+/g, " ");

  while (result.toLowerCase().endsWith(SUFFIX.toLowerCase())) {
    result = result.slice(0, result.length - SUFFIX.length).trimEnd();
  }

  return result;
}

export function siteNameOccurrenceCount(title: string): number {
  return (title.match(new RegExp(`\\b${escapeRegExp(SITE_NAME)}\\b`, "gi")) ?? []).length;
}

/**
 * Resolve the document title that should be rendered.
 * Appends `| SuppCheckr` once when the title does not already include the site name.
 */
export function resolveDocumentTitle(title: string): string {
  const stripped = stripSiteNameSuffix(title);
  if (!stripped) {
    return SITE_NAME;
  }
  if (SITE_NAME_PATTERN.test(stripped)) {
    return stripped;
  }
  return `${stripped}${SUFFIX}`;
}
