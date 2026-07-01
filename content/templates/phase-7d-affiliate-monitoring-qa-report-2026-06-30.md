# Phase 7D Affiliate Monitoring & Conversion QA Report

**Date:** 2026-06-30  
**Phase:** 7D — affiliate monitoring and conversion QA  
**Git baseline:** `98a66d1` (Phase 7C) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)  
**Recommended commit message:** `Phase 7D: document affiliate monitoring QA`

---

## A. Current affiliate state

| Item | Status |
|------|--------|
| Amazon Associates approval | **Received** (Phase 7A) |
| Tracking tag | `suppcheckr-20` |
| Env variable | `AMAZON_ASSOCIATE_TAG` (Vercel Production + Preview; Sensitive) |
| Global affiliate framework | `affiliate.enabled: true`, `disableGlobally: false` |
| Active Amazon affiliate product CTAs | **9** (5 creatine + 4 magnesium) |
| Held-back product | **1** — Klean Athlete Klean Magnesium (UPC mismatch) |
| CTA label (affiliate) | `View on Amazon` |
| CTA label (non-affiliate) | `Check current price at retailer` |
| Link-level disclosure | Yes — `AffiliateLinkDisclosure` above affiliate CTA |
| Tag in product YAML | **None** — untagged Amazon URLs only; tag applied at build/runtime via env |
| Ads | `enabled: false`, `loadScripts: false`, placeholders only |
| `SITE_MODE` | `prelaunch` |
| Legal pages | Draft + noindex + `LegalReviewBanner` |
| Contact email | `help@suppcheckr.com` |
| Third supplement category | Not started |

**Prior phase reports:**

- Phase 7A: `content/templates/phase-7a-amazon-associates-activation-report-2026-06-30.md`
- Phase 7B: `content/templates/phase-7b-amazon-product-mapping-report-2026-06-30.md`
- Phase 7C: `content/templates/phase-7c-affiliate-link-hotfix-report-2026-06-30.md`

**Repo verification (Phase 7D Task 1):**

| Check | Result |
|-------|--------|
| 9 published products `affiliate.enabled: true` | **Pass** |
| Klean Athlete Klean Magnesium `affiliate.enabled: false` | **Pass** |
| Amazon URLs untagged in YAML | **Pass** — no `tag=` in any product YAML |
| Final tag from `AMAZON_ASSOCIATE_TAG` env | **Pass** — via `buildAmazonLink` / `resolveProductAffiliateCta` |
| Server-side CTA resolution (Phase 7C fix) | **Pass** — client `AffiliateButton` receives pre-resolved `href` |
| Amazon images/reviews/Q&A/ratings/live prices | **Not added** |
| Brand/company links remain official/internal | **Pass** — not routed through Amazon affiliate |

---

## B. Active product CTA checklist

Manual live-check status starts as **pending** until verified on production after deploy.

| Product | Product URL | ASIN | CTA label | Expected tag | Disclosure near CTA | Live check |
|---------|-------------|------|-----------|--------------|---------------------|------------|
| Nutricost Creatine Monohydrate 500 g | `/supplements/creatine/products/nutricost-creatine-monohydrate-500g` | B00GL2HMES | View on Amazon | suppcheckr-20 | Yes | pending |
| Optimum Nutrition Micronized Creatine 600 g | `/supplements/creatine/products/optimum-nutrition-micronized-creatine-600g` | B002DYIZEO | View on Amazon | suppcheckr-20 | Yes | pending |
| Klean Athlete Klean Creatine | `/supplements/creatine/products/klean-athlete-klean-creatine` | B01LYFAGXI | View on Amazon | suppcheckr-20 | Yes | pending |
| NOW Sports Creatine Monohydrate Capsules 120 | `/supplements/creatine/products/now-sports-creatine-monohydrate-capsules-120` | B0018OADEA | View on Amazon | suppcheckr-20 | Yes | pending |
| BulkSupplements Creatine Monohydrate 1 kg | `/supplements/creatine/products/bulksupplements-creatine-monohydrate-1kg` | B00E9M4XEE | View on Amazon | suppcheckr-20 | Yes | pending |
| Nutricost Magnesium Citrate 120 caps | `/supplements/magnesium/products/nutricost-magnesium-citrate-120` | B08KFHSWZ7 | View on Amazon | suppcheckr-20 | Yes | pending |
| NOW Foods Magnesium Malate 180 tablets | `/supplements/magnesium/products/now-foods-magnesium-malate-1000mg-180-tablets` | B0013OW0J6 | View on Amazon | suppcheckr-20 | Yes | pending |
| Pure Encapsulations Magnesium (citrate/malate) 180 caps | `/supplements/magnesium/products/pure-encapsulations-magnesium-citrate-malate-180` | B0017HSR1Y | View on Amazon | suppcheckr-20 | Yes | pending |
| Nature Made Magnesium Oxide 250 mg 100 tablets | `/supplements/magnesium/products/nature-made-magnesium-oxide-250mg-100-tablets` | B01CJGXMU2 | View on Amazon | suppcheckr-20 | Yes | pending |

**Live-check procedure (per product):**

1. Open product URL on `https://suppcheckr.com`.
2. Confirm CTA reads **View on Amazon**.
3. Confirm disclosure text appears directly above the button.
4. Right-click CTA → Copy link address → confirm `tag=suppcheckr-20` in URL.
5. Confirm link opens Amazon product page for the expected ASIN.
6. Update **Live check** column to `confirmed` or note issue.

---

## C. Held-back product

**Klean Athlete Klean Magnesium**

| Item | Detail |
|------|--------|
| Product URL | `/supplements/magnesium/products/klean-athlete-klean-magnesium` |
| Reason held back | UPC mismatch — review packaging UPC `310539035521` vs Amazon listing UPC `310539979075` |
| Deferred Amazon ASIN | B086K54TZH (not activated) |
| Current CTA behavior | Direct retailer link → `https://www.kleanathlete.com/klean-magnesium.html` |
| CTA label | `Check current price at retailer` |
| Note shown | `Direct retailer link — not an affiliate link.` |
| `affiliate.enabled` | `false` |

**Requirement before activation:**

Reconcile UPCs using brand packaging, NSF Certified for Sport listing, distributor data, or another reliable source. Do **not** enable affiliate until an exact product match is confirmed.

---

## D. Amazon Associates monitoring checklist

Use this weekly (or after meaningful traffic spikes):

- [ ] Log in to [Amazon Associates Central](https://affiliate-program.amazon.com/) and review **clicks** for the period.
- [ ] Review **ordered items** and **shipped items** reports.
- [ ] Track progress toward **3 qualified sales** within Amazon’s required initial period (if still in new-account window).
- [ ] Do **not** purchase through your own affiliate links.
- [ ] Do **not** ask close friends/family to make artificial purchases.
- [ ] Do **not** offer misleading incentives tied to affiliate clicks.
- [ ] Do **not** cloak links in a way that hides the Amazon destination.
- [ ] Do **not** send paid ads directly to Amazon affiliate URLs — promote SuppCheckr content pages instead.
- [ ] Confirm site disclosures remain accurate (`/affiliate-disclosure`, link-level disclosure near CTAs).
- [ ] Confirm `AMAZON_ASSOCIATE_TAG` remains set in Vercel Production and Preview.

---

## E. Traffic / conversion QA checklist

**Pages to promote first (content-first, not raw Amazon links):**

| Priority | URL | Why |
|----------|-----|-----|
| High | `/supplements/creatine/compare` | Comparison intent; multiple affiliate CTAs in context |
| High | `/supplements/magnesium/compare` | Same for magnesium cluster |
| High | `/supplements/creatine` | Category hub + product discovery |
| High | `/supplements/magnesium` | Category hub + product discovery |
| Medium | Individual product reviews | Match organic search intent per SKU |

**On-page QA (each promoted page):**

- [ ] Affiliate disclosure appears near active Amazon CTA (`AffiliateLinkDisclosure`).
- [ ] CTA opens Amazon in a new tab with `rel="sponsored nofollow"`.
- [ ] Page does **not** claim “best price” or show live Amazon pricing.
- [ ] Manual prices include last-checked date and “check current price at retailer” framing.
- [ ] Brand/company links go to official brand sites or internal SuppCheckr pages — **not** Amazon.
- [ ] Product image placeholder does not imply an official product photo.
- [ ] No “Best Overall” or “Best for Everyone” language.
- [ ] Sitewide affiliate disclosure on product pages (`AffiliateDisclosure` module) reflects active program.

---

## F. Compliance reminders

| Rule | Status |
|------|--------|
| No Amazon product images | Enforced |
| No Amazon reviews/Q&A/ratings as evidence | Enforced |
| No live Amazon prices (unless compliant via approved API/rules) | Enforced — manual dated prices only |
| No active ad scripts | Enforced |
| No disease-treatment claims | Enforced |
| No “Best Overall” / “Best for Everyone” | Enforced |
| Legal pages draft + noindex | Enforced |
| Attorney review before production legal/indexing changes | Recommended |
| `SITE_MODE` stays prelaunch until separate approval | Enforced |

---

## G. Weekly monitoring template

Copy this table into a new row each week:

| Week starting | Amazon clicks | Ordered items | Shipped items | Qualified sales count | Top clicked pages | Issues found | Changes made | Notes |
|---------------|---------------|---------------|---------------|----------------------|-------------------|--------------|--------------|-------|
| YYYY-MM-DD | | | | | | | | |
| | | | | | | | | |
| | | | | | | | | |

**Suggested notes fields:**

- Associates Central report date range used
- Any CTA/disclosure regressions spotted
- Traffic source (organic, social, email — no paid-to-Amazon)
- Klean Magnesium UPC research progress

---

## H. Manual post-deploy checklist

Run after any deploy touching monetization, product pages, or env vars:

- [ ] Spot-check **3 live Amazon buttons** (one creatine, one magnesium, one comparison-linked product).
- [ ] Copy link address on each — confirm `tag=suppcheckr-20`.
- [ ] Open **Klean Athlete Klean Magnesium** — confirm direct retailer CTA (not Amazon affiliate).
- [ ] Visit `/affiliate-disclosure` — confirm active-program wording and legal review banner.
- [ ] Confirm Vercel env `AMAZON_ASSOCIATE_TAG=suppcheckr-20` (Production + Preview).
- [ ] Confirm no ad scripts load (DevTools Network — no AdSense/third-party ad requests).
- [ ] Confirm sitemap/indexing unchanged for creatine and magnesium clusters.
- [ ] Confirm legal pages still noindex (view page source / `robots` meta).
- [ ] Confirm contact page still shows `help@suppcheckr.com`.

---

## I. Next actions

1. **Continue monitoring** — use Section G weekly template and Associates Central reports.
2. **Promote content pages** — comparison and category hubs before individual Amazon URLs.
3. **Complete manual live checks** — update Section B “Live check” column to `confirmed`.
4. **Reconcile Klean Magnesium later** — UPC verification before enabling affiliate.
5. **Consider third category** only after affiliate QA is stable and traffic baseline exists.
6. **Do not enable ads** until a separate approved phase.
7. **Do not switch `SITE_MODE` to production** without separate approval.
8. **Schedule legal review** before making legal pages indexable.

---

## J. Phase 7D code changes (if any)

| File | Change |
|------|--------|
| `content/templates/phase-7d-affiliate-monitoring-qa-report-2026-06-30.md` | **New** — this monitoring/QA packet |
| `lib/__tests__/core.test.ts` | Added repo-level assertion: 9 active affiliate products, Klean Magnesium inactive, untagged YAML URLs |

**Unchanged:** product YAML facts/prices/scores/testing/statuses, monetization config, affiliate resolver logic, disclosure copy (reviewed — no UX changes required).

---

## K. Validation summary

| Check | Expected | Result |
|-------|----------|--------|
| `npm run check` | Pass | See Phase 7D Cursor report |
| `AMAZON_ASSOCIATE_TAG=suppcheckr-20 npm run build` | Pass | See Phase 7D Cursor report |
| `SITE_MODE` | `prelaunch` | Pass |
| Ads disabled | Yes | Pass |
| Legal pages draft/noindex | Yes | Pass |
| 9 affiliate-active products | Yes | Pass |
| Klean Magnesium inactive | Yes | Pass |
| Tag env-based | Yes | Pass |

---

## L. Warnings / risks

- **New-account window:** Amazon may require a minimum number of qualified sales within an initial period — monitor Associates Central and avoid artificial traffic.
- **Self-referral:** Never click your own affiliate links for test purchases.
- **UPC hold:** Klean Magnesium remains a compliance risk if enabled prematurely — keep deferred until exact match.
- **Legal pages:** Affiliate disclosure page is publicly readable but still draft/noindex; attorney review recommended before treating as final.
- **Local dev:** Without `AMAZON_ASSOCIATE_TAG` in `.env.local`, CTAs fail closed to placeholder — expected; production relies on Vercel env.

---

## M. Recommended next phase

**Phase 7E (optional):** Manual production live-check pass — confirm all 9 CTAs on `suppcheckr.com`, log Associates Central baseline, and mark Section B live-check column `confirmed`.

**Later phases (separate approval):** Klean Magnesium UPC reconciliation, third category research, ads program, production legal indexing, `SITE_MODE` production switch.
