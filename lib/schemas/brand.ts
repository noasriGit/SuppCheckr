import { z } from "zod";
import { CitationSchema, GovernanceFieldsSchema } from "./common";

export const BrandSchema = z
  .object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    website: z.string().url(),
    description: z.string().default(""),
    logo: z.string().default("/images/brands/placeholder.svg"),
    categories: z.array(z.string()).default([]),
    transparencyNotes: z.string().default(""),
    testingNotes: z.string().default(""),
    certifications: z.array(z.string()).default([]),
    controversyNotes: z.string().nullable().default(null),
    transparencyScore: z.number().nullable().default(null),
    affiliateDisclosure: z.boolean().default(false),
    sources: z.array(CitationSchema).default([]),
  })
  .merge(GovernanceFieldsSchema);

export type Brand = z.infer<typeof BrandSchema>;
