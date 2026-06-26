import { siteConfig } from "./site";

export const seoTemplates = {
  home: {
    title: "SuppCheckr | Check the Supplement Before You Buy",
    description: siteConfig.description,
  },
  supplementsIndex: {
    title: "Supplement Categories | SuppCheckr",
    description:
      "Browse supplement categories on SuppCheckr. Creatine monohydrate is the first published category with reviews, guides, and comparisons.",
  },
  category: (name: string) => ({
    title: `${name} Supplements — Compare & Review | SuppCheckr`,
    description: `Compare ${name.toLowerCase()} supplements by label transparency, dosage clarity, testing, and value on SuppCheckr.`,
  }),
  product: (product: string, brand: string) => ({
    title: `${product} Review — ${brand} | SuppCheckr`,
    description: `SuppCheckr review template for ${product} by ${brand}. Demo placeholder — not a real review.`,
  }),
  comparison: (title: string) => ({
    title: `${title} | SuppCheckr`,
    description: `Supplement comparison on SuppCheckr: ${title}.`,
  }),
  ingredient: (name: string) => ({
    title: `${name}: Forms, Dosage & Safety Notes | SuppCheckr`,
    description: `Ingredient reference placeholder for ${name} on SuppCheckr.`,
  }),
  brand: (name: string) => ({
    title: `${name} Supplements — Products & Transparency | SuppCheckr`,
    description: `Brand profile placeholder for ${name} on SuppCheckr.`,
  }),
} as const;
