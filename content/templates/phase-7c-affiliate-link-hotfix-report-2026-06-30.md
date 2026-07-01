# Phase 7C Amazon Affiliate Link Hotfix Report

**Date:** 2026-06-30  
**Phase:** 7C — fix Amazon affiliate link generation (server-side CTA resolution)  
**Git baseline:** `6af8641` (Phase 7B) on `main`  
**Recommended commit message:** `Phase 7C: fix Amazon affiliate link generation`

---

## A. Root cause

`AffiliateButton` is a `"use client"` component that imported `buildAmazonLink` from `@/lib/affiliate/buildAmazonLink`. That helper reads `process.env.AMAZON_ASSOCIATE_TAG` via `config/monetization.ts` (`amazonAssociateTag`).

Private env vars are **not** exposed to the browser bundle. At runtime in production, the client re-evaluated `buildAmazonLink()` with an empty tag, hit the intentional fail-closed path, and rendered `href="#amazon-placeholder"` even though Vercel had `AMAZON_ASSOCIATE_TAG=suppcheckr-20` configured for the deployment.

The product page server component already called `getProductPurchaseUrl(product)` server-side, but only passed the **untagged** Amazon URL into the client button, which then attempted tag injection on the client.

---

## B. Files changed

| File | Change |
|------|--------|
| `lib/affiliate/productAffiliateCta.ts` | **New** — shared CTA type + retailer label constant (no env access) |
| `lib/affiliate/resolveProductAffiliateCta.ts` | **New** — server/build-time CTA resolver; calls `buildAmazonLink` with `AMAZON_ASSOCIATE_TAG` |
| `components/monetization/AffiliateButton.tsx` | Renders pre-resolved `cta` prop only; removed `buildAmazonLink` / `monetizationConfig` imports |
| `app/supplements/[category]/products/[productSlug]/page.tsx` | Computes `affiliateCta` via `resolveProductAffiliateCta()` before passing to `AffiliateButton` |
| `lib/__tests__/core.test.ts` | Added resolver + client-boundary regression tests |

**Unchanged:** product YAML, scores, prices, testing data, `config/monetization.ts`, `buildAmazonLink.ts`, `getProductPurchaseUrl.ts` logic.

---

## C. Env read location (before / after)

| Layer | Before | After |
|-------|--------|-------|
| Server page (`page.tsx`) | Untagged Amazon URL only | Full tagged href via `resolveProductAffiliateCta` |
| Client `AffiliateButton` | Read tag via `buildAmazonLink` → **broken** | Receives final `href` prop — **no env access** |
| `buildAmazonLink` | Called client-side | Server/build-time only (via resolver) |

---

## D. Before / after URL behavior

| Scenario | Before (live) | After (fix) |
|----------|---------------|-------------|
| Affiliate enabled + tag set at build | `#amazon-placeholder` (client fail-closed) | `https://www.amazon.com/dp/{ASIN}?tag=suppcheckr-20` |
| Affiliate enabled + tag missing | `#amazon-placeholder` | `#amazon-placeholder` (intentional fail-closed) |
| Affiliate disabled (Klean Magnesium) | Direct Klean Athlete URL | Direct Klean Athlete URL (unchanged) |
| CTA label (affiliate active) | “View on Amazon” (but broken href) | “View on Amazon” with working href |

---

## E. Example generated URL with tag

Nutricost Creatine Monohydrate 500g (`B00GL2HMES`):

```
https://www.amazon.com/dp/B00GL2HMES?tag=suppcheckr-20
```

Verified locally with `AMAZON_ASSOCIATE_TAG=suppcheckr-20` via `resolveProductAffiliateCta()`.

---

## F. Confirmation — 9 products active

| Product | `affiliate.enabled` |
|---------|---------------------|
| BulkSupplements Creatine Monohydrate 1kg | `true` |
| Klean Athlete Klean Creatine | `true` |
| NOW Sports Creatine Monohydrate Capsules 120 | `true` |
| Nutricost Creatine Monohydrate 500g | `true` |
| Optimum Nutrition Micronized Creatine 600g | `true` |
| Nature Made Magnesium Oxide 250mg | `true` |
| NOW Foods Magnesium Malate 1000mg | `true` |
| Nutricost Magnesium Citrate 120 | `true` |
| Pure Encapsulations Magnesium Citrate Malate 180 | `true` |

All receive `variant: "amazon"` CTA with tagged href when `AMAZON_ASSOCIATE_TAG` is present at build time.

---

## G. Confirmation — Klean Magnesium inactive

| Product | `affiliate.enabled` | CTA behavior |
|---------|---------------------|--------------|
| Klean Athlete Klean Magnesium | `false` | Direct retailer link to `https://www.kleanathlete.com/klean-magnesium.html`; label “Check current price at retailer” |

---

## H. Confirmation — no product facts/prices/scores/testing changed

No product YAML files were modified in Phase 7C. Scores, supplement facts, pricing citations, testing notes, and publication statuses are unchanged from Phase 7B.

---

## I. Confirmation — ads disabled

From `config/monetization.ts`:

- `ads.enabled: false`
- `ads.loadScripts: false`
- `showPlaceholders: true` (labeled boxes only)

---

## J. Confirmation — SITE_MODE prelaunch

From `config/site.ts`: default `siteMode` remains `prelaunch` (`process.env.SITE_MODE ?? "prelaunch"`).

---

## K. Confirmation — legal pages draft/noindex

From `lib/seo/indexing.ts`, `DRAFT_LEGAL_PATHS` includes privacy, terms, medical disclaimer, affiliate disclosure, and advertising policy — all noindex in prelaunch via `shouldNoindexStaticPath()`.

---

## L. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — typecheck, eslint, 39 tests, content validation |
| `AMAZON_ASSOCIATE_TAG=suppcheckr-20 npm run build` | **Pass** — 67 static pages generated |
| `resolveProductAffiliateCta()` with tag | Tagged Amazon href, `isPlaceholder: false` |
| `resolveProductAffiliateCta()` without tag | `#amazon-placeholder`, `isPlaceholder: true` |
| Client boundary test | `AffiliateButton.tsx` contains no `buildAmazonLink`, `AMAZON_ASSOCIATE_TAG`, or `monetizationConfig` |

New regression tests in `lib/__tests__/core.test.ts`:

- Enabled product + tag → href contains `tag=suppcheckr-20`
- Enabled product + missing tag → fail-closed placeholder
- Klean Magnesium → direct retailer, not Amazon
- Non-affiliate products → “Check current price at retailer”
- Client component does not read private env

---

## M. Vercel redeploy instructions

1. Merge/commit Phase 7C to `main`.
2. In Vercel → Project → Settings → Environment Variables, confirm:
   - `AMAZON_ASSOCIATE_TAG=suppcheckr-20` (Sensitive)
   - Scoped to **Production** and **Preview**
   - Available at **Build time** (required for SSG product pages)
3. Trigger a **Production redeploy** (Deployments → ⋯ → Redeploy) so static pages regenerate with tagged hrefs baked in.
4. Post-deploy smoke test on any affiliate-enabled product page:
   - CTA text: **View on Amazon**
   - Link target includes `tag=suppcheckr-20`
   - Not `#amazon-placeholder`
5. Spot-check Klean Magnesium: direct Klean Athlete link, not Amazon affiliate.

---

## Summary

**Root cause:** Client component called `buildAmazonLink`, which could not access `AMAZON_ASSOCIATE_TAG` in the browser.

**Fix:** Resolve the final affiliate CTA (tagged href, rel, label, placeholder state) in the server page layer; pass it to `AffiliateButton` as a plain prop.

**Example URL:** `https://www.amazon.com/dp/B00GL2HMES?tag=suppcheckr-20`

**Affiliate status:** 9 active / 1 inactive (Klean Magnesium)

**Validation:** `npm run check` pass; tagged-env build pass.
