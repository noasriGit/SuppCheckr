# Phase 14B — Electrolytes Product Longlist Report

**Date:** 2026-07-07 (executed 2026-07-15)  
**Phase:** 14B — Electrolytes source collection + product longlist research  
**Git baseline:** `9944f6c` (Phase 14A) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)  
**Recommended commit message:** `Phase 14B: research Electrolytes product longlist`

---

## A. Scope and constraints

Phase 14B executed under all project guardrails:

| Constraint | Status |
|------------|--------|
| Research/planning only — no product reviews, guides, comparison, or publication | **Done** |
| No Electrolytes Amazon affiliate links or ASIN mappings | **Done** |
| No product facts, prices, scores, testing statuses changed (Creatine/Magnesium/Vitamin C) | **Confirmed** |
| No affiliate mapping changes | **Confirmed** |
| Klean Athlete Klean Magnesium held back (`affiliate.enabled: false`) | **Confirmed** |
| `SITE_MODE` remains prelaunch | **Confirmed** |
| Ads remain disabled (`ads.enabled: false`, `loadScripts: false`) | **Confirmed** |
| Legal pages remain draft/noindex | **Confirmed** (`lib/seo/indexing.ts` `DRAFT_LEGAL_PATHS`) |
| No Electrolytes content published/indexable | **Confirmed** |
| Contact email `help@suppcheckr.com` | **Confirmed** (`config/site.ts`) |
| Human supplements only | **Confirmed** |

**Pre-flight verification:**

| Artifact | Present |
|----------|---------|
| Phase 14A electrolytes templates + scoring profile/rubric | Yes |
| Phase 13A SEO QA report | Yes |
| Published Creatine, Magnesium, Vitamin C clusters | Yes |
| 14 affiliate-enabled products | Yes |
| Klean Magnesium held back | Yes |
| Working tree clean at start | Yes (local `main` behind `origin/main` by 2 commits — unrelated Ahrefs merge) |

---

## B. Files created/changed

### Created

| File | Purpose |
|------|---------|
| `content/templates/electrolytes-product-longlist-research-2026-07-07.md` | 22-candidate longlist, shortlist, bucket coverage, testing/price/profile notes |
| `content/templates/lmnt-vs-liquid-iv-source-notes-2026-07-07.md` | LMNT vs Liquid I.V. official source comparison notes (not guide YAML) |
| `content/templates/phase-14b-electrolytes-product-longlist-report-2026-07-07.md` | This report |

### Changed

| File | Change |
|------|--------|
| `content/ingredients/electrolytes.yaml` | Phase 14B `updateLog` entry only — still `draft` / `noindex: true`; no product/guide links |

### Unchanged (intentionally)

| File | Reason |
|------|--------|
| `content/categories/electrolytes.yaml` | Remains `placeholder` / `noindex: true` — not upgraded |
| All Creatine/Magnesium/Vitamin C product YAML | Phase 14B scope |
| All affiliate mappings | Phase 14B scope |
| Legal pages, `config/site.ts`, `config/monetization.ts` | No monetization/site-mode changes |
| `content/products/electrolytes/` | Does not exist — no product YAML |

---

## C. Number of products screened

**22** electrolyte product candidates researched across 8 bucket types.

**Must-include coverage:**

- LMNT — screened, **shortlisted**
- Liquid I.V. — screened, **shortlisted**

---

## D. Product bucket coverage

See longlist §F. All eight Phase 14B buckets represented in screening:

1. High-sodium sugar-free sticks — LMNT (shortlist), Re-Lyte (longlist)  
2. Sugar-containing mixes — Liquid I.V. (shortlist), Skratch, Gatorade TQ (longlist)  
3. Lower-sodium daily — Ultima (shortlist), Propel, Gatorade Zero (longlist)  
4. Tablets — Nuun Sport (shortlist)  
5. Tub/bulk powders — Thorne, Skratch, Kaged, Trace Minerals  
6. Sports-certified — Thorne NSF Sport (shortlist), Kaged Informed Sport (longlist)  
7. Clean-label — Ultima, LMNT  
8. Mainstream retail — Propel, Gatorade Zero  

ORS/medical-adjacent (DripDrop, Pedialyte Sport, BIOLYTE) screened and **deferred**.

---

## E. Recommended shortlist (5)

| # | Product | Bucket |
|---|---------|--------|
| 1 | LMNT Zero-Sugar Electrolytes (Citrus Salt, 30ct) | High-sodium sugar-free stick |
| 2 | Liquid I.V. Hydration Multiplier Lemon Lime (16ct) | Sugar-containing stick |
| 3 | Nuun Sport Lemon Lime (10 tablets) | Tablet |
| 4 | Ultima Replenisher Lemonade (20 sticks) | Lower-sodium daily |
| 5 | Thorne Catalyte Lemon Lime (30 servings) | NSF Certified for Sport |

Pending user approval before Phase 14C draft YAML.

---

## F. Rejected/deferred products summary

| Disposition | Count | Examples |
|-------------|-------|----------|
| **Rejected** | 1 | Needed Hydration Support (prenatal/wellness positioning) |
| **Permanent reject** | — | Animal/pet electrolytes (policy; not screened) |
| **Deferred** | 9 | DripDrop ORS, Pedialyte Sport, BIOLYTE, Cure, Tailwind Endurance Fuel, Transparent Labs Hydrate, Momentous, Hydrant, Redmond Re-Lyte (overlap defer) |
| **Longlist only** | 7 | Re-Lyte, Skratch, Kaged, Propel, Gatorade Zero, Gatorade TQ, Trace Minerals, Liquid I.V. Sugar-Free |

---

## G. Testing/certification findings

- **Verified:** Thorne Catalyte — NSF Certified for Sport (shortlist)  
- **Verified:** Kaged Hydra-Charge — Informed Sport (longlist)  
- **All other screened products:** `unknown` unless program listing matched in Phase 14B  

No product YAML testing fields changed (no product YAML created).

---

## H. Price-per-serving findings

Dated manual prices (2026-07-15, non-Amazon preferred):

| Shortlist product | $/serving |
|-------------------|-----------|
| Nuun Sport | $0.75 |
| Ultima Replenisher | $1.05 |
| Thorne Catalyte | $1.13 |
| LMNT | $1.50 |
| Liquid I.V. | $1.56 |

Full notes in longlist §H.

---

## I. Electrolyte-profile findings

- **Sodium span:** 55 mg (Ultima) to 1,000 mg (LMNT) among viable candidates  
- **Sugar span:** 0 g (LMNT, Ultima) to 19 g (Skratch) per serving  
- **Magnesium:** Disclosed on LMNT, Ultima, Nuun, Thorne; **not disclosed** on Liquid I.V. US panel  
- **Sweeteners:** Range from unsweetened/stevia to cane sugar + dextrose to sucralose/ace-K mainstream  

Full notes in longlist §I.

---

## J. LMNT vs Liquid IV notes created

**File:** `content/templates/lmnt-vs-liquid-iv-source-notes-2026-07-07.md`

Key label deltas (locked SKUs):

| | LMNT | Liquid I.V. |
|---|------|-------------|
| Sodium | 1,000 mg | 500 mg |
| Potassium | 200 mg | 370 mg |
| Magnesium | 60 mg | Not disclosed |
| Sugar | 0 g | 11 g |
| Calories | 0 | 45 |
| $/serving (2026-07-15) | $1.50 | $1.56 |

---

## K. Source gaps

See longlist §M and LMNT vs Liquid I.V. notes §G. Priority gaps for Phase 14C:

1. Lock official Thorne Catalyte Supplement Facts image from thorne.com  
2. Confirm Liquid I.V. magnesium absent on official US label  
3. Re-fetch Transparent Labs / Momentous / Hydrant official labels or drop  
4. Capture DripDrop official shop label images if ORS slot revisited  

---

## L. Draft shell status

| Shell | Status |
|-------|--------|
| `content/categories/electrolytes.yaml` | Unchanged — `placeholder`, `noindex: true` |
| `content/ingredients/electrolytes.yaml` | `draft`, `noindex: true`; Phase 14B `updateLog` only |
| `content/scoring/profiles/electrolytes.yaml` | Unchanged (Phase 14A) |
| `content/scoring/rubrics/electrolytes.yaml` | Unchanged (Phase 14A) |

---

## M. Confirmation no Electrolytes product YAML created

**Confirmed.** No files under `content/products/electrolytes/`.

---

## N. Confirmation no Electrolytes guide/comparison YAML created

**Confirmed.** No new files under `content/guides/` or comparison YAML for electrolytes.

---

## O. Confirmation no Electrolytes content published/indexable

**Confirmed.** Category placeholder and ingredient draft remain `noindex`.

---

## P. Confirmation no Amazon affiliate links/ASINs added

**Confirmed.**

---

## Q. Confirmation existing Creatine/Magnesium/Vitamin C product data unchanged

**Confirmed.** No edits to published cluster product YAML.

---

## R. Confirmation affiliate mappings unchanged

**Confirmed.** 14 products `affiliate.enabled: true`; Klean Magnesium `false`.

---

## S. Confirmation Klean Magnesium remains held back

**Confirmed.** `content/products/magnesium/klean-athlete-klean-magnesium.yaml` — `affiliate.enabled: false`.

---

## T. Confirmation legal pages remain draft/noindex

**Confirmed.** `DRAFT_LEGAL_PATHS` unchanged; `shouldShowLegalReviewBanners()` active in prelaunch.

---

## U. Confirmation ads disabled and SITE_MODE prelaunch

**Confirmed.** `config/monetization.ts` — `ads.enabled: false`, `loadScripts: false`; `siteConfig.siteMode` defaults `prelaunch`.

---

## V. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** |
| `npm run build` | **Pass** — compiled successfully |

---

## W. Recommended next phase

**Phase 14C — Electrolytes draft product YAML + source-gap QA**

1. User approval of 5-product shortlist  
2. Draft product YAML for LMNT + Liquid I.V. first (`draft` / `noindex`)  
3. Draft remaining shortlist products  
4. Lock official label citations (`label-*`, `retailer-*`, `editorial-price-per-serving-*`)  
5. Source-gap QA on magnesium disclosure, Thorne PDP, flavor SKU locks  
6. **Do not publish** cluster without explicit approval  
7. LMNT vs Liquid I.V. guide YAML only after both product facts locked  

**Phase 14D (later):** publication review, Amazon exact-match mapping, GSC submission.

---

## X. Recommended commit message

```
Phase 14B: research Electrolytes product longlist
```

---

*Research and planning phase only. No Electrolytes cluster published in Phase 14B.*
