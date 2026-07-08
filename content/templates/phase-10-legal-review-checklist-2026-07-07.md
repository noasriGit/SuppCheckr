# Phase 10 — Legal Review Checklist

**Date:** 2026-07-07  
**Phase:** 10 — legal page review/finalization prep (not attorney review, not publication)  
**Git baseline:** `8bd2960` (Phase 9B) on `main`  
**Site mode:** `prelaunch` (must remain until intentional production launch)

**Purpose:** Track legal/trust page polish completed in Phase 10 and items requiring attorney or human review before legal publication. This checklist does not constitute legal advice.

---

## A. Pages reviewed

### Core legal pages (draft + noindex)

| Page | URL | File | Reviewed |
|------|-----|------|----------|
| Privacy Policy | `/privacy-policy` | `app/privacy-policy/page.tsx` | **Yes** |
| Terms of Use | `/terms-of-use` | `app/terms-of-use/page.tsx` | **Yes** |
| Medical Disclaimer | `/medical-disclaimer` | `app/medical-disclaimer/page.tsx` | **Yes** |
| Affiliate Disclosure | `/affiliate-disclosure` | `app/affiliate-disclosure/page.tsx` | **Yes** |
| Advertising Policy | `/advertising-policy` | `app/advertising-policy/page.tsx` | **Yes** |

### Trust/support pages (indexable in prelaunch)

| Page | URL | File | Reviewed |
|------|-----|------|----------|
| Editorial Policy | `/editorial-policy` | `app/editorial-policy/page.tsx` | **Yes** |
| Methodology | `/methodology` | `app/methodology/page.tsx` | **Yes** |
| Source Standards | `/source-standards` | `app/source-standards/page.tsx` | **Yes** |
| Corrections Policy | `/corrections-policy` | `app/corrections-policy/page.tsx` | **Yes** |
| Accessibility | `/accessibility` | `app/accessibility/page.tsx` | **Yes** |
| Contact | `/contact` | `app/contact/page.tsx` | **Yes** |
| About | `/about` | `app/about/page.tsx` | **Yes** |

### Shared components reviewed

| Component | File | Notes |
|-----------|------|-------|
| Legal page layout | `components/legal/LegalPageLayout.tsx` | Draft banner, editorial dates |
| Inline medical disclaimer | `components/trust/TrustModules.tsx` | Used on product/guide/compare pages |
| Affiliate disclosure (compact/full) | `components/trust/TrustModules.tsx` | Framework-aware messaging |
| SEO/indexing | `lib/seo/indexing.ts` | `DRAFT_LEGAL_PATHS` unchanged |
| Site config | `config/site.ts` | Contact email, footer nav |
| Monetization config | `config/monetization.ts` | Ads disabled; affiliate framework active |

---

## B. Current legal/indexing status

| Control | Value | Phase 10 action |
|---------|-------|-----------------|
| `DRAFT_LEGAL_PATHS` | 5 legal paths | **Unchanged** — still noindex |
| `INDEXABLE_STATIC_PAGES` | Trust pages only (not legal) | **Unchanged** |
| `shouldNoindexStaticPath()` | Legal paths → noindex in prelaunch | **Verified** |
| `getSitemapStaticPaths()` | Excludes legal pages | **Verified** |
| `LegalReviewBanner` | On draft legal pages only | **Verified** |
| `requiresLegalReview={true}` | 5 legal pages | **Verified** |
| Contact email | `help@suppcheckr.com` | **Verified** (`config/site.ts`) |

---

## C. Privacy Policy review notes

**Updated in Phase 10:**

- Added section clarifying no user accounts, checkout, direct sales, or backend contact form.
- Clarified no intentional collection of sensitive health or payment data.
- Replaced stale “affiliate links disabled” language with accurate affiliate-link click behavior and retailer privacy policies.
- Confirmed live ad scripts remain disabled; future ad data practices cross-linked to Advertising Policy.
- Retained Vercel Web Analytics disclosure and conservative state-privacy-rights language.
- Retained draft disclaimer — not a compliance guarantee.
- Updated `lastUpdated` to 2026-07-07.

**Attorney review items:**

- [ ] Confirm Vercel Web Analytics + server log language is sufficient for current traffic.
- [ ] Confirm affiliate outbound-click language is sufficient before legal publication.
- [ ] Confirm whether cookie consent banner is required for current analytics/affiliate behavior.
- [ ] Confirm CCPA/CPRA/GDPR rights section wording if jurisdiction-specific notices are needed.

---

## D. Terms review notes

**Updated in Phase 10:**

- Replaced stale “live affiliate links disabled” with active Amazon Associates participation language.
- Clarified not every product has an affiliate link; live display ads remain disabled.
- Added retailer control of pricing/availability/returns.
- Expanded healthcare-consult language (kidney/liver disease, allergies).
- Retained informational-only, no professional relationship, AS IS, and limitation language.
- Updated `lastUpdated` to 2026-07-07.

**Attorney review items:**

- [ ] Confirm limitation-of-liability language is acceptable for intended jurisdictions.
- [ ] Confirm whether governing law / dispute resolution section is required before publication.
- [ ] Confirm acceptable-use and scraping language is proportionate.
- [ ] Confirm affiliate + advertising sections align with FTC endorsement guidance.

---

## E. Medical Disclaimer review notes

**Updated in Phase 10:**

- Added kidney disease, liver disease, and allergies to consult-a-professional list.
- Retained educational-only, not medical advice, no disease treatment/cure/prevention language.
- Retained emergency/urgent care guidance and no professional relationship language.
- Retained product-label verification and no safety guarantee language.
- Updated `lastUpdated` to 2026-07-07.
- Inline `MedicalDisclaimer` component updated for kidney/liver/allergy consistency.

**Attorney review items:**

- [ ] Confirm standalone page + inline component combination is sufficient for supplement content.
- [ ] Confirm kidney/liver/allergy language is appropriately scoped without implying medical screening.
- [ ] Confirm no disease-treatment implication in surrounding published product/guide content.

---

## F. Affiliate Disclosure review notes

**Updated in Phase 10:**

- Confirmed Amazon Associates participation and commission language.
- Updated required-style statement to: “As an Amazon Associate, SuppCheckr earns from qualifying purchases.”
- Clarified not every reviewed product has an affiliate link.
- Added held-back mapping language (UPC/label mismatch caution) without naming products in legal copy.
- Confirmed no Amazon images, reviews, star ratings, Q&A, or live pricing as editorial evidence.
- Confirmed editorial independence and retailer control language.
- Updated `lastUpdated` to 2026-07-07.

**Attorney review items:**

- [ ] Confirm Amazon Associates required disclosure wording (first-person “I earn” vs third-person “SuppCheckr earns”).
- [ ] Confirm FTC endorsement/affiliate disclosure placement is sufficient (page-level + link-level).
- [ ] Confirm held-back product policy language is adequate without over-promising mapping timelines.

---

## G. Advertising Policy review notes

**Updated in Phase 10:**

- Confirmed live ad scripts disabled; placeholders only.
- Added section separating affiliate links from display ads.
- Retained future advertising/sponsorship principles and cookie personalization language.
- Updated `lastUpdated` to 2026-07-07.

**Attorney review items:**

- [ ] Confirm future ad/cookie language is sufficient before any ad network activation.
- [ ] Confirm ad exclusion routes in `config/monetization.ts` match published policy intent.
- [ ] Confirm sponsorship labeling language if sponsored content is ever used.

---

## H. Editorial/trust page consistency notes

**Updated in Phase 10:**

| Page | Change |
|------|--------|
| About | Added Vitamin C to published clusters; clarified selective affiliate links; ads still disabled |
| Contact | Replaced stale “affiliate disabled” with accurate affiliate + ads status |
| Methodology | Replaced stale affiliate-disabled bullet with active selective affiliate language |
| Source Standards | Added vitamin C price example; updated date |
| Editorial Policy | Updated date only (content already aligned post Phase 7–9) |
| Corrections / Accessibility | Updated dates |

**Verified unchanged / already aligned:**

- No “Best Overall” or “Best for Everyone” language on trust pages.
- Testing statuses defined as verified / claimed / unknown.
- Product image placeholders documented.
- Amazon used as outbound affiliate target only — not review evidence.
- Klean Magnesium not named in legal copy; held-back mapping described generically in affiliate disclosure.

---

## I. Open questions for attorney/human review

1. **Terms limitation/liability** — Is current ALL CAPS limitation language acceptable, and is a governing law / venue section required?
2. **Privacy analytics/cookies** — Is Vercel Web Analytics + server logs disclosure sufficient without a cookie banner today?
3. **Medical disclaimer strength** — Is standalone page + inline `MedicalDisclaimer` sufficient for Creatine, Magnesium, and Vitamin C supplement comparisons?
4. **Affiliate disclosure (Amazon/FTC)** — Does “As an Amazon Associate, SuppCheckr earns from qualifying purchases” satisfy Amazon Associates Operating Agreement requirements, or is first-person “I earn” mandatory?
5. **Future advertising policy** — Is current pre-activation language sufficient before enabling `ads.enabled` / `ads.loadScripts`?
6. **Accessibility statement** — Does WCAG 2.1 AA commitment need jurisdiction-specific wording (ADA, Section 508, EAA)?
7. **Correction workflow** — Is email-only correction intake (`help@suppcheckr.com`) sufficient, or should a contact form be added before production?
8. **Mailbox monitoring** — Is `help@suppcheckr.com` actively monitored for legal/privacy/correction requests?
9. **Entity identification** — Should legal pages name a legal entity, operator, or physical address before publication?
10. **Klean Magnesium hold** — Should attorney review any consumer-facing language if affiliate mapping remains intentionally withheld?

---

## J. Publication readiness checklist

**Do not complete until attorney/human review approves:**

- [ ] Attorney review of all five draft legal pages completed
- [ ] Privacy Policy updated for any required cookie/consent mechanism
- [ ] Terms governing law / dispute section added if required
- [ ] Amazon Associates disclosure wording confirmed with program requirements
- [ ] FTC affiliate disclosure placement verified on live product pages
- [ ] Advertising Policy reviewed if/when ads are planned
- [ ] `help@suppcheckr.com` mailbox tested and monitored
- [ ] Legal entity / operator identification decided
- [ ] Remove or retain `LegalReviewBanner` based on business decision
- [ ] Remove paths from `DRAFT_LEGAL_PATHS` only after explicit approval
- [ ] Update `lastUpdated` dates on legal pages at publication
- [ ] Re-run `npm run check` and `npm run build` after publication-phase changes

---

## K. Files that would be flipped in a later legal publication phase

| File | Likely publication-phase change |
|------|--------------------------------|
| `lib/seo/indexing.ts` | Remove reviewed paths from `DRAFT_LEGAL_PATHS` |
| `app/privacy-policy/page.tsx` | Remove draft disclaimer if approved; finalize compliance language |
| `app/terms-of-use/page.tsx` | Add governing law; remove draft banner trigger if desired |
| `app/medical-disclaimer/page.tsx` | Final attorney edits; remove draft banner if desired |
| `app/affiliate-disclosure/page.tsx` | Final Amazon/FTC wording; remove draft banner if desired |
| `app/advertising-policy/page.tsx` | Update if ads enabled; remove draft banner if desired |
| `components/legal/LegalPageLayout.tsx` | Possibly change default `lastUpdated` |
| `config/site.ts` | Possibly `shouldShowLegalReviewBanners()` behavior at production |
| `lib/seo/metadata.ts` | No change required if `DRAFT_LEGAL_PATHS` drives noindex |

---

## L. Things not to do without explicit approval

- [ ] **Do not** make legal pages indexable (remove from `DRAFT_LEGAL_PATHS`)
- [ ] **Do not** enable ads (`ads.enabled` / `ads.loadScripts`)
- [ ] **Do not** switch `SITE_MODE` to `production`
- [ ] **Do not** claim guaranteed legal compliance on any page
- [ ] **Do not** change affiliate mappings or add new Amazon ASINs
- [ ] **Do not** change product facts, prices, scores, or testing statuses
- [ ] **Do not** use Amazon images, reviews, star ratings, Q&A, or live prices
- [ ] **Do not** add unsupported medical or supplement claims

---

**Related artifacts:**

- Phase 5D legal prep packet: `content/templates/legal-review-prep-packet-2026-06-30.md`
- Phase 9 report: `content/templates/phase-9-vitamin-c-amazon-mapping-report-2026-07-07.md`
- Phase 9B report: `content/templates/phase-9b-affiliate-live-qa-report-2026-07-07.md`
- Phase 10 report: `content/templates/phase-10-legal-prep-report-2026-07-07.md`
