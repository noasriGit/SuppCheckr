# Phase 15A — CoQ10 Research & Blueprint Report

**Date:** 2026-07-07 (executed 2026-07-15)  
**Phase:** 15A — CoQ10 research, source rules, scoring rubric, and ubiquinol vs ubiquinone blueprint  
**Git baseline:** `c613667` (Phase 14J) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)  
**Recommended commit message:** `Phase 15A: plan CoQ10 category`

---

## A. Scope and constraints

Phase 15A executed under all project guardrails:

| Constraint | Status |
|------------|--------|
| CoQ10 research/blueprint only — no product reviews, guides, comparison, or publication | **Done** |
| No CoQ10 Amazon affiliate links or ASIN mappings | **Done** |
| No product facts, prices, scores, testing statuses changed (Creatine/Magnesium/Vitamin C/Electrolytes) | **Confirmed** |
| No affiliate mapping changes | **Confirmed** |
| Klean Athlete Klean Magnesium held back (`affiliate.enabled: false`) | **Confirmed** |
| Nuun Sport held back (`affiliate.enabled: false`) | **Confirmed** |
| `SITE_MODE` remains prelaunch | **Confirmed** |
| Ads remain disabled (`ads.enabled: false`, `loadScripts: false`) | **Confirmed** |
| Legal pages remain draft/noindex | **Confirmed** (`lib/seo/indexing.ts` `DRAFT_LEGAL_PATHS`) |
| No CoQ10 content published/indexable | **Confirmed** |
| Contact email `help@suppcheckr.com` | **Confirmed** (`config/site.ts`) |
| Human supplements only — reject animal/pet CoQ10 | **Documented** |

**Pre-flight verification:**

| Artifact | Present |
|----------|---------|
| `content/templates/phase-14j-production-affiliate-confirmation-report-2026-07-07.md` | Yes |
| `content/templates/phase-14j-affiliate-monitoring-checklist-2026-07-07.md` | Yes |
| Published Creatine cluster | Yes |
| Published Magnesium cluster | Yes |
| Published Vitamin C cluster | Yes |
| Published Electrolytes cluster | Yes |
| 18 affiliate-enabled products (5+4+5+4) | Yes |
| Klean Magnesium held back | Yes |
| Nuun Sport held back | Yes |
| Working tree clean at start | Yes |

---

## B. Files created/changed

### Created

| File | Purpose |
|------|---------|
| `content/templates/coq10-source-inventory-2026-07-07.md` | Authoritative sources, label rules, CoQ10-specific notes |
| `content/templates/coq10-claim-language-guide.md` | Allowed/avoid language, caution topics, safety block |
| `content/templates/coq10-product-research-checklist.md` | Product research fields, buckets, disqualifiers |
| `content/templates/phase-15a-coq10-category-blueprint-2026-07-07.md` | Category keyword strategy, cluster plan, Phase 15B recommendation |
| `content/templates/ubiquinol-vs-ubiquinone-guide-blueprint-2026-07-07.md` | Form comparison guide blueprint (not YAML) |
| `content/scoring/profiles/coq10.yaml` | Scoring profile — weights sum to 100 |
| `content/scoring/rubrics/coq10.yaml` | Rubric anchors for all nine schema criteria |
| `content/categories/coq10.yaml` | Draft/noindex category shell — no products or guides |
| `content/ingredients/coq10.yaml` | Draft/noindex ingredient shell — NIH/NCCIH/FDA sources; no product links |
| `content/templates/phase-15a-coq10-research-blueprint-report-2026-07-07.md` | This report |

### Unchanged (intentionally)

| Area | Reason |
|------|--------|
| All Creatine/Magnesium/Vitamin C/Electrolytes product YAML | Phase 15A scope |
| All affiliate mappings (18 enabled) | Phase 15A scope |
| Legal pages | Remain draft/noindex |
| `config/site.ts`, `config/monetization.ts` | SITE_MODE prelaunch; ads disabled |
| Nuun, Klean Magnesium | Held back — unchanged |

---

## C. Source inventory summary

**Created:** `content/templates/coq10-source-inventory-2026-07-07.md`

| Section | Contents |
|---------|----------|
| A. Core authoritative sources | NIH ODS CoQ10 HP/consumer; NCCIH overview; FDA supplements + label resources; FTC endorsement + health products guidance |
| B. Ingredient/form context | Ubiquinone vs ubiquinol conservative framing; no brand blogs as primary outcome evidence |
| C. Testing/certification | NSF Sport, USP Verified, Informed Choice/Sport; SKU-matched COAs |
| D. Product-label rules | Official Supplement Facts preferred; Amazon outbound-only in future mapping phases |
| E. Rejected sources | Amazon reviews/Q&A, heart/statin advice, disease-treatment articles, pet products |
| F. CoQ10-specific notes | Form, dose, oils, capsule material, allergens, added actives, price per 100 mg |

---

## D. Claim-language guide summary

**Created:** `content/templates/coq10-claim-language-guide.md`

- **Allowed:** label comparison framing, form/dose/oil disclosure, price per 100 mg, consult-professional block
- **Avoid:** heart-disease treatment, statin advice, fertility/migraine/Parkinson's claims, guaranteed energy, Best Overall
- **Caution topics:** blood thinners, heart medications, statin-adjacent search intent, pregnancy, combo stacks (PQQ)
- **Ubiquinol vs ubiquinone:** form comparison only — no medical superiority

---

## E. Product research checklist summary

**Created:** `content/templates/coq10-product-research-checklist.md`

Key fields: product name/brand/form/type, dose per serving, serving size, servings per container, carrier oil, capsule material, added actives, allergens, official label URLs, testing status, dated price, price per serving, price per 100 mg CoQ10, Amazon exact-match (deferred), claim-risk notes, inclusion/rejection reason.

Planned V1 buckets: ubiquinol softgel, ubiquinone softgel, 100 mg anchor, 200 mg anchor, budget ubiquinone, combo/defer.

---

## F. Category blueprint summary

**Created:** `content/templates/phase-15a-coq10-category-blueprint-2026-07-07.md`

- **Why next:** Phase 13B clean-authority path post-Electrolytes; Phase 8A `best coq10 supplement` (KD 3, vol 6,100)
- **First-wave URLs:** category hub, compare, ubiquinol vs ubiquinone guide, how-to-choose, what-is-coq10, dose/format guides
- **Claim boundaries:** no heart/statin/medication advice; no condition-treatment framing
- **Shortlist direction:** ubiquinol + ubiquinone anchors, dose diversity, value SKU (Phase 15B research)
- **Phase 15B:** product longlist research

---

## G. Ubiquinol vs ubiquinone blueprint summary

**Created:** `content/templates/ubiquinol-vs-ubiquinone-guide-blueprint-2026-07-07.md`

- **Target keyword:** `ubiquinol vs ubiquinone`
- **URL:** `/guides/ubiquinol-vs-ubiquinone`
- **Criteria:** form naming, dose, format, oil base, price per 100 mg, testing, absorption claims (conservative)
- **Publication gate:** locked ubiquinol + ubiquinone product YAML before guide publish
- **Claims avoided:** heart treatment, statin advice, form superiority, Best Overall

---

## H. Scoring/rubric status

**Created and schema-valid:**

| File | Weights sum |
|------|-------------|
| `content/scoring/profiles/coq10.yaml` | **100** |
| `content/scoring/rubrics/coq10.yaml` | All 9 schema criteria anchored |

**Schema mapping (editorial → schema key):**

| Editorial | Schema key | Weight |
|-----------|------------|-------:|
| formTransparency | `ingredientTransparency` | 16 |
| doseClarity | `doseTransparency` | 14 |
| labelClarity | `labelClarity` | 12 |
| testingTransparency | `thirdPartyTesting` | 12 |
| priceValue | `priceValue` | 12 |
| claimConservatism + evidence alignment | `evidenceAlignment` | 14 |
| additiveAndAllergenProfile | `additives` | 8 |
| servingPracticality | `formulaQuality` | 6 |
| brandTransparency | `brandTransparency` | 6 |

**No products scored in Phase 15A.**

---

## I. Draft shell status

| Shell | Status | Indexable |
|-------|--------|-----------|
| `content/categories/coq10.yaml` | `status: draft`, `noindex: true` | **No** |
| `content/ingredients/coq10.yaml` | `status: draft`, `noindex: true` | **No** |

Both shells: no `featuredProductIds`, no `relatedGuideSlugs`, no comparison references, no Amazon links. `scoringProfileId: coq10` set on category shell.

---

## J. Rejected/non-goals

| Non-goal | Phase 15A status |
|----------|------------------|
| CoQ10 product YAML | Not created |
| CoQ10 guide YAML | Not created |
| CoQ10 comparison YAML | Not created |
| CoQ10 publication / indexability | Not enabled |
| Amazon ASINs / affiliate links | Not added |
| Heart-disease / statin / medication-advice pages | Rejected in blueprint |
| Pet/animal CoQ10 | Permanent reject |
| PQQ combo as wave-1 priority | Deferred/caution |

---

## K. Confirmation no CoQ10 product YAML created

No files under `content/products/coq10/`. Product research deferred to Phase 15B.

---

## L. Confirmation no CoQ10 content published/indexable

| Entity | status | noindex | isPlaceholder |
|--------|--------|---------|---------------|
| `content/categories/coq10.yaml` | draft | true | false |
| `content/ingredients/coq10.yaml` | draft | true | false |

`isIndexable()` requires `status: published` + `noindex: false` — CoQ10 shells excluded.

---

## M. Confirmation no Amazon affiliate links/ASINs added

Phase 15A added **zero** ASIN mappings and **zero** Amazon retailer URLs.

---

## N. Confirmation existing clusters unchanged

No edits to Creatine, Magnesium, Vitamin C, or Electrolytes product YAML, guides, comparisons, or category published content.

---

## O. Confirmation affiliate mappings unchanged

18 affiliate-enabled products unchanged (5 Creatine + 4 Magnesium + 5 Vitamin C + 4 Electrolytes). Programmatic tests in `lib/__tests__/core.test.ts` unchanged.

---

## P. Confirmation Klean Magnesium remains held back

`content/products/magnesium/klean-athlete-klean-magnesium.yaml`: `affiliate.enabled: false`; no Amazon retailer entry.

---

## Q. Confirmation Nuun remains held back

`content/products/electrolytes/nuun-sport-lemon-lime-10-tablets.yaml`: `affiliate.enabled: false`; no Amazon retailer entry.

---

## R. Confirmation legal pages remain draft/noindex

`DRAFT_LEGAL_PATHS` unchanged: `/privacy-policy`, `/terms-of-use`, `/medical-disclaimer`, `/affiliate-disclosure`, `/advertising-policy`.

---

## S. Confirmation ads disabled and SITE_MODE prelaunch

| Control | Value |
|---------|-------|
| `SITE_MODE` | `prelaunch` (default in `config/site.ts`) |
| `ads.enabled` | `false` |
| `ads.loadScripts` | `false` |
| Contact email | `help@suppcheckr.com` |

---

## T. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | See Phase 15A Cursor report |
| `npm run build` | See Phase 15A Cursor report |

---

## U. Recommended next phase

**Phase 15B — CoQ10 product longlist research**

1. Screen 15–25 candidates using `coq10-product-research-checklist.md`
2. Create `coq10-product-longlist-research-2026-07-07.md` with inclusion/rejection table
3. Recommend 5-product wave-1 shortlist (ubiquinol + ubiquinone + dose + value buckets)
4. No product YAML until shortlist approved
5. No publication, no Amazon ASINs

---

## V. Recommended commit message

```
Phase 15A: plan CoQ10 category
```

---

## Warnings/risks

1. **Heart/statin search adjacency** — high claim-risk keywords; strict claim-language guide required in all CoQ10 copy.
2. **Ubiquinol absorption marketing** — brands often overstate bioavailability; mirror as `brand_claim` only.
3. **Combo products (PQQ, omega-3)** — complicate scoring; defer wave 1 unless needed for differentiation.
4. **Price per 100 mg** — ubiquinol SKUs often cost more; normalize carefully without implying medical value.
5. **Medication interaction FAQ** — warfarin/blood thinner context needs clinician referral; no medication advice.
6. **Legal pages still draft/noindex** — production launch blocked until attorney review.
7. **Draft CoQ10 shells** — remain noindex; do not publish until full cluster readiness review (Phase 15F+ pattern).

---

*Phase 15A complete. CoQ10 planning foundation created; no product data, publication, or affiliate changes.*
