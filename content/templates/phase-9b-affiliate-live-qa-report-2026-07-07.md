# Phase 9B — Affiliate Live QA Report

**Date:** 2026-07-07  
**Phase:** 9B — affiliate live QA after Phase 9 Vitamin C Amazon mapping  
**Git baseline:** `f227dc6` (Phase 9) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)  
**Recommended commit message:** `Phase 9B: document affiliate live QA`

---

## A. Scope and constraints

Phase 9B verifies Amazon affiliate CTA behavior across the production-style build after Phase 9 enabled all five published Vitamin C products. This is a QA/report phase only — no new ASIN mappings, no product fact changes, no framework changes unless a real bug was found.

**QA scope:**

| Area | Products |
|------|----------|
| Vitamin C Amazon CTAs | 5 activated products |
| Existing Creatine/Magnesium CTAs | 5 creatine + 4 magnesium (spot-check + all-14 scan) |
| Held-back product | Klean Athlete Klean Magnesium |

**Constraints preserved:**

| Constraint | Status |
|------------|--------|
| `SITE_MODE` | `prelaunch` |
| Live ad scripts | Disabled |
| Legal pages | Draft + noindex |
| New Amazon ASIN mappings | **None added** |
| Amazon images/reviews/Q&A/ratings/live prices | **Not added** |
| Product facts/prices/scores/testing statuses | **Unchanged** |
| Creatine/Magnesium affiliate mappings | **Unchanged** |
| Klean Magnesium | **Held back** |
| Contact email | `help@suppcheckr.com` |

---

## B. Files changed

| File | Change |
|------|--------|
| `content/templates/phase-9b-affiliate-live-qa-report-2026-07-07.md` | Created (this report) |

**No code, YAML, or test changes required** — affiliate framework and Phase 9 mappings passed QA.

---

## C. Affiliate framework behavior reviewed

Reviewed (no changes):

| Component | Expected behavior | QA result |
|-----------|-------------------|-----------|
| `lib/affiliate/buildAmazonLink.ts` | Applies `tag=` from `AMAZON_ASSOCIATE_TAG` at build/runtime; fails closed to `#amazon-placeholder` when tag missing/invalid | **Pass** |
| `lib/affiliate/isAmazonUrl.ts` | Detects `amazon.com` / `amzn.to` hosts; validates associate tag | **Pass** |
| `lib/affiliate/getProductPurchaseUrl.ts` | Returns Amazon URL when `affiliate.enabled`; else primary retailer | **Pass** |
| `lib/affiliate/resolveProductAffiliateCta.ts` | Server/build-time CTA resolution; disclosure flag for Amazon variant | **Pass** |
| `lib/affiliate/productAffiliateCta.ts` | CTA variant types (`amazon` / `retailer` / `unavailable`) | **Pass** |
| `components/monetization/AffiliateButton.tsx` | Renders pre-resolved CTA; no env reads on client | **Pass** |
| `components/trust/TrustModules.tsx` | `AffiliateLinkDisclosure` above Amazon CTA | **Pass** |
| `config/monetization.ts` | `ctaLabel: "View on Amazon"`; `defaultRel: "sponsored nofollow"` | **Pass** |
| `app/supplements/[category]/products/[productSlug]/page.tsx` | Resolves CTA server-side; passes to `AffiliateButton` | **Pass** |
| `lib/__tests__/core.test.ts` | 14 affiliate products; Vitamin C + Klean Magnesium coverage | **Pass** (42 tests total) |

**Conventions confirmed:**

- Product YAML stores **untagged** Amazon URLs (`https://www.amazon.com/dp/{ASIN}`)
- Generated outbound URL includes `tag=suppcheckr-20` when `AMAZON_ASSOCIATE_TAG` is set at build/runtime
- CTA label for affiliate products: **View on Amazon**
- Link-level disclosure: **Affiliate link** — SuppCheckr may earn a commission…
- `rel="sponsored nofollow"` on Amazon CTAs
- No `#amazon-placeholder` for activated products when tag is configured

---

## D. Product URL QA table

| Product | URL | Expected CTA | Expected href | Disclosure | Local/build QA |
|---------|-----|--------------|---------------|------------|----------------|
| NOW Foods Vitamin C-1000 Veg Capsules | `/supplements/vitamin-c/products/now-foods-vitamin-c-1000-veg-capsules` | View on Amazon | `https://www.amazon.com/dp/B001AIXCU6?tag=suppcheckr-20` | Yes | **Pass** |
| Nutricost Buffered Vitamin C | `/supplements/vitamin-c/products/nutricost-buffered-vitamin-c-120` | View on Amazon | `https://www.amazon.com/dp/B0GZSDYR55?tag=suppcheckr-20` | Yes | **Pass** |
| LivOn Lypo-Spheric Vitamin C | `/supplements/vitamin-c/products/livon-lypo-spheric-vitamin-c` | View on Amazon | `https://www.amazon.com/dp/B000CD9XGC?tag=suppcheckr-20` | Yes | **Pass** |
| Nutricost Vitamin C Powder | `/supplements/vitamin-c/products/nutricost-vitamin-c-powder` | View on Amazon | `https://www.amazon.com/dp/B00WFDWAEY?tag=suppcheckr-20` | Yes | **Pass** |
| Nature Made Vitamin C 1000 mg Tablets | `/supplements/vitamin-c/products/nature-made-vitamin-c-1000-mg-tablets` | View on Amazon | `https://www.amazon.com/dp/B0000DJASY?tag=suppcheckr-20` | Yes | **Pass** |
| Nutricost Creatine Monohydrate 500 g (spot-check) | `/supplements/creatine/products/nutricost-creatine-monohydrate-500g` | View on Amazon | `https://www.amazon.com/dp/B00GL2HMES?tag=suppcheckr-20` | Yes | **Pass** |
| Nutricost Magnesium Citrate 120 (spot-check) | `/supplements/magnesium/products/nutricost-magnesium-citrate-120` | View on Amazon | `https://www.amazon.com/dp/B08KFHSWZ7?tag=suppcheckr-20` | Yes | **Pass** |
| Klean Athlete Klean Magnesium (held back) | `/supplements/magnesium/products/klean-athlete-klean-magnesium` | Check current price at retailer | `https://www.kleanathlete.com/klean-magnesium.html` (direct) | No Amazon disclosure | **Pass** |

**All-14 affiliate scan:** programmatic `resolveProductAffiliateCta` with `associateTag: suppcheckr-20` — **14/14 Pass**.

---

## E. Vitamin C CTA QA results

| Check | Result |
|-------|--------|
| All 5 products `affiliate.enabled: true` | **Pass** |
| All 5 YAML Amazon URLs untagged | **Pass** |
| CTA visible | **Pass** |
| CTA text "View on Amazon" | **Pass** |
| `href` starts with `https://www.amazon.com/dp/` | **Pass** |
| `href` includes `tag=suppcheckr-20` (with tag env) | **Pass** |
| No `#amazon-placeholder` in built HTML | **Pass** |
| `rel="sponsored nofollow"` | **Pass** |
| Affiliate disclosure above CTA | **Pass** |
| No Amazon images/reviews/Q&A/ratings/live prices | **Pass** (placeholder images + manual dated prices only) |

**Local production-style HTTP QA** (`next build` with `AMAZON_ASSOCIATE_TAG=suppcheckr-20`, `next start` on port 4321): all 5 Vitamin C URLs **Pass**.

---

## F. Existing Creatine/Magnesium spot-check results

| Check | Result |
|-------|--------|
| Representative creatine spot-check (Nutricost 500 g) | **Pass** |
| Representative magnesium spot-check (Nutricost Citrate 120) | **Pass** |
| All 14 affiliate-enabled products programmatic scan | **Pass** |
| Creatine/Magnesium YAML affiliate fields unchanged vs Phase 9 baseline | **Pass** |
| Built `.next` segment output includes tagged URLs for magnesium/creatine pages | **Pass** |

**Active Creatine affiliate products (5):** Nutricost 500 g, ON Micronized 600 g, Klean Creatine, NOW Sports Capsules 120, BulkSupplements 1 kg.

**Active Magnesium affiliate products (4):** Nutricost Citrate 120, NOW Malate 180, Pure Encapsulations 180, Nature Made Oxide 100.

---

## G. Klean Magnesium held-back QA result

| Check | Result |
|-------|--------|
| `affiliate.enabled: false` | **Pass** |
| No Amazon retailer entry in YAML | **Pass** |
| No "View on Amazon" CTA | **Pass** |
| No `href` to `amazon.com` on product CTA | **Pass** (page footer may mention Amazon Associates generically) |
| No `#amazon-placeholder` link | **Pass** |
| Direct retailer CTA → `https://www.kleanathlete.com/klean-magnesium.html` | **Pass** |
| CTA label "Check current price at retailer" | **Pass** |
| "Direct retailer link — not an affiliate link." note shown | **Pass** |

---

## H. Generated-link QA

**Vitamin C example (NOW Foods):**

```
https://www.amazon.com/dp/B001AIXCU6?tag=suppcheckr-20
```

**Creatine example (Nutricost 500 g):**

```
https://www.amazon.com/dp/B00GL2HMES?tag=suppcheckr-20
```

**Magnesium example (Nutricost Citrate 120):**

```
https://www.amazon.com/dp/B08KFHSWZ7?tag=suppcheckr-20
```

| Check | Result |
|-------|--------|
| Tag applied at build when `AMAZON_ASSOCIATE_TAG=suppcheckr-20` | **Pass** |
| No `#amazon-placeholder` for any of 14 activated products (with tag) | **Pass** |
| Existing tag param replaced, not duplicated | **Pass** (unit test) |
| Fail-closed placeholder when tag missing locally | **Pass** (expected dev behavior) |

---

## I. Production/manual QA checklist for user

**Deploy note:** At QA time, `main` was **1 commit ahead of `origin/main`** (`f227dc6` Phase 9 not yet pushed). Live `www.suppcheckr.com` Vitamin C pages still showed **direct retailer CTAs** (pre-Phase-9). Run this checklist **after pushing Phase 9 + Phase 9B and confirming Vercel deploy completes** with `AMAZON_ASSOCIATE_TAG` set.

### Vitamin C (after deploy)

For each URL, confirm:

- [ ] https://suppcheckr.com/supplements/vitamin-c/products/now-foods-vitamin-c-1000-veg-capsules
- [ ] https://suppcheckr.com/supplements/vitamin-c/products/nutricost-buffered-vitamin-c-120
- [ ] https://suppcheckr.com/supplements/vitamin-c/products/livon-lypo-spheric-vitamin-c
- [ ] https://suppcheckr.com/supplements/vitamin-c/products/nutricost-vitamin-c-powder
- [ ] https://suppcheckr.com/supplements/vitamin-c/products/nature-made-vitamin-c-1000-mg-tablets

**Per URL:**

1. Button reads **View on Amazon**
2. Right-click → Copy link → URL contains `tag=suppcheckr-20`
3. **Affiliate link** disclosure appears directly above the button
4. No `#amazon-placeholder` in link address
5. No Amazon product images, star ratings, Q&A, or live Amazon prices on page
6. Manual dated price citation still shown (not live Amazon price)

### Held-back Magnesium

- [ ] https://suppcheckr.com/supplements/magnesium/products/klean-athlete-klean-magnesium

**Per URL:**

1. **No** "View on Amazon" button
2. **No** `amazon.com` product `href` on the purchase CTA
3. Direct retailer CTA to Klean Athlete still works
4. "Direct retailer link — not an affiliate link." note present

### Spot-check existing affiliate products (optional)

- [ ] https://suppcheckr.com/supplements/creatine/products/nutricost-creatine-monohydrate-500g
- [ ] https://suppcheckr.com/supplements/magnesium/products/nutricost-magnesium-citrate-120

---

## J. Confirmation — no new Amazon ASIN mappings added

Phase 9B added **zero** new ASIN mappings. Count remains **14** affiliate-enabled products (5 creatine + 4 magnesium + 5 vitamin C).

---

## K. Confirmation — no Amazon images/reviews/Q&A/ratings/live prices added

No Amazon product images, star ratings, Q&A widgets, or live Amazon prices in product pages. Placeholder images (`/images/products/placeholder.svg`) and manual dated MSRP citations unchanged.

---

## L. Confirmation — no product facts/prices/scores/testing statuses changed

No product YAML content changes in Phase 9B. All scores, testing statuses, manual prices, and claim copy unchanged from Phase 9 baseline.

---

## M. Confirmation — Creatine/Magnesium affiliate mappings unchanged

Creatine (5) and Magnesium (4 active) Amazon URLs and `affiliate.enabled` flags unchanged since Phase 7B/7C.

---

## N. Confirmation — Klean Magnesium remains held back

`content/products/magnesium/klean-athlete-klean-magnesium.yaml`: `affiliate.enabled: false`; no Amazon retailer entry; direct Klean Athlete CTA intact.

---

## O. Confirmation — SITE_MODE prelaunch, ads disabled, legal pages draft/noindex

| Control | Value |
|---------|-------|
| `SITE_MODE` | `prelaunch` (default in `config/site.ts`) |
| `ads.enabled` | `false` |
| `ads.loadScripts` | `false` |
| Legal pages (`DRAFT_LEGAL_PATHS`) | noindex + `LegalReviewBanner` |
| Contact email | `help@suppcheckr.com` |

---

## P. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — typecheck, eslint, 42 vitest tests, content validation 0 errors |
| `npm run build` (with `AMAZON_ASSOCIATE_TAG=suppcheckr-20`) | **Pass** |
| Local `next start` HTTP QA (port 4321) | **Pass** — Vitamin C, Creatine, Magnesium spot-checks |
| Built `.next/server/app/.../*.html` / `*.rsc` inspection | **Pass** — tagged Amazon hrefs in static output |

---

## Q. Warnings/risks

1. **Deploy required for live Vitamin C affiliate CTAs.** Phase 9 commit was local at QA time; production still serves pre-Phase-9 direct retailer links for Vitamin C. Push + deploy before running Section I checklist.
2. **`AMAZON_ASSOCIATE_TAG` must be set at Vercel build time.** CTA `href` is resolved server-side during `next build`. If the tag is missing at build, activated products will render `#amazon-placeholder` even if runtime env is later set.
3. **Local dev without tag shows placeholder.** Expected fail-closed behavior — not a bug. Use `.env.local` with tag only when intentionally testing links.
4. **LivOn brand publication.** LivOn affiliate mapping is active in YAML; confirm brand publication policy before heavy external promotion of that product page.
5. **Klean Magnesium UPC mismatch** remains unresolved — do not enable affiliate until exact match confirmed.

---

## R. Recommended next phase

**Phase 10 — Deploy + production affiliate confirmation**

1. Push `main` (Phase 9 + Phase 9B report commit)
2. Confirm Vercel Production build has `AMAZON_ASSOCIATE_TAG=suppcheckr-20` (Sensitive)
3. Complete Section I manual live checklist on `www.suppcheckr.com`
4. Update this report's live-check columns to `confirmed` after manual verification
5. Optional: Phase 10A — Amazon Associates click/conversion monitoring (extend Phase 7D cadence to include Vitamin C URLs)

---

## S. Recommended commit message

```
Phase 9B: document affiliate live QA
```
