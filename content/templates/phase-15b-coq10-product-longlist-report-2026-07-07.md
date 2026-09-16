# Phase 15B — CoQ10 Product Longlist Report

> **Later refresh (do not treat this July file as current):** keyword, SKU, and shortlist updates from 2026-09-16 are in [`phase-15b-coq10-keyword-refresh-2026-09-16.md`](./phase-15b-coq10-keyword-refresh-2026-09-16.md), [`coq10-product-longlist-research-2026-09-16.md`](./coq10-product-longlist-research-2026-09-16.md), and [`phase-15b-coq10-shortlist-decision-2026-09-16.md`](./phase-15b-coq10-shortlist-decision-2026-09-16.md). This document is preserved as a historical record.

**Date:** 2026-07-07 (executed 2026-07-15)  
**Phase:** 15B — CoQ10 source collection + product longlist research  
**Git baseline:** `5742b3d` (Phase 15A) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)  
**Recommended commit message:** `Phase 15B: research CoQ10 product longlist`

---

## A. Scope and constraints

Phase 15B executed under all project guardrails:

| Constraint | Status |
|------------|--------|
| Research/planning only — no product reviews, guides, comparison, or publication | **Done** |
| No CoQ10 Amazon affiliate links or ASIN mappings | **Done** |
| No product facts, prices, scores, testing statuses changed (published clusters) | **Confirmed** |
| No affiliate mapping changes | **Confirmed** |
| Klean Athlete Klean Magnesium held back (`affiliate.enabled: false`) | **Confirmed** |
| Nuun Sport held back (`affiliate.enabled: false`) | **Confirmed** |
| `SITE_MODE` remains prelaunch | **Confirmed** |
| Ads remain disabled (`ads.enabled: false`, `loadScripts: false`) | **Confirmed** |
| Legal pages remain draft/noindex | **Confirmed** (`lib/seo/indexing.ts` `DRAFT_LEGAL_PATHS`) |
| No CoQ10 content published/indexable | **Confirmed** |
| Contact email `help@suppcheckr.com` | **Confirmed** (`config/site.ts`) |
| Human supplements only | **Confirmed** |

**Pre-flight verification:**

| Artifact | Present |
|----------|---------|
| Phase 15A CoQ10 templates + scoring profile/rubric + draft shells | Yes |
| Phase 14J affiliate confirmation report | Yes |
| Published Creatine, Magnesium, Vitamin C, Electrolytes clusters | Yes |
| 18 affiliate-enabled products | Yes |
| Klean Magnesium + Nuun held back | Yes |
| Working tree clean at start | Yes |

---

## B. Files created/changed

### Created

| File | Purpose |
|------|---------|
| `content/templates/coq10-product-longlist-research-2026-07-07.md` | 22-candidate longlist, shortlist, bucket coverage, testing/price/form notes |
| `content/templates/ubiquinol-vs-ubiquinone-source-notes-2026-07-07.md` | Form comparison source notes (not guide YAML) |
| `content/templates/phase-15b-coq10-product-longlist-report-2026-07-07.md` | This report |

### Changed

| File | Change |
|------|--------|
| `content/categories/coq10.yaml` | Phase 15B `updateLog` entry only — still `draft` / `noindex: true`; no product/guide links |
| `content/ingredients/coq10.yaml` | Phase 15B `updateLog` entry only — still `draft` / `noindex: true`; no product/guide links |

### Unchanged (intentionally)

| Area | Reason |
|------|--------|
| All published cluster product YAML | Phase 15B scope |
| All affiliate mappings (18 enabled) | Phase 15B scope |
| Legal pages, `config/site.ts`, `config/monetization.ts` | No monetization/site-mode changes |
| `content/products/coq10/` | Does not exist — no product YAML |

---

## C. Number of products screened

**22** CoQ10 product candidates researched across 9 bucket types.

---

## D. Product bucket coverage

| Bucket | Shortlist coverage |
|--------|-------------------|
| Ubiquinol premium softgel | Doctor's Best Ubiquinol Kaneka |
| Ubiquinone 100 mg | Doctor's Best High Absorption 100 mg |
| 200 mg+ dose | Doctor's Best 200 mg; Kirkland 300 mg |
| Value / budget | Nutricost 200 mg; Kirkland (also USP) |
| USP / transparency | Kirkland (product USP); Doctor's Best (USP ingredient claims) |
| Vegan format (longlist) | Sports Research Plantgel; NOW 200 mg veg caps |
| Combo defer | Garden of Life RAW, LE 200+shilajit — all deferred |

---

## E. Recommended shortlist

**Pending user approval before Phase 15C YAML.**

| # | Product | Slot |
|---|---------|------|
| 1 | Doctor's Best Ubiquinol with Kaneka 100 mg, 60 softgels | Ubiquinol premium |
| 2 | Doctor's Best High Absorption CoQ10 + BioPerine 100 mg, 120 softgels | Ubiquinone 100 mg |
| 3 | Doctor's Best High Absorption CoQ10 + BioPerine 200 mg, 60 veggie softgels | 200 mg+ |
| 4 | Nutricost CoQ10 200 mg, 60 capsules | Value |
| 5 | Kirkland Signature CoQ10 300 mg, 100 softgels | USP Verified / high-dose mainstream |

**Alternates:** Sports Research 100 mg Plantgel (vegan), NOW CoQ10 100 mg softgels, Life Extension Super Ubiquinol 100 mg, Pure Encapsulations 120 mg.

---

## F. Rejected/deferred products summary

| Disposition | Count | Examples |
|-------------|-------|----------|
| **Deferred** | 7 | Qunol Ultra, Nature Made 200 mg (discontinued), Solgar Ubiquinol, BulkSupplements powder, Garden of Life RAW, LE 200+shilajit, Qunol Mega (longlist only) |
| **Permanent reject** | — | Pet/animal CoQ10 (not screened) |
| **Longlist** | 10 | NOW, Jarrow, Life Extension, Sports Research, Thorne, Pure Encapsulations, Nature's Bounty, etc. |

---

## G. Testing/certification findings

- **Kirkland 300 mg:** USP Verified **product** — strongest independent mark in shortlist.
- **Doctor's Best 100/200 mg:** USP Verified **fermented CoQ10 ingredient** — document precisely in YAML.
- **Thorne CoQ10:** **NOT** NSF Certified for Sport (NSF database has no CoQ10 SKU).
- **Sports Research:** Third-party tested claimed; “USP Grade” ≠ USP Verified product.
- **Rule:** Facility GMP certs ≠ product-level verification.

---

## H. Price-per-serving and price-per-100-mg findings

| Product | $/serving | $/100 mg CoQ10 |
|---------|-----------|----------------|
| Nutricost 200 mg | $0.27 | **$0.13** |
| Kirkland 300 mg (est.) | $0.37 | **$0.12** |
| DB Ubiquinone 100 mg | $0.19 | $0.19 |
| DB Ubiquinone 200 mg | $0.34 | $0.17 |
| DB Ubiquinol 100 mg | $0.57 | $0.57 |

All prices manual dated **2026-07-15**; Kirkland warehouse price must re-lock.

---

## I. CoQ10 form/dose/profile findings

- Shortlist spans **ubiquinol** (DB Kaneka) and **ubiquinone** (DB, Nutricost, Kirkland).
- Dose tiers: **100 mg**, **200 mg**, **300 mg** across five SKUs.
- Oil-based softgels vs dry veg capsules represented (Nutricost dry cap noted).
- Soy allergen common in soybean-oil softgels (Kirkland, DB 100 mg); DB Ubiquinol and 200 mg veggie labeled soy-free.
- BioPerine appears on two Doctor's Best ubiquinone SKUs — disclosed on label.

---

## J. Ubiquinol vs ubiquinone notes created

**File:** `content/templates/ubiquinol-vs-ubiquinone-source-notes-2026-07-07.md`

- NIH/NCCIH authoritative framing
- Planned examples: DB Ubiquinol + DB Ubiquinone 100 mg after YAML lock
- Absorption claim caution; price-per-100-mg comparison
- Publication gate documented

---

## K. Source gaps

1. Qunol.com rate-limited — retailer mirrors only.
2. Costco Kirkland online price unavailable.
3. NOW 200 mg — no US softgel SKU (veg capsule only).
4. Nature Made 200 mg discontinued on brand site.
5. Nutricost — retailer label only (no official brand PDP).
6. USP Verified vs USP Grade distinction must be editorially precise.

---

## L. Draft shell status

| Shell | Status |
|-------|--------|
| `content/categories/coq10.yaml` | `draft`, `noindex: true` — Phase 15B updateLog only |
| `content/ingredients/coq10.yaml` | `draft`, `noindex: true` — Phase 15B updateLog only |

No `featuredProductIds`, `relatedGuideSlugs`, or product references added.

---

## M–P. Confirmations

| Item | Status |
|------|--------|
| No CoQ10 product YAML | **Confirmed** |
| No CoQ10 guide/comparison YAML | **Confirmed** |
| No CoQ10 content published/indexable | **Confirmed** |
| No Amazon affiliate links/ASINs | **Confirmed** |

---

## Q–T. Published cluster / held product confirmations

| Item | Status |
|------|--------|
| Creatine/Magnesium/Vitamin C/Electrolytes unchanged | **Confirmed** |
| Affiliate mappings unchanged (18) | **Confirmed** |
| Klean Magnesium held | **Confirmed** |
| Nuun held | **Confirmed** |

---

## U–V. Site policy confirmations

| Item | Status |
|------|--------|
| Legal pages draft/noindex | **Confirmed** |
| Ads disabled / SITE_MODE prelaunch | **Confirmed** |
| Contact `help@suppcheckr.com` | **Confirmed** |

---

## W. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | See Cursor report |
| `npm run build` | See Cursor report (YAML shells updated) |

---

## X. Recommended next phase

**Phase 15C — CoQ10 draft product YAML** (after user approves shortlist)

1. Lock five shortlist SKUs with official label citations and dated manual prices
2. Create `content/products/coq10/*.yaml` as **draft/noindex**
3. Re-check Kirkland warehouse price and Nutricost retailer label
4. No publication, no Amazon ASINs, no scoring until source lock complete

---

## Y. Recommended commit message

```
Phase 15B: research CoQ10 product longlist
```

---

## Warnings/risks

1. **Three Doctor's Best SKUs** on shortlist — strong source quality but limited brand diversity; alternates documented.
2. **Heart/statin marketing** on several longlist brands — strict claim-language guide required in Phase 15C copy.
3. **Kirkland price** warehouse-variable — must confirm before YAML lock.
4. **USP terminology** — ingredient vs product verification must not be conflated.
5. **Ubiquinol guide** depends on locked ubiquinol + ubiquinone product YAML before draft guide phase.

---

*Phase 15B complete. 22 candidates screened; 5-product shortlist recommended; no product data or affiliate changes.*
