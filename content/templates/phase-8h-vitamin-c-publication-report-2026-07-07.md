# Vitamin C Phase 8H — Publication Report

**Date:** 2026-07-07  
**Phase:** 8H — Vitamin C cluster publication  
**Git baseline:** `05be78e` (Phase 8G) on `main`, clean working tree before publish

---

## A. Scope and constraints

Phase 8H published the completed Vitamin C supplement cluster in **prelaunch** mode. Publication flipped `status: draft` / `noindex: true` → `status: published` / `noindex: false` on 14 approved cluster YAML files only.

**Honored constraints:**

| Constraint | Status |
|------------|--------|
| No Vitamin C Amazon affiliate links | **Pass** |
| No Vitamin C Amazon ASINs | **Pass** |
| No Vitamin C `affiliate.enabled: true` | **Pass** (all five products `enabled: false`) |
| No Amazon images, reviews, Q&A, ratings, or live prices | **Pass** |
| `SITE_MODE` remains `prelaunch` | **Pass** |
| Ads disabled (`ads.enabled: false`, `loadScripts: false`) | **Pass** |
| Legal pages remain draft/noindex (`DRAFT_LEGAL_PATHS`) | **Pass** |
| Creatine/Magnesium facts, prices, scores, testing, affiliate mappings unchanged | **Pass** |
| Klean Athlete Klean Magnesium affiliate held back (`affiliate.enabled: false`) | **Pass** |
| Product images remain placeholders | **Pass** |
| Phase 8G caveats preserved | **Pass** |

---

## B. Files changed

| Path | Change |
|------|--------|
| `content/categories/vitamin-c.yaml` | Published; category copy updated to present-tense publication language |
| `content/ingredients/vitamin-c.yaml` | Published |
| `content/products/vitamin-c/now-foods-vitamin-c-1000-veg-capsules.yaml` | Published; SEO description de-draft |
| `content/products/vitamin-c/nutricost-buffered-vitamin-c-120.yaml` | Published; SEO description de-draft |
| `content/products/vitamin-c/livon-lypo-spheric-vitamin-c.yaml` | Published; SEO description de-draft |
| `content/products/vitamin-c/nutricost-vitamin-c-powder.yaml` | Published; SEO description de-draft |
| `content/products/vitamin-c/nature-made-vitamin-c-1000-mg-tablets.yaml` | Published; SEO description de-draft |
| `content/guides/what-is-vitamin-c.yaml` | Published |
| `content/guides/how-to-choose-a-vitamin-c-supplement.yaml` | Published; risky-term rephrase |
| `content/guides/vitamin-c-dosage-guide.yaml` | Published |
| `content/guides/vitamin-c-side-effects-and-safety.yaml` | Published |
| `content/guides/liposomal-vitamin-c-vs-regular-vitamin-c.yaml` | Published; draft copy + risky-term rephrase |
| `content/guides/buffered-vitamin-c-vs-ascorbic-acid.yaml` | Published; draft copy + risky-term rephrase |
| `content/comparisons/vitamin-c-supplements-compared.yaml` | Published; subtitle de-draft; `productIds` reordered to score order |

**Created:**

| Path | Purpose |
|------|---------|
| `content/templates/phase-8h-vitamin-c-publication-report-2026-07-07.md` | This report |

**Intentionally not changed:**

| Path | Reason |
|------|--------|
| `content/brands/livon-laboratories.yaml` | Draft brand page safely exposes published LivOn product via `getBrandPageProducts()`; brand hub index (`/brands`) lists only indexable brands — see §G |
| `config/site.ts`, `config/monetization.ts`, `lib/seo/indexing.ts` | Out of scope |
| Creatine/Magnesium YAML | Out of scope |
| Hub marketing copy on `app/page.tsx`, `app/supplements/page.tsx`, etc. | Out of scope — dynamic listings already include Vitamin C via `getIndexable*` loaders |

---

## C. Published category/ingredient

| Entity | URL | `status` | `noindex` |
|--------|-----|----------|-----------|
| Vitamin C category | `/supplements/vitamin-c` | `published` | `false` |
| Vitamin C ingredient | `/ingredients/vitamin-c` | `published` | `false` |

Category copy updated from draft shell language to published hub language (present tense, cluster scope note, evaluation summary).

---

## D. Published products

| Product | Score | Testing | URL | Affiliate |
|---------|------:|---------|-----|-----------|
| Nutricost Vitamin C Powder (1 lb) | 87 | claimed | `/supplements/vitamin-c/products/nutricost-vitamin-c-powder` | `enabled: false` |
| NOW Foods Vitamin C-1000 Veg Capsules | 79 | unknown | `/supplements/vitamin-c/products/now-foods-vitamin-c-1000-veg-capsules` | `enabled: false` |
| Nature Made Extra Strength Vitamin C 1000 mg Tablets | 77 | claimed | `/supplements/vitamin-c/products/nature-made-vitamin-c-1000-mg-tablets` | `enabled: false` |
| Nutricost Buffered Vitamin C (120 caps) | 77 | claimed | `/supplements/vitamin-c/products/nutricost-buffered-vitamin-c-120` | `enabled: false` |
| LivOn Lypo-Spheric Vitamin C (30 packets) | 72 | unknown | `/supplements/vitamin-c/products/livon-lypo-spheric-vitamin-c` | `enabled: false` |

Prices unchanged from Phase 8G snapshot (2026-07-07 manual check).

---

## E. Published guides

| Guide | URL |
|-------|-----|
| What is vitamin C? | `/guides/what-is-vitamin-c` |
| How to choose a vitamin C supplement | `/guides/how-to-choose-a-vitamin-c-supplement` |
| Vitamin C dosage guide | `/guides/vitamin-c-dosage-guide` |
| Vitamin C side effects and safety | `/guides/vitamin-c-side-effects-and-safety` |
| Liposomal vitamin C vs regular vitamin C | `/guides/liposomal-vitamin-c-vs-regular-vitamin-c` |
| Buffered vitamin C vs ascorbic acid | `/guides/buffered-vitamin-c-vs-ascorbic-acid` |

---

## F. Published comparison

| Entity | URL | Default sort | Score order |
|--------|-----|--------------|-------------|
| Vitamin C Supplements Compared | `/supplements/vitamin-c/compare` | `overallScore` | Powder 87 → NOW 79 → Nature Made 77 → Nutricost Buffered 77 → LivOn 72 |

Nature Made / Nutricost Buffered tie at 77 — acceptable per Phase 8G rubric; table sorts by overall score with stable tie handling.

---

## G. Visibility/indexability QA

Loader verification (`getIndexable*`):

| Entity type | Vitamin C count | Indexable |
|-------------|----------------:|-----------|
| Categories | 1 | Yes |
| Ingredients | 1 | Yes |
| Products | 5 | Yes |
| Guides | 6 | Yes |
| Comparisons | 1 | Yes |
| Brands (LivOn) | 0 | No — remains draft/noindex |

**LivOn brand behavior:** `/brands/livon-laboratories` is statically generated (active brand) but serves `noindex` with draft banner. Published LivOn product appears on that draft brand page via `getBrandPageProducts()`. LivOn does **not** appear on `/brands` index (`getIndexableBrands()` only). Publishing the LivOn brand page is optional follow-up — not required for product/category indexability.

**No draft Vitamin C cluster content exposed** as indexable. Other draft shells (multivitamins, omega-3, demo entities, LivOn brand) remain noindex.

---

## H. Sitemap/search/hub QA

| Surface | Vitamin C visibility |
|---------|-------------------|
| `/sitemap.xml` | Category, ingredient, 5 products, 6 guides, comparison included via `getIndexable*` |
| Site search index (`lib/seo/searchIndex.ts`) | All 14 published entities included |
| `/supplements` | Vitamin C category card via `getIndexableCategories()` |
| `/ingredients/vitamin-c` | Direct indexable route (ingredients hub `/ingredients` remains noindex per `NOINDEX_STATIC_PATHS`) |
| `/guides` | Six Vitamin C guides under Vitamin C section |
| `/compare` | Comparison listed (compare hub `/compare` remains noindex per policy) |
| `/brands/now-foods`, `/brands/nutricost`, `/brands/nature-made` | Published Vitamin C products appear on existing published brand pages |
| `/brands/livon-laboratories` | Accessible but noindex; not on brands index |

**Build output:** Next.js SSG includes `/supplements/vitamin-c`, `/supplements/vitamin-c/compare`, `/ingredients/vitamin-c`, and all five product routes.

---

## I. Claim-risk QA

Pre-flip Phase 8G caveats confirmed in draft content. Post-flip risky-term lint required three guide rephrases (published content blocks literal risky terms even in negation):

| File | Fix |
|------|-----|
| `buffered-vitamin-c-vs-ascorbic-acid.yaml` | Rephrased `prevents` / `safe for everyone` avoidance bullets |
| `how-to-choose-a-vitamin-c-supplement.yaml` | `doctor recommended` → `physician endorsements` |
| `liposomal-vitamin-c-vs-regular-vitamin-c.yaml` | `best absorbed or best overall` → `superior for absorption or as a category-wide winner` |

**Final lint:** `Risky-term lint: 0 error(s), 137 warning(s)` (warnings only in templates/draft shells).

No disease-treatment, demographic-winner, or ranking-overreach language introduced. Regulatory disclaimers (`FDA not approved to treat disease`) retained in safety/what-is guides.

---

## J. Caveats preserved

| Product | Caveat |
|---------|--------|
| **Nutricost Buffered** | Official SFP confirms sodium/calcium/magnesium ascorbates; 1,000 mg per 2-capsule serving; 95 mg Na / 30 mg Ca / 25 mg Mg; testing `claimed`; no buffered/gentle/absorption superiority endorsed |
| **Nature Made** | Testing `claimed` (Target USP badge; not in USP database); retailer-sourced label caveat; no independent USP verification asserted |
| **LivOn** | Official brand SFP primary; testing `unknown`; `claimRiskLevel: medium`; no absorption superiority endorsed |
| **Nutricost Powder** | Value score is label/value context only; testing `claimed` unless public COA found |
| **NOW** | Testing `unknown`; bioflavonoid/rutin add-ons noted |

---

## K. Confirmation — no Vitamin C Amazon/affiliate links

All five Vitamin C products: `affiliate.enabled: false`. No Amazon retailer IDs, ASIN fields, or Amazon URLs in Vitamin C product YAML.

---

## L. Confirmation — no Amazon ASINs/images/reviews/Q&A/ratings/live prices

No Amazon ASINs, Amazon product images, star ratings, Q&A, or live Amazon prices added. Placeholder images only (`/images/products/placeholder.svg`). Manual dated prices preserved (2026-07-07).

---

## M. Confirmation — Creatine/Magnesium data and affiliate mappings unchanged

Creatine: 5 products with `affiliate.enabled: true` (unchanged).  
Magnesium: 4 products with `affiliate.enabled: true`; Klean Magnesium `enabled: false` (unchanged).

No edits to Creatine or Magnesium YAML in this phase.

---

## N. Confirmation — Klean Magnesium held back

`content/products/magnesium/klean-athlete-klean-magnesium.yaml` — `affiliate.enabled: false` (UPC mismatch precedent unchanged).

---

## O. Confirmation — SITE_MODE prelaunch, ads disabled, legal pages draft/noindex

| Setting | Value |
|---------|-------|
| `SITE_MODE` | `prelaunch` (default in `config/site.ts`) |
| `monetizationConfig.ads.enabled` | `false` |
| `monetizationConfig.ads.loadScripts` | `false` |
| `DRAFT_LEGAL_PATHS` | Unchanged — privacy, terms, medical disclaimer, affiliate disclosure, advertising policy |
| Contact email | `help@suppcheckr.com` |

---

## P. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — typecheck, eslint, 40 tests, content validation 0 errors, risky-term lint 0 errors |
| `npm run build` | **Pass** — compiled successfully; Vitamin C routes in SSG output |

---

## Q. Post-deploy spot-check URLs

After deploy, verify `robots: index, follow` and page render:

- https://www.suppcheckr.com/supplements/vitamin-c
- https://www.suppcheckr.com/ingredients/vitamin-c
- https://www.suppcheckr.com/supplements/vitamin-c/compare
- https://www.suppcheckr.com/guides/what-is-vitamin-c
- https://www.suppcheckr.com/guides/how-to-choose-a-vitamin-c-supplement
- https://www.suppcheckr.com/supplements/vitamin-c/products/nutricost-vitamin-c-powder
- https://www.suppcheckr.com/supplements/vitamin-c/products/livon-lypo-spheric-vitamin-c
- https://www.suppcheckr.com/brands/livon-laboratories (expect noindex + draft banner)
- https://www.suppcheckr.com/sitemap.xml (Vitamin C URLs present)

**GSC:** Request indexing for category hub, comparison, and top guides after deploy.

---

## R. Recommended next phase

**Phase 8I — Vitamin C hub/marketing copy refresh (optional):** Update static marketing copy on homepage, `/supplements`, `/brands`, `/compare`, `/ingredients`, and `/methodology` to mention Vitamin C alongside Creatine and Magnesium (dynamic listings already work).

**Phase 9 — Vitamin C Amazon affiliate mapping (separate explicit approval):** Exact ASIN/UPC match per SKU; enable `affiliate.enabled: true` only after QA; no Amazon images/reviews/live prices.

**Optional:** Publish `content/brands/livon-laboratories.yaml` for indexable brand hub; replace placeholder product images.

---

## S. Recommended commit message

```
Phase 8H: publish Vitamin C cluster
```

---

*Phase 8H complete. Vitamin C cluster is published and indexable. No affiliate mapping activated.*
