# Phase 11C — Final Legal Draft Tightening Report

**Date:** 2026-07-07  
**Phase:** 11C — final legal draft tightening before publication review  
**Git baseline:** `8ab826d` (Phase 11B) on `main`  
**Site mode:** `prelaunch` (unchanged)  
**Live site:** https://www.suppcheckr.com

**Purpose:** Implement remaining obvious legal-draft improvements before attorney/human review and before any legal publication phase. This is **not** a legal publication phase. **No legal compliance is claimed.**

---

## A. Scope and constraints

Phase 11C addressed final draft-tightening items before external attorney/human review:

- Operator identity wording (Virginia LLC, Prince William County — no street address)
- Virginia governing law / Prince William County venue draft
- Privacy Policy: current data practices table, retention, children, U.S. audience, security/breach language
- Medical/minors language
- Recall/formulation/price monitoring caveat
- Corrections/update cadence cleanup
- Brand submissions/free products/sponsorship policy
- Affiliate disclosure placement confirmation (documentation only)
- Phase 11 review packet and external summary updates

**Explicit non-actions (unchanged):**

- No legal publication or noindex flip
- No removal of `LegalReviewBanner` / `requiresLegalReview`
- No `SITE_MODE` switch to production
- No ad enablement
- No affiliate mapping or product data changes
- No new Amazon ASINs, images, reviews, ratings, Q&A, or live prices
- No residential street address published

---

## B. Files changed

| File | Change |
|------|--------|
| `app/privacy-policy/page.tsx` | Operator identity, U.S. audience, current data practices table, children, retention, security/breach |
| `app/terms-of-use/page.tsx` | Operator identity, U.S. audience, minors, product information limitations, Virginia governing law draft |
| `app/medical-disclaimer/page.tsx` | Minors language (parent/guardian + qualified healthcare professional) |
| `app/affiliate-disclosure/page.tsx` | Operator identity, brand submissions/sponsorship future-disclosure language |
| `app/advertising-policy/page.tsx` | Brand submissions/sponsorship future-disclosure language |
| `app/contact/page.tsx` | Operator identity |
| `app/editorial-policy/page.tsx` | Brand/sponsorship policy, update cadence language |
| `app/corrections-policy/page.tsx` | Update cadence, no fixed schedule, sponsorship clarification |
| `app/methodology/page.tsx` | Product information limitations, brand/sponsorship policy, update cadence |
| `app/source-standards/page.tsx` | Recall/formulation monitoring caveat |
| `content/templates/phase-11-human-legal-review-packet-2026-07-07.md` | Phase 11C summary, open questions updated |
| `content/templates/phase-11-external-legal-review-summary-2026-07-07.md` | Phase 11C changes reflected |
| `content/templates/phase-11c-final-legal-draft-tightening-report-2026-07-07.md` | This report (new) |

**Not changed:** `lib/seo/indexing.ts`, `config/monetization.ts`, `config/site.ts`, product YAML, affiliate mappings, `components/monetization/AffiliateButton.tsx`, `components/trust/TrustModules.tsx`.

---

## C. Operator identity update

**Updated wording** on Privacy Policy, Terms of Use, Affiliate Disclosure, and Contact:

> SuppCheckr is operated by NV Digital Consulting LLC, a Virginia limited liability company based in Prince William County, Virginia. For questions, contact [help@suppcheckr.com](mailto:help@suppcheckr.com).

**Attorney review note included:** confirm whether a separate public mailing address, registered agent address, or state filing detail should be included before publication. No residential street address is listed.

**Not added:** Haymarket street address or any residential address.

---

## D. Virginia governing law / Prince William County venue draft

**Terms of Use — "Governing law and venue"** now includes draft language:

> These Terms are governed by the laws of the Commonwealth of Virginia, without regard to conflict-of-law principles. Subject to any legally required alternative forum, any dispute arising from or relating to these Terms or the Site will be brought in the state or federal courts located in or serving Prince William County, Virginia.

**Attorney review note below:** NV Digital Consulting LLC should confirm whether arbitration, class-action waiver, jury-trial waiver, informal dispute-resolution procedures, or other dispute-resolution terms should be added before publication.

**Not added:** arbitration, class-action waiver, jury-trial waiver, or informal dispute-resolution process as final terms.

---

## E. Privacy Policy updates

### Current data practices table

Added plain-language table covering: user accounts, checkout/direct sales, contact form, email contact, analytics (Vercel/hosting/server logs), affiliate links, display ads (disabled), sensitive health information, comments/reviews/quizzes, and third-party product purchases.

### Retention

Conservative retention language for emails, correction requests, support messages, analytics, and operational records. Email correspondence may be retained as ordinary business records. No invented fixed retention periods.

### Children

Updated to: general adult audience; not directed to children under 13; no knowing collection from children under 13.

### U.S.-focused audience

Added to Overview: operated from the United States, primarily intended for U.S. users; non-U.S. users responsible for understanding local laws.

### Security / breach notification

Split from combined retention section. Reasonable safeguards language; no perfect-security claim; breach notices as required by applicable law.

---

## F. Medical/minors update

**Medical Disclaimer** and **Terms of Use** now include:

> Supplement decisions for anyone under 18 should be made with a parent or guardian and a qualified healthcare professional.

Does not conflict with existing pregnancy/nursing/under-18 cautions in Medical Disclaimer.

---

## G. Recall/formulation/price monitoring caveat

Added to **Terms of Use** (Product information limitations), **Methodology**, and **Source Standards**:

> SuppCheckr does not guarantee real-time monitoring of recalls, warnings, formulation changes, label changes, retailer availability, or pricing changes. Users should check the current product label and consult the manufacturer, retailer, or a qualified healthcare professional before purchasing or using a supplement.

Non-alarmist tone; factual limitation statement.

---

## H. Corrections/update cadence cleanup

**Editorial Policy**, **Corrections Policy**, and **Methodology** updated:

> We may update product pages when we identify material label, sourcing, testing, price, affiliate, or availability changes. Dates shown on pages reflect the last documented review, source check, or price check where applicable.

**Corrections Policy** also states: no promise of immediate response times or fixed update schedules.

Users can still report corrections via [help@suppcheckr.com](mailto:help@suppcheckr.com).

---

## I. Brand submissions/free-products/sponsorship policy update

Added to **Editorial Policy**, **Methodology**, **Affiliate Disclosure**, and **Advertising Policy**:

- SuppCheckr does not currently accept payment from brands to change scores or rankings
- Future free products, sponsorships, paid placements, or brand-provided materials should be disclosed where relevant
- Brand input may be considered for factual corrections but does not control scores
- Affiliate compensation does not determine scores/rankings
- Sponsored content, if ever used, should be clearly labeled

Does not imply current brand sponsorships exist.

---

## J. Affiliate disclosure placement confirmation

**Reviewed — no code changes required** (same as Phase 11B):

| Layer | Component | Placement |
|-------|-----------|-----------|
| Per-button | `AffiliateLinkDisclosure` in `AffiliateButton` | Above Amazon CTA — "Affiliate link — SuppCheckr may earn a commission…" |
| Page-level | `AffiliateDisclosure` | Bottom of product, guide, compare, category, ingredient, brand pages |
| Full policy | `/affiliate-disclosure` | Linked from `AffiliateDisclosure` ("Learn more") and footer |
| Retailer (non-affiliate) | `AffiliateButton` retailer variant | "Direct retailer link — not an affiliate link." (e.g. Klean Magnesium) |

- Exact Amazon Associate wording on Affiliate Disclosure page and in `AffiliateDisclosure` component
- Klean Athlete Klean Magnesium correctly uses direct retailer CTA without Amazon affiliate disclosure

---

## K. Review packet/external summary updates

Updated:

- `content/templates/phase-11-human-legal-review-packet-2026-07-07.md` — Phase 11C summary (Section E2), operating facts, legal page focus areas, open questions
- `content/templates/phase-11-external-legal-review-summary-2026-07-07.md` — operator wording, governing law, privacy, minors, recall caveat, sponsorship policy

Attorney/human review requirement **not removed**. No legal compliance claims added.

---

## L. Remaining attorney/human review questions

1. Approve or revise NV Digital Consulting LLC operator wording; decide on separate public mailing address, registered agent address, or state filing detail
2. Confirm Virginia governing law / Prince William County venue draft; decide on arbitration, class-action waiver, jury-trial waiver, or informal dispute-resolution procedures
3. Confirm Privacy Policy data practices table, retention, children, U.S. audience, and security/breach language
4. Confirm cookie banner/consent tooling before future ads or for current analytics/affiliate clicks
5. Confirm medical disclaimer strength (standalone + inline + minors language)
6. Confirm recall/formulation monitoring caveat wording
7. Confirm brand submissions/sponsorship future-disclosure language
8. Confirm Amazon exact phrase placement is adequate (page + per-link + component)
9. Confirm limitation-of-liability and third-party retailer language in Terms
10. Confirm accessibility statement for jurisdiction; add response timeframe if needed
11. Monitor [help@suppcheckr.com](mailto:help@suppcheckr.com) for reviewer correspondence

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
| No residential street address | **Confirmed** — grep found no Haymarket/street address in public page copy |

---

## T. Warnings/risks

- Operator identity and Virginia venue language are **draft** — attorney must approve before publication
- Governing law section is draft language — dispute-resolution extras may still be needed
- No public mailing address listed — attorney may require registered agent or business mailing address
- Cookie/consent requirements may apply before ads or in some jurisdictions — not resolved
- Legal pages remain noindex — users and crawlers should not treat them as final
- Trust page updates (Methodology, Editorial Policy, etc.) are indexable — attorney should review for consistency with legal pages

---

## U. Recommended next phase

**Phase 12 — External attorney/human legal review**

1. Send external summary and human review packet to attorney/reviewer
2. Monitor [help@suppcheckr.com](mailto:help@suppcheckr.com)
3. Collect written feedback on open questions (Section L)
4. Do **not** publish legal pages until explicit approval phase

After attorney approval: separate **legal publication phase** (remove noindex, banners, finalize dispute-resolution terms if needed, etc.)

---

## V. Recommended commit message

```
Phase 11C: finalize legal drafts for review
```

---

**Report prepared by:** SuppCheckr Phase 11C  
**Contact:** [help@suppcheckr.com](mailto:help@suppcheckr.com)
