# Phase 14J — Affiliate Monitoring Checklist

**Date:** 2026-07-07 (executed 2026-07-15)  
**Phase:** 14J — Production affiliate confirmation + ongoing monitoring  
**Site mode:** `prelaunch` (unchanged)  
**Affiliate-enabled product count:** 18 (5 Creatine + 4 Magnesium + 5 Vitamin C + 4 Electrolytes)  
**Tracking tag:** `suppcheckr-20` via `AMAZON_ASSOCIATE_TAG` env var  
**Contact:** [help@suppcheckr.com](mailto:help@suppcheckr.com)

Use this checklist weekly (or after any deploy, affiliate mapping change, or meaningful traffic spike). Do **not** purchase through your own affiliate links.

---

## A. Weekly / monthly checks

### Affiliate link integrity

- [ ] All **enabled** affiliate product pages show **View on Amazon** (not `#amazon-placeholder`)
- [ ] Outbound hrefs include `tag=suppcheckr-20` on every enabled product detail page
- [ ] `rel="sponsored nofollow"` present on Amazon CTAs
- [ ] Link-level **Affiliate link** disclosure appears directly above each Amazon CTA
- [ ] Page-level affiliate disclosure still present in footer on product pages
- [ ] No broken outbound links (404 / unexpected redirects) on enabled or held products
- [ ] `AMAZON_ASSOCIATE_TAG=suppcheckr-20` remains set in **Vercel Production and Preview** (Sensitive env var) — required **at build time**

### Amazon listing match

- [ ] Each mapped ASIN still resolves to the **same product, flavor, and count** reviewed on SuppCheckr
- [ ] No silent product fact, price, score, testing-status, or source-claim changes without a dedicated source-refresh phase
- [ ] Manual dated prices still cited — no live Amazon prices, star ratings, reviews, Q&A, or Amazon product images added

### Held products

- [ ] **Nuun Sport Lemon Lime 10 tablets** — re-check Amazon for an exact single-tube Lemon Lime ASIN (hold until approved mapping phase)
- [ ] **Klean Athlete Klean Magnesium** — re-check hold only if UPC/packaging reconciliation changes (UPC mismatch unresolved)

### Site policy / monetization guardrails

- [ ] Legal pages remain **draft + noindex** until attorney/human approval (`DRAFT_LEGAL_PATHS` in `lib/seo/indexing.ts`)
- [ ] `LegalReviewBanner` still visible on legal pages in prelaunch mode
- [ ] Ads remain disabled (`ads.enabled: false`, `ads.loadScripts: false`)
- [ ] `SITE_MODE` remains `prelaunch` unless explicitly approved for production launch
- [ ] Contact email remains `help@suppcheckr.com`

### Amazon Associates Central (monthly)

- [ ] Log in to [Amazon Associates Central](https://affiliate-program.amazon.com/) — review clicks and conversions
- [ ] Review ordered/shipped items reports for unexpected ASINs
- [ ] Confirm account remains in good standing
- [ ] Do **not** cloak links, send paid ads directly to Amazon affiliate URLs, or incentivize artificial clicks

---

## B. Electrolytes enabled products (4)

Spot-check **product detail pages** on `https://www.suppcheckr.com` (apex redirects to www).

| Product | Detail URL | ASIN | Expected tagged URL |
|---------|------------|------|---------------------|
| LMNT Citrus Salt 30 | `/supplements/electrolytes/products/lmnt-citrus-salt-30` | B07TT8B1JJ | `https://www.amazon.com/dp/B07TT8B1JJ?tag=suppcheckr-20` |
| Liquid I.V. Hydration Multiplier Lemon Lime 16 | `/supplements/electrolytes/products/liquid-iv-hydration-multiplier-lemon-lime-16` | B01IT9NLHW | `https://www.amazon.com/dp/B01IT9NLHW?tag=suppcheckr-20` |
| Ultima Replenisher Lemonade 20 sticks | `/supplements/electrolytes/products/ultima-replenisher-lemonade-20-sticks` | B01IIGOR42 | `https://www.amazon.com/dp/B01IIGOR42?tag=suppcheckr-20` |
| Thorne Catalyte Lemon Lime 30 servings | `/supplements/electrolytes/products/thorne-catalyte-lemon-lime-30-servings` | B07VS6XSN7 | `https://www.amazon.com/dp/B07VS6XSN7?tag=suppcheckr-20` |

**Per enabled URL:**

1. Page loads (`robots`: `index, follow`)
2. CTA reads **View on Amazon**
3. Copy link address → exact ASIN + `tag=suppcheckr-20`
4. No `#amazon-placeholder`
5. Branded placeholder image only — no Amazon product image
6. Manual dated price shown — no live Amazon price

---

## C. Held products (2)

| Product | Detail URL | Hold reason | Expected CTA behavior |
|---------|------------|-------------|----------------------|
| Nuun Sport Lemon Lime 10 tablets | `/supplements/electrolytes/products/nuun-sport-lemon-lime-10-tablets` | No verified exact single-tube Amazon listing | **Check current price at retailer** → `https://nuunlife.com/products/nuun-sport` — no Amazon CTA, no ASIN |
| Klean Athlete Klean Magnesium | `/supplements/magnesium/products/klean-athlete-klean-magnesium` | UPC mismatch (packaging vs Amazon listing) | **Check current price at retailer** → `https://www.kleanathlete.com/klean-magnesium.html` — no Amazon CTA |

**Per held URL:**

- [ ] No **View on Amazon** button on primary purchase CTA
- [ ] No `amazon.com/dp/` in primary CTA href
- [ ] Direct retailer note shown where applicable

---

## D. All affiliate-enabled products (18) — quick scan

Run after cluster changes or quarterly. Full ASIN list in prior phase reports (Phase 7B, 9, 14H).

| Cluster | Count | Hub |
|---------|-------|-----|
| Creatine | 5 | `/supplements/creatine` |
| Magnesium | 4 | `/supplements/magnesium` |
| Vitamin C | 5 | `/supplements/vitamin-c` |
| Electrolytes | 4 | `/supplements/electrolytes` |

**Spot-check one product per cluster** (copy link → confirm tag + ASIN):

- [ ] Creatine: `/supplements/creatine/products/nutricost-creatine-monohydrate-500g` (B00GL2HMES)
- [ ] Magnesium: `/supplements/magnesium/products/nutricost-magnesium-citrate-120` (B08KFHSWZ7)
- [ ] Vitamin C: `/supplements/vitamin-c/products/now-foods-vitamin-c-1000-veg-capsules` (B001AIXCU6)
- [ ] Electrolytes: `/supplements/electrolytes/products/lmnt-citrus-salt-30` (B07TT8B1JJ)

**Programmatic repo check (local):**

```bash
npm run check
```

Unit test `has exactly 18 active affiliate-enabled products` and `all 18 affiliate-enabled products generate tagged Amazon CTAs` in `lib/__tests__/core.test.ts`.

---

## E. Hub / comparison pages (no inline Amazon CTAs)

Affiliate Amazon CTAs render on **product detail pages only**. Hub, compare, and homepage cards link to detail pages.

| Page | URL | Check |
|------|-----|-------|
| Homepage | `/` | Electrolytes section present; no inline Amazon CTAs |
| Electrolytes hub | `/supplements/electrolytes` | Product cards link to detail pages; no inline Amazon CTAs |
| Electrolytes compare | `/supplements/electrolytes/compare` | Table links to detail pages; manual dated prices only |
| LMNT vs Liquid I.V. guide | `/guides/lmnt-vs-liquid-iv` | No inline Amazon CTAs; no risky medical-treatment copy |

---

## F. What to do if a product changes

1. **Do not silently change** product facts, scores, testing notes, or source claims.
2. **Re-check the official label/source first** (brand product page, retailer listing, certification database).
3. **Document source date** in product YAML `updateLog` and source entries.
4. **Update scores only** in a dedicated source-refresh phase — not during affiliate QA.
5. **Disable affiliate** (`affiliate.enabled: false`) if the Amazon listing no longer matches the reviewed SKU (flavor, count, form, or UPC).
6. **Do not add new ASINs** without an explicit mapping phase and approval report.
7. **Nuun:** candidate ASIN found → document as *candidate — needs approval*; do not enable in monitoring pass.
8. **Klean Magnesium:** enable only after UPC reconciliation in a dedicated mapping phase.

---

## G. Production environment reminder

| Item | Requirement |
|------|-------------|
| `AMAZON_ASSOCIATE_TAG` | `suppcheckr-20` in Vercel Production + Preview (Sensitive) |
| Build-time dependency | CTA `href` resolved server-side during `next build` — runtime-only env changes do not fix already-built static pages |
| Missing tag behavior | Fail closed → `#amazon-placeholder` via `buildAmazonLink` / `resolveProductAffiliateCta` |
| Tag in YAML | **Never** — untagged `https://www.amazon.com/dp/{ASIN}` only in product YAML |

See: `config/monetization.ts`, `.env.example`, `content/templates/phase-7c-affiliate-link-hotfix-report-2026-06-30.md`

---

## H. Deploy / post-change verification

After any deploy that touches affiliate code, product YAML, or Vercel env:

1. Confirm Vercel build log succeeded with `AMAZON_ASSOCIATE_TAG` available at build time
2. Re-run Section B (4 Electrolytes URLs) on `www.suppcheckr.com`
3. Re-run Section C (2 held products)
4. Optional: Section E hub/compare spot-check
5. Run `npm run check` and `AMAZON_ASSOCIATE_TAG=suppcheckr-20 npm run build` locally before merge

---

*Maintained as part of Phase 14J. Extend when new clusters gain affiliate mappings.*
