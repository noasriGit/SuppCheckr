# Phase 8D — Vitamin C Product Longlist Research

**Date:** 2026-07-07  
**Phase:** 8D — Vitamin C product longlist research and shortlist recommendation  
**Git baseline:** `390174f` (Phase 8C) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)  
**Recommended commit message:** `Phase 8D: research Vitamin C product longlist`

---

## A. Scope and constraints

Phase 8D executed under all project guardrails:

| Constraint | Status |
|------------|--------|
| Research/planning only — no product YAML | **Done** |
| No Vitamin C guides or comparison YAML | **Done** |
| No Vitamin C content published | **Done** |
| No Amazon affiliate links, ASIN mapping, images, reviews, Q&A, ratings, or live prices | **Done** |
| No Creatine/Magnesium product facts, prices, scores, testing, or affiliate edits | **Confirmed** |
| Klean Athlete Klean Magnesium held back | **Confirmed** |
| `SITE_MODE` prelaunch; ads disabled; legal pages draft/noindex | **Confirmed** |
| Human supplements only | **Confirmed** |
| Contact email `help@suppcheckr.com` | **Confirmed** (`config/site.ts`) |

**Pre-flight verification:**

| Artifact | Present |
|----------|---------|
| `content/templates/phase-8c-vitamin-c-source-and-rubric-report-2026-07-07.md` | Yes |
| `content/templates/vitamin-c-source-inventory-2026-07-07.md` | Yes |
| `content/templates/vitamin-c-claim-language-guide.md` | Yes |
| `content/templates/vitamin-c-product-research-checklist.md` | Yes |
| `content/scoring/profiles/vitamin-c.yaml` | Yes |
| `content/scoring/rubrics/vitamin-c.yaml` | Yes |
| `content/categories/vitamin-c.yaml` | Yes (`draft` / `noindex`) |
| `content/ingredients/vitamin-c.yaml` | Yes (`draft` / `noindex`) |
| Working tree clean at phase start | Yes |

---

## B. Sources reviewed

| Source type | Examples used |
|-------------|---------------|
| Official brand product pages + SFP | NOW Foods, LivOn Labs, Nutricost, Nature Made, American Health, Solgar |
| Official label PDF | Emergen-C Immune+ (rejection evidence) |
| Certification databases | NSF Certified for Sport (Klean-C listing); USP Verified claims (Nature Made via Target) |
| Reliable retailer labels (fallback) | Target, Vitacost, Swanson, iHerb mirrors — only where brand SFP unavailable or discontinued |
| Phase 8C planning docs | Source inventory, claim-language guide, research checklist, scoring profile/rubric |

**Not used:** Amazon reviews, Q&A, star ratings, product images, or live Amazon prices.

---

## C. Number of products screened

| Metric | Count |
|--------|-------|
| **Total candidates screened** | **20** |
| Passed to longlist | 15 |
| Shortlist recommended | 5 |
| Rejected | 3 |
| Deferred | 4 |

Full table: [`vitamin-c-product-longlist-research-2026-07-07.md`](./vitamin-c-product-longlist-research-2026-07-07.md) §D.

---

## D. Bucket coverage

| Bucket | Screened | Shortlist |
|--------|----------|-----------|
| Basic ascorbic acid capsule/tablet | 6 | NOW C-1000 Veg Capsules |
| Buffered / mineral ascorbate | 4 | NOW Buffered C-1000 Complex |
| Liposomal | 2 | LivOn Lypo-Spheric Vitamin C |
| Powder | 3 | Nutricost Vitamin C Powder |
| Premium / third-party tested | 4 | Nature Made 1000 mg USP Verified |
| Budget / common | 5 | Nutricost powder (+ longlist capsule backups) |

All six planned buckets represented in the recommended shortlist or longlist backups.

---

## E. Recommended shortlist

| # | Product | Brand | Bucket |
|---|---------|-------|--------|
| 1 | Vitamin C-1000 Veg Capsules (100 ct) | NOW Foods | Basic ascorbic acid |
| 2 | Vitamin C-1000 Complex, Buffered Tablets (90 ct) | NOW Foods | Buffered calcium ascorbate |
| 3 | Lypo-Spheric® Vitamin C (30 packets) | LivOn Laboratories | Liposomal |
| 4 | Vitamin C Powder (1 lb) | Nutricost | Powder / budget value |
| 5 | Extra Strength Vitamin C 1000 mg Tablets (100 ct, USP Verified) | Nature Made | Premium / USP verified |

**User approval required** before Phase 8E product YAML drafting.

---

## F. Rejected / deferred products summary

| Disposition | Products | Primary reasons |
|-------------|----------|-----------------|
| **Rejected** | Nutricost Vitamin C with Zinc; Emergen-C Immune+; Nutricost Acerola Cherry Powder | Immune multi-active stack; sugar + proprietary immune complex; whole-food powder vs mg clarity |
| **Deferred** | Nutricost Liposomal; Klean-C; American Health Ester-C; (gummies not screened) | Liposomal label/marketing risk; chewable NSF product wrong format; Ester-C high absorption/immune claims |

---

## G. Testing / certification findings

| Finding | Detail |
|---------|--------|
| **USP Verified** | Nature Made 1000 mg and 500 mg tablets — USP claim on Target listing; confirm USP database match at YAML lock |
| **NSF Certified for Sport** | Klean-C verified at `nsfsport.com` listing id 1273121 — deferred from shortlist (chewable, 525 mg, athlete immune copy) |
| **NSF Contents Certified** | Thorne Vitamin C 1000 mg (Target) — not equivalent to NSF Sport or USP Verified; score as `claimed` unless certificate URL captured |
| **Claimed only** | Nutricost “third-party tested” line — no public COA/program listing matched |
| **Unknown** | NOW, LivOn, Solgar — GMP/quality seals only |

---

## H. Price / value findings

| Tier | Example | ~$/500 mg vitamin C (2026-07-07) |
|------|---------|----------------------------------|
| Budget powder | Nutricost Vitamin C Powder 1 lb | ~$0.015 |
| Budget capsules | Nutricost Rose Hips 1000 mg 240 ct | ~$0.033 |
| Mid retail capsules | NOW C-1000; Nature Made USP 1000 mg | ~$0.075–$0.076 |
| Buffered tablet | NOW Buffered C-1000 | ~$0.11 |
| Liposomal | LivOn Lypo-Spheric | ~$0.72 |

Normalization uses label-stated vitamin C mg only. Liposomal premium is editorial context, not automatic score penalty.

---

## I. Claim-risk findings

- **Shortlist manageable:** NOW and Nature Made use standard structure-function immune/collagen copy — mirror conservatively.
- **LivOn elevated:** Absorption/delivery marketing — score label clarity; do not endorse superiority.
- **Rejected products** carried disease-adjacent immune positioning (Emergen-C) or formula complexity (zinc stack, acerola powder weight).
- **Ester-C deferred:** Trademarked “24-hour immune support” and retention claims exceed V1 claim-risk appetite despite clear mg line.

---

## J. Source gaps

1. Nature Made brand site lists 1000 mg product **discontinued** while Target sells USP Verified SKU — active formulation confirmation needed.
2. Pure Encapsulations official PDP 404 at research time.
3. Kirkland/Costco official PDP not accessible — retailer label mirrors only.
4. Nutricost Buffered — mineral ascorbate type to confirm from SFP image in 8E.
5. USP database SKU match not yet captured for Nature Made.

---

## K. Confirmation — no product YAML created

| Path pattern | Exists |
|--------------|--------|
| `content/products/vitamin-c/*.yaml` | **No** |

---

## L. Confirmation — no Vitamin C content published

Category and ingredient shells remain `status: draft`, `noindex: true`. No guides, comparisons, or product pages added.

---

## M. Confirmation — no Amazon affiliate links / images / reviews / Q&A / ratings / live prices added

No affiliate config, ASIN fields, or Amazon-sourced evidence in this phase.

---

## N. Confirmation — no existing product facts / prices / scores / testing / affiliate mappings changed

No edits to Creatine or Magnesium product YAML, comparisons, or affiliate mappings.

---

## O. Confirmation — Klean Magnesium remains held back

`content/products/magnesium/klean-athlete-klean-magnesium.yaml` — `affiliate.enabled: false` (UPC mismatch deferred). Unchanged.

---

## P. Confirmation — SITE_MODE, ads, legal pages

| Setting | Value |
|---------|-------|
| `SITE_MODE` | `prelaunch` |
| Ads | disabled |
| Legal pages | draft / noindex |
| Contact email | `help@suppcheckr.com` |

---

## Q. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — typecheck, lint, 40 tests, `validate:content` 0 errors / 0 warnings |
| `npm run build` | **Skipped** — template research docs only; no site-affecting code/content |

---

## R. Recommended next phase

**Phase 8E — Vitamin C product YAML drafting (draft/noindex)**

1. Obtain user approval on 5-product shortlist
2. Lock one SKU per product; re-fetch official labels and dated prices
3. Verify USP listing for Nature Made; assign `verified` vs `claimed` testing tiers
4. Draft product YAML under `content/products/vitamin-c/` — all `draft` / `noindex`
5. Defer Amazon ASIN mapping and `affiliate.enabled` until exact UPC/packaging match
6. Optional parallel track: draft foundational Vitamin C guides (`what-is-vitamin-c`, dosage, how-to-choose) as `draft`/`noindex`

---

## S. Recommended commit message

```
Phase 8D: research Vitamin C product longlist
```

---

## Files created/changed

| Action | Path |
|--------|------|
| Created | `content/templates/vitamin-c-product-longlist-research-2026-07-07.md` |
| Created | `content/templates/phase-8d-vitamin-c-product-longlist-report-2026-07-07.md` |

**Not modified:** product YAML, category/ingredient shells, guides, comparisons, affiliate config, ads, legal pages, Creatine/Magnesium content.

---

*Research and planning only. Vitamin C cluster not published in Phase 8D.*
