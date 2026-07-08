# Phase 13A — Post-Launch SEO / Internal-Link QA Report

**Date:** 2026-07-07  
**Phase:** 13A — optimize live Creatine, Magnesium, and Vitamin C clusters  
**Git baseline:** `d1b0be5` (Phase 11C) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)  
**Recommended commit message:** `Phase 13A: optimize live cluster links and SEO QA`

---

## A. Scope and constraints

Phase 13A audited and lightly improved internal linking, hub copy, comparison-page clarity, sitemap/indexability, and Search Console readiness for the three live clusters. No new categories, products, ASINs, or product fact changes.

**Honored constraints:**

| Constraint | Status |
|------------|--------|
| `SITE_MODE` | `prelaunch` — unchanged |
| Ads | Disabled (`ads.enabled: false`, `loadScripts: false`) |
| Legal pages | Draft + `noindex` — unchanged |
| Product facts/prices/scores/testing statuses | **Unchanged** |
| Affiliate mappings / ASINs | **Unchanged** |
| Klean Magnesium affiliate | **Held back** (`affiliate.enabled: false`) |
| New categories | **None created** |
| Amazon images/reviews/Q&A/ratings/live prices | **Not added** |
| Contact email | `help@suppcheckr.com` |

---

## B. Files changed

| File | Change |
|------|--------|
| `app/guides/[guideSlug]/page.tsx` | Dynamic related-reading links for all clusters (category, ingredient, compare, buyers guide) |
| `app/ingredients/[ingredientSlug]/page.tsx` | Compare + buyers guide links for all indexable categories |
| `app/supplements/[category]/compare/page.tsx` | "How to use this comparison" section; ingredient + buying guide links |
| `components/search/SearchClient.tsx` | Search intro mentions Vitamin C |
| `content/ingredients/magnesium.yaml` | Populated `relatedProductIds` (5 products) |
| `content/guides/what-is-magnesium.yaml` | Added comparison table link in body |
| `content/guides/what-is-vitamin-c.yaml` | Added comparison table link in body |
| `content/categories/vitamin-c.yaml` | Updated `clusterScopeNote` — Phase 9 affiliate status |
| `content/comparisons/vitamin-c-supplements-compared.yaml` | Replaced stale deferred-affiliate caveat |
| `content/products/magnesium/*.yaml` (5) | Set `comparisonGroupIds: [magnesium-supplements-compared]` |
| `content/products/vitamin-c/*.yaml` (5) | Set `comparisonGroupIds: [vitamin-c-supplements-compared]` |

**Created:**

| File | Purpose |
|------|---------|
| `content/templates/phase-13a-gsc-submission-checklist-2026-07-07.md` | GSC submission checklist |
| `content/templates/phase-13b-next-category-decision-memo-2026-07-07.md` | Next-category decision memo |
| `content/templates/phase-13a-post-launch-seo-internal-link-qa-report-2026-07-07.md` | This report |

---

## C. Cluster structure reviewed

| Entity | Creatine | Magnesium | Vitamin C |
|--------|----------|-----------|-----------|
| Category hub | `/supplements/creatine` — published, indexable | `/supplements/magnesium` — published, indexable | `/supplements/vitamin-c` — published, indexable |
| Comparison | `creatine-monohydrate-compared` | `magnesium-supplements-compared` | `vitamin-c-supplements-compared` |
| Ingredient | `creatine-monohydrate` | `magnesium` | `vitamin-c` |
| Guides | 5 published | 6 published | 6 published |
| Products | 5 published | 5 published (Klean affiliate held back) | 5 published |
| Affiliate CTAs | 5 Amazon | 4 Amazon + 1 direct (Klean) | 5 Amazon (Phase 9, incl. LivOn B000CD9XGC) |

Public hubs (`/`, `/supplements`, `/compare`, `/guides`, `/methodology`) already mention all three categories from Phase 8H-2.

---

## D. Internal-link QA findings and changes

### Findings

1. **Guide page template bug** — Every guide hardcoded a Creatine ingredient link and only showed compare link for Creatine.
2. **Ingredient page template gap** — Compare link only rendered for `creatine` slug.
3. **Magnesium ingredient gap** — `relatedProductIds: []` meant no product cards on `/ingredients/magnesium`.
4. **Guide copy gap** — `what-is-magnesium` and `what-is-vitamin-c` lacked comparison table links that `what-is-creatine` had.
5. **Search intro stale** — `SearchClient` mentioned only Creatine and Magnesium.
6. **Vitamin C stale affiliate copy** — Category `clusterScopeNote` and comparison caveats still said affiliates deferred (outdated after Phase 9).
7. **`comparisonGroupIds` parity** — Mg/Vit C products had empty arrays; Creatine populated.

### Changes made

- Guide and ingredient templates now use `category.ingredientSlug`, `category.comparisonCtaLabel`, and `category.buyersGuideSlug` dynamically.
- Magnesium ingredient populated with all five product IDs.
- `what-is-magnesium` and `what-is-vitamin-c` bodies link to cluster comparison tables.
- Search intro updated to include Vitamin C.
- Stale Vitamin C affiliate deferral copy corrected to Phase 9 status (all 5 Amazon affiliate CTAs; no mapping changes).
- `comparisonGroupIds` set on all Mg/Vit C products for schema parity.

### Link matrix (post-fix)

| From → To | Status |
|-----------|--------|
| Category → ingredient, guides, products, compare | Complete (template) |
| Ingredient → products | Complete all three clusters |
| Ingredient → compare, buyers guide | **Fixed** — all clusters |
| Guide template → category, ingredient, compare, buyers guide | **Fixed** — all clusters |
| Product → category, compare, ingredient, guides | Complete (existing template) |
| Hubs → three categories | Complete (Phase 8H-2) |

No broken internal links identified. No draft/noindex entities promoted as live recommendations.

---

## E. Comparison-page clarity findings and changes

### Findings

Comparison YAML for all three clusters already had strong `methodologyNote`, `orderingNote`, and condition-avoidance language. Vitamin C comparison had one stale affiliate caveat.

### Changes

- Added **"How to use this comparison"** section to `app/supplements/[category]/compare/page.tsx`:
  - Clarifies scores as label/source/value tools, not medical recommendations
  - Points to methodology, ingredient reference, and buying guide
- Updated Vitamin C comparison caveat to reflect Phase 9 affiliate status (all 5 Amazon affiliate CTAs, including LivOn).

No "Best Overall," "Best for Everyone," or disease-condition rankings added. Product order unchanged.

---

## F. Product CTA/disclosure QA findings

Reviewed via existing `lib/__tests__/core.test.ts` (42 tests pass) and Phase 9B framework audit — **no code changes required**.

| Check | Result |
|-------|--------|
| 14 affiliate-enabled products | **Pass** — exactly 14 with `affiliate.enabled: true` (5 Creatine, 4 Magnesium, 5 Vitamin C) |
| Vitamin C affiliate CTAs | **Pass** — all 5 Amazon, including LivOn Lypo-Spheric (`B000CD9XGC`) |
| Klean Magnesium | **Pass** — `affiliate.enabled: false`, direct Klean URL (only held-back product) |
| Affiliate disclosure near CTAs | **Pass** — `AffiliateLinkDisclosure` in product page template |
| No `#amazon-placeholder` when tag configured | **Pass** |
| No Amazon images/reviews/Q&A/ratings/live prices | **Pass** |
| Medical disclaimer on product pages | **Pass** |
| LivOn Vitamin C | **Pass** — Amazon affiliate CTA (`affiliate.enabled: true`, ASIN B000CD9XGC) |

---

## G. Sitemap/search/indexability QA

| Check | Result |
|-------|--------|
| Creatine cluster indexable + in sitemap | **Pass** |
| Magnesium cluster indexable + in sitemap | **Pass** |
| Vitamin C cluster indexable + in sitemap | **Pass** |
| Legal pages draft/noindex, excluded from sitemap | **Pass** — `DRAFT_LEGAL_PATHS` |
| LivOn brand `noindex: true` | **Pass** — not in `getIndexableBrands()` |
| Klean Magnesium published/indexable, affiliate-disabled | **Pass** |
| `/compare`, `/ingredients`, `/brands` hubs noindex | **Pass** — `NOINDEX_STATIC_PATHS` |
| Deep ingredient/compare URLs indexable | **Pass** |
| Search index includes all three clusters | **Pass** |

**No indexability bugs found requiring code fixes.**

---

## H. GSC submission checklist created

`content/templates/phase-13a-gsc-submission-checklist-2026-07-07.md` — includes Vitamin C priority URLs, product URLs, sitemap URL, mobile/affiliate/noindex checks.

---

## I. Next-category decision memo created

`content/templates/phase-13b-next-category-decision-memo-2026-07-07.md` — compares Electrolytes, CoQ10, Vitamin D, B12, Omega-3, Collagen using Phase 8A data.

**Recommendation:**
- Affiliate/comparison upside → **Electrolytes** (LMNT vs Liquid IV)
- Clean supplement authority → **CoQ10** (ubiquinol vs ubiquinone)
- Phase 14 path: Electrolytes research → draft → publication, then CoQ10 planning

---

## J. Confirmation — no product facts/prices/scores/testing statuses changed

**Confirmed.** Only `comparisonGroupIds` metadata updated on Mg/Vit C products (linking field, not scoring or label facts). No score, price, testing status, or source claim edits.

---

## K. Confirmation — affiliate mappings unchanged

**Confirmed.** No ASIN, `affiliate.enabled`, or retailer URL changes.

---

## L. Confirmation — Klean Magnesium remains held back

**Confirmed.** `magnesium-klean-athlete-klean-magnesium` — `affiliate.enabled: false`, UPC mismatch note preserved.

---

## M. Confirmation — legal pages remain draft/noindex

**Confirmed.** `DRAFT_LEGAL_PATHS` unchanged; draft banners not removed.

---

## N. Confirmation — ads remain disabled

**Confirmed.** `monetizationConfig.ads.enabled: false`, `loadScripts: false`.

---

## O. Confirmation — SITE_MODE remains prelaunch

**Confirmed.** `config/site.ts` default `SITE_MODE=prelaunch`.

---

## P. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — typecheck, lint, 42 tests, content validation 0 errors |
| `npm run build` | **Pass** |

---

## Q. Warnings/risks

0. **LivOn affiliate copy hotfix (pre-commit)** — Phase 13A initially introduced incorrect "4 Amazon, LivOn direct" wording in category/comparison copy and reports. Product YAML was always correct (`affiliate.enabled: true`, ASIN B000CD9XGC). Copy corrected before commit; no mapping changes.

1. **LivOn brand page remains `noindex`** — product is indexable; brand hub is not. Acceptable until separate brand-publication phase.
2. **Legal pages still draft** — GSC and prelaunch indexing should not include legal URLs until attorney review completes.
3. **Vitamin C `featured: false`** on category — homepage still surfaces Vit C via dynamic listings; optional future polish to set `featured: true`.
4. **Mg/Vit C `featuredProductIds: []`** — category pages show all products via fallback; optional explicit featured ordering later.
5. **Hub pages `/compare` and `/ingredients` remain noindex** — by design; deep cluster URLs are indexable.

---

## R. Recommended next phase

**Phase 14A — Electrolytes research and LMNT vs Liquid IV guide blueprint** (per Phase 13B memo), unless prioritizing CoQ10 authority path.

Parallel: continue legal human review (Phase 11 packet); do not publish legal pages until sign-off.

---

## S. Recommended commit message

```
Phase 13A: optimize live cluster links and SEO QA
```

---

*Phase 13A complete. Three live clusters internally linked, comparison clarity improved, GSC checklist and Phase 13B memo ready.*
