# Phase 14J — Production Affiliate Confirmation Report

**Date:** 2026-07-07 (executed 2026-07-15)  
**Phase:** 14J — Production affiliate confirmation + monitoring checklist  
**Git baseline:** `d2e30ae` (Phase 14I) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)  
**Recommended commit message:** `Phase 14J: confirm production affiliate QA`

---

## A. Scope and constraints

Phase 14J confirms live production behavior after Phase 14I deployment, documents production environment requirements for `AMAZON_ASSOCIATE_TAG`, runs local validation, and creates an ongoing affiliate monitoring checklist. QA/report phase only — no new mappings, no product data changes.

**Constraints preserved:**

| Constraint | Status |
|------------|--------|
| `SITE_MODE` | `prelaunch` |
| Live ad scripts | Disabled |
| Legal pages | Draft + noindex |
| New Amazon ASIN mappings | **None added** |
| Nuun mapping | **Not mapped** |
| Amazon images/reviews/Q&A/ratings/live prices | **Not added** |
| Product facts/prices/scores/testing/source claims | **Unchanged** |
| Creatine/Magnesium/Vitamin C affiliate mappings | **Unchanged** |
| Klean Magnesium | **Held back** |
| Contact email | `help@suppcheckr.com` |

---

## B. Files created/changed

| File | Change |
|------|--------|
| `content/templates/phase-14j-affiliate-monitoring-checklist-2026-07-07.md` | Created — ongoing weekly/monthly affiliate monitoring |
| `content/templates/phase-14j-production-affiliate-confirmation-report-2026-07-07.md` | Created (this report) |

**No product YAML, ASIN, affiliate mapping, config, or test code changes.**

---

## C. Production environment note

| Item | Detail |
|------|--------|
| Required Vercel env var | `AMAZON_ASSOCIATE_TAG=suppcheckr-20` (Sensitive; Production + Preview) |
| Documented in | `.env.example`, `config/monetization.ts`, Phase 7A/7C/14I reports |
| Tag in product YAML | **Never** — untagged `https://www.amazon.com/dp/{ASIN}` only |
| CTA resolution | Server/build-time via `resolveProductAffiliateCta` → `buildAmazonLink` |
| Build-time dependency | CTA `href` baked into static HTML during `next build`; runtime-only env changes do not retroactively fix pages |
| Missing/invalid tag | Fail closed → `href="#amazon-placeholder"` (not untagged Amazon links) |
| Client boundary | `AffiliateButton` receives pre-resolved `href` — does not read `AMAZON_ASSOCIATE_TAG` in browser |
| CTA label | `View on Amazon` (`config/monetization.ts`) |
| Link `rel` | `sponsored nofollow` |
| Live confirmation | Production pages on `www.suppcheckr.com` show tagged Amazon CTAs — confirms tag was present at last Vercel build |

**Operator action:** After any Vercel env change, trigger a new Production deploy so affiliate `href`s rebuild with the tag.

---

## D. Live URL QA results

**Method:** HTTP fetch of `https://www.suppcheckr.com/...` with redirect following (apex `suppcheckr.com` → `www.suppcheckr.com` 308). HTML inspected for CTA label, href, tag, rel, robots meta, and placeholder behavior.

**Status:** **Live verification complete** on `www.suppcheckr.com` (2026-07-15).

**Note:** Use `www.suppcheckr.com` as the canonical live host for manual QA; bare-domain URLs redirect.

---

## E. Enabled Electrolytes affiliate QA table

| Product | ASIN | Expected tagged URL | Live CTA status | Disclosure status | rel status | Placeholder / image / review / rating check |
|---------|------|---------------------|-----------------|-------------------|------------|-----------------------------------------------|
| LMNT Citrus Salt 30 | B07TT8B1JJ | `https://www.amazon.com/dp/B07TT8B1JJ?tag=suppcheckr-20` | **Pass** — View on Amazon; exact href match | **Pass** — Affiliate link above CTA | **Pass** — `sponsored nofollow` | **Pass** — no placeholder; branded placeholder image; no Amazon reviews/ratings/live prices |
| Liquid I.V. Hydration Multiplier Lemon Lime 16 | B01IT9NLHW | `https://www.amazon.com/dp/B01IT9NLHW?tag=suppcheckr-20` | **Pass** | **Pass** | **Pass** | **Pass** |
| Ultima Replenisher Lemonade 20 sticks | B01IIGOR42 | `https://www.amazon.com/dp/B01IIGOR42?tag=suppcheckr-20` | **Pass** | **Pass** | **Pass** | **Pass** |
| Thorne Catalyte Lemon Lime 30 servings | B07VS6XSN7 | `https://www.amazon.com/dp/B07VS6XSN7?tag=suppcheckr-20` | **Pass** | **Pass** | **Pass** | **Pass** |

**Additional live checks (all 4 enabled pages):**

| Check | Result |
|-------|--------|
| Page loads (HTTP 200) | **Pass** |
| `robots` meta `index, follow` | **Pass** |
| No `#amazon-placeholder` in primary CTA | **Pass** |
| `tag=suppcheckr-20` in primary CTA href | **Pass** |

**Local production-style QA:** `AMAZON_ASSOCIATE_TAG=suppcheckr-20 npm run build` — same resolver behavior as Phase 14I (45 unit tests pass).

---

## F. Held product QA

### Nuun Sport Lemon Lime 10 tablets

| Check | Live result |
|-------|-------------|
| Page loads | **Pass** (`index, follow`) |
| No **View on Amazon** primary CTA | **Pass** |
| No `tag=suppcheckr-20` on page | **Pass** |
| No `#amazon-placeholder` | **Pass** |
| Primary CTA → `https://nuunlife.com/products/nuun-sport` | **Pass** |
| `affiliate.enabled: false` in YAML | **Pass** (repo) |

### Klean Athlete Klean Magnesium

| Check | Live result |
|-------|-------------|
| Page loads | **Pass** (`index, follow`) |
| No **View on Amazon** primary CTA | **Pass** |
| No `tag=suppcheckr-20` on page | **Pass** |
| No `#amazon-placeholder` | **Pass** |
| Primary CTA → `https://www.kleanathlete.com/klean-magnesium.html` | **Pass** |
| `affiliate.enabled: false` in YAML | **Pass** (repo) |

---

## G. Hub/comparison live QA

| Page | Live result |
|------|-------------|
| `https://www.suppcheckr.com/` | **Pass** — Electrolytes section present; no inline Amazon CTAs; page-level affiliate disclosure in footer |
| `https://www.suppcheckr.com/supplements/electrolytes` | **Pass** — Electrolytes hub copy; product cards; no inline **View on Amazon** |
| `https://www.suppcheckr.com/supplements/electrolytes/compare` | **Pass** — comparison table links to detail pages; no inline Amazon CTAs; `index, follow` |
| `https://www.suppcheckr.com/guides/lmnt-vs-liquid-iv` | **Pass** — loads; no inline Amazon CTAs; `index, follow` |

**Design confirmed:** Amazon affiliate CTAs appear on product detail pages only. Hub/compare/homepage route users to detail pages.

---

## H. Monitoring checklist created

**File:** `content/templates/phase-14j-affiliate-monitoring-checklist-2026-07-07.md`

Covers:

- Weekly/monthly affiliate URL, ASIN, disclosure, and env checks
- All 4 Electrolytes enabled products with ASINs and expected URLs
- Nuun and Klean Magnesium held-product re-check procedures
- All-18 spot-check cadence + programmatic repo verification
- Hub/comparison guardrails
- Product-change protocol (disable affiliate if listing drifts; no silent fact changes)
- Production env and deploy verification steps

---

## I. Affiliate count confirmation

| Cluster | Affiliate-enabled count |
|---------|-------------------------|
| Creatine | 5 |
| Magnesium | 4 |
| Vitamin C | 5 |
| Electrolytes | 4 |
| **Total** | **18** |

Verified via `lib/__tests__/core.test.ts` (`has exactly 18 active affiliate-enabled products`) and YAML grep at Phase 14J start.

**Held (not in count):** Nuun Sport Lemon Lime 10 tablets; Klean Athlete Klean Magnesium.

---

## J. Confirmation no new ASINs/Amazon URLs added

Phase 14J added **zero** new ASIN mappings and **zero** Amazon retailer URLs. All mappings unchanged from Phase 14H/14I baseline (`d2e30ae`).

---

## K. Confirmation no product facts/prices/scores/testing/source claims changed

No product YAML edits in Phase 14J. Report and monitoring checklist only.

---

## L. Confirmation existing Creatine/Magnesium/Vitamin C mappings unchanged

No edits to Creatine (5), Magnesium (4 active), or Vitamin C (5) product YAML. Programmatic all-18 scan in `core.test.ts` unchanged and passing.

---

## M. Confirmation Electrolytes remains published/indexable

| Entity | Status |
|--------|--------|
| Electrolytes category | Published; live hub `index, follow` |
| All 5 Electrolytes products | Published; live detail pages `index, follow` |
| Electrolytes comparison | Published; live `index, follow` |
| Electrolytes guides | Published (e.g. LMNT vs Liquid I.V. `index, follow`) |

---

## N. Confirmation legal pages remain draft/noindex

| Path | Live `robots` meta |
|------|-------------------|
| `/privacy-policy` | `noindex, nofollow` |
| `/terms-of-use` | `noindex, nofollow` |
| `/medical-disclaimer` | `noindex, nofollow` |
| `/affiliate-disclosure` | `noindex, nofollow` |
| `/advertising-policy` | `noindex, nofollow` |

`DRAFT_LEGAL_PATHS` in `lib/seo/indexing.ts` unchanged. `shouldShowLegalReviewBanners()` active in prelaunch mode.

---

## O. Confirmation ads disabled and SITE_MODE prelaunch

| Control | Value |
|---------|-------|
| `SITE_MODE` | `prelaunch` (default in `config/site.ts`) |
| `ads.enabled` | `false` |
| `ads.loadScripts` | `false` |
| Contact email | `help@suppcheckr.com` |

---

## P. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — typecheck, eslint, 45 vitest tests, content validation 0 errors |
| `npm run build` (with `AMAZON_ASSOCIATE_TAG=suppcheckr-20`) | **Pass** — static pages generated successfully |
| Live `www.suppcheckr.com` Electrolytes affiliate QA | **Pass** — 4/4 enabled products |
| Live held product QA | **Pass** — Nuun + Klean Magnesium |
| Live hub/comparison QA | **Pass** |

---

## Q. Remaining warnings/risks

1. **`AMAZON_ASSOCIATE_TAG` must be set at Vercel build time.** Missing tag at build → `#amazon-placeholder` on all affiliate products until redeploy.
2. **Use `www.suppcheckr.com` for live QA** — apex domain 308-redirects to www.
3. **Nuun remains held** — no exact single-tube Amazon ASIN verified; periodic re-search only; do not enable without approval phase.
4. **Klean Magnesium UPC mismatch** unresolved — hold continues until dedicated reconciliation phase.
5. **Affiliate CTAs are product-detail only** — hub/compare QA must not expect inline Amazon buttons on cards.
6. **Manual dated prices** can drift from retailer MSRP — monitor during weekly checks; refresh only in source-refresh phases.
7. **Legal pages still draft/noindex** — production launch blocked until attorney review.

---

## R. Recommended next phase

**Phase 15 — Next category planning OR legal review completion** (team choice):

1. **Option A — Next supplement cluster:** Begin Phase 15A research/blueprint for the next published category (per Phase 13B decision memo).
2. **Option B — Legal readiness:** Attorney review of draft legal pages; no `SITE_MODE` switch until explicit approval.
3. **Ongoing:** Run `phase-14j-affiliate-monitoring-checklist-2026-07-07.md` weekly; monthly Amazon Associates Central review.
4. **Periodic:** Nuun single-tube Amazon re-search (document candidates only).

---

## S. Recommended commit message

```
Phase 14J: confirm production affiliate QA
```

---

*Phase 14J complete. Live production confirms four Electrolytes affiliate CTAs with `tag=suppcheckr-20`; Nuun and Klean remain held; monitoring checklist created; no mapping or product data changes.*
