# Phase 6A Public Trust Expansion Report

**Date:** 2026-06-30  
**Phase:** 6A — public methodology/trust expansion (no monetization, no product content changes)  
**Git baseline:** `5facf15` (Phase 5D) on `main`  
**Site mode:** `prelaunch` (unchanged)

---

## A. Scope and constraints

Phase 6A expanded public-facing trust and methodology pages so users, search engines, and future application reviewers can understand how SuppCheckr scores supplements, evaluates sources, handles corrections, and maintains editorial independence.

**Constraints preserved:**

| Constraint | Status |
|------------|--------|
| `SITE_MODE` | `prelaunch` (default in `config/site.ts`) |
| Affiliate links | Disabled (`affiliate.enabled: false`, `disableGlobally: true`) |
| Live ad scripts | Disabled (`ads.enabled: false`, `loadScripts: false`) |
| Amazon Associate tag | Absent / blank |
| Legal pages | Draft + noindex (`DRAFT_LEGAL_PATHS`) |
| Product facts/prices/scores/testing/statuses | Untouched (no YAML changes) |
| Third supplement category | Not started |
| Monetization activation | Not performed |

---

## B. Pages audited

| Page | Path | Pre-audit findings |
|------|------|-------------------|
| Methodology | `/methodology` | Basic structure present; missing detailed criterion explanations, ranking boundaries, testing-status definitions, category-specific narrative, and product-image placeholder note |
| Editorial Policy | `/editorial-policy` | Thin (3 short sections); missing prelaunch affiliate stance, source-first process, pricing dates, image placeholder explanation |
| Source Standards | `/source-standards` | Stale internal phase language (“Phase 1… Phase 2”); no source tiers; no testing-status definitions |
| Corrections Policy | `/corrections-policy` | Minimal; no direct email, no request checklist, limited scope description |
| About | `/about` | Reasonable; could clarify boundaries and link to methodology/source standards |
| Contact | `/contact` | Email present; could clarify corrections workflow and no backend form |
| Accessibility | `/accessibility` | Minimal feedback section; deferred to contact page only |
| Footer / nav | `config/site.ts`, `SiteChrome.tsx` | Trust links already complete; no changes required |
| Legal pages | `/privacy-policy`, etc. | Draft/noindex with `LegalReviewBanner` — not rewritten |

**Stale wording removed or avoided:**

- Removed “Phase 1 includes infrastructure; strict enforcement begins in Phase 2” from source standards
- No active Amazon Associate or commission-earning language added to indexable trust pages
- Methodology explicitly disclaims “Best Overall” / “Best for Everyone” (as negation, not promotion)

---

## C. Public trust pages updated

| File | Change |
|------|--------|
| `app/methodology/page.tsx` | Major expansion |
| `app/editorial-policy/page.tsx` | Major expansion |
| `app/source-standards/page.tsx` | Major expansion |
| `app/corrections-policy/page.tsx` | Major expansion |
| `app/about/page.tsx` | Moderate polish |
| `app/contact/page.tsx` | Moderate polish |
| `app/accessibility/page.tsx` | Minor polish (direct email + corrections link) |

---

## D. Methodology improvements

Added public explanations for:

- All nine scoring criteria with plain-language descriptions mapped to `CRITERIA_LABELS`
- How scoring works (category profiles, source basis, dated manual prices, editorial-not-medical framing)
- What scores do **not** mean (no medical advice, no safety guarantee, no paid placement)
- Product ranking boundaries (no “Best Overall,” no condition-based rankings)
- Third-party testing statuses: **verified**, **claimed**, **unknown / not claimed**
- Category-specific Creatine and Magnesium weight tables with narrative emphasis
- Product image placeholder cross-link to editorial policy
- Default criteria weights table (retained from prior version)

---

## E. Editorial policy improvements

Added sections for:

- Purpose and editorial independence
- Affiliate links disabled during prelaunch; future affiliate would not affect scoring
- Source-first review process
- Conservative claims and testing language
- Dated manual pricing
- Updates and corrections workflow with `help@suppcheckr.com`
- Product image placeholder explanation
- What SuppCheckr is not (no medical/legal authority claims)

---

## F. Source standards improvements

Added:

- Five-tier source quality hierarchy (regulatory/official → brand label → retailer → marketing → rejected sources)
- Third-party testing status definitions with scope caveats
- Pricing source rules (manual, dated, not live feeds)
- Citation integrity and conflicting-information handling
- Explicit rejection of Amazon reviews/Q&A, influencer posts, forums as primary evidence

---

## G. Corrections policy improvements

Added:

- Direct correction email: `help@suppcheckr.com`
- Request checklist (URL, product/source, proposed correction, supporting link)
- Review scope (label facts, pricing, testing status, citations, claims, accessibility)
- Process notes (update logs, unsupported-claim rejection)
- Clarification that corrections are fact-driven, not sponsorship-driven

---

## H. Testing status definitions added

Public definitions added in:

- `/methodology` — “Third-party testing statuses” section
- `/source-standards` — “Third-party testing evidence” section

Definitions cover **verified**, **claimed**, and **unknown / not claimed**, with clarifications that verified ≠ FDA approval, verified ≠ suitability for everyone, and testing scope (SKU/batch/lot/program) may differ.

---

## I. Product image placeholder explanation added

Added in:

- `/editorial-policy` — dedicated “Product image placeholders” section
- `/methodology` — brief “Product images” section with link to editorial policy
- `/about` — “Product images” section

---

## J. Navigation/footer changes

**None required.** Footer Trust section in `config/site.ts` already links:

About, Editorial Policy, Methodology, Medical Disclaimer, Affiliate Disclosure, Advertising Policy, Privacy Policy, Terms of Use, Corrections Policy, Source Standards, Accessibility, Contact.

Main nav includes Methodology. Legal pages remain linked with draft/noindex + `LegalReviewBanner` on draft legal routes only.

---

## K. Monetization/legal constraints preserved

| Check | Result |
|-------|--------|
| `monetizationConfig.affiliate.enabled` | `false` |
| `monetizationConfig.affiliate.disableGlobally` | `true` |
| `monetizationConfig.ads.enabled` | `false` |
| `monetizationConfig.ads.loadScripts` | `false` |
| `AMAZON_ASSOCIATE_TAG` default | `""` |
| Product `affiliate.enabled` | All `false` (no `enabled: true` in product YAML) |
| `DRAFT_LEGAL_PATHS` | Unchanged |
| Legal review banners | Present on draft legal pages via `requiresLegalReview` |

---

## L. Product content untouched confirmation

- **No changes** to `content/products/**`, `content/categories/**` (except this report template), scoring YAML, comparisons, guides, or ingredients
- Creatine cluster: `status: published`, `noindex: false`
- Magnesium cluster: `status: published`, `noindex: false`
- No third category started

---

## M. Remaining recommendations

1. **Phase 6B (optional):** Add structured FAQ schema or on-page FAQ block on `/methodology` for common reviewer questions (affiliate independence, testing status, placeholder images).
2. **Legal review:** After attorney review, update `DRAFT_LEGAL_PATHS` pages and remove noindex — do not conflate with trust pages updated here.
3. **Mailbox verification:** Confirm `help@suppcheckr.com` is monitored before Amazon Associates application.
4. **Homepage trust strip:** Consider a compact “How we score” link cluster on homepage (already links to methodology; optional enhancement only).
5. **Ingredients hub:** `/ingredients` still shows “In development” for placeholder content — acceptable for prelaunch but worth addressing in a future hub-polish phase.

---

## N. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — typecheck, eslint, 24 tests, validate:content (0 errors), lint:content (0 errors, template warnings only) |
| `npm run build` | **Pass** — 66 static/SSG routes generated |

**Constraint spot checks:**

| Item | Confirmed |
|------|-----------|
| `SITE_MODE` prelaunch | Yes (`config/site.ts` default) |
| Contact email | `help@suppcheckr.com` |
| Creatine published/indexable | Yes |
| Magnesium published/indexable | Yes |
| No Amazon Associate language on new trust pages | Yes |
| Legal pages draft/noindex | Yes |

---

## O. Recommended commit message

```
Phase 6A: expand public methodology and trust pages
```

---

## Related phase artifacts

- Phase 4H: `content/templates/magnesium-phase-4h-publication-report-2026-06-26.md`
- Phase 5B: `content/templates/monetization-readiness-checklist-2026-06-30.md`
- Phase 5C: `content/templates/external-application-readiness-checklist-2026-06-30.md`
- Phase 5D: `content/templates/legal-review-prep-packet-2026-06-30.md`
