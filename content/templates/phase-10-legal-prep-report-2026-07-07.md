# Phase 10 — Legal Page Prep Report

**Date:** 2026-07-07  
**Phase:** 10 — legal page review/finalization prep  
**Git baseline:** `8bd2960` (Phase 9B) on `main`  
**Recommended commit message:** `Phase 10: prepare legal pages for review`

---

## A. Scope and constraints

Phase 10 reviewed and polished legal/trust pages for attorney/human review readiness. This phase did **not** publish legal pages, enable ads, switch site mode, or change monetization/product data.

**Honored constraints:**

| Constraint | Status |
|------------|--------|
| Legal pages remain draft/noindex | **Pass** |
| `SITE_MODE` remains `prelaunch` | **Pass** |
| Ads remain disabled | **Pass** |
| Affiliate framework/mappings unchanged | **Pass** |
| No new Amazon ASINs | **Pass** |
| No product facts/prices/scores/testing changes | **Pass** |
| Klean Magnesium remains held back | **Pass** |
| No legal compliance guarantees added | **Pass** |

---

## B. Files changed

| File | Change type |
|------|-------------|
| `app/privacy-policy/page.tsx` | Copy polish — accounts, affiliate clicks, ads status |
| `app/terms-of-use/page.tsx` | Copy polish — affiliate active, ads disabled, HCP cautions |
| `app/medical-disclaimer/page.tsx` | Copy polish — kidney/liver/allergy cautions |
| `app/affiliate-disclosure/page.tsx` | Copy polish — Amazon wording, held-back mapping, star ratings |
| `app/advertising-policy/page.tsx` | Copy polish — affiliate vs ads separation |
| `app/about/page.tsx` | Trust consistency — Vitamin C, selective affiliate links |
| `app/contact/page.tsx` | Trust consistency — affiliate/ads status |
| `app/methodology/page.tsx` | Trust consistency — affiliate language |
| `app/source-standards/page.tsx` | Trust consistency — vitamin C price example |
| `app/editorial-policy/page.tsx` | Date update |
| `app/corrections-policy/page.tsx` | Date update |
| `app/accessibility/page.tsx` | Date update |
| `components/trust/TrustModules.tsx` | Inline medical disclaimer — kidney/liver/allergy |
| `content/templates/phase-10-legal-review-checklist-2026-07-07.md` | **Created** |
| `content/templates/phase-10-legal-prep-report-2026-07-07.md` | **Created** |

**Not modified:** `lib/seo/indexing.ts`, `config/monetization.ts`, `config/site.ts`, product YAML, affiliate mappings, ads config, `SITE_MODE`.

---

## C. Legal pages reviewed

1. Privacy Policy (`/privacy-policy`)
2. Terms of Use (`/terms-of-use`)
3. Medical Disclaimer (`/medical-disclaimer`)
4. Affiliate Disclosure (`/affiliate-disclosure`)
5. Advertising Policy (`/advertising-policy`)

---

## D. Trust pages reviewed

1. Editorial Policy (`/editorial-policy`)
2. Methodology (`/methodology`)
3. Source Standards (`/source-standards`)
4. Corrections Policy (`/corrections-policy`)
5. Accessibility (`/accessibility`)
6. Contact (`/contact`)
7. About (`/about`)

---

## E. Summary of major copy updates

1. **Removed stale “affiliate links disabled” language** from Privacy Policy, Terms, Contact, and Methodology — replaced with accurate selective Amazon affiliate status while ads remain disabled.
2. **Privacy Policy** — added no-accounts/no-checkout/no-contact-form section; separated affiliate click behavior from future ad tracking.
3. **Medical Disclaimer + inline component** — added kidney disease, liver disease, and allergy cautions.
4. **Affiliate Disclosure** — updated Amazon Associates statement; clarified not every product has affiliate links; added held-back mapping language; added star ratings to excluded Amazon evidence list.
5. **Advertising Policy** — added explicit separation between display ads and affiliate links.
6. **About** — added Vitamin C to published clusters; clarified selective affiliate availability.
7. **Source Standards** — added vitamin C price-per example.
8. **Dates** — updated `lastUpdated` to 2026-07-07 on all touched legal/trust pages.

---

## F. Privacy Policy findings

| Finding | Resolution |
|---------|------------|
| Stale affiliate-disabled language | **Fixed** — affiliate clicks described accurately |
| Implied contact form exists | **Fixed** — email-only clarified |
| No accounts/checkout statement | **Added** |
| Vercel analytics disclosure | **Already present** — attorney to confirm sufficiency |
| Ads disabled | **Confirmed** — accurate |
| Draft/noindex status | **Preserved** |

---

## G. Terms findings

| Finding | Resolution |
|---------|------------|
| Stale affiliate-disabled language | **Fixed** |
| Affiliate + ads cross-links | **Updated** |
| Healthcare consult list | **Expanded** (kidney/liver/allergies) |
| No governing law section | **Open** — attorney review |
| Limitation of liability | **Retained** — attorney review |
| Draft/noindex status | **Preserved** |

---

## H. Medical Disclaimer findings

| Finding | Resolution |
|---------|------------|
| Kidney/liver/allergy cautions | **Added** |
| Disease treatment disclaimers | **Already strong** |
| Emergency guidance | **Already present** |
| No professional relationship | **Already present** |
| Draft/noindex status | **Preserved** |

---

## I. Affiliate Disclosure findings

| Finding | Resolution |
|---------|------------|
| Amazon Associates active language | **Already present** — wording updated |
| Amazon required disclosure phrase | **Updated** to third-person SuppCheckr wording — attorney to confirm Amazon OA compliance |
| Not every product has affiliate link | **Added** |
| Held-back mapping (UPC caution) | **Added** generically |
| No Amazon images/reviews/ratings/Q&A/live prices | **Confirmed** |
| Editorial independence | **Already present** |
| Draft/noindex status | **Preserved** |

---

## J. Advertising Policy findings

| Finding | Resolution |
|---------|------------|
| Live ads disabled | **Accurate** |
| Placeholder behavior | **Accurate** |
| Future ad principles | **Already present** |
| Affiliate vs ads separation | **Added** |
| Draft/noindex status | **Preserved** |

---

## K. Editorial/trust consistency findings

| Item | Status |
|------|--------|
| Creatine, Magnesium, Vitamin C published | **Reflected on About** |
| Product image placeholders | **Documented on Editorial Policy / Methodology / About** |
| 14 Amazon affiliate CTAs (not named in legal copy) | **Consistent with selective affiliate language** |
| Klean Magnesium held back | **Generic held-back mapping language in Affiliate Disclosure** |
| Testing statuses (verified/claimed/unknown) | **Documented on Methodology / Source Standards** |
| No “Best Overall” / “Best for Everyone” | **Documented on Methodology** |
| Contact email `help@suppcheckr.com` | **Verified across pages** |

---

## L. Noindex/draft legal status confirmation

| Check | Result |
|-------|--------|
| `DRAFT_LEGAL_PATHS` unchanged | **Pass** — 5 legal paths |
| Legal pages use `requiresLegalReview={true}` | **Pass** |
| `LegalReviewBanner` renders on legal pages | **Pass** |
| `buildPageMetadata` → `shouldNoindexStaticPath` | **Pass** — legal paths noindex |
| Legal pages excluded from `getSitemapStaticPaths()` | **Pass** |

---

## M. Confirmation no legal pages were made indexable

**Confirmed.** `DRAFT_LEGAL_PATHS` and `INDEXABLE_STATIC_PAGES` were not modified. No legal page metadata was changed to force indexability.

---

## N. Confirmation ads remain disabled

From `config/monetization.ts`:

| Setting | Value |
|---------|-------|
| `ads.enabled` | `false` |
| `ads.loadScripts` | `false` |
| `ads.showPlaceholders` | `true` |

**Not modified in Phase 10.**

---

## O. Confirmation SITE_MODE remains prelaunch

From `config/site.ts`: `siteMode: (process.env.SITE_MODE ?? "prelaunch")`

**Not modified in Phase 10.**

---

## P. Confirmation affiliate framework/mappings unchanged

From `config/monetization.ts`:

| Setting | Value |
|---------|-------|
| `affiliate.enabled` | `true` |
| `affiliate.disableGlobally` | `false` |

No product YAML or affiliate mapping files modified.

---

## Q. Confirmation no product facts/prices/scores/testing statuses changed

**Confirmed.** No files under `content/products/` or scoring config were modified.

---

## R. Confirmation Klean Magnesium remains held back

**Confirmed.** No affiliate mapping changes. Affiliate disclosure describes held-back mapping generically without activating Klean Magnesium.

---

## S. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — typecheck, lint, 42 tests, content validation 0 errors |
| `npm run build` | **Pass** — production build completed successfully |

---

## T. Open human/legal review items

1. Amazon Associates disclosure wording — first-person “I earn” vs “SuppCheckr earns”
2. Terms governing law / dispute resolution section
3. Terms limitation-of-liability acceptability
4. Privacy cookie/consent requirements for Vercel Analytics + affiliate outbound clicks
5. Medical disclaimer sufficiency (standalone + inline)
6. FTC affiliate disclosure placement on live product pages
7. Future advertising policy before ad activation
8. Accessibility statement jurisdiction-specific requirements
9. Legal entity / operator identification on legal pages
10. `help@suppcheckr.com` mailbox monitoring confirmation

See full checklist: `content/templates/phase-10-legal-review-checklist-2026-07-07.md`

---

## U. Recommended next phase

**Phase 11 — Attorney/human legal review**

1. Share draft legal pages + Phase 10 checklist with attorney or qualified reviewer.
2. Resolve open questions (Amazon wording, governing law, privacy cookies, liability).
3. Test `help@suppcheckr.com` mailbox.
4. After explicit approval only: legal publication phase (remove `DRAFT_LEGAL_PATHS` entries, finalize banners, re-validate SEO).

**Do not** conflate attorney review with production launch or ad activation — those remain separate approvals.

---

## V. Recommended commit message

```
Phase 10: prepare legal pages for review
```
