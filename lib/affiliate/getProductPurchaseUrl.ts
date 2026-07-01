import { isAmazonUrl } from "@/lib/affiliate/isAmazonUrl";
import type { Product } from "@/lib/schemas/product";

/** Outbound purchase CTA target — Amazon when affiliate enabled, else primary retailer. */
export function getProductPurchaseUrl(product: Product): string {
  if (product.affiliate.enabled) {
    const amazon = product.retailers.find((r) => isAmazonUrl(r.url));
    if (amazon?.url) return amazon.url;
  }

  const primary = product.retailers.find((r) => r.isPrimary) ?? product.retailers[0];
  return primary?.url ?? "#";
}
