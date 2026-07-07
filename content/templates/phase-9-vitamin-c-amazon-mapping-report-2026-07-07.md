# Phase 9 — Vitamin C Amazon Affiliate Mapping Report

**Date:** 2026-07-07  
**Phase:** 9 — exact Amazon product mapping for published Vitamin C cluster  
**Git baseline:** `e15c558` (Phase 8H-2) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)

---

## A. Scope and constraints

Phase 9 maps all five published Vitamin C products to exact Amazon product URLs (ASINs), enables `affiliate.enabled: true` only for verified exact matches, and wires purchase CTAs to tagged Amazon links while preserving brand/retailer reference links and manual price citations.

**Constraints preserved:**

| Constraint | Status |
|------------|--------|
| `SITE_MODE` | `prelaunch` |
| Live ad scripts | Disabled |
| Legal pages | Draft + noindex |
| Amazon product images | Not added |
| Amazon reviews/Q&A/ratings | Not used |
| Live Amazon prices | Not added |
| Creatine/Magnesium facts, prices, scores, testing, affiliate mappings | Unchanged |
| Klean Athlete Klean Magnesium | Held back (unchanged) |
| Tag in YAML | Not hardcoded (`AMAZON_ASSOCIATE_TAG` env only) |

---

## B. Files changed

| File | Change |
|------|--------|
| `content/products/vitamin-c/now-foods-vitamin-c-1000-veg-capsules.yaml` | Amazon retailer + `affiliate.enabled: true` |
| `content/products/vitamin-c/nutricost-buffered-vitamin-c-120.yaml` | Amazon retailer + `affiliate.enabled: true` |
| `content/products/vitamin-c/livon-lypo-spheric-vitamin-c.yaml` | Amazon retailer + `affiliate.enabled: true` |
| `content/products/vitamin-c/nutricost-vitamin-c-powder.yaml` | Amazon retailer + `affiliate.enabled: true` |
| `content/products/vitamin-c/nature-made-vitamin-c-1000-mg-tablets.yaml` | Amazon retailer + `affiliate.enabled: true` |
| `lib/__tests__/core.test.ts` | Affiliate count 9 → 14; Vitamin C + Klean Magnesium QA tests |
| `content/templates/phase-9-vitamin-c-amazon-mapping-report-2026-07-07.md` | Created (this report) |

---

## C. Existing affiliate framework reviewed

Reviewed and reused without framework changes:

| Component | Role |
|-----------|------|
| `lib/affiliate/buildAmazonLink.ts` | Applies `tag=` at runtime from `AMAZON_ASSOCIATE_TAG` |
| `lib/affiliate/isAmazonUrl.ts` | Amazon domain + associate-tag validation |
| `lib/affiliate/getProductPurchaseUrl.ts` | Resolves Amazon URL when `affiliate.enabled` |
| `lib/affiliate/resolveProductAffiliateCta.ts` | Server/build-time CTA resolution |
| `lib/affiliate/productAffiliateCta.ts` | CTA variant types |
| `components/product/AffiliateButton.tsx` | Client CTA button (no env reads) |
| `config/monetization.ts` | Global affiliate toggle; `ctaLabel: "View on Amazon"` |
| Phase 7B report | Mapping conventions and Klean Magnesium hold precedent |

**Convention:** Secondary `retailers` entry with `retailerId: amazon`, untagged `https://www.amazon.com/dp/{ASIN}`, `isPrimary: false`. Primary retailer entries unchanged for manual price citations.

---

## D. Products mapped

All five published Vitamin C products were researched. Amazon listing metadata (title, count/size, form, UPC/MPN where listed) was used for match verification only — no Amazon reviews, Q&A, ratings, images, or live prices used as evidence.

| Match outcome | Count |
|---------------|-------|
| exact → enable | 5 |
| hold | 0 |
| reject | 0 |

---

## E. Product-by-product Amazon match table

| SuppCheckr product | Amazon title | ASIN | Match checks | Decision | Reason |
|--------------------|--------------|------|--------------|----------|--------|
| NOW Foods Vitamin C-1000 Veg Capsules (100) | NOW Foods Supplements, Vitamin C-1,000 with 100 mg of Bioflavonoids, Antioxidant protection*, 100 Veg Capsules | B001AIXCU6 | Brand ✓; veg capsule form ✓; 100 count ✓; 1,000 mg ascorbic acid per capsule ✓; UPC 733739006905 / MPN 0690 ✓; bioflavonoids + rutin on listing ✓ | **activate** | Exact SKU/count/form/dose match to locked NOW SKU 0690 |
| Nutricost Buffered Vitamin C (120 caps) | Nutricost Buffered Vitamin C (1000mg) 120 Capsules - Vegan, GMO-Free, 60 Servings | B0GZSDYR55 | Brand ✓; buffered capsule form ✓; 120 capsules ✓; 60 servings (2 caps/serving) ✓; 1,000 mg per serving ✓; UPC 810139577713 | **activate** | Title/count/serving/dose align with official Nutricost buffered SKU; mineral ascorbate formula confirmed via brand SFP (Phase 8G), not Amazon SFP |
| LivOn Lypo-Spheric Vitamin C (30 packets) | LivOn Laboratories Lypo–Spheric Liposomal Vitamin C 1000mg … 30 Packets | B000CD9XGC | Brand ✓; packet form ✓; 30 packets ✓; 1,000 mg sodium ascorbate per packet ✓; UPC 858514001002 / MPN LSC30/12 ✓ | **activate** | Exact UPC/count/form/dose match to locked LivOn 30-packet carton |
| Nutricost Vitamin C Powder (1 lb) | Nutricost Pure Ascorbic Acid Powder (Vitamin C) 1LB | B00WFDWAEY | Brand ✓; powder form ✓; 1 lb / NC-VCAA1LB ✓; 1 g scoop / ~454 servings ✓; pure ascorbic acid ✓; UPC 810139571858 | **activate** | Dedicated 1 lb ASIN (not shared variant parent); matches locked 1 lb powder SKU |
| Nature Made Extra Strength Vitamin C 1000 mg Tablets (100) | Nature Made Extra Strength Vitamin C 1000 mg Tablets … 100 Count | B0000DJASY | Brand ✓; tablet form ✓; 100 count ✓; 1,000 mg per tablet ✓; UPC 031604014896 / MPN 1489 ✓ | **activate** | Amazon UPC matches locked review UPC 031604014896; resolves Phase 8D deferral once UPC verified |

---

## F. Products activated (5/5)

| Product | ASIN | Amazon URL |
|---------|------|------------|
| NOW Foods Vitamin C-1000 Veg Capsules (100) | B001AIXCU6 | https://www.amazon.com/dp/B001AIXCU6 |
| Nutricost Buffered Vitamin C (120 caps) | B0GZSDYR55 | https://www.amazon.com/dp/B0GZSDYR55 |
| LivOn Lypo-Spheric Vitamin C (30 packets) | B000CD9XGC | https://www.amazon.com/dp/B000CD9XGC |
| Nutricost Vitamin C Powder (1 lb) | B00WFDWAEY | https://www.amazon.com/dp/B00WFDWAEY |
| Nature Made Extra Strength Vitamin C 1000 mg Tablets (100) | B0000DJASY | https://www.amazon.com/dp/B0000DJASY |

**Total site-wide affiliate-enabled products:** 14 (9 Creatine/Magnesium + 5 Vitamin C).

---

## G. Products held back and why

| Product | Decision | Reason |
|---------|----------|--------|
| *(none in Vitamin C set)* | — | All five SKUs met exact-match criteria |

**Klean Athlete Klean Magnesium** (Magnesium cluster, unchanged): remains held due to UPC mismatch (review lock 310539035521 vs Amazon 310539979075). No Amazon URL in YAML; `affiliate.enabled: false`.

---

## H. Confirmation — no Amazon images/reviews/Q&A/ratings/live prices added

No Amazon product images, star ratings, Q&A, or live Amazon prices added to any Vitamin C YAML. Placeholder images unchanged (`/images/products/placeholder.svg`). Manual dated prices preserved (2026-07-07).

---

## I. Confirmation — Amazon used only as outbound affiliate target

Amazon listings were consulted only to identify outbound affiliate ASINs and verify title/count/form/UPC metadata. No Amazon marketing claims, reviews, or live prices copied into product facts, scores, testing statuses, or claim copy.

---

## J. Confirmation — no product facts/prices/scores/testing statuses changed

No changes to Vitamin C scores, testing statuses, label facts, manual prices, rankings, claims, pros/cons, or product images. Only Amazon retailer entries, `affiliate.enabled: true`, and `updateLog` entries added.

---

## K. Confirmation — no Creatine/Magnesium affiliate mappings changed

Creatine (5) and Magnesium (4 active + 1 held) product YAML affiliate fields and Amazon URLs unchanged.

---

## L. Confirmation — Klean Magnesium remains held back

`content/products/magnesium/klean-athlete-klean-magnesium.yaml`: `affiliate.enabled: false`; no Amazon retailer entry.

---

## M. Confirmation — SITE_MODE prelaunch, ads disabled, legal pages draft/noindex

| Control | Value |
|---------|-------|
| `SITE_MODE` | `prelaunch` |
| `ads.enabled` | `false` |
| `ads.loadScripts` | `false` |
| Legal pages | Draft + noindex |
| Contact email | `help@suppcheckr.com` (`config/site.ts`) |
| Vitamin C cluster | Published + indexable (unchanged) |

---

## N. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — typecheck, lint, 42 tests, content validation 0 errors |
| `npm run build` | **Pass** — compiled successfully; 82 static pages generated |

---

## O. Generated-link QA

**Sample generated URL (NOW Foods Vitamin C, with tag configured):**

```
https://www.amazon.com/dp/B001AIXCU6?tag=suppcheckr-20
```

**Automated test coverage (`lib/__tests__/core.test.ts`):**

- 14 affiliate-enabled products; all have untagged Amazon URLs in YAML (no `tag=` in source)
- Vitamin C activated count = 5
- `resolveProductAffiliateCta` for NOW Foods returns `View on Amazon` with `tag=suppcheckr-20` and no `#amazon-placeholder`
- Klean Magnesium remains on direct retailer CTA (`Check current price at retailer`); no Amazon URL

**CTA behavior:**

| State | CTA label | Link target | Disclosure |
|-------|-----------|-------------|------------|
| `affiliate.enabled: true` + valid tag | View on Amazon | Tagged Amazon URL | Affiliate disclosure before button |
| Missing/invalid tag | View on Amazon (unavailable) | `#amazon-placeholder` | Disclosure + unavailable note |
| `affiliate.enabled: false` | Check current price at retailer | Primary retailer URL | Direct retailer note when framework active |

---

## P. Recommended next phase

**Phase 9 manual follow-up — Production affiliate QA:** Spot-check all five Vitamin C product pages on Production/Preview for **View on Amazon** CTA with disclosure; confirm outbound links include `tag=suppcheckr-20`; verify Klean Magnesium still shows direct retailer CTA.

**Phase 9B — Nutricost Buffered UPC cross-check (optional):** If Nutricost publishes UPC 810139577713 on the official buffered product page, add to `labelTransparencyNotes` for independent reconciliation (not required for current activation — Amazon metadata + brand SFP already align).

**Phase 10 (when ready):** Legal counsel review of draft legal pages before indexability; separate from affiliate mapping.

---

## Q. Recommended commit message

```
Phase 9: map Vitamin C Amazon affiliate links
```

---

## Match-risk notes (monitoring)

| Product | Risk note | Severity |
|---------|-----------|----------|
| Nutricost Buffered Vitamin C | Amazon listing is newer (first available May 2026); mineral ascorbate split not visible on Amazon SFP — formula identity relies on brand SFP (Phase 8G) + title/serving metadata | Low — monitor if Amazon reformulates listing |
| Nature Made Vitamin C 1000 mg | Brand PDP discontinued; review label locked via Target; Amazon UPC 031604014896 now matches; alternate ASIN B082L1LXPB exists for packaging variants — B0000DJASY is the UPC-verified 100-count listing | Low — spot-check packaging if Amazon rotates ASINs |
| Nutricost Vitamin C Powder | Nutricost sells 0.5 lb and 2 lb sizes on brand site; B00WFDWAEY is dedicated 1 lb ASIN (NC-VCAA1LB) | Low |
| LivOn Lypo-Spheric | Amazon lists 0.2 fl oz per packet vs 5.7 mL on brand SFP — standard volume rounding for same SKU | Negligible |
| NOW Foods C-1000 | NOW sells 30/250/500 count variants; B001AIXCU6 is dedicated 100-count ASIN with matching UPC | Low |

---

*Amazon used for outbound affiliate targeting only. No product evidence sourced from Amazon.*
