# Electrolytes Publication Readiness Checklist

**Date:** 2026-07-07 (prepared Phase 14E, executed 2026-07-15)  
**Phase:** 14E prep document — **do not execute until explicit publication approval**  
**Companion report:** [`phase-14e-electrolytes-publication-prep-report-2026-07-07.md`](./phase-14e-electrolytes-publication-prep-report-2026-07-07.md)

This checklist describes a future Electrolytes **publication phase**. It is not the publication phase itself.

---

## A. Current Electrolytes inventory

| Type | Count | Status |
|------|------:|--------|
| Category hub | 1 | `draft` / `noindex: true` |
| Ingredient reference | 1 | `draft` / `noindex: true` |
| Product reviews | 5 | `draft` / `noindex: true` |
| Guides | 5 | `draft` / `noindex: true` |
| Comparison table | 1 | `draft` / `noindex: true` |
| Brand YAML (LMNT, Liquid I.V., Nuun, Ultima, Thorne) | 5 | `draft` / `noindex: true` |
| Scoring profile + rubric | 2 | Present (`electrolytes`) |
| Amazon affiliate mappings | 0 | Deferred to Phase 14F |

**Products:**

| Product | Slug | Format bucket |
|---------|------|---------------|
| LMNT Zero-Sugar Electrolytes (Citrus Salt, 30 sticks) | `lmnt-citrus-salt-30` | High-sodium sugar-free stick |
| Liquid I.V. Hydration Multiplier Lemon Lime (16 sticks) | `liquid-iv-hydration-multiplier-lemon-lime-16` | Sugar-containing stick |
| Nuun Sport Lemon Lime (10 tablets) | `nuun-sport-lemon-lime-10-tablets` | Tablet |
| Ultima Replenisher Lemonade (20 sticks) | `ultima-replenisher-lemonade-20-sticks` | Lower-sodium daily |
| Thorne Catalyte Lemon Lime (30 servings) | `thorne-catalyte-lemon-lime-30-servings` | NSF Certified for Sport scoop |

**Guides:**

| Guide | Slug |
|-------|------|
| LMNT vs Liquid I.V. | `lmnt-vs-liquid-iv` |
| How to choose an electrolyte powder | `how-to-choose-an-electrolyte-powder` |
| What are electrolytes? | `what-are-electrolytes` |
| Sugar-free vs sugar electrolytes | `sugar-free-vs-sugar-electrolytes` |
| Electrolyte powder vs tablets | `electrolyte-powder-vs-tablets` |

**Comparison:** `electrolyte-supplements-compared`

---

## B. URLs planned for future publication

| URL | Entity |
|-----|--------|
| `/supplements/electrolytes` | Category hub |
| `/supplements/electrolytes/compare` | Comparison table |
| `/ingredients/electrolytes` | Ingredient reference |
| `/guides/lmnt-vs-liquid-iv` | Guide |
| `/guides/how-to-choose-an-electrolyte-powder` | Guide |
| `/guides/what-are-electrolytes` | Guide |
| `/guides/sugar-free-vs-sugar-electrolytes` | Guide |
| `/guides/electrolyte-powder-vs-tablets` | Guide |
| `/supplements/electrolytes/lmnt-citrus-salt-30` | Product review |
| `/supplements/electrolytes/liquid-iv-hydration-multiplier-lemon-lime-16` | Product review |
| `/supplements/electrolytes/nuun-sport-lemon-lime-10-tablets` | Product review |
| `/supplements/electrolytes/ultima-replenisher-lemonade-20-sticks` | Product review |
| `/supplements/electrolytes/thorne-catalyte-lemon-lime-30-servings` | Product review |

---

## C. Required before publication

- [ ] **All Electrolytes YAML `status` changed** from `draft` → `published` (category, ingredient, 5 products, 5 guides, comparison, 5 brands)
- [ ] **All Electrolytes `noindex` changed** from `true` → `false`
- [ ] **Category/ingredient/comparison visible** in sitemap, site search, and public hub pages (`/supplements`, `/ingredients`, `/guides`, `/compare`)
- [ ] **Internal links verified** — category ↔ guides ↔ comparison ↔ products ↔ ingredient; `comparisonGroupIds` on all five products
- [ ] **No risky medical claims** — re-run risky-term lint; no dehydration treatment, hangover, cramp, POTS, or demographic-winner language
- [ ] **Thorne label source resolved or caveated**
  - [x] Phase 14E: official thorne.com label still unavailable — retailer-mirror caveat documented
  - [ ] Re-verify live Supplement Facts image (Target, Thorne, or other non-Amazon retailer) before publication
  - [x] NSF Certified for Sport listing 1286726 reconfirmed for Catalyte Lemon Lime powder
  - [ ] NSF vs retailer SFP calorie/sugar variance accepted or corrected on current label
- [ ] **No Amazon links until Phase 14F** — `affiliate.enabled: false` on all Electrolytes products at publication
- [ ] **Final build/check pass** — `npm run check` and `npm run build`
- [ ] **Manual live-page spot-check** after deployment (all URLs in section B)

---

## D. GSC submission checklist (future publication)

After deploy and sitemap refresh:

- [ ] Request indexing: `/supplements/electrolytes` (category hub)
- [ ] Request indexing: `/supplements/electrolytes/compare` (comparison)
- [ ] Request indexing: `/guides/lmnt-vs-liquid-iv` (KD 0 branded entry)
- [ ] Request indexing: `/guides/how-to-choose-an-electrolyte-powder`
- [ ] Request indexing: `/guides/what-are-electrolytes`
- [ ] Request indexing: `/ingredients/electrolytes`
- [ ] Optional subset: representative product reviews (LMNT, Liquid I.V., Thorne)
- [ ] Confirm no draft/noindex Electrolytes URLs appear as indexable in GSC coverage report

---

## E. Affiliate mapping checklist (future Phase 14F)

Execute only after explicit approval and **after** publication QA:

1. **Exact product match only** — UPC/SKU, flavor, count, and serving format must match locked YAML
2. **No Amazon images, reviews, Q&A, star ratings, or live prices** as evidence or on-page content
3. **Untagged Amazon URL convention** in source data; generated affiliate tag applied at render time only
4. **Generated tag must resolve to `suppcheckr-20`** (or current approved Associates tag in deployment env)
5. **Disclosure near CTA** — Amazon Associates site disclosure remains active
6. **Per-product `affiliate.enabled: true`** only after exact-match QA per SKU
7. **Re-validation** — `npm run check` and `npm run build` after mapping

---

## F. Legal/medical disclaimer reminder

- SuppCheckr is not a medical authority, doctor, dietitian, or pharmacy substitute
- Electrolyte drink mixes are not dehydration treatment, ORS, or illness recovery therapy
- High-sodium products require individual medical context — especially blood pressure, kidney disease, heart disease, fluid restrictions, pregnancy, nursing, under 18, and medication interactions
- Legal pages remain draft/noindex until attorney/human review — do not publish legal pages in the Electrolytes publication phase unless separately approved

---

## G. Do-not-publish blockers

| Blocker | Phase 14E status |
|---------|------------------|
| Thorne official brand-hosted Supplement Facts not locked | **Open** — retailer mirror caveat documented; Vitacost URL 404 at Phase 14E re-check |
| Thorne NSF vs retailer calorie/sugar variance | **Open** — documented; values retained from Phase 14C retailer SFP |
| Product images remain branded placeholders | **Open** — acceptable for draft; creative phase optional before/after publication |
| No explicit publication approval | **Required** — cluster remains draft/noindex |
| Amazon ASIN/UPC mapping not completed | **Deferred** — Phase 14F |
| Legal pages draft/noindex | **By design** — unchanged |

---

## Publication score snapshot (Phase 14E, pre-publish)

| Product | Overall | Testing | $/serving (2026-07-15) |
|---------|--------:|---------|----------------------:|
| Thorne Catalyte | 81 | verified (NSF 1286726) | $1.13 |
| LMNT Citrus Salt | 77 | unknown | $1.50 |
| Ultima Lemonade | 77 | unknown | $1.05 |
| Nuun Sport | 76 | unknown | $0.75 |
| Liquid I.V. HM | 61 | unknown | $1.56 |

**Price checked:** 2026-07-15 (re-check before publication).

---

## Recommended publication commit message (future)

```
Phase 14F or later: publish Electrolytes supplement cluster
```

---

*Checklist only. No publication actions taken in Phase 14E.*
