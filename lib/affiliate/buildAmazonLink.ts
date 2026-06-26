import { monetizationConfig } from "@/config/monetization";

export interface AmazonLinkOptions {
  url: string;
  associateTag?: string;
}

export interface BuiltAffiliateLink {
  href: string;
  rel: string;
  target: string;
  isPlaceholder: boolean;
}

export function buildAmazonLink(options: AmazonLinkOptions): BuiltAffiliateLink {
  const { affiliate } = monetizationConfig;
  const tag = options.associateTag ?? affiliate.amazonAssociateTag;

  if (
    affiliate.disableGlobally ||
    !affiliate.enabled ||
    options.url.startsWith("#") ||
    !tag
  ) {
    return {
      href: "#amazon-placeholder",
      rel: affiliate.defaultRel,
      target: "_blank",
      isPlaceholder: true,
    };
  }

  try {
    const parsed = new URL(options.url);
    parsed.searchParams.set("tag", tag);
    return {
      href: parsed.toString(),
      rel: affiliate.defaultRel,
      target: "_blank",
      isPlaceholder: false,
    };
  } catch {
    return {
      href: "#amazon-placeholder",
      rel: affiliate.defaultRel,
      target: "_blank",
      isPlaceholder: true,
    };
  }
}
