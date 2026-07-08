# Phase 14A — Electrolytes Research & Blueprint Report

**Date:** 2026-07-07  
**Phase:** 14A — Electrolytes research, source rules, scoring rubric, and LMNT vs Liquid IV blueprint  
**Git baseline:** `fd67f5a` (Phase 13A) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)  
**Recommended commit message:** `Phase 14A: plan Electrolytes category`

---

## A. Scope and constraints

Phase 14A executed under all project guardrails:

| Constraint | Status |
|------------|--------|
| Electrolytes research/blueprint only — no product reviews, guides, comparison, or publication | **Done** |
| No Electrolytes Amazon affiliate links or ASIN mappings | **Done** |
| No product facts, prices, scores, testing statuses changed (Creatine/Magnesium/Vitamin C) | **Confirmed** |
| No affiliate mapping changes | **Confirmed** |
| Klean Athlete Klean Magnesium held back (`affiliate.enabled: false`) | **Confirmed** |
| `SITE_MODE` remains prelaunch | **Confirmed** |
| Ads remain disabled (`ads.enabled: false`, `loadScripts: false`) | **Confirmed** |
| Legal pages remain draft/noindex | **Confirmed** (`lib/seo/indexing.ts` `DRAFT_LEGAL_PATHS`) |
| No Electrolytes content published/indexable | **Confirmed** |
| Contact email `help@suppcheckr.com` | **Confirmed** (`config/site.ts`) |
| Human supplements only — reject animal/pet electrolytes | **Documented** |

**Pre-flight verification:**

| Artifact | Present |
|----------|---------|
| `content/templates/phase-13a-post-launch-seo-internal-link-qa-report-2026-07-07.md` | Yes |
| `content/templates/phase-13b-next-category-decision-memo-2026-07-07.md` | Yes |
| `content/templates/phase-11c-final-legal-draft-tightening-report-2026-07-07.md` | Yes |
| Published Creatine cluster | Yes |
| Published Magnesium cluster | Yes |
| Published Vitamin C cluster | Yes |
| 14 affiliate-enabled products (5 Creatine + 4 Magnesium + 5 Vitamin C) | Yes |
| Klean Magnesium held back | Yes (`affiliate.enabled: false`) |
| Working tree clean at start | Yes |

---

## B. Files created/changed

### Created

| File | Purpose |
|------|---------|
| `content/templates/electrolytes-source-inventory-2026-07-07.md` | Authoritative sources, label rules, electrolyte-specific notes |
| `content/templates/electrolytes-claim-language-guide.md` | Allowed/avoid language, caution topics, safety block |
| `content/templates/electrolytes-product-research-checklist.md` | Product research fields, buckets, disqualifiers |
| `content/templates/phase-14a-electrolytes-category-blueprint-2026-07-07.md` | Category keyword strategy, cluster plan, Phase 14B recommendation |
| `content/templates/lmnt-vs-liquid-iv-guide-blueprint-2026-07-07.md` | LMNT vs Liquid IV guide blueprint (not YAML) |
| `content/scoring/profiles/electrolytes.yaml` | Scoring profile — weights sum to 100 |
| `content/scoring/rubrics/electrolytes.yaml` | Rubric anchors for all nine schema criteria |
| `content/ingredients/electrolytes.yaml` | Draft/noindex ingredient shell — no product or guide links |
| `content/templates/phase-14a-electrolytes-research-blueprint-report-2026-07-07.md` | This report |

### Unchanged (intentionally)

| File | Reason |
|------|--------|
| `content/categories/electrolytes.yaml` | Pre-existing `placeholder` / `noindex: true` shell — safe; not upgraded |
| All Creatine/Magnesium/Vitamin C product YAML | Phase 14A scope |
| All affiliate mappings | Phase 14A scope |
| Legal pages | Remain draft/noindex |
| `config/site.ts`, `config/monetization.ts` | SITE_MODE prelaunch; ads disabled |

---

## C. Source inventory summary

**Created:** `content/templates/electrolytes-source-inventory-2026-07-07.md`

| Section | Contents |
|---------|----------|
| A. Core authoritative sources | NIH sodium/potassium/magnesium/calcium HP sheets; FDA supplements + Nutrition Facts; FTC endorsement + health products guidance |
| B. Sports/hydration context | Conservative sweat/active-lifestyle framing; brand blogs not primary evidence |
| C. Testing/certification | NSF Sport, USP Verified, Informed Choice/Sport; SKU-matched COAs |
| D. Product-label rules | Official Nutrition/Supplement Facts preferred; Amazon outbound-only later |
| E. Rejected sources | Amazon reviews/Q&A, hangover claims, illness treatment, pet products |
| F. Electrolyte-specific notes | Sodium/potassium/magnesium tracking, sweeteners, formats, price per serving |

---

## D. Claim-language guide summary

**Created:** `content/templates/electrolytes-claim-language-guide.md`

- **Allowed:** label comparison framing, sodium/sugar/sweetener disclosure, active-lifestyle context (conservative), consult-professional block
- **Avoid:** dehydration treatment, hangover cure, cramp prevention, performance guarantees, demographic winners, Best Overall
- **Caution topics:** high sodium, kidney/heart disease, blood pressure, diuretics, pregnancy, children, fasting/keto marketing, illness search intent
- **LMNT vs Liquid IV:** label facts only; no medical winner framing

---

## E. Product research checklist summary

**Created:** `content/templates/electrolytes-product-research-checklist.md`

Key fields: product name/brand/type/flavor, serving size, sodium/potassium/magnesium/calcium/chloride per serving, sugar/carbs/calories, sweeteners, additives, caffeine, official label URLs, testing status, dated price, price per serving, Amazon exact-match (deferred), claim-risk notes, inclusion/rejection reason.

Planned V1 buckets: high-sodium low-sugar stick (LMNT-style), sugar-containing stick (Liquid IV-style), sugar-free moderate sodium, optional ORS-adjacent, tub/tablet, budget anchor.

---

## F. Category blueprint summary

**Created:** `content/templates/phase-14a-electrolytes-category-blueprint-2026-07-07.md`

- **Why next:** Phase 13B + Phase 8A `lmnt vs liquid iv` (KD 0, vol 2,600)
- **First-wave URLs:** category hub, compare, LMNT vs Liquid IV guide, how-to-choose, format guides, what-are-electrolytes
- **Claim boundaries:** no medical rehydration, hangover, or performance claims
- **Shortlist:** LMNT, Liquid IV, Nuun, DripDrop, Ultima/Re-Lyte (research in 14B)
- **Phase 14B:** product longlist + draft cluster

---

## G. LMNT vs Liquid IV blueprint summary

**Created:** `content/templates/lmnt-vs-liquid-iv-guide-blueprint-2026-07-07.md`

- **Target:** `lmnt vs liquid iv` → `/guides/lmnt-vs-liquid-iv`
- **Criteria:** sodium, potassium, magnesium, sugar, sweeteners, format, testing, price per serving
- **Neutral framing:** label comparison — not medical winner
- **Publication gate:** both product YAML files with locked official labels required before publish

---

## H. Scoring/rubric status

| File | Status |
|------|--------|
| `content/scoring/profiles/electrolytes.yaml` | **Created** — weights sum to 100 |
| `content/scoring/rubrics/electrolytes.yaml` | **Created** — all nine criteria with 0/50/100 anchors |

**Schema mapping** (user-facing names → schema keys):

| Editorial criterion | Schema key | Weight |
|---------------------|------------|-------:|
| Electrolyte transparency | `doseTransparency` | 18 |
| Sodium/potassium balance disclosure | `ingredientTransparency` | 14 |
| Sugar/sweetener/additive profile | `additives` | 18 |
| Label clarity | `labelClarity` | 12 |
| Evidence alignment | `evidenceAlignment` | 10 |
| Testing transparency | `thirdPartyTesting` | 10 |
| Price per serving | `priceValue` | 8 |
| Serving practicality | `formulaQuality` | 6 |
| Brand transparency | `brandTransparency` | 4 |

**No products scored yet.**

---

## I. Draft shell status

| Entity | Status | Notes |
|--------|--------|-------|
| `content/categories/electrolytes.yaml` | **Pre-existing** — `status: placeholder`, `noindex: true`, `isPlaceholder: true` | Not modified; remains non-indexable |
| `content/ingredients/electrolytes.yaml` | **Created** — `status: draft`, `noindex: true` | No `relatedProductIds`, no `relatedGuideSlugs`, no affiliate links |
| Category `scoringProfileId` | Still `default` | Update to `electrolytes` in Phase 14B when category shell is expanded |

Build includes `/supplements/electrolytes` route from placeholder category — metadata uses `noindex` / placeholder governance (not indexable).

---

## J. Rejected/non-goals

| Non-goal | Status |
|----------|--------|
| Electrolytes product YAML | Not created |
| Electrolytes guide YAML | Not created |
| Electrolytes comparison YAML | Not created |
| Amazon ASIN mappings for Electrolytes | Not added |
| Publish Electrolytes cluster | Not done |
| Enable ads | Not done |
| Switch SITE_MODE to production | Not done |
| Publish legal pages | Not done |
| Remove legal draft banners | Not done |
| Change existing cluster product data | Not done |
| Electrolytes longlist research (14B scope) | Deferred |

---

## K. Confirmation — no Electrolytes product YAML created

Verified: `content/products/electrolytes/` does not exist. Zero electrolyte product YAML files.

---

## L. Confirmation — no Electrolytes content published/indexable

| Entity | `status` | `noindex` | Indexable |
|--------|----------|-----------|-----------|
| Category `electrolytes` | `placeholder` | `true` | No |
| Ingredient `electrolytes` | `draft` | `true` | No |
| Guides | None created | — | No |
| Comparisons | None created | — | No |
| Products | None created | — | No |

---

## M. Confirmation — no Amazon affiliate links/ASINs added

No new `affiliate.enabled: true` entries. Affiliate-enabled product count remains **14**.

---

## N. Confirmation — existing clusters unchanged

No edits to Creatine, Magnesium, or Vitamin C product YAML, guides, comparisons, categories, or ingredients (except new unrelated files).

---

## O. Confirmation — affiliate mappings unchanged

14 products with `affiliate.enabled: true` (5 Creatine + 4 Magnesium + 5 Vitamin C). No ASIN changes.

---

## P. Confirmation — Klean Magnesium remains held back

`content/products/magnesium/klean-athlete-klean-magnesium.yaml` — `affiliate.enabled: false` (UPC mismatch deferred).

---

## Q. Confirmation — legal pages remain draft/noindex

`DRAFT_LEGAL_PATHS` in `lib/seo/indexing.ts` unchanged. Legal review banners remain active in prelaunch mode.

---

## R. Confirmation — ads disabled and SITE_MODE prelaunch

| Setting | Value |
|---------|-------|
| `SITE_MODE` | `prelaunch` (`config/site.ts`) |
| `ads.enabled` | `false` (`config/monetization.ts`) |
| `ads.loadScripts` | `false` |

---

## S. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — content validation: 0 errors, 0 warnings; risky-term lint: 0 errors, 201 warnings (expected on template negation phrases) |
| `npm run build` | **Pass** — compiled successfully |

Scoring profile `electrolytes` weights validated (sum = 100). Rubric criteria match profile keys.

---

## T. Recommended next phase

**Phase 14B — Electrolytes product longlist + draft cluster**

1. Research longlist: LMNT, Liquid IV, Nuun, DripDrop, Ultima/Re-Lyte (per checklist)
2. Lock LMNT + Liquid IV product facts first
3. Draft product YAML (`draft` / `noindex`)
4. Draft guides including `lmnt-vs-liquid-iv` (after product facts locked)
5. Upgrade category shell (`scoringProfileId: electrolytes`, draft copy)
6. Draft comparison table
7. Source-gap QA before publication review

**Phase 14C (later):** publication + Amazon exact-match mapping + GSC submission.

---

## U. Recommended commit message

```
Phase 14A: plan Electrolytes category
```

---

## Warnings / risks

| Risk | Mitigation |
|------|------------|
| Hydration/dehydration medical search intent | Claim language guide + blueprint rejection rules; no illness-treatment pages |
| High-sodium products (LMNT) | NIH sodium context; blood pressure/kidney caveats in every page safety block |
| Hangover/keto/fasting marketing on competitor sites | Mirror as `brand_claim` only; do not endorse in SuppCheckr copy |
| DripDrop ORS-adjacent positioning | High claim-risk — label compare only if included; strict guardrails |
| LMNT vs Liquid IV guide before product lock | Blueprint mandates product YAML dependency before publish |
| Placeholder category route exists | `noindex: true` — monitor GSC after any future publication flip |
| Ingredient `claimRiskLevel: medium` | Appropriate for sodium/medical-adjacent search; review before publish |

---

*Research and blueprint phase only. No Electrolytes cluster published in Phase 14A.*
