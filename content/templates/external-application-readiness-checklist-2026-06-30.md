# External Application Readiness Checklist — Phase 5C

**Date:** 2026-06-30  
**Phase:** 5C — external application prep / trust polish (no monetization activation)  
**Git baseline:** `4dec777` (Phase 5B) on `main`  
**Site mode:** `prelaunch` (must remain until intentional production launch)

---

## A. Current site state

| Item | Status |
|------|--------|
| Creatine cluster | Published and indexable |
| Magnesium cluster | Published and indexable |
| `SITE_MODE` | `prelaunch` |
| Affiliate links | Disabled (`affiliate.enabled: false`, `disableGlobally: true`) |
| Live ad scripts | Disabled (`ads.enabled: false`, `loadScripts: false`) |
| Amazon Associate tag | Absent / blank |
| Legal pages | Draft + noindex (`DRAFT_LEGAL_PATHS`) |
| Product images | Polished placeholders (`ProductImagePlaceholder`) — no Amazon/copyrighted photos |
| Contact email | `help@suppcheckr.com` (`CONTACT_EMAIL` default in `config/site.ts`) |

**Related phase artifacts:**

- Phase 4H Magnesium publication report: `content/templates/magnesium-phase-4h-publication-report-2026-06-26.md`
- Phase 5A product image placeholder polish: commit `8884e64`
- Phase 5B monetization readiness checklist: `content/templates/monetization-readiness-checklist-2026-06-30.md`

---

## B. Amazon Associates application prep checklist

Use before submitting an Amazon Associates application.

- [ ] Site has original published content (Creatine + Magnesium clusters)
- [ ] Site has a clear topic/purpose (supplement comparison by label transparency, testing, value, etc.)
- [ ] Site has functional navigation (header, footer, category hubs, search)
- [ ] Site has product review pages (10 published products across two categories)
- [ ] Site has comparison/category pages (Creatine and Magnesium compare tables)
- [ ] Site has visible trust/editorial methodology content (`/methodology`, `/editorial-policy`, `/source-standards`)
- [ ] Site has contact email `help@suppcheckr.com` visible on contact page and footer
- [ ] Legal/disclosure pages exist but need final legal review before production/indexing
- [ ] Affiliate disclosure copy is future-safe but not active-member language (`/affiliate-disclosure`)
- [ ] No active Amazon affiliate links before approval
- [ ] No Amazon Associate tag before approval (`AMAZON_ASSOCIATE_TAG` unset)
- [ ] No Amazon product images pulled from Amazon
- [ ] No Amazon reviews/Q&A used as editorial evidence

---

## C. Pre-application manual checks

Run these manually before submitting external applications (Amazon Associates, ad networks, etc.).

- [ ] Verify `help@suppcheckr.com` mailbox works and is monitored
- [ ] Verify footer/contact links work (`/contact`, `/about`, legal pages)
- [ ] Verify main navigation works on mobile and desktop
- [ ] Verify product pages look complete despite no product photos (label-first placeholders are acceptable)
- [ ] Verify no obvious “draft,” “demo,” “placeholder,” or “pending” language appears in **published** user-facing copy — except honest product-image placeholder language (e.g. “Image unavailable,” “Product photo not provided”)
- [ ] Verify sitemap includes Creatine and Magnesium URLs
- [ ] Verify legal pages are accessible but draft/noindex
- [ ] Verify site speed/build health (`npm run check`, `npm run build`)
- [ ] Verify no broken internal links on published pages

---

## D. Later activation checklist (after Amazon approval)

Do **not** run until Amazon Associates (or other programs) are approved and an intentional activation phase is approved.

- [ ] Verify current Amazon Operating Agreement and disclosure requirements
- [ ] Add Amazon Associate tag only after approval (`AMAZON_ASSOCIATE_TAG` in deployment secrets)
- [ ] Update affiliate disclosure with active required language only after approval
- [ ] Enable affiliate config intentionally (`affiliate.enabled`, per-product `affiliate.enabled`)
- [ ] Enable product affiliate links selectively
- [ ] Update validation rules intentionally (`scripts/validate-content.ts`, tests)
- [ ] Add conspicuous link-level disclosures near affiliate CTAs
- [ ] Run full compliance QA (links, disclosures, claim language, legal pages)
- [ ] Keep claim language conservative (no disease-treatment claims, no “Best Overall”)

See also: `content/templates/monetization-readiness-checklist-2026-06-30.md` section D.

---

## E. Open risks

| Risk | Notes |
|------|-------|
| Legal pages need attorney review | All legal pages remain draft/noindex with `LegalReviewBanner`; not final legal documentation |
| Amazon policy language may change | Re-check Operating Agreement and disclosure rules at activation time |
| Product prices are not live | Manual prices with last-checked dates; always caveat in copy |
| Real product images require rights | Placeholders remain until repo-owned assets or API-compliant sources are secured |
| Contact email must be monitored | `help@suppcheckr.com` should receive and respond to corrections/application inquiries |

---

## Phase 5C scope completed (2026-06-30)

- Contact email standardized to `help@suppcheckr.com`
- Trust polish on homepage, about, contact, footer, editorial policy
- Creatine product SEO descriptions: removed stale “Draft” prefix
- External application checklist created (this document)
- Monetization constraints unchanged (affiliate/ads disabled, no Amazon tag)

**Recommended commit message:** `Phase 5C: prep external application readiness`

**Recommended next phase:** Phase 5D or Phase 6 — attorney legal review prep, then post-approval Amazon Associates activation (only after approval and intentional config changes).
