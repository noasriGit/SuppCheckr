import { siteConfig } from "./site";

export const seoTemplates = {
  home: {
    title: "SuppCheckr | Check the Supplement Before You Buy",
    description: siteConfig.description,
  },
  supplementsIndex: {
    title: "Supplement Categories",
    description:
      "Browse published Creatine, Magnesium, Vitamin C, Electrolytes, and CoQ10 categories with ingredient references, guides, product reviews, and comparison tables.",
  },
  guidesIndex: {
    title: "Supplement Guides",
    description:
      "Educational guides for Creatine, Magnesium, Vitamin C, Electrolytes, and CoQ10 — forms, label reading, dosage context, and safety notes.",
  },
  category: (name: string) => ({
    title: `${name} Supplements — Compare & Review`,
    description: `Compare ${name.toLowerCase()} supplements by label transparency, dosage clarity, testing, and value on SuppCheckr.`,
  }),
  product: (product: string, brand: string) => ({
    title: `${product} Review — ${brand}`,
    description: `Label review of ${product} by ${brand}: serving facts, testing documentation, and dated price context. Educational only — not medical advice.`,
  }),
  comparison: (title: string) => ({
    title,
    description: `Side-by-side ${title.toLowerCase()} by label facts, testing documentation, and dated prices. Scores are editorial — not medical advice.`,
  }),
  ingredient: (name: string) => ({
    title: `${name}: Forms, Dosage & Safety Notes`,
    description: `${name} ingredient reference covering common forms, typical dosage context, and safety notes. Educational only — not medical advice.`,
  }),
  brand: (name: string) => ({
    title: `${name} Supplements — Products & Transparency`,
    description: `${name} brand profile: published product reviews, testing notes, and label transparency. Not a manufacturer website.`,
  }),
} as const;
