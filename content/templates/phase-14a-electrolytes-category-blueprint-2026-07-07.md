# Phase 14A — Electrolytes Category Blueprint

**Date:** 2026-07-07  
**Project:** SuppCheckr.com (prelaunch)  
**Phase type:** Planning only — no live Electrolytes pages, products, or category publication in this phase

---

## A. Why Electrolytes next

### Phase 13B decision

Phase 13B recommended **Electrolytes** as the next category for affiliate/comparison upside, with **CoQ10** as the clean authority backup. Phase 8A keyword research supports this path.

### Keyword opportunity (Phase 8A)

| Signal | Detail |
|--------|--------|
| Head comparison | `lmnt vs liquid iv` — vol 2,600, TP 1,100, **KD 0** |
| Commercial intent | Branded product comparison; high affiliate potential |
| Placeholder exists | `content/categories/electrolytes.yaml` — `placeholder` / `noindex: true` |

### Label-comparison fit

Electrolyte drink mixes vary widely on dimensions SuppCheckr scores well:

- **Sodium/potassium/magnesium disclosure** — mg per serving vs. vague "hydration blend"
- **Sugar and carbohydrate content** — sugar-free vs sugar-containing formulas
- **Sweetener profile** — stevia, sucralose, allulose, cane sugar, dextrose
- **Serving format** — stick pack, tub, tablet, RTD
- **Price per serving** — normalized comparison across formats
- **Third-party testing** — NSF, Informed Sport where applicable
- **Claim conservatism** — hydration, hangover, performance, and illness-recovery marketing

### Amazon monetization fit

LMNT, Liquid IV, DripDrop, Nuun, Ultima, and Redmond Re-Lyte have strong Amazon SKU availability. SuppCheckr has a proven affiliate CTA workflow from Creatine, Magnesium, and Vitamin C — exact ASIN/UPC matching required before enabling per-product CTAs.

### Manageable claim risk (with guardrails)

When framed as **label education** and **product comparison** (not medical rehydration or illness treatment), Electrolytes are lower YMYL risk than condition-specific stacks. Risk increases sharply if copy drifts into dehydration treatment, hangover cure, cramp prevention, POTS, or performance guarantees.

---

## B. Target keyword set

### Primary keywords

| Keyword | Phase 8A signal | Planned target |
|---------|-----------------|----------------|
| lmnt vs liquid iv | KD 0, vol 2,600 | `/guides/lmnt-vs-liquid-iv` |
| electrolyte powder | Tier 1/2 | `/supplements/electrolytes` |
| best electrolyte powder | Tier 1/2 | `/supplements/electrolytes` |
| electrolyte drink mix | Tier 1/2 | `/supplements/electrolytes` |
| electrolyte tablets | Tier 2 | `/guides/electrolyte-powder-vs-tablets` |
| sugar free electrolyte powder | Tier 2 | `/guides/sugar-free-vs-sugar-electrolytes` |
| electrolyte powder without sugar | Tier 2 | `/guides/sugar-free-vs-sugar-electrolytes` |
| LMNT review | Branded | Product review (Phase 14B+) |
| Liquid IV review | Branded | Product review (Phase 14B+) |
| electrolyte powder comparison | Comparison intent | `/supplements/electrolytes/compare` |

### Secondary / supporting keywords

| Keyword | Planned target |
|---------|----------------|
| high sodium electrolyte powder | Hub FAQ / comparison table context |
| zero sugar electrolytes | Sugar-free guide + hub |
| electrolyte sticks | Category hub format filter |
| nuun vs lmnt | Future guide (Phase 15+) — not wave 1 |
| drip drop vs liquid iv | Future guide — high claim-risk; defer |

---

## C. Keywords to avoid or treat cautiously

| Keyword / pattern | Action | Reason |
|-------------------|--------|--------|
| electrolytes for dehydration | Reject as primary framing | Medical treatment adjacency |
| electrolytes for hangover | Reject | Disallowed claim category |
| electrolytes for POTS | Reject dedicated page | Medical condition |
| electrolytes for kids | FAQ mention only | Vulnerable population |
| electrolytes for pregnancy | Avoid dedicated page | YMYL |
| electrolytes for diarrhea / vomiting | Reject | Illness fluid-loss treatment |
| best electrolyte for cramps | Reject | Performance/medical claim |
| ORS / oral rehydration therapy | Reject as SuppCheckr positioning | Clinical use case |
| keto flu electrolytes | FAQ caution only | Medical-style fasting claims |
| Animal/pet electrolyte queries | **Permanent reject** | Human supplements only |
| UK/Australia geo variants | Reject | US-focused site |

---

## D. Proposed content cluster (planning only)

Do **not** create these pages in Phase 14A.

| Type | URL | Purpose |
|------|-----|---------|
| Category hub | `/supplements/electrolytes` | Primary head-term target; scoring overview, product table |
| Ingredient reference | `/ingredients/electrolytes` | Sodium/potassium/magnesium context, safety notes |
| Comparison table | `/supplements/electrolytes/compare` | Side-by-side label/score comparison |
| Guide | `/guides/lmnt-vs-liquid-iv` | Branded comparison; KD 0 entry point |
| Guide | `/guides/how-to-choose-an-electrolyte-powder` | Buyer checklist |
| Guide | `/guides/electrolyte-powder-vs-tablets` | Format comparison |
| Guide | `/guides/sugar-free-vs-sugar-electrolytes` | Sugar/sweetener comparison |
| Guide | `/guides/what-are-electrolytes` | Foundational education |

**Publication order (recommended for Phase 14B+):**

1. Scoring profile + rubric + ingredient YAML (draft)
2. Product longlist research (LMNT, Liquid IV, Nuun, DripDrop, Ultima/Re-Lyte)
3. Lock LMNT + Liquid IV product facts
4. Guide: LMNT vs Liquid IV (after product facts locked)
5. Additional guides (how-to-choose, sugar-free, formats, what-are)
6. Product reviews → comparison table
7. Category hub publication
8. Amazon mapping (Phase 14C) — exact ASIN/UPC only

---

## E. Claim-risk boundaries

### Must not claim

- Cures or treats dehydration
- Treats electrolyte imbalance, heat illness, POTS, or illness-related fluid loss
- Prevents or cures hangovers
- Prevents muscle cramps or guarantees athletic performance
- Safe for everyone; best for kids, pregnancy, or medical conditions
- Medically necessary or doctor-recommended (unless specifically sourced)
- FDA-approved supplement
- Best Overall / Best for Everyone

### Preferred wording

- "Helps compare sodium, potassium, magnesium, sugar, sweeteners, and price per serving"
- "May be useful for people comparing electrolyte drink mixes for active lifestyles"
- "Labels vary widely by sodium level, sugar content, sweeteners, and serving format"
- "Not all electrolyte products are designed for the same use case"
- "Talk with a qualified healthcare professional if pregnant, nursing, under 18, taking medication, managing blood pressure, kidney disease, heart disease, fluid restrictions, or a medical condition"

### Comparison framing

- Score and compare **labels**, not personal hydration outcomes
- No "Best Overall" or "Best for Everyone"
- Criterion labels on comparison table = supported label attributes, not condition winners

---

## F. Source rules

See [`electrolytes-source-inventory-2026-07-07.md`](./electrolytes-source-inventory-2026-07-07.md).

| Source | Use for |
|--------|---------|
| NIH ODS sodium, potassium, magnesium, calcium fact sheets | Nutrient context, safety caveats |
| FDA dietary supplements overview | Regulatory framing |
| FDA Nutrition Facts label resources | RTD label literacy |
| FTC endorsement + health products guidance | Affiliate and claim substantiation |
| NSF / USP / Informed Choice/Sport | Third-party testing verification |
| Official brand product pages | Primary label facts |

**Do not use:** Amazon reviews/Q&A/ratings/images/live prices; influencer hydration claims; hangover-cure sources; medical rehydration protocols.

---

## G. Product shortlist strategy

Do **not** create product YAML in Phase 14A. Future buckets:

| Bucket | Example brands | Rationale |
|--------|----------------|-----------|
| High-sodium, low/no sugar stick | LMNT, Redmond Re-Lyte | Sodium-forward; sugar-free comparison |
| Sugar-containing hydration stick | Liquid IV | Major branded competitor; sugar disclosure |
| Sugar-free moderate sodium | Nuun, Ultima | Mid-sodium; sweetener variance |
| ORS-adjacent (optional) | DripDrop | High claim-risk — label compare only if included |
| Tub/tablet format | Various | Format diversity |
| Budget anchor | Store brand or value SKU | Price-per-serving anchor |

**Selection criteria (Phase 14B+):**

- Exact label match to stable retail SKU
- Clear sodium mg (minimum) on Nutrition/Supplement Facts
- Distinct formula representation (no duplicate buckets)
- Amazon ASIN only after UPC/packaging verification
- LMNT and Liquid IV **must** be researched and locked before LMNT vs Liquid IV guide publishes

---

## H. Scoring rubric direction

Proposed Electrolytes scoring profile weights (total 100) — mapped to existing schema keys:

| Editorial criterion | Schema key | Weight | Notes |
|---------------------|------------|-------:|-------|
| Electrolyte transparency | `doseTransparency` | 18 | Sodium/potassium/magnesium mg per serving |
| Sodium/potassium balance disclosure | `ingredientTransparency` | 14 | Composition clarity; not medical "balance" advice |
| Sugar/sweetener profile | `additives` | 18 | Sugar g, sweeteners, colors/flavors |
| Label clarity | `labelClarity` | 12 | Serving size, format, allergens |
| Evidence-aligned claims | `evidenceAlignment` | 10 | No hangover/dehydration/performance overclaims |
| Testing transparency | `thirdPartyTesting` | 10 | Verified vs claimed |
| Price value (per serving) | `priceValue` | 8 | Dated manual price |
| Serving practicality | `formulaQuality` | 6 | Stick vs tub vs RTD usability |
| Brand transparency | `brandTransparency` | 4 | Official label access, contact |

**Files:** `content/scoring/profiles/electrolytes.yaml`, `content/scoring/rubrics/electrolytes.yaml`

---

## I. Affiliate / Amazon mapping plan (later)

- Electrolytes SKUs are abundant on Amazon — good monetization potential
- **Exact SKU/ASIN matching required** — flavor, count, and packaging must match review YAML
- No Amazon images, reviews, Q&A, ratings, or live prices in content
- Amazon CTA only after `affiliate.enabled: true` per product with verified mapping
- Klean Magnesium UPC mismatch precedent: hold back any SKU with packaging ambiguity
- **Phase 14A:** no ASIN mappings

---

## J. Human-only rule

**Electrolyte content on SuppCheckr is for human dietary supplements only.**

Permanently reject and do not target:

- Dog, cat, horse, or other animal electrolyte queries
- Veterinary dosing contexts
- Pet supplement Amazon categories

---

## K. Rejection rules

| Reject | Reason |
|--------|--------|
| Proprietary blend without sodium/potassium amounts | Cannot compare electrolytes |
| Illness/dehydration treatment positioning | Out of scope |
| Hangover-cure primary marketing | Disallowed claims |
| Amazon reviews as evidence | Policy violation |
| Pediatric/prenatal-only SKUs as V1 anchor | Wave-1 scope |
| Plain flavor drops without electrolyte disclosure | Not comparable category |

---

## L. Recommended Phase 14B

**Recommended next phase: Electrolytes product longlist + draft cluster**

Rationale: Blueprint, source rules, claim language, and scoring rubric are complete after Phase 14A. Phase 14B should:

1. Run product longlist research (LMNT, Liquid IV, Nuun, DripDrop, Ultima/Re-Lyte)
2. Lock LMNT and Liquid IV product facts first
3. Draft product YAML (draft/noindex)
4. Draft guides including LMNT vs Liquid IV (after product facts locked)
5. Draft comparison table and upgrade category/ingredient shells
6. Run source-gap QA before publication review

**Do not in Phase 14B:**

- Publish Electrolytes cluster without explicit approval
- Enable ads or switch `SITE_MODE` to production
- Index legal pages
- Add Amazon ASINs until mapping phase (14C)

---

*Planning document only. No Electrolytes live pages created in Phase 14A.*
