# Monetization Readiness Checklist — Phase 5B

**Date:** 2026-06-30  
**Phase:** 5B — Amazon Associates / monetization readiness prep (no activation)  
**Git baseline:** `8884e64` (Phase 5A) on `main`, clean working tree  
**Site mode:** `prelaunch` (must remain until intentional production launch)

---

## A. Current monetization state

Audited from `config/monetization.ts`, product YAML, legal pages, and affiliate UI components.

| Control | Current value | Status |
|---------|---------------|--------|
| Global affiliate (`affiliate.enabled`) | `false` | **Inactive** |
| Global affiliate kill switch (`affiliate.disableGlobally`) | `true` | **Inactive** |
| Per-product `affiliate.enabled` (all published products) | `false` | **Inactive** |
| Amazon Associate tag (`AMAZON_ASSOCIATE_TAG` / `amazonAssociateTag`) | blank / absent | **Inactive** |
| Live ads (`ads.enabled`) | `false` | **Inactive** |
| Ad script loading (`ads.loadScripts`) | `false` | **Inactive** |
| Ad placeholders (`ads.showPlaceholders`) | `true` | Labeled placeholders only; no network requests |
| Legal pages (`DRAFT_LEGAL_PATHS`) | draft + noindex | **Not final legal docs** |
| Legal review banner | shown on legal pages in prelaunch | **Present** |
| `SITE_MODE` | `prelaunch` (default in `config/site.ts`) | **Prelaunch** |
| Product images | placeholder components (`ProductImagePlaceholder`) unless safe existing asset | **No Amazon/copyrighted product photos** |

**Published indexable clusters (prelaunch):**

- Creatine cluster — published and indexable
- Magnesium cluster — published and indexable (Phase 4H report: `content/templates/magnesium-phase-4h-publication-report-2026-06-26.md`)
- Phase 5A product image placeholder polish — committed (`8884e64`)

**Affiliate link behavior today:**

- `AffiliateButton` uses plain retailer URLs when affiliate is globally disabled (`isAffiliateEnabledForPath` returns `false`).
- `buildAmazonLink` returns `#amazon-placeholder` with `isPlaceholder: true` when affiliate is disabled, tag is blank, or URL is invalid.
- No Amazon Associate tags are appended to outbound links.

**Ad behavior today:**

- `AdSlot` renders labeled dashed-border placeholders only.
- `shouldLoadLiveAds()` returns `false` — no AdSense or third-party ad scripts load.

---

## B. What is safe now

- Prelaunch editorial content (Creatine + Magnesium clusters) can remain informational and indexable.
- Affiliate disclosure copy may state that **affiliate links are disabled during prelaunch**.
- Product CTAs may use **non-affiliate / plain retailer link** behavior (current `AffiliateButton` implementation).
- Future affiliate intent may be described conditionally (“if enabled in the future…”).
- Ad placeholders may remain visible and labeled as non-functional placeholders.
- No commissions or active Amazon Associates membership should be claimed on the live site.

---

## C. What is not allowed yet

Do **not** do any of the following until Amazon Associates approval and an intentional activation phase:

- Use **“As an Amazon Associate I earn from qualifying purchases”** as active, displayed membership language.
- Add Amazon Associate tags to URLs or environment.
- Add live Amazon affiliate links or Product Advertising API integration.
- Use Amazon product images, Amazon reviews, or Amazon Q&A as evidence.
- Enable live ad scripts (`ads.enabled` + `ads.loadScripts`).
- Set any product `affiliate.enabled: true`.
- Set `affiliate.disableGlobally: false` or `affiliate.enabled: true` in config.
- Make legal pages indexable or remove draft/legal-review banners without attorney review.
- Switch `SITE_MODE` to `production` as part of monetization prep.
- Change product rankings, prices, testing statuses, scores, or published statuses for monetization.

---

## D. Amazon Associates application readiness checklist

Use this before submitting an Amazon Associates application.

### Content and site purpose

- [x] Published supplement comparison content exists (Creatine cluster)
- [x] Published supplement comparison content exists (Magnesium cluster)
- [x] Clear site purpose on homepage and About page
- [x] Editorial methodology and trust pages visible (`/methodology`, `/editorial-policy`, `/source-standards`)
- [ ] Contact email functional and monitored (`CONTACT_EMAIL` / `hello@suppcheckr.com`)
- [ ] Site does not look unfinished on key landing and product pages (ongoing UX polish)

### Legal and disclosure pages (exist but need final review)

- [x] Privacy Policy page exists — draft/noindex
- [x] Terms of Use page exists — draft/noindex
- [x] Medical Disclaimer page exists — draft/noindex
- [x] Affiliate Disclosure page exists — draft/noindex, future-safe copy
- [x] Advertising Policy page exists — draft/noindex, states live ads disabled
- [ ] Attorney review completed for all legal pages before treating as final
- [ ] Affiliate disclosure page finalized for activation (Amazon-required language added only after approval)

### Product and editorial compliance

- [x] Product pages include affiliate disclosure area (`AffiliateDisclosure` component)
- [x] Product claims are conservative; no disease-treatment claims in published content validation
- [x] No misleading “official product photo” placeholders (Phase 5A placeholder polish)
- [x] Published products require `affiliate.enabled: false` (enforced in `validatePublishedProduct`)
- [x] Prices show last-checked dates; no live Amazon pricing API
- [x] No “Best Overall” or “Best for Everyone” positioning

### Technical pre-activation state (must remain until approval)

- [x] `affiliate.disableGlobally: true`
- [x] `affiliate.enabled: false`
- [x] `AMAZON_ASSOCIATE_TAG` blank
- [x] `ads.loadScripts: false`
- [x] Legal pages in `DRAFT_LEGAL_PATHS` / noindex

---

## E. Later activation checklist (do not execute in Phase 5B)

Execute only after Amazon Associates approval and a dedicated activation phase with full compliance QA.

1. **Obtain Amazon Associates approval** and record approval date.
2. **Store Associate tag securely** — set `AMAZON_ASSOCIATE_TAG` in deployment environment (never commit a real tag to git).
3. **Attorney review legal pages** — Privacy, Terms, Medical Disclaimer, Affiliate Disclosure, Advertising Policy.
4. **Update Affiliate Disclosure page** with Amazon-required active disclosure language only after approval (e.g. FTC/Amazon-compliant wording verified at activation time).
5. **Update config deliberately** in `config/monetization.ts`:
   - Set `affiliate.enabled: true` only when ready.
   - Set `affiliate.disableGlobally: false` only when ready.
   - Do not enable both globally and per-route disable without reviewing `disableRoutes`.
6. **Enable per-product affiliate selectively** — set `affiliate.enabled: true` only on products with verified Amazon URLs and editorial sign-off.
7. **Verify link-level disclosures** — conspicuous disclosure near affiliate CTAs on product, comparison, and guide pages.
8. **Run content validation** — `npm run validate:content` must pass (published products with `affiliate.enabled: true` will fail until validation rules are updated intentionally).
9. **Decide on legal page indexing** — remove from `DRAFT_LEGAL_PATHS` / allow index only after attorney review if desired.
10. **Ads (separate decision)** — if enabling ads later: set `ads.enabled` and `ads.loadScripts`, update Privacy Policy and Advertising Policy, verify cookie/consent requirements.
11. **Full compliance QA before deploy:**
    - No affiliate links render without tag + enabled flags
    - Disclosure visible on pages with affiliate CTAs
    - Prices and product facts unchanged unless separately reviewed
    - Amazon Operating Agreement and Program Policies reviewed at activation time
12. **Optional:** Switch `SITE_MODE` to `production` only as part of a separate launch decision — not required for affiliate activation alone.

---

## F. Risks / open questions

| Risk / question | Notes |
|-----------------|-------|
| Attorney review for legal pages | All legal pages are draft placeholders with `LegalReviewBanner`; not final legal documentation. |
| Amazon disclosure language | Exact required wording must be verified against current Amazon Associates Program policies at activation time — do not copy stale templates. |
| FTC disclosure placement | Disclosures must be clear and conspicuous near affiliate links when active; current compact module is prelaunch-only. |
| Amazon API / image rules | Do not use Product Advertising API or Amazon-hosted product images without explicit policy compliance review. |
| Price freshness | Manual prices with `lastPriceCheckedAt` — live pricing requires separate API approval and caveats. |
| Amazon reviews as evidence | Never use Amazon reviews or Q&A as editorial evidence (project rule). |
| Validation gate | `validatePublishedProduct` rejects `affiliate.enabled: true` — update validation intentionally when activating. |
| Env vs config | Enable flags live in `config/monetization.ts`, not env vars — deployment process must avoid accidental config commits. |

---

## G. Affiliate UI / copy audit (Phase 5B)

| Location | Current copy / behavior | Prelaunch-safe? |
|----------|-------------------------|-----------------|
| `AffiliateDisclosure` (compact) | “Affiliate links are disabled during prelaunch…” | **Yes** |
| `AffiliateDisclosure` (full) | “Affiliate links are currently disabled during prelaunch…” | **Yes** |
| `AffiliateButton` (disabled) | Plain retailer link or disabled stub; no Amazon CTA label | **Yes** |
| `app/affiliate-disclosure/page.tsx` | States links disabled; not approved for Amazon Associates; future conditional language | **Yes** |
| `app/advertising-policy/page.tsx` | Live ad scripts disabled; placeholders explained | **Yes** |
| `app/terms-of-use/page.tsx` | Live affiliate links and ad scripts disabled as of page date | **Yes** |
| `app/privacy-policy/page.tsx` | Monetization data collection described as future-only | **Yes** |
| `AdSlot` | “Ad placeholder — no live scripts or third-party requests” | **Yes** |

**Not present (correct):** “As an Amazon Associate I earn from qualifying purchases” as active sitewide copy.

---

## H. Config / environment reference

See `.env.example` and comments in `config/monetization.ts`.

| Variable / setting | Phase 5B value | Purpose |
|--------------------|----------------|---------|
| `SITE_MODE` | `prelaunch` | Controls crawlers, demo banners, legal review banners |
| `AMAZON_ASSOCIATE_TAG` | *(unset / blank)* | Future Amazon tag — never commit a real value |
| `CONTACT_EMAIL` | `hello@suppcheckr.com` (default) | Contact for Associates application |
| `NEXT_PUBLIC_SITE_URL` | `https://suppcheckr.com` | Canonical site URL |
| `affiliate.enabled` | `false` | Global affiliate switch (config file) |
| `affiliate.disableGlobally` | `true` | Hard kill switch (config file) |
| `ads.enabled` | `false` | Live ads switch (config file) |
| `ads.loadScripts` | `false` | Third-party ad script loading (config file) |

---

## I. Tests and guards

| Guard | Location |
|-------|----------|
| Affiliate placeholder when disabled | `lib/__tests__/core.test.ts` — `buildAmazonLink` |
| Affiliate path disabled globally | `lib/__tests__/core.test.ts` — `isAffiliateEnabledForPath` |
| Ads scripts do not load | `lib/__tests__/core.test.ts` — `shouldLoadLiveAds` |
| Published product affiliate must be false | `lib/validation/publishedContent.ts` |
| Draft legal paths noindex | `lib/seo/indexing.ts` — `DRAFT_LEGAL_PATHS` |

---

## J. Phase 5B completion criteria

- [x] This checklist document created
- [x] Affiliate UI/copy verified prelaunch-safe (no changes required)
- [x] Legal pages verified draft/noindex and future-safe
- [x] Env/config documentation added (`.env.example`, `config/monetization.ts` comments)
- [x] Monetization guard tests added/updated
- [x] `npm run check` passes
- [x] `npm run build` passes
- [x] No monetization features enabled
- [x] No product content facts/prices/testing/scores changed

**Recommended next phase:** Phase 5C — Amazon Associates application submission prep (external): verify contact email, final UX pass on key pages, optional attorney consult scheduling. Do not enable monetization until approval.

**Recommended commit message:** `Phase 5B: prepare monetization readiness checklist`
