# Phase 8B — Magnesium SEO Optimization & Vitamin C Blueprint

**Date:** 2026-07-07  
**Phase:** 8B — Magnesium guide SEO quick win + Vitamin C category blueprint  
**Git baseline:** `cf6903f` (Phase 8A) on `main`, clean working tree at start  
**Site mode:** `prelaunch` (unchanged)  
**Recommended commit message:** `Phase 8B: optimize magnesium guide and plan Vitamin C`

---

## A. Scope and constraints

Phase 8B executed under all project guardrails:

| Constraint | Status |
|------------|--------|
| Optimize existing magnesium guide only (no duplicate URL) | **Done** |
| Vitamin C planning docs only — no live pages/products | **Done** |
| No product facts, prices, scores, testing statuses changed | **Confirmed** |
| No affiliate mapping changes | **Confirmed** |
| Klean Athlete Klean Magnesium held back | **Confirmed** |
| `SITE_MODE` remains prelaunch | **Confirmed** |
| Ads remain disabled | **Confirmed** |
| Legal pages remain draft/noindex | **Confirmed** |
| No third category published | **Confirmed** |
| Contact email `help@suppcheckr.com` | **Confirmed** |

**Pre-flight verification:**

| Artifact | Present |
|----------|---------|
| `content/templates/phase-8a-keyword-sorting-report-2026-07-07.md` | Yes |
| `content/templates/phase-8a-keyword-sorted-output-2026-07-07.csv` | Yes |
| `content/templates/phase-7d-affiliate-monitoring-qa-report-2026-06-30.md` | Yes |
| Published Creatine cluster | Yes (`content/categories/creatine.yaml` — published) |
| Published Magnesium cluster | Yes (`content/categories/magnesium.yaml` — published) |

---

## B. Magnesium guide changes

**Target page:** `/guides/magnesium-glycinate-vs-citrate`  
**Source file:** `content/guides/magnesium-glycinate-vs-citrate.yaml`

| Element | Before | After |
|---------|--------|-------|
| Title / H1 | Magnesium Glycinate vs. Citrate | Magnesium Glycinate vs Citrate: Label Differences, Serving Size, and Tolerance |
| Meta description (excerpt) | Generic form-comparison excerpt | Dual-keyword excerpt covering both `magnesium glycinate vs citrate` and `magnesium citrate vs glycinate` |
| Introduction | Single phrasing | Both keyword orders named naturally; elemental magnesium and serving-size framing |
| Comparison table | 5-row basic table | 7-row table with elemental clarity, serving practicality, GI tolerance, marketing language, SuppCheckr relevance, Supplement Facts checklist |
| FAQ | None | Six conservative FAQ items covering both keyword orders |
| Related reading | 4 internal links | 6 links including category hub and comparison table |
| Published status | `status: published`, `noindex: false` | **Unchanged** |
| Editorial dates | 2026-06-30 | Updated to 2026-07-07 with Phase 8B update log entry |

**Claim-risk posture maintained:**

- No sleep/anxiety/constipation treatment framing
- Citrate GI context cited as NIH general safety background only
- Glycinate "gentle" framed as common marketing, not medical claim
- Healthcare professional consultation preserved for pregnancy, nursing, medications, kidney disease, medical conditions
- No "Best Overall" / "Best for Everyone" language

---

## C. Keyword targets addressed

| Keyword | KD | Vol | TP | URL | Coverage |
|---------|---:|----:|---:|-----|----------|
| magnesium glycinate vs citrate | 6 | 33,000 | 28,000 | `/guides/magnesium-glycinate-vs-citrate` | Title, excerpt, intro, H2, FAQ, internal anchors |
| magnesium citrate vs glycinate | 5 | 16,000 | 28,000 | Same URL | Intro, FAQ ("Is magnesium citrate better than glycinate?"), supporting page copy |

**Combined opportunity:** ~49,000 monthly volume / ~28,000 traffic potential on a single published page (per Phase 8A).

**No duplicate page created** — reversed keyword order maps to the same slug.

---

## D. Internal links added/changed

| File | Change |
|------|--------|
| `content/guides/magnesium-glycinate-vs-citrate.yaml` | Added links to `/supplements/magnesium`, `/supplements/magnesium/compare`, `/ingredients/magnesium`, dosage guide |
| `content/categories/magnesium.yaml` | Intro mentions both keyword phrasings referencing the guide (related guides list unchanged) |
| `content/ingredients/magnesium.yaml` | `evidenceSummary` references glycinate vs citrate guide with reversed-keyword note |
| `content/guides/how-to-choose-a-magnesium-supplement.yaml` | Anchor text updated to "magnesium glycinate vs citrate guide" with citrate-vs-glycinate note |
| `content/guides/types-of-magnesium.yaml` | Link label notes magnesium citrate vs glycinate coverage |

**Not changed:** Product YAML files (guides already surface via category `relatedGuides` on product pages). Comparison page template does not render markdown links — guide linked from hub and guide body instead.

---

## E. Claim-risk checks

| Check | Result |
|-------|--------|
| No "best for sleep/anxiety" claims | Pass |
| No constipation treatment framing | Pass |
| No disease-treatment language | Pass |
| No universal ranking language | Pass |
| `npm run lint:content` on published YAML | 0 errors |
| Guide `claimRiskLevel: low` | Unchanged |
| Guide `status: published`, `noindex: false` | Unchanged |

---

## F. Vitamin C blueprint summary

**Created:** `content/templates/phase-8b-vitamin-c-category-blueprint-2026-07-07.md`

Planning-only document covering:

- **Why Vitamin C next** — Phase 8A #1 category (9 keywords, ~190k TP, KD 1–9)
- **Target keyword set** — primary (best vitamin c, liposomal, absorption, natural) and secondary (form comparisons, dosage, side effects)
- **Keywords to avoid** — kids, pregnancy, colds/COVID/cancer, whitening, deficiency treatment, animal queries
- **Proposed cluster** — 9 future URLs (hub, ingredient, compare, 6 guides) — **not built**
- **Claim boundaries** — conservative immune/intake framing; clinician referral for vulnerable groups
- **Source rules** — NIH ODS, FDA, FTC, cert databases, official labels
- **Scoring rubric draft** — 9 criteria totaling 100 points
- **Product shortlist buckets** — 6 form/price tiers for future research
- **Amazon mapping** — exact SKU matching; no Amazon UGC/prices
- **Human-only rule** — permanent animal/pet rejection
- **Recommended Phase 8C** — source collection + schema/rubric setup first

**No Vitamin C YAML, routes, or published pages created.**

---

## G. Files changed

| File | Action |
|------|--------|
| `content/guides/magnesium-glycinate-vs-citrate.yaml` | Updated (SEO, table, FAQ, links) |
| `content/categories/magnesium.yaml` | Updated (intro keyword mention) |
| `content/ingredients/magnesium.yaml` | Updated (evidenceSummary guide reference) |
| `content/guides/how-to-choose-a-magnesium-supplement.yaml` | Updated (anchor text) |
| `content/guides/types-of-magnesium.yaml` | Updated (link label) |
| `content/templates/phase-8b-vitamin-c-category-blueprint-2026-07-07.md` | **Created** |
| `content/templates/phase-8b-magnesium-seo-and-vitamin-c-blueprint-report-2026-07-07.md` | **Created** |

**Not changed:** Product YAML, comparison YAML, scoring profiles, affiliate config, `config/site.ts`, `config/monetization.ts`, legal pages, Creatine content.

---

## H. Confirmation — no product/affiliate changes

| Item | Status |
|------|--------|
| Product facts | Unchanged |
| Prices / `lastPriceCheckedAt` | Unchanged |
| Scores / ratings | Unchanged |
| Third-party testing statuses | Unchanged |
| Affiliate mappings (`affiliate.enabled`) | Unchanged — 9 active, Klean Magnesium held back |
| Amazon ASINs in YAML | Unchanged |

---

## I. Confirmation — SITE_MODE prelaunch

`config/site.ts`: `siteMode: (process.env.SITE_MODE ?? "prelaunch")` — unchanged.

---

## J. Confirmation — ads disabled

`config/monetization.ts`: `ads.enabled: false`, `ads.loadScripts: false` — unchanged.

---

## K. Confirmation — legal pages draft/noindex

Legal routes use `LegalPageLayout` with `requiresLegalReview` and `lib/seo/indexing.ts` noindex policy — unchanged.

---

## L. Confirmation — no third category published

Published categories remain **Creatine** and **Magnesium** only. No `content/categories/vitamin-c.yaml` or Vitamin C product files created.

---

## M. Validation results

| Command | Result |
|---------|--------|
| `npm run check` | **Pass** — typecheck, eslint, 40 tests, validate:content 0 errors, lint:content 0 errors (90 template warnings) |
| `npm run build` | **Pass** — static generation successful; `/guides/magnesium-glycinate-vs-citrate` in build output |

| Verification | Result |
|--------------|--------|
| Magnesium guide published/indexable | `status: published`, `noindex: false` |
| Both keyword orders targeted | Yes — title, excerpt, intro, FAQ |
| No duplicate magnesium guide | Single slug `magnesium-glycinate-vs-citrate` |
| No Vitamin C live pages | No vitamin-c content YAML |
| Contact email | `help@suppcheckr.com` |

---

## N. Warnings / risks

1. **Category/ingredient intro mentions** reference the guide by name but render as plain text (no inline link) — the related-guides sections provide clickable links.
2. **FAQ is body markdown**, not structured FAQ schema — acceptable for current guide template; JSON-LD FAQ could be a future enhancement.
3. **Vitamin C "for women" keyword** has high TP (28k) but is flagged caution-only — do not create demographic landing pages in first wave.
4. **Post-deploy:** Verify Google Search Console indexing for updated title/description on `/guides/magnesium-glycinate-vs-citrate`.

---

## O. Recommended next phase

**Phase 8C — Vitamin C source collection + schema/rubric setup**

1. Draft `content/ingredients/vitamin-c.yaml` and `content/categories/vitamin-c.yaml` (draft/noindex)
2. Create `content/scoring/profiles/vitamin-c.yaml` and `content/scoring/rubrics/vitamin-c.yaml` from blueprint weights
3. Capture NIH ODS Vitamin C fact sheet citations with access dates
4. Run claim-language review against blueprint Section E before any product research

**Suggested commit message:**

```
Phase 8B: optimize magnesium guide and plan Vitamin C
```

---

*Phase 8B complete. Magnesium guide optimized for dual-keyword SEO; Vitamin C blueprint ready for Phase 8C.*
