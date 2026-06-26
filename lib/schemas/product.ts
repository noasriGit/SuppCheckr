import { z } from "zod";
import {
  ClaimSchema,
  CitationSchema,
  CriteriaScoresSchema,
  GovernanceFieldsSchema,
  SeoFieldsSchema,
} from "./common";

export const ProductSchema = z
  .object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    brandId: z.string(),
    categoryId: z.string(),
    images: z.object({
      product: z.object({
        src: z.string(),
        alt: z.string(),
        attribution: z.string(),
      }),
      label: z
        .object({
          src: z.string().nullable(),
          attribution: z.string().nullable(),
        })
        .nullable()
        .default(null),
    }),
    supplementFacts: z.object({
      servingSize: z.string(),
      servingsPerContainer: z.number(),
      ingredients: z.array(
        z.object({
          name: z.string(),
          amount: z.string(),
          dailyValue: z.string().nullable().optional(),
        }),
      ),
      otherIngredients: z.array(z.string()).default([]),
      allergens: z.array(z.string()).default([]),
    }),
    pricing: z.object({
      msrp: z.number(),
      currency: z.string().default("USD"),
      pricePerServing: z.number(),
      pricePerActiveDose: z.number().nullable().optional(),
      lastManualUpdate: z.string(),
      lastPriceCheckedAt: z.string(),
    }),
    retailers: z.array(
      z.object({
        retailerId: z.string(),
        url: z.string(),
        isPrimary: z.boolean().default(false),
      }),
    ),
    certifications: z.array(z.string()).default([]),
    thirdPartyTesting: z.object({
      status: z.enum(["unknown", "claimed", "verified", "not_claimed"]),
      details: z.string().default(""),
      sources: z.array(z.string()).default([]),
    }),
    additives: z.array(z.string()).default([]),
    flags: z
      .object({
        thirdPartyTested: z.boolean().optional(),
        additiveFree: z.boolean().optional(),
      })
      .default({}),
    rating: z.object({
      profileId: z.string(),
      criteriaScores: CriteriaScoresSchema,
      overallScore: z.number().min(0).max(100),
    }),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    bestFor: z.array(z.string()).default([]),
    avoidIf: z.array(z.string()).default([]),
    labelTransparencyNotes: z.string().default(""),
    evidenceNotes: z.string().default(""),
    relatedProductIds: z.array(z.string()).default([]),
    comparisonGroupIds: z.array(z.string()).default([]),
    claims: z.array(ClaimSchema).default([]),
    sources: z.array(CitationSchema).default([]),
    affiliate: z.object({ enabled: z.boolean().default(false) }).default({ enabled: false }),
    seo: SeoFieldsSchema.default({}),
  })
  .merge(GovernanceFieldsSchema);

export type Product = z.infer<typeof ProductSchema>;
