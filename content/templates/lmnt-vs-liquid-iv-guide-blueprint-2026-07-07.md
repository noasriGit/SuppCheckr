# LMNT vs Liquid IV — Guide Blueprint

**Date:** 2026-07-07  
**Phase:** 14A planning only — **not guide YAML**  
**Status:** Blueprint for future `/guides/lmnt-vs-liquid-iv`  
**Dependency:** Do not publish until LMNT and Liquid IV product facts are locked in product YAML (Phase 14B+)

See also: [`phase-14a-electrolytes-category-blueprint-2026-07-07.md`](./phase-14a-electrolytes-category-blueprint-2026-07-07.md), [`electrolytes-claim-language-guide.md`](./electrolytes-claim-language-guide.md), [`electrolytes-source-inventory-2026-07-07.md`](./electrolytes-source-inventory-2026-07-07.md).

---

## A. Target keyword

| Keyword | Phase 8A data | Priority |
|---------|---------------|----------|
| **lmnt vs liquid iv** | KD 0 · vol 2,600 · TP 1,100 | Tier 1 — immediate opportunity |

**Secondary mentions (not primary H1):** `lmnt vs liquid iv reddit`, `lmnt or liquid iv`, `difference between lmnt and liquid iv`

---

## B. Search intent

Users comparing two popular electrolyte drink mixes likely want:

1. **Sodium per serving** — LMNT is typically much higher sodium than Liquid IV
2. **Sugar / carbs / calories** — LMNT typically zero sugar; Liquid IV typically contains sugar (e.g., dextrose/cane sugar)
3. **Potassium and magnesium** — per-serving amounts on each label
4. **Sweeteners** — stevia (LMNT) vs none or other (Liquid IV varies by SKU)
5. **Serving format** — both stick packs; verify locked flavor/count SKU
6. **Flavor variety** — editorial context only; no taste endorsements
7. **Price per serving** — dated manual price from non-Amazon sources
8. **Use-case framing** — label preferences, not medical suitability
9. **Testing / transparency** — NSF or other verified testing if applicable

**Intent we do not serve:** medical rehydration advice, hangover cure, workout performance guarantees, pregnancy/kids suitability, illness recovery.

---

## C. Proposed URL

```
/guides/lmnt-vs-liquid-iv
```

**Slug:** `lmnt-vs-liquid-iv`  
**Cluster:** Electrolytes (future)  
**Publication gate:** Both product review YAML files locked with official label citations

---

## D. Conservative title options

1. LMNT vs Liquid IV: Electrolyte Label Comparison | SuppCheckr
2. LMNT vs Liquid IV — Sodium, Sugar, and Price per Serving | SuppCheckr
3. LMNT vs Liquid IV: What's Different on the Labels? | SuppCheckr

**Avoid:** "Which Is Better for Hydration?", "Best Electrolyte for Workouts", "LMNT vs Liquid IV: Which Should You Buy?"

---

## E. H1 options

1. LMNT vs Liquid IV: Label Comparison
2. LMNT vs Liquid IV — Sodium, Sugar, and Ingredients Compared
3. Comparing LMNT and Liquid IV Labels

**Avoid:** "LMNT vs Liquid IV: Which Is Better?", "Winner: LMNT or Liquid IV?"

---

## F. Comparison criteria

| Criterion | LMNT (expected label direction) | Liquid IV (expected label direction) | Source requirement |
|-----------|--------------------------------|--------------------------------------|-------------------|
| **Sodium per serving** | High (often ~1,000 mg range — verify locked SKU) | Lower (verify locked SKU) | Official Nutrition Facts per product |
| **Potassium per serving** | Disclosed mg | Disclosed mg | Official label |
| **Magnesium per serving** | Disclosed mg | Disclosed mg | Official label |
| **Sugar / carbs / calories** | Typically 0 g sugar | Typically contains sugar | Official label |
| **Sweeteners** | Stevia (typical — verify) | Sugar primary; check flavor SKU | Official label |
| **Serving format** | Stick pack | Stick pack | Product page |
| **Flavor / variety** | Count flavors for context | Count flavors for context | Brand pages — no taste claims |
| **Testing / transparency** | Verify NSF or other | Verify any claimed testing | Program database or COA |
| **Price per serving** | Dated manual price | Dated manual price | Brand or retailer — not Amazon live price |
| **Claim risk** | Keto/fasting marketing | Hydration multiplier / hangover adjacency | Brand pages — mirror as `brand_claim` only |

**Comparison table columns (draft):**

- Sodium (mg)
- Potassium (mg)
- Magnesium (mg)
- Sugar (g)
- Calories
- Sweeteners
- Price per serving (dated)
- SuppCheckr score (when products published)

---

## G. Claims to avoid

| Disallowed | Why |
|------------|-----|
| Hangover cure | FTC/FDA risk; site policy |
| Dehydration treatment | Medical scope |
| Cramp prevention | Unsupported outcome claim |
| Performance guarantee | Unsupported outcome claim |
| Medical-condition suitability | YMYL |
| Best for everyone | Ranking policy |
| "LMNT is better for athletes" | Demographic medical claim |
| "Liquid IV hydrates 2× faster" (as SuppCheckr fact) | Brand claim — cite as `brand_claim` only if mirrored |
| Amazon review quotes | Policy violation |

---

## H. Neutral framing

| Use | Avoid |
|-----|-------|
| "Label comparison" | "Medically better" |
| "Which formula is easier to compare on sodium and sugar?" | "Which cures dehydration?" |
| "Which better fits your label preferences?" | "Which should everyone buy?" |
| "LMNT lists X mg sodium per serving; Liquid IV lists Y mg" | "LMNT is superior hydration" |
| "Different sugar profiles may matter for different shoppers" | "Sugar-free is always healthier" |
| "SuppCheckr scores reflect label transparency — not personal outcomes" | "Winner" / "Best Overall" |

**Recommended intro pattern:**

> LMNT and Liquid IV are two widely compared electrolyte drink mixes. This guide compares **publicly available label information** — sodium, potassium, magnesium, sugar, sweeteners, serving format, and dated price per serving — not medical hydration outcomes.

---

## I. Source requirements

| Requirement | Detail |
|-------------|--------|
| Official LMNT label | Brand product page Nutrition Facts for locked SKU (flavor + count) |
| Official Liquid IV label | Brand product page Nutrition Facts for locked SKU |
| Non-Amazon price source | Brand site or retailer listing; `lastPriceCheckedAt` required |
| NIH sodium/potassium context | `nih-sodium-hp`, `nih-potassium-hp` for safety sidebar only |
| FDA supplements overview | Standard safety block |
| **No** Amazon reviews/Q&A/ratings/images/live prices | Policy |
| **No** influencer comparison videos as evidence | Research notes only |

**Citation IDs (future):**

- `label-lmnt-{sku-slug}`
- `label-liquid-iv-{sku-slug}`
- `retailer-lmnt-{sku-slug}`
- `retailer-liquid-iv-{sku-slug}`
- `editorial-price-per-serving-lmnt-{sku-slug}`
- `editorial-price-per-serving-liquid-iv-{sku-slug}`

---

## J. Draft FAQ ideas

| Question | Answer direction |
|----------|------------------|
| Which has more sodium? | Label fact comparison — cite official Nutrition Facts |
| Which has more sugar? | Label fact — typically Liquid IV higher; verify locked SKUs |
| Are they both sugar-free? | Label fact — typically LMNT yes, Liquid IV no; verify SKUs |
| Is one better for workouts? | Decline outcome framing — compare sodium/sugar per serving; individual needs vary; consult professional if medical concerns |
| Can people with high blood pressure use high-sodium electrolyte powders? | Safety context — refer to clinician; no product recommendation |
| Are electrolyte powders medical treatment? | No — supplements/drink mixes are not dehydration treatment; standard safety block |
| Which is cheaper per serving? | Dated price fact — manual calculation |
| Do they have the same potassium and magnesium? | Label fact comparison |
| Is LMNT keto-friendly? | Brand positioning as `brand_claim` if mirrored — not medical keto advice |

---

## K. Product review dependency

| Dependency | Status in Phase 14A |
|------------|---------------------|
| LMNT product YAML with locked SKU | **Not created** — Phase 14B |
| Liquid IV product YAML with locked SKU | **Not created** — Phase 14B |
| Official label citations in product YAML | **Required before guide publish** |
| SuppCheckr scores for both products | **Required before guide references scores** |
| Amazon affiliate CTAs | **Phase 14C** — not Phase 14A |

**Publication rule:** This guide must remain `draft` / `noindex: true` until:

1. Both product reviews are complete with verified label sources
2. Prices are dated and price-per-serving calculated
3. Claim-risk review passes per [`electrolytes-claim-language-guide.md`](./electrolytes-claim-language-guide.md)
4. Internal link targets (category hub, comparison, ingredient) exist or are stubbed safely

---

## L. Outline sketch (for Phase 14B drafting)

1. **Intro** — label comparison purpose; not medical advice
2. **Quick comparison table** — sodium, sugar, price per serving
3. **Sodium and electrolyte amounts** — per-serving label facts
4. **Sugar, calories, and sweeteners**
5. **Serving format and practicality**
6. **Testing and transparency**
7. **Price per serving** — dated manual prices
8. **Who might prefer which label profile** — neutral shopping framing, not medical
9. **Safety and professional consultation** — high sodium, kidney disease, blood pressure
10. **FAQ**
11. **Related reading** — category hub, how-to-choose guide, product reviews

---

*Blueprint only. No guide YAML created in Phase 14A.*
