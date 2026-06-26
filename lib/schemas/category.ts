import { z } from "zod";
import {
  CitationSchema,
  GovernanceFieldsSchema,
  SeoFieldsSchema,
} from "./common";

export const CategorySchema = z
  .object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    pluralName: z.string(),
    description: z.string().default(""),
    shortDescription: z.string().default(""),
    featured: z.boolean().default(false),
    relatedCategories: z.array(z.string()).default([]),
    relatedGuides: z.array(z.string()).default([]),
    buyersGuideSlug: z.string().nullable().default(null),
    scoringProfileId: z.string(),
    ingredientSlug: z.string().nullable().default(null),
    intro: z.string().default(""),
    evaluationSummary: z.string().default(""),
    clusterScopeNote: z.string().default(""),
    buyingConsiderations: z.array(z.string()).default([]),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .default([]),
    featuredProductIds: z.array(z.string()).default([]),
    sources: z.array(CitationSchema).default([]),
    seo: SeoFieldsSchema.default({}),
  })
  .merge(GovernanceFieldsSchema);

export type Category = z.infer<typeof CategorySchema>;
