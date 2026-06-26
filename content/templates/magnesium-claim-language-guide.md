# Magnesium Claim Language Guide

Editorial reference for Magnesium guides, ingredient pages, category hub, product reviews, and comparisons.

**Phase:** 4A (planning) — apply during 4C content drafts and all later Magnesium phases.  
**Positioning:** SuppCheckr is an evidence-aware supplement comparison site, not a medical authority.

See also: [`magnesium-product-research-checklist.md`](./magnesium-product-research-checklist.md), NIH ODS Magnesium fact sheets (cite in YAML — do not treat this doc as a medical source).

---

## Core principles

1. **Label-first:** Product copy describes what the Supplement Facts and official brand materials show.
2. **Separate fact types:** Label facts, brand claims, verified testing, retail prices, and general safety background must not be conflated.
3. **No personal medical outcomes:** Scores and copy reflect label transparency and sourcing — not whether a product will work for a reader.
4. **Conservative by default:** When in doubt, soften language and add a consult-a-professional caveat.

---

## Avoid (unsafe or non-compliant phrasing)

Do **not** use these patterns in SuppCheckr Magnesium content:

| Category | Examples to avoid |
|----------|-------------------|
| Disease / condition treatment | "treats anxiety," "cures insomnia," "prevents migraines," "lowers blood pressure," "treats constipation," "helps kidney disease" |
| Universal safety | "safe for everyone," "no side effects," "side-effect free" |
| Endorsements | "doctor recommended," "physician approved" — unless quoting a **primary, sourced** statement with full context (generally avoid) |
| Overstated evidence | "clinically proven," "scientifically proven" — unless extremely qualified, sourced, and not implying personal outcomes |
| Regulatory misstatements | "FDA-approved supplement," "FDA certified" |
| Ranking overreach | "Best Overall," "Best for Everyone," "#1 for sleep," "top choice for anxiety" |
| Absorption absolutes | "fully absorbed," "100% bioavailable," "only form that works" |
| Laxative/medical GI | "fixes constipation," "natural laxative cure," "detox cleanse" |
| Cognitive outcomes (threonate) | "improves memory," "boosts brain function," "prevents cognitive decline" |

---

## Prefer (safe editorial phrasing)

| Use case | Preferred phrasing |
|----------|-------------------|
| Common use (non-medical) | "commonly used for," "often chosen by people who…," "marketed for" |
| Research context | "studied for," "research has examined," "according to NIH Office of Dietary Supplements materials" |
| Soft support language | "may support" (general wellness only — not disease support) |
| Label grounding | "based on the product label," "the Supplement Facts panel lists," "according to publicly available information" |
| Individual variation | "individual responses vary," "tolerance differs" |
| Professional referral | "consult a qualified healthcare professional" |
| Sensitive populations | "especially if pregnant, nursing, under 18, taking medications, managing kidney disease, or managing a medical condition" |
| Price/value | "dated manual price," "price per 100 mg elemental magnesium," "check current price at the retailer" |
| Testing | "verified third-party testing (NSF listing cited)" vs "brand states testing without public certificate" |
| Scoring | "SuppCheckr score reflects label and sourcing quality — not personal medical suitability" |

---

## Standard safety block (use on guides, category hub, product reviews)

Include a variant of this on every Magnesium page:

> Dietary supplements are not FDA-approved to diagnose, treat, cure, or prevent disease. This page summarizes publicly available label and reference information — not medical advice. Consult a qualified healthcare professional before starting or changing supplements, especially if pregnant, nursing, under 18, taking medications, managing kidney disease, or managing a medical condition.

---

## Form-specific cautions

### Glycinate / bisglycinate

**Common market positioning:** "Gentle," chelated, evening/sleep-adjacent wellness.

| Do | Don't |
|----|-------|
| Name the form as listed on the label (glycinate, bisglycinate, bis-glycinate chelate) | "Best for sleep" or "calms anxiety" |
| State elemental mg per serving from Supplement Facts | Treat "high absorption" marketing as verified fact |
| Note compound vs elemental naming when label shows both | "No digestive issues" as a guarantee |
| Mention chelate/trademark ingredient names as label facts (e.g. Albion) | Imply glycinate is medically appropriate for any condition |

### Citrate

**Common market positioning:** General magnesium; sometimes regularity/GI-associated marketing.

| Do | Don't |
|----|-------|
| Identify citrate form and elemental mg | "Treats constipation" or "natural laxative" |
| Note that some people report loose stools at higher magnesium intakes (NIH/ODS context, cited) | Recommend doses for bowel symptoms |
| Prefer neutral "commonly used as a general magnesium form" | "Detox" or "cleanse" language |

### Malate

**Common market positioning:** Energy, fatigue, exercise recovery adjacency.

| Do | Don't |
|----|-------|
| Identify malate form; state elemental mg | "Treats chronic fatigue" or "fixes fibromyalgia" |
| Note malic acid is paired with magnesium on the label | "Boosts energy" as a medical or guaranteed outcome |

### Oxide

**Common market positioning:** Budget option; high mg per tablet.

| Do | Don't |
|----|-------|
| Frame value using **elemental mg** and dated price per 100 mg elemental | "Useless because poorly absorbed" (absolute dismissal) |
| Note oxide is a common form on many store-brand labels | "Best value for everyone" without GI caveats |
| Mention some people report GI upset (general, cited context) | Antacid/over-the-counter crossover claims |

### L-threonate (conditional V1 slot only)

**Common market positioning:** Cognitive health, memory, "brain magnesium," sleep stacks.

| Do | Don't |
|----|-------|
| Identify as magnesium L-threonate / Magtein if on label | "Improves memory," "prevents dementia," "crosses blood-brain barrier" as product benefit |
| State elemental mg; note higher cost per mg elemental is common | "Clinically proven cognitive enhancement" |
| "Research has examined this form in published studies" — with citations, no personal outcome promise | Repeat brand brain-health claims as SuppCheckr endorsements |
| If slot fails conditional gate, **do not** publish threonate product review | Force threonate into V1 comparison as a "brain winner" |

**Gate reminder:** Threonate product YAML is allowed only if single-ingredient, label-clear, and reviewable without cognitive benefit claims. Otherwise use fallback glycinate/citrate/malate/mixed-form product.

### Chloride

**Common market positioning:** Topical oils/flakes, electrolytes, "muscle cramp" marketing.

| Do | Don't |
|----|-------|
| Cover in types-of-magnesium guide; distinguish oral vs topical contexts | Equate topical absorption to oral supplementation outcomes |
| Label facts for oral chloride products if ever reviewed later | "Cures muscle cramps" |

**V1 product reviews:** Defer chloride — guide mention only.

### Taurate

**Common market positioning:** Heart health, blood pressure, cardiovascular wellness.

| Do | Don't |
|----|-------|
| Name form in types guide with strong research-context framing | "Lowers blood pressure," "supports heart disease," "prevents arrhythmia" |
| Cite general ODS interaction/safety context where relevant | Cardiovascular outcome promises |

**V1 product reviews:** Defer taurate — cardiovascular claim risk too high for launch slot.

### Mixed-form products

**Common market positioning:** "Full spectrum," "best of all forms," convenience blends.

| Do | Don't |
|----|-------|
| List disclosed forms and total elemental mg | "Superior absorption because multi-form" |
| Score/ describe label transparency; penalize vague blends editorially | Imply combined forms treat multiple conditions |
| Require per-form mg or clear total elemental disclosure for V1 inclusion | Award high scores to proprietary "magnesium complex" without breakdown |

---

## Claim type → language mapping (YAML editorial)

When drafting claims in product/guide YAML:

| claimType | Safe content examples |
|-----------|-------------------------|
| `label_fact` | "Supplement Facts list 200 mg elemental magnesium as magnesium bisglycinate chelate per serving." |
| `price_fact` | "Manual price observed $X on [date]; price per 100 mg elemental magnesium ≈ $Y." |
| `brand_claim` | "The brand product page states [claim] — not independently verified by SuppCheckr." |
| `health_context` | "According to NIH ODS materials, magnesium is involved in [process] — cite required." |
| `safety_context` | "NIH ODS notes that very high doses of magnesium from supplements may cause diarrhea; people with kidney disease should consult a clinician — cite required." |
| `editorial_opinion` | "Among the five V1 products, this label clearly states elemental mg — editorial assessment." |

Never assign `health_context` or `safety_context` without authoritative citations (NIH, PubMed, FDA, consensus_body).

---

## Comparison table & category hub language

| Avoid | Prefer |
|-------|--------|
| "Best for sleep" column or badge | "Form: glycinate" (label fact) |
| Sorting implied as medical ranking | "Sorted by SuppCheckr score (methodology)" |
| "Winner" or "Best Overall" | "Featured products" / "Comparison table" |
| Condition-based filters | Format, form, testing status filters only |

**V1 scope:** No disease-use SEO pages (e.g. `/guides/magnesium-for-sleep`, `/guides/magnesium-for-anxiety`).

---

## Threonate fallback language (if slot 4 uses fallback product)

If L-threonate fails the conditional gate, guides may still mention threonate educationally in `types-of-magnesium` without a product review. Use:

> SuppCheckr's V1 product comparison does not include a magnesium L-threonate SKU because no candidate met our label-clarity and claim-conservatism gates at shortlist time. See our types-of-magnesium guide for general form context.

---

## Quick review checklist (before draft sign-off)

- [ ] No disease-treatment verbs (treat, cure, prevent, lower BP)
- [ ] No "Best Overall" / "Best for Everyone"
- [ ] Elemental mg referenced where dose is discussed
- [ ] Brand marketing claims labeled as brand claims, not facts
- [ ] Testing status matches evidence tier (`verified` vs `claimed`)
- [ ] Consult-professional block present
- [ ] Threonate product (if any) has zero cognitive benefit endorsements
- [ ] No Amazon reviews cited as evidence
