# Phase 11 — Human/Legal Review Packet

**Date:** 2026-07-07  
**Phase:** 11 — attorney/human legal review package (documentation only)  
**Git baseline:** `8ab826d` (Phase 11B) on `main` — Phase 11C draft tightening applied on top  
**Site mode:** `prelaunch` (unchanged)  
**Live site:** https://www.suppcheckr.com

**Purpose:** Handoff package for attorney or qualified human review of SuppCheckr legal and trust pages before any legal publication. This document organizes review URLs, current operational facts, Phase 10 changes, open questions, and publication instructions. **It is not legal advice and does not claim legal compliance.**

---

## A. Purpose of review packet

This packet is prepared for **attorney or qualified human review** of SuppCheckr's legal and trust documentation. It summarizes what exists today, what changed in Phase 10, and what decisions remain before legal pages may be published.

**Important limitations:**

- This packet **does not** constitute legal advice.
- This packet **does not** claim that SuppCheckr is compliant with FTC, Amazon Associates, privacy, accessibility, or any other law or program requirement.
- **Legal pages remain draft and noindex** until explicit human/legal approval and a separate legal publication phase.
- **Trust pages** (About, Methodology, etc.) are indexable in prelaunch mode but should still be reviewed for consistency with legal pages before production launch.
- Phase 11 creates documentation only — no legal publication, no indexability changes, no monetization changes.

**Related prior artifacts:**

| Artifact | Path |
|----------|------|
| Phase 5D legal prep packet | `content/templates/legal-review-prep-packet-2026-06-30.md` |
| Phase 9B affiliate live QA | `content/templates/phase-9b-affiliate-live-qa-report-2026-07-07.md` |
| Phase 10 legal prep report | `content/templates/phase-10-legal-prep-report-2026-07-07.md` |
| Phase 10 legal review checklist | `content/templates/phase-10-legal-review-checklist-2026-07-07.md` |
| Phase 11B legal gap cleanup report | `content/templates/phase-11b-legal-gap-cleanup-report-2026-07-07.md` |
| Phase 11C final legal draft tightening report | `content/templates/phase-11c-final-legal-draft-tightening-report-2026-07-07.md` |

---

## B. Current site operating facts

| Fact | Value |
|------|-------|
| Site name | **SuppCheckr** |
| Site type | Human supplement review/comparison website |
| Published categories | **Creatine**, **Magnesium**, **Vitamin C** (published and indexable) |
| Affiliate status | **Amazon Associates active** — framework enabled in `config/monetization.ts` |
| Active Amazon affiliate CTAs | **14** (5 Creatine, 4 Magnesium, 5 Vitamin C) |
| Held-back product | **Klean Athlete Klean Magnesium** — affiliate `enabled: false` due to UPC mismatch; direct retailer link only |
| Ads status | **Disabled** (`ads.enabled: false`, `ads.loadScripts: false`; placeholders may show) |
| Product sales | SuppCheckr **does not sell supplements directly** |
| Checkout / accounts | **No** user accounts, checkout, or backend contact form |
| Product images | Branded label-first **placeholders** — not Amazon or copyrighted product photography |
| Amazon evidence | **Not used** for reviews, images, star ratings, Q&A, or live prices |
| Contact email | **[help@suppcheckr.com](mailto:help@suppcheckr.com)** (`config/site.ts`) |
| Operator (draft) | **NV Digital Consulting LLC**, a Virginia LLC based in Prince William County, Virginia — no public street address listed |
| `SITE_MODE` | **`prelaunch`** |
| Legal pages | **Draft + noindex** with `LegalReviewBanner` / `requiresLegalReview` |

**Indexing controls (verified):**

- Legal paths in `DRAFT_LEGAL_PATHS` (`lib/seo/indexing.ts`): `/privacy-policy`, `/terms-of-use`, `/medical-disclaimer`, `/affiliate-disclosure`, `/advertising-policy`
- Legal pages excluded from `INDEXABLE_STATIC_PAGES` and `getSitemapStaticPaths()`
- Trust pages in `INDEXABLE_STATIC_PAGES` — indexable in prelaunch
- `buildPageMetadata()` applies `robots: { index: false, follow: false }` to legal paths via `shouldNoindexStaticPath()`

---

## C. Legal pages to review

| Page | Route | Current status | Indexing status | Main review focus |
|------|-------|----------------|-----------------|-------------------|
| Privacy Policy | `/privacy-policy` | Draft — `requiresLegalReview`, `LegalReviewBanner`, `lastUpdated: 2026-07-07` | **noindex** (`DRAFT_LEGAL_PATHS`) | Current data practices table, retention, children/minors, U.S. audience, security/breach language, Vercel Analytics/server logs, affiliate click behavior, future ads, CCPA/CPRA/GDPR rights language, email contact handling |
| Terms of Use | `/terms-of-use` | Draft — `requiresLegalReview`, `LegalReviewBanner`, `lastUpdated: 2026-07-07` | **noindex** | Informational-only use, healthcare cautions, minors language, product information limitations (recalls/formulation), affiliate vs ads, third-party retailer terms, limitation of liability, Virginia governing law / Prince William County venue draft |
| Medical Disclaimer | `/medical-disclaimer` | Draft — `requiresLegalReview`, `LegalReviewBanner`, `lastUpdated: 2026-07-07` | **noindex** | Not medical advice, no disease treatment/cure/prevention, pregnancy/nursing/minors/medication/kidney/liver/allergy cautions, emergency guidance, no professional relationship |
| Affiliate Disclosure | `/affiliate-disclosure` | Draft — `requiresLegalReview`, `LegalReviewBanner`, `lastUpdated: 2026-07-07` | **noindex** | Amazon Associates participation, commission language, selective product mapping, held-back mapping policy, editorial independence, Amazon evidence exclusions, FTC placement adequacy |
| Advertising Policy | `/advertising-policy` | Draft — `requiresLegalReview`, `LegalReviewBanner`, `lastUpdated: 2026-07-07` | **noindex** | Live ads disabled, placeholder behavior, future ad/sponsorship principles, affiliate vs display ads separation, cookie/personalization language before ad activation |

**Source files:** `app/privacy-policy/page.tsx`, `app/terms-of-use/page.tsx`, `app/medical-disclaimer/page.tsx`, `app/affiliate-disclosure/page.tsx`, `app/advertising-policy/page.tsx`

**Shared layout:** `components/legal/LegalPageLayout.tsx` — renders `LegalReviewBanner` when `requiresLegalReview={true}`

---

## D. Trust/support pages to review

| Page | Route | Current status | Main review focus |
|------|-------|----------------|-------------------|
| About | `/about` | Published trust page — indexable in prelaunch, `lastUpdated: 2026-07-07` | Mission, published clusters (Creatine/Magnesium/Vitamin C), editorial independence, selective affiliate links, ads disabled, not a medical authority |
| Contact | `/contact` | Published trust page — indexable, `lastUpdated: 2026-07-07` | Email-only contact (`help@suppcheckr.com`), corrections intake, affiliate/ads status accuracy |
| Methodology | `/methodology` | Published trust page — indexable | Scoring criteria, testing statuses, no "Best Overall," affiliate language, product information limitations, brand/sponsorship policy, inline `MedicalDisclaimer` |
| Source Standards | `/source-standards` | Published trust page — indexable, `lastUpdated: 2026-07-07` | Citation requirements, price examples (including Vitamin C), recalls/formulation monitoring caveat, evidence conservatism |
| Editorial Policy | `/editorial-policy` | Published trust page — indexable, `lastUpdated: 2026-07-07` | Independence, brand submissions/free products/sponsorship policy, placeholder images, update cadence standards |
| Corrections Policy | `/corrections-policy` | Published trust page — indexable, `lastUpdated: 2026-07-07` | Error reporting workflow, email intake, correction logging, update cadence (no fixed schedule promised) |
| Accessibility | `/accessibility` | Published trust page — indexable, `lastUpdated: 2026-07-07` | WCAG 2.1 AA commitment, feedback channel, response expectations |

**Source files:** `app/about/page.tsx`, `app/contact/page.tsx`, `app/methodology/page.tsx`, `app/source-standards/page.tsx`, `app/editorial-policy/page.tsx`, `app/corrections-policy/page.tsx`, `app/accessibility/page.tsx`

**Inline trust components** (`components/trust/TrustModules.tsx`):

- `MedicalDisclaimer` — product/guide/compare pages
- `AffiliateDisclosure` / `AffiliateLinkDisclosure` — product pages with affiliate CTAs
- `LegalReviewBanner` — legal pages only (via layout)

**Footer links** (`config/site.ts` → `footerNav.trust`, rendered in `components/layout/SiteChrome.tsx`): All five legal pages and all seven trust pages linked; contact email shown in footer.

---

## E. Phase 10 and Phase 11B changes summary

Phase 10 (`5259bb7`) polished legal and trust copy for review readiness. Phase 11B tightened known legal gaps before attorney review (see `content/templates/phase-11b-legal-gap-cleanup-report-2026-07-07.md`). Key updates:

1. **Removed stale "affiliate links disabled" language** from Privacy Policy, Terms of Use, Contact, and Methodology — replaced with accurate selective Amazon affiliate status while ads remain disabled.
2. **Amazon Associates exact wording added** — affiliate disclosure page and site-level `AffiliateDisclosure` component now include: "As an Amazon Associate I earn from qualifying purchases." followed by brand clarification that SuppCheckr may also earn commissions through other affiliate links.
3. **Privacy / no-account / no-checkout language clarified** — explicit statement that SuppCheckr does not currently operate user accounts, checkout, direct sales, or a backend contact form; email contact at `help@suppcheckr.com`.
4. **Medical cautions expanded** — kidney disease, liver disease, kidney stones, allergies, and iron overload/hemochromatosis added to Medical Disclaimer page; inline `MedicalDisclaimer` strengthened on product/guide/compare pages.
5. **Advertising policy clarified** — live display ad scripts disabled; placeholders only; before ads launch, privacy/cookie/ad-partner language must be reviewed.
6. **Affiliate vs ads separation clarified** — Advertising Policy and Terms distinguish display ads from Amazon affiliate links.
7. **Amazon evidence exclusions clarified** — no Amazon images, reviews, star ratings, Q&A, or live prices used as editorial evidence.
8. **Vitamin C included across trust pages** — About and related pages reflect all three published clusters.
9. **Contact email consistency checked** — `help@suppcheckr.com` verified across `config/site.ts`, footer, contact, privacy, and about pages.
10. **Operator identity added (draft)** — Privacy Policy, Terms of Use, Affiliate Disclosure, and Contact now state: "SuppCheckr is a website operated by NV Digital Consulting LLC" with attorney review note for mailing address/state/registered agent.
11. **Terms governing law placeholder added** — clearly marked attorney-review section; not final legal language.
12. **Accessibility wording softened** — "aims to make the site accessible" and "uses WCAG 2.1 AA as a reference point where practical" instead of compliance commitment.
13. **Cookie/consent review note added** — Privacy Policy flags attorney decision on cookie banner before future ads or based on analytics/affiliate tracking.

**Not changed in Phase 10 or 11B:** `lib/seo/indexing.ts`, `config/monetization.ts`, `config/site.ts` site mode, product YAML, affiliate mappings, ads config.

---

## E2. Phase 11C changes summary

Phase 11C (`content/templates/phase-11c-final-legal-draft-tightening-report-2026-07-07.md`) finalized remaining obvious legal-draft improvements before attorney review. Key updates:

1. **Operator identity finalized (draft)** — Privacy Policy, Terms of Use, Affiliate Disclosure, and Contact now state: "SuppCheckr is operated by NV Digital Consulting LLC, a Virginia limited liability company based in Prince William County, Virginia." No residential street address listed. Attorney review note asks whether a separate public mailing address, registered agent address, or state filing detail should be included.
2. **Virginia governing law draft added** — Terms of Use now includes Commonwealth of Virginia governing law and Prince William County venue draft language, with attorney review note for arbitration/class-action/jury-trial/informal dispute-resolution extras.
3. **Privacy Policy: current data practices table** — Plain-language table covering accounts, checkout, contact form, email, analytics, affiliate links, ads, sensitive health info, comments/quizzes, and third-party purchases.
4. **Privacy Policy: data retention** — Conservative retention language for emails, correction requests, support messages, analytics, and operational records; email correspondence retained as ordinary business records.
5. **Privacy Policy: children/minors** — Updated to "general adult audience" and not directed to children under 13.
6. **Privacy Policy: U.S.-focused audience** — Operated from the United States, primarily intended for U.S. users; non-U.S. users responsible for local laws.
7. **Privacy Policy: security/breach notification** — Reasonable safeguards language; breach notices as required by applicable law.
8. **Medical Disclaimer / Terms: minors** — Supplement decisions for anyone under 18 should involve parent/guardian and qualified healthcare professional.
9. **Recall/formulation monitoring caveat** — Added to Terms, Methodology, and Source Standards: no real-time monitoring of recalls, warnings, formulation/label/availability/pricing changes.
10. **Corrections/update cadence clarified** — Editorial Policy, Corrections Policy, and Methodology avoid fixed update schedules; dates reflect last documented review/source/price check.
11. **Brand submissions/free products/sponsorship policy** — Added to Editorial Policy, Methodology, Affiliate Disclosure, and Advertising Policy: does not currently accept payment to change scores; future free products/sponsorships/placements should be disclosed; brand input for factual corrections only.
12. **Affiliate disclosure placement reconfirmed** — No code changes; per-button, page-level, and full-policy disclosure layers remain adequate (documented in Phase 11C report).

**Not changed in Phase 11C:** `lib/seo/indexing.ts`, `config/monetization.ts`, `config/site.ts`, product YAML, affiliate mappings, ads config, `LegalReviewBanner` / `requiresLegalReview`, legal page noindex status.

---

## F. Attorney/human open questions

### 1. Amazon Associates / FTC disclosure

- [x] **Phase 11B:** Exact Amazon sentence added: **"As an Amazon Associate I earn from qualifying purchases."** on Affiliate Disclosure page and in `AffiliateDisclosure` component — attorney to confirm placement adequacy.
- [ ] Is the **affiliate disclosure placement on product pages** sufficient (page-level `AffiliateDisclosure` + per-link `AffiliateLinkDisclosure`)?
- [ ] Should disclosure text appear **above every outbound affiliate button**, in the **header/footer**, or **both**?
- [ ] Is the explanation that **Amazon reviews/ratings/Q&A/images are not used as evidence** sufficient?

**Live review URLs (sample product pages with affiliate CTAs):**

- Creatine: `/supplements/creatine/products/optimum-nutrition-micronized-creatine-600g`
- Magnesium: `/supplements/magnesium/products/nature-made-magnesium-oxide-250mg-100-tablets`
- Vitamin C: `/supplements/vitamin-c/products/nature-made-vitamin-c-1000-mg-tablets`

**Held-back product (no Amazon CTA):** `/supplements/magnesium/products/klean-athlete-klean-magnesium`

### 2. Legal entity / operator identity

- [x] **Phase 11C (draft):** **NV Digital Consulting LLC**, a Virginia limited liability company based in Prince William County, Virginia — named as operator on Privacy Policy, Terms of Use, Affiliate Disclosure, and Contact. No public street address listed — pending attorney approval.
- [ ] Should legal pages list a **separate public mailing address**, **registered agent address**, or **state filing detail** in addition to county-level location?
- [ ] Should **"SuppCheckr"** be described as a site/brand owned or operated by NV Digital Consulting LLC? (Currently stated as "operated by.")

### 3. Terms of Use

- [x] **Phase 11C (draft):** Virginia governing law and Prince William County venue draft added — attorney to confirm and decide on arbitration, class-action waiver, jury-trial waiver, or informal dispute-resolution procedures.
- [ ] Is **dispute resolution or arbitration** needed beyond the current draft?
- [ ] Is the **limitation-of-liability** language sufficient?
- [ ] Is the **third-party retailer** language sufficient?
- [ ] Are **no-warranty (AS IS)** disclaimers sufficient?

### 4. Privacy Policy

- [x] **Phase 11C:** Current data practices table, data retention, children/minors, U.S.-focused audience, and security/breach-notification language added.
- [ ] Is **Vercel Analytics / server log / cookie** language sufficient for current traffic?
- [x] **Phase 11B:** Cookie banner/consent review note added — attorney to confirm before future ads or based on analytics/affiliate tracking.
- [ ] Is the **"no sale of personal information"** language sufficient?
- [ ] Are **CCPA/CPRA/GDPR** statements needed based on audience/traffic?
- [ ] Is **email-contact handling and retention** language sufficient?

### 5. Medical Disclaimer

- [x] **Phase 11B:** Kidney stones and iron overload/hemochromatosis added to standalone page; inline disclaimer strengthened on product/guide/compare pages.
- [x] **Phase 11C:** Minors language added — supplement decisions for anyone under 18 should involve parent/guardian and qualified healthcare professional (Medical Disclaimer and Terms).
- [ ] Is the supplement/medical disclaimer **strong enough** overall?
- [ ] Is additional caution needed for **pregnancy, nursing, minors, medication use, kidney/liver disease, allergies, iron overload, kidney stones**, or other conditions?
- [ ] Should **every product page** include a stronger inline medical disclaimer?
- [ ] Is the **"does not diagnose, treat, cure, or prevent disease"** language sufficient?

### 6. Advertising Policy

- [x] **Phase 11C:** Brand submissions/free products/sponsorship future-disclosure language added.
- [ ] Is the **future-ad disclosure** sufficient before ads are enabled?
- [ ] What language should be added before **Google AdSense** or other ad networks launch?
- [ ] Should **sponsored content policy** be more detailed?

### 7. Accessibility

- [x] **Phase 11B:** Wording softened to "aims to make the site accessible" and "uses WCAG 2.1 AA as a reference point where practical."
- [ ] Is the accessibility statement **sufficient for the applicable jurisdiction**?
- [ ] Should a **response timeframe** be listed?

### 8. Corrections / editorial

- [x] **Phase 11C:** Update cadence clarified — no fixed schedule promised; dates reflect last documented review/source/price check. Recall/formulation monitoring caveat added to Methodology and Source Standards.
- [ ] Is the **corrections process** sufficient?
- [ ] Should **methodology or source standards** include additional legal caveats?

---

## G. Review instructions

**Recommended review order:**

1. **Review legal pages first** — all five draft/noindex pages listed in Section C.
2. **Review product page affiliate disclosure placement** — sample URLs in Section F.1; check `AffiliateDisclosure`, `AffiliateLinkDisclosure`, and footer disclosure.
3. **Review inline disclaimer modules** — `MedicalDisclaimer` on methodology, guides, product, and comparison pages.
4. **Confirm operator/legal entity wording** — decide whether NV Digital Consulting LLC, Prince William County location, and/or a separate public mailing address should appear on legal pages.
5. **Confirm whether legal pages can be published/indexed** — only after explicit approval.
6. **Confirm what must remain draft** — legal pages stay noindex until publication phase; trust pages may already be indexable but may need copy edits.
7. **Confirm whether ads can remain disabled** with future ad policy language — current config keeps ads off while policy describes future behavior.

**How to access draft legal pages:**

- Pages are live at `https://www.suppcheckr.com{route}` but carry `LegalReviewBanner` and `robots: noindex`.
- Draft banner text: *"This page has not been reviewed by legal counsel and should not be treated as final legal documentation."*

---

## H. Publication readiness checklist

**Do not complete until attorney/human approval is recorded:**

- [ ] Attorney/human approval recorded (written sign-off or tracked checklist completion)
- [ ] Operator/legal entity approved (name, county location, contact; decide on separate mailing address)
- [ ] Amazon Associates wording approved (first-person vs third-person)
- [ ] FTC disclosure placement approved (page-level, link-level, footer)
- [ ] Privacy/cookie language approved (banner decision if required)
- [ ] Medical disclaimer approved (standalone + inline)
- [ ] Governing law/jurisdiction/venue approved (Virginia / Prince William County draft; dispute-resolution extras if needed)
- [ ] Accessibility wording approved
- [ ] Contact email tested — [help@suppcheckr.com](mailto:help@suppcheckr.com) monitored (**reminder:** monitor mailbox for attorney/reviewer correspondence and user corrections)
- [ ] Final build passes (`npm run check`, `npm run build`)
- [ ] Noindex flip plan reviewed (see Section I)

---

## I. Later legal publication phase instructions

**Describe only — do not execute until explicit approval:**

1. **Remove `requiresLegalReview` / `LegalReviewBanner`** only after approval — either per-page or via `shouldShowLegalReviewBanners()` behavior at production.
2. **Remove legal paths from `DRAFT_LEGAL_PATHS`** in `lib/seo/indexing.ts` only after approval — this flips metadata to indexable via `shouldNoindexStaticPath()`.
3. **Add legal pages to sitemap/indexable static pages** — either by removing from `DRAFT_LEGAL_PATHS` (metadata auto-indexes) and optionally adding to `INDEXABLE_STATIC_PAGES` for sitemap inclusion.
4. **Verify `robots: index, follow`** on all five legal pages after flip.
5. **Re-run** `npm run check` and `npm run build`.
6. **Spot-check live pages** — confirm banners removed (if approved), metadata indexable, footer links work, affiliate disclosures intact.

**Separate approvals still required for:**

- `SITE_MODE` → `production`
- `ads.enabled` / `ads.loadScripts` → `true`
- New Amazon ASIN mappings or product data changes

---

## J. Explicit non-actions in Phase 11

Phase 11 is documentation only. The following were **not** done and must **not** be done without explicit approval:

- [ ] **No legal publication** — legal pages remain draft
- [ ] **No noindex changes** — `DRAFT_LEGAL_PATHS` unchanged
- [ ] **No ad enablement** — `ads.enabled` and `ads.loadScripts` remain `false`
- [ ] **No `SITE_MODE` production switch** — remains `prelaunch`
- [ ] **No affiliate mapping changes** — 14 active CTAs unchanged; Klean Magnesium held back
- [ ] **No product data changes** — facts, prices, scores, testing statuses untouched
- [ ] **No new Amazon ASINs**
- [ ] **No Amazon images, reviews, ratings, Q&A, or live prices**
- [ ] **No legal compliance guarantees added**

---

**Packet prepared by:** SuppCheckr Phase 11 (documentation)  
**Contact for review questions:** [help@suppcheckr.com](mailto:help@suppcheckr.com)
