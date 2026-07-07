# Phase 8F — Vitamin C Guides + Comparison Cluster (Draft)

**Date:** 2026-07-07  
**Phase:** 8F — draft/noindex Vitamin C guides and category comparison  
**Git baseline:** `f664e66` (Phase 8E) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)  
**Recommended commit message:** `Phase 8F: draft Vitamin C guides and comparison`

---

## A. Scope and constraints

Phase 8F executed under all project guardrails:

| Constraint | Status |
|------------|--------|
| Create six draft/noindex Vitamin C guides | **Done** |
| Create one draft/noindex Vitamin C comparison YAML | **Done** |
| Update Vitamin C category/ingredient shells minimally | **Done** |
| Vitamin C remains unpublished (`draft` / `noindex`) | **Done** |
| No Amazon affiliate links, ASINs, or images for Vitamin C | **Done** |
| No Creatine/Magnesium product facts, prices, scores, testing, or affiliate edits | **Confirmed** |
| Klean Athlete Klean Magnesium held back | **Confirmed** |
| `SITE_MODE` prelaunch; ads disabled; legal pages draft/noindex | **Confirmed** |
| Contact email `help@suppcheckr.com` | **Confirmed** (`config/site.ts`) |

**Pre-flight verification:**

| Artifact | Present |
|----------|---------|
| Phase 8C report + source inventory, claim guide, scoring profile/rubric | Yes |
| Phase 8D report + longlist | Yes |
| Phase 8E report + five draft product YAML | Yes |
| Draft/noindex category/ingredient shells | Yes |
| Working tree clean at phase start | Yes |

---

## B. Files created/changed

### Created

| File | Purpose |
|------|---------|
| `content/guides/what-is-vitamin-c.yaml` | Foundational vitamin C education |
| `content/guides/how-to-choose-a-vitamin-c-supplement.yaml` | Buyer checklist without rankings |
| `content/guides/vitamin-c-dosage-guide.yaml` | Label dose reading + RDA/UL context |
| `content/guides/vitamin-c-side-effects-and-safety.yaml` | Conservative safety context |
| `content/guides/liposomal-vitamin-c-vs-regular-vitamin-c.yaml` | Liposomal vs regular form comparison |
| `content/guides/buffered-vitamin-c-vs-ascorbic-acid.yaml` | Buffered vs ascorbic acid comparison |
| `content/comparisons/vitamin-c-supplements-compared.yaml` | Five-product draft comparison table |
| `content/templates/phase-8f-vitamin-c-guides-and-comparison-report-2026-07-07.md` | This report |

### Updated

| File | Change |
|------|--------|
| `content/categories/vitamin-c.yaml` | `relatedGuides` (6), `buyersGuideSlug`, `clusterScopeNote`, Phase 8F `updateLog` |
| `content/ingredients/vitamin-c.yaml` | `relatedGuideSlugs` (6), Phase 8F `updateLog` |

### Not modified

- All Creatine/Magnesium product YAML, guides, comparisons, affiliate mappings
- Vitamin C product YAML (scores, prices, facts unchanged)
- `config/site.ts`, `config/monetization.ts`, legal page content
- Scoring profiles/rubrics

---

## C. Guide drafts created

| Slug | Future URL | claimRiskLevel | status / noindex |
|------|------------|----------------|------------------|
| `what-is-vitamin-c` | `/guides/what-is-vitamin-c` | low | draft / true |
| `how-to-choose-a-vitamin-c-supplement` | `/guides/how-to-choose-a-vitamin-c-supplement` | low | draft / true |
| `vitamin-c-dosage-guide` | `/guides/vitamin-c-dosage-guide` | low | draft / true |
| `vitamin-c-side-effects-and-safety` | `/guides/vitamin-c-side-effects-and-safety` | low | draft / true |
| `liposomal-vitamin-c-vs-regular-vitamin-c` | `/guides/liposomal-vitamin-c-vs-regular-vitamin-c` | medium | draft / true |
| `buffered-vitamin-c-vs-ascorbic-acid` | `/guides/buffered-vitamin-c-vs-ascorbic-acid` | low | draft / true |

All guides cite NIH ODS and FDA overview sources per Vitamin C citation conventions. FAQ sections included in body where schema does not define a separate FAQ field. No Amazon links or affiliate CTAs.

---

## D. Comparison YAML summary

**File:** `content/comparisons/vitamin-c-supplements-compared.yaml`  
**Future URL:** `/supplements/vitamin-c/compare`  
**Type:** `category_ranking`  
**status / noindex:** draft / true

| Product ID | Overall score | Default sort rank |
|------------|--------------:|------------------:|
| `vitamin-c-nutricost-vitamin-c-powder` | 87 | 1 |
| `vitamin-c-nature-made-vitamin-c-1000-mg-tablets` | 82 | 2 |
| `vitamin-c-now-foods-vitamin-c-1000-veg-capsules` | 79 | 3 |
| `vitamin-c-nutricost-buffered-vitamin-c-120` | 74 | 4 |
| `vitamin-c-livon-lypo-spheric-vitamin-c` | 69 | 5 |

**priceCheckedAt:** 2026-07-07 (Phase 8E prices, unchanged in 8F)

No “Best Overall” or condition-winner framing. LivOn absorption superiority not endorsed. Nature Made USP caveat preserved. Nutricost Buffered mineral-split gap preserved.

---

## E. Category/ingredient shell updates

| Field | `content/categories/vitamin-c.yaml` | `content/ingredients/vitamin-c.yaml` |
|-------|-------------------------------------|--------------------------------------|
| `relatedGuides` / `relatedGuideSlugs` | Six Phase 8F guide slugs | Six Phase 8F guide slugs |
| `buyersGuideSlug` | `how-to-choose-a-vitamin-c-supplement` | — |
| `clusterScopeNote` | Notes guides + comparison; cluster unpublished | — |
| `status` / `noindex` | draft / true (unchanged) | draft / true (unchanged) |
| `featuredProductIds` | [] (unchanged) | — |
| Affiliate / Amazon | None added | — |

---

## F. Source gaps closed or still open

| Gap | Phase 8F action | Status |
|-----|-----------------|--------|
| Nutricost Buffered calcium vs. sodium ascorbate split | Re-fetched Nutricost product page; SFP image URL present but mineral split not readable from text fetch | **Still open** — confirm from high-res SFP image before publication |
| Nature Made independent USP database match | Attempted USP verified-products URL (404); no database match captured | **Still open** — Target USP badge remains retailer-sourced caveat |
| LivOn official structured Supplement Facts | Official brand page confirms sodium ascorbate in ingredient list; structured SFP still cited from Vitacost mirror in product YAML | **Partially documented** — ingredient-list confirmation only; structured SFP gap remains |

No Amazon reviews/Q&A/ratings/live prices used. No product facts, scores, or prices changed in Phase 8F.

---

## G. Claim-risk review

| Area | Notes |
|------|-------|
| Cold/COVID/cancer/deficiency treatment | Avoided in all guides |
| Liposomal absorption | `claimRiskLevel: medium` on liposomal guide; explicit “not guaranteed better absorbed” |
| Buffered gentleness | Explicit “not automatically gentler” framing |
| Demographic winners | No “best for women/kids/pregnancy” product picks |
| Ranking language | No “Best Overall” / “Best for Everyone” |
| Risky-term lint | 0 errors; expected warnings on educational negation phrases (e.g., “doctor recommended” in scrutiny context, “best overall” in negation on liposomal guide) |

---

## H. Confirmation — all Vitamin C guides/comparison draft/noindex

| Entity | status | noindex |
|--------|--------|---------|
| Six guides | draft | true |
| `vitamin-c-supplements-compared` | draft | true |

---

## I. Confirmation — Vitamin C category/ingredient remain draft/noindex

| Entity | status | noindex |
|--------|--------|---------|
| `content/categories/vitamin-c.yaml` | draft | true |
| `content/ingredients/vitamin-c.yaml` | draft | true |

---

## J. Confirmation — no Vitamin C Amazon/affiliate links added

No Amazon URLs, ASINs, `tag=` parameters, or `affiliate.enabled: true` on any Vitamin C guide, comparison, category, ingredient, or product YAML.

---

## K. Confirmation — no Vitamin C content published/indexable

Draft cluster routes build successfully but `isIndexable()` / `entityNoindex()` keep Vitamin C guides, comparison, category, ingredient, products, and LivOn brand off sitemap and `noindex`.

---

## L. Confirmation — existing Creatine/Magnesium data and affiliate mappings unchanged

No edits to published Creatine or Magnesium YAML in Phase 8F.

---

## M. Confirmation — Klean Magnesium remains held back

`content/products/magnesium/klean-athlete-klean-magnesium.yaml` — `affiliate.enabled: false` (unchanged).

---

## N. Confirmation — SITE_MODE prelaunch, ads disabled, legal pages draft/noindex

| Setting | Value |
|---------|-------|
| `SITE_MODE` | `prelaunch` (`config/site.ts`) |
| Ads | `enabled: false`, `loadScripts: false` (`config/monetization.ts`) |
| Legal paths | `DRAFT_LEGAL_PATHS` in `lib/seo/indexing.ts` (unchanged) |

---

## O. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — 0 validation errors; 40 tests pass; risky-term lint 0 errors (warnings only) |
| `npm run build` | **Pass** |

---

## P. Recommended next phase

**Phase 8G — Vitamin C cluster QA + publication prep (draft review only until explicit approval):**

1. Close remaining source gaps (Nutricost Buffered mineral split, Nature Made USP database, LivOn brand-hosted SFP).
2. Internal link QA across guides, comparison, category, ingredient, and five products.
3. Re-run risky-term and claim-risk review on full Vitamin C cluster.
4. Publication checklist mirroring Magnesium Phase 4G/4H — **do not publish without explicit approval**.
5. Optional: Amazon ASIN/UPC mapping phase (separate approval; no links until enabled per SKU).

---

## Q. Recommended commit message

```
Phase 8F: draft Vitamin C guides and comparison
```
