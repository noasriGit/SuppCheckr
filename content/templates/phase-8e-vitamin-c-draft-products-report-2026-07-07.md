# Phase 8E — Vitamin C Shortlist Lock + Draft Product YAML

**Date:** 2026-07-07  
**Phase:** 8E — Vitamin C shortlist lock and draft/noindex product YAML  
**Git baseline:** `a8978d6` (Phase 8D) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)  
**Recommended commit message:** `Phase 8E: draft Vitamin C product reviews`

---

## A. Scope and constraints

Phase 8E executed under all project guardrails:

| Constraint | Status |
|------------|--------|
| Lock five Vitamin C SKUs and create draft product YAML only | **Done** |
| Vitamin C remains unpublished (`draft` / `noindex`) | **Done** |
| No Amazon affiliate links, ASINs, or images | **Done** |
| No Vitamin C guides or comparison YAML | **Done** |
| No Creatine/Magnesium product facts, prices, scores, testing, or affiliate edits | **Confirmed** |
| Klean Athlete Klean Magnesium held back | **Confirmed** |
| `SITE_MODE` prelaunch; ads disabled; legal pages draft/noindex | **Confirmed** |
| Contact email `help@suppcheckr.com` | **Confirmed** (`config/site.ts`) |

**Pre-flight verification:**

| Artifact | Present |
|----------|---------|
| Phase 8C report | Yes |
| Phase 8D report + longlist research | Yes |
| Vitamin C source inventory, claim guide, checklist, scoring profile/rubric | Yes |
| Draft/noindex category/ingredient shells | Yes |
| Working tree clean at phase start | Yes |

---

## B. Shortlist decision — NOW Buffered replaced

**Decision:** **Replaced** NOW Foods Vitamin C-1000 Complex Buffered Tablets (90 ct) with **Nutricost Buffered Vitamin C (120 caps)** for the buffered/mineral ascorbate bucket.

**Why:**

| Factor | NOW Buffered (deferred from final five) | Nutricost Buffered (selected) |
|--------|----------------------------------------|------------------------------|
| Brand diversity | Would create two NOW products in the five-SKU set | Reduces duplicate NOW; Nutricost already represented by powder in a different bucket |
| Label source | Strong official brand SFP (calcium ascorbate explicit) | Official Nutricost SFP image on brand page; 1,000 mg per 2-capsule serving |
| Serving | 1 tablet (more practical) | 2 capsules (moderate friction) |
| Price (2026-07-07) | $19.99 / 90 ≈ **$0.11/500 mg** | $14.97 / 60 ≈ **$0.125/500 mg** |
| Testing | unknown | claimed (no public COA captured) |
| Claim risk | “Bioavailable,” immune copy | Immune copy; buffered “gentle” framing avoided in SuppCheckr copy |

Nutricost Buffered was Phase 8D’s documented backup for the buffered slot. It is not weaker overall — it trades one-tablet convenience and slightly better $/mg for **brand diversity**, **lower bottle price**, and **claimed testing** at the marketing tier. NOW Buffered remains documented in the longlist as a valid alternate if editorial redirects the slot later.

**Alternates considered and not selected:**

- **American Health Ester-C** — deferred (high claim-risk: 24-hour immune, retention/absorption)
- **Klean-C** — deferred (chewable, 525 mg, athlete immune copy despite NSF Sport)
- **NOW Buffered** — strong label but duplicate NOW brand in final five

---

## C. Final five products

| # | Bucket | Product | Brand | Slug | Locked SKU notes |
|---|--------|---------|-------|------|------------------|
| 1 | Basic ascorbic acid | Vitamin C-1000 Veg Capsules (100 ct) | NOW Foods | `now-foods-vitamin-c-1000-veg-capsules` | SKU 0690; UPC 733739006905 |
| 2 | Buffered / mineral ascorbate | Buffered Vitamin C (120 caps) | Nutricost | `nutricost-buffered-vitamin-c-120` | 60 servings × 2 caps; 1,000 mg/serving |
| 3 | Liposomal | Lypo-Spheric® Vitamin C (30 packets) | LivOn Laboratories | `livon-lypo-spheric-vitamin-c` | UPC 858514001002; 5.7 mL/packet |
| 4 | Powder / budget value | Vitamin C Powder (1 lb) | Nutricost | `nutricost-vitamin-c-powder` | 1 lb / ~454 g; 1 g scoop |
| 5 | Premium / USP verified | Extra Strength Vitamin C 1000 mg Tablets (100 ct) | Nature Made | `nature-made-vitamin-c-1000-mg-tablets` | UPC 031604014896; USP Verified (Target) |

---

## D. Product source/label summary

| Product | Official URL | Label source | Vit C / serving | Form | Servings |
|---------|--------------|--------------|-----------------|------|----------|
| NOW C-1000 Veg | [nowfoods.com](https://www.nowfoods.com/products/supplements/vitamin-c-1000-veg-capsules) | Official brand SFP | 1,000 mg | Ascorbic acid | 100 |
| Nutricost Buffered | [nutricost.com](https://nutricost.com/products/nutricost-buffered-vitamin-c) | Official SFP image | 1,000 mg | Buffered mineral ascorbate | 60 (2 caps) |
| LivOn Lypo-Spheric | [livonlabs.com](https://www.livonlabs.com/products/vitamin-c) | Vitacost SFP mirror | 1,000 mg | Sodium ascorbate (liposomal) | 30 |
| Nutricost Powder | [nutricost.com](https://nutricost.com/products/nutricost-vitamin-c-powder) | Official SFP image | 1,000 mg | Ascorbic acid powder | ~454 |
| Nature Made 1000 mg | [naturemade.com](https://www.naturemade.com/products/vitamin-c-1000-mg-tablets) (discontinued) | [Target SFP](https://www.target.com/p/nature-made-vitamin-c-1000mg-immune-system-supplement-tablets-100ct/-/A-11010061) | 1,000 mg | Ascorbic acid (tablet) | 100 |

**Price checked:** 2026-07-07 (manual, non-Amazon).

---

## E. Testing status summary

| Product | Status | Notes |
|---------|--------|-------|
| NOW C-1000 Veg | **unknown** | GMP/quality seals only; no program listing captured |
| Nutricost Buffered | **claimed** | Third-party tested marketing; no public COA URL |
| LivOn Lypo-Spheric | **unknown** | Brand states third-party tested; no certificate URL |
| Nutricost Powder | **claimed** | Third-party tested marketing; no public COA URL |
| Nature Made 1000 mg | **verified** | USP Verified badge on Target listing; independent USP database match pending |

---

## F. Price normalization summary (2026-07-07)

| Product | Price | $/serving | $/500 mg vit C | $/1,000 mg vit C |
|---------|-------|-----------|----------------|------------------|
| Nutricost Powder 1 lb | $13.97 | ~$0.031 | **~$0.015** | ~$0.031 |
| NOW C-1000 Veg 100 ct | $14.99 | $0.15 | ~$0.075 | ~$0.15 |
| Nature Made USP 100 ct | $15.29 | $0.15 | ~$0.076 | ~$0.15 |
| Nutricost Buffered 120 ct | $14.97 | $0.25 | ~$0.125 | ~$0.25 |
| LivOn Lypo-Spheric 30 ct | $42.95 | $1.43 | ~$0.72 | ~$1.43 |

Formula: (price per serving ÷ vitamin C mg per serving) × 500.

---

## G. Draft scoring summary

| Product | Overall | Key drivers | Key offsets |
|---------|---------|-------------|-------------|
| Nutricost Powder | **87** | Pure powder, best $/500 mg, minimal additives | Claimed testing only |
| Nature Made USP | **82** | USP Verified (Target), clear 1,000 mg dose | Retailer label; brand PDP discontinued |
| NOW C-1000 Veg | **79** | Official SFP, 1-cap serving, clear ascorbic acid | Unknown testing; bioflavonoid add-ons |
| Nutricost Buffered | **74** | Buffered bucket coverage, claimed testing | 2-cap serving; mineral-type source gap |
| LivOn Lypo-Spheric | **69** | Clear sodium ascorbate dose on SFP | High absorption marketing risk; high $/mg |

Profile: `vitamin-c`. No “Best Overall” framing. Scores reflect label transparency and dated price context — not medical outcomes.

---

## H. Product caveats and claim-risk notes

- **NOW C-1000:** Immune/collagen structure-function copy on brand page; +100 mg bioflavonoids, 25 mg rutin.
- **Nutricost Buffered:** Immune marketing on brand page; exact calcium vs. sodium ascorbate split not confirmed from readable SFP image in 8E; do not claim “gentle” or “better absorbed.”
- **LivOn:** Elevated absorption/delivery marketing on brand site — score clarity, not superiority; ethanol + soy phospholipids; sodium 160 mg/packet.
- **Nutricost Powder:** Sour taste/GI tolerance varies; multiple size SKUs exist.
- **Nature Made:** Brand PDP discontinued while Target sells USP SKU; immune/upper-respiratory retailer copy; PEG in excipients; USP database entry not independently captured.

---

## I. Source gaps

1. **Nutricost Buffered** — calcium vs. sodium ascorbate split on SFP image (high-res fetch failed in 8E).
2. **Nature Made** — independent USP Verified Products Program database match for UPC 031604014896.
3. **Nature Made** — confirm active formulation unchanged vs. discontinued brand PDP.
4. **LivOn** — official brand-hosted structured Supplement Facts vs. Vitacost mirror.
5. **Amazon ASIN/UPC mapping** — deferred to later affiliate phase for all five SKUs.

---

## J. Brand YAML changes

| Action | Path | Notes |
|--------|------|-------|
| **Created** | `content/brands/livon-laboratories.yaml` | `draft` / `noindex`; new brand required for FK validation |
| **Not modified** | `now-foods.yaml`, `nutricost.yaml`, `nature-made.yaml` | Published brands unchanged; draft Vitamin C products filtered from brand hub via `isIndexable()` |

---

## K. Category/ingredient shell changes

| File | Change |
|------|--------|
| `content/categories/vitamin-c.yaml` | Updated `clusterScopeNote`; Phase 8E `updateLog` entry; remains `draft` / `noindex` |
| `content/ingredients/vitamin-c.yaml` | Added five `relatedProductIds` for internal QA; Phase 8E `updateLog`; remains `draft` / `noindex` |

No `featuredProductIds`, comparison links, or publication status changes.

---

## L. Confirmation — all Vitamin C products draft/noindex

| Product ID | status | noindex | affiliate.enabled |
|------------|--------|---------|-------------------|
| `vitamin-c-now-foods-vitamin-c-1000-veg-capsules` | draft | true | false |
| `vitamin-c-nutricost-buffered-vitamin-c-120` | draft | true | false |
| `vitamin-c-livon-lypo-spheric-vitamin-c` | draft | true | false |
| `vitamin-c-nutricost-vitamin-c-powder` | draft | true | false |
| `vitamin-c-nature-made-vitamin-c-1000-mg-tablets` | draft | true | false |

---

## M. Confirmation — no Vitamin C affiliate/Amazon links

No Amazon URLs, ASINs, `tag=` parameters, or `affiliate.enabled: true` on any Vitamin C product YAML.

---

## N. Confirmation — no Vitamin C content published

Category, ingredient, brand (LivOn), and all five products remain `draft` / `noindex`. No guides or comparisons created.

---

## O. Confirmation — existing Creatine/Magnesium unchanged

No edits to published Creatine or Magnesium product YAML, comparisons, guides, or affiliate mappings.

---

## P. Confirmation — Klean Magnesium held back

`content/products/magnesium/klean-athlete-klean-magnesium.yaml` — `affiliate.enabled: false` (UPC mismatch). Unchanged.

---

## Q. Confirmation — SITE_MODE, ads, legal pages

| Setting | Value |
|---------|-------|
| `SITE_MODE` | `prelaunch` |
| Ads | disabled (`config/monetization.ts`) |
| Legal pages | draft / noindex |
| Contact email | `help@suppcheckr.com` |

---

## R. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — typecheck, lint, 40 tests, `validate:content` 0 errors / 0 warnings |
| `npm run build` | **Pass** |

---

## S. Recommended next phase

**Phase 8F — Vitamin C foundational guides (draft/noindex)**

1. Draft `what-is-vitamin-c`, dosage, and how-to-choose guides as `draft` / `noindex`
2. Re-fetch Nutricost Buffered SFP for calcium/sodium split; capture USP database entry for Nature Made
3. Draft Vitamin C comparison YAML (five products) — still `draft` / `noindex`
4. User approval before any Vitamin C cluster publication or Amazon ASIN mapping

---

## T. Recommended commit message

```
Phase 8E: draft Vitamin C product reviews
```

---

## Files created/changed

| Action | Path |
|--------|------|
| Created | `content/products/vitamin-c/now-foods-vitamin-c-1000-veg-capsules.yaml` |
| Created | `content/products/vitamin-c/nutricost-buffered-vitamin-c-120.yaml` |
| Created | `content/products/vitamin-c/livon-lypo-spheric-vitamin-c.yaml` |
| Created | `content/products/vitamin-c/nutricost-vitamin-c-powder.yaml` |
| Created | `content/products/vitamin-c/nature-made-vitamin-c-1000-mg-tablets.yaml` |
| Created | `content/brands/livon-laboratories.yaml` |
| Created | `content/templates/phase-8e-vitamin-c-draft-products-report-2026-07-07.md` |
| Updated | `content/categories/vitamin-c.yaml` |
| Updated | `content/ingredients/vitamin-c.yaml` |

**Not modified:** Creatine/Magnesium products, affiliate config, ads, legal pages, `SITE_MODE`.

---

*Draft content phase only. Vitamin C cluster not published in Phase 8E.*
