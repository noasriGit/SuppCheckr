# Phase 6C Pre-Application Walkthrough Report

**Date:** 2026-06-30  
**Phase:** 6C — final pre-application walkthrough (audit + small fixes only)  
**Git baseline:** `7313f6b` (Phase 6B) on `main`  
**Site mode:** `prelaunch` (unchanged)

---

## A. Scope and constraints

Phase 6C reviewed the public site and repository from the perspective of an Amazon Associates/manual application reviewer, a normal user evaluating trustworthiness, and a future legal/compliance reviewer. Work was limited to audit, validation, and small public copy fixes that could undermine application readiness.

**Constraints preserved (verified):**

| Constraint | Status |
|------------|--------|
| `SITE_MODE` | `prelaunch` (default in `config/site.ts`) |
| Affiliate links | Disabled (`affiliate.enabled: false`, `disableGlobally: true`) |
| All product `affiliate.enabled` | `false` (10 published products) |
| Amazon Associate tag | Absent / blank (`AMAZON_ASSOCIATE_TAG` unset) |
| Live Amazon URLs in published products | None (brand/retailer direct links only) |
| Live ad scripts | Disabled (`ads.enabled: false`, `loadScripts: false`) |
| Legal pages | Draft + noindex (`DRAFT_LEGAL_PATHS`) |
| Legal review banners | Present on legal pages via `LegalPageLayout` |
| Product facts/prices/scores/testing/statuses | Untouched |
| Third supplement category | Not started |
| Monetization activation | Not performed |

---

## B. Repo/pre-work confirmation

**Git state at audit start:**

- Branch: `main` (up to date with `origin/main`)
- Working tree: clean
- Latest commits: Phase 6B → 6A → 5D → 5C → 5B → 5A → 4H (Magnesium publish) → 4G …

**Required prior-phase artifacts confirmed:**

| Artifact | Path | Present |
|----------|------|---------|
| Phase 5B monetization checklist | `content/templates/monetization-readiness-checklist-2026-06-30.md` | Yes |
| Phase 5C external application checklist | `content/templates/external-application-readiness-checklist-2026-06-30.md` | Yes |
| Phase 5D legal review prep packet | `content/templates/legal-review-prep-packet-2026-06-30.md` | Yes |
| Phase 6A trust expansion report | `content/templates/phase-6a-public-trust-expansion-report-2026-06-30.md` | Yes |
| Phase 6B hub polish report | `content/templates/phase-6b-public-hub-polish-report-2026-06-30.md` | Yes |

**Published clusters confirmed:**

- Creatine: `status: published`, `noindex: false` across category, 5 products, 5 guides, ingredient, comparison, 7 brand pages
- Magnesium: same publication state across category, 5 products, 6 guides, ingredient, comparison, 7 brand pages

---

## C. Route inventory reviewed

### Core hubs

| Route | Indexable | Reviewed |
|-------|-----------|----------|
| `/` | Yes | Yes |
| `/about` | Yes | Yes |
| `/contact` | Yes | Yes |
| `/search` | No (utility hub) | Yes |
| `/supplements` | Yes | Yes |
| `/ingredients` | No (utility hub) | Yes |
| `/compare` | No (utility hub) | Yes |
| `/brands` | No (utility hub) | Yes |
| `/guides` | Yes | Yes |

### Trust / methodology

| Route | Indexable | Reviewed |
|-------|-----------|----------|
| `/methodology` | Yes | Yes |
| `/editorial-policy` | Yes | Yes |
| `/source-standards` | Yes | Yes |
| `/corrections-policy` | Yes | Yes |
| `/accessibility` | Yes | Yes |

### Legal / disclosure (draft, noindex)

| Route | Reviewed |
|-------|----------|
| `/privacy-policy` | Yes |
| `/terms-of-use` | Yes |
| `/medical-disclaimer` | Yes |
| `/affiliate-disclosure` | Yes |
| `/advertising-policy` | Yes |

### Creatine cluster

| Route | Indexable | Reviewed |
|-------|-----------|----------|
| `/supplements/creatine` | Yes | Yes |
| `/supplements/creatine/compare` | Yes | Yes |
| `/ingredients/creatine-monohydrate` | Yes | Yes |
| `/guides/what-is-creatine` | Yes | Yes |
| `/guides/how-to-choose-a-creatine-supplement` | Yes | Yes |
| `/guides/creatine-dosage-guide` | Yes | Yes |
| `/guides/creatine-safety-and-side-effects` | Yes | Yes |
| `/guides/creatine-monohydrate-vs-hcl` | Yes | Yes |
| `/supplements/creatine/products/optimum-nutrition-micronized-creatine-600g` | Yes | Yes |
| `/supplements/creatine/products/klean-athlete-klean-creatine` | Yes | Yes |
| `/supplements/creatine/products/nutricost-creatine-monohydrate-500g` | Yes | Yes |
| `/supplements/creatine/products/bulksupplements-creatine-monohydrate-1kg` | Yes | Yes |
| `/supplements/creatine/products/now-sports-creatine-monohydrate-capsules-120` | Yes | Yes |
| `/brands/optimum-nutrition` | Yes | Yes |
| `/brands/klean-athlete` | Yes | Yes |
| `/brands/nutricost` | Yes | Yes |
| `/brands/bulksupplements` | Yes | Yes |
| `/brands/now-foods` | Yes | Yes |

### Magnesium cluster

| Route | Indexable | Reviewed |
|-------|-----------|----------|
| `/supplements/magnesium` | Yes | Yes |
| `/supplements/magnesium/compare` | Yes | Yes |
| `/ingredients/magnesium` | Yes | Yes |
| `/guides/what-is-magnesium` | Yes | Yes |
| `/guides/how-to-choose-a-magnesium-supplement` | Yes | Yes |
| `/guides/magnesium-glycinate-vs-citrate` | Yes | Yes |
| `/guides/magnesium-dosage-guide` | Yes | Yes |
| `/guides/magnesium-side-effects-and-safety` | Yes | Yes |
| `/guides/types-of-magnesium` | Yes | Yes |
| `/supplements/magnesium/products/klean-athlete-klean-magnesium` | Yes | Yes |
| `/supplements/magnesium/products/nutricost-magnesium-citrate-120` | Yes | Yes |
| `/supplements/magnesium/products/now-foods-magnesium-malate-1000mg-180-tablets` | Yes | Yes |
| `/supplements/magnesium/products/pure-encapsulations-magnesium-citrate-malate-180` | Yes | Yes |
| `/supplements/magnesium/products/nature-made-magnesium-oxide-250mg-100-tablets` | Yes | Yes |
| `/brands/pure-encapsulations` | Yes | Yes |
| `/brands/nature-made` | Yes | Yes |

### Not linked from public hubs (acceptable)

- Placeholder category shells (`/supplements/protein-powder`, etc.) — statically generated but `noindex` / not featured
- Demo/archived entities — not in search index or hub lists
- `/ingredients/sample-vitamin-d3-form` — placeholder, noindex, not linked from hubs

---

## D. Reviewer-readiness findings

**A reviewer can quickly understand:**

| Question | Finding |
|----------|---------|
| What the site is | **Clear** — homepage, about, and methodology explain evidence-aware supplement comparison |
| What content is original | **Clear** — editorial policy and methodology describe SuppCheckr scoring, label review, and source standards |
| How product reviews work | **Clear** — product pages show scores, testing status, sources, dated manual pricing |
| How scoring works | **Clear** — `/methodology` explains criteria, weights, testing-status definitions, and boundaries |
| Source standards | **Clear** — `/source-standards` and per-page source lists |
| Testing statuses | **Clear** — methodology defines verified / claimed / unknown |
| Corrections | **Clear** — `/corrections-policy` and contact page |
| Contact | **Clear** — `help@suppcheckr.com` in footer, contact, about, privacy policy |
| Affiliate status | **Clear** — disabled globally; compact disclosure on product pages; full page explains future intent |
| Amazon Associates status | **Clear** — affiliate disclosure states not approved; no tags or Amazon URLs in published products |
| Ads status | **Clear** — advertising policy states live scripts disabled; labeled ad placeholders only |
| Product image placeholders | **Clear** — about, editorial policy, methodology explain label-first placeholders |
| Not medical advice | **Clear** — medical disclaimer linked from footer and product/comparison pages |

**Minor gaps addressed in this phase:** stale “draft comparison” subtitle on Creatine compare page; internal “cluster” headings on category/product pages; Phase 2 verdict placeholder on head-to-head compare template.

---

## E. Public stale wording / risky wording audit

### Stale/internal wording found and fixed

| Location | Issue | Action |
|----------|-------|--------|
| `content/comparisons/creatine-monohydrate-compared.yaml` subtitle | “Side-by-side **draft** comparison” on published compare page | Fixed → “Side-by-side comparison” |
| `content/categories/creatine.yaml` shortDescription | “First product **cluster**” | Fixed → category-focused wording |
| `content/categories/creatine.yaml` clusterScopeNote | “product **cluster**” | Fixed → “creatine category” |
| `content/categories/magnesium.yaml` clusterScopeNote | “product **cluster**” + internal slug | Fixed → “magnesium category” |
| `app/supplements/[category]/page.tsx` | “First product **cluster** scope” heading | Fixed → “Coverage scope” |
| `app/supplements/.../products/[productSlug]/page.tsx` | “Compare/Related in this **cluster**” | Fixed → “in this category” |
| `app/compare/[comparisonSlug]/page.tsx` | “Verdict placeholder … **Phase 2**” | Fixed → neutral editorial boundary copy |

### Acceptable public wording (not changed)

| Wording | Reason |
|---------|--------|
| “Affiliate links are disabled during prelaunch” | Factual current state |
| “Ad placeholder — no live scripts” | Intentional monetization placeholder |
| Product image “Image unavailable” / label-first placeholders | Intentional Phase 5A polish |
| Legal pages “draft prepared for later legal review” | Intentional prelaunch legal state |
| Methodology “We do not use Best Overall” | Prohibited-phrase example (negation) |
| Draft banners on `review_ready` / placeholder entity pages | Not shown on published indexable content |
| Guide YAML `editorial.updateLog` phase summaries | Not rendered publicly |

### Risky supplement/monetization wording

| Scan | Result |
|------|--------|
| Published YAML (`content/` excluding templates) | **0 risky-term lint errors** |
| Public TSX pages | Risky terms only as negations or policy examples |
| Published product retailer URLs | No `amazon.com` links |
| Active commission language | None on live pages |
| Active Amazon Associate disclosure | None (future-tense only on legal page) |

---

## F. Link/navigation findings

| Check | Result |
|-------|--------|
| Footer trust links (12 items) | All map to real routes in `config/site.ts` |
| Footer explore links (5 items) | All valid; Guides → `/guides` |
| Header main nav + Search | All valid |
| Homepage category cards | Only indexable Creatine + Magnesium |
| Homepage product cards | Only indexable published products |
| `/supplements` hub | Only `getIndexableCategories()` |
| `/ingredients` hub | Only creatine-monohydrate + magnesium |
| `/brands` hub | Only brands with published product reviews |
| `/guides` hub | Only indexable guides grouped by category |
| `/compare` hub | Links to `/supplements/{category}/compare` for published comparisons |
| Search index (`lib/seo/searchIndex.ts`) | Indexable entities + static pages only; legal pages excluded |
| Product CTA (`AffiliateButton`) | Shows “Check current price at retailer” with disabled-affiliate disclosure; links to brand/retailer URLs, not Amazon |
| Broken links to unpublished category shells from hubs | **None found** |

**Note:** No dedicated link-check CLI tool; audit performed via code-level route/link review and `npm run build` static path generation (67 pages).

---

## G. SEO/indexing findings

| Item | Status |
|------|--------|
| Creatine cluster indexable | Yes (`status: published`, `noindex: false`) |
| Magnesium cluster indexable | Yes |
| `/guides` indexable | Yes (added in Phase 6B; in `INDEXABLE_STATIC_PAGES` + sitemap) |
| Legal pages noindex | Yes (`DRAFT_LEGAL_PATHS` + `shouldNoindexStaticPath`) |
| Utility hubs noindex | Yes (`/search`, `/compare`, `/ingredients`, `/brands`) |
| Draft placeholder categories | Not featured on hubs; entity pages noindex when placeholder/draft |
| Sitemap (`app/sitemap.ts`) | Indexable static pages + published entities only |
| Search index | Matches sitemap intent; excludes legal and non-indexable entities |
| Metadata on hubs | No stale internal wording after fixes |
| “Best supplements” overclaims | Not present in SEO templates |

---

## H. Monetization-disabled findings

| Check | Value |
|-------|-------|
| `monetizationConfig.affiliate.enabled` | `false` |
| `monetizationConfig.affiliate.disableGlobally` | `true` |
| All 10 published products `affiliate.enabled` | `false` |
| `amazonAssociateTag` | `""` (env unset) |
| Live Amazon URLs in published YAML | None |
| Amazon product images/assets | None |
| Amazon reviews/Q&A as evidence | None |
| `monetizationConfig.ads.enabled` | `false` |
| `monetizationConfig.ads.loadScripts` | `false` |
| Active commission language on public pages | None |
| Active Amazon Associate language | None (future-tense on legal page only) |
| `AffiliateButton` when affiliate disabled | Direct retailer link or disabled CTA + compact disclosure |
| `shouldLoadLiveAds()` | Always `false` in default config |

---

## I. Legal/disclosure findings

| Check | Status |
|-------|--------|
| Legal pages draft/noindex | Yes |
| `LegalReviewBanner` on legal pages | Yes (`requiresLegalReview` on legal page layout) |
| Footer links to all legal/disclosure pages | Yes |
| Affiliate disclosure — links disabled | Yes (current status section) |
| Advertising policy — live ads disabled | Yes |
| Medical disclaimer linked | Yes (footer + inline on product/compare pages) |
| Privacy policy mentions Vercel Web Analytics | Yes; `@vercel/analytics` loaded in `app/layout.tsx` |
| Contact email | `help@suppcheckr.com` |
| Claims of attorney review | **None** |

---

## J. Contact email confirmation

Official contact email **`help@suppcheckr.com`** confirmed in:

- `config/site.ts` (`contactEmail` default)
- Footer (`SiteChrome.tsx`)
- `/contact`, `/about`, `/privacy-policy`

No mismatches found.

---

## K. Small fixes made

| File | Change |
|------|--------|
| `content/comparisons/creatine-monohydrate-compared.yaml` | Removed “draft” from published comparison subtitle |
| `content/categories/creatine.yaml` | Removed “cluster” from shortDescription and clusterScopeNote |
| `content/categories/magnesium.yaml` | Removed “cluster” and internal slug from clusterScopeNote |
| `app/supplements/[category]/page.tsx` | “First product cluster scope” → “Coverage scope” |
| `app/supplements/[category]/products/[productSlug]/page.tsx` | “cluster” → “category” in section headings |
| `app/compare/[comparisonSlug]/page.tsx` | Removed Phase 2 placeholder verdict; added neutral editorial boundary copy |

**Not changed:** product facts, prices, scores, testing statuses, publication statuses, affiliate/ads config, legal indexing, SITE_MODE.

---

## L. Remaining blockers before Amazon Associates application

1. **`help@suppcheckr.com` mailbox** must be configured and monitored for application correspondence and user contact.
2. **Legal pages remain draft/noindex** and have not been attorney-reviewed — acceptable for pre-application but not for production/legal indexing.
3. **Amazon Associates approval has not happened yet** — do not enable affiliate tags or live Amazon links until approved.
4. **Do not add active affiliate disclosures** implying commissions are currently earned — current prelaunch-safe wording is correct.
5. **Manual live-site check after deploy** — verify rendered pages, sitemap, and contact mailto on production.
6. **Optional attorney review** before production mode, legal page indexing, or monetization activation.

---

## M. Manual checks Noah must do outside the repo

- [ ] Send a test email to [help@suppcheckr.com](mailto:help@suppcheckr.com) and confirm receipt
- [ ] Visit https://suppcheckr.com on desktop and mobile after deploy
- [ ] Spot-check main hubs: `/`, `/supplements`, `/guides`, `/methodology`, `/contact`
- [ ] Open `/sitemap.xml` in browser and confirm only intended public URLs
- [ ] Optionally use Google Search Console URL inspection for key hubs (`/`, `/supplements/creatine`, `/supplements/magnesium`, `/guides`)
- [ ] Review current [Amazon Associates program policies](https://affiliate-program.amazon.com/help/operating/policies) and application requirements before applying
- [ ] Confirm Vercel `SITE_MODE=prelaunch` and no `AMAZON_ASSOCIATE_TAG` in production env

---

## N. Final readiness verdict

**Ready for Amazon Associates application from a site/repo perspective**, subject to manual live verification and mailbox setup.

The site presents:

- Two published, indexable supplement categories with original editorial content
- Clear trust/methodology/editorial/source/corrections pages
- Disabled affiliate and ad monetization with accurate disclosures
- Conservative supplement claim language
- Consistent contact email and prelaunch-safe legal posture

Remaining blockers are operational (email, legal review optional, Amazon approval pending) rather than structural site deficiencies.

---

## O. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — typecheck, eslint, 24 tests, content validation (0 errors) |
| `npm run build` | **Pass** — 67 static pages generated |

**Post-fix confirmations:**

| Item | Confirmed |
|------|-----------|
| `SITE_MODE` | `prelaunch` |
| Affiliate disabled globally | Yes |
| All product `affiliate.enabled` | `false` |
| Amazon tag absent | Yes |
| Ads/loadScripts disabled | Yes |
| Legal pages draft/noindex | Yes |
| Legal review banners | Yes |
| No active Amazon Associate language added | Yes |
| Product facts/prices/scores/testing/statuses unchanged | Yes |
| Creatine published/indexable | Yes |
| Magnesium published/indexable | Yes |
| Contact email | `help@suppcheckr.com` |
| No third category started | Yes |

---

## P. Recommended commit message

```
Phase 6C: complete pre-application walkthrough
```

---

## Recommended next phase

**Phase 7A — Amazon Associates application submission** (after manual live checks and mailbox verification):

1. Deploy Phase 6C commit to production (prelaunch mode unchanged)
2. Complete manual checklist (Section M)
3. Submit Amazon Associates application with site URL and content description
4. Do **not** enable affiliate tags until explicit approval phase
5. Optionally begin attorney review of legal pages in parallel (still noindex until complete)
