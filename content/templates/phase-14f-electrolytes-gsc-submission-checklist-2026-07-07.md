# Electrolytes GSC Submission Checklist — Phase 14F

**Date:** 2026-07-07 (executed 2026-07-15)  
**Phase:** 14F — Electrolytes cluster published (Option A)  
**Companion report:** [`phase-14f-electrolytes-publication-decision-report-2026-07-07.md`](./phase-14f-electrolytes-publication-decision-report-2026-07-07.md)

Execute after deploy and sitemap refresh. All URLs use `https://www.suppcheckr.com` as primary host.

---

## A. Sitemap

- [ ] Confirm sitemap live: `https://www.suppcheckr.com/sitemap.xml`
- [ ] Submit sitemap in Google Search Console (if not already submitted for site)
- [ ] Confirm Electrolytes URLs appear in sitemap output (category, compare, ingredient, guides, products, brands)

---

## B. Request indexing — hub pages (priority)

| URL | Entity | Priority |
|-----|--------|----------|
| `https://www.suppcheckr.com/supplements/electrolytes` | Category hub | High |
| `https://www.suppcheckr.com/supplements/electrolytes/compare` | Comparison table | High |
| `https://www.suppcheckr.com/ingredients/electrolytes` | Ingredient reference | High |
| `https://www.suppcheckr.com/guides/lmnt-vs-liquid-iv` | Guide (branded entry) | High |
| `https://www.suppcheckr.com/guides/how-to-choose-an-electrolyte-powder` | Guide | Medium |
| `https://www.suppcheckr.com/guides/what-are-electrolytes` | Guide | Medium |
| `https://www.suppcheckr.com/guides/sugar-free-vs-sugar-electrolytes` | Guide | Medium |
| `https://www.suppcheckr.com/guides/electrolyte-powder-vs-tablets` | Guide | Medium |

---

## C. Request indexing — product reviews

| URL | Product |
|-----|---------|
| `https://www.suppcheckr.com/supplements/electrolytes/products/lmnt-citrus-salt-30` | LMNT Citrus Salt 30 sticks |
| `https://www.suppcheckr.com/supplements/electrolytes/products/liquid-iv-hydration-multiplier-lemon-lime-16` | Liquid I.V. Hydration Multiplier Lemon Lime 16 sticks |
| `https://www.suppcheckr.com/supplements/electrolytes/products/nuun-sport-lemon-lime-10-tablets` | Nuun Sport Lemon Lime 10 tablets |
| `https://www.suppcheckr.com/supplements/electrolytes/products/ultima-replenisher-lemonade-20-sticks` | Ultima Replenisher Lemonade 20 sticks |
| `https://www.suppcheckr.com/supplements/electrolytes/products/thorne-catalyte-lemon-lime-30-servings` | Thorne Catalyte Lemon Lime 30 servings |

---

## D. Optional — brand profile pages

| URL | Brand |
|-----|-------|
| `https://www.suppcheckr.com/brands/lmnt` | LMNT |
| `https://www.suppcheckr.com/brands/liquid-iv` | Liquid I.V. |
| `https://www.suppcheckr.com/brands/nuun` | Nuun |
| `https://www.suppcheckr.com/brands/ultima-replenisher` | Ultima Replenisher |
| `https://www.suppcheckr.com/brands/thorne` | Thorne |

---

## E. Per-URL QA checklist

For each URL above after deploy:

- [ ] **Render check** — page loads without error; dark theme; placeholder images acceptable
- [ ] **noindex check** — `<meta name="robots">` does not block indexing (`noindex` absent or `index`)
- [ ] **Title/meta check** — title and description present and category-appropriate
- [ ] **Mobile check** — readable on mobile viewport
- [ ] **No affiliate/Amazon check** — no Amazon CTAs, ASIN links, or live Amazon prices on Electrolytes pages
- [ ] **Medical-claim spot check** — no dehydration treatment, hangover cure, cramp prevention, or universal-winner framing in hero/intro copy

---

## F. GSC coverage follow-up

- [ ] Confirm no draft/noindex Electrolytes URLs appear as indexable in GSC coverage report
- [ ] Monitor indexing status for category hub and `lmnt-vs-liquid-iv` guide within 7–14 days
- [ ] Re-check Thorne product page renders retailer-label caveat and NSF verification block

---

## G. Not in scope for this checklist

- Amazon affiliate ASIN mapping (deferred to future phase)
- Legal pages (remain draft/noindex pending attorney review)
- Hub page static copy refresh (Electrolytes surfaces via dynamic `getIndexableCategories()` on `/supplements`)

---

*Submit after Phase 14F deploy. Thorne included — label relocked Vitacost + iHerb corroboration (Option A).*
