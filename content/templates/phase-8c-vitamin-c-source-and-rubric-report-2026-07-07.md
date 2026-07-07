# Phase 8C — Vitamin C Source Collection & Rubric Setup

**Date:** 2026-07-07  
**Phase:** 8C — Vitamin C source inventory, citation conventions, claim-language guide, scoring profile/rubric, draft shells  
**Git baseline:** `72395f2` (Phase 8B) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)  
**Recommended commit message:** `Phase 8C: add Vitamin C source rules and rubric`

---

## A. Scope and constraints

Phase 8C executed under all project guardrails:

| Constraint | Status |
|------------|--------|
| Vitamin C foundation only — no product reviews, guides, or comparison | **Done** |
| No Vitamin C Amazon affiliate links | **Done** |
| No product facts, prices, scores, testing statuses changed (Creatine/Magnesium) | **Confirmed** |
| No affiliate mapping changes | **Confirmed** |
| Klean Athlete Klean Magnesium held back (`affiliate.enabled: false`) | **Confirmed** |
| `SITE_MODE` remains prelaunch | **Confirmed** |
| Ads remain disabled | **Confirmed** |
| Legal pages remain draft/noindex | **Confirmed** (`lib/seo/indexing.ts` `DRAFT_LEGAL_PATHS`) |
| No third category published | **Confirmed** — Vitamin C category/ingredient are `draft` / `noindex: true` |
| Contact email `help@suppcheckr.com` | **Confirmed** (`config/site.ts`) |
| Human supplements only — reject animal/pet Vitamin C | **Documented** |

**Pre-flight verification:**

| Artifact | Present |
|----------|---------|
| `content/templates/phase-8a-keyword-sorting-report-2026-07-07.md` | Yes |
| `content/templates/phase-8a-keyword-sorted-output-2026-07-07.csv` | Yes |
| `content/templates/phase-8b-vitamin-c-category-blueprint-2026-07-07.md` | Yes |
| `content/templates/phase-8b-magnesium-seo-and-vitamin-c-blueprint-report-2026-07-07.md` | Yes |
| Published Creatine cluster | Yes (`content/categories/creatine.yaml` — published) |
| Published Magnesium cluster | Yes (`content/categories/magnesium.yaml` — published) |

---

## B. Existing patterns inspected

| Reference | Use in Phase 8C |
|-----------|-----------------|
| `content/categories/magnesium.yaml` | Category shell fields, price normalization labels, conservative intro/FAQ |
| `content/ingredients/magnesium.yaml` | Ingredient hub structure, NIH/FDA sources, safety blocks |
| `content/scoring/profiles/magnesium.yaml` | Weight sum = 100; schema criterion keys |
| `content/scoring/rubrics/magnesium.yaml` | 0/50/100 anchors per criterion |
| `content/templates/magnesium-source-inventory-2026-06-26.md` | Source inventory sections A–E |
| `content/templates/magnesium-claim-language-guide.md` | Allowed/avoid tables, form cautions |
| `content/templates/magnesium-product-research-checklist.md` | Checklist gates, disqualifiers |
| `content/templates/citation-id-conventions.md` | Magnesium appendix pattern for Vitamin C |

**Schema adaptation:** User-facing names `formClarity`, `additiveProfile`, and `servingPracticality` map to existing schema keys `ingredientTransparency`, `additives`, and `formulaQuality` respectively (documented in profile notes).

---

## C. Source inventory summary

**Created:** `content/templates/vitamin-c-source-inventory-2026-07-07.md`

| Section | Contents |
|---------|----------|
| A. Core authoritative sources | NIH HP + consumer, FDA supplements overview, FTC endorsement guides |
| B. Testing/certification | NSF Sport, USP Verified, Informed Choice/Sport search hubs |
| C. Product-label rules | Official label preferred; retailer fallback caveated; Amazon outbound-only later |
| D. Rejected sources | Amazon reviews/Q&A, influencers, medical blogs, animal/pet, disease-treatment articles |
| E. Vitamin C notes | Form distinctions, blend vs. mg, sodium/calcium, sweeteners, dated pricing |

---

## D. Citation ID additions

**Updated:** `content/templates/citation-id-conventions.md`

| New / pinned IDs |
|------------------|
| `nih-vitamin-c-hp` |
| `nih-vitamin-c-consumer` |
| `fda-dietary-supplements-overview` (shared) |
| `ftc-endorsement-guides` (shared) |
| `nsf-certified-for-sport-search` |
| `usp-verified-search` |
| `informed-choice-search` |
| `informed-sport-search` |
| Per-product patterns: `label-{slug}`, `testing-{slug}`, `editorial-price-per-500mg-vitamin-c-{slug}`, etc. |

Creatine and Magnesium citation conventions unchanged.

---

## E. Claim-language rules

**Created:** `content/templates/vitamin-c-claim-language-guide.md`

- **Allowed:** supports normal immune function (cited), intake needs, form diversity, consult-professional block
- **Avoid:** cold/COVID/cancer treatment, immunity boosting, megadosing safety, demographic winners, guaranteed absorption, Best Overall
- **Caution topics:** kidney stones, kidney disease, hemochromatosis, pregnancy, children, deficiency, skin claims
- **Wave 1:** no dedicated kids/women/pregnancy/cold landing pages

---

## F. Product research checklist summary

**Created:** `content/templates/vitamin-c-product-research-checklist.md`

Key fields: product/brand/form, vitamin C mg per serving, serving practicality, sodium/calcium, sweeteners/sugar, testing status + URL, official label URL, dated price, price per 500 mg / 1,000 mg, claim-risk notes, Amazon exact-match status (deferred), affiliate activation (disabled until later phase).

Planned V1 buckets: ascorbic acid, buffered, liposomal, powder, tested premium, budget anchor.

---

## G. Scoring profile/rubric summary

| File | Status |
|------|--------|
| `content/scoring/profiles/vitamin-c.yaml` | Created — weights sum to 100 |
| `content/scoring/rubrics/vitamin-c.yaml` | Created — all nine criteria with anchors |

| Criterion (schema key) | Weight | Editorial focus |
|------------------------|-------:|-----------------|
| `doseTransparency` | 16 | Vitamin C mg per serving |
| `ingredientTransparency` | 16 | Form clarity (acid, mineral ascorbate, liposomal) |
| `labelClarity` | 14 | Serving count, allergens, sweeteners |
| `evidenceAlignment` | 12 | Conservative claims |
| `thirdPartyTesting` | 12 | verified / claimed / unknown |
| `priceValue` | 10 | Price per 500 mg vitamin C |
| `additives` | 8 | Sweeteners, dyes, sugar |
| `formulaQuality` | 6 | Serving practicality, formula simplicity |
| `brandTransparency` | 6 | Official label, contact, COA access |

Category shell sets `priceNormalizationLabel: Price / 500 mg` for future comparison UI.

---

## H. Category/ingredient shell status

**Created** (safe — validation passed):

| File | `status` | `noindex` | Notes |
|------|----------|-----------|-------|
| `content/categories/vitamin-c.yaml` | `draft` | `true` | No products, guides, comparison refs, or affiliate links |
| `content/ingredients/vitamin-c.yaml` | `draft` | `true` | No `relatedProductIds` or `relatedGuideSlugs` |

**Exposure controls verified:**

- `entityNoindex()` treats `draft` as noindex (`lib/seo/metadata.ts`)
- `getIndexableCategories()` / `getIndexableIngredients()` exclude draft entities from hubs and sitemap
- Static route may build for QA, but robots meta blocks indexing

---

## I. Human-only rule confirmation

Vitamin C planning permanently rejects animal/pet/veterinary keywords and sources. Phase 8A animal-intent rejects carry forward. No pet product research fields populated.

---

## J. Confirmation — no Vitamin C products/guides/comparison created

| Path pattern | Exists |
|--------------|--------|
| `content/products/vitamin-c/*.yaml` | **No** |
| `content/guides/*vitamin-c*` | **No** |
| `content/comparisons/*vitamin*` | **No** |
| Vitamin C Amazon affiliate mappings | **No** |

---

## K. Confirmation — no Vitamin C content published

Vitamin C category and ingredient remain `status: draft` with `noindex: true`. Not included in indexable category/ingredient listings or sitemap entity lists.

---

## L. Confirmation — no existing product data/affiliate mappings changed

No edits to `content/products/creatine/`, `content/products/magnesium/`, comparisons, or brand affiliate fields in this phase.

---

## M. Confirmation — Klean Magnesium held back

`content/products/magnesium/klean-athlete-klean-magnesium.yaml` — `affiliate.enabled: false` (UPC mismatch deferred per Phase 7B). Unchanged in Phase 8C.

---

## N. Confirmation — SITE_MODE, ads, legal pages

| Setting | Value |
|---------|-------|
| `SITE_MODE` | `prelaunch` (`.env.example` / `config/site.ts` default) |
| `monetizationConfig.ads.enabled` | `false` |
| `monetizationConfig.ads.loadScripts` | `false` |
| Legal routes | `DRAFT_LEGAL_PATHS` — noindex until attorney review |
| Contact email | `help@suppcheckr.com` |

---

## O. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — typecheck, lint, 40 tests, `validate:content` 0 errors / 0 warnings |
| `npm run build` | **Pass** — Next.js production build succeeded |

**Content validation:** Foreign keys for `vitamin-c` category ↔ ingredient ↔ scoring profile ↔ rubric resolve cleanly.

**Risky-term lint:** Warnings only (expected in template “avoid” lists). Fixed rubric substring false positive (`obscures` → `hides`).

---

## P. Recommended next phase

**Phase 8D — Vitamin C product longlist research**

1. Screen ~15–20 candidates using `vitamin-c-product-research-checklist.md`
2. Map to six planned form buckets (ascorbic acid, buffered, liposomal, powder, tested premium, budget)
3. Capture official labels, dated prices, testing status — no YAML until shortlist approval
4. Draft foundational guides (`what-is-vitamin-c`, `how-to-choose`, dosage, side effects) as `draft`/`noindex`
5. Do not publish cluster or enable per-product Amazon CTAs without explicit approval

**Alternate:** Phase 8D could start guide drafting in parallel with longlist if stakeholder prefers content-first — rubric is now ready either way.

---

## Q. Recommended commit message

```
Phase 8C: add Vitamin C source rules and rubric
```

---

## Files created/changed

| Action | Path |
|--------|------|
| Created | `content/templates/vitamin-c-source-inventory-2026-07-07.md` |
| Created | `content/templates/vitamin-c-claim-language-guide.md` |
| Created | `content/templates/vitamin-c-product-research-checklist.md` |
| Created | `content/scoring/profiles/vitamin-c.yaml` |
| Created | `content/scoring/rubrics/vitamin-c.yaml` |
| Created | `content/categories/vitamin-c.yaml` |
| Created | `content/ingredients/vitamin-c.yaml` |
| Created | `content/templates/phase-8c-vitamin-c-source-and-rubric-report-2026-07-07.md` |
| Updated | `content/templates/citation-id-conventions.md` |

**Not modified:** Creatine/Magnesium product YAML, affiliate mappings, `config/monetization.ts`, `SITE_MODE`, legal page components.

---

*Planning and draft foundation only. Vitamin C cluster not published in Phase 8C.*
