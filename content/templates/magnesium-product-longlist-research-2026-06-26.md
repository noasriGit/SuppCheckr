# Magnesium — Product Longlist Research (Phase 4D-1)

**Date:** 2026-06-26  
**Phase:** 4D-1 — research and shortlist preparation (**user-approved 2026-06-26**)  
**Price checked:** 2026-06-26  
**Reviewer:** suppcheckr-editorial (research pass)  
**Shortlist status:** **Approved** — ready for Phase 4D-2 product YAML drafting (draft/noindex only)

See also: [`magnesium-product-research-checklist.md`](./magnesium-product-research-checklist.md), [`magnesium-claim-language-guide.md`](./magnesium-claim-language-guide.md), [`magnesium-source-inventory-2026-06-26.md`](./magnesium-source-inventory-2026-06-26.md), [`creatine-shortlist-research-2026-06-26.md`](./creatine-shortlist-research-2026-06-26.md) (format reference).

---

## A. Phase 4D-1 scope and constraints

| Constraint | Status |
|------------|--------|
| Research-only phase | **Confirmed** — this document is the sole deliverable |
| No product YAML created | **Confirmed** |
| No brand YAML created | **Confirmed** |
| No comparison YAML created | **Confirmed** |
| Magnesium guides/ingredient/category remain draft/noindex | **Confirmed** — no publication or indexing changes |
| No Creatine content edits | **Confirmed** |
| No schema, config, scoring, UI, affiliate, ads, Amazon, legal, or SITE_MODE changes | **Confirmed** |

---

## B. Source methodology

### Acceptable source hierarchy

1. **Official Supplement Facts / label image** (brand product page, label gallery, or NIH DSLD when brand page is authoritative)
2. **Official brand product page** (marketing copy tagged as `brand_claim`, not verification)
3. **Credible testing/certification source** (NSF Certified for Sport database, published COA matched to SKU, USP listing — only for `verified` status)
4. **Retailer listing** — dated manual **price and availability only** (Vitacost, Target, Nutricost.com, brand direct)
5. **Authoritative general safety sources** (NIH ODS magnesium fact sheets) — background for guides only, not product label facts

### Not acceptable as evidence

- Amazon reviews, Q&A, or star ratings
- Brand “third-party tested” logos without verifiable certificate/program listing
- Blogs, influencer posts, or supplement aggregators for label facts (may be used only to locate primary URLs)
- Inferring elemental magnesium from compound weight when label omits elemental line
- Amazon Associate-tagged or affiliate URLs (not used; affiliate remains disabled)

---

## C. Magnesium price normalization method

**Formulas (label-stated elemental magnesium only):**

- **Price per serving** = checked price ÷ servings per container  
- **Price per 100 mg elemental magnesium** = (price per serving ÷ elemental mg per serving) × 100  

**Rule:** Normalization uses **elemental magnesium (mg)** from Supplement Facts — never bisglycinate/citrate/malate compound weight. This reflects label value context, not bioavailability.

**Example (Nature Made oxide):** $4.49 ÷ 100 servings = $0.045/serving; ($0.045 ÷ 250 mg) × 100 ≈ **$0.018 per 100 mg elemental**.

---

## D. Longlist by bucket

### Bucket 1 — Glycinate / bisglycinate (≥3 candidates)

| Candidate | Brand | Exact SKU/size | Form (label) | Elemental mg/serving | Serving | Servings/container | Checked price | Price/serving | Price/100 mg elemental | Testing | Label clarity | Claim risk | Pass | Notes |
|-----------|-------|----------------|--------------|----------------------|---------|-------------------|---------------|---------------|------------------------|---------|---------------|------------|------|-------|
| High Absorption Magnesium 240 tablets | Doctor's Best | DRB-00087 / UPC 753950000872; 240 tablets | Magnesium lysinate glycinate chelate (Albion) | 200 mg | 2 tablets | 120 | $18.99 (DoctorsBest.com) | $0.16 | $0.08 | unknown | High | Moderate — “sleep support,” “6× absorbed” marketing | **Pass** | Compound + elemental disclosed; widely sourceable |
| Magnesium Glycinate Tablets 180 count | NOW Foods | SKU 1289 / UPC 733739012890 | Magnesium bisglycinate (Albion) | 200 mg | 2 tablets | 90 | $31.99 brand; $19.59 (Vitacost) | $0.22 (Vitacost) | $0.11 (Vitacost) | unknown | High | Moderate — nervous-system/wellness copy | **Pass** | Lock 180-tablet SKU; avoid BioPerine variant for V1 |
| Klean Magnesium 90 veg caps | Klean Athlete | KA202599-90 / UPC 310539035521 | Magnesium glycinate | 120 mg | 1 capsule | 90 | $26.50 (KleanAthlete.com) | $0.29 | $0.24 | **verified** (NSF Certified for Sport) | High | Moderate — athlete/recovery copy, not disease claims | **Pass** | Single-ingredient; NSF listing verifiable |
| Magnesium Glycinate + BioPerine 180 veg caps | NOW Foods | SKU 1287 | Bisglycinate + black pepper extract | 200 mg | 2 caps | 90 | $29.99 brand | $0.33 | $0.17 | unknown | High | Moderate | **Conditional** | Extra active (BioPerine) — prefer plain glycinate for V1 |
| Magnesium Bisglycinate Powder 8 oz | NOW Foods | SKU 1299 | Bisglycinate | 300 mg | 1 tsp (~3 g) | ~76–91 | $23.99 brand est. | ~$0.26 | ~$0.09 | unknown | High | Moderate | **Conditional** | Powder OK for V1 but plain tablet/capsule preferred for comparison clarity |

### Bucket 2 — Citrate (≥3 candidates)

| Candidate | Brand | Exact SKU/size | Form (label) | Elemental mg/serving | Serving | Servings/container | Checked price | Price/serving | Price/100 mg elemental | Testing | Label clarity | Claim risk | Pass | Notes |
|-----------|-------|----------------|--------------|----------------------|---------|-------------------|---------------|---------------|------------------------|---------|---------------|------------|------|-------|
| Magnesium Citrate 120 caps | Nutricost | 120 caps (105 mg elemental per cap) | Magnesium citrate | 420 mg | 4 capsules | 30 | $13.97 (Nutricost.com) | $0.47 | $0.11 | claimed | High | Low–moderate | **Pass** | Clear elemental line; also 60/240 cap SKUs |
| Magnesium Citrate 200 mg Tablets 100 count | NOW Foods | SKU 1290 / UPC 733739012906 | Magnesium citrate | 400 mg | 2 tablets | 50 | $19.99 brand (100 tabs) | $0.40 | $0.10 | unknown | High | Low | **Pass** | Fully reacted citrate; also 250-tablet SKU |
| Magnesium Citrate 180 VegCaps | Solaray | 180 VegCaps (133 mg/cap) | Magnesium citrate | 400 mg | 3 VegCaps | 60 | $11.99 (Solaray.com, 90ct ref.) | ~$0.20 | ~$0.05 | unknown | High | Moderate — relaxation/cardiovascular marketing | **Conditional** | Label includes herbal blend (watercress, parsley, etc.) — not single-ingredient |
| Magnesium Citrate Veg Capsules 180 count | NOW Foods | SKU 1294 | Magnesium citrate | 400 mg | 3 capsules | 60 | $37.99 brand (180 caps) | $0.63 | $0.16 | unknown | High | Low | **Pass** | Capsule alternative to NOW tablets |
| Magnesium Citrate Softgels 180 count | NOW Foods | SKU 1298 | Citrate + glycinate + malate + oxide blend | 400 mg | 3 softgels | 60 | $35.99 brand | $0.60 | $0.15 | unknown | Medium | Low | **Fail** | Multi-form softgel — wrong bucket; avoid for citrate slot |

### Bucket 3 — Malate or transparent mixed-form (≥3 candidates)

| Candidate | Brand | Exact SKU/size | Form (label) | Elemental mg/serving | Serving | Servings/container | Checked price | Price/serving | Price/100 mg elemental | Testing | Label clarity | Claim risk | Pass | Notes |
|-----------|-------|----------------|--------------|----------------------|---------|-------------------|---------------|---------------|------------------------|---------|---------------|------------|------|-------|
| Magnesium Malate 1000 mg Tablets 180 count | NOW Foods | SKU 1300 / UPC 733739013002 | Magnesium malate | 113 mg | 1 tablet | 180 | $25.99 (NOWFoods.com) | $0.14 | $0.13 | unknown | High | Moderate — energy/Krebs marketing | **Pass** | Single-form malate; compound + elemental clear |
| Magnesium Malate 360 tablets | Source Naturals | UPC 021078005353; 1250 mg/tab | Magnesium malate trihydrate | 425 mg | 3 tablets | 120 | $34.65 (Vitacost, 360 tabs) | $0.29 | $0.07 | unknown | High | Moderate — energy/muscle marketing | **Pass** | Also 90/180 count SKUs; malic acid dose listed |
| Magnesium (citrate/malate) 180 caps | Pure Encapsulations | UPC 766298004365; SKU MCM1 | Magnesium citrate/malate | 120 mg | 1 capsule | 180 | $34.80 (Vitacost); $36.50 (Target) | $0.19 | $0.16 | unknown | High | Moderate — cardiometabolic/energy marketing | **Pass** | Transparent mixed-form; per-form mg not split but total elemental clear |
| Magnesium Transporters 180 veg caps | NOW Foods | — | Citrate, taurinate, malate, glycinate, aspartate | 120 mg | 1 capsule | 180 | $23.99 brand est. | ~$0.13 | ~$0.11 | unknown | Medium | Low | **Conditional** | Multi-form without per-form mg — fails strict mixed-form transparency |
| Magnesium 400 mg Veg Capsules | NOW Foods | SKU 1283 | Oxide + citrate + aspartate | 400 mg | 1 capsule | 180 | $23.99 brand | $0.13 | $0.033 | unknown | Medium | Low | **Conditional** | Mixed-form fallback only — not pure malate |

### Bucket 4 — L-threonate conditional (2–3 evaluated)

| Candidate | Brand | Exact SKU/size | Form (label) | Elemental mg/serving | Serving | Servings/container | Checked price | Price/serving | Price/100 mg elemental | Testing | Label clarity | Claim risk | Pass | Notes |
|-----------|-------|----------------|--------------|----------------------|---------|-------------------|---------------|---------------|------------------------|---------|---------------|------------|------|-------|
| Neuro-Mag Magnesium L-Threonate 90 caps | Life Extension | Item #01603 / UPC 737870160397 | Magtein magnesium L-threonate | 144 mg | 3 capsules | 30 | $31.50 (LifeExtension.com) | $1.05 | $0.73 | claimed | High | **High** — memory, cognition, “brain magnesium” primary positioning | **Fail gate** | Single-ingredient and label-clear, but cognitive benefit marketing dominates |
| Magnesium L-Threonate (Magtein) 120 caps | Double Wood Supplements | 120 caps; 4 caps/serving | Magtein L-threonate | 144 mg | 4 capsules | 30 | $30.95 (DoubleWoodSupplements.com) | $1.03 | $0.72 | **claimed** (COA linked on brand page; not NSF/USP) | High | **High** — “clinically proven,” BBB, cognitive/sleep cocktail copy | **Fail gate** | Published batch COA is a plus, but claim-risk gate fails |
| *(Fallback slot)* Magnesium (citrate/malate) 180 caps | Pure Encapsulations | See bucket 3 | Citrate/malate | 120 mg | 1 capsule | 180 | $34.80 (Vitacost) | $0.19 | $0.16 | unknown | High | Moderate | **Pass (fallback)** | Recommended if threonate excluded |

### Bucket 5 — Budget oxide / common option (≥3 candidates)

| Candidate | Brand | Exact SKU/size | Form (label) | Elemental mg/serving | Serving | Servings/container | Checked price | Price/serving | Price/100 mg elemental | Testing | Label clarity | Claim risk | Pass | Notes |
|-----------|-------|----------------|--------------|----------------------|---------|-------------------|---------------|---------------|------------------------|---------|---------------|------------|------|-------|
| Magnesium Oxide 250 mg 100 tablets | Nature Made | UPC 0003160401269 | Magnesium oxide | 250 mg | 1 tablet | 100 | $4.49 (Target) | $0.04 | $0.018 | unknown | High | Low–moderate — heart/bone wellness copy | **Pass** | Strong budget anchor; GI caveats required in copy |
| Magnesium Oxide Capsules 240 count (375 mg oxide) | Nutricost | 375 mg oxide per serving | Magnesium oxide | 210 mg | 1 capsule | 240 | $12.97 (Nutricost.com) | $0.05 | $0.024 | claimed | High | Low | **Pass** | Multiple sizes (375/400/750 mg oxide); lock 375 mg SKU |
| Magnesium Oxide Powder 8 oz | NOW Foods | SKU 1310 | Magnesium oxide | 290 mg | ¼ tsp (~500 mg oxide) | ~454 | ~$19.99 brand est. | ~$0.04 | ~$0.014 | unknown | High | Low | **Conditional** | Powder — special mixing instructions; tablet preferred for V1 |
| Magnesium 400 mg Veg Capsules | NOW Foods | SKU 1283 | Oxide + citrate + aspartate | 400 mg | 1 capsule | 180 | $23.99 brand | $0.13 | $0.033 | unknown | Medium | Low | **Conditional** | Mixed form — use only if dedicated oxide unavailable |
| Magnesium Complex Extra Strength | Nutricost | 240 caps | Oxide + citrate + glycinate blend | 500 mg total | 1 capsule | 240 | ~$16.97 est. | ~$0.07 | ~$0.014 | claimed | Medium | Low | **Fail** | Multi-form without per-form mg breakdown |

---

## E. Failed or rejected candidates

| Product | Bucket attempted | Reason |
|---------|------------------|--------|
| Life Extension Neuro-Mag | L-threonate | **Conditional gate fail** — primary brain/memory/cognitive marketing; SuppCheckr cannot review without repeating cognitive benefit claims |
| Double Wood Magnesium L-Threonate | L-threonate | **Conditional gate fail** — “clinically proven,” BBB, cognitive/sleep positioning despite good label clarity and linked COA |
| NOW Magnesium Citrate Softgels | Malate/mixed or citrate | Multi-form blend (citrate, glycinate, malate, oxide) — fails bucket purity |
| NOW Magnesium 400 mg Veg Capsules (for malate/oxide slot) | Mixed | Oxide-dominant blend — acceptable only as fallback, not primary bucket pick |
| Nutricost Magnesium Complex (extra/regular strength) | Mixed / oxide | Proprietary-style multi-form; no per-form elemental breakdown |
| Solaray Magnesium Citrate 180 VegCaps | Citrate | **Deferred** — supplemental herbal ingredients beyond core citrate (label clarity OK but formula not “clean” for V1) |
| NOW Magnesium Glycinate + BioPerine | Glycinate | **Deferred** — unnecessary BioPerine add-on when plain bisglycinate SKUs exist |
| NOW Magnesium Transporters | Mixed | Five forms listed without per-form mg |
| Magnesium gummies (any brand) | — | Out of V1 scope per checklist |
| Condition-specific / sleep-stack / nootropic magnesium lines | — | Out of V1 scope |

---

## F. Approved V1 shortlist

**Status: Approved 2026-06-26** — user sign-off recorded. Do not create product YAML until Phase 4D-2 begins; all drafts remain `draft` / `noindex`.

| # | Slot/bucket | Product | Brand | Exact SKU/size | Why it belongs | Key caveats | Testing | Source confidence | Price normalization (2026-06-26) | Claim-risk | Phase 4D-2 drafting notes |
|---|-------------|---------|-------|----------------|----------------|-------------|---------|-------------------|-----------------------------------|------------|---------------------------|
| 1 | Glycinate | Klean Magnesium | Klean Athlete | KA202599-90; 90 vegetarian capsules | Single-form glycinate; elemental mg clear; **NSF Certified for Sport** verifiable; complements Creatine cluster’s tested-sport positioning | 120 mg/serving (lower dose than some glycinates); athlete marketing — do not mirror sleep/anxiety claims | **verified** | High | $26.50 ÷ 90 = **$0.29/serv**; **$0.24/100 mg elemental** (brand price) | Low–moderate | Cite NSF listing; note 1–4 caps/day on label directions |
| 2 | Citrate | Magnesium Citrate Capsules | Nutricost | 120 capsules; 420 mg elemental per 4-cap serving | Budget-friendly; explicit elemental magnesium; simple citrate capsule | 4 capsules per serving; “third-party tested” = **claimed** only | claimed | High | $13.97 ÷ 30 = **$0.47/serv**; **$0.11/100 mg elemental** | Low | Lock 120-count SKU; GI/loose stool context from NIH only |
| 3 | Malate | Magnesium Malate 1000 mg Tablets | NOW Foods | SKU 1300; 180 tablets | Single-form malate; compound weight + elemental mg both on label; tablet format | Label suggests 3 tablets/day max — serving size is 1 tablet (113 mg elemental); energy marketing on brand page | unknown | High | $25.99 ÷ 180 = **$0.14/serv**; **$0.13/100 mg elemental** | Moderate | Do not treat malate as “energy treatment”; malic acid listed implicitly via malate |
| 4 | Fallback (threonate slot) | Magnesium (citrate/malate) | Pure Encapsulations | UPC 766298004365; 180 capsules | Transparent mixed citrate/malate when L-threonate fails gate; clean single-active formula; elemental mg per capsule | Combined citrate/malate — no per-form mg split; cardiometabolic marketing on retailer pages | unknown | High | $34.80 ÷ 180 = **$0.19/serv**; **$0.16/100 mg elemental** (Vitacost) | Moderate | Frame as mixed-form label fact; higher $/100 mg than oxide by design |
| 5 | Oxide (budget) | Magnesium Oxide 250 mg Tablets | Nature Made | UPC 0003160401269; 100 tablets | Pure oxide; lowest $/100 mg elemental in longlist; ubiquitous retail SKU | GI tolerance varies; avoid absorption absolutes; not USP Verified on label checked | unknown | High | $4.49 ÷ 100 = **$0.04/serv**; **$0.018/100 mg elemental** (Target) | Low | Strong editorial GI/value caveats; kidney-disease consult language |

### Approved slot decisions (user sign-off 2026-06-26)

#### Glycinate — Klean Athlete over Doctor's Best

**Decision:** Klean Athlete Klean Magnesium is the approved glycinate/bisglycinate slot (not Doctor's Best).

**Reasoning:**

- Klean is preferred as the first Magnesium cluster's stronger **testing/transparency anchor** (NSF Certified for Sport listing verifiable at YAML time).
- Doctor's Best remains a good **backup glycinate** — clear label facts (200 mg elemental from lysinate glycinate chelate per 2-tablet serving) — but uses more sleep/mood-adjacent and absorption-style positioning that needs more careful caveating in SuppCheckr copy.

**Backup glycinate:** Doctor's Best High Absorption Magnesium (240 tablets, DRB-00087).

#### Threonate — excluded from V1; Pure Encapsulations fallback approved

**Decision:** L-threonate is **excluded** from Magnesium V1. Pure Encapsulations Magnesium (citrate/malate) 180 caps occupies slot 4.

**Reasoning:**

- L-threonate is too claim-risky for the first Magnesium product review batch because common product positioning leans cognitive/brain/memory.
- Life Extension Neuro-Mag and Double Wood L-Threonate remain **rejected/deferred for V1** (conditional gate fail documented in section G).
- The threonate topic remains **guide-only** (`types-of-magnesium` and related educational copy).
- **Do not create threonate product YAML in Phase 4D-2.**

#### Oxide — Nature Made over Nutricost

**Decision:** Nature Made Magnesium Oxide 250 mg — 100 tablets is the approved budget/common oxide slot (not Nutricost Magnesium Oxide).

**Reasoning:**

- Nature Made is a mainstream, easy-to-understand oxide example for a budget/common oxide review.
- Official product facts are straightforward (250 mg elemental magnesium as magnesium oxide per tablet).
- **USP/testing status must remain conservative** unless a current official USP or certification database source is verified at YAML time. Do not mark Nature Made as `verified` based on brand claims or retailer copy alone.
- **Backup oxide:** Nutricost Magnesium Oxide (375 mg oxide / 210 mg elemental per serving, 240 caps).

### Preserved alternates (not in V1 shortlist)

| Role | Product | Brand | Notes |
|------|---------|-------|-------|
| Backup glycinate | High Absorption Magnesium 240 tablets | Doctor's Best | Approved alternate if Klean unavailable |
| Backup citrate | Magnesium Citrate 200 mg Tablets 100 count | NOW Foods | SKU 1290; reduces brand overlap vs Nutricost |
| Backup oxide | Magnesium Oxide Capsules 240 count | Nutricost | 375 mg oxide / 210 mg elemental; lock SKU at YAML time |

---

## G. Threonate gate decision

### Candidates evaluated

1. **Life Extension Neuro-Mag** (90 caps, Magtein, 144 mg elemental / 3 caps)  
2. **Double Wood Magnesium L-Threonate** (120 caps, Magtein, 144 mg elemental / 4 caps)

### Gate result: **Neither passes**

| Gate criterion | Neuro-Mag | Double Wood |
|----------------|-----------|-------------|
| Single-ingredient L-threonate | Pass | Pass |
| Elemental mg on Supplement Facts | Pass | Pass |
| Official label source | Pass | Pass |
| Reviewable without cognitive benefit claims in SuppCheckr copy | **Fail** | **Fail** |
| No disease-treatment / “clinically proven” cognitive positioning | **Fail** | **Fail** |

**Primary failure reasons:** Both products center brain/memory/cognitive health in brand positioning. Life Extension headline copy includes “memory, quick thinking, cognitive health.” Double Wood includes “clinically proven,” blood-brain barrier, and cognitive/sleep-stack language. SuppCheckr Magnesium V1 policy (see [`magnesium-claim-language-guide.md`](./magnesium-claim-language-guide.md)) requires threonate reviews only when cognitive claims can be avoided — that is not feasible for these SKUs without misrepresenting the products.

### Fallback for slot 4

**Pure Encapsulations Magnesium (citrate/malate), 180 capsules** — transparent mixed-form, different brand from slots 2–3, label-clear elemental mg, sourceable price/label URLs.

Educational threonate mention remains in `types-of-magnesium` guide without a product review, per claim language guide fallback wording.

---

## H. Brand YAML needs for Phase 4D-2

### Existing brand YAML (reuse)

| Brand | File |
|-------|------|
| NOW Foods | `content/brands/now-foods.yaml` |
| Nutricost | `content/brands/nutricost.yaml` |
| Klean Athlete | `content/brands/klean-athlete.yaml` |

### New brand YAML likely required if shortlist approved

| Brand | Used by shortlist SKU | Notes |
|-------|----------------------|-------|
| Pure Encapsulations | Slot 4 fallback | No existing brand file |
| Nature Made | Slot 5 oxide | No existing brand file |
| Doctor's Best | Alternate glycinate only | No existing brand file |
| Life Extension | Not shortlisted | — |
| Double Wood Supplements | Not shortlisted | — |
| Solaray | Longlist/deferred only | — |
| Source Naturals | Longlist only | — |

**Do not create brand YAML in Phase 4D-1.**

---

## H-bis. Conservative testing-status rules (preserve at YAML time)

Brand marketing alone is **not** sufficient for `verified` third-party testing. Apply these rules in Phase 4D-2:

| Product | Assign at YAML time | Rule |
|---------|---------------------|------|
| **Nutricost Magnesium Citrate** | `claimed` unless upgraded | “Third-party tested” remains **claimed** unless a public COA or credible testing/certification source is verified and cited |
| **Klean Athlete Klean Magnesium** | Verify then assign | NSF Certified for Sport must be re-checked against official NSF listing at YAML time before assigning `verified` |
| **Pure Encapsulations citrate/malate** | `unknown` default | Close source gaps at YAML time — prefer official brand label/product page over retailer-only label images |
| **Nature Made Magnesium Oxide** | `unknown` default | **Do not** mark USP Verified unless a current official USP or certification database entry is found; retailer “USP” badges without database citation stay `unknown` or `claimed` |
| **NOW Magnesium Malate** | `unknown` default | No verifiable third-party certificate captured in this research pass |

**General:** `verified` requires program listing, matched COA, or certification body database entry — not Amazon reviews, retailer Q&A, or unverified brand logos.

---

## I. Source list (access date 2026-06-26 unless noted)

### General (background — already in Magnesium cluster)

| ID | URL |
|----|-----|
| `nih-magnesium-hp` | https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/ |
| `nih-magnesium-consumer` | https://ods.od.nih.gov/factsheets/Magnesium-Consumer/ |
| `fda-dietary-supplements-overview` | https://www.fda.gov/food/dietary-supplements |

### Shortlist — labels / brand pages

| Product | Label / brand URL |
|---------|-------------------|
| Klean Magnesium | https://www.kleanathlete.com/klean-magnesium.html |
| Nutricost Citrate | https://nutricost.com/products/nutricost-magnesium-citrate-capsules |
| NOW Malate | https://www.nowfoods.com/products/supplements/magnesium-malate-1000-mg-tablets |
| Pure Encapsulations citrate/malate | https://www.target.com/p/pure-encapsulations-magnesium-citrate-malate-magnesium-supplement-to-support-nutrient-utilization-energy-bones-heart-health/-/A-1003955310 |
| Nature Made oxide | https://www.target.com/p/nature-made-magnesium-250mg-muscle-bone-nerve-and-heart-health-tablets-100ct/-/A-91641244 |

### Shortlist — retailer price pages

| Product | Retailer price URL |
|---------|-------------------|
| Klean Magnesium | https://www.kleanathlete.com/klean-magnesium.html ($26.50 MSRP) |
| Nutricost Citrate | https://nutricost.com/products/nutricost-magnesium-citrate-capsules ($13.97, 120 caps) |
| NOW Malate | https://www.nowfoods.com/products/supplements/magnesium-malate-1000-mg-tablets ($25.99) |
| Pure Encapsulations | https://www.vitacost.com/pure-encapsulations-magnesium-180-capsules ($34.80) |
| Nature Made oxide | https://www.target.com/p/nature-made-magnesium-250mg-muscle-bone-nerve-and-heart-health-tablets-100ct/-/A-91641244 ($4.49) |

### Testing / certification

| Product | Evidence URL | Status |
|---------|--------------|--------|
| Klean Magnesium | https://www.nsfsport.com/certified-products/listing-detail.php?id=1281622 | **verified** |
| Nutricost Citrate / Oxide | Brand “third-party tested” copy only | **claimed** |
| Double Wood L-Threonate (not shortlisted) | COA linked from https://doublewoodsupplements.com/products/magnesium-threonate | **claimed** (COA present but product failed threonate gate) |

### Longlist additional sources

| Product | URL |
|---------|-----|
| Doctor's Best glycinate | https://www.doctorsbest.com/products/doctor-s-best-high-absorption-magnesium-lysinate-glycinate-chelated-albion-traacs-240-tablets-100-mg-per-tablet-16567 |
| NOW glycinate tablets | https://www.nowfoods.com/products/supplements/magnesium-glycinate-tablets |
| NOW citrate tablets | https://www.nowfoods.com/products/supplements/magnesium-citrate-200-mg-tablets |
| Solaray citrate | https://solaray.com/products/magnesium-citrate |
| Source Naturals malate | https://www.vitacost.com/source-naturals-magnesium-malate-3750-mg-360-tablets |
| Life Extension Neuro-Mag | https://lifeextension.com/vitamins-supplements/item01603/neuro-mag-magnesium-l-threonate |
| Nutricost oxide | https://nutricost.com/products/nutricost-magnesium-oxide-750mg-240-capsules |
| NOW oxide powder | https://www.nowfoods.com/products/supplements/magnesium-oxide-powder |

---

## J. Final recommendation and next-step prompt summary

### Proceed to Phase 4D-2?

**Yes — user approved 2026-06-26.** Phase 4D-2 may draft product YAML (`draft` / `noindex`), new brand YAML for Pure Encapsulations and Nature Made, and still **no publication**.

### Approved 5-product shortlist (recorded)

1. **Klean Athlete Klean Magnesium** — 90 vegetarian capsules (glycinate)  
2. **Nutricost Magnesium Citrate** — 120 capsules  
3. **NOW Magnesium Malate 1000 mg** — 180 tablets (SKU 1300)  
4. **Pure Encapsulations Magnesium (citrate/malate)** — 180 capsules *(threonate fallback)*  
5. **Nature Made Magnesium Oxide** — 250 mg, 100 tablets  

### User decisions — resolved (2026-06-26)

| Decision | Outcome |
|----------|---------|
| Glycinate slot | **Klean Athlete** (Doctor's Best = backup) |
| Threonate slot | **Excluded** — Pure Encapsulations citrate/malate fallback; no threonate product YAML in 4D-2 |
| Oxide slot | **Nature Made** (Nutricost Oxide = backup) |

### Unresolved source gaps (carry to 4D-2)

1. **Nutricost citrate “third-party tested”** — no public certificate URL; keep **claimed** unless COA added at YAML time.  
2. **Klean Athlete retailer price** — Vitacost search did not return listing; brand MSRP used.  
3. **Pure Encapsulations official brand product page** — label sourced via Target/Vitacost; confirm official PE URL at YAML time.  
4. **Nature Made USP Verified status** — not confirmed; treat testing as **unknown** unless official USP source verified.  
5. **SKU drift** — backup Nutricost oxide has 375/400/750 mg variants; approved Nature Made SKU is locked to 100-tablet / UPC 0003160401269.

---

## K. Approved for Phase 4D-2 drafting

**Approval date:** 2026-06-26  
**Scope:** Draft/noindex product YAML only — no comparison YAML unless explicitly approved in a later phase.

### Approved SKUs, roles, and caveats

| # | Bucket / role | Product | Brand | Exact SKU/size | Caveats to preserve in YAML |
|---|---------------|---------|-------|----------------|------------------------------|
| 1 | Glycinate / bisglycinate | Klean Magnesium | Klean Athlete | KA202599-90; 90 veg caps | 120 mg elemental/serving; verify NSF listing at YAML time; do not mirror sleep/anxiety/athlete outcome claims |
| 2 | Citrate | Magnesium Citrate Capsules | Nutricost | 120 caps; 420 mg elemental / 4-cap serving | 4 caps per serving; testing **claimed** only; GI context from NIH only |
| 3 | Malate | Magnesium Malate 1000 mg Tablets | NOW Foods | SKU 1300; 180 tablets | 113 mg elemental/tablet; energy marketing on brand page — label facts only |
| 4 | Transparent mixed-form (threonate fallback) | Magnesium (citrate/malate) | Pure Encapsulations | UPC 766298004365; 180 caps | No per-form mg split; close official label source gap; no threonate product in V1 |
| 5 | Budget oxide | Magnesium Oxide 250 mg Tablets | Nature Made | UPC 0003160401269; 100 tablets | GI/value caveats; do not mark USP verified without official source; kidney consult language |

### Brand YAML needs (Phase 4D-2)

| Action | Brand |
|--------|-------|
| **Reuse existing** | NOW Foods, Nutricost, Klean Athlete |
| **Create new (draft)** | Pure Encapsulations, Nature Made |

### Phase 4D-2 reminders

- Create **draft / noindex** product YAML only — no `status: published`, no `noindex: false`.
- **Do not** create Magnesium comparison YAML in 4D-2 unless explicitly approved.
- **Do not** create L-threonate product YAML.
- Set **`affiliate.enabled: false`** on all product drafts (Amazon Associates not approved).
- Re-check manual prices and label facts before any future publication.
- Magnesium guides, ingredient hub, category, and legal pages remain draft/noindex.

---

## Validation checklist (Phase 4D-1)

- [x] Longlist covers all five V1 buckets with ≥3 candidates each (except threonate 2–3 evaluated)  
- [x] Price normalization documented with formulas and worked examples  
- [x] Testing status uses verified / claimed / unknown / not_claimed rules  
- [x] Threonate gate documented with fallback  
- [x] User-approved 5-SKU shortlist recorded with decisions and alternates  
- [x] Phase 4D-2 handoff section added  
- [x] No product, brand, or comparison YAML created  
- [x] Magnesium remains draft/noindex  
- [x] Creatine cluster untouched  
- [x] SITE_MODE, affiliate, ads, Amazon tags, legal, monetization unchanged  
