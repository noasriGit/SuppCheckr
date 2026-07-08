# Electrolytes Source Inventory — Phase 14A

**Date:** 2026-07-07  
**Phase:** 14A (research & blueprint only)  
**Status:** Research planning document — not published content  
**Purpose:** Pin authoritative references and document source rules before Electrolytes guide drafting and product YAML (later phases).

See also: [`electrolytes-claim-language-guide.md`](./electrolytes-claim-language-guide.md), [`electrolytes-product-research-checklist.md`](./electrolytes-product-research-checklist.md), [`phase-14a-electrolytes-category-blueprint-2026-07-07.md`](./phase-14a-electrolytes-category-blueprint-2026-07-07.md), [`lmnt-vs-liquid-iv-guide-blueprint-2026-07-07.md`](./lmnt-vs-liquid-iv-guide-blueprint-2026-07-07.md), [`citation-id-conventions.md`](./citation-id-conventions.md).

---

## Phase 14A rules confirmed

| Rule | Status | Source |
|------|--------|--------|
| **Human supplements only** — reject pet/animal electrolyte products | Confirmed | Category blueprint §J |
| **No medical dehydration/rehydration treatment framing** | Confirmed | Claim language guide |
| **Sodium/potassium/magnesium/calcium per serving required** for future shortlist | Confirmed | Product checklist §Label verification |
| **Price per serving** (dated manual price) | Confirmed | Checklist §Sources & pricing |
| **No Amazon reviews as evidence** | Confirmed | Citation conventions |
| **Verified vs claimed testing** | Confirmed | `verified` / `claimed` / `unknown` / `not_claimed` |
| **No product YAML, guides, comparison, or publication in Phase 14A** | Confirmed | Phase 14A scope |
| **No Amazon ASIN mappings or affiliate links** | Confirmed | Phase 14A scope |

---

## A. Core authoritative sources

### `nih-sodium-hp` (recommended)

| Field | Value |
|-------|-------|
| **Citation ID** | `nih-sodium-hp` |
| **URL** | https://ods.od.nih.gov/factsheets/Sodium-HealthProfessional/ |
| **Source type** | `NIH` |
| **Access date** | 2026-07-07 |
| **Publisher** | NIH Office of Dietary Supplements |

**Can support (`health_context`, `safety_context`):**

- General roles of sodium in the body (fluid balance, nerve/muscle function) — cite conservatively
- Adequate Intake (AI) tables by age
- Food and dietary sodium sources
- Population context on sodium intake and health (general, not product recommendations)
- Upper limits / caution context for high sodium intakes
- Drug–nutrient interactions (e.g., diuretics) — clinician referral only

**Cannot support:**

- Product-specific sodium amounts as health advice
- Medical dehydration treatment or rehydration protocols
- "High-sodium electrolyte powders are safe for everyone"
- Ranking products for blood pressure, kidney disease, or heart disease outcomes

---

### `nih-potassium-hp` (recommended)

| Field | Value |
|-------|-------|
| **Citation ID** | `nih-potassium-hp` |
| **URL** | https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/ |
| **Source type** | `NIH` |
| **Access date** | 2026-07-07 |
| **Publisher** | NIH Office of Dietary Supplements |

**Can support:**

- General potassium roles (fluid balance, nerve transmission, muscle contraction)
- AI/RDA tables by life stage
- Food sources of potassium
- Population low-intake context
- Caution context for kidney disease and certain medications — clinician referral

**Cannot support:**

- Electrolyte product efficacy for cramps, performance, or illness recovery
- Deficiency or imbalance treatment without clinician involvement
- Product ranking for medical conditions

---

### `nih-magnesium-hp` / `nih-magnesium-consumer` (when magnesium in formula)

| Field | Value |
|-------|-------|
| **Citation IDs** | `nih-magnesium-hp`, `nih-magnesium-consumer` |
| **URLs** | https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/ · https://ods.od.nih.gov/factsheets/Magnesium-Consumer/ |
| **Source type** | `NIH` |
| **Access date** | 2026-07-07 |

**Can support:** Magnesium context when disclosed on electrolyte product labels (mg per serving). Reuse existing Magnesium cluster citations where appropriate.

**Cannot support:** Treating electrolyte powders as magnesium supplements for sleep, anxiety, or medical conditions.

---

### `nih-calcium-hp` (when calcium disclosed)

| Field | Value |
|-------|-------|
| **Citation ID** | `nih-calcium-hp` |
| **URL** | https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/ |
| **Source type** | `NIH` |
| **Access date** | 2026-07-07 |

**Can support:** Calcium mg per serving as label context when disclosed on Nutrition/Supplement Facts.

**Cannot support:** Bone-health outcome claims for electrolyte drink mixes.

---

### `fda-dietary-supplements-overview` (required)

| Field | Value |
|-------|-------|
| **Citation ID** | `fda-dietary-supplements-overview` |
| **URL** | https://www.fda.gov/food/dietary-supplements |
| **Source type** | `FDA` |
| **Access date** | 2026-07-07 |

**Same citation ID and URL as Creatine, Magnesium, and Vitamin C clusters.**

**Can support:**

- Dietary supplements are not FDA-approved to diagnose, treat, cure, or prevent disease
- General regulatory framing for safety blocks
- Structure/function vs disease claim boundaries (overview level)

**Cannot support:** FDA endorsement of any electrolyte product; medical rehydration protocols.

---

### `fda-nutrition-facts-label` (optional — sodium/serving context)

| Field | Value |
|-------|-------|
| **Citation ID** | `fda-nutrition-facts-label` |
| **URL** | https://www.fda.gov/food/nutrition-facts-label |
| **Source type** | `FDA` |
| **Access date** | 2026-07-07 |

**Can support:** How Nutrition Facts panels report sodium, potassium (when mandatory), calories, and sugars on food/beverage labels — useful for ready-to-drink electrolyte beverages.

**Cannot support:** Product-specific label verification without brand source.

---

### `ftc-endorsement-guides` (required)

| Field | Value |
|-------|-------|
| **Citation ID** | `ftc-endorsement-guides` |
| **URL** | https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking |
| **Source type** | `FTC` |
| **Access date** | 2026-07-07 |

**Can support:** Affiliate disclosure, endorsement boundaries, material connection copy.

**Cannot support:** Health or hydration claim substantiation (FDA/NIH primary for supplement claims).

---

### `ftc-health-products-claim-substantiation` (recommended)

| Field | Value |
|-------|-------|
| **Citation ID** | `ftc-health-products-claim-substantiation` |
| **URL** | https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance |
| **Source type** | `FTC` |
| **Access date** | 2026-07-07 |

**Can support:** Claim substantiation expectations for health-related marketing; caution on hangover, performance, and medical-style hydration claims.

**Cannot support:** Product label facts or dosing.

---

## B. Sports / hydration context sources

Use **only** when authoritative and cited conservatively. Do **not** rely on brand blogs as primary evidence.

| Source type | When acceptable | Cautions |
|-------------|-----------------|----------|
| ACSM / NATA position statements (if cited with URL) | General sweat/sodium loss context for active lifestyles | No cramp prevention or performance guarantees |
| NIH ODS nutrient fact sheets | Sodium/potassium/magnesium roles | Not hydration treatment |
| NCAA / sports medicine consensus (peer-reviewed) | Background on electrolyte loss in prolonged exercise | No product endorsements |
| Brand hydration blogs | **Not primary evidence** | May inform `brand_claim` mirror only |

**Editorial framing:**

- "Electrolyte drink mixes vary in sodium, potassium, sugar, and sweeteners — labels should be compared directly."
- "People who sweat during exercise may compare sodium content per serving — individual needs vary."
- Avoid: "replenishes what you lose," "prevents dehydration," "optimal hydration," "clinical rehydration."

---

## C. Testing / certification sources

### `nsf-certified-for-sport-search` (when relevant)

| Field | Value |
|-------|-------|
| **Citation ID** | `nsf-certified-for-sport-search` |
| **URL** | https://www.nsfsport.com/certified-products |
| **Source type** | `certification_body` |
| **Access date** | 2026-07-07 |

**Can support:** `thirdPartyTesting.status: verified` when listing matches locked SKU.

---

### `informed-choice-search` / `informed-sport-search` (when relevant)

| Field | Value |
|-------|-------|
| **Citation IDs** | `informed-choice-search`, `informed-sport-search` |
| **URLs** | https://choice.wetestyoutrust.com/supplement-search · https://sport.wetestyoutrust.com/supplement-search |
| **Source type** | `certification_body` |
| **Access date** | 2026-07-07 |

---

### `usp-verified-search` (when relevant)

| Field | Value |
|-------|-------|
| **Citation ID** | `usp-verified-search` |
| **URL** | https://www.quality-supplements.org/verified-products |
| **Source type** | `certification_body` |
| **Access date** | 2026-07-07 |

**Note:** Many electrolyte drink mixes are sold as foods/beverages — USP Verified may be less common than NSF Sport for athlete-oriented SKUs. Document `unknown` when no program applies.

### Product-specific COAs

| Source type | When acceptable |
|-------------|-----------------|
| Published COA on brand site | SKU-matched lot/batch when available; cite `testing-{product-slug}` |
| Lab report linked from brand | Same SKU; verify not generic marketing PDF |

**Default:** Prefer program database listings over retailer badges alone for `verified` status.

---

## D. Product-label source rules

Future Electrolytes product YAML must follow these rules. **No product YAML in Phase 14A.**

| Rule | Requirement |
|------|-------------|
| **Primary label source** | Official brand Supplement Facts or Nutrition Facts (product page image, PDF, or label gallery) |
| **Secondary context** | Official brand product page for marketing claims (tag as `brand_claim`, not `label_fact`) |
| **Retailer listing** | Use **only** for dated manual price and availability — `retailer_listing` / `price_fact` — and as **fallback label** when official label unavailable (document caveat) |
| **Electrolyte amounts** | Sodium (mg), potassium (mg), magnesium (mg), calcium (mg), chloride (mg) per serving when disclosed — reject proprietary "electrolyte blend" without amounts |
| **Sugar/carbohydrates** | Capture grams per serving; distinguish zero-sugar vs sugar-containing formulas |
| **Sweeteners** | Stevia, sucralose, allulose, cane sugar, dextrose/glucose, monk fruit, etc. — list from label |
| **Serving format** | Stick pack, tub powder, tablet, ready-to-drink, capsule — lock one SKU format |
| **Amazon listings** | Allowed only as **outbound affiliate targets** after exact ASIN/UPC mapping in a later phase — **not** evidence for claims, prices, or reviews |
| **Amazon reviews / Q&A / ratings** | **Never** evidence for label facts, testing, health claims, or scoring |
| **Citation ID pattern** | `label-{product-slug}`, `retailer-{product-slug}`, `brand-{product-slug}-page` per [`citation-id-conventions.md`](./citation-id-conventions.md) |
| **Price calculation source** | `editorial-price-per-serving-{slug}` (`internal_editorial`) documenting: `price ÷ servings per container` |
| **Affiliate** | Per-product `affiliate.enabled: false` until exact mapping verified (Klean Magnesium UPC mismatch precedent) |

**Label fact claim example (drafting phase):**

> Nutrition Facts list 1,000 mg sodium and 200 mg potassium per stick pack serving.

**Price fact claim example:**

> Manual price observed $X on [date]; price per serving ≈ $Y (editorial calculation).

---

## E. Sources not accepted as primary evidence

| Source | Why rejected |
|--------|--------------|
| Amazon reviews, Q&A, star ratings | Subjective; not label verification; policy violation |
| Influencer / social hydration or hangover claims | Unverified marketing |
| Unsourced "clinical hydration" or "IV in a stick" copy | Medical adjacency; FTC/FDA risk |
| Medical-condition articles as ranking evidence | POTS, heat illness, diarrhea, vomiting — out of scope |
| Hangover-cure blogs or marketing | Disallowed claim category |
| Pet/animal electrolyte products | Human supplements only — permanent reject |
| Disease-treatment or rehydration therapy sources | Out of scope; cannot support rankings |
| Competitor comparison sites | Not primary evidence |
| Live Amazon prices | Use dated manual price with `lastPriceCheckedAt` |
| Brand sweat-loss calculators as medical evidence | May inform `brand_claim` only |

---

## F. Electrolyte-specific notes

### Distinguish electrolytes from general hydration

| Category | Examples | Label focus |
|----------|----------|-------------|
| **Electrolyte drink mixes** | LMNT, Liquid IV, DripDrop, Nuun, Ultima, Redmond Re-Lyte | Sodium/potassium/magnesium per serving; sugar; sweeteners |
| **Sports drinks (RTD)** | Gatorade, Powerade, BodyArmor | Nutrition Facts; sugar load; sodium per bottle |
| **Plain water / flavor drops** | Mio, Crystal Light (non-electrolyte) | Usually **exclude** unless meaningful electrolyte amounts disclosed |
| **Medical ORS products** | Pedialyte, DripDrop medical positioning | High claim-risk — compare labels only; no illness-treatment framing |

### Track per serving (when disclosed)

| Nutrient | Unit | Notes |
|----------|------|-------|
| Sodium | mg | Primary differentiator; wide range across products |
| Potassium | mg | Often lower than sodium; some products emphasize potassium |
| Magnesium | mg | May be absent or minimal |
| Calcium | mg | Optional; document when present |
| Chloride | mg | Optional; document when present |
| Sugar / total carbohydrates | g | Critical for sugar-free vs sugar-containing comparisons |
| Calories | kcal | Tie to sugar/carb content |

### Sweetener tracking

| Sweetener | Notes |
|-----------|-------|
| Cane sugar / dextrose / glucose | Sugar-containing formulas; calorie disclosure |
| Stevia / monk fruit | Common in zero-sugar mixes |
| Sucralose / acesulfame potassium | Artificial sweeteners — additive profile |
| Allulose | Low-calorie sweetener; label disclosure |
| No sweetener (unsweetened) | LMNT-style positioning |

### Serving format

| Format | Practicality notes |
|--------|-------------------|
| Stick pack | Single-serve; portable; price per stick |
| Tub powder | Scoop-based; verify scoop included |
| Tablet | Dissolve in water; tablet count per serving |
| Ready-to-drink | Bottle/can; sodium per container vs per serving |
| Capsule | Less common; distinguish from drink mixes |

### Pricing

- Normalize to **price per serving** (not per gram of powder weight)
- RTD: price per bottle and sodium per bottle
- Avoid live price claims unless manually checked and dated
- High-sodium premium sticks (e.g., LMNT) vs sugar-containing sticks (e.g., Liquid IV) — editorial context, not dismissal

### Claim-risk boundaries

- Avoid medical dehydration treatment framing
- Avoid hangover-cure, cramp-prevention, and performance-guarantee language
- Avoid keto/fasting medical-style claims
- Avoid children, pregnancy, and medical-condition suitability rankings
- Avoid "best for everyone" or "Best Overall"

---

## Cross-reference: citation ID quick list

| ID | sourceType | Phase 14A pinned |
|----|------------|------------------|
| `nih-sodium-hp` | NIH | Yes — 2026-07-07 |
| `nih-potassium-hp` | NIH | Yes — 2026-07-07 |
| `nih-magnesium-hp` | NIH | Yes — reuse Magnesium cluster |
| `nih-magnesium-consumer` | NIH | Yes — reuse Magnesium cluster |
| `nih-calcium-hp` | NIH | Yes — 2026-07-07 |
| `fda-dietary-supplements-overview` | FDA | Yes — shared |
| `fda-nutrition-facts-label` | FDA | Yes — 2026-07-07 |
| `ftc-endorsement-guides` | FTC | Yes — shared |
| `ftc-health-products-claim-substantiation` | FTC | Yes — 2026-07-07 |
| `nsf-certified-for-sport-search` | certification_body | Yes — shared |
| `usp-verified-search` | certification_body | Yes — shared |
| `informed-choice-search` | certification_body | Yes — shared |
| `informed-sport-search` | certification_body | Yes — shared |

Per-product IDs (`label-*`, `retailer-*`, `testing-*`, `editorial-price-per-serving-*`) — create during product research only (Phase 14B+).

---

## Phase 14A explicit non-actions

- [x] No product YAML under `content/products/electrolytes/`
- [x] No guide YAML for Electrolytes
- [x] No comparison YAML for Electrolytes
- [x] No Amazon affiliate links or ASIN mappings for Electrolytes
- [x] No Creatine, Magnesium, or Vitamin C content edits
- [x] No SITE_MODE, ads, legal indexability, or monetization changes
- [x] Category shell remains existing `placeholder` / `noindex: true` — not upgraded to published
