import {
  monetizationConfig,
  isAffiliateEnabledForPath,
} from "@/config/monetization";
import { buildAmazonLink } from "@/lib/affiliate/buildAmazonLink";
import { getProductPurchaseUrl } from "@/lib/affiliate/getProductPurchaseUrl";
import { isAmazonUrl } from "@/lib/affiliate/isAmazonUrl";
import {
  RETAILER_CTA_LABEL,
  type ProductAffiliateCta,
} from "@/lib/affiliate/productAffiliateCta";
import type { Product } from "@/lib/schemas/product";

function isValidRetailerUrl(url: string): boolean {
  if (!url || url.startsWith("#")) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

/** Server/build-time CTA resolution — reads AMAZON_ASSOCIATE_TAG here, not in client components. */
export function resolveProductAffiliateCta(
  product: Product,
  pathname: string,
  options?: { associateTag?: string },
): ProductAffiliateCta {
  const globalAffiliate = isAffiliateEnabledForPath(pathname);
  const purchaseUrl = getProductPurchaseUrl(product);
  const useAmazonAffiliate =
    globalAffiliate && product.affiliate.enabled && isAmazonUrl(purchaseUrl);

  if (useAmazonAffiliate) {
    const link = buildAmazonLink({
      url: purchaseUrl,
      associateTag: options?.associateTag,
    });

    return {
      variant: "amazon",
      href: link.isPlaceholder ? "#amazon-placeholder" : link.href,
      rel: link.rel,
      target: link.target,
      isPlaceholder: link.isPlaceholder,
      label: monetizationConfig.affiliate.ctaLabel,
      showAffiliateDisclosure: true,
      unavailableMessage: link.isPlaceholder
        ? "Amazon affiliate link unavailable — associate tag not configured or URL invalid."
        : undefined,
    };
  }

  if (isValidRetailerUrl(purchaseUrl)) {
    return {
      variant: "retailer",
      href: purchaseUrl,
      label: RETAILER_CTA_LABEL,
      showDirectRetailerNote: globalAffiliate,
    };
  }

  return {
    variant: "unavailable",
    href: "",
    label: RETAILER_CTA_LABEL,
  };
}
