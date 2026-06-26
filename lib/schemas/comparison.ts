import { z } from "zod";
import { CitationSchema, GovernanceFieldsSchema } from "./common";

export const ComparisonSchema = z
  .object({
    id: z.string(),
    slug: z.string(),
    type: z.enum(["category_ranking", "head_to_head", "form_comparison"]),
    title: z.string(),
    categoryId: z.string().nullable().default(null),
    subtitle: z.string().default(""),
    productIds: z.array(z.string()).default([]),
    comparisonFields: z.array(z.string()).default([]),
    methodologyNote: z.string().default(""),
    filtersEnabled: z.boolean().default(true),
    defaultSort: z.string().default("overallScore"),
    orderingNote: z.string().default(""),
    priceCheckedAt: z.string().default(""),
    productCriterionLabels: z
      .array(
        z.object({
          productId: z.string(),
          labels: z.array(z.string()),
        }),
      )
      .default([]),
    caveats: z.array(z.string()).default([]),
    sources: z.array(CitationSchema).default([]),
  })
  .merge(GovernanceFieldsSchema);

export type Comparison = z.infer<typeof ComparisonSchema>;

export const GuideSchema = z
  .object({
    slug: z.string(),
    title: z.string(),
    categoryId: z.string().nullable().default(null),
    excerpt: z.string().default(""),
    body: z.string().default(""),
    relatedGuideSlugs: z.array(z.string()).default([]),
    sources: z.array(CitationSchema).default([]),
  })
  .merge(GovernanceFieldsSchema);

export type Guide = z.infer<typeof GuideSchema>;
