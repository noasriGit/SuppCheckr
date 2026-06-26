import { z } from "zod";
import { CitationSchema, GovernanceFieldsSchema } from "./common";

export const IngredientSchema = z
  .object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    commonForms: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    aliases: z.array(z.string()).default([]),
    evidenceSummary: z.string().default(""),
    typicalDosageRange: z.string().default(""),
    safetyNotes: z.string().default(""),
    interactions: z.string().default(""),
    relatedProductIds: z.array(z.string()).default([]),
    relatedGuideSlugs: z.array(z.string()).default([]),
    sources: z.array(CitationSchema).default([]),
  })
  .merge(GovernanceFieldsSchema);

export type Ingredient = z.infer<typeof IngredientSchema>;
