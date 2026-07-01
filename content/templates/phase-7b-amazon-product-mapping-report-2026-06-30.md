# Phase 7B Amazon Product Mapping Report

**Date:** 2026-06-30  
**Phase:** 7B — exact Amazon product mapping and selective affiliate CTA activation  
**Git baseline:** `3fc742f` (Phase 7A) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)

---

## A. Scope and constraints

Phase 7B maps all 10 published creatine and magnesium products to exact Amazon product URLs (ASINs), enables `affiliate.enabled: true` only for verified exact matches, and wires purchase CTAs to tagged Amazon links while preserving brand reference links and manual price citations.

**Constraints preserved:**

| Constraint | Status |
|------------|--------|
| `SITE_MODE` | `prelaunch` |
| Live ad scripts | Disabled |
| Legal pages | Draft + noindex |
| Amazon product images | Not added |
| Amazon reviews/Q&A/ratings | Not used |
| Live Amazon prices | Not added |
| Third supplement category | Not started |
| Product scores/facts/prices/testing/statuses | Unchanged |
| Tag in YAML | Not hardcoded (`AMAZON_ASSOCIATE_TAG` env only) |

---

## B. Pre-work confirmation

| Check | Result |
|-------|--------|
| Phase 7A report present | `content/templates/phase-7a-amazon-associates-activation-report-2026-06-30.md` |
| Phase 6C report present | `content/templates/phase-6c-pre-application-walkthrough-report-2026-06-30.md` |
| Creatine cluster published | Yes (5 products) |
| Magnesium cluster published | Yes (5 products) |
| Contact email | `help@suppcheckr.com` (`config/site.ts`) |
| Working tree at start | Clean on `main` @ `3fc742f` |

---

## C. Mapping research summary

Full per-product research: `content/templates/phase-7b-amazon-product-mapping-research-2026-06-30.md`

| Match outcome | Count |
|---------------|-------|
| exact → enable | 9 |
| do not enable | 0 |
| needs manual review (not activated) | 1 |

Verification used Amazon listing metadata (title, count/size, form, MPN/UPC where listed). No Amazon reviews, Q&A, ratings, images, or live prices used.

---

## D. Products enabled with Amazon affiliate links (9/10)

| Product | ASIN | Amazon URL |
|---------|------|------------|
| Nutricost Creatine Monohydrate 500 g | B00GL2HMES | https://www.amazon.com/dp/B00GL2HMES |
| Optimum Nutrition Micronized Creatine 600 g | B002DYIZEO | https://www.amazon.com/dp/B002DYIZEO |
| Klean Athlete Klean Creatine | B01LYFAGXI | https://www.amazon.com/dp/B01LYFAGXI |
| NOW Sports Creatine 750 mg 120 caps | B0018OADEA | https://www.amazon.com/dp/B0018OADEA |
| BulkSupplements Creatine 1 kg | B00E9M4XEE | https://www.amazon.com/dp/B00E9M4XEE |
| Nutricost Magnesium Citrate 120 caps | B08KFHSWZ7 | https://www.amazon.com/dp/B08KFHSWZ7 |
| NOW Magnesium Malate 1000 mg 180 tabs | B0013OW0J6 | https://www.amazon.com/dp/B0013OW0J6 |
| Pure Encapsulations Magnesium citrate/malate 180 caps | B0017HSR1Y | https://www.amazon.com/dp/B0017HSR1Y |
| Nature Made Magnesium Oxide 250 mg 100 tabs | B01CJGXMU2 | https://www.amazon.com/dp/B01CJGXMU2 |

Each enabled product YAML adds a secondary `retailers` entry (`retailerId: amazon`, untagged URL) and sets `affiliate.enabled: true`.

---

## E. Products not enabled and why

| Product | Candidate ASIN | Reason |
|---------|----------------|--------|
| Klean Athlete Klean Magnesium 90 caps | B086K54TZH (research only) | **Conservative hold:** Review locks UPC **310539035521**; Amazon listing shows UPC **310539979075**. MPN KA202599-90 and label specs (90 veg caps, 120 mg glycinate) match, but Phase 7B requires exact SKU confidence — UPC conflict without independent reconciliation is insufficient to activate. Manual verification required before `affiliate.enabled: true`. |

This deferral is intentional. The product retains primary retailer CTA behavior (`Check current price at retailer` → kleanathlete.com).

---

## F. Amazon URL/ASIN source notes

- URLs stored as untagged `https://www.amazon.com/dp/{ASIN}` — tag applied at runtime via `buildAmazonLink()` + `AMAZON_ASSOCIATE_TAG`.
- Primary retailer entries (brand/retailer sites used for manual price citations) remain `isPrimary: true`.
- Amazon entries are secondary (`isPrimary: false`).
- BulkSupplements ASIN B00E9M4XEE was previously noted in creatine research docs; confirmed CM1KG / 1 kg / 200 servings before enablement.

---

## G. Product CTA behavior

| State | CTA label | Link target | Disclosure |
|-------|-----------|-------------|------------|
| `affiliate.enabled: true` + valid tag | **View on Amazon** | Tagged Amazon URL from secondary retailer entry | `AffiliateLinkDisclosure` before button |
| Missing/invalid tag | View on Amazon (unavailable) | Placeholder `#amazon-placeholder` | Disclosure + unavailable note |
| `affiliate.enabled: false` | Check current price at retailer | Primary retailer URL | Direct retailer note when framework active |

**Code changes:**

- `config/monetization.ts` — `ctaLabel` updated to `"View on Amazon"`
- `lib/affiliate/getProductPurchaseUrl.ts` — resolves Amazon URL when affiliate enabled, else primary retailer
- `app/supplements/[category]/products/[productSlug]/page.tsx` — uses `getProductPurchaseUrl(product)`

Manual price section unchanged; still cites original retailer price observation dates.

---

## H. Brand/company link behavior

- Brand name on product pages continues linking to internal `/brands/{slug}` profile (not Amazon).
- Primary retailer URLs in YAML remain brand/retailer sites for price citation context.
- Purchase CTA only routes to Amazon when `affiliate.enabled: true`.

---

## I. Disclosure behavior

- Link-level: **Affiliate link — SuppCheckr may earn a commission if you buy through this link.** (before active Amazon CTA)
- Page-level: `AffiliateDisclosure` unchanged from Phase 7A
- Footer/site chrome: active Amazon Associates disclosure language preserved
- Legal pages: remain draft/noindex with `LegalReviewBanner`

---

## J. Validation/test changes

**New:** `lib/affiliate/getProductPurchaseUrl.ts`

**Tests updated:**

- `lib/__tests__/core.test.ts` — tag replacement (no duplicate), CTA label, purchase URL resolution
- `lib/__tests__/validation.test.ts` — rejects pre-tagged Amazon URLs in YAML

**Existing guards unchanged:**

- `validateProductAffiliate()` — draft products cannot enable affiliate; requires Amazon retailer URL; rejects `tag=` in YAML
- `buildAmazonLink()` — fail-closed without valid tag; Amazon domain only

---

## K. Legal/indexing status

- Legal pages: draft + noindex (unchanged)
- Creatine cluster: published + indexable (unchanged)
- Magnesium cluster: published + indexable (unchanged)
- No third category started

---

## L. Monetization/SITE_MODE/ad constraints

| Control | Value |
|---------|-------|
| `SITE_MODE` | `prelaunch` |
| `ads.enabled` | `false` |
| `ads.loadScripts` | `false` |
| `affiliate.enabled` (global) | `true` |
| `AMAZON_ASSOCIATE_TAG` | Env-only (`suppcheckr-20` in Vercel Production/Preview) |

---

## M. Product content unchanged confirmation

No changes to: scores, testing statuses, label facts, manual prices, rankings, claims, pros/cons, or product images. Enabled products: Amazon retailer entry + `affiliate.enabled: true` + updateLog. Klean Magnesium: affiliate deferred only (no Amazon retailer in YAML).

---

## N. Manual post-deploy checks

1. Open each of **9 enabled** product pages on Production — confirm **View on Amazon** CTA with affiliate disclosure above button.
2. Confirm **Klean Athlete Klean Magnesium** shows direct retailer CTA (not Amazon affiliate).
3. Inspect outbound link includes `tag=suppcheckr-20` (not hardcoded in page source YAML).
4. Confirm brand name still links to brand profile, not Amazon.
5. Confirm manual price block still shows original retailer observation (not Amazon live price).
6. Spot-check 2–3 ASINs on Amazon.com match expected size/count/form.
7. Confirm legal pages still show draft banner and `noindex`.
8. Confirm ad placeholders visible but no live ad scripts.

---

## O. Validation results

See terminal output from `npm run check` and `npm run build` in Phase 7B implementation session.

---

## P. Recommended commit message

```
Phase 7B: map exact Amazon product links
```

---

## Recommended next phase

**Phase 7B manual follow-up — Klean Magnesium ASIN verification:** Reconcile UPC 310539035521 (review lock) vs 310539979075 (Amazon/Vitacost) using brand packaging, NSF listing 1281622 cross-reference, or official distributor data. Only enable B086K54TZH if UPC/SKU identity is confirmed exact.

**Phase 7C — Post-affiliate deploy verification:** Run manual post-deploy checks above on Production/Preview for the 9 active mappings, monitor Amazon Associates dashboard for tagged link clicks, and confirm no placeholder affiliate CTAs appear when `AMAZON_ASSOCIATE_TAG` is set in Vercel.

**Phase 8 (when ready):** Legal counsel review of draft legal pages before indexability; separate from affiliate mapping.
