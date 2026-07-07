import { siteConfig } from "./site";

export const seoTemplates = {
  home: {
    title: "SuppCheckr | Check the Supplement Before You Buy",
    description: siteConfig.description,
  },
  supplementsIndex: {
    title: "Supplement Categories | SuppCheckr",
    description:
      "Browse published Creatine, Magnesium, and Vitamin C categories with ingredient references, guides, product reviews, and comparison tables.",
  },
  guidesIndex: {
    title: "Supplement Guides | SuppCheckr",
    description:
      "Educational guides for Creatine, Magnesium, and Vitamin C — forms, label reading, dosage context, and safety notes.",
  },
  category: (name: string) => ({
    title: `${name} Supplements — Compare & Review | SuppCheckr`,
    description: `Compare ${name.toLowerCase()} supplements by label transparency, dosage clarity, testing, and value on SuppCheckr.`,
  }),
  product: (product: string, brand: string) => ({
    title: `${product} Review — ${brand} | SuppCheckr`,
    description: `SuppCheckr review of ${product} by ${brand}.`,
  }),
  comparison: (title: string) => ({
    title: `${title} | SuppCheckr`,
    description: `Supplement comparison on SuppCheckr: ${title}.`,
  }),
  ingredient: (name: string) => ({
    title: `${name}: Forms, Dosage & Safety Notes | SuppCheckr`,
    description: `Ingredient reference for ${name} on SuppCheckr.`,
  }),
  brand: (name: string) => ({
    title: `${name} Supplements — Products & Transparency | SuppCheckr`,
    description: `Brand profile for ${name} on SuppCheckr.`,
  }),
} as const;
