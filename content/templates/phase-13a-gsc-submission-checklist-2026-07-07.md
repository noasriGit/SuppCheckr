# Phase 13A — Google Search Console Submission Checklist

**Date:** 2026-07-07  
**Phase:** 13A — post-launch SEO/internal-link QA  
**Property:** https://www.suppcheckr.com (canonical host per `config/site.ts`)  
**Site mode:** `prelaunch` (indexable published clusters only)

---

## Pre-submission setup

- [ ] Confirm GSC property is verified for `https://www.suppcheckr.com` (www primary)
- [ ] Confirm sitemap is submitted: **https://www.suppcheckr.com/sitemap.xml**
- [ ] Confirm `SITE_MODE=prelaunch` — legal pages remain `noindex` (expected)
- [ ] Confirm `robots.txt` does not block published cluster URLs

---

## Priority URLs — Vitamin C cluster

Submit or request indexing for these URLs (highest priority for new cluster discovery):

| # | URL | Page type | Notes |
|---|-----|-----------|-------|
| 1 | https://www.suppcheckr.com/supplements/vitamin-c | Category hub | Primary cluster entry |
| 2 | https://www.suppcheckr.com/supplements/vitamin-c/compare | Comparison table | Indexable; not the `/compare` hub |
| 3 | https://www.suppcheckr.com/ingredients/vitamin-c | Ingredient reference | Indexable deep URL |
| 4 | https://www.suppcheckr.com/guides/how-to-choose-a-vitamin-c-supplement | Buyers guide | High commercial intent |
| 5 | https://www.suppcheckr.com/guides/vitamin-c-dosage-guide | Dosage guide | Supports dosage queries |
| 6 | https://www.suppcheckr.com/guides/liposomal-vitamin-c-vs-regular-vitamin-c | Form comparison | Liposomal intent |
| 7 | https://www.suppcheckr.com/guides/buffered-vitamin-c-vs-ascorbic-acid | Form comparison | Buffered vs acid intent |

### Top Vitamin C product URLs

| # | URL | Affiliate CTA |
|---|-----|---------------|
| 8 | https://www.suppcheckr.com/supplements/vitamin-c/products/nutricost-vitamin-c-powder | Amazon |
| 9 | https://www.suppcheckr.com/supplements/vitamin-c/products/now-foods-vitamin-c-1000-veg-capsules | Amazon |
| 10 | https://www.suppcheckr.com/supplements/vitamin-c/products/nature-made-vitamin-c-1000-mg-tablets | Amazon |
| 11 | https://www.suppcheckr.com/supplements/vitamin-c/products/nutricost-buffered-vitamin-c-120 | Amazon |
| 12 | https://www.suppcheckr.com/supplements/vitamin-c/products/livon-lypo-spheric-vitamin-c | Amazon (ASIN B000CD9XGC) |

---

## Secondary priority — Creatine & Magnesium (spot re-inspection)

These clusters were live earlier; re-inspect if internal links changed or crawl depth is shallow:

| URL | Notes |
|-----|-------|
| https://www.suppcheckr.com/supplements/creatine | Category hub |
| https://www.suppcheckr.com/supplements/creatine/compare | Comparison |
| https://www.suppcheckr.com/supplements/magnesium | Category hub |
| https://www.suppcheckr.com/supplements/magnesium/compare | Comparison |

---

## Per-URL inspection checklist

For each priority URL above:

### Indexability / noindex

- [ ] URL returns HTTP 200
- [ ] Page `<meta name="robots">` does **not** include `noindex`
- [ ] Page is listed in `sitemap.xml`
- [ ] Legal pages (`/privacy-policy`, `/terms-of-use`, etc.) remain `noindex` — do not submit

### Page title / meta spot-check

- [ ] Title is descriptive and includes category/product name (not generic "SuppCheckr")
- [ ] Meta description matches page intent (label comparison, not medical claims)
- [ ] Canonical URL uses `https://www.suppcheckr.com`

### Live page render check

- [ ] Page renders without error in production
- [ ] Breadcrumbs and internal links resolve (category → compare → guides → ingredient)
- [ ] Comparison table loads with all five products
- [ ] Medical disclaimer and affiliate disclosure visible where expected

### Mobile usability spot-check

- [ ] Comparison table scrolls horizontally on mobile without layout break
- [ ] CTA buttons are tappable (min touch target)
- [ ] Text is readable without horizontal zoom on body copy

### Affiliate link tag check (product pages only)

For Amazon affiliate products (all 5 Vitamin C SKUs with `affiliate.enabled: true`, including LivOn):

- [ ] CTA label reads **View on Amazon**
- [ ] Outbound href includes `tag=suppcheckr-20` (or configured `AMAZON_ASSOCIATE_TAG`)
- [ ] Link has `rel="sponsored nofollow"`
- [ ] **Affiliate link** disclosure appears immediately above/beside CTA
- [ ] No `#amazon-placeholder` in href when tag is configured
- [ ] No Amazon product images, star ratings, reviews, Q&A, or live prices on page
- [ ] LivOn Lypo-Spheric Vitamin C resolves to `https://www.amazon.com/dp/B000CD9XGC?tag=suppcheckr-20` at build/render time

For Klean Magnesium (held back — site-wide only non-Amazon affiliate product):

- [ ] https://www.suppcheckr.com/supplements/magnesium/products/klean-athlete-klean-magnesium uses direct Klean URL, not Amazon

---

## Sitemap verification

- [ ] Open https://www.suppcheckr.com/sitemap.xml
- [ ] Confirm Vitamin C category, compare, ingredient, 6 guides, and 5 products present
- [ ] Confirm Creatine and Magnesium cluster URLs present
- [ ] Confirm legal draft pages are **absent** from sitemap
- [ ] Confirm LivOn brand page (`/brands/livon-laboratories`) is **absent** (brand remains `noindex: true`)

---

## Post-submission monitoring (7–14 days)

- [ ] Check Coverage report for "Discovered — currently not indexed" on priority URLs
- [ ] Check for soft 404s or redirect chains on www canonical
- [ ] Monitor impressions for Vitamin C queries in Performance report
- [ ] Confirm no accidental indexing of `/compare` or `/ingredients` hub pages (expected `noindex`)

---

## Excluded from submission (intentional)

| Path pattern | Reason |
|--------------|--------|
| `/privacy-policy`, `/terms-of-use`, `/medical-disclaimer`, `/affiliate-disclosure`, `/advertising-policy`, `/editorial-policy`, `/corrections-policy`, `/source-standards` | Legal draft — `noindex` pending attorney review |
| `/compare` (hub) | Utility hub — `NOINDEX_STATIC_PATHS` |
| `/ingredients` (hub) | Utility hub — `NOINDEX_STATIC_PATHS` |
| `/brands` (hub) | Utility hub — `NOINDEX_STATIC_PATHS` |
| `/brands/livon-laboratories` | Brand draft — `noindex: true` |
| `/search` | Utility — `noindex` |

---

*Generated Phase 13A. Use URL Inspection → Request Indexing for priority Vitamin C URLs after deploy.*
