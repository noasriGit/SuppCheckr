# Phase 15A — CoQ10 Category Blueprint

**Date:** 2026-07-07  
**Project:** SuppCheckr.com (prelaunch)  
**Phase type:** Planning only — no live CoQ10 pages, products, or category publication in this phase

---

## A. Why CoQ10 next

### Phase 13B / post-Electrolytes path

Phase 13B identified **CoQ10** as the recommended next category for **clean supplement authority** after Electrolytes. Electrolytes rollout is complete through Phase 14J. CoQ10 is less hydration/illness-treatment-adjacent and fits SuppCheckr's label/source/value model before medically nuanced categories like Vitamin D.

### Keyword opportunity (Phase 8A)

| Signal | Detail |
|--------|--------|
| Head commercial term | `best coq10 supplement` — vol 6,100, TP 13,000, **KD 3** |
| Form comparison | `best ubiquinol supplement` — vol 300, TP 600, **KD 0** |
| Supporting terms | `coq10 supplement`, `ubiquinol vs ubiquinone`, `coq10 100 mg`, `coq10 200 mg` |
| Placeholder | No pre-existing published CoQ10 cluster — new `content/categories/coq10.yaml` draft shell created in 15A |

### Label-comparison fit

CoQ10 supplements vary on dimensions SuppCheckr scores well:

- **Form disclosure** — ubiquinone vs ubiquinol
- **Dose per serving** — 100 mg vs 200 mg; softgels per serving
- **Delivery format** — softgel, capsule, tablet, liquid
- **Carrier oils** — olive, soybean, sunflower, MCT
- **Capsule material** — gelatin vs veggie softgel
- **Added actives** — vitamin E, BioPerine, PQQ (combo caution)
- **Price per 100 mg CoQ10** — normalized value metric
- **Third-party testing** — USP, NSF, Informed where applicable
- **Claim conservatism** — heart/statin/energy marketing guardrails

### Amazon monetization fit (future)

CoQ10 has strong Amazon SKU availability (Qunol, Doctor's Best, Jarrow, NOW, Nature Made, Life Extension, Kirkland). SuppCheckr affiliate workflow is proven (18 active mappings). **No ASIN work in Phase 15A.**

### Manageable claim risk (with guardrails)

Framed as **label education** and **product comparison**, CoQ10 is moderate YMYL risk — lower than illness-treatment categories but higher than Creatine. Risk spikes if copy drifts into heart-disease treatment, statin advice, fertility/migraine/Parkinson's outcomes, or guaranteed energy claims.

---

## B. Keyword opportunity

### Primary keywords

| Keyword | Phase 8A signal | Planned target |
|---------|-----------------|----------------|
| best coq10 supplement | KD 3, vol 6,100 | `/supplements/coq10` |
| coq10 supplement | Commercial | `/supplements/coq10` |
| ubiquinol vs ubiquinone | Comparison intent | `/guides/ubiquinol-vs-ubiquinone` |
| coq10 ubiquinol | Form intent | Hub + form guide |
| coq10 100 mg | Dose intent | `/guides/coq10-100mg-vs-200mg` |
| coq10 200 mg | Dose intent | `/guides/coq10-100mg-vs-200mg` |
| coq10 softgels | Format intent | `/guides/coq10-softgels-vs-capsules` |
| coq10 supplement comparison | Comparison | `/supplements/coq10/compare` |
| coq10 reviews | Branded/review intent | Product reviews (Phase 15C+) |

### Secondary / supporting keywords

| Keyword | Planned target |
|---------|----------------|
| best ubiquinol supplement | Hub + ubiquinol vs ubiquinone guide |
| coq10 with pqq | **Defer/caution** — combo complexity; FAQ mention only in wave 1 |
| qunol coq10 review | Branded product review (Phase 15C+) |
| doctors best coq10 | Branded product review |
| coq10 for statins | **Reject as primary framing** — redirect to label comparison + HCP caveat |

### Keywords to avoid or treat cautiously

| Keyword / pattern | Action | Reason |
|-------------------|--------|--------|
| coq10 for heart disease | Reject as primary framing | Disease treatment adjacency |
| coq10 and statins / statin side effects | Reject dedicated page | Medication advice adjacency |
| coq10 blood pressure / cholesterol | Reject | Outcome claims |
| coq10 fertility / coq10 migraine / coq10 parkinson's | Reject dedicated pages | Condition-treatment adjacency |
| coq10 energy boost | FAQ caution only | Guaranteed outcome risk |
| coq10 anti aging | Reject primary framing | Overclaim risk |
| best coq10 for seniors / heart patients | Reject | Demographic medical winners |
| pet / dog coq10 | **Permanent reject** | Human supplements only |

---

## C. First-wave content cluster proposal

Do **not** create these pages in Phase 15A.

| Type | URL | Purpose |
|------|-----|---------|
| Category hub | `/supplements/coq10` | Primary head-term target; scoring overview, product table |
| Ingredient reference | `/ingredients/coq10` | CoQ10 form context, safety notes |
| Comparison table | `/supplements/coq10/compare` | Side-by-side label/score comparison |
| Guide | `/guides/ubiquinol-vs-ubiquinone` | Form comparison; KD 0 entry point |
| Guide | `/guides/how-to-choose-a-coq10-supplement` | Buyer checklist |
| Guide | `/guides/what-is-coq10` | Foundational education |
| Guide | `/guides/coq10-100mg-vs-200mg` | Dose label-reading comparison |
| Guide | `/guides/coq10-softgels-vs-capsules` | Format/delivery comparison |

**Publication order (recommended for Phase 15B+):**

1. Scoring profile + rubric + ingredient YAML (draft) — **Phase 15A done**
2. Product longlist research (Phase 15B)
3. Lock 2–3 anchor products (one ubiquinol, one ubiquinone minimum)
4. Guide: Ubiquinol vs Ubiquinone (after product facts locked)
5. Additional guides (how-to-choose, dose, format, what-is)
6. Product reviews → comparison table
7. Category hub publication
8. Amazon mapping (late phase) — exact ASIN/UPC only

---

## D. Claim-risk boundaries

### Must not claim

- Treats or prevents heart disease, heart failure, high blood pressure, or high cholesterol
- Replaces statins or treats statin side effects
- Fertility, migraine, or Parkinson's treatment
- Anti-aging cure or guaranteed energy boost
- Safe for everyone; best for heart disease / statin users / seniors
- FDA-approved supplement; unqualified "clinically proven"
- Best Overall / Best for Everyone
- Medication start/stop advice

### Preferred wording

- "Helps compare CoQ10 form, dose, serving size, added ingredients, testing, and price per 100 mg"
- "CoQ10 products vary by ubiquinone/ubiquinol form, capsule/softgel format, carrier oils, and testing transparency"
- "This comparison is not medical advice and does not rank products for heart disease or medication-related use"
- "Talk with a qualified healthcare professional if pregnant, nursing, under 18, taking medications, taking blood thinners, preparing for surgery, managing a heart condition, liver/kidney disease, or a medical condition"

---

## E. Source rules

See [`coq10-source-inventory-2026-07-07.md`](./coq10-source-inventory-2026-07-07.md).

| Source | Use for |
|--------|---------|
| NIH ODS CoQ10 HP/consumer sheets | Nutrient context, safety caveats |
| NCCIH CoQ10 overview | Conservative use-context |
| FDA dietary supplements overview | Regulatory framing |
| FTC endorsement + health products guidance | Affiliate and claim substantiation |
| NSF / USP / Informed Choice/Sport | Third-party testing verification |
| Official brand product pages | Primary label facts |

**Do not use:** Amazon reviews/Q&A/ratings/images/live prices; influencer heart-health claims; statin advice pages; disease-treatment articles as ranking evidence.

---

## F. Product shortlist strategy

Do **not** create product YAML in Phase 15A. Future buckets:

| Bucket | Example brands (research candidates) | Rationale |
|--------|--------------------------------------|-----------|
| Ubiquinol softgel | Qunol Mega Ubiquinol, Doctor's Best Ubiquinol | Premium form anchor |
| Ubiquinone softgel | Doctor's Best Ubiquinone, NOW CoQ10, Jarrow Q-Absorb | Mainstream form anchor |
| 100 mg dose | Various | Common retail dose comparison |
| 200 mg dose | Various | Higher-dose label comparison |
| Budget ubiquinone | Kirkland, Nutricost, Puritan's Pride (verify labels) | Price-per-100-mg anchor |
| Combo defer | PQQ stacks, omega-3 combos | High complexity — wave 2 or reject |

**Selection criteria (Phase 15B+):**

- Exact label match to stable retail SKU
- Clear CoQ10 form and mg per serving on Supplement Facts
- Distinct formula representation (no duplicate buckets)
- Official brand label URL available
- Amazon ASIN only after UPC/packaging verification (future phase)
- Ubiquinol + ubiquinone anchors **must** be researched before ubiquinol vs ubiquinone guide publishes

---

## G. Scoring rubric direction

Created in Phase 15A — mapped to existing schema keys (total 100):

| Editorial criterion | Schema key | Weight |
|---------------------|------------|-------:|
| Form transparency | `ingredientTransparency` | 16 |
| Dose clarity | `doseTransparency` | 14 |
| Label clarity | `labelClarity` | 12 |
| Testing transparency | `thirdPartyTesting` | 12 |
| Price/value (per 100 mg) | `priceValue` | 12 |
| Claim conservatism + evidence alignment | `evidenceAlignment` | 14 |
| Additive/allergen profile | `additives` | 8 |
| Serving practicality | `formulaQuality` | 6 |
| Brand transparency | `brandTransparency` | 6 |

Files: `content/scoring/profiles/coq10.yaml`, `content/scoring/rubrics/coq10.yaml`

---

## H. Affiliate/Amazon mapping plan (later)

| Phase | Work |
|-------|------|
| 15A | **None** — no ASINs |
| 15B–15F | Product research, drafts, publication |
| 15G+ (tentative) | Exact ASIN mapping after UPC/SKU verification per product |
| Hold rules | Same as existing clusters — no placeholder CTAs; fail closed without tag |

Expected brands with Amazon presence: Qunol, Doctor's Best, Jarrow, NOW, Nature Made — **verify exact SKU before any mapping.**

---

## I. Human-only rule

All CoQ10 product facts, prices, scores, testing statuses, and source claims require human research and editorial sign-off. AI-assisted drafts must be verified against official labels before YAML lock.

---

## J. Rejection/defer rules

| Rule | Action |
|------|--------|
| Pet/animal CoQ10 | Permanent reject |
| Unclear ubiquinone vs ubiquinol on official label | Reject or defer |
| Proprietary blend without CoQ10 mg | Reject |
| Primary disease-treatment or statin-advice marketing | Reject for SuppCheckr copy; mirror brand claims only as `brand_claim` |
| PQQ/omega-3 combo stacks | Defer wave 1 unless strong differentiation needed |
| No official Supplement Facts | Reject |
| Amazon listing as label source | Reject for evidence; outbound only after mapping phase |

---

## K. Recommended Phase 15B

**Phase 15B — CoQ10 product longlist research**

1. Screen 15–25 candidates using `coq10-product-research-checklist.md`
2. Produce `coq10-product-longlist-research-2026-07-07.md` with inclusion/rejection table
3. Recommend 5-product wave-1 shortlist across ubiquinol, ubiquinone, dose, and value buckets
4. No product YAML until shortlist approved
5. No publication, no Amazon ASINs

---

*Phase 15A blueprint only. No CoQ10 content published or indexable.*
