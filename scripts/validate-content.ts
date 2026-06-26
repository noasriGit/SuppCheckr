#!/usr/bin/env tsx
import {
  getBrands,
  getCategories,
  getComparisons,
  getDefaultScoringProfile,
  getGuides,
  getIngredients,
  getProducts,
  getScoringProfiles,
} from "@/lib/content/loader";
import { isReservedSlug } from "@/config/reserved-slugs";
import {
  validateCitationBidirectional,
  validateClaimSourceTypes,
  validateClaimsHaveCitations,
} from "@/lib/claims/validateClaims";
import { validateProfileWeights } from "@/lib/scoring/computeScore";
import { getScoringRubrics, validateRubricMatchesProfile } from "@/lib/scoring/rubric";
import { validateForeignKeys } from "@/lib/validation/foreignKeys";
import {
  isPublishedEntity,
  validatePublishedBrand,
  validatePublishedCategory,
  validatePublishedComparison,
  validatePublishedGuide,
  validatePublishedIngredient,
  validatePublishedProduct,
} from "@/lib/validation/publishedContent";

let errors = 0;
let warnings = 0;

function error(msg: string) {
  console.error(`ERROR: ${msg}`);
  errors++;
}

function warn(msg: string) {
  console.warn(`WARN: ${msg}`);
  warnings++;
}

function reportClaimIssues(
  label: string,
  claims: Parameters<typeof validateClaimsHaveCitations>[0],
  sources: Parameters<typeof validateClaimsHaveCitations>[1],
  strict: boolean,
) {
  const opts = { strict };
  for (const issue of validateClaimsHaveCitations(claims, sources, opts)) {
    if (issue.level === "error") error(`${label}: ${issue.message}`);
    else warn(`${label}: ${issue.message}`);
  }
  for (const issue of validateClaimSourceTypes(claims, sources, opts)) {
    if (issue.level === "error") error(`${label}: ${issue.message}`);
    else warn(`${label}: ${issue.message}`);
  }
  for (const issue of validateCitationBidirectional(claims, sources, opts)) {
    if (issue.level === "error") error(`${label}: ${issue.message}`);
    else warn(`${label}: ${issue.message}`);
  }
}

function validatePlaceholderRules(
  entity: { status: string; isPlaceholder: boolean; noindex: boolean },
  label: string,
) {
  if (entity.isPlaceholder || entity.status === "placeholder") {
    if (!entity.noindex) {
      error(`${label}: placeholder content must have noindex: true`);
    }
  }
  if (entity.status === "published" && entity.isPlaceholder) {
    error(`${label}: published content cannot be isPlaceholder`);
  }
  if (entity.status === "published" && entity.noindex) {
    warn(`${label}: published content has noindex: true — confirm intentional`);
  }
  if (
    (entity.status === "draft" || entity.status === "review_ready") &&
    !entity.noindex
  ) {
    warn(`${label}: ${entity.status} content should usually have noindex: true`);
  }
}

function validateSlug(slug: string, label: string) {
  if (isReservedSlug(slug)) {
    error(`${label}: slug "${slug}" is reserved`);
  }
}

const categories = getCategories();
const products = getProducts();
const brands = getBrands();
const ingredients = getIngredients();
const comparisons = getComparisons();
const guides = getGuides();
const scoringProfiles = getScoringProfiles();
const defaultProfile = getDefaultScoringProfile();

// Foreign keys (all entities)
for (const msg of validateForeignKeys({
  categories,
  products,
  brands,
  ingredients,
  comparisons,
  guides,
  scoringProfiles: [defaultProfile, ...scoringProfiles],
})) {
  error(msg);
}

// Categories
for (const cat of categories) {
  validateSlug(cat.slug, `Category ${cat.id}`);
  validatePlaceholderRules(cat, `Category ${cat.id}`);
  for (const msg of validatePublishedCategory(cat)) {
    error(msg);
  }
}

// Products
for (const product of products) {
  validateSlug(product.slug, `Product ${product.id}`);
  validatePlaceholderRules(product, `Product ${product.id}`);

  const strict = isPublishedEntity(product);
  reportClaimIssues(`Product ${product.id}`, product.claims, product.sources, strict);

  for (const msg of validatePublishedProduct(product)) {
    error(msg);
  }

  for (const source of product.sources) {
    if (!source.url.includes("example.com") && product.isPlaceholder) {
      warn(`Product ${product.id}: placeholder should use example.com citations only`);
    }
  }
}

// Brands, ingredients, comparisons, guides
for (const brand of brands) {
  validateSlug(brand.slug, `Brand ${brand.id}`);
  validatePlaceholderRules(brand, `Brand ${brand.id}`);
  for (const msg of validatePublishedBrand(brand)) {
    error(msg);
  }
}

for (const ing of ingredients) {
  validateSlug(ing.slug, `Ingredient ${ing.id}`);
  validatePlaceholderRules(ing, `Ingredient ${ing.id}`);
  for (const msg of validatePublishedIngredient(ing)) {
    error(msg);
  }
}

for (const cmp of comparisons) {
  validateSlug(cmp.slug, `Comparison ${cmp.id}`);
  validatePlaceholderRules(cmp, `Comparison ${cmp.id}`);
  for (const msg of validatePublishedComparison(cmp, products)) {
    error(msg);
  }
}

for (const guide of guides) {
  validateSlug(guide.slug, `Guide ${guide.slug}`);
  validatePlaceholderRules(guide, `Guide ${guide.slug}`);
  for (const msg of validatePublishedGuide(guide)) {
    error(msg);
  }
}

// Scoring profiles
if (!validateProfileWeights(defaultProfile)) {
  error("Default scoring profile weights must sum to 100");
}
for (const profile of scoringProfiles) {
  if (!validateProfileWeights(profile)) {
    error(`Scoring profile ${profile.id} weights must sum to 100`);
  }
}

// Scoring rubrics
const profileCriteriaKeys = Object.keys(defaultProfile.criteriaWeights);
for (const rubric of getScoringRubrics()) {
  const profile = scoringProfiles.find((p) => p.id === rubric.profileId);
  const keys = profile ? Object.keys(profile.criteriaWeights) : profileCriteriaKeys;
  for (const msg of validateRubricMatchesProfile(rubric, keys)) {
    error(msg);
  }
}

console.log(`\nValidation complete: ${errors} error(s), ${warnings} warning(s)`);
if (errors > 0) process.exit(1);
