import type { ClaimType, Citation } from "@/lib/schemas/common";

export type SourceType = Citation["sourceType"];

/** Allowed source types per claim category (Phase 2A). */
export const ALLOWED_SOURCE_TYPES_BY_CLAIM: Record<ClaimType, readonly SourceType[]> = {
  label_fact: ["brand_label", "retailer_listing", "internal_editorial"],
  price_fact: ["retailer_listing", "internal_editorial"],
  health_context: ["NIH", "PubMed", "National_Academies", "consensus_body", "FDA"],
  safety_context: ["NIH", "PubMed", "National_Academies", "consensus_body", "FDA"],
  brand_claim: [
    "brand_label",
    "third_party_testing",
    "certification_body",
    "retailer_listing",
  ],
  editorial_opinion: ["internal_editorial", "brand_label", "retailer_listing"],
  affiliate_or_monetization_claim: ["internal_editorial", "FTC"],
};

/** Authoritative types required for at least one citation on medium+ health/safety claims. */
export const AUTHORITATIVE_HEALTH_SOURCE_TYPES: readonly SourceType[] = [
  "NIH",
  "PubMed",
  "National_Academies",
  "consensus_body",
  "FDA",
];

export function isAllowedSourceForClaim(
  claimType: ClaimType,
  sourceType: SourceType,
): boolean {
  return ALLOWED_SOURCE_TYPES_BY_CLAIM[claimType].includes(sourceType);
}

export function claimRequiresCitation(claimRiskLevel: string): boolean {
  return claimRiskLevel === "medium" || claimRiskLevel === "high";
}
