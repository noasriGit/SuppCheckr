# Vitamin C Source Inventory — Phase 8C

**Date:** 2026-07-07  
**Phase:** 8C (source collection & schema/rubric setup)  
**Status:** Research planning document — not published content  
**Purpose:** Pin authoritative references and document source rules before Vitamin C guide drafting and product YAML (later phases).

See also: [`vitamin-c-product-research-checklist.md`](./vitamin-c-product-research-checklist.md), [`vitamin-c-claim-language-guide.md`](./vitamin-c-claim-language-guide.md), [`phase-8b-vitamin-c-category-blueprint-2026-07-07.md`](./phase-8b-vitamin-c-category-blueprint-2026-07-07.md), [`citation-id-conventions.md`](./citation-id-conventions.md).

---

## Phase 8B rules confirmed (8C review)

| Rule | Status | Source |
|------|--------|--------|
| **Human supplements only** — reject animal/pet Vitamin C keywords | Confirmed | Phase 8B blueprint §J; Phase 8A keyword rejects |
| **No disease-use SEO pages in wave 1** (colds, COVID, pregnancy, kids, women) | Confirmed | Claim language guide; Phase 8B blueprint §C |
| **Vitamin C amount per serving required** for future shortlist | Confirmed | Product checklist §Label verification |
| **Price per 500 mg or 1,000 mg vitamin C** (dated manual price) | Confirmed | Checklist §Sources & pricing; category shell normalization |
| **No Amazon reviews as evidence** | Confirmed | Checklist §Testing; citation conventions |
| **Verified vs claimed testing** | Confirmed | `verified` / `claimed` / `unknown` / `not_claimed` |
| **No product YAML, guides, or publication in Phase 8C** | Confirmed | Phase 8C scope |

---

## A. Core authoritative sources

### `nih-vitamin-c-hp` (required)

| Field | Value |
|-------|-------|
| **Citation ID** | `nih-vitamin-c-hp` |
| **URL** | https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/ |
| **Source type** | `NIH` |
| **Access date** | 2026-07-07 |
| **Publisher** | NIH Office of Dietary Supplements |

**Can support (`health_context`, `safety_context`):**

- RDA/AI tables for vitamin C by age, sex, pregnancy, lactation
- Food and supplement sources of vitamin C
- Deficiency signs (general, not diagnostic)
- Tolerable Upper Intake Level (UL) for adults and children
- GI effects of high supplemental doses (diarrhea, nausea, abdominal cramps)
- Kidney stone risk context at high supplemental intakes (oxalate metabolism)
- Hemochromatosis / iron overload interaction context
- Drug–nutrient interactions (e.g., chemotherapy context — cite conservatively, no treatment advice)
- Population groups at risk of low intake
- General roles of vitamin C (collagen synthesis, antioxidant, immune function) — cite conservatively, no outcome promises
- Supplement forms commonly sold (ascorbic acid, mineral ascorbates) as **general reference**, not product-specific absorption claims

**Cannot support:**

- Product-specific label facts, doses, or form claims
- Disease treatment or prevention claims for any vitamin C product
- "Best form for absorption," "best for immunity," or demographic winner rankings
- Verifying brand marketing ("liposomal superiority," "immune boosting")
- Third-party testing verification
- Retail prices or value comparisons
- Replacing clinician advice for deficiency, kidney disease, pregnancy, or medication management

**Notes for safe use:**

- Prefer HP sheet for UL, kidney stone risk, iron overload, and interaction detail on guides and ingredient hub
- Pair with consult-a-professional block on all Vitamin C pages
- Do not quote cold/flu/cancer research sections as product benefits — use only as general "research has examined" context with citation, no personal outcome language
- Recheck access date before publish

---

### `nih-vitamin-c-consumer` (recommended)

| Field | Value |
|-------|-------|
| **Citation ID** | `nih-vitamin-c-consumer` |
| **URL** | https://ods.od.nih.gov/factsheets/VitaminC-Consumer/ |
| **Source type** | `NIH` |
| **Access date** | 2026-07-07 |
| **Publisher** | NIH Office of Dietary Supplements |

**Can support:**

- Plain-language vitamin C overview for buyer guides and category intro
- Consumer RDA table (mg/day by life stage)
- Food sources list
- Supplement forms (ascorbic acid, sodium ascorbate, calcium ascorbate, etc.) — **general ODS statement only**, not per-product absorption claims
- Low-intake prevalence (general population context)
- Supplement UL table and diarrhea/nausea warning at high supplemental intakes
- Brief "what research shows" sections (colds, cancer, skin) — **must be framed as population research, not product recommendations**
- ODS disclaimer language pattern (not medical advice)

**Cannot support:**

- Product label facts or vitamin C mg verification
- Liposomal-specific superiority claims (not covered as a distinct regulated form category)
- Disease treatment, megadosing guidance, or deficiency treatment without clinician involvement
- Endorsement of specific brands or retailers
- Testing verification

**Notes for safe use:**

- Useful for `what-is-vitamin-c` and `vitamin-c-dosage-guide` consumer tone (future phases)
- HP sheet is preferred when citing UL, kidney stone risk, or interaction detail
- Avoid copying consumer "effects on health" bullets into product pros/cons as if SuppCheckr endorses outcomes

---

### `fda-dietary-supplements-overview` (required)

| Field | Value |
|-------|-------|
| **Citation ID** | `fda-dietary-supplements-overview` |
| **URL** | https://www.fda.gov/food/dietary-supplements |
| **Source type** | `FDA` |
| **Access date** | 2026-07-07 |
| **Publisher** | U.S. Food and Drug Administration |

**Same citation ID and URL as Creatine and Magnesium clusters.**

**Can support:**

- Dietary supplements are not FDA-approved to diagnose, treat, cure, or prevent disease
- General regulatory framing for safety blocks and "what supplements are not" sections
- Structure/function vs disease claim boundaries (overview level)
- Adverse event reporting context (general)

**Cannot support:**

- Product efficacy, safety for an individual, or label accuracy verification
- FDA endorsement of any product
- Specific vitamin C dosing or form recommendations
- Substitute for NIH clinical/nutrient detail

**Notes for safe use:**

- Reuse existing cluster citation entry pattern
- Use in standard safety block on every Vitamin C entity type
- Do not imply FDA evaluates or approves SuppCheckr scores or product picks

---

### `ftc-endorsement-guides` (required)

| Field | Value |
|-------|-------|
| **Citation ID** | `ftc-endorsement-guides` |
| **URL** | https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking |
| **Source type** | `FTC` |
| **Access date** | 2026-07-07 |
| **Publisher** | Federal Trade Commission |

**Alternate canonical references (if URL structure changes):** 16 CFR Part 255 Endorsement Guides; FTC "Endorsements" business guidance hub at https://www.ftc.gov/business-guidance/resources/endorsements.

**Can support:**

- Endorsement and testimonial advertising boundaries
- Material connection disclosure expectations (Amazon Associates affiliate framework)
- "Expert" and "doctor recommended" claim caution
- Editorial independence / affiliate disclosure copy on guides and affiliate-disclosure page
- `affiliate_or_monetization_claim` claim type citations

**Cannot support:**

- Health or safety content about vitamin C itself
- Product label verification
- Structure/function claim substantiation (FDA primary for supplement claims)

**Notes for safe use:**

- Cite when drafting monetization-related claims
- Pair with internal editorial policy for SuppCheckr ranking independence statements

---

## B. Testing / certification sources

### `nsf-certified-for-sport-search` (when relevant)

| Field | Value |
|-------|-------|
| **Citation ID** | `nsf-certified-for-sport-search` |
| **URL** | https://www.nsfsport.com/certified-products |
| **Source type** | `certification_body` |
| **Access date** | 2026-07-07 |
| **Publisher** | NSF International |

**Can support:**

- Verification of NSF Certified for Sport listing matched to locked SKU
- `thirdPartyTesting.status: verified` when listing ID, product name, serving size, and count match review YAML

**Cannot support:**

- Health claims, absorption claims, or label facts without separate `label-*` citation
- Verification from retailer copy alone

---

### `usp-verified-search` (when relevant)

| Field | Value |
|-------|-------|
| **Citation ID** | `usp-verified-search` |
| **URL** | https://www.quality-supplements.org/verified-products |
| **Source type** | `certification_body` |
| **Access date** | 2026-07-07 |
| **Publisher** | U.S. Pharmacopeia |

**Can support:**

- USP Verified program listing matched to locked SKU
- `verified` testing status when database entry matches product name, brand, and format

**Cannot support:**

- General "USP quality" marketing without database match
- Label facts without brand Supplement Facts citation

---

### `informed-choice-search` / `informed-sport-search` (when relevant)

| Field | Value |
|-------|-------|
| **Citation IDs** | `informed-choice-search`, `informed-sport-search` |
| **URLs** | https://choice.wetestyoutrust.com/supplement-search · https://sport.wetestyoutrust.com/supplement-search |
| **Source type** | `certification_body` |
| **Access date** | 2026-07-07 |
| **Publisher** | LGC / Informed Choice / Informed Sport |

**Can support:**

- Program database verification for locked SKU
- Sport/athlete-oriented vitamin C products when certification is claimed

**Cannot support:**

- Immunity or absorption superiority claims
- Retailer-only "Informed Sport" badges without database match

---

### Consumer-facing third-party testing (credible, product-specific only)

| Source type | When acceptable |
|-------------|-----------------|
| Published COA on brand site | SKU-matched lot/batch when available; cite `testing-{product-slug}` |
| Lab report linked from brand | Same SKU; verify not generic marketing PDF |
| ConsumerLab / similar | **Not** primary label evidence; may inform research notes only — do not cite as `label_fact` unless SuppCheckr adopts explicit ConsumerLab policy |

**Default:** Prefer NSF, USP Verified, Informed Choice/Sport program listings over paywalled consumer lab summaries for `verified` status.

---

## C. Product-label source rules

Future Vitamin C product YAML must follow these rules. **No product YAML in Phase 8C.**

| Rule | Requirement |
|------|-------------|
| **Primary label source** | Official brand Supplement Facts (product page image, PDF, or label gallery) when available |
| **Secondary context** | Official brand product page for marketing claims (tag as `brand_claim`, not `label_fact`) |
| **Retailer listing** | Use **only** for dated manual price and availability — `retailer_listing` / `price_fact` — and as **fallback label** when official label unavailable (document caveat) |
| **Vitamin C amount** | Must appear on Supplement Facts (e.g. "Vitamin C 1,000 mg") — distinguish from total formula weight or proprietary blend totals |
| **Proprietary blends** | **Reject** if vitamin C amount hidden inside blend without per-ingredient mg |
| **Mineral ascorbates** | Document sodium/calcium contribution when label discloses it (sodium ascorbate, calcium ascorbate) |
| **Amazon listings** | Allowed only as **outbound affiliate targets** after exact ASIN/UPC mapping in a later phase — **not** evidence for claims, prices, or reviews unless compliant and intentionally documented |
| **Amazon reviews / Q&A / ratings** | **Never** evidence for label facts, testing, health claims, or scoring |
| **Citation ID pattern** | `label-{product-slug}`, `retailer-{product-slug}`, `brand-{product-slug}-page` per [`citation-id-conventions.md`](./citation-id-conventions.md) |
| **Price calculation source** | `editorial-price-per-500mg-vitamin-c-{slug}` or `editorial-price-per-1000mg-vitamin-c-{slug}` (`internal_editorial`) documenting: `price ÷ (vitamin C mg per serving × servings per container) × normalization factor` |
| **Affiliate** | Per-product `affiliate.enabled: false` until exact mapping verified (Klean Magnesium UPC mismatch precedent) |

**Label fact claim example (drafting phase):**

> Supplement Facts list 1,000 mg vitamin C as ascorbic acid per serving.

**Price fact claim example:**

> Manual price observed $X on [date]; price per 500 mg vitamin C ≈ $Y (editorial calculation).

---

## D. Sources not accepted as primary evidence

| Source | Why rejected |
|--------|--------------|
| Amazon reviews, Q&A, star ratings | Subjective; not label verification; policy violation |
| Influencer / social media immunity or absorption claims | Unverified marketing |
| Unsourced "immune boosting" copy | Disease-prevention adjacency; FTC/FDA risk |
| Medical blogs as primary sources | Not authoritative for `health_context` without NIH/PubMed anchor |
| Animal / pet / veterinary vitamin C sources | Human supplements only — permanent reject |
| Disease-treatment articles (cancer, COVID, cold cure) | Out of scope; cannot support rankings |
| Competitor comparison sites | Not primary evidence |
| Live Amazon prices | Use dated manual price from chosen retailer with `lastPriceCheckedAt` |

---

## E. Notes for Vitamin C

### Form distinctions (label literacy, not absorption promises)

| Form | Label notes | Editorial cautions |
|------|-------------|-------------------|
| **Ascorbic acid** | Most common; may list "Vitamin C (as ascorbic acid)" | GI tolerance varies; avoid "harshest acid" absolutes |
| **Sodium ascorbate** | Buffered/mineral ascorbate; note sodium if disclosed | Do not treat as sodium-free; document mg sodium per serving when on label |
| **Calcium ascorbate** | Buffered; note calcium if disclosed | Calcium contribution matters for daily intake context — label fact only |
| **Buffered blends** | May combine mineral ascorbates | Require total vitamin C mg; avoid "gentle for everyone" |
| **Liposomal** | Often liquid or softgel; complex "proprietary liposomal blend" labels | Score label clarity; do not endorse absorption superiority without conservative framing |
| **Whole-food / acerola / camu camu** | May list fruit powder + ascorbic acid | Distinguish vitamin C mg from total powder weight |
| **Powders / liquids / gummies** | Serving practicality and sweetener load matter | Sugar content, artificial sweeteners, dyes — capture on checklist |

### Dose and blend rules

- Compare **vitamin C mg per serving**, not total capsule weight or proprietary blend weight
- Multi-ingredient immune stacks (zinc, elderberry, etc.) — high claim-risk; defer or exclude from V1 unless single-purpose vitamin C SKU
- "Ester-C" and trademarked forms — name as label facts; no trademark superiority claims

### Serving practicality

- Document capsules per serving, scoop size, liquid dose volume, gummies per serving
- Large tablet count or multi-capsule servings affect practicality scoring (maps to `formulaQuality` in rubric)

### Pricing

- Avoid live price claims unless manually checked and dated (`lastPriceCheckedAt`)
- Normalize to price per 500 mg or 1,000 mg vitamin C for cluster comparison
- Liposomal products often have higher $/mg — editorial context, not dismissal

---

## Cross-reference: citation ID quick list

| ID | sourceType | Phase 8C verified |
|----|------------|-------------------|
| `nih-vitamin-c-hp` | NIH | Yes — 2026-07-07 |
| `nih-vitamin-c-consumer` | NIH | Yes — 2026-07-07 |
| `fda-dietary-supplements-overview` | FDA | Yes — URL matches Creatine/Magnesium clusters |
| `ftc-endorsement-guides` | FTC | Yes — pinned |
| `nsf-certified-for-sport-search` | certification_body | Yes — search hub URL |
| `usp-verified-search` | certification_body | Yes — search hub URL |
| `informed-choice-search` | certification_body | Yes — search hub URL |
| `informed-sport-search` | certification_body | Yes — search hub URL |

Per-product IDs (`label-*`, `retailer-*`, `testing-*`, `editorial-price-per-500mg-vitamin-c-*`) — create during product research only (Phase 8D+).

---

## Phase 8C explicit non-actions

- [x] No product YAML under `content/products/vitamin-c/`
- [x] No guide YAML for Vitamin C
- [x] No comparison YAML for Vitamin C
- [x] No Amazon affiliate links for Vitamin C products
- [x] No Creatine or Magnesium content edits
- [x] No SITE_MODE, ads, legal indexability, or monetization changes
- [x] Category/ingredient shells created as `draft` / `noindex: true` only (if validation passes)
