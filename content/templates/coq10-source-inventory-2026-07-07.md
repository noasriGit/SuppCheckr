# CoQ10 Source Inventory — Phase 15A

**Date:** 2026-07-07  
**Phase:** 15A (research & blueprint only)  
**Status:** Research planning document — not published content  
**Purpose:** Pin authoritative references and document source rules before CoQ10 guide drafting and product YAML (later phases).

See also: [`coq10-claim-language-guide.md`](./coq10-claim-language-guide.md), [`coq10-product-research-checklist.md`](./coq10-product-research-checklist.md), [`phase-15a-coq10-category-blueprint-2026-07-07.md`](./phase-15a-coq10-category-blueprint-2026-07-07.md), [`ubiquinol-vs-ubiquinone-guide-blueprint-2026-07-07.md`](./ubiquinol-vs-ubiquinone-guide-blueprint-2026-07-07.md), [`citation-id-conventions.md`](./citation-id-conventions.md).

---

## Phase 15A rules confirmed

| Rule | Status | Source |
|------|--------|--------|
| **Human supplements only** — reject pet/animal CoQ10 products | Confirmed | Category blueprint §J |
| **No heart-disease / statin / medication-advice framing** | Confirmed | Claim language guide |
| **CoQ10 form (ubiquinone vs ubiquinol) and mg per serving required** for future shortlist | Confirmed | Product checklist §Label verification |
| **Price per 100 mg CoQ10** (dated manual price) | Confirmed | Checklist §Sources & pricing |
| **No Amazon reviews as evidence** | Confirmed | Citation conventions |
| **Verified vs claimed testing** | Confirmed | `verified` / `claimed` / `unknown` / `not_claimed` |
| **No product YAML, guides, comparison, or publication in Phase 15A** | Confirmed | Phase 15A scope |
| **No Amazon ASIN mappings or affiliate links** | Confirmed | Phase 15A scope |

---

## A. Core authoritative sources

### `nih-coq10-hp` (recommended — primary)

| Field | Value |
|-------|-------|
| **Citation ID** | `nih-coq10-hp` |
| **URL** | https://ods.od.nih.gov/factsheets/CoenzymeQ10-HealthProfessional/ |
| **Source type** | `NIH` |
| **Access date** | 2026-07-07 |
| **Publisher** | NIH Office of Dietary Supplements |

**Can support (`health_context`, `safety_context`):**

- General description of CoQ10 and its role in normal cellular processes
- Food sources of CoQ10 (conservative summary)
- Summary of research contexts examined in NIH materials (without disease-treatment framing)
- Safety and side-effect context at overview level
- Interaction notes (e.g., anticoagulant context) — clinician referral only
- Ubiquinone vs ubiquinol mentioned at overview level when NIH text supports cautious wording

**Cannot support:**

- Product-specific cardiovascular benefit claims
- Statin replacement or statin side-effect treatment advice
- "Ubiquinol is always better" or guaranteed absorption superiority
- Ranking products for heart disease, fertility, migraine, or Parkinson's outcomes
- Dosing prescriptions for medical conditions

---

### `nih-coq10-consumer` (optional)

| Field | Value |
|-------|-------|
| **Citation ID** | `nih-coq10-consumer` |
| **URL** | https://ods.od.nih.gov/factsheets/CoenzymeQ10-Consumer/ |
| **Source type** | `NIH` |
| **Access date** | 2026-07-07 |

**Can support:** Consumer-facing general context when HP sheet is too dense; same claim boundaries as HP sheet.

**Cannot support:** Disease-treatment or medication advice.

---

### `nccih-coq10-overview` (recommended)

| Field | Value |
|-------|-------|
| **Citation ID** | `nccih-coq10-overview` |
| **URL** | https://www.nccih.nih.gov/health/coenzyme-q10 |
| **Source type** | `NIH` |
| **Access date** | 2026-07-07 |
| **Publisher** | National Center for Complementary and Integrative Health |

**Can support:**

- Conservative overview of what CoQ10 is and what research has examined
- Safety and interaction caution context
- "Limited evidence" framing for condition-specific uses when NCCIH states it

**Cannot support:**

- Endorsement of any retail product
- Migraine/fertility/Parkinson's treatment claims
- Statin-adjacent medical advice

---

### `fda-dietary-supplements-overview` (required)

| Field | Value |
|-------|-------|
| **Citation ID** | `fda-dietary-supplements-overview` |
| **URL** | https://www.fda.gov/food/dietary-supplements |
| **Source type** | `FDA` |
| **Access date** | 2026-07-07 |

**Same citation ID and URL as Creatine, Magnesium, Vitamin C, and Electrolytes clusters.**

**Can support:**

- Dietary supplements are not FDA-approved to diagnose, treat, cure, or prevent disease
- General regulatory framing for safety blocks
- Structure/function vs disease claim boundaries (overview level)

**Cannot support:** FDA endorsement of any CoQ10 product; medication guidance.

---

### `fda-supplement-facts-label` (optional)

| Field | Value |
|-------|-------|
| **Citation ID** | `fda-supplement-facts-label` |
| **URL** | https://www.fda.gov/food/nutrition-facts-label |
| **Source type** | `FDA` |
| **Access date** | 2026-07-07 |

**Can support:** How Supplement Facts panels report ingredients and serving sizes — label literacy context.

**Cannot support:** Product-specific label verification without brand source.

---

### `ftc-endorsement-guides` (required)

| Field | Value |
|-------|-------|
| **Citation ID** | `ftc-endorsement-guides` |
| **URL** | https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking |
| **Source type** | `FTC` |
| **Access date** | 2026-07-07 |

**Can support:** Affiliate disclosure accuracy; endorsement transparency.

**Cannot support:** Health outcome substantiation for CoQ10 products.

---

### `ftc-health-products-compliance` (recommended)

| Field | Value |
|-------|-------|
| **Citation ID** | `ftc-health-products-compliance` |
| **URL** | https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance |
| **Source type** | `FTC` |
| **Access date** | 2026-07-07 |

**Can support:** Claim substantiation standards for supplement marketing copy review.

**Cannot support:** Product ranking by implied disease benefit.

---

## B. Ingredient/form context sources

| Source type | Use | Caution |
|-------------|-----|---------|
| NIH ODS CoQ10 fact sheets | Form overview, general safety, research summary | No disease-treatment framing |
| NCCIH CoQ10 page | Conservative use-context overview | No product picks |
| PubMed / consensus reviews | Background only when cited conservatively | Not primary ranking evidence |
| Official brand Supplement Facts | Primary product evidence | Mirror marketing as `brand_claim` only |

**Bioavailability / absorption claims:**

- Use cautious language unless a specific product claim is mirrored as `brand_claim` with source
- Do **not** state ubiquinol is universally superior based on brand blogs or influencer content
- Compare **label facts** (form named, mg per serving, oil base) — not assumed absorption outcomes

**Brand blogs are not primary evidence** for health outcomes, statin interactions, or cardiovascular benefit.

---

## C. Testing/certification sources

| Program | URL pattern | Use |
|---------|-------------|-----|
| NSF Certified for Sport | https://www.nsfsport.com/ | SKU-matched sport certification |
| Informed Choice / Informed Sport | https://choice.wetestyoutrust.com/ · https://sport.wetestyoutrust.com/ | Batch/SKU verification when public |
| USP Verified | https://www.usp.org/verification-services/verified-mark | USP listing when matched to SKU |
| Brand-hosted COA | Brand product page | Product-specific only; capture URL and date |

**ConsumerLab:** Use only if publicly accessible content is sufficient for allowed citation; do not rely on paywalled proprietary details unless licensed. Prefer NSF/USP/Informed program databases and brand COAs.

**Testing status values:** `verified` · `claimed` · `unknown` · `not_claimed`

---

## D. Product-label source rules

| Priority | Source | Use for |
|----------|--------|---------|
| 1 | Official brand product page + hosted Supplement Facts image/PDF | Primary label facts |
| 2 | Official brand ingredients / FAQ page | Form, oil base, capsule material |
| 3 | Manufacturer label image on authorized distributor | Secondary when brand page incomplete — document gap |
| 4 | Retailer label image (non-Amazon preferred) | Last resort — note retailer-sourced label in YAML |
| 5 | Amazon listing | **Outbound affiliate target only** after exact ASIN/UPC match in a future mapping phase — **not** evidence for claims, prices, reviews, or images |

**Required label fields for shortlist (Phase 15B+):**

- CoQ10 form (ubiquinone / ubiquinol / unclear)
- CoQ10 mg per serving
- Serving size and servings per container
- Softgel/capsule/tablet/liquid format
- Carrier oil or base (if softgel)
- Capsule/softgel material (gelatin vs veggie)
- Other actives (vitamin E, BioPerine, PQQ, etc.)
- Allergen statements when present

---

## E. Sources not accepted as primary evidence

| Rejected source | Reason |
|-----------------|--------|
| Amazon reviews, Q&A, star ratings, images, live prices | Policy + FTC/affiliate rules |
| Influencer / social media heart-health or energy claims | Unverified marketing |
| Unsourced heart-health, statin, fertility, migraine, Parkinson's articles | Disease-treatment adjacency |
| Medication advice pages (start/stop statins, warfarin dosing) | Not within SuppCheckr scope |
| Pet/animal CoQ10 products | Human supplements only |
| "Clinically proven" aggregator sites without primary source | Claim substantiation failure |
| Competitor comparison blogs | Not primary label evidence |

---

## F. CoQ10-specific notes

### Form tracking

| Form | Label expectation |
|------|-------------------|
| Ubiquinone | Often listed as "Coenzyme Q10 (ubiquinone)" or "CoQ10" with ubiquinone in parentheses |
| Ubiquinol | Often listed as "ubiquinol" or "active form of CoQ10" — verify exact wording on label |
| Unclear | Reject or defer if form cannot be confirmed from official label |

### Dose and serving

- Track **mg CoQ10 per serving** (not per softgel unless serving = 1 softgel)
- Track softgels/capsules per serving
- Track total CoQ10 mg per container (serving mg × servings) for value context
- **Price per 100 mg CoQ10** = primary normalized price metric

### Format and delivery

| Format | Notes |
|--------|-------|
| Softgel | Common; capture oil base |
| Capsule | Powder fill; may lack oil base |
| Tablet | Less common; check binders |
| Gummy | Sweeteners/colors; often lower mg — claim-risk for sugar load |
| Liquid | Serving volume; refrigeration if required |

### Carrier oils (softgels)

Track when disclosed: olive oil, soybean oil, sunflower oil, rice bran oil, MCT oil, mixed tocopherols (vitamin E), other.

**Soy allergen:** soybean oil may trigger soy allergen labeling — capture allergen statements.

### Capsule / softgel material

- Gelatin (bovine/porcine — note if unspecified)
- Veggie softgel / cellulose capsule
- Allergen implications for gelatin, fish oil combos

### Added ingredients

| Added active | Editorial note |
|--------------|----------------|
| Vitamin E (d-alpha tocopherol) | Common in softgels — disclose amount if listed |
| Black pepper extract / BioPerine | Combo complexity — may affect scoring |
| PQQ | Defer combo products or score separately with caution |
| Omega-3 | Combo stack — high complexity; defer in wave 1 if possible |

### Claim-risk boundaries

- No heart-disease treatment or prevention framing
- No statin replacement or "take with statins" advice
- No guaranteed energy or anti-aging outcomes
- No fertility, migraine, or Parkinson's treatment framing
- No "best for heart disease / statin users / seniors"

### Amazon / affiliate (future phases only)

- Exact SKU match (flavor, count, mg, form) before any ASIN
- UPC/packaging verification required
- No affiliate enablement in Phase 15A

---

*Phase 15A inventory only. Update access dates when sources are cited in published YAML.*
