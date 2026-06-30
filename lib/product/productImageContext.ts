import type { Product } from "@/lib/schemas/product";

export type ProductFormat = "powder" | "capsule" | "tablet";

export type ProductImageContext = {
  categoryLabel: string | null;
  format: ProductFormat | null;
  formatLabel: string | null;
  primaryFormLabel: string | null;
};

const CATEGORY_LABELS: Record<string, string> = {
  creatine: "Creatine",
  magnesium: "Magnesium",
};

const PRIMARY_FORM_PATTERNS: { pattern: RegExp; label: string }[] = [
  { pattern: /citrate\s*\/\s*malate|citrate-malate/i, label: "Magnesium citrate/malate" },
  { pattern: /magnesium glycinate|as magnesium glycinate/i, label: "Magnesium glycinate" },
  { pattern: /magnesium citrate|as magnesium citrate/i, label: "Magnesium citrate" },
  { pattern: /magnesium malate|as magnesium malate/i, label: "Magnesium malate" },
  { pattern: /magnesium oxide|as magnesium oxide/i, label: "Magnesium oxide" },
  { pattern: /creatine monohydrate/i, label: "Creatine monohydrate" },
];

export function isPlaceholderProductImage(src: string): boolean {
  return src.includes("placeholder");
}

function detectFormat(product: Product): ProductFormat | null {
  const haystack = `${product.name} ${product.supplementFacts.servingSize}`.toLowerCase();

  if (/\btablet/i.test(haystack)) return "tablet";
  if (/\bcapsule|\bcaps\b|\bveg cap/i.test(haystack)) return "capsule";
  if (/\bpowder|\bscoop\b|\bunflavored\b|\b1\.1 lb\b|\b500 g\b|\b600 g\b|\b1 kg\b/i.test(haystack)) {
    return "powder";
  }

  return null;
}

function detectPrimaryForm(product: Product): string | null {
  const ingredientNames = product.supplementFacts.ingredients.map((i) => i.name).join(" ");
  const haystack = `${ingredientNames} ${product.name}`;

  for (const { pattern, label } of PRIMARY_FORM_PATTERNS) {
    if (pattern.test(haystack)) return label;
  }

  return null;
}

function formatLabel(format: ProductFormat | null): string | null {
  if (!format) return null;
  if (format === "powder") return "Powder";
  if (format === "capsule") return "Capsule";
  return "Tablet";
}

export function resolveProductImageContext(product: Product): ProductImageContext {
  const format = detectFormat(product);
  return {
    categoryLabel: CATEGORY_LABELS[product.categoryId] ?? null,
    format,
    formatLabel: formatLabel(format),
    primaryFormLabel: detectPrimaryForm(product),
  };
}

export function resolveProductImageAlt(product: Product, usesPlaceholder: boolean): string {
  if (!usesPlaceholder) {
    return product.images.product.alt;
  }

  return `Label-first review illustration for ${product.name} — product photo not shown`;
}
