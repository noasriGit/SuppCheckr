# Phase 7A Amazon Associates Activation Report

**Date:** 2026-06-30  
**Phase:** 7A — Amazon Associates disclosure framework activation (per-product links deferred)  
**Git baseline:** `8866913` (Phase 6C) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)

---

## A. Scope and constraints

Phase 7A activates the Amazon Associates **framework** after program approval: global affiliate config, active disclosure copy, link-level disclosure components, env-based tag handling, and guarded validation. Per-product Amazon affiliate links were **not** enabled because no published product YAML contains an exact Amazon product URL/ASIN.

**Constraints preserved:**

| Constraint | Status |
|------------|--------|
| `SITE_MODE` | `prelaunch` |
| Live ad scripts | Disabled |
| Legal pages | Draft + noindex |
| Legal review banners | Present |
| Amazon product images | Not added |
| Amazon reviews/Q&A | Not used |
| Live Amazon prices | Not added |
| Third supplement category | Not started |
| Product scores/facts/prices/testing/statuses | Unchanged |
| Product YAML `affiliate.enabled` | All `false` (deferred) |

---

## B. Pre-activation state

| Control | Before Phase 7A |
|---------|-----------------|
| `affiliate.enabled` | `false` |
| `affiliate.disableGlobally` | `true` |
| `AMAZON_ASSOCIATE_TAG` / `amazonAssociateTag` | blank (local); `suppcheckr-20` in Vercel Production/Preview |
| All 10 published products `affiliate.enabled` | `false` |
| Product CTA behavior | Plain retailer links via `AffiliateButton`; disclosure said links disabled |
| Affiliate disclosure page | Future-tense / not-approved wording |
| Validation | Rejected any `affiliate.enabled: true` on published products |
| Ads | `enabled: false`, `loadScripts: false`, placeholders only |
| Legal pages | Draft + noindex + `LegalReviewBanner` |
| `SITE_MODE` | `prelaunch` |

---

## C. Amazon approval/tag status

| Item | Status |
|------|--------|
| Amazon Associates approval | **Received** |
| Expected Vercel env var | `AMAZON_ASSOCIATE_TAG=suppcheckr-20` (Sensitive, Production + Preview) |
| Tag in runtime code | Read from `process.env.AMAZON_ASSOCIATE_TAG` — **not hardcoded** |
| Tag in product YAML | None |
| Local dev default | Empty (fail-closed unless set in `.env.local`) |

---

## D. Config changes

**File:** `config/monetization.ts`

| Setting | Before | After |
|---------|--------|-------|
| `affiliate.enabled` | `false` | `true` |
| `affiliate.disableGlobally` | `true` | `false` |
| `ads.enabled` | `false` | `false` (unchanged) |
| `ads.loadScripts` | `false` | `false` (unchanged) |

**New helper:** `isAffiliateFrameworkActive()`

**File:** `.env.example` — updated comments to reflect post-approval tag configuration pattern (`yourtag-20` example, not real tag).

---

## E. Disclosure changes

| Location | Change |
|----------|--------|
| `app/affiliate-disclosure/page.tsx` | Active Amazon Associates participation; required “As an Amazon Associate I earn from qualifying purchases”; clarifies not all links are affiliate; editorial independence; no Amazon endorsement |
| `components/trust/TrustModules.tsx` | `AffiliateDisclosure` config-aware for active framework; new `AffiliateLinkDisclosure` for link-level copy |
| `components/layout/SiteChrome.tsx` | Footer references affiliate disclosure page instead of “disabled during prelaunch” |
| `app/editorial-policy/page.tsx` | Updated affiliate section for active program participation |
| `app/about/page.tsx` | Updated editorial independence section; ads still disabled |

Legal pages remain draft/noindex with `LegalReviewBanner`. Product-level and indexable trust-page disclosures are sufficient for public pages.

---

## F. Link-level disclosure behavior

| CTA type | Disclosure |
|----------|------------|
| Active Amazon affiliate link | `AffiliateLinkDisclosure` **before** button: “Affiliate link: SuppCheckr may earn a commission if you buy through this link.” |
| Plain retailer link (current state for all 10 products) | “Direct retailer link — not an affiliate link.” (when framework active) |
| Disabled / missing URL | No false affiliate label |
| Page-level | `AffiliateDisclosure` at bottom of product pages and hub pages |

**`AffiliateButton` logic:** Amazon affiliate link renders only when global framework active **and** `product.affiliate.enabled: true` **and** primary URL is an Amazon domain **and** valid associate tag exists.

---

## G. Product affiliate activation result

**Per-product Amazon links enabled:** **None** (deferred to Phase 7B)

All 10 published products retain `affiliate.enabled: false`. Current CTAs remain direct brand/retailer links.

| Product | Primary retailer | Why not enabled |
|---------|------------------|-----------------|
| Nutricost Creatine Monohydrate 500 g | nutricost.com | No Amazon URL in product YAML |
| Optimum Nutrition Micronized Creatine 600 g | vitacost.com | No Amazon URL in product YAML |
| Klean Athlete Klean Creatine | kleanathlete.com | No Amazon URL in product YAML |
| NOW Sports Creatine Monohydrate Capsules 120 | vitacost.com | No Amazon URL in product YAML |
| BulkSupplements Creatine Monohydrate 1 kg | bulksupplements.com | No Amazon URL in product YAML |
| Klean Athlete Klean Magnesium 90 caps | kleanathlete.com | No Amazon URL in product YAML |
| Nutricost Magnesium Citrate 120 caps | nutricost.com | No Amazon URL in product YAML |
| NOW Foods Magnesium Malate 1000 mg 180 tablets | nowfoods.com | No Amazon URL in product YAML |
| Pure Encapsulations Magnesium citrate/malate 180 caps | vitacost.com | No Amazon URL in product YAML |
| Nature Made Magnesium Oxide 250 mg 100 tablets | target.com | No Amazon URL in product YAML |

**Do not commit `affiliate.enabled: true` until exact Amazon product URLs are verified and added to product YAML.**

---

## H. Exact Amazon target/source status

No published product YAML contains `amazon.com` or `/dp/` URLs. Research docs mention one alternate Amazon link (not in product YAML):

| Product | Research note only | ASIN |
|---------|-------------------|------|
| BulkSupplements Creatine Monohydrate 1 kg | `content/templates/creatine-shortlist-research-2026-06-26.md` | B00E9M4XEE |

**Phase 7B requires:** For each of the 10 published products, verify exact SKU-matched Amazon product page URL (or ASIN), add as primary or secondary `retailers` entry with `retailerId: amazon`, then enable `affiliate.enabled: true` selectively with an `updateLog` entry noting affiliate activation only.

Do not guess ASINs. Do not use search-result links. Confirm variant/SKU match before mapping.

---

## I. Validation/test changes

**`lib/validation/publishedContent.ts`**

- New `validateProductAffiliate()` — enforced for all products via `scripts/validate-content.ts`
- Published products may have `affiliate.enabled: true` only when global config active, valid Amazon retailer URL present, no hardcoded `tag=` in YAML
- Draft/archived/placeholder products cannot have `affiliate.enabled: true`

**`lib/affiliate/isAmazonUrl.ts`**

- `isAmazonUrl()` — domain guard for link generation
- `isValidAssociateTag()` — rejects empty/placeholder tags

**`lib/affiliate/buildAmazonLink.ts`**

- Fail-closed unless Amazon URL + valid tag + global enabled

**Tests updated:** `lib/__tests__/core.test.ts`, `lib/__tests__/validation.test.ts`

---

## J. Legal/indexing decision

- Legal pages remain **draft + noindex**
- `LegalReviewBanner` remains on legal pages
- Active affiliate disclosures visible on indexable product and trust pages
- `/affiliate-disclosure` updated with active Amazon Associate language but remains draft/noindex until attorney review

---

## K. Ads/SITE_MODE constraints preserved

| Control | Value |
|---------|-------|
| `SITE_MODE` | `prelaunch` |
| `ads.enabled` | `false` |
| `ads.loadScripts` | `false` |
| `ads.showPlaceholders` | `true` |

---

## L. Product content untouched confirmation

- No product scores, ranks, claims, testing statuses, prices, facts, citations, or publication statuses changed
- No product YAML affiliate flags set to `true`
- No Amazon images, reviews, Q&A, or live prices added

---

## M. Remaining manual checks after deploy

- [ ] Confirm Vercel Production/Preview has `AMAZON_ASSOCIATE_TAG=suppcheckr-20` (Sensitive)
- [ ] Spot-check product pages show “Direct retailer link — not an affiliate link” near CTAs
- [ ] Spot-check `/affiliate-disclosure`, `/about`, `/editorial-policy` active disclosure copy
- [ ] Confirm footer affiliate disclosure link works
- [ ] Confirm no live ad scripts load (Network tab)
- [ ] Confirm legal pages still show draft banner and are noindex
- [ ] After Phase 7B: test one enabled product page for tagged Amazon URL + link-level disclosure

---

## N. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** (29 tests, 0 validation errors) |
| `npm run build` | **Pass** (67 static routes) |

---

## O. Recommended commit message

```
Phase 7A: activate Amazon Associates disclosure framework
```

---

## Recommended next phase

**Phase 7B — Exact Amazon product mapping**

1. Research and verify exact Amazon product page URL/ASIN for each of the 10 published products (SKU/variant match)
2. Add verified Amazon URLs to product YAML `retailers` (or switch primary where appropriate)
3. Set `affiliate.enabled: true` per product with `updateLog` entry
4. Deploy and verify tagged links + link-level disclosures on live site
5. Optional: add second retailer row (keep brand link + add Amazon affiliate) where UX warrants

**Do not enable per-product affiliate until Phase 7B mapping is complete and validated.**
