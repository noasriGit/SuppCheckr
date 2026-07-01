/** True when URL host is Amazon or amzn short-link domain. */
export function isAmazonUrl(url: string): boolean {
  if (!url || url.startsWith("#")) return false;
  try {
    const host = new URL(url).hostname.toLowerCase();
    return (
      host === "amazon.com" ||
      host.endsWith(".amazon.com") ||
      host === "amzn.to" ||
      host.endsWith(".amzn.to")
    );
  } catch {
    return false;
  }
}

/** Reject empty, whitespace, and obvious placeholder tags. */
export function isValidAssociateTag(tag: string | undefined): boolean {
  if (!tag?.trim()) return false;
  const normalized = tag.trim().toLowerCase();
  return (
    normalized !== "yourtag-20" &&
    normalized !== "example-tag-20" &&
    !normalized.includes("placeholder")
  );
}
