# LMNT vs Liquid I.V. — Source Comparison Notes (Phase 14B)

**Date:** 2026-07-07 (research pass completed 2026-07-15)  
**Phase:** 14B — source collection for future `/guides/lmnt-vs-liquid-iv`  
**Status:** Source notes only — **not guide YAML**  
**Dependency:** Do not publish guide until LMNT and Liquid I.V. product facts are locked in product YAML (Phase 14C+)

See also: [`lmnt-vs-liquid-iv-guide-blueprint-2026-07-07.md`](./lmnt-vs-liquid-iv-guide-blueprint-2026-07-07.md), [`electrolytes-claim-language-guide.md`](./electrolytes-claim-language-guide.md), [`electrolytes-product-longlist-research-2026-07-07.md`](./electrolytes-product-longlist-research-2026-07-07.md).

---

## A. Scope and constraints

| Constraint | Status |
|------------|--------|
| Source comparison notes only | **Confirmed** |
| No guide YAML | **Confirmed** |
| No product YAML | **Confirmed** |
| No Amazon links, ASINs, reviews, ratings, images, or live prices | **Confirmed** |
| Label facts from official brand pages + dated non-Amazon retailer cross-check only | **Confirmed** |
| Locked SKUs for this comparison pass | LMNT Citrus Salt 30ct sticks; Liquid I.V. Lemon Lime 16ct sticks |

---

## B. Official LMNT source summary

| Field | Value |
|-------|-------|
| **Product** | LMNT Zero-Sugar Electrolytes |
| **Locked flavor / format** | Citrus Salt (representative flavored stick; electrolyte amounts consistent across standard drink mix per brand) |
| **Locked count** | 30 stick packs per box |
| **Official product URL** | https://drinklmnt.com/products/lmnt-recharge-electrolyte-drink |
| **Official ingredients / electrolyte ratios URL** | https://drinklmnt.com/pages/ingredients |
| **Label source** | Brand product page (“What’s inside”) + ingredients page mineral breakdown |
| **Serving** | 1 stick pack (~6 g powder) mixed in 16–32 fl oz water (per brand) |
| **Price source (2026-07-15)** | LMNT.com one-time purchase 30ct box — **$45.00** |
| **Price per serving** | **$1.50** ($45 ÷ 30) |
| **Testing** | `unknown` — no NSF/Informed listing verified for locked SKU in Phase 14B |

### LMNT label facts (locked SKU family)

| Nutrient / attribute | Per serving |
|----------------------|-------------|
| Sodium | **1,000 mg** |
| Potassium | **200 mg** |
| Magnesium | **60 mg** |
| Calcium | Not listed as separate line on consumer panel |
| Chloride | Present as sodium chloride / potassium chloride; not broken out as mg on consumer panel |
| Total sugars | **0 g** |
| Calories | **0** |
| Sweeteners | **Stevia leaf extract** (flavored SKUs); Raw Unflavored unsweetened |
| Other actives | None |
| Key other ingredients | Sodium chloride, potassium chloride, magnesium malate (or di-magnesium malate), citric acid, natural flavors (flavored) |

### LMNT brand claims (mirror as `brand_claim` only — not SuppCheckr facts)

- “Zero sugar electrolytes”; paleo/keto friendly positioning
- “Science-backed ratio” / meaningful electrolyte dose
- Keto/low-carb lifestyle adjacency on brand site

---

## C. Official Liquid I.V. source summary

| Field | Value |
|-------|-------|
| **Product** | Hydration Multiplier® |
| **Locked flavor / format** | Lemon Lime |
| **Locked count** | 16 stick packs per pouch |
| **Official product URL** | https://www.liquid-iv.com/products/lemon-lime-hydration-multiplier |
| **Label source** | Official brand product page; Nutrition Facts cross-check: [Target multiserve tub listing](https://www.target.com/p/liquid-i-v-lemon-lime-hydration-multiplier-multi-serve-tub-sports-drink-20-servings-11-29oz-non-caffeinated-powdered-formula/-/A-94929715) (16 g stick serving size; retailer caveat) |
| **Serving** | 1 stick (16 g) in ~16 fl oz (473 mL) water (per brand FAQ) |
| **Price source (2026-07-15)** | LiquidIV.com one-time 16ct — **$24.99** |
| **Price per serving** | **$1.56** ($24.99 ÷ 16) |
| **Testing** | `unknown` |

### Liquid I.V. Hydration Multiplier label facts (Lemon Lime stick)

| Nutrient / attribute | Per serving |
|----------------------|-------------|
| Sodium | **500 mg** |
| Potassium | **370 mg** |
| Magnesium | **Not disclosed** on US Nutrition Facts panel |
| Calcium | **0 mg** |
| Chloride | Not listed separately |
| Total carbohydrates | **11 g** |
| Total sugars / added sugars | **11 g** |
| Calories | **45** |
| Sweeteners | **Cane sugar, dextrose** primary; rebiana (stevia) in ingredient list |
| Other actives | Vitamin C (~73 mg), B3, B5, B6, B12 (per panel) |
| Key other ingredients | Citric acid, salt, potassium citrate, sodium citrate, natural flavors |

### Liquid I.V. brand claims (mirror as `brand_claim` only)

- “Faster hydration than water alone”
- “3× the electrolytes of the leading sports drink”
- FAQ references Oral Rehydration Solution science and glucose-sodium co-transport
- Pediatric/pregnancy FAQ pages exist — **do not** use for SuppCheckr demographic recommendations

---

## D. Label comparison (conservative)

| Criterion | LMNT (Citrus Salt stick) | Liquid I.V. (Lemon Lime stick) | Comparison note (label-only) |
|-----------|--------------------------|--------------------------------|------------------------------|
| **Sodium** | 1,000 mg | 500 mg | LMNT lists **2×** sodium per stick on these locked SKUs |
| **Potassium** | 200 mg | 370 mg | Liquid I.V. lists **more potassium** per stick |
| **Magnesium** | 60 mg | Not disclosed | LMNT discloses magnesium; Liquid I.V. US panel does not |
| **Sugar** | 0 g | 11 g | Sugar-free vs sugar-containing formulas |
| **Calories** | 0 | 45 | Calorie difference driven by sugar |
| **Sweeteners** | Stevia (flavored) | Cane sugar + dextrose (+ trace stevia) | Different sweetener strategies |
| **Serving format** | Stick pack (~6 g) | Stick pack (16 g) | Both single-serve sticks; different powder weight |
| **Servings per box (locked)** | 30 | 16 | — |
| **Price (2026-07-15)** | $45.00 / box | $24.99 / pouch | Non-Amazon brand pricing |
| **Price per serving** | **$1.50** | **$1.56** | Similar MSRP per stick despite sodium/sugar differences |
| **Vitamins / extras** | None highlighted | Vitamin C + B vitamins | Liquid I.V. is multi-nutrient drink mix |

---

## E. Conservative comparison framing

**Use in future guide intro:**

> LMNT and Liquid I.V. are two widely compared electrolyte drink mixes sold as single-serve stick packs. This comparison summarizes **publicly available Nutrition Facts information** — sodium, potassium, magnesium (when disclosed), sugar, calories, sweeteners, serving format, and dated price per serving — not personal hydration outcomes or medical suitability.

**Neutral shopping framings (allowed):**

- “Shoppers comparing **high-sodium, sugar-free** stick packs may prefer labels like LMNT’s 1,000 mg sodium / 0 g sugar profile.”
- “Shoppers comparing **sugar-containing** hydration sticks may note Liquid I.V.’s 11 g sugar and 500 mg sodium per 16 g stick.”
- “These products are **not equivalent formulas** — sodium, potassium, sugar, and calorie disclosure differ on the labels.”

**Decline outcome framing:**

- Do not answer “which hydrates better,” “which prevents dehydration,” or “which is better for workouts/heat illness.”

---

## F. Claims to avoid (SuppCheckr copy)

| Disallowed | Why |
|------------|-----|
| “LMNT treats dehydration” / “Liquid I.V. cures dehydration” | Medical treatment framing |
| “Liquid I.V. hydrates 2× faster” as SuppCheckr fact | Brand CTT claim — `brand_claim` only if mirrored with citation |
| Hangover recovery framing | Site policy |
| Cramp prevention / workout performance guarantees | Unsupported outcome claims |
| “Best for athletes,” “best for keto,” “best for everyone” | Demographic / universal winners |
| “LMNT is medically better because more sodium” | Medical superiority |
| Amazon review quotes or star ratings | Policy violation |

---

## G. Source gaps

| Gap | Impact | Phase 14C action |
|-----|--------|------------------|
| Liquid I.V. magnesium not on US panel | Cannot compare Mg as label fact | State “not disclosed on Nutrition Facts” |
| LMNT chloride not broken out in mg | Optional comparison column | Omit or note “present as salts” |
| Flavor-specific ingredient variance (LMNT malate forms) | Low — electrolyte totals consistent per brand | Lock Citrus Salt SKU in product YAML |
| Liquid I.V. flavor SKU variance | Moderate | Lock Lemon Lime 16ct only |
| Thorne/LMNT/Liquid IV official label images for citations | Citation IDs not created yet | Add `label-lmnt-*` and `label-liquid-iv-*` in product YAML |
| Subscribe & Save pricing | Not used | Manual MSRP one-time price only |

---

## H. Draft future guide outline

1. **Intro** — label comparison purpose; not medical advice  
2. **Quick comparison table** — Na, K, Mg (if disclosed), sugar, calories, $/serving  
3. **Sodium and potassium per serving** — label facts with citations  
4. **Magnesium disclosure** — LMNT 60 mg vs Liquid I.V. not disclosed  
5. **Sugar, calories, and sweeteners**  
6. **Serving format and stick weight** — 6 g vs 16 g  
7. **Testing and transparency** — both `unknown` unless verified in 14C  
8. **Price per serving** — dated 2026-07-15 manual prices  
9. **Neutral label-profile notes** — who might prefer which **label attributes** (not medical groups)  
10. **Safety / consult professional** — high sodium, blood pressure, kidney disease caveats (NIH citations)  
11. **FAQ** — per blueprint §J in [`lmnt-vs-liquid-iv-guide-blueprint-2026-07-07.md`](./lmnt-vs-liquid-iv-guide-blueprint-2026-07-07.md)  
12. **Related reading** — product reviews (when published), category hub (future)

---

## I. Publication dependency

**Do not publish** `/guides/lmnt-vs-liquid-iv` until:

- [ ] `content/products/electrolytes/lmnt-*.yaml` locked with official label citations  
- [ ] `content/products/electrolytes/liquid-iv-*.yaml` locked with official label citations  
- [ ] Dated prices and `pricePerServing` calculated in product YAML  
- [ ] Claim-risk review per [`electrolytes-claim-language-guide.md`](./electrolytes-claim-language-guide.md)  
- [ ] Both products remain `draft` / `noindex` until separate publication approval  
- [ ] Guide remains `draft` / `noindex` until explicit cluster publication sign-off  

**Phase 14B explicit non-actions:**

- No guide YAML created  
- No product YAML created  
- No Amazon affiliate mapping  

---

*Source notes only. LMNT vs Liquid I.V. guide YAML is Phase 14C+ after product fact lock.*
