# Phase 14H — Electrolytes Amazon Affiliate Mapping Report

**Date:** 2026-07-07 (executed 2026-07-15)  
**Phase:** 14H — exact Amazon product mapping for published Electrolytes cluster  
**Git baseline:** `7c97a31` (Phase 14G) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)

---

## A. Scope and constraints

Phase 14H maps published Electrolytes products to exact Amazon product URLs (ASINs) where match confidence is **exact**, enables `affiliate.enabled: true` only for verified matches, and wires purchase CTAs to tagged Amazon links (`suppcheckr-20` at runtime) while preserving brand/retailer reference links and manual price citations.

**Constraints preserved:**

| Constraint | Status |
|------------|--------|
| `SITE_MODE` | `prelaunch` |
| Live ad scripts | Disabled |
| Legal pages | Draft + noindex |
| Amazon product images | Not added |
| Amazon reviews/Q&A/ratings/live prices | Not used |
| Creatine/Magnesium/Vitamin C facts, prices, scores, testing, affiliate mappings | Unchanged |
| Klean Athlete Klean Magnesium | Held back (unchanged) |
| Tag in YAML | Not hardcoded (`AMAZON_ASSOCIATE_TAG` / runtime tag only) |

---

## B. Files created/changed

| File | Change |
|------|--------|
| `content/products/electrolytes/lmnt-citrus-salt-30.yaml` | Amazon retailer + `affiliate.enabled: true` |
| `content/products/electrolytes/liquid-iv-hydration-multiplier-lemon-lime-16.yaml` | Amazon retailer + `affiliate.enabled: true` |
| `content/products/electrolytes/ultima-replenisher-lemonade-20-sticks.yaml` | Amazon retailer + `affiliate.enabled: true` |
| `content/products/electrolytes/thorne-catalyte-lemon-lime-30-servings.yaml` | Amazon retailer + `affiliate.enabled: true` |
| `content/products/electrolytes/nuun-sport-lemon-lime-10-tablets.yaml` | Hold documented in `updateLog` only — no Amazon URL |
| `lib/__tests__/core.test.ts` | Affiliate count 14 → 18; Electrolytes + Nuun hold QA tests |
| `content/templates/phase-14h-electrolytes-amazon-affiliate-mapping-report-2026-07-07.md` | Created (this report) |

---

## C. Amazon exact-match research table

Amazon listing metadata (title, count/size, form, UPC where listed) used for match verification only — not product facts, reviews, ratings, images, or live prices.

| SuppCheckr product | Amazon title (abbrev.) | ASIN | Match confidence | UPC / count checks | Decision |
|--------------------|------------------------|------|------------------|-------------------|----------|
| LMNT Citrus Salt 30 stick packs | LMNT Zero Sugar Electrolytes - Citrus Salt \| Drink Mix \| 30-Count | B07TT8B1JJ | **exact** | Citrus Salt ✓; 30 sticks / 30 servings ✓; stick pack ✓; UPC 850009273031 ✓ | **enable** |
| Liquid I.V. Hydration Multiplier Lemon Lime 16ct | Liquid I.V.® Hydration Multiplier - Lemon Lime \| 1 Pack (16 Servings) | B01IT9NLHW | **exact** | Lemon Lime ✓; 16 sticks/servings ✓; sugar-containing Hydration Multiplier ✓; UPC 863737000176 / MPN LVP-1602 ✓ | **enable** |
| Nuun Sport Lemon Lime 10 tablets | *(no single-tube listing found)* | — | **unresolved** | Reviewed SKU UPC 811660020501 (Vitacost/iHerb/nuunlife); Amazon UPC search returns legacy Nuun Active multipacks (B01N5UU723, B01MZZ7UDE) or Lemon Lime multipacks (B018NZJC70 UPC 811660021058 = 4×10 tubes) | **hold** |
| Ultima Replenisher Lemonade 20 sticks | Ultima Replenisher New Formula Lemonade (20 Count Stickpacks) | B01IIGOR42 | **exact** | Lemonade ✓; 20 stickpacks ✓; not 30-serving tub (B01IIGCCIK rejected) ✓; UPC 853218000610 ✓ | **enable** |
| Thorne Catalyte Lemon Lime 30 servings | THORNE Catalyte Lemon Lime - 11.01 Oz (30 servings) | B07VS6XSN7 | **exact** | Lemon Lime powder ✓; 30 servings / 11.01 oz tub ✓; UPC **693749006299** matches locked review ✓; NSF Sport ✓; MPN SF101 ✓ | **enable** |

---

## D. Per-product decisions

### LMNT Citrus Salt 30-count stick pack

- **Decision:** enable
- **ASIN:** B07TT8B1JJ
- **Notes:** Amazon lists 30-count single box Citrus Salt stick packs; not variety pack (B0CQDFPMQW) or 12-count (B084HQ4DYQ).

### Liquid I.V. Hydration Multiplier Lemon Lime 16-count

- **Decision:** enable
- **ASIN:** B01IT9NLHW
- **Notes:** Original sugar-containing Hydration Multiplier; not Sugar-Free line; 16 servings per box.

### Nuun Sport Lemon Lime 10-tablet tube

- **Decision:** hold
- **Reason:** No Amazon listing verified as a **single** Nuun Sport Lemon Lime 10-tablet tube with UPC 811660020501. Closest Lemon Lime listings are 4-pack (B018NZJC70, UPC 811660021058) or 8-pack (B018NZJBT4). UPC catalog search surfaces discontinued Nuun Active multipacks only.

### Ultima Replenisher Lemonade 20-count sticks

- **Decision:** enable
- **ASIN:** B01IIGOR42
- **Notes:** 20 stickpack box; rejected B01IIGCCIK (30-serving canister, UPC 853218000627).

### Thorne Catalyte Lemon Lime 30 servings

- **Decision:** enable
- **ASIN:** B07VS6XSN7
- **Notes:** UPC 693749006299 exact match to Vitacost/iHerb/NSF locked SKU; 30 servings powder tub; retailer-label caveat on product page unchanged.

---

## E. Enabled products and ASINs

| Product | ASIN | Amazon URL |
|---------|------|------------|
| LMNT Citrus Salt 30 stick packs | B07TT8B1JJ | https://www.amazon.com/dp/B07TT8B1JJ |
| Liquid I.V. Hydration Multiplier Lemon Lime 16ct | B01IT9NLHW | https://www.amazon.com/dp/B01IT9NLHW |
| Ultima Replenisher Lemonade 20 sticks | B01IIGOR42 | https://www.amazon.com/dp/B01IIGOR42 |
| Thorne Catalyte Lemon Lime 30 servings | B07VS6XSN7 | https://www.amazon.com/dp/B07VS6XSN7 |

**Electrolytes affiliate-enabled:** 4/5  
**Site-wide affiliate-enabled:** 18 (14 prior + 4 Electrolytes)

---

## F. Held/rejected products and reasons

| Product | Decision | Reason |
|---------|----------|--------|
| Nuun Sport Lemon Lime 10 tablets | **hold** | No verified exact single-tube Amazon ASIN for UPC 811660020501; multipack and legacy Nuun Active listings do not match reviewed single-tube SKU |

**Klean Athlete Klean Magnesium** (unchanged): UPC mismatch hold — no Amazon URL in YAML.

---

## G. Affiliate count before/after

| Metric | Before | After |
|--------|--------|-------|
| Site-wide `affiliate.enabled: true` | 14 | **18** |
| Creatine | 5 | 5 |
| Magnesium | 4 | 4 |
| Vitamin C | 5 | 5 |
| Electrolytes | 0 | **4** |
| Klean Magnesium | false | false |

---

## H. Confirmation no Amazon images/reviews/Q&A/ratings/live prices used

No Amazon product images, star ratings, Q&A, or live Amazon prices added. Placeholder images unchanged. Manual dated prices preserved (2026-07-15).

---

## I. Confirmation product facts/prices/scores/testing statuses unchanged

No changes to `supplementFacts`, `pricing`, `rating`, `thirdPartyTesting`, `claims`, or `sources` blocks. Only `retailers`, `affiliate.enabled`, and `editorial.updateLog` entries modified.

---

## J. Confirmation existing 14 affiliate mappings unchanged

No edits to Creatine, Magnesium, or Vitamin C product YAML.

---

## K. Confirmation Klean Magnesium remains held back

`magnesium-klean-athlete-klean-magnesium`: `affiliate.enabled: false`; no Amazon retailer URL.

---

## L. Confirmation Electrolytes pages remain published/indexable

All five Electrolytes products remain `status: published`, `noindex: false`. Category, comparison, ingredient, and guides unchanged.

---

## M. Confirmation legal pages remain draft/noindex

No legal page edits.

---

## N. Confirmation ads disabled and SITE_MODE prelaunch

`config/monetization.ts`: `ads.enabled: false`. `config/site.ts`: `siteMode` defaults to `prelaunch`. Contact: `help@suppcheckr.com`.

---

## O. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — typecheck, eslint, vitest (44 tests), validate:content, lint:content |
| `npm run build` | **Pass** — compiled successfully |

---

## P. Recommended live QA checklist

Post-deploy, verify on each **enabled** Electrolytes product page:

- [ ] **View on Amazon** CTA renders (not `#amazon-placeholder`)
- [ ] Outbound href contains `tag=suppcheckr-20` when `AMAZON_ASSOCIATE_TAG` is set in env
- [ ] YAML Amazon URL remains untagged (`/dp/ASIN` only)
- [ ] Primary retailer link still present for manual price context
- [ ] **Nuun Sport** page has **no** Amazon CTA
- [ ] No Amazon images/reviews/ratings on page
- [ ] Thorne retailer-label caveat still visible
- [ ] Existing Creatine/Magnesium/Vitamin C affiliate CTAs unchanged

---

## Q. Recommended next phase

**Phase 14I — Electrolytes affiliate live QA + Nuun ASIN re-check**

1. Post-deploy smoke test all four enabled Electrolytes Amazon CTAs
2. Re-search Amazon periodically for single-tube Nuun Sport Lemon Lime (UPC 811660020501)
3. GSC re-inspection optional for product pages with new CTAs (affiliate disclosure already site-wide)
4. Optional: attorney review of legal pages (unchanged blocker)

---

## R. Recommended commit message

```
Phase 14H: map Electrolytes Amazon affiliate links
```

---

*Phase 14H complete. Four Electrolytes products affiliate-enabled with exact ASIN matches; Nuun held pending single-tube verification.*
