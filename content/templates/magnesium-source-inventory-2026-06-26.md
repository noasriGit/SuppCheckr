# Magnesium Source Inventory — Phase 4B

**Date:** 2026-06-26  
**Phase:** 4B (source collection & validation/schema review)  
**Status:** Research planning document — not published content  
**Purpose:** Pin authoritative references and document source rules before Magnesium guide drafting (4C) and product YAML (4D).

See also: [`magnesium-product-research-checklist.md`](./magnesium-product-research-checklist.md), [`magnesium-claim-language-guide.md`](./magnesium-claim-language-guide.md), [`magnesium-phase-4b-notes.md`](./magnesium-phase-4b-notes.md), [`citation-id-conventions.md`](./citation-id-conventions.md).

---

## Phase 4A rules confirmed (4B review)

| Rule | Status | Source |
|------|--------|--------|
| **Elemental magnesium required** for shortlist and publish | Confirmed | Product checklist §Label & form verification #2–3; Phase 4B notes price normalization |
| **Price per 100 mg elemental magnesium** (never compound weight) | Confirmed | Checklist §Sources & pricing #14; maps to `pricing.pricePerActiveDose` |
| **L-threonate conditional only** (slot 4 gate; fallback if fail) | Confirmed | Checklist slot 4 gate; claim language guide §L-threonate |
| **No disease-use SEO pages in V1** | Confirmed | Claim language guide §Comparison table; Phase 4B notes V1 scope |
| **No Amazon reviews as evidence** | Confirmed | Checklist §Testing #17, §Claim-risk #27; citation conventions |
| **Verified vs claimed testing** | Confirmed | `verified` / `claimed` / `unknown` / `not_claimed` — verified only with program listing, COA, or certification body entry |

---

## A. General magnesium safety / intake sources

### `nih-magnesium-hp` (required)

| Field | Value |
|-------|-------|
| **Citation ID** | `nih-magnesium-hp` |
| **URL** | https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/ |
| **Source type** | `NIH` |
| **Access date** | 2026-06-26 |
| **Publisher** | NIH Office of Dietary Supplements |

**Can support (`health_context`, `safety_context`):**

- RDA/AI/UL tables for magnesium by age, sex, pregnancy, lactation
- Food and supplement sources of magnesium; typical absorption ranges
- Magnesium deficiency signs (general, not diagnostic)
- Supplemental magnesium UL (350 mg/day adults from supplements/medications)
- GI effects of high supplemental doses (diarrhea, nausea, cramping); forms commonly associated (carbonate, chloride, gluconate, oxide)
- Kidney disease / impaired renal function and hypermagnesemia risk
- Drug–nutrient interactions (bisphosphonates, antibiotics, diuretics, PPIs)
- Population groups at risk of low intake
- General background on magnesium roles (enzyme cofactor, bone, nerve/muscle) — cite conservatively, no outcome promises
- Form names available in supplements (citrate, glycinate, oxide, etc.) as **general reference**, not product-specific absorption claims

**Cannot support:**

- Product-specific label facts, doses, or form claims
- Disease treatment or prevention claims for any magnesium product
- “Best form for sleep/anxiety/BP/migraine” product rankings
- Verifying brand marketing (“high absorption,” “brain magnesium”)
- Third-party testing verification
- Retail prices or value comparisons
- Replacing clinician advice for kidney disease, medications, or symptom treatment

**Notes for safe use:**

- Prefer HP sheet for UL, interactions, and kidney-related safety copy on guides and ingredient hub
- Pair with consult-a-professional block on all Magnesium pages
- Do not quote migraine/BP/diabetes sections as product benefits — use only as general “research has examined” context with citation, no personal outcome language
- Updated March 2021 on ODS — recheck access date before publish

---

### `nih-magnesium-consumer` (recommended)

| Field | Value |
|-------|-------|
| **Citation ID** | `nih-magnesium-consumer` |
| **URL** | https://ods.od.nih.gov/factsheets/Magnesium-Consumer/ |
| **Source type** | `NIH` |
| **Access date** | 2026-06-26 |
| **Publisher** | NIH Office of Dietary Supplements |

**Can support:**

- Plain-language magnesium overview for buyer guides and category intro
- Consumer RDA table (mg/day by life stage)
- Food sources list
- Supplement forms “more easily absorbed” (aspartate, citrate, lactate, chloride) — **general ODS statement only**, not per-product absorption claims
- Low-intake prevalence (general population context)
- Supplement UL table and diarrhea/nausea warning at high supplemental intakes
- Brief “what research shows” sections (BP, diabetes, osteoporosis, migraine) — **must be framed as population research, not product recommendations**
- Medication interaction overview (consumer wording)
- ODS disclaimer language pattern (not medical advice)

**Cannot support:**

- Product label facts or elemental mg verification
- L-threonate-specific cognitive claims (not covered as a distinct product form here)
- Disease treatment, dosing for constipation, sleep, or anxiety
- Endorsement of specific brands or retailers
- Testing verification

**Notes for safe use:**

- Useful for `what-is-magnesium` and `magnesium-dosage-guide` consumer tone
- HP sheet is preferred when citing UL, kidney risk, or interaction detail
- Avoid copying consumer “effects on health” bullets into product pros/cons as if SuppCheckr endorses outcomes

---

## B. Regulatory / compliance sources

### `fda-dietary-supplements-overview` (required)

| Field | Value |
|-------|-------|
| **Citation ID** | `fda-dietary-supplements-overview` |
| **URL** | https://www.fda.gov/food/dietary-supplements |
| **Source type** | `FDA` |
| **Access date** | 2026-06-26 |
| **Publisher** | U.S. Food and Drug Administration |

**Same citation ID and URL as Creatine cluster** (see `content/guides/what-is-creatine.yaml`, `content/ingredients/creatine-monohydrate.yaml`).

**Can support:**

- Dietary supplements are not FDA-approved to diagnose, treat, cure, or prevent disease
- General regulatory framing for safety blocks and “what supplements are not” sections
- Structure/function vs disease claim boundaries (overview level)
- Adverse event reporting context (general)

**Cannot support:**

- Product efficacy, safety for an individual, or label accuracy verification
- FDA endorsement of any product
- Specific magnesium dosing or form recommendations
- Substitute for NIH clinical/nutrient detail

**Notes for safe use:**

- Reuse existing Creatine cluster citation entry pattern
- Use in standard safety block on every Magnesium entity type
- Do not imply FDA evaluates or approves SuppCheckr scores or product picks

---

### `ftc-endorsement-guides` (required)

| Field | Value |
|-------|-------|
| **Citation ID** | `ftc-endorsement-guides` |
| **URL** | https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking |
| **Source type** | `FTC` |
| **Access date** | 2026-06-26 |
| **Publisher** | Federal Trade Commission |

**Alternate canonical references (if URL structure changes):** 16 CFR Part 255 Endorsement Guides; FTC “Endorsements” business guidance hub at https://www.ftc.gov/business-guidance/resources/endorsements.

**Can support:**

- Endorsement and testimonial advertising boundaries
- Material connection disclosure expectations (future affiliate enablement)
- “Expert” and “doctor recommended” claim caution
- Editorial independence / affiliate disclosure copy on guides and affiliate-disclosure page updates
- `affiliate_or_monetization_claim` claim type citations

**Cannot support:**

- Health or safety content about magnesium itself
- Product label verification
- Structure/function claim substantiation (FDA primary for supplement claims)

**Notes for safe use:**

- Cite when drafting monetization-related claims even while `affiliate.enabled: false`
- Not yet embedded in published Creatine YAML — pin here for Magnesium cluster and future legal refresh
- Pair with internal editorial policy for SuppCheckr ranking independence statements

---

## C. Product-label source rules

Future Magnesium product YAML (Phase 4D+) must follow these rules. **No product YAML in Phase 4B.**

| Rule | Requirement |
|------|-------------|
| **Primary label source** | Official brand Supplement Facts (product page image, PDF, or label gallery) when available |
| **Secondary context** | Official brand product page for marketing claims (tag as `brand_claim`, not `label_fact`) |
| **Retailer listing** | Use **only** for dated manual price and availability — `retailer_listing` / `price_fact` |
| **Elemental magnesium** | Must appear on Supplement Facts (e.g. “Magnesium 200 mg” or “Magnesium … 200 mg”) — **no inferring** from compound weight |
| **Compound weight alone** | **Reject** — e.g. “2,000 mg magnesium bisglycinate” with no elemental line fails shortlist |
| **Amazon reviews / Q&A** | **Never** evidence for label facts, testing, health claims, or scoring |
| **Citation ID pattern** | `label-{product-slug}`, `retailer-{product-slug}`, `brand-{product-slug}-page` per [`citation-id-conventions.md`](./citation-id-conventions.md) |
| **Price calculation source** | `editorial-price-per-100mg-elemental-{slug}` (`internal_editorial`) documenting: `price ÷ (elemental mg per serving × servings per container) × 100` |
| **Affiliate** | `affiliate.enabled: false` until Amazon Associates approved and intentionally enabled |

**Label fact claim example (drafting phase):**

> Supplement Facts list 200 mg magnesium (elemental) as magnesium bisglycinate chelate per serving.

**Price fact claim example:**

> Manual price observed $X on [date]; price per 100 mg elemental magnesium ≈ $Y (editorial calculation).

---

## D. Third-party testing source rules

Align with existing product schema: `thirdPartyTesting.status` ∈ `verified` | `claimed` | `unknown` | `not_claimed`.

| Status | When to assign | Evidence required |
|--------|----------------|-------------------|
| **`verified`** | Official third-party program listing, current certificate/COA matched to SKU, or certification body database entry | Citation `testing-{slug}` or `cert-{slug}-{program}` with `sourceType` `third_party_testing` or `certification_body` |
| **`claimed`** | Brand states “third-party tested” / “lab tested” without public verifiable evidence | Brand page may be cited as `brand_claim` only — not verification |
| **`unknown`** | No testing mention on label or brand materials | Default for many budget SKUs |
| **`not_claimed`** | Brand explicitly states no third-party testing | Rare; document source if used |

**Hard rules:**

- Brand marketing (“third-party tested” logo) → **`claimed`** unless verification gate passes
- **Do not** use Amazon reviews, retailer Q&A, or influencer posts as testing evidence
- Ingredient branding (Albion TRAACS, Magtein) is **not** third-party testing
- NSF, USP Verified, Informed Sport, etc. require link to **program listing or certificate**, not retailer copy alone
- Published products: testing statements in copy must match assigned status tier

**Schema fields (existing, no change needed):**

```yaml
thirdPartyTesting:
  status: verified | claimed | unknown | not_claimed
  details: ""
  sources: []  # citation IDs when verified
```

---

## E. Form-specific source needs

V1 product slots: glycinate, citrate, malate/mixed, conditional threonate, oxide. Chloride and taurate — **guide only**.

### Glycinate / bisglycinate

| Item | Guidance |
|------|----------|
| **V1 eligible** | Yes — slot 1 |
| **Label facts required** | Form name (glycinate, bisglycinate, bis-glycinate chelate); **elemental mg**; serving size; servings per container |
| **Source types before writing** | `brand_label` (Supplement Facts); `retailer_listing` (price); NIH HP/consumer for general safety only |
| **Claims to avoid** | “Best for sleep,” “calms anxiety,” “no GI issues,” absorption superiority as verified fact |
| **Editorial caveats** | Compound vs elemental naming; chelate/trademark names (Albion) as label facts; sleep/calm marketing on brand page — do not mirror |

### Citrate

| Item | Guidance |
|------|----------|
| **V1 eligible** | Yes — slot 2 |
| **Label facts required** | Magnesium citrate form; elemental mg; format (capsule/tablet preferred over drink mixes) |
| **Source types before writing** | `brand_label`; `retailer_listing`; NIH for GI/diarrhea at high supplemental intakes |
| **Claims to avoid** | “Treats constipation,” “natural laxative,” detox/cleanse language |
| **Editorial caveats** | Regularity-adjacent brand copy — neutral framing only |

### Malate

| Item | Guidance |
|------|----------|
| **V1 eligible** | Yes — slot 3 (single-form malate preferred) |
| **Label facts required** | Magnesium malate; elemental mg; malic acid pairing noted on label if shown |
| **Source types before writing** | `brand_label`; `retailer_listing`; NIH general background |
| **Claims to avoid** | “Treats chronic fatigue,” “fixes fibromyalgia,” guaranteed energy outcomes |
| **Editorial caveats** | Energy/fatigue marketing — describe as brand positioning, not SuppCheckr endorsement |

### Oxide

| Item | Guidance |
|------|----------|
| **V1 eligible** | Yes — slot 5 (budget anchor) |
| **Label facts required** | Magnesium oxide; elemental mg (often high per tablet); serving math |
| **Source types before writing** | `brand_label`; `retailer_listing`; NIH HP for oxide GI effects and general absorption context (no absolutes) |
| **Claims to avoid** | “Useless/poorly absorbed” (absolute dismissal), “best value for everyone” without GI caveats |
| **Editorial caveats** | Value framing via **price per 100 mg elemental**; GI tolerance varies |

### L-threonate (conditional)

| Item | Guidance |
|------|----------|
| **V1 eligible** | **Conditional only** — slot 4; all checklist gate items must pass |
| **Label facts required** | Single-ingredient magnesium L-threonate / Magtein; elemental mg on Supplement Facts |
| **Source types before writing** | `brand_label`; `retailer_listing`; PubMed/NIH only for **general research context** — no cognitive outcome promises |
| **Claims to avoid** | Memory improvement, dementia prevention, BBB crossing as product benefit, “clinically proven” cognitive enhancement |
| **Editorial caveats** | High price per mg elemental; cognitive/brain marketing on brand page must not be repeated as SuppCheckr benefits |
| **Fallback** | Second clean glycinate, citrate, malate, or transparent mixed-form from different brand |

### Chloride

| Item | Guidance |
|------|----------|
| **V1 eligible** | **No** — guide mention only (types-of-magnesium) |
| **Label facts required** | If reviewed later: oral vs topical distinction; form and elemental mg |
| **Source types before writing** | NIH HP (GI/laxative context for magnesium salts); brand_label if product ever added |
| **Claims to avoid** | “Cures muscle cramps,” equating topical absorption to oral supplementation outcomes |

### Taurate

| Item | Guidance |
|------|----------|
| **V1 eligible** | **No** — guide mention only (cardiovascular claim risk) |
| **Label facts required** | N/A for V1 products |
| **Source types before writing** | NIH interactions/safety; types guide prose only |
| **Claims to avoid** | Lowers blood pressure, heart disease support, arrhythmia prevention |

### Mixed-form products

| Item | Guidance |
|------|----------|
| **V1 eligible** | Yes — slot 3 fallback if transparent (each form named + total elemental mg clear) |
| **Label facts required** | Per-form breakdown **or** clear total elemental mg; no proprietary blend hiding amounts |
| **Source types before writing** | `brand_label` (must disclose forms); `retailer_listing` |
| **Claims to avoid** | “Full spectrum superiority,” multi-condition treatment, absorption stack claims |
| **Editorial caveats** | Penalize vague “magnesium complex” in scoring notes; require label transparency for shortlist |

---

## Product archetypes for future research (not approved shortlist)

Phase 4D longlist should screen ~15–20 candidates mapped to V1 buckets. **No final products selected in 4B.**

| Slot | Archetype | Example research angles (candidates TBD) |
|------|-----------|------------------------------------------|
| 1 | Single-form glycinate/bisglycinate capsule or powder | Major sport-nutrition and wellness brands with clear elemental mg |
| 2 | Magnesium citrate capsule/tablet | Store-brand and mid-tier labels; avoid flavored laxative-adjacent drink mixes |
| 3 | Magnesium malate **or** transparent multi-form with per-form mg | Malate-only preferred; “7-form” products only if label discloses elemental mg per form |
| 4 | Single-ingredient L-threonate **if gate passes** | Magtein-branded SKUs — pre-screen 2–3 against conditional gate before longlist investment |
| 5 | Budget magnesium oxide tablet | Store-brand high-elemental-mg oxide; strong GI/value editorial caveats |

**Threonate pre-screen (4B):** Gate criteria documented in checklist; **no SKU pass/fail logged yet** — defer to Phase 4D longlist with 2–3 named candidates for gate evaluation.

---

## Cross-reference: citation ID quick list

| ID | sourceType | Phase 4B verified |
|----|------------|-------------------|
| `nih-magnesium-hp` | NIH | Yes — 2026-06-26 |
| `nih-magnesium-consumer` | NIH | Yes — 2026-06-26 |
| `fda-dietary-supplements-overview` | FDA | Yes — URL matches Creatine cluster |
| `ftc-endorsement-guides` | FTC | Yes — pinned (not yet in published YAML) |

Per-product IDs (`label-*`, `retailer-*`, `testing-*`, `editorial-price-per-100mg-elemental-*`) — create during 4D product research only.

---

## Phase 4B explicit non-actions

- [x] No product YAML under `content/products/magnesium/`
- [x] No new brand YAML for Magnesium
- [x] No guide/ingredient/category/comparison drafts beyond existing placeholders
- [x] No schema or UI code changes in 4B
- [x] No Creatine content edits
- [x] No SITE_MODE, affiliate, ads, Amazon tags, legal indexability, or monetization changes
