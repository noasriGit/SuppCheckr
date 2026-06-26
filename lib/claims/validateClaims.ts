import type { Claim, Citation } from "@/lib/schemas/common";
import {
  ALLOWED_SOURCE_TYPES_BY_CLAIM,
  AUTHORITATIVE_HEALTH_SOURCE_TYPES,
  claimRequiresCitation,
  isAllowedSourceForClaim,
} from "./sourceTypeRules";

export function getCitationsForClaim(claim: Claim, citations: Citation[]): Citation[] {
  return citations.filter((c) => claim.citationIds.includes(c.id));
}

export interface ClaimValidationIssue {
  level: "error" | "warning";
  message: string;
}

export function validateClaimsHaveCitations(
  claims: Claim[],
  citations: Citation[],
  options: { strict?: boolean } = {},
): ClaimValidationIssue[] {
  const issues: ClaimValidationIssue[] = [];
  const citationIds = new Set(citations.map((c) => c.id));
  const level = options.strict ? "error" : "warning";

  for (const claim of claims) {
    if (!claimRequiresCitation(claim.claimRiskLevel)) continue;

    const missing = claim.citationIds.filter((id) => !citationIds.has(id));
    if (claim.citationIds.length === 0 || missing.length > 0) {
      issues.push({
        level,
        message: `Claim "${claim.id}" (${claim.claimRiskLevel} risk) missing valid citations`,
      });
    }
  }

  return issues;
}

export function validateClaimSourceTypes(
  claims: Claim[],
  citations: Citation[],
  options: { strict?: boolean } = {},
): ClaimValidationIssue[] {
  const issues: ClaimValidationIssue[] = [];
  const citationById = new Map(citations.map((c) => [c.id, c]));
  const level = options.strict ? "error" : "warning";

  for (const claim of claims) {
    if (!claimRequiresCitation(claim.claimRiskLevel)) continue;

    const claimCitations = claim.citationIds
      .map((id) => citationById.get(id))
      .filter((c): c is Citation => c !== undefined);

    if (claimCitations.length === 0) continue;

    const hasAllowed = claimCitations.some((c) =>
      isAllowedSourceForClaim(claim.claimType, c.sourceType),
    );

    if (!hasAllowed) {
      const allowed = ALLOWED_SOURCE_TYPES_BY_CLAIM[claim.claimType].join(", ");
      issues.push({
        level,
        message: `Claim "${claim.id}" (${claim.claimType}) requires citation with source type: ${allowed}`,
      });
    }

    if (
      (claim.claimType === "health_context" || claim.claimType === "safety_context") &&
      claim.claimRiskLevel === "high"
    ) {
      const onlyInternal = claimCitations.every((c) => c.sourceType === "internal_editorial");
      if (onlyInternal) {
        issues.push({
          level,
          message: `Claim "${claim.id}" (high-risk ${claim.claimType}) cannot rely on internal_editorial as sole source`,
        });
      }
    }

    if (
      (claim.claimType === "health_context" || claim.claimType === "safety_context") &&
      claim.claimRiskLevel !== "low"
    ) {
      const hasAuthoritative = claimCitations.some((c) =>
        AUTHORITATIVE_HEALTH_SOURCE_TYPES.includes(c.sourceType),
      );
      if (!hasAuthoritative) {
        issues.push({
          level,
          message: `Claim "${claim.id}" (${claim.claimType}) requires at least one authoritative source (NIH, PubMed, National_Academies, consensus_body, or FDA)`,
        });
      }
    }
  }

  return issues;
}

export function validateCitationBidirectional(
  claims: Claim[],
  citations: Citation[],
  options: { strict?: boolean } = {},
): ClaimValidationIssue[] {
  const issues: ClaimValidationIssue[] = [];
  const level = options.strict ? "error" : "warning";
  const claimIds = new Set(claims.map((c) => c.id));

  for (const claim of claims) {
    for (const citationId of claim.citationIds) {
      const citation = citations.find((c) => c.id === citationId);
      if (citation && !citation.supportsClaimIds.includes(claim.id)) {
        issues.push({
          level,
          message: `Citation "${citationId}" missing supportsClaimIds entry for claim "${claim.id}"`,
        });
      }
    }
  }

  for (const citation of citations) {
    for (const claimId of citation.supportsClaimIds) {
      if (!claimIds.has(claimId)) {
        issues.push({
          level,
          message: `Citation "${citation.id}" references unknown claim "${claimId}" in supportsClaimIds`,
        });
      }
      const claim = claims.find((c) => c.id === claimId);
      if (claim && !claim.citationIds.includes(citation.id)) {
        issues.push({
          level,
          message: `Claim "${claimId}" missing citationIds entry for citation "${citation.id}"`,
        });
      }
    }
  }

  return issues;
}

/** Backward-compatible string[] for warn-only callers. */
export function validateClaimsHaveCitationsAsStrings(
  claims: Claim[],
  citations: Citation[],
): string[] {
  return validateClaimsHaveCitations(claims, citations).map((i) => i.message);
}
