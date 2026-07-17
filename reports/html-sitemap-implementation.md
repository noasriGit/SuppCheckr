# HTML Sitemap Implementation Report — SuppCheckr

Date: 2026-07-17

## 1. Preflight findings

| Area | Finding |
|------|---------|
| Framework | Next.js 16.2.9 (App Router), React 19, TypeScript, Tailwind CSS v4 |
| Routing | File-based App Router under `app/`; all dynamic routes use `generateStaticParams` |
| HTML sitemap before | **Did not exist** |
| XML sitemap | `app/sitemap.ts` → `/sitemap.xml` |
| Content source | Filesystem YAML in `content/` loaded by `lib/content/loader.ts` |
| Indexability | `isIndexable()` + `lib/seo/indexing.ts` static path lists |
| Canonical policy | No trailing slashes; `https://www.suppcheckr.com` |
| robots.txt | `app/robots.ts`; references `/sitemap.xml` in production/prelaunch |
| Design system | Tailwind tokens + `PageContainer`, `Breadcrumbs`, card/list patterns |
| Search | `/search` (noindex) uses `getSearchIndexEntries()` |
| Pagination need | **No** — 77 indexable pages |
| A–Z need | **No** — content is grouped by supplement category |
| Search on sitemap | **No** — entry count below threshold |

### How indexable pages are defined

1. **Static pages** listed in `INDEXABLE_STATIC_PAGES` (`lib/seo/indexing.ts`)
2. **Entity pages** where YAML `status === "published"`, `noindex === false`, and `isPlaceholder === false` via `isIndexable()` in `lib/content/loader.ts`
3. **Excluded** via `DRAFT_LEGAL_PATHS`, `NOINDEX_STATIC_PATHS`, and non-published entity statuses

## 2. Existing content sources used

| Source | Used for |
|--------|----------|
| `INDEXABLE_STATIC_PAGES` | Marketing, trust, and hub static pages |
| `getIndexableCategories()` | Category hubs |
| `getIndexableProducts()` | Product reviews |
| `getIndexableGuides()` | Educational guides |
| `getIndexableIngredients()` | Ingredient references |
| `getIndexableBrands()` | Brand profiles |
| `getIndexableComparisons()` (category_ranking only) | Category comparison tables |
| `editorial.lastUpdated` | Recently updated section |
| `category.featured` | Featured category flags (creatine, magnesium) |

## 3. Sitemap architecture implemented

**Main HTML sitemap:** `/sitemap`

**Shared data layer:** `lib/seo/htmlSitemap.ts`

- `getSitemapRecords()` — typed `SitemapRecord[]` for all indexable pages
- `getSitemapSections()` — grouped sections for the HTML page
- `validateSitemapRecords()` — automated validation

**Consumers refactored to shared source:**

- `app/sitemap.ts` (XML)
- `lib/seo/searchIndex.ts` (site search)
- `app/sitemap/page.tsx` (HTML)

**Category sitemap pages:** Not created — 77 total entries with clear category grouping on the main page.

## 4. Included content types

| Content type | Count (approx.) |
|--------------|-----------------|
| Static pages | 11 (includes `/sitemap`) |
| Categories | 4 |
| Products | 20 |
| Guides | 22 |
| Ingredients | 4 |
| Brands | 12 |
| Comparisons | 4 |
| **Total** | **77** |

## 5. Exclusion rules

| Reason | Paths / entities excluded |
|--------|---------------------------|
| Draft legal (`DRAFT_LEGAL_PATHS`) | 5 legal pages |
| Noindex static hubs (`NOINDEX_STATIC_PATHS`) | `/search`, `/compare`, `/ingredients`, `/brands` |
| Non-published entities | Draft, placeholder, archived, discontinued YAML |
| Head-to-head comparisons | `/compare/{slug}` demo comparisons |
| API / internal | `/api/*` (none exist today) |

## 6. Category and pagination decisions

- **Categories:** Organized by published supplement category (creatine, magnesium, vitamin-c, electrolytes). Each group lists hub, comparison, ingredient, products, and guides.
- **Pagination:** Not implemented — all entries fit on one page.
- **Category sub-pages:** Not implemented — no category exceeds 50–100 entries.

## 7. Recently published logic

- **Publication dates** are not stored in YAML schemas.
- **Recently updated** section uses `editorial.lastUpdated` from entity governance fields.
- Shows up to **15** entries, sorted descending by date.
- Static pages without stored dates are omitted from this section.

## 8. Featured-content logic

Featured pages use truthful structural signals only:

| Signal | Pages |
|--------|-------|
| `FEATURED_STATIC_PATHS` | `/`, `/supplements`, `/guides`, `/methodology` |
| `category.featured: true` in YAML | `/supplements/creatine`, `/supplements/magnesium` |

No popularity or analytics labels are used.

## 9. A–Z logic

**Omitted.** The site has 77 pages with strong topical grouping by supplement category. An alphabetical index would duplicate the category structure without improving discovery.

## 10. Search implementation

**Omitted.** Total entry count (77) is below the threshold for client-side sitemap search. Site-wide search remains at `/search`.

## 11. SEO and structured-data implementation

| Item | Implementation |
|------|----------------|
| Title | `Site Map \| SuppCheckr` via `buildPageMetadata()` |
| Meta description | Unique description for sitemap purpose |
| Canonical | Self-referencing `https://www.suppcheckr.com/sitemap` |
| Open Graph | Via `buildPageMetadata()` |
| robots | Indexable in prelaunch/production |
| JSON-LD | `CollectionPage`, `BreadcrumbList`, `ItemList` |
| XML sitemap | `/sitemap` added to `INDEXABLE_STATIC_PAGES` and XML output |
| H1/H2 hierarchy | Single H1; section H2s; category H3s |

## 12. Accessibility and responsive results

- Semantic `<section>`, `<nav>`, and `<ul>` landmarks
- Breadcrumb navigation with `aria-label`
- Jump links to page sections with keyboard-focusable anchors
- Link focus-visible outlines
- Responsive grid for category groups (`lg:grid-cols-2`)
- Dark-mode compatible via existing CSS tokens
- No client-side JavaScript on the sitemap page

## 13. Performance considerations

- Fully server-rendered static page (○ in build output)
- Single build-time data pass through existing YAML loaders
- No client components or search libraries
- Compact `SitemapRecord` objects (no article bodies)
- Shared module prevents duplicate maintenance across XML, HTML, and search

## 14. Validation results

| Check | Result |
|-------|--------|
| `validateSitemapRecords()` | Pass — 0 issues |
| `lib/__tests__/htmlSitemap.test.ts` | 10 tests pass |
| `npm run typecheck` | Pass |
| `npm run lint` | Pass |
| `npm run test` | Pass (50 tests total) |
| `npm run validate:content` | Pass — 0 errors |
| `npm run build` | Pass — `/sitemap` statically generated |

Validated rules: duplicate URLs/IDs, missing titles/URLs, trailing slashes, excluded path leakage, XML/search alignment.

## 15. Exact files changed

| File | Change |
|------|--------|
| `lib/seo/htmlSitemap.ts` | **New** — shared sitemap records, sections, validation |
| `app/sitemap/page.tsx` | **New** — HTML sitemap page |
| `components/sitemap/SitemapSections.tsx` | **New** — entry list components |
| `lib/__tests__/htmlSitemap.test.ts` | **New** — validation and alignment tests |
| `lib/seo/searchIndex.ts` | Refactored to use `getSitemapRecords()` |
| `app/sitemap.ts` | Refactored to use `getSitemapRecords()` |
| `lib/seo/indexing.ts` | Added `/sitemap` to `INDEXABLE_STATIC_PAGES` |
| `config/site.ts` | Added Site Map to footer explore nav |
| `reports/html-sitemap-implementation.md` | **New** — this report |

## 16. Known limitations

1. **No publication dates** — recently updated uses `lastUpdated`, not first-published dates.
2. **Noindex hubs excluded** — `/ingredients` and `/brands` index pages are omitted; individual entity pages are included.
3. **Draft legal pages excluded** — footer still links to them for users, but they are not in the sitemap until attorney review clears them.
4. **No redirect validation at runtime** — tests verify URL policy; live redirect checks require deployment environment.
5. **Vitamin C and electrolytes** are not flagged `featured: true` in YAML — only creatine and magnesium use the category featured flag.
