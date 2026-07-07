# Phase 8G — Vitamin C Source-Gap QA + Publication Prep

**Date:** 2026-07-07  
**Phase:** 8G — source-gap QA, cluster audit, publication prep (not publication)  
**Git baseline:** `9293cdb` (Phase 8F) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)  
**Recommended commit message:** `Phase 8G: prepare Vitamin C cluster for publication review`

---

## A. Scope and constraints

Phase 8G executed under all project guardrails:

| Constraint | Status |
|------------|--------|
| Re-check full draft Vitamin C cluster | **Done** |
| Close remaining source gaps where possible | **Done** (2 closed, 1 downgraded with documentation) |
| Audit internal links and noindex behavior | **Done** — no safety issues found |
| Audit claim-risk language | **Done** — no rewrites required beyond source-gap updates |
| Create publication prep checklist | **Done** |
| Vitamin C remains `draft` / `noindex` | **Confirmed** |
| No Amazon/affiliate links for Vitamin C | **Confirmed** |
| No Creatine/Magnesium product facts, prices, scores, testing, or affiliate edits | **Confirmed** |
| Klean Athlete Klean Magnesium held back | **Confirmed** |
| `SITE_MODE` prelaunch; ads disabled; legal pages draft/noindex | **Confirmed** |
| Contact email `help@suppcheckr.com` | **Confirmed** (`config/site.ts`) |

---

## B. Source gaps reviewed

| # | Gap | Phase 8G action | Outcome |
|---|-----|-----------------|---------|
| 1 | Nutricost Buffered — calcium vs. sodium ascorbate / mineral split | Downloaded official Nutricost SFP image (`NTC_Buffered_VitaminC_500MGX2__V0__120CAP_225CC_SFP_Square_1.jpg`) from brand product page | **Closed** |
| 2 | Nature Made 1000 mg — independent USP database match | Searched `quality-supplements.org/usp_verified_products` (Nature Made brand filter + text search for Extra Strength Vitamin C 1000 mg) | **Closed as negative** — no database entry; testing downgraded |
| 3 | LivOn — official structured Supplement Facts | Confirmed official brand SFP image (`LivOn-SupplementFacts-DEC2025_C.webp`) on livonlabs.com product page | **Closed** — matches prior Vitacost mirror |
| 4 | Nature Made — brand PDP discontinued vs. active Target SKU | Re-checked; no new brand-hosted SFP captured | **Still open** — retailer label caveat remains |
| 5 | Amazon ASIN/UPC mapping for all five SKUs | Not in scope | **Deferred** to separate affiliate phase |

---

## C. Nutricost Buffered finding

**Source:** Official Nutricost Supplement Facts image on [nutricost.com/products/nutricost-buffered-vitamin-c](https://nutricost.com/products/nutricost-buffered-vitamin-c) (high-res CDN image, Phase 8G download).

**Confirmed label facts (per 2-capsule serving):**

| Field | Amount |
|-------|--------|
| Vitamin C (as sodium ascorbate, calcium ascorbate, and magnesium ascorbate) | 1,000 mg |
| Calcium (as calcium ascorbate) | 30 mg |
| Magnesium (as magnesium ascorbate) | 25 mg |
| Sodium (as sodium ascorbate) | 95 mg |

**Other ingredients corrected:** Hypromellose (cellulose capsule), corn starch, calcium laurate, magnesium stearate (vegetable source) — prior draft incorrectly listed rice flour.

**Inference rule:** Mineral types and amounts taken only from readable official SFP image; no absorption or gentleness claims added.

---

## D. Nature Made USP finding

**Retailer evidence:** Target listing (UPC 031604014896 / TCIN 11010061) displays a USP Verified badge and USP program copy.

**USP database evidence (Phase 8G):**

| Search | URL pattern | Result |
|--------|-------------|--------|
| Nature Made brand filter | `quality-supplements.org/usp_verified_products?f[0]=brand:Nature Made` | Lists Nature Made Vitamin C **500 mg with Rose Hips** and Zero Sugar Gummies — **not** Extra Strength 1000 mg Tablets |
| Text search | `search_api_fulltext=Nature+Made+Extra+Strength+Vitamin+C` | **No results** |
| Text search | `search_api_fulltext=vitamin+c+1000` + Nature Made filter | **No results** |

**Decision:** Per Vitamin C product research checklist (`verified` requires program database entry) and Magnesium cluster precedent (Nature Made oxide USP badge without database match → not verified), testing status changed from **`verified` → `claimed`**. USP Verified removed from `certifications` array. Product name and SEO title no longer assert independent USP verification.

**Note:** Target USP badge remains cited as a retailer `brand_claim` with database negative-search source.

---

## E. LivOn Supplement Facts finding

**Source:** Official LivOn product page [livonlabs.com/products/vitamin-c](https://www.livonlabs.com/products/vitamin-c) — Supplement Facts gallery image dated December 2025.

**Confirmed (per 1 packet / 5.7 mL serving):**

| Field | Amount |
|-------|--------|
| Vitamin C (as sodium ascorbate) | 1,000 mg |
| Choline (from phosphatidylcholine) | 60 mg |
| Sodium (as sodium ascorbate) | 160 mg |
| Essential Phospholipids (from soy lecithin) | 1,000 mg |
| Total Phosphatidylcholine (PC) | 500 mg |
| Other ingredients | Purified water, ethanol (0.684 g), citric acid |

Matches Phase 8E Vitacost mirror citation. Primary `label-*` source updated to official brand page. Vitacost mirror retained as secondary reference only (no claim support).

Brand absorption marketing ("Clinically shown…") not mirrored in SuppCheckr copy.

---

## F. Product YAML changes made

| File | Changes |
|------|---------|
| `nutricost-buffered-vitamin-c-120.yaml` | Multi-mineral ascorbate SFP, corrected excipients, updated claims/sources, scores 74→77 |
| `nature-made-vitamin-c-1000-mg-tablets.yaml` | Testing `verified`→`claimed`, removed USP certification, USP database source added, name/SEO softened, scores 82→77 |
| `livon-lypo-spheric-vitamin-c.yaml` | Brand-hosted SFP as primary label source, scores 69→72 |
| `vitamin-c-supplements-compared.yaml` | Caveats and criterion labels updated |
| `buffered-vitamin-c-vs-ascorbic-acid.yaml` | Nutricost mineral-split gap closed in body copy |
| `categories/vitamin-c.yaml` | `clusterScopeNote` + Phase 8G `updateLog` |

**Unchanged:** NOW C-1000 Veg, Nutricost Powder YAML (facts/prices/scores).

---

## G. Testing status changes made

| Product | Before | After | Reason |
|---------|--------|-------|--------|
| Nutricost Buffered | claimed | claimed | No change (marketing-only third-party testing) |
| Nature Made 1000 mg | **verified** | **claimed** | USP database search found no 1000 mg listing |
| LivOn Lypo-Spheric | unknown | unknown | No certificate URL captured |
| NOW C-1000 Veg | unknown | unknown | — |
| Nutricost Powder | claimed | claimed | — |

---

## H. Price/scoring corrections made

**Prices:** Unchanged (2026-07-07 manual prices from Phase 8E).

**Score updates (weighted profile `vitamin-c`):**

| Product | Overall before | Overall after | Key score drivers |
|---------|---------------:|--------------:|-------------------|
| Nutricost Buffered | 74 | **77** | ingredientTransparency 78→92, labelClarity 82→90; additives 82→75 (corn starch) |
| Nature Made 1000 mg | 82 | **77** | thirdPartyTesting 92→50 (USP downgrade) |
| LivOn Lypo-Spheric | 69 | **72** | labelClarity 82→92, brandTransparency 78→88 (official SFP) |

**Default comparison sort order (by overallScore):**

1. Nutricost Powder — 87  
2. NOW C-1000 Veg — 79  
3. Nature Made 1000 mg — 77 (tied)  
3. Nutricost Buffered — 77 (tied)  
5. LivOn Lypo-Spheric — 72  

Price-per-500-mg math verified unchanged: all products use `(pricePerServing ÷ vitamin C mg) × 500`.

---

## I. Remaining source gaps

1. **Nature Made 1000 mg** — brand product page discontinued; label locked via Target listing (retailer-sourced label caveat).
2. **Nature Made USP** — Target displays USP badge but SKU not in USP database; documented as `claimed` only.
3. **All five SKUs** — no public batch COA / certificate URLs for claimed or unknown testing statuses.
4. **Amazon ASIN/UPC exact mapping** — deferred to separate affiliate phase.

---

## J. Claim-risk review findings

| Check | Result |
|-------|--------|
| Cold/COVID/cancer/deficiency treatment language | **Pass** — not present in cluster copy |
| Liposomal absorption superiority | **Pass** — explicitly negated in product YAML, liposomal guide, comparison caveats |
| Buffered gentleness / better absorbed | **Pass** — negated in buffered guide and product cons |
| Demographic winners (kids/pregnancy/women) | **Pass** — not present |
| "Best Overall" / "Best for Everyone" | **Pass** — only in negation context on liposomal guide (lint-allowed) |
| "FDA-approved supplement" | **Pass** — only in regulatory disclaimer context (FDA not approved to treat disease) |
| "Safe for everyone" | **Pass** — only in buffered guide avoidance list |
| Nature Made USP in product name | **Fixed** — removed from name/SEO after downgrade |

No risky-term lint errors introduced.

---

## K. Noindex/publication safety audit

| Entity | status | noindex | Safe |
|--------|--------|---------|------|
| `categories/vitamin-c.yaml` | draft | true | ✓ |
| `ingredients/vitamin-c.yaml` | draft | true | ✓ |
| Five product YAML | draft | true | ✓ |
| Six guide YAML | draft | true | ✓ |
| `vitamin-c-supplements-compared.yaml` | draft | true | ✓ |
| `brands/livon-laboratories.yaml` | draft | true | ✓ |

**Runtime checks:**

- `isIndexable()` requires `status: published` AND `noindex: false` — all Vitamin C entities excluded.
- `getSearchIndexEntries()` uses indexable loaders only — Vitamin C not in search index.
- `getBrandPageProducts()` — draft LivOn brand shows active preview products only when brand is draft; published brands (NOW, Nutricost, Nature Made) filter to indexable products only — draft Vitamin C products not exposed on published brand hubs.
- Sitemap uses indexable entity loaders — Vitamin C routes not emitted.

**No safety fixes required.**

---

## L. Internal link QA

| Check | Result |
|-------|--------|
| Category `relatedGuides` (6 slugs) | **Valid** |
| Ingredient `relatedGuideSlugs` + `relatedProductIds` | **Valid** |
| Comparison `productIds` (5 draft products) | **Valid** |
| Guide cross-links (category, ingredient, comparison, guides) | **Valid** — slugs match existing YAML |
| Product `relatedProductIds` | **Valid** — all five IDs exist |
| `brandId: livon-laboratories` FK | **Valid** — draft brand exists |
| Duplicate slug conflicts | **None** |
| Broken internal references | **None found** |

Internal links point to draft routes that build but remain `noindex` — expected pre-publication behavior.

---

## M. Confirmation — no Vitamin C content was published

All Vitamin C category, ingredient, products, guides, comparison, and LivOn brand remain `status: draft` / `noindex: true`. No publication metadata changes.

---

## N. Confirmation — no Vitamin C affiliate/Amazon links were added

No Amazon URLs, ASINs, `tag=` parameters, or `affiliate.enabled: true` on any Vitamin C entity.

---

## O. Confirmation — no existing Creatine/Magnesium data or affiliate mappings changed

No edits to published Creatine or Magnesium product YAML, comparisons, guides, scores, prices, testing statuses, or affiliate mappings.

---

## P. Confirmation — Klean Magnesium remains held back

`content/products/magnesium/klean-athlete-klean-magnesium.yaml` — `affiliate.enabled: false` (UPC mismatch). Unchanged.

---

## Q. Confirmation — SITE_MODE prelaunch, ads disabled, legal pages draft/noindex

| Setting | Value |
|---------|-------|
| `SITE_MODE` | `prelaunch` (`config/site.ts`) |
| Ads | `enabled: false`, `loadScripts: false` (`config/monetization.ts`) |
| Legal paths | `DRAFT_LEGAL_PATHS` in `lib/seo/indexing.ts` (unchanged) |
| Contact email | `help@suppcheckr.com` |

---

## R. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — typecheck, lint, 40 tests, `validate:content` 0 errors / 0 warnings, risky-term lint 0 errors (141 warnings, expected) |
| `npm run build` | **Pass** |

---

## S. Recommended next phase

**Phase 8H — Vitamin C publication (explicit user approval required):**

1. User approves publication of Vitamin C cluster.
2. Execute checklist in `vitamin-c-publication-prep-checklist-2026-07-07.md`.
3. Flip `status: published` / `noindex: false` on category, ingredient, five products, six guides, comparison, and LivOn brand.
4. Re-run validation, build, sitemap, and live page checks.
5. **Separate phase:** Amazon ASIN/UPC mapping and affiliate CTA activation (not part of publication).

---

## T. Recommended commit message

```
Phase 8G: prepare Vitamin C cluster for publication review
```

---

## Files created/changed

| Action | Path |
|--------|------|
| Created | `content/templates/phase-8g-vitamin-c-source-gap-qa-report-2026-07-07.md` |
| Created | `content/templates/vitamin-c-publication-prep-checklist-2026-07-07.md` |
| Updated | `content/products/vitamin-c/nutricost-buffered-vitamin-c-120.yaml` |
| Updated | `content/products/vitamin-c/nature-made-vitamin-c-1000-mg-tablets.yaml` |
| Updated | `content/products/vitamin-c/livon-lypo-spheric-vitamin-c.yaml` |
| Updated | `content/comparisons/vitamin-c-supplements-compared.yaml` |
| Updated | `content/guides/buffered-vitamin-c-vs-ascorbic-acid.yaml` |
| Updated | `content/categories/vitamin-c.yaml` |

**Not modified:** Creatine/Magnesium products, affiliate config, ads, legal pages, `SITE_MODE`, Vitamin C powder/NOW product YAML.

---

*QA and publication prep phase only. Vitamin C cluster not published in Phase 8G.*
