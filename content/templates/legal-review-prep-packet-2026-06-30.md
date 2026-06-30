# Legal Review Prep Packet — Phase 5D

**Date:** 2026-06-30  
**Phase:** 5D — legal/disclosure review preparation (not attorney review)  
**Git baseline:** `63e6ad0` (Phase 5C) on `main`, clean working tree  
**Site mode:** `prelaunch` (must remain until intentional production launch)

**Purpose:** Organize the current legal/disclosure state and identify what needs attorney or manual compliance review before production launch or monetization activation. This document is preparation only — it does not constitute legal advice and does not represent completed attorney review.

---

## A. Executive summary

| Item | Status |
|------|--------|
| Site mode | **Prelaunch** — live editorial content, monetization disabled |
| Published clusters | **Creatine** and **Magnesium** — published and indexable |
| Affiliate links | **Disabled** globally and per product |
| Live ad scripts | **Disabled** |
| Amazon Associates | **Not approved** — no Associate tags, no active membership language |
| Legal pages | **Draft + noindex** with `LegalReviewBanner` |
| Contact email | **help@suppcheckr.com** |
| Product images | Generic label-first placeholders — no Amazon/copyrighted product photos |

**Related phase artifacts:**

- Phase 4H Magnesium publication report: `content/templates/magnesium-phase-4h-publication-report-2026-06-26.md`
- Phase 5A product image placeholder polish: commit `8884e64`
- Phase 5B monetization readiness checklist: `content/templates/monetization-readiness-checklist-2026-06-30.md`
- Phase 5C external application readiness checklist: `content/templates/external-application-readiness-checklist-2026-06-30.md`

**This packet is for legal/compliance review preparation only.** SuppCheckr legal pages are drafts. No attorney review has been completed. Do not treat site legal copy as final documentation.

---

## B. Current legal/disclosure page inventory

### Draft legal pages (noindex + legal review banner)

These paths are listed in `DRAFT_LEGAL_PATHS` (`lib/seo/indexing.ts`). Metadata uses `robots: { index: false, follow: false }` via `shouldNoindexStaticPath()`. Each page uses `LegalPageLayout` with `requiresLegalReview={true}`, which renders `LegalReviewBanner`.

| Page | URL | File | Status | Noindex | Banner | Key purpose | Known open issues |
|------|-----|------|--------|---------|--------|-------------|-------------------|
| Privacy Policy | `/privacy-policy` | `app/privacy-policy/page.tsx` | Draft placeholder | **Yes** | **Yes** | Data collection, cookies, sharing, state rights, contact | Full CCPA/CPRA/GDPR compliance program not implemented; analytics disclosure updated for Vercel Web Analytics (2026-06-30) — attorney should confirm sufficiency; future affiliate/ad tracking not yet active |
| Terms of Use | `/terms-of-use` | `app/terms-of-use/page.tsx` | Draft placeholder | **Yes** | **Yes** | Informational use, no professional advice, IP, acceptable use, liability | **No governing law / jurisdiction section**; attorney review required before finalization |
| Medical Disclaimer | `/medical-disclaimer` | `app/medical-disclaimer/page.tsx` | Draft placeholder | **Yes** | **Yes** | Educational-only; not medical/pharmacy advice; consult HCP; emergencies | Attorney should assess whether standalone page + inline `MedicalDisclaimer` component on content pages is sufficient |
| Affiliate Disclosure | `/affiliate-disclosure` | `app/affiliate-disclosure/page.tsx` | Draft placeholder | **Yes** | **Yes** | Links disabled now; future conditional affiliate language; editorial independence | Active Amazon Associate required wording must **not** be added until approval; link-level disclosure placement TBD at activation |
| Advertising Policy | `/advertising-policy` | `app/advertising-policy/page.tsx` | Draft placeholder | **Yes** | **Yes** | Live ads disabled; placeholder behavior; future sponsorship rules | Future ad network cookie/personalization disclosures need attorney review when ads enabled |

**Shared layout:** `components/legal/LegalPageLayout.tsx` — renders title, optional `LegalReviewBanner`, editorial dates, and prose sections.

**Noindex helper chain:** `lib/seo/metadata.ts` → `shouldNoindexStaticPath()` → `isDraftLegalPath()` in `lib/seo/indexing.ts`.

**Footer navigation:** All five draft legal pages are linked under Trust in `config/site.ts` → `footerNav.trust`.

### Indexable trust/editorial pages (no legal review banner)

These pages are in `INDEXABLE_STATIC_PAGES` and are indexable in prelaunch mode. They use `LegalPageLayout` without `requiresLegalReview`.

| Page | URL | File | Status | Noindex | Banner | Key purpose | Known open issues |
|------|-----|------|--------|---------|--------|-------------|-------------------|
| Editorial Policy | `/editorial-policy` | `app/editorial-policy/page.tsx` | Published trust page | **No** | **No** | Independence, updates, conservative claims | Brief — attorney may want expanded scoring methodology, conflict-of-interest, and testing-status definitions |
| About | `/about` | `app/about/page.tsx` | Published trust page | **No** | **No** | Mission, what we are not, current site status, contact | Correctly states affiliate/ads disabled; not a medical authority |
| Contact | `/contact` | `app/contact/page.tsx` | Published trust page | **No** | **No** | Email contact, expectations | **No contact form backend** — email only; corrections routed via mailto |
| Corrections Policy | `/corrections-policy` | `app/corrections-policy/page.tsx` | Published trust page | **No** | **No** | Error reporting and correction logging | References contact page; could explicitly name `help@suppcheckr.com` |
| Source Standards | `/source-standards` | `app/source-standards/page.tsx` | Published trust page | **No** | **No** | Preferred sources, claim risk, no fabricated citations | Claim enforcement described as phased |
| Methodology | `/methodology` | `app/methodology/page.tsx` | Published trust page | **No** | **No** | Scoring criteria, weights, what score does/does not mean | Includes inline `MedicalDisclaimer` component |
| Accessibility | `/accessibility` | `app/accessibility/page.tsx` | Published trust page | **No** | **No** | Accessibility commitment | — |

**Note:** Editorial Policy, About, and Contact are applicable to legal/compliance review even though they are indexable and lack the draft legal banner.

---

## C. Current monetization state

Audited from `config/monetization.ts`, `.env.example`, product YAML, and affiliate UI.

| Control | Current value | Status |
|---------|---------------|--------|
| `affiliate.enabled` | `false` | **Inactive** |
| `affiliate.disableGlobally` | `true` | **Inactive** |
| Per-product `affiliate.enabled` (all 10 published products) | `false` | **Inactive** |
| `AMAZON_ASSOCIATE_TAG` / `amazonAssociateTag` | blank / absent | **Inactive** |
| `ads.enabled` | `false` | **Inactive** |
| `ads.loadScripts` | `false` | **Inactive** |
| `ads.showPlaceholders` | `true` | Labeled placeholders only |
| Live Amazon links with Associate tags | none | **Inactive** |
| Amazon product images/assets | none | **Not used** |
| Amazon reviews/Q&A as editorial evidence | none | **Not used** |
| `SITE_MODE` | `prelaunch` (default in `config/site.ts`) | **Prelaunch** |

**Affiliate UI behavior:** `AffiliateButton` / `buildAmazonLink` return plain retailer URLs or `#amazon-placeholder` when affiliate is globally disabled.

**Ad behavior:** `shouldLoadLiveAds()` returns `false`; `AdSlot` renders labeled non-network placeholders.

**Published products (10):** 5 Creatine + 5 Magnesium — all `status: published`, all `affiliate.enabled: false`.

---

## D. Supplement/medical content risk review

### Current conservative claim approach

SuppCheckr positions itself as evidence-aware and consumer-friendly — not a medical authority.

| Guardrail | Implementation |
|-----------|----------------|
| No disease-treatment claims | `config/risky-terms.ts` blocks terms like `treats`, `cures`, `prevents`, `heals`; validated on published content |
| No condition-specific product rankings | No “#1 for sleep/anxiety” or similar in published Magnesium/Creatine YAML (Phase 4F/4H QA passed) |
| No “Best Overall” / “Best for Everyone” | Blocked in `RISKY_TERMS`; not used in published clusters |
| No “safe for everyone” | Blocked in `RISKY_TERMS`; medical disclaimer explicitly disclaims |
| No FDA-approved supplement language | Blocked; guides and disclaimers state supplements are not FDA-approved drugs |
| Consult qualified healthcare professional | Medical disclaimer page, inline `MedicalDisclaimer` on product/guide/compare/category pages, terms of use |
| Kidney disease / pregnancy / medication cautions | Present in guide YAML (e.g. magnesium safety guides) and inline medical disclaimer |

**Inline medical disclaimer placement:** `MedicalDisclaimer` component appears on product pages, category hubs, compare pages, guides, ingredients, brands, and methodology — not on draft legal pages themselves.

**Scoring framing:** Methodology states scores reflect label transparency, testing, value, etc. — **not medical efficacy**.

### Review questions for attorney/compliance reviewer

1. Is the **Medical Disclaimer** page (`/medical-disclaimer`) sufficient for supplement review and comparison content?
2. Should disclaimers appear **more prominently** on product and guide pages (e.g. above-the-fold, repeated near CTAs)?
3. Is the distinction between **informational content** and **medical advice** clear enough for a general audience?
4. Are supplement **safety disclaimers adequate** for ingredients like magnesium (GI tolerance, kidney considerations) and creatine (hydration, kidney caution contexts)?
5. Are **comparison tables and scores** sufficiently framed as label/education tools, not efficacy guarantees?
6. Does published **guide YAML** health context meet FTC/FDA-oriented supplement advertising expectations?

---

## E. Affiliate disclosure review items

### Current inactive disclosure language (live site)

- **Footer:** “Affiliate links are disabled during prelaunch.”
- **`AffiliateDisclosure` component:** “Affiliate links are currently disabled during prelaunch…”
- **`/affiliate-disclosure`:** “Affiliate links are currently disabled on SuppCheckr.” No tracking tags applied.
- **Amazon status:** “SuppCheckr has not been approved for Amazon Associates… We do not use Amazon Associate tracking tags unless and until that program is approved.”

### Future Amazon activation requirement (placeholder — do not add to live copy yet)

When Amazon Associates is approved and intentionally enabled:

- Verify current **Amazon Operating Agreement** and **FTC endorsement guidelines**.
- Add required active disclosure language (e.g. “As an Amazon Associate I earn from qualifying purchases”) **only after approval** — exact wording must match current program requirements.
- Set `AMAZON_ASSOCIATE_TAG` in deployment secrets only (never commit).
- Enable `affiliate.enabled` and per-product flags intentionally.
- Add **conspicuous link-level disclosures** near every affiliate CTA.

### Review questions

- Is the **prelaunch inactive disclosure** sufficient while no commissions are earned?
- Where should **link-level disclosures** appear when affiliate CTAs go live (product page, compare table, footer)?
- Does **editorial independence** language adequately address FTC material-connection requirements?
- Should affiliate disclosure be **repeated on every page** with outbound retailer links?

**Do not add active Amazon Associate language to public site copy until approval.**

---

## F. Advertising policy review items

### Current ads disabled state

- `ads.enabled: false`, `ads.loadScripts: false`
- `/advertising-policy`: “Live ad scripts are currently disabled on SuppCheckr.”
- Labeled **Advertisement** placeholders may appear; no ad network scripts load.
- Legal, medical, contact, and corrections routes excluded from ad placeholders (`monetizationConfig.ads.excludeRoutes`).

### Future ad network possibility

If ads are enabled later:

- Review **ad labeling**, **sponsored content**, and **conflict-of-interest** rules (FTC, network policies).
- Update Privacy Policy for ad cookies, personalization, and “sharing/selling” under state privacy laws.
- Confirm ads do not appear on sensitive pages (already intended in advertising policy).
- Ensure advertisers cannot influence scores, testing status, or safety conclusions.

### Review questions

- Are **placeholder ads** clearly non-functional and non-misleading during prelaunch?
- When live ads launch, is **visual separation** from editorial content sufficient?
- Are **children’s privacy** implications relevant if ad personalization is used?

---

## G. Privacy policy review items

### Contact email

- **help@suppcheckr.com** — default in `config/site.ts` (`CONTACT_EMAIL`), `.env.example`, privacy policy contact section, footer, about, contact pages.

### Analytics/cookies status (from repo)

| Item | Status |
|------|--------|
| Vercel Web Analytics | **Installed** — `@vercel/analytics` in `package.json`; `<Analytics />` in `app/layout.tsx` |
| Privacy policy analytics section | Updated 2026-06-30 to mention Vercel Web Analytics — **attorney should confirm adequacy** |
| Cookie consent banner | **Not implemented** |
| Google Analytics / AdSense | **Not installed** |
| Affiliate/ad tracking cookies | **Not active** (monetization disabled) |

### Newsletter/contact form status

- **No backend contact form** — email-only via `mailto:help@suppcheckr.com`
- Privacy policy mentions newsletter/contact form as possible future features
- Corrections policy directs users to contact page

### Future risks to disclose when activated

- Affiliate link tracking and retailer redirect parameters
- Ad network cookies and personalization
- Additional third-party scripts (A/B testing, heatmaps, etc.)
- State privacy law “sharing/selling” implications when ad/affiliate tools enabled

### Review questions

- Is Vercel Analytics disclosure **sufficient** without a cookie consent mechanism?
- What **state privacy rights** workflow is needed before scaling US traffic?
- Should a **Data Processing Agreement** or privacy policy update precede any EU traffic?

---

## H. Terms of use review items

### Current coverage

- Informational purpose only; no medical/legal/nutrition professional advice
- User responsibility for supplement decisions; verify labels and retailer info
- Affiliate/ad notices (currently disabled)
- Intellectual property / no scraping or competing databases
- Acceptable use restrictions
- Third-party links disclaimer
- “AS IS” disclaimers and limitation of liability

### Gaps / placeholders

- **Governing law / jurisdiction / dispute resolution** — **not present**; attorney must add
- **User submissions** — minimal; no formal UGC terms (no public comment system)
- **Contact corrections** — implied via contact email; corrections policy is separate indexable page
- **External links** — covered at high level

### Review questions

- What **governing law and venue** should apply?
- Are **limitation of liability** caps appropriate for supplement comparison content?
- Should terms **incorporate by reference** medical disclaimer, affiliate disclosure, and privacy policy?
- Is **arbitration or class-action waiver** desired?

**Attorney review required before finalization.**

---

## I. Editorial policy review items

### Current editorial policy content (`/editorial-policy`)

- Independence from advertising and affiliate relationships
- Last updated / last reviewed dates on content
- Conservative, evidence-aware health claims

### Related indexable pages (broader editorial framework)

| Topic | Location |
|-------|----------|
| Scoring methodology | `/methodology` — weighted criteria, what score means/does not mean |
| Source standards | `/source-standards` — NIH, FDA, FTC, PubMed, labels, certifications |
| Corrections process | `/corrections-policy` — report errors, logged update history |
| Conflict of interest | Affiliate disclosure + editorial policy independence statements |
| Brand/affiliate independence | Methodology, affiliate disclosure, editorial policy |

### Testing status definitions (`lib/schemas/product.ts`)

| Status | Meaning for editorial use |
|--------|---------------------------|
| **verified** | Third-party testing or certification captured with identifiable source (e.g. NSF listing) |
| **claimed** | Brand or retailer claims testing; SuppCheckr has not verified with certificate URL |
| **unknown** | No verifiable third-party certification captured |
| **not_claimed** | No testing claim identified |

### Review questions

- Should editorial policy **explicitly define** testing statuses and scoring independence?
- Is the **correction/update process** legally sufficient for accuracy representations?
- Should **affiliate independence** be repeated on methodology page (partially present)?

---

## J. Product image/legal asset review

| Item | Status |
|------|--------|
| Current product images | **Generic placeholders** (`ProductImagePlaceholder`) — label-first, no brand product photos |
| Copyrighted product images | **None added** |
| Amazon product images/assets | **None** |
| Placeholder labeling | Does not imply actual product photography |
| Future real images | Require rights, permissions, or API-compliant source (e.g. approved retailer/brand assets) |

### Review questions

- Are placeholder visuals **clear enough** that they are not misleading product photos?
- When real images are added, what **license/attribution** workflow is required?
- Does Amazon Associates program restrict image use even when affiliate is enabled?

---

## K. Attorney/manual review checklist

Use when engaging counsel or performing manual compliance review.

- [ ] Review all draft legal pages (`/privacy-policy`, `/terms-of-use`, `/medical-disclaimer`, `/affiliate-disclosure`, `/advertising-policy`)
- [ ] Review indexable trust pages (`/editorial-policy`, `/about`, `/contact`, `/corrections-policy`, `/source-standards`, `/methodology`)
- [ ] Confirm contact email is **help@suppcheckr.com** and mailbox is monitored
- [ ] Confirm privacy/cookie/analytics disclosures match actual site behavior (Vercel Analytics active)
- [ ] Confirm medical disclaimer sufficiency for supplement comparison content
- [ ] Confirm inline `MedicalDisclaimer` placement on product, guide, and compare pages
- [ ] Confirm affiliate disclosure accurately reflects **disabled** prelaunch state
- [ ] Plan active Amazon disclosure language for **post-approval only**
- [ ] Confirm ads/sponsored content policy before enabling live ad scripts
- [ ] Confirm terms limitations, IP provisions, and add **governing law/jurisdiction**
- [ ] Confirm footer and Trust navigation link placement
- [ ] Confirm no misleading product-image behavior (placeholders only)
- [ ] Confirm published content avoids disease-treatment claims, “Best Overall,” and “safe for everyone”
- [ ] Confirm risky-term validation (`config/risky-terms.ts`) aligns with legal guidance
- [ ] Confirm monetization config remains disabled until intentional activation phase

---

## L. Production readiness / legal activation checklist

**For later — not now.** Do not execute until attorney review and intentional launch approval.

- [ ] Attorney review complete for all legal pages
- [ ] Legal pages approved and dated
- [ ] Optionally remove paths from `DRAFT_LEGAL_PATHS` to make legal pages indexable (business decision)
- [ ] Optionally remove or adjust `LegalReviewBanner` after approval (production mode decision)
- [ ] Update active affiliate disclosures **only after** Amazon Associates approval
- [ ] Enable monetization config intentionally (`affiliate`, `ads`) after approval
- [ ] Run `npm run check`, `npm run build`, and full compliance QA
- [ ] Deploy intentionally; document activation date

---

## M. Open questions

1. Should legal pages remain **noindex after attorney review**, or become indexable for transparency/SEO?
2. Should **every product and guide page** include a short medical disclaimer above the fold, or is the current inline component sufficient?
3. Should **affiliate disclosure be repeated near every future outbound retailer CTA**?
4. What **jurisdiction/governing law** should Terms of Use specify?
5. Are **analytics/cookie disclosures** sufficient for Vercel Web Analytics without a consent banner?
6. Should **correction requests** use **help@suppcheckr.com** only, or should a contact form be added later?
7. Should **editorial policy** be expanded before or during attorney review?
8. When affiliate/ads activate, what **privacy policy updates** are required for CCPA/CPRA “sharing” definitions?
9. Is a formal **children’s privacy** statement needed beyond the under-13 paragraph?
10. Should **accessibility statement** be reviewed alongside legal pages?

---

## Phase 5D validation notes

*(Completed after `npm run check` and `npm run build` — see Cursor report.)*

**Files touched in Phase 5D:**

- `content/templates/legal-review-prep-packet-2026-06-30.md` — created (this document)
- `app/privacy-policy/page.tsx` — minimal analytics disclosure consistency edit (Vercel Web Analytics)

**Not changed:** monetization config, product YAML, scores, legal noindex behavior, legal review banners, SITE_MODE, affiliate/ads enable flags.

**Recommended commit message:** `Phase 5D: prepare legal review packet`

**Recommended next phase:** Phase 6 — engage attorney/manual compliance review using this packet; after approval, optional legal page indexing and separate post-approval monetization activation (Amazon Associates only after program approval).
