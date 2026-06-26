import { z } from "zod";

export const PublicationStatusSchema = z.enum([
  "placeholder",
  "draft",
  "review_ready",
  "published",
  "archived",
  "discontinued",
]);

export const ClaimRiskLevelSchema = z.enum(["low", "medium", "high"]);

export const ClaimTypeSchema = z.enum([
  "label_fact",
  "price_fact",
  "health_context",
  "safety_context",
  "brand_claim",
  "editorial_opinion",
  "affiliate_or_monetization_claim",
]);

export const SourceTypeSchema = z.enum([
  "NIH",
  "FDA",
  "FTC",
  "PubMed",
  "National_Academies",
  "consensus_body",
  "brand_label",
  "retailer_listing",
  "third_party_testing",
  "certification_body",
  "internal_editorial",
]);

export const EditorialFieldsSchema = z.object({
  lastUpdated: z.string(),
  lastReviewed: z.string(),
  reviewedBy: z.string(),
  updateLog: z
    .array(
      z.object({
        date: z.string(),
        authorId: z.string(),
        changeType: z.string(),
        summary: z.string(),
      }),
    )
    .default([]),
});

export const GovernanceFieldsSchema = z.object({
  status: PublicationStatusSchema,
  isPlaceholder: z.boolean().default(false),
  noindex: z.boolean().default(false),
  claimRiskLevel: ClaimRiskLevelSchema.default("low"),
  editorial: EditorialFieldsSchema,
});

export const CitationSchema = z.object({
  id: z.string(),
  title: z.string(),
  publisher: z.string(),
  url: z.string().url(),
  accessDate: z.string(),
  sourceType: SourceTypeSchema,
  supportsClaimIds: z.array(z.string()).default([]),
});

export const ClaimSchema = z.object({
  id: z.string(),
  text: z.string(),
  claimType: ClaimTypeSchema,
  claimRiskLevel: ClaimRiskLevelSchema,
  citationIds: z.array(z.string()).default([]),
  entityType: z.string().optional(),
  entityId: z.string().optional(),
  fieldPath: z.string().optional(),
});

export const SeoFieldsSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
});

export const CriteriaScoresSchema = z.object({
  ingredientTransparency: z.number().min(0).max(100),
  doseTransparency: z.number().min(0).max(100),
  evidenceAlignment: z.number().min(0).max(100),
  formulaQuality: z.number().min(0).max(100),
  thirdPartyTesting: z.number().min(0).max(100),
  priceValue: z.number().min(0).max(100),
  additives: z.number().min(0).max(100),
  labelClarity: z.number().min(0).max(100),
  brandTransparency: z.number().min(0).max(100),
});

export type PublicationStatus = z.infer<typeof PublicationStatusSchema>;
export type ClaimType = z.infer<typeof ClaimTypeSchema>;
export type Claim = z.infer<typeof ClaimSchema>;
export type Citation = z.infer<typeof CitationSchema>;
export type CriteriaScores = z.infer<typeof CriteriaScoresSchema>;
