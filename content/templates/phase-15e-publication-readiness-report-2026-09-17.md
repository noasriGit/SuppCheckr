# Phase 15E — CoQ10 Publication Candidate

**Date:** 2026-09-17  
**Phase:** 15E — prepare eight CoQ10 routes as published/indexable after a later merge  
**Git baseline:** `68b1c1aaa322cdfe3536c13216a987519e7d7739` (merge of PR #7 / Phase 15D) on `main`  
**Branch:** `release/coq10-phase-15e-publication`  
**Site mode:** `prelaunch` (unchanged)  
**Affiliate links:** disabled  
**Recommended commits:** `release: prepare the CoQ10 cluster for publication` then `test: verify the CoQ10 publication candidate`

This report is a publication-candidate record. The Phase 15E PR must remain **unmerged**. Do not deploy it, submit it to Google Search Console, or request indexing from this branch.

---

## A. Phase A — PR #7 merge

| Item | Result |
|------|--------|
| PR | [#7](https://github.com/noasriGit/SuppCheckr/pull/7) **MERGED** |
| Merge commit | `68b1c1aaa322cdfe3536c13216a987519e7d7739` |
| Merged at | 2026-09-17T17:43:37Z |
| Main CI | **success** — [run 35254478523](https://github.com/noasriGit/SuppCheckr/actions/runs/35254478523) |
| Vercel Production | **success** for `68b1c1a` (deployment `6508703453`) |
| Production sitemap after merge | **77** URLs; **0** CoQ10 / ubiquinol loc entries |
| Production indexability | CoQ10 routes were draft/noindex on `main`; not in `/supplements` |

PR #7 review confirmed the five cluster pages, three locked product records, conservative medical language, no “Best Overall,” no affiliate mappings, draft/noindex CoQ10 routes, and no unrelated production changes.

---

## B. Evidence refresh (2026-09-17)

Official brand PDPs only. No Amazon, snippets, AutoShip, coupons, or alternate counts.

| Product | Official source | Availability | One-time price | Form / strength / count | Testing | Change vs lock |
|---------|-----------------|--------------|----------------|-------------------------|---------|----------------|
| Life Extension Super Ubiquinol CoQ10, 100 mg, 60 softgels (item 01929, UPC 737870192961) | lifeextension.com item 01929 | In stock | **$37.50** | Ubiquinol (Kaneka) / 1 softgel / 60 | unknown | **Unchanged** |
| Jarrow Q-absorb, 100 mg, 60 softgels | jarrow.com Q-absorb 100 mg softgels | In stock | **$34.99** | Ubiquinone / 1 softgel / 60; contains soy; caramel/carob color agents | unknown | **Unchanged** |
| NOW Foods CoQ10, 200 mg, 60 veg capsules (SKU 3176, UPC 733739031761) | nowfoods.com SKU 3176 | In stock | **$37.99** | Ubiquinone / 1 veg capsule / 60 | manufacturer-claimed only | **Unchanged** |

Price math unchanged: LE $0.63 / serving and per 100 mg; Jarrow $0.58 / serving and per 100 mg; NOW $0.63 / serving and $0.32 per 100 mg.

Scores unchanged: LE **74**, Jarrow **74**, NOW **86**.

No formulation, strength, count, or form change. No availability blocker.

---

## C. Publication set

Eight routes prepared with established `status: published` + `noindex: false` (indexable = published && !noindex && !isPlaceholder):

| Route | Title | Description | Intent |
|-------|-------|-------------|--------|
| `/supplements/coq10` | Best CoQ10 Supplements Compared by Label | Compare three CoQ10 products by ubiquinone vs ubiquinol, dose, testing notes, and dated price per 100 mg. No universal winner. Not medical advice. | `best coq10` hub |
| `/ingredients/coq10` | CoQ10: Forms, Dosage & Safety Notes | CoQ10 ingredient reference covering common forms, typical dosage context, and safety notes. Educational only — not medical advice. | general reference |
| `/supplements/coq10/compare` | CoQ10 Products Compared | Three-SKU CoQ10 table: form, mg per serving, soy/gelatin notes, testing status, and dated official price per 100 mg. Scores are not medical advice. | exact three-SKU table |
| `/guides/ubiquinol-vs-ubiquinone` | Ubiquinol vs Ubiquinone: Label Differences | Ubiquinol and ubiquinone are labeled CoQ10 forms. Compare names, oils, and price per 100 mg — not assumed absorption or medical superiority. | form comparison |
| `/guides/how-to-choose-a-coq10-supplement` | How to Choose a CoQ10 Supplement | How to read a CoQ10 label: form, mg per serving, softgel vs capsule, oils, testing marks, and dated price per 100 mg. Not a medical dosing guide. | selection / label reading |
| `/supplements/coq10/products/life-extension-super-ubiquinol-coq10-100-mg-60-softgels` | Life Extension Super Ubiquinol CoQ10 100 mg Review | Label review of Life Extension Super Ubiquinol CoQ10 100 mg (60 softgels, item 01929) with named Kaneka ubiquinol facts and dated official one-time price per 100 mg. Not medical advice. | branded review |
| `/supplements/coq10/products/jarrow-q-absorb-coq10-100-mg-60-softgels` | Jarrow Q-absorb CoQ10 100 mg Softgels Review | Label review of Jarrow Q-absorb CoQ10 100 mg (60 softgels) with named ubiquinone facts, soy disclosure, and dated official 60ct one-time price per 100 mg. Not medical advice. | branded review |
| `/supplements/coq10/products/now-foods-coq10-200-mg-60-veg-capsules` | NOW Foods CoQ10 200 mg Veg Capsules Review | Label review of NOW Foods CoQ10 200 mg veg capsules (60 count, SKU 3176) with named ubiquinone facts, claimed manufacturer testing, and dated official one-time price per 100 mg. Not medical advice. | branded review |

Local production `next start` confirmed for all eight:

- HTTP **200**
- robots `index, follow`
- self-referencing `https://www.suppcheckr.com/...` canonicals
- one H1
- no visible draft banners
- unique titles

Document titles append `| SuppCheckr`.

---

## D. Brand-page handling

| Brand | Status | Indexable? | Behavior |
|-------|--------|------------|----------|
| Life Extension | draft / noindex | No | Product page renders brand **plain text** (`publishedBrandHref` is null). Brand page keeps “Draft brand profile — not indexed until publication.” |
| Jarrow Formulas | draft / noindex | No | Same as Life Extension. |
| NOW Foods | published | Yes | Product links to `/brands/now-foods`. Brand page lists the published NOW CoQ10 SKU via existing `getBrandPageProducts()`. Copy distinguishes claimed testing from independent certification. |

No thin Life Extension or Jarrow brand pages were published solely for linking.

---

## E. Internal discovery

Added or activated:

- CoQ10 card on `/supplements`
- Homepage CoQ10 category card via established `getIndexableCategories()` auto-list (not a one-off homepage product grid)
- Hub links to ingredient, comparison, both guides, and three product reviews
- Comparison links to all three product reviews
- Guides link to hub, ingredient, comparison, and locked SKUs
- Product reviews link back to hub, comparison, ingredient, and both guides
- Ingredient page links to hub and both guides
- NOW brand page lists the NOW CoQ10 product

Not added:

- Amazon buttons
- Affiliate mappings
- CoQ10 product cards on the homepage
- Site-wide nav CoQ10 item
- Unrelated cluster rewrites

---

## F. Structured data and images

Existing `resolveIndexableProductImageSrc()` omits `/images/products/placeholder.svg` from Product JSON-LD. No CoQ10-specific JSON-LD exception was required.

Local NOW product page JSON-LD:

- Organization + WebSite graph
- Product + nested editorial Review (`ratingValue` 86, `bestRating` 100)
- BreadcrumbList
- Product `url` is the www canonical
- Brand name **NOW Foods**
- **No `image` key**
- **No `offers`**
- **No `placeholder.svg` inside `ld+json`**
- No affiliate claims
- Review body labels claimed testing and denies a category-wide winner

Visible product photography remains an honest “product photo not shown” treatment, not a fake pack shot.

---

## G. Scoring safeguards

- LE 74 / Jarrow 74 / NOW 86 unchanged
- Comparison `lockedReviewSet: true` (scoped 3-SKU exception; default published comparisons still require 5)
- Copy states the 74/74 tie is a format distinction, not a winner
- NOW 86 is the highest of these three reviews because of dated price per 100 mg plus a **claimed** testing anchor — not independent certification and not a category-wide winner
- Scores are rubric tools, not medical recommendations or clinical-outcome predictions
- Higher milligrams are not treated as automatically better
- Prices are dated 2026-09-17 official one-time snapshots

---

## H. Editorial / medical audit

Authoritative general source remains [NCCIH Coenzyme Q10](https://www.nccih.nih.gov/health/coenzyme-q10). The retired NIH ODS Health Professional URL was not restored.

Checked across the eight routes:

- No disease-treatment or prevention claims
- No statin-replacement implications
- No universal ubiquinol superiority
- No individualized dosage protocol
- Manufacturer absorption / cardiovascular structure-function language labeled as brand copy
- NOW testing labeled manufacturer-claimed
- Jarrow soy disclosure visible
- Medical disclaimers present
- No “Best Overall”
- No Amazon CTAs

Minor non-blocker: the form guide still renders a YAML “Related reading” list plus the shared guide-template related-reading block (duplicate H2). Pre-existing template pattern; not unique to publication status.

---

## I. Sitemap, robots, canonicals

Local production publication candidate:

| Check | Result |
|-------|--------|
| XML sitemap | **85** www URLs |
| Added vs production 77 | exactly the eight CoQ10 routes above |
| Draft brands in sitemap | Life Extension and Jarrow **omitted** |
| robots.txt | `Allow: /`; `Disallow: /api/`; sitemap `https://www.suppcheckr.com/sitemap.xml` |
| Eight CoQ10 robots | `index, follow` |
| Eight CoQ10 canonicals | www self-references |

Production `main` (PR #7 only) remains **77** URLs until this PR is merged.

---

## J. Tests and build

| Command | Result |
|---------|--------|
| `npm ci --legacy-peer-deps` | **Pass** |
| `npm run check` | **Pass** — typecheck, eslint, **114** tests / 12 files, content validation **0 errors / 0 warnings**, risky-term lint **0 errors** (warnings on research templates only) |
| `npm run build` | **Pass** — 113 static pages; CoQ10 hub, compare, ingredient, two guides, and three product routes generated |

Coverage added in `lib/__tests__/coq10-phase-15e.test.ts`:

- Exactly eight CoQ10 routes indexable
- Sitemap 77 → 85, all www
- Canonicals and `index, follow`
- Unique metadata
- LE/Jarrow remain draft; published products do not resolve those brand hrefs
- CoQ10 listed among indexable categories
- Prices, dates, scores, soy, claimed testing match YAML
- No Best Overall / Amazon affiliate CTAs
- Product JSON-LD omits placeholder images
- Existing creatine/magnesium/vitamin C/electrolyte clusters still indexable

---

## K. Local production preview QA

`next start` after `npm run build`. Vercel preview for this branch is expected to be SSO-protected; local production QA is the required path.

| Surface | Result |
|---------|--------|
| Eight CoQ10 routes | 200; published titles; no draft banners |
| Homepage | CoQ10 category card via auto-list of published categories |
| `/supplements` | CoQ10 first among published category cards |
| `/brands/now-foods` | Indexable; lists NOW CoQ10 |
| `/brands/life-extension` and `/brands/jarrow-formulas` | `noindex, follow` + draft brand banner |
| Comparison | Labeled Sort / Order / Testing comboboxes; sticky product column; horizontal scroll region; soy and claimed-testing caveats |
| Product reviews | Dated 2026-09-17 prices; retailer (not Amazon) CTAs; medical disclaimer |
| JSON-LD | Product/Review present; placeholder omitted |
| Affiliates | Disabled |

Screenshots (desktop + ~390px mobile):

- `reports/screenshots/coq10-15e-hub-desktop.png`
- `reports/screenshots/coq10-15e-hub-mobile.png`
- `reports/screenshots/coq10-15e-compare-desktop.png`
- `reports/screenshots/coq10-15e-compare-mobile.png`
- `reports/screenshots/coq10-15e-compare-mobile-table.png`
- `reports/screenshots/coq10-15e-form-guide-desktop.png`
- `reports/screenshots/coq10-15e-form-guide-mobile.png`
- `reports/screenshots/coq10-15e-now-product-desktop.png`
- `reports/screenshots/coq10-15e-now-product-mobile.png`
- `reports/screenshots/coq10-15e-supplements-directory-desktop.png`
- `reports/screenshots/coq10-15e-supplements-directory-mobile.png`

---

## L. Remaining blockers (do not treat as merge authorization)

These are process holds, not content defects:

1. Leave the Phase 15E PR **unmerged**.
2. Do not promote the Vercel preview or deploy manually.
3. Do not submit a sitemap or request indexing.
4. Affiliate links stay disabled.
5. Product images stay non-authentic placeholders / “photo not shown” until lawful rights exist.
6. Life Extension and Jarrow brand pages stay draft until they have substantial verified copy.
7. Do not start another product review or category from this PR.

---

## M. Verdict

**READY TO PUBLISH** as a later-merge publication candidate, subject to human merge of this PR. This branch is not live and must not be indexed from preview.
