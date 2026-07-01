export const RETAILER_CTA_LABEL = "Check current price at retailer";

export type ProductAffiliateCta = {
  variant: "amazon" | "retailer" | "unavailable";
  href: string;
  rel?: string;
  target?: string;
  isPlaceholder?: boolean;
  label: string;
  showAffiliateDisclosure?: boolean;
  showDirectRetailerNote?: boolean;
  unavailableMessage?: string;
};
