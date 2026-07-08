# Phase 11B — Legal Gap Cleanup Report

**Date:** 2026-07-07  
**Phase:** 11B — legal gap cleanup before attorney review  
**Git baseline:** `f130d94` (Phase 11) on `main`  
**Site mode:** `prelaunch` (unchanged)  
**Live site:** https://www.suppcheckr.com

**Purpose:** Tighten legal and trust draft pages around known gaps before external attorney/human review. This is **not** a legal publication phase. **No legal compliance is claimed.**

---

## A. Scope and constraints

Phase 11B addressed conservative cleanup items identified in Phase 10/11 review packets:

- Amazon Associates exact wording
- FTC-style affiliate disclosure clarity
- Operator/legal entity draft wording
- Governing law / jurisdiction placeholder
- Privacy/cookie/analytics/affiliate tracking clarity
- Medical disclaimer strength and inline placement review
- Accessibility wording softening
- Future advertising language while ads remain disabled
- Legal review packet/external summary updates
- Mailbox monitoring reminder for [help@suppcheckr.com](mailto:help@suppcheckr.com)

**Explicit non-actions (unchanged):**

- No legal publication or noindex flip
- No removal of `LegalReviewBanner` / `requiresLegalReview`
- No `SITE_MODE` switch to production
- No ad enablement
- No affiliate mapping or product data changes
- No new Amazon ASINs, images, reviews, ratings, Q&A, or live prices

---

## B. Files changed

| File | Change |
|------|--------|
| `app/affiliate-disclosure/page.tsx` | Exact Amazon sentence, operator section, brand clarification |
| `app/terms-of-use/page.tsx` | Operator section, exact Amazon sentence, governing law placeholder |
| `app/privacy-policy/page.tsx` | Operator section, no-account/checkout clarity, affiliate tracking, cookie review note |
| `app/medical-disclaimer/page.tsx` | Kidney stones, iron overload/hemochromatosis cautions |
| `app/advertising-policy/page.tsx` | Before-ads-launch privacy/cookie review requirement |
| `app/contact/page.tsx` | Operator section (draft) |
| `app/accessibility/page.tsx` | Softened WCAG wording, feedback/improvement language, attorney review note |
| `components/trust/TrustModules.tsx` | Strengthened `MedicalDisclaimer`; exact Amazon phrase in `AffiliateDisclosure` |
| `content/templates/phase-11-human-legal-review-packet-2026-07-07.md` | Phase 11B changes reflected; open questions updated |
| `content/templates/phase-11-external-legal-review-summary-2026-07-07.md` | Phase 11B changes reflected; mailbox reminder |
| `content/templates/phase-11b-legal-gap-cleanup-report-2026-07-07.md` | This report (new) |

**Not changed:** `lib/seo/indexing.ts`, `config/monetization.ts`, `config/site.ts`, product YAML, affiliate mappings, `components/monetization/AffiliateButton.tsx` (placement already adequate).

---

## C. Amazon Associates wording changes

**Exact sentence added** on Affiliate Disclosure page and in `AffiliateDisclosure` component:

> As an Amazon Associate I earn from qualifying purchases.

**Brand clarification added** (Affiliate Disclosure page and Terms):

> SuppCheckr may also earn commissions from qualifying purchases through other affiliate links. This does not change the price you pay.

Preserved:

- Not every reviewed product has an affiliate link
- Amazon reviews, star ratings, Q&A, images, and live prices are not used as editorial evidence
- Affiliate compensation does not determine scores/rankings
- Retailer controls availability, pricing, shipping, and returns

---

## D. Affiliate disclosure placement review

**Reviewed — no code changes required:**

| Layer | Component | Placement |
|-------|-----------|-----------|
| Per-button | `AffiliateLinkDisclosure` in `AffiliateButton` | Above Amazon CTA — "Affiliate link — SuppCheckr may earn a commission…" |
| Page-level | `AffiliateDisclosure` | Bottom of product, guide, compare, category, ingredient, brand pages |
| Full policy | `/affiliate-disclosure` | Linked from `AffiliateDisclosure` ("Learn more") and footer |
| Retailer (non-affiliate) | `AffiliateButton` retailer variant | "Direct retailer link — not an affiliate link." (e.g. Klean Magnesium) |

- CTA label remains **"View on Amazon"** (`config/monetization.ts`)
- Klean Athlete Klean Magnesium correctly uses direct retailer CTA without Amazon affiliate wording

---

## E. Operator/legal entity wording changes

**Draft operator section added** to:

- Privacy Policy
- Terms of Use
- Affiliate Disclosure
- Contact

**Provisional wording:**

> SuppCheckr is a website operated by NV Digital Consulting LLC. For questions, contact [help@suppcheckr.com](mailto:help@suppcheckr.com).

**Attorney review note included:** confirm whether business mailing address, state of formation, or registered agent should be listed before publication.

No business address added (none in config).

---

## F. Terms governing law / jurisdiction placeholder

**New section** in Terms of Use: **"Governing law and venue — attorney review required"**

Draft placeholder states governing law, venue, and dispute-resolution terms are intentionally marked for legal review. Explicitly labeled **not final legal language**.

Attorney to confirm: applicable law, jurisdiction, venue, arbitration, class-action waiver.

---

## G. Privacy/cookie/analytics/affiliate tracking changes

- Clarified SuppCheckr does **not currently** provide user accounts, checkout, or direct sales
- Email contact at `help@suppcheckr.com` stated explicitly
- Affiliate outbound links may route to third-party retailers (e.g. Amazon); retailers collect data under their own policies
- Vercel Analytics / server logs language preserved
- Future ads may require additional privacy/cookie updates — preserved
- CCPA/CPRA/GDPR: no full compliance program claimed — preserved
- **Cookie banner review note added:** attorney to confirm consent tooling before future ads or based on analytics/affiliate tracking

---

## H. Medical disclaimer / inline disclaimer review

**Standalone page (`/medical-disclaimer`):**

- Added kidney stones and iron overload / hemochromatosis (Vitamin C relevance) to condition list
- Existing language already covered: not medical advice, no diagnose/treat/cure/prevent, emergencies, no professional relationship

**Inline `MedicalDisclaimer` component** (used on product, guide, compare, category, ingredient, brand, methodology pages):

- Strengthened to include: informational/educational only, not medical advice, does not diagnose/treat/cure/prevent disease, no individualized health advice
- Expanded cautions: pregnancy, nursing, under 18, medications, kidney/liver disease, allergies, kidney stones, iron overload
- Added emergency guidance

No duplicate noisy disclaimers added beyond existing page-level modules.

---

## I. Accessibility wording changes

**Before:** "aims to meet WCAG 2.1 AA accessibility standards"

**After:** "aims to make the site accessible and uses WCAG 2.1 AA as a reference point where practical"

Added:

- Users can report issues at [help@suppcheckr.com](mailto:help@suppcheckr.com)
- SuppCheckr will review feedback and work on reasonable improvements
- Attorney review note for jurisdiction-specific language, target standard, and response timeframe

Avoided: "fully compliant," "guaranteed accessible," "meets WCAG 2.1 AA"

---

## J. Advertising Policy changes

- Display ads remain disabled — unchanged
- Future ads/sponsorship principles preserved
- Editorial independence from advertising preserved
- Affiliate links separate from display ads — preserved
- **Added:** before ads launch, privacy/cookie/ad-partner language must be reviewed/updated in Privacy Policy and Advertising Policy

---

## K. Legal review packet/external summary updates

Updated:

- `content/templates/phase-11-human-legal-review-packet-2026-07-07.md` — Phase 11B summary, open questions marked where addressed, mailbox monitoring reminder
- `content/templates/phase-11-external-legal-review-summary-2026-07-07.md` — reflects Phase 11B changes and draft operator status

Attorney/human review requirement **not removed**. No legal compliance claims added.

---

## L. Remaining attorney/human review questions

1. Confirm Amazon exact phrase placement is adequate (page + per-link + component)
2. Approve or revise NV Digital Consulting LLC operator wording; decide on mailing address/state/registered agent
3. Finalize governing law, jurisdiction, venue, arbitration, class-action waiver in Terms
4. Decide cookie banner/consent tooling before future ads or for current analytics/affiliate clicks
5. Confirm medical disclaimer strength (standalone + inline)
6. Confirm privacy rights language for applicable jurisdictions
7. Confirm accessibility statement for jurisdiction; add response timeframe if needed
8. Confirm limitation-of-liability and third-party retailer language in Terms
9. Confirm before-ads-launch privacy/cookie language plan
10. Monitor [help@suppcheckr.com](mailto:help@suppcheckr.com) for reviewer correspondence

---

## M. Confirmation legal pages remain draft/noindex

- `DRAFT_LEGAL_PATHS` unchanged in `lib/seo/indexing.ts`
- Legal pages excluded from `INDEXABLE_STATIC_PAGES` and sitemap
- `buildPageMetadata()` applies `robots: { index: false, follow: false }` to legal paths

---

## N. Confirmation LegalReviewBanner/requiresLegalReview remains

- All five legal pages retain `requiresLegalReview` on `LegalPageLayout`
- `LegalReviewBanner` renders when `shouldShowLegalReviewBanners()` is true (prelaunch mode)

---

## O. Confirmation ads remain disabled

- `config/monetization.ts`: `ads.enabled: false`, `ads.loadScripts: false`
- No ad scripts added

---

## P. Confirmation SITE_MODE remains prelaunch

- `config/site.ts`: `siteMode` defaults to `prelaunch`

---

## Q. Confirmation affiliate mappings/product data unchanged

- No product YAML edits
- No new ASINs
- 14 Amazon affiliate CTAs unchanged (5 Creatine, 4 Magnesium, 5 Vitamin C)
- Klean Athlete Klean Magnesium remains held back (`affiliate.enabled: false`)

---

## R. Confirmation Klean Magnesium remains held back

- Direct retailer CTA only; `showDirectRetailerNote` when affiliate framework active
- No Amazon affiliate link

---

## S. Validation results

| Check | Result |
|-------|--------|
| `npm run check` | **Pass** (typecheck, eslint, 42 tests, content validation 0 errors) |
| `npm run build` | **Pass** |
| Legal pages draft/noindex | **Confirmed** — `DRAFT_LEGAL_PATHS` unchanged |
| LegalReviewBanner | **Confirmed** — all five legal pages retain `requiresLegalReview` |
| Ads disabled | **Confirmed** — `ads.enabled: false`, `ads.loadScripts: false` |
| SITE_MODE prelaunch | **Confirmed** — `config/site.ts` default `prelaunch` |
| Affiliate mappings unchanged | **Confirmed** — no product YAML edits |
| Contact email | **Confirmed** — `help@suppcheckr.com` in `config/site.ts` |

---

## T. Warnings/risks

- Operator identity (NV Digital Consulting LLC) is **draft** — attorney must approve before publication
- Governing law section is a **placeholder** — not enforceable legal terms
- Amazon "I earn" phrasing is site-level; attorney should confirm FTC conspicuous placement
- Cookie/consent requirements may apply before ads or in some jurisdictions — not resolved
- Accessibility statement no longer overcommits but also does not certify compliance
- Legal pages remain noindex — users and crawlers should not treat them as final

---

## U. Recommended next phase

**Phase 12 — External attorney/human legal review**

1. Send external summary and human review packet to attorney/reviewer
2. Monitor [help@suppcheckr.com](mailto:help@suppcheckr.com)
3. Collect written feedback on open questions (Sections L)
4. Do **not** publish legal pages until explicit approval phase

After attorney approval: separate **legal publication phase** (remove noindex, banners, add governing law final text, etc.)

---

## V. Recommended commit message

```
Phase 11B: tighten legal drafts before review
```

---

**Report prepared by:** SuppCheckr Phase 11B  
**Contact:** [help@suppcheckr.com](mailto:help@suppcheckr.com)
