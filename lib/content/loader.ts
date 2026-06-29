import fs from "node:fs";
import path from "node:path";
import { load as loadYaml } from "js-yaml";
import { z } from "zod";
import { CategorySchema, type Category } from "@/lib/schemas/category";
import { ProductSchema, type Product } from "@/lib/schemas/product";
import { BrandSchema, type Brand } from "@/lib/schemas/brand";
import { IngredientSchema, type Ingredient } from "@/lib/schemas/ingredient";
import {
  ComparisonSchema,
  GuideSchema,
  type Comparison,
  type Guide,
} from "@/lib/schemas/comparison";
import { ScoringProfileSchema, type ScoringProfile } from "@/lib/schemas/scoring";

const CONTENT_DIR = path.join(process.cwd(), "content");

function readYamlDir<S extends z.ZodTypeAny>(
  subdir: string,
  schema: S,
): z.output<S>[] {
  const dir = path.join(CONTENT_DIR, subdir);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const parsed = loadYaml(raw);
    return schema.parse(parsed);
  });
}

function readYamlFile<S extends z.ZodTypeAny>(filePath: string, schema: S): z.output<S> {
  const raw = fs.readFileSync(filePath, "utf8");
  return schema.parse(loadYaml(raw));
}

export function getCategories(): Category[] {
  return readYamlDir("categories", CategorySchema);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getCategories().find((c) => c.slug === slug);
}

export function getProducts(): Product[] {
  const root = path.join(CONTENT_DIR, "products");
  if (!fs.existsSync(root)) return [];

  const results: Product[] = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      const catDir = path.join(root, entry.name);
      for (const file of fs.readdirSync(catDir)) {
        if (file.endsWith(".yaml") || file.endsWith(".yml")) {
          const raw = fs.readFileSync(path.join(catDir, file), "utf8");
          results.push(ProductSchema.parse(loadYaml(raw)));
        }
      }
    }
  }
  return results;
}

export function getProductsByCategory(categoryId: string): Product[] {
  return getProducts().filter((p) => p.categoryId === categoryId);
}

export function isActiveContent(entity: { status: string }): boolean {
  return entity.status !== "archived" && entity.status !== "discontinued";
}

export function getActiveProductsByCategory(categoryId: string): Product[] {
  return getProductsByCategory(categoryId).filter(isActiveContent);
}

export function getProductBySlug(categorySlug: string, productSlug: string): Product | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  return getProducts().find(
    (p) => p.categoryId === category.id && p.slug === productSlug,
  );
}

export function getBrands(): Brand[] {
  return readYamlDir("brands", BrandSchema);
}

/** Real catalog brands for index pages (excludes archived, placeholder, and demo shells). */
export function getCatalogBrands(): Brand[] {
  return getBrands().filter(
    (b) =>
      isActiveContent(b) &&
      !b.isPlaceholder &&
      (b.status === "review_ready" || b.status === "published"),
  );
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return getBrands().find((b) => b.slug === slug);
}

export function getIngredients(): Ingredient[] {
  return readYamlDir("ingredients", IngredientSchema);
}

export function getIngredientBySlug(slug: string): Ingredient | undefined {
  return getIngredients().find((i) => i.slug === slug);
}

export function getComparisons(): Comparison[] {
  return readYamlDir("comparisons", ComparisonSchema);
}

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return getComparisons().find((c) => c.slug === slug);
}

export function getCategoryComparison(categorySlug: string): Comparison | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const matches = getComparisons().filter(
    (c) =>
      c.type === "category_ranking" &&
      c.categoryId === category.id &&
      isActiveContent(c),
  );
  return matches.find((c) => !c.isPlaceholder) ?? matches[0];
}

export function getGuides(): Guide[] {
  const dir = path.join(CONTENT_DIR, "guides");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      return GuideSchema.parse(loadYaml(raw));
    });
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return getGuides().find((g) => g.slug === slug);
}

export function getScoringProfiles(): ScoringProfile[] {
  const dir = path.join(CONTENT_DIR, "scoring", "profiles");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".yaml"))
    .map((file) => readYamlFile(path.join(dir, file), ScoringProfileSchema));
}

export function getScoringProfile(id: string): ScoringProfile | undefined {
  return getScoringProfiles().find((p) => p.id === id);
}

export function getDefaultScoringProfile(): ScoringProfile {
  const file = path.join(CONTENT_DIR, "scoring", "default-weights.yaml");
  return readYamlFile(file, ScoringProfileSchema);
}

export function resolveScoringProfile(categoryId?: string): ScoringProfile {
  if (categoryId) {
    const override = getScoringProfiles().find((p) => p.categoryId === categoryId);
    if (override) return override;
  }
  return getDefaultScoringProfile();
}

export function isIndexable(entity: {
  status: string;
  noindex: boolean;
  isPlaceholder: boolean;
}): boolean {
  return (
    entity.status === "published" &&
    !entity.noindex &&
    !entity.isPlaceholder
  );
}

export function getIndexableProducts(): Product[] {
  return getProducts().filter(isIndexable);
}

export function getIndexableCategories(): Category[] {
  return getCategories().filter(isIndexable);
}

export function getIndexableIngredients(): Ingredient[] {
  return getIngredients().filter(isIndexable);
}

export function getIndexableGuides(): Guide[] {
  return getGuides().filter(isIndexable);
}

export function getIndexableBrands(): Brand[] {
  return getBrands().filter(isIndexable);
}

export function getIndexableComparisons(): Comparison[] {
  return getComparisons().filter(isIndexable);
}

/** Products shown on a brand hub: published brands list indexable products only; draft brands keep active preview products. */
export function getBrandPageProducts(brand: Brand): Product[] {
  return getProducts().filter((p) => {
    if (p.brandId !== brand.id || p.isPlaceholder) return false;
    return isIndexable(brand) ? isIndexable(p) : isActiveContent(p);
  });
}
