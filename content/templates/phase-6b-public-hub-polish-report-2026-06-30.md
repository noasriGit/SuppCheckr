# Phase 6B Public Hub Polish Report

**Date:** 2026-06-30  
**Phase:** 6B — public hub/index polish (copy and presentation only)  
**Git baseline:** `a3d4f8a` (Phase 6A) on `main`  
**Site mode:** `prelaunch` (unchanged)

---

## A. Scope and constraints

Phase 6B removed visible “unfinished site” language from public hub/index pages and aligned them with SuppCheckr’s two published categories (Creatine monohydrate and Magnesium). Work was limited to hub copy, presentation, navigation links, and SEO metadata — no product YAML, scoring, pricing, or publication status changes.

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
| Ingredients hub | `/ingredients` | “In development” section listing unpublished ingredients; “Not indexed” labels; thin intro |
| Supplements hub | `/supplements` | Listed all 10 category shells including placeholders with “Shell placeholder” badges; copy about “category shells not indexed” |
| Compare hub | `/compare` | Functional but minimal boundaries explanation; empty-state fallback text |
| Brands hub | `/brands` | Listed all catalog brands with optional “Draft — not indexed” badges; thin intro |
| Guides hub | `/guides` | **Did not exist** — footer linked to a single creatine guide |
| Homepage | `/` | Featured `protein-powder` placeholder alongside published categories; Creatine-only product section; “creatine cluster” search wording |
| Search | `/search` | “creatine cluster content” and “archived demo content” wording |
| About, Contact, Methodology, Editorial Policy, Source Standards, Corrections Policy, Accessibility | Trust pages | Reviewed — no stale hub-style wording (Phase 6A polish retained) |
| Navigation / footer | `config/site.ts`, `SiteChrome.tsx` | Footer Guides link pointed to one guide URL |
| Category cards | `CategoryBlocks.tsx` | Placeholder/draft badges correct for entity pages but exposed on hub when all categories were listed |

**Not changed (intentionally):**

- Product image placeholder copy (`ProductImagePlaceholder`, editorial policy)
- Legal review banners on draft legal pages
- Demo/draft badges on individual product/category pages for non-published entities
- Internal `content/templates/` reports and code comments
- Guide YAML body text (e.g. legacy “draft reviews” phrasing in `what-is-creatine.yaml` — out of hub scope)

---

## C. Public stale wording found

| Location | Stale wording | Action |
|----------|---------------|--------|
| `/ingredients` | “In development”, “Not indexed”, “Unpublished ingredient shells” | Removed; replaced with published cards + professional future-state copy |
| `/supplements` | Listed placeholder categories; “Additional category shells are not indexed” | Filter to `getIndexableCategories()` only; rewritten intro |
| `/brands` | “Draft — not indexed” on list items | Filter to indexable brands with published products; removed badges |
| `/search` | “creatine cluster content”, “archived demo content” | Updated to Creatine + Magnesium coverage |
| `/` (homepage) | Featured placeholder category (`protein-powder`); Creatine-only framing | Filter featured to indexable; added Magnesium product section |
| Footer | Guides → single creatine guide URL | Updated to `/guides` index |

**Remaining acceptable public wording (not changed):**

- Footer: “Affiliate links are disabled during prelaunch” (factual prelaunch note)
- Product/category entity pages: draft banners for `review_ready` content (not hub pages)
- Ad slot: “Ad placeholder — no live scripts” (monetization placeholder, intentional)

---

## D. Hub pages updated

| File | Change |
|------|--------|
| `app/ingredients/page.tsx` | Major rewrite |
| `app/supplements/page.tsx` | Major rewrite |
| `app/compare/page.tsx` | Moderate polish |
| `app/brands/page.tsx` | Moderate polish |
| `app/guides/page.tsx` | **New** guides index |
| `app/page.tsx` | Homepage hub sections |
| `components/search/SearchClient.tsx` | Search intro copy |
| `config/seo.ts` | Updated supplements index + new guides index templates |
| `config/site.ts` | Footer Guides link |
| `lib/seo/indexing.ts` | Added `/guides` to indexable static pages |

---

## E. /ingredients changes

- Intro explains ingredient references for Creatine monohydrate and Magnesium
- Added “What an ingredient page covers” section (forms, labels, dose context, safety notes, comparison links)
- Published ingredient cards with excerpt and links to category + comparison
- Replaced “In development” list with neutral “Additional ingredients” future-state paragraph
- Metadata description updated; `noindex: true` retained (prelaunch hub policy)

---

## F. /supplements changes

- Lists only published categories via `getIndexableCategories()` (Creatine, Magnesium)
- Added “What each category includes” section (ingredient reference, guides, reviews, comparison)
- Clarifies scores are label/source/value tools with methodology link
- SEO description updated in `config/seo.ts`

---

## G. /compare changes

- Added “Comparison boundaries” section (label clarity, sources, testing, price normalization, no universal best)
- Grouped comparison links with category labels
- Removed “No published comparisons yet” empty state (both comparisons are published)
- Metadata description names Creatine and Magnesium explicitly

---

## H. /brands changes

- Lists only indexable brands with at least one published product review
- Shows review count and short description per brand
- Explains profiles summarize currently reviewed products, not full brand catalogs
- Removed “Draft — not indexed” list badges

---

## I. /guides changes

- **Created** `/guides` index page (`app/guides/page.tsx`)
- Groups 11 published guides under Creatine and Magnesium headings
- Links to related category hubs; conservative informational framing
- Added to sitemap/search static pages and footer navigation

---

## J. Navigation/footer changes

| Item | Before | After |
|------|--------|-------|
| Footer → Guides | `/guides/how-to-choose-a-creatine-supplement` | `/guides` |
| Main nav | Unchanged (Supplements, Compare, Ingredients, Brands, Methodology) | — |
| Trust footer links | Complete (Methodology, Editorial Policy, Source Standards, Corrections Policy, Medical Disclaimer, Affiliate Disclosure, Advertising Policy, Contact, etc.) | Verified — no changes needed |

---

## K. SEO/meta changes

| Page | Update |
|------|--------|
| `/ingredients` | Description focuses on published Creatine + Magnesium references |
| `/supplements` | Description names published categories and content types |
| `/compare` | Description names Creatine + Magnesium comparisons |
| `/brands` | Description clarifies published-review scope |
| `/guides` | New title/description via `seoTemplates.guidesIndex` |
| `/guides` | Added to `INDEXABLE_STATIC_PAGES` for sitemap and search |

No “best supplements” or universal recommendation claims added.

---

## L. Constraints preserved

Verified after changes:

- `SITE_MODE` default remains `prelaunch`
- `monetizationConfig.affiliate.enabled: false`, `disableGlobally: true`
- `monetizationConfig.ads.enabled: false`, `loadScripts: false`
- No product YAML modified — zero diff under `content/products/`, `content/categories/`, etc.
- Creatine and Magnesium categories remain `status: published`, `noindex: false`
- Legal pages remain in `DRAFT_LEGAL_PATHS` with review banners
- Contact email remains `help@suppcheckr.com` (`config/site.ts`)
- No third category started

---

## M. Remaining recommendations

1. **Guide body copy:** Some published guide YAML still references “draft reviews” (e.g. `what-is-creatine.yaml` body) — consider a content-only pass in a future phase.
2. **Hub indexing policy:** `/ingredients`, `/compare`, and `/brands` remain `noindex` in prelaunch; consider making them indexable when ready to expand discoverability ( `/guides` is now indexable).
3. **Magnesium featured products:** Homepage shows top 3 magnesium reviews by score; category YAML `featuredProductIds` is still empty — optional future alignment.
4. **Category placeholder routes:** Placeholder category URLs (e.g. `/supplements/protein-powder`) still generate via SSG — acceptable for infrastructure but not linked from polished hubs.
5. **Newsletter section on homepage:** Still notes email updates in a “future release” — acceptable prelaunch note, not hub-critical.

---

## N. Validation results

| Check | Result |
|-------|--------|
| `npm run check` | **Pass** (typecheck, lint, 24 tests, validate:content, lint:content) |
| `npm run build` | **Pass** — 67 static routes including new `/guides` |
| Content validation | 0 errors, 0 warnings |
| Risky-term lint (published) | 0 errors |

---

## O. Recommended commit message

```
Phase 6B: polish public hub pages
```
