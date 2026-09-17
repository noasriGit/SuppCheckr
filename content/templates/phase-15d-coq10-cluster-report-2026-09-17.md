# Phase 15D — CoQ10 Draft Cluster (Hub, Guides, Comparison)

**Date:** 2026-09-17  
**Phase:** 15D — draft CoQ10 category hub, ingredient links, comparison, and two guides  
**Git baseline:** `91069c1` (merge of PR #6 / Phase 15C) on `main`  
**Branch:** `content/coq10-phase-15d-cluster`  
**Site mode:** `prelaunch` (unchanged)  
**Recommended commits:** `content: draft the CoQ10 Phase 15D cluster` then `test: verify the draft CoQ10 cluster`

---

## A. Scope and constraints

| Constraint | Status |
|------------|--------|
| Draft hub, ingredient links, comparison, and two guides only — no publication | **Done** |
| All CoQ10 routes remain `status: draft` / `noindex: true` | **Done** |
| Production sitemap stays **77** URLs with **no CoQ10** | **Done** |
| No Amazon affiliate links, ASINs, or Amazon evidence | **Done** |
| No CoQ10 URLs on homepage, `/supplements`, `/guides`, or published NOW Foods brand page | **Done** |
| Fourth product review remains deferred | **Confirmed** |
| `SITE_MODE` remains prelaunch; ads remain disabled | **Confirmed** |
| Legal pages remain draft/noindex | **Confirmed** |
| Do not publish or request indexing for CoQ10 | **Done** |

PR #6 (`91069c1`) was merged first after CI `check` SUCCESS and Vercel SUCCESS, with Phase 15C tests locking draft/noindex products and a CoQ10-free sitemap.

---

## B. Files created/changed

### Created

| File | URL |
|------|-----|
| `content/guides/ubiquinol-vs-ubiquinone.yaml` | `/guides/ubiquinol-vs-ubiquinone` |
| `content/guides/how-to-choose-a-coq10-supplement.yaml` | `/guides/how-to-choose-a-coq10-supplement` |
| `content/comparisons/coq10-supplements-compared.yaml` | `/supplements/coq10/compare` |
| `lib/__tests__/coq10-phase-15d.test.ts` | Cluster draft/noindex, sitemap, JSON-LD, and leak tests |
| `content/templates/phase-15d-coq10-cluster-report-2026-09-17.md` | This report |
| `reports/screenshots/coq10-hub-desktop.png` | Local production hub screenshot |
| `reports/screenshots/coq10-compare-desktop.png` | Local production comparison screenshot |
| `reports/screenshots/coq10-compare-mobile.png` | Local production comparison, 390px viewport |

### Updated — content

| File | Change |
|------|--------|
| `content/categories/coq10.yaml` | Full draft hub copy, SEO, featured products, guides, FAQ; still `draft` / `noindex: true` |
| `content/ingredients/coq10.yaml` | Linked three product IDs and two guide slugs; still `draft` / `noindex: true` |
| `content/products/coq10/*.yaml` | `comparisonGroupIds: [coq10-supplements-compared]`; still draft/noindex, affiliate off |

### Updated — preview/a11y

| File | Change |
|------|--------|
| Category, compare, guide, and ingredient pages | Draft banner for non-indexable (non-placeholder) entities |
| `components/comparison/ComparisonTable.tsx` | Horizontal scroll region, sticky product column, labeled selects, draft badges |
| `components/category/CategoryBlocks.tsx` | Scroll region and draft badges on `status: draft` |
| `components/content/GuideMarkdown.tsx` | Scrollable, labeled table region with min-width |
| Guide and ingredient related-reading | Draft-safe compare link; skip duplicate buyer-guide link |

---

## C. Cluster inventory (all draft / noindex)

| Page | Title | Primary keyword intent |
|------|-------|------------------------|
| `/supplements/coq10` | CoQ10 Supplements Compared by Label | `best coq10` |
| `/ingredients/coq10` | CoQ10: Forms, Dosage & Safety Notes (template title) | `coq10` |
| `/supplements/coq10/compare` | CoQ10 Products Compared | comparison |
| `/guides/ubiquinol-vs-ubiquinone` | Ubiquinol vs Ubiquinone: Label Differences | `ubiquinol vs ubiquinone` |
| `/guides/how-to-choose-a-coq10-supplement` | How to Choose a CoQ10 Supplement | how-to / supporting `coq10 dosage` |

Locked product reviews (Phase 15C, still draft):

| Product | Score | Form / format |
|---------|------:|---------------|
| NOW Foods CoQ10 200 mg / 60 veg capsules (SKU 3176) | 86 | ubiquinone dry veg cap |
| Life Extension Super Ubiquinol 100 mg / 60 softgels (01929) | 74 | ubiquinol oil softgel |
| Jarrow Q-absorb 100 mg / 60 softgels | 74 | ubiquinone soy softgel |

The 74/74 tie is a format distinction, not a winner label. NOW's 86 total is the highest of these three drafts because of dated price per 100 mg and a **claimed** (not verified) testing anchor.

---

## D. Draft-only internal linking

CoQ10 pages link to each other (hub, ingredient, compare, two guides, three products).

Published surfaces checked and **do not** list CoQ10:

- Homepage category cards and comparison list
- `/supplements`
- `/guides`
- `/brands/now-foods` (creatine, magnesium, vitamin C only)
- XML sitemap (77 URLs)

---

## E. Structured data and robots

| Check | Result |
|-------|--------|
| Hub / compare / guides / ingredient / products | `noindex, follow` |
| Canonical host | `https://www.suppcheckr.com/...` |
| Product JSON-LD | **Omitted** for all three draft SKUs |
| Guide / ingredient Article JSON-LD | **Omitted** |
| Global Organization / WebSite graph | Unchanged on layout |

---

## F. Validation results

| Command | Result |
|---------|--------|
| `npm ci --legacy-peer-deps` | **Pass** |
| `npm run check` | **Pass** — 105 tests; content validation 0 errors / 0 warnings; risky-term lint 0 errors |
| `npm run build` | **Pass** — CoQ10 hub, compare, ingredient, two guides, and three product routes generated |
| XML sitemap | **77** URLs; **no** `coq10` |

---

## G. Local preview QA (production `next start`)

Checked on local production server (not a live published page):

| Route | Draft banner | Notes |
|-------|--------------|-------|
| `/supplements/coq10` | Yes | Product reviews (draft); compare CTA; FAQ; NCCIH/FDA sources |
| `/supplements/coq10/compare` | Yes | Sort/filter labels; sticky product column; soy / claimed-testing caveats |
| `/guides/ubiquinol-vs-ubiquinone` | Yes | Form table; no form winner; draft compare link |
| `/guides/how-to-choose-a-coq10-supplement` | Yes | No standalone dosage page; statin FAQ is clinician referral only |
| `/ingredients/coq10` | Yes | Three draft product cards; related guides |
| Product reviews | Yes (from 15C) | Placeholder images; retailer CTAs, not Amazon |
| Homepage / supplements / guides | n/a | No CoQ10 links |
| `/brands/now-foods` | n/a | No CoQ10 product cards |

Preview correction: comparison caveats no longer use raw `**claimed**` markdown (InlineMarkdown does not bold). Duplicate buyer-guide related-reading links were removed when the slug is already in `relatedGuideSlugs`.

---

## H. Remaining work (not in this PR)

- Do **not** merge this PR as a CoQ10 publish
- Licensed pack shots still TODO
- Affiliate / ASIN mapping not started
- Fourth SKU still deferred
- Publication, sitemap inclusion, and indexing require a later explicit decision

---

## I. Recommended next phase

**Phase 15E+ publication prep only after explicit sign-off.** Re-lock prices and labels, close image licensing, and keep draft/noindex until a separate publication PR.

**Do not publish** the CoQ10 cluster without explicit sign-off.
