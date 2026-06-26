import { z } from "zod";

export const ScoringProfileSchema = z.object({
  id: z.string(),
  categoryId: z.string().nullable().default(null),
  label: z.string(),
  notes: z.string().default(""),
  criteriaWeights: z.object({
    ingredientTransparency: z.number(),
    doseTransparency: z.number(),
    evidenceAlignment: z.number(),
    formulaQuality: z.number(),
    thirdPartyTesting: z.number(),
    priceValue: z.number(),
    additives: z.number(),
    labelClarity: z.number(),
    brandTransparency: z.number(),
  }),
});

export type ScoringProfile = z.infer<typeof ScoringProfileSchema>;

export const ScoringRubricAnchorSchema = z.object({
  score: z.number().min(0).max(100),
  description: z.string(),
});

export const ScoringRubricCriterionSchema = z.object({
  anchors: z.array(ScoringRubricAnchorSchema).min(2),
});

export const ScoringRubricSchema = z.object({
  profileId: z.string(),
  categoryId: z.string().nullable().default(null),
  label: z.string(),
  disclaimer: z.string().default(""),
  criteria: z.record(z.string(), ScoringRubricCriterionSchema),
});

export type ScoringRubric = z.infer<typeof ScoringRubricSchema>;
export type ScoringRubricCriterionKey = keyof ScoringProfile["criteriaWeights"];

export const CRITERIA_LABELS: Record<keyof ScoringProfile["criteriaWeights"], string> = {
  ingredientTransparency: "Ingredient transparency",
  doseTransparency: "Dose transparency",
  evidenceAlignment: "Evidence alignment",
  formulaQuality: "Formula quality/simplicity",
  thirdPartyTesting: "Third-party testing/certifications",
  priceValue: "Price/value",
  additives: "Additives/fillers/sweeteners",
  labelClarity: "Label clarity",
  brandTransparency: "Brand transparency",
};
