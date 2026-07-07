# Vitamin C Claim Language Guide

Editorial reference for Vitamin C guides, ingredient pages, category hub, product reviews, and comparisons.

**Phase:** 8C (planning) — apply during future Vitamin C content drafts and all later phases.  
**Positioning:** SuppCheckr is an evidence-aware supplement comparison site, not a medical authority.

See also: [`vitamin-c-product-research-checklist.md`](./vitamin-c-product-research-checklist.md), [`vitamin-c-source-inventory-2026-07-07.md`](./vitamin-c-source-inventory-2026-07-07.md), NIH ODS Vitamin C fact sheets (cite in YAML — do not treat this doc as a medical source).

---

## Core principles

1. **Label-first:** Product copy describes what the Supplement Facts and official brand materials show.
2. **Separate fact types:** Label facts, brand claims, verified testing, retail prices, and general safety background must not be conflated.
3. **No personal medical outcomes:** Scores and copy reflect label transparency and sourcing — not whether a product will work for a reader.
4. **Conservative by default:** When in doubt, soften language and add a consult-a-professional caveat.
5. **Human supplements only:** No animal/pet/veterinary vitamin C content.

---

## Allowed / conservative language

| Use case | Preferred phrasing |
|----------|-------------------|
| General nutrient context | "Vitamin C is an essential nutrient" |
| Intake framing | "helps meet vitamin C intake needs," "contributes to daily vitamin C intake" |
| Immune wording (careful) | "supports normal immune function" — with NIH/FDA-appropriate context and citation; not disease prevention |
| Form diversity | "some products use ascorbic acid, buffered mineral ascorbates, or liposomal delivery systems" |
| Label variability | "labels vary by form, dose, serving size, and additives" |
| Research context | "studied for," "research has examined," "according to NIH Office of Dietary Supplements materials" |
| Label grounding | "based on the product label," "the Supplement Facts panel lists," "according to publicly available information" |
| Individual variation | "individual responses vary," "tolerance differs" |
| Professional referral | "ask a qualified healthcare professional if pregnant, nursing, under 18, prone to kidney stones, managing kidney disease, taking medication, or managing a medical condition" |
| Price/value | "dated manual price," "price per 500 mg vitamin C," "check current price at the retailer" |
| Testing | "verified third-party testing (NSF listing cited)" vs "brand states testing without public certificate" |
| Scoring | "SuppCheckr score reflects label and sourcing quality — not personal medical suitability" |

---

## Avoid / disallowed language

Do **not** use these patterns in SuppCheckr Vitamin C content:

| Category | Examples to avoid |
|----------|-------------------|
| Cold / flu / COVID | "prevents colds," "cures colds," "treats flu," "treats COVID," "stops viruses" |
| Cancer / disease treatment | "treats cancer," "fights tumors," "chemotherapy support" without clinician framing |
| Immunity overreach | "boosts immunity," "supercharges immune system," "immune booster" in disease-prevention sense |
| Deficiency treatment | "treats deficiency," "cures scurvy" without clinician involvement |
| Detox / cleanse | "detoxifies," "cleanses toxins," "alkalizes" |
| Universal safety | "safe for everyone," "no side effects," "side-effect free" |
| Megadosing | "megadosing is safe," "take as much as you want," "no upper limit concerns" |
| Demographic winners | "best for kids," "best for pregnancy," "best for women" as medical/demographic claims |
| Absorption absolutes | "guaranteed absorption," "100% bioavailable," "only form that works," "clinically proven absorption" |
| Regulatory misstatements | "FDA-approved supplement," "FDA certified" |
| Ranking overreach | "Best Overall," "Best for Everyone," "#1 for immunity," "top choice for colds" |
| Cosmetic/medical crossover | "whitens skin," "reverses aging," "cures acne" as product benefits |
| Animal/pet | dog, cat, horse, veterinary vitamin C dosing or products |

---

## Caution topics

Handle these with extra care — FAQ or safety sections only, not first-wave landing pages:

| Topic | Guidance |
|-------|----------|
| **High-dose vitamin C** | Cite NIH UL; note GI effects; no encouragement of unsupervised megadosing |
| **Kidney stones** | Cite NIH context for high supplemental intakes; recommend clinician consultation for stone history |
| **Kidney disease** | General safety referral; no dosing advice |
| **Iron overload / hemochromatosis** | Note vitamin C can enhance iron absorption — clinician context only |
| **Chemotherapy / cancer treatment** | Do not advise supplement use during treatment; refer to oncology team |
| **Pregnancy / breastfeeding** | RDA context with citation; no "best for pregnancy" product picks |
| **Children** | No pediatric product rankings; refer parents to pediatric clinicians |
| **Deficiency** | Describe general signs with citation; treatment requires professional diagnosis |
| **Cold / flu / COVID claims** | Reject in marketing mirror; NIH may note limited evidence — cite conservatively |
| **Skin / beauty claims** | Label facts only; no anti-aging or whitening endorsements |
| **"Immune boosting" wording** | Replace with "supports normal immune function" or omit |

---

## Standard safety block (use on guides, category hub, product reviews)

Include a variant of this on every Vitamin C page:

> Dietary supplements are not FDA-approved to diagnose, treat, cure, or prevent disease. This page summarizes publicly available label and reference information — not medical advice. Consult a qualified healthcare professional before starting or changing supplements, especially if pregnant, nursing, under 18, prone to kidney stones, managing kidney disease, taking medication, or managing a medical condition.

---

## Form-specific cautions

### Ascorbic acid

| Do | Don't |
|----|-------|
| Name ascorbic acid as listed on Supplement Facts | "Harsh on stomach for everyone" |
| State vitamin C mg per serving from label | "Most acidic and worst form" as absolute |
| Note GI tolerance varies (NIH context, cited) | Acid vs alkaline body framing |

### Sodium ascorbate / calcium ascorbate (buffered)

| Do | Don't |
|----|-------|
| Identify mineral ascorbate form on label | "Buffered means safe for everyone" |
| Document sodium or calcium per serving when disclosed | Hide mineral contribution |
| "Commonly marketed as gentler on the stomach" — brand positioning, not medical fact | "Treats stomach ulcers" or GI disease claims |

### Liposomal vitamin C

| Do | Don't |
|----|-------|
| Describe liposomal as a marketed delivery format | "Guaranteed superior absorption" |
| Score label clarity when proprietary liposomal blends obscure mg | Repeat brand absorption superiority as SuppCheckr fact |
| Note higher cost per mg is common | "Clinically proven" unless specific sourced trial — generally avoid |

### Powders, liquids, gummies

| Do | Don't |
|----|-------|
| Capture sweeteners, sugar, dyes, flavor systems | Ignore sugar content on gummies |
| Note serving practicality (scoops, volume, gummy count) | "Tastes best" or subjective taste endorsements |
| Compare vitamin C mg per serving, not total product weight | Equate fruit powder weight to vitamin C dose |

### Whole-food / natural vitamin C sources

| Do | Don't |
|----|-------|
| List acerola, camu camu, rose hips as label ingredients | "Natural means safer or more effective" |
| State disclosed vitamin C mg | Imply whole-food form replaces RDA context without mg clarity |

---

## Claim type → language mapping (YAML editorial)

When drafting claims in product/guide YAML:

| claimType | Safe content examples |
|-----------|----------------------|
| `label_fact` | "Supplement Facts list 1,000 mg vitamin C as ascorbic acid per serving." |
| `price_fact` | "Manual price observed $X on [date]; price per 500 mg vitamin C ≈ $Y." |
| `brand_claim` | "The brand product page states [claim] — not independently verified by SuppCheckr." |
| `health_context` | "According to NIH ODS materials, vitamin C is involved in [process] — cite required." |
| `safety_context` | "NIH ODS notes that supplemental vitamin C above the UL may cause diarrhea; people prone to kidney stones should consult a clinician — cite required." |
| `editorial_opinion` | "Among reviewed products, this label clearly states vitamin C mg per serving — editorial assessment." |

Never assign `health_context` or `safety_context` without authoritative citations (NIH, PubMed, FDA, consensus_body).

---

## Comparison table & category hub language

| Avoid | Prefer |
|-------|--------|
| "Best for immunity" column or badge | "Form: ascorbic acid" (label fact) |
| Sorting implied as medical ranking | "Sorted by SuppCheckr score (methodology)" |
| "Winner" or "Best Overall" | "Featured products" / "Comparison table" |
| Condition-based filters | Format, form, testing status filters only |

**Wave 1 scope:** No disease-use or demographic SEO pages (e.g. `/guides/vitamin-c-for-colds`, `/guides/best-vitamin-c-for-women`, `/guides/vitamin-c-for-pregnancy`).

---

## Quick review checklist (before draft sign-off)

- [ ] No disease-treatment verbs (treat, cure, prevent, boost immunity)
- [ ] No "Best Overall" / "Best for Everyone"
- [ ] Vitamin C mg per serving referenced where dose is discussed
- [ ] Brand marketing claims labeled as brand claims, not facts
- [ ] Testing status matches evidence tier (`verified` vs `claimed`)
- [ ] Consult-professional block present
- [ ] No cold/COVID/cancer/skin-whitening endorsements
- [ ] No Amazon reviews cited as evidence
- [ ] No animal/pet supplement framing
