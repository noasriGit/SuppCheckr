# Vitamin C — Product Longlist Research (Phase 8D)

**Date:** 2026-07-07  
**Phase:** 8D — product longlist research and shortlist recommendation (**research/planning only**)  
**Price checked:** 2026-07-07  
**Reviewer:** suppcheckr-editorial (research pass)  
**Shortlist status:** **Recommended** — pending user approval before Phase 8E product YAML drafting

See also: [`vitamin-c-product-research-checklist.md`](./vitamin-c-product-research-checklist.md), [`vitamin-c-claim-language-guide.md`](./vitamin-c-claim-language-guide.md), [`vitamin-c-source-inventory-2026-07-07.md`](./vitamin-c-source-inventory-2026-07-07.md), [`magnesium-product-longlist-research-2026-06-26.md`](./magnesium-product-longlist-research-2026-06-26.md) (format reference).

---

## A. Scope and constraints

| Constraint | Status |
|------------|--------|
| Research-only phase | **Confirmed** — template research docs only |
| No product YAML created | **Confirmed** |
| No Vitamin C guides/comparison YAML | **Confirmed** |
| No Vitamin C content published | **Confirmed** — category/ingredient remain `draft` / `noindex` |
| No Amazon affiliate links, ASIN mapping, images, reviews, Q&A, ratings, or live prices | **Confirmed** |
| No Creatine/Magnesium product or affiliate edits | **Confirmed** |
| Human supplements only — no animal/pet products | **Confirmed** |
| No disease-treatment / cold / COVID / demographic SEO framing in research picks | **Confirmed** |
| Contact email `help@suppcheckr.com` | **Confirmed** (`config/site.ts`) |

---

## B. Source rules used

### Acceptable source hierarchy

1. **Official Supplement Facts** (brand product page, label gallery, or official PDF)
2. **Official brand product page** (marketing tagged as `brand_claim`, not label verification)
3. **Certification databases** (NSF Certified for Sport, USP Verified) matched to locked SKU
4. **Reliable retailer labels** — dated manual price and fallback label only when official label unavailable (caveat documented)

### Not used as primary evidence

- Amazon reviews, Q&A, star ratings, or product images
- Influencer or unsourced medical claims
- Live Amazon prices
- Pet/veterinary vitamin C sources

**Amazon note:** Exact ASIN/UPC mapping deferred to a later affiliate phase; no outbound links activated in Phase 8D.

---

## C. Vitamin C price normalization method

**Formulas (label-stated vitamin C mg per serving only):**

- **Price per serving** = checked price ÷ servings per container
- **Price per 500 mg vitamin C** = (price per serving ÷ vitamin C mg per serving) × 500
- **Price per 1,000 mg vitamin C** = (price per serving ÷ vitamin C mg per serving) × 1,000

**Rule:** Use **vitamin C (mg) per serving** from Supplement Facts — not total capsule weight, fruit powder weight, liposomal blend weight, or proprietary complex weight.

---

## D. Candidate longlist table

**Products screened:** 20  
**Price checked:** 2026-07-07 (manual, non-Amazon sources)

| # | Product | Brand | Bucket | Form / format | Vit C mg/serving | Serving | Servings | Official URL | Label source | Testing | Price (source) | $/500 mg vit C | Claim risk | Include? | Notes |
|---|---------|-------|--------|---------------|------------------|---------|----------|--------------|--------------|---------|----------------|----------------|------------|----------|-------|
| 1 | Vitamin C-1000 Veg Capsules (100 ct) | NOW Foods | Basic ascorbic acid | Ascorbic acid; veg capsule | 1,000 mg | 1 capsule | 100 | [nowfoods.com](https://www.nowfoods.com/products/supplements/vitamin-c-1000-veg-capsules) | Official SFP (brand page) | unknown | $14.99 (NOWFoods.com) | ~$0.075 | Moderate — immune/collagen marketing | **Shortlist** | SKU 0690; +100 mg citrus bioflavonoids, 25 mg rutin |
| 2 | Extra Strength Vitamin C 1000 mg Tablets (100 ct) | Nature Made | Premium / USP + budget retail | Ascorbic acid; tablet | 1,000 mg | 1 tablet | 100 | [naturemade.com](https://www.naturemade.com/products/vitamin-c-1000-mg-tablets) (discontinued on brand site) | Target label + USP claim ([Target](https://www.target.com/p/nature-made-vitamin-c-1000mg-immune-system-supplement-tablets-100ct/-/A-11010061)) | **verified** (USP Verified) | $15.29 (Target) | ~$0.076 | Moderate — immune/upper-respiratory copy on retailer | **Shortlist** | UPC 031604014896; brand PDP shows discontinued — lock SKU via retailer |
| 3 | Vitamin C-1000 Complex, Buffered Tablets (90 ct) | NOW Foods | Buffered / mineral ascorbate | Calcium ascorbate; tablet | 1,000 mg | 1 tablet | 90 | [nowfoods.com](https://www.nowfoods.com/products/supplements/vitamin-c-1000-complex-buffered-tablets) | Official SFP (brand page) | unknown | $19.99 (NOWFoods.com) | ~$0.11 | Moderate — “bioavailable,” immune copy | **Shortlist** | SKU 0700; +100 mg calcium; bioflavonoids/acerola/rutin |
| 4 | Lypo-Spheric® Vitamin C (30 packets) | LivOn Laboratories | Liposomal | Sodium ascorbate; liquid packet | 1,000 mg | 1 packet (5.7 mL) | 30 | [livonlabs.com](https://www.livonlabs.com/products/vitamin-c) | Official SFP ([Vitacost label mirror](https://www.vitacost.com/livon-laboratories-lypo-spheric-vitamin-c)) | unknown | $42.95 (LivOnLabs.com) | ~$0.72 | **High** — absorption/elite-delivery marketing | **Shortlist** | +160 mg sodium; +1,000 mg phospholipids; ethanol preservative |
| 5 | Vitamin C Powder (1 lb) | Nutricost | Powder + budget value | Ascorbic acid; powder | 1,000 mg | 1 g (scoop) | ~454 | [nutricost.com](https://nutricost.com/products/nutricost-vitamin-c-powder) | Official SFP image (brand page) | claimed | $13.97 (Nutricost.com, 1 lb) | ~$0.015 | Low–moderate | **Shortlist** | Pure powder; no fillers; also 0.5 lb / 2 lb SKUs |
| 6 | Vitamin C Capsules (240 ct, 500 mg) | Nutricost | Budget / basic ascorbic acid | Ascorbic acid; capsule | 500 mg | 1 capsule | 240 | [nutricost.com](https://nutricost.com/products/nutricost-vitamin-c-capsules) | Official SFP image (brand page) | claimed | $15.97 (Nutricost.com) | ~$0.067 | Low | **Longlist** | Strong budget capsule anchor; gelatin cap |
| 7 | Vitamin C with Rose Hips (240 ct, 1000 mg) | Nutricost | Basic ascorbic acid | Ascorbic acid + rose hips; capsule | 1,000 mg | 1 capsule | 240 | [nutricost.com](https://nutricost.com/products/nutricost-vitamin-c-with-rose-hips-1025mg-240-capsules) | Official SFP image (brand page) | claimed | $15.97 (Nutricost.com) | ~$0.033 | Low–moderate | **Longlist** | +25 mg rose hips; excellent $/mg |
| 8 | Buffered Vitamin C (120 caps) | Nutricost | Buffered | Buffered mineral ascorbate; capsule | 1,000 mg | 2 capsules | 60 | [nutricost.com](https://nutricost.com/products/nutricost-buffered-vitamin-c) | Official SFP image (brand page) | claimed | $14.97 (Nutricost.com) | ~$0.125 | Moderate | **Longlist** | 500 mg per cap × 2; exact mineral split on label image — verify in 8E |
| 9 | Ester-C® 1000 mg with Citrus Bioflavonoids (120 tabs) | American Health | Buffered / trademarked | Ester-C calcium ascorbate; tablet | 1,000 mg | 1 tablet | 120 | [americanhealthus.com](https://www.americanhealthus.com/products/ester-c-1000-mg-with-citrus-bioflavonoids-2) | Retailer SFP ([Swanson](https://www.swansonvitamins.com/p/american-health-ester-c-citrus-bioflavonoids-1000-mg-180-veg-tab)) | unknown | ~$18–22 est. (retailer) | ~$0.09 est. | **High** — “24-hour immune support,” retention/absorption claims | **Longlist** | +110 mg calcium; +200 mg bioflavonoid complex |
| 10 | Vitamin C 1000 mg Tablets | Solgar | Basic ascorbic acid | Ascorbic acid; tablet | 1,000 mg | 1 tablet | 90–250 | [solgar.com](https://www.solgar.com/products/vitamin-c-1000-mg-tablets/) | Official SFP (brand page) | unknown | ~$16–20 est. (retailer) | ~$0.08 est. | Moderate — immune/cardiovascular copy | **Longlist** | Clean single-active tablet option |
| 11 | Vitamin C 1,000 mg (60 caps) | Thorne | Premium / practitioner | Ascorbic acid; capsule | 1,000 mg | 1 capsule | 60 | [thorne.com](https://www.thorne.com/products/dp/vitamin-c-1-000-mg) | Retailer SFP ([Target](https://www.target.com/p/thorne-ascorbic-acid-1000-mg-vitamin-c-supplement-supports-healthy-immune-response-collagen-formation-and-antioxidant-support-60-capsules/-/A-86050539)) | claimed (NSF Contents Certified — not Sport/USP) | $19.00 (Target) | ~$0.16 | Moderate — practitioner/immune marketing | **Longlist** | UPC 693749012498; minimal excipients; not in NSF Sport DB for this SKU |
| 12 | Ascorbic Acid capsules (90 ct, 1000 mg) | Pure Encapsulations | Premium / hypoallergenic | Ascorbic acid; capsule | 1,000 mg (+20 mg ascorbyl palmitate) | 1 capsule | 90 | [pureencapsulations.com](https://www.pureencapsulations.com/) (PDP 404 at fetch) | Retailer SFP ([Vitacost](https://www.vitacost.com/pure-encapsulations-ascorbic-acid-250-capsules)) | unknown | ~$25–35 est. (retailer) | ~$0.14 est. | Moderate — immune/vascular marketing on retailers | **Longlist** | Practitioner channel; official PDP URL to re-lock in 8E |
| 13 | Vitamin C Crystals Powder (8 oz) | NOW Foods | Powder | Ascorbic acid; powder | 1,100 mg | ¼ tsp (1.1 g) | ~206 | [nowfoods.com](https://www.nowfoods.com/products/supplements/vitamin-c-crystals-powder) | Official SFP (brand page) | unknown | $14.99 (NOWFoods.com) | ~$0.034 | Low–moderate | **Longlist** | No other ingredients; pharmaceutical grade; shortlist runner-up to Nutricost powder |
| 14 | Vitamin C 1000 mg with Rose Hips (500 tabs) | Kirkland Signature | Budget / warehouse | Ascorbic acid; tablet | 1,000 mg | 1 tablet | 500 | [costco.com](https://www.costco.com/p/-/kirkland-signature-vitamin-c-1000-mg-500-tablets/10015954) | Retailer SFP ([Vitacost/LSVita mirrors](https://www.lsvita.com/en/kirkland-signature-vitamin-c-1000mg-with-rose-hips-and-citrus-bioflavonoid-complex-500-tablets.html)) | unknown | ~$18–22 est. (warehouse) | ~$0.02 est. | Moderate — immune/absorption copy | **Longlist** | Costco membership; no official Kirkland PDP label at fetch |
| 15 | Vitamin C 500 mg Tablets, USP Verified (100 ct) | Nature Made | Budget | Ascorbic acid; tablet | 500 mg | 1 tablet | 100 | Nature Made / Target | Target listing | **verified** (USP Verified) | $7.49 (Target) | ~$0.075 | Moderate | **Longlist** | Lower-dose USP option if 1000 mg deferred |
| 16 | Liposomal Vitamin C Capsules (120 ct) | Nutricost | Liposomal | Liposomal ascorbate; capsule | 1,500 mg (per brand copy) | 2 capsules | 60 | [nutricost.com](https://nutricost.com/products/nutricost-liposomal-vitamin-c-capsules) | Official SFP image (brand page) | claimed | $21.97 (Nutricost.com) | ~$0.037 | **High** — “efficient delivery” liposomal marketing | **Deferred** | Liposomal mg vs blend weight needs label lock; prefer LivOn for liposomal slot |
| 17 | Klean-C (60 chewables) | Klean Athlete | Buffered / sport-tested | Calcium/sodium ascorbate blend; chewable | 525 mg | 1 chewable | 60 | [kleanathlete.com](https://www.kleanathlete.com/) (via retailers) | Retailer SFP ([ACU Atlanta](https://acuatlanta.net/klean-athlete/klean-c-60-tablets-strawberry-orange/)) | **verified** ([NSF listing](https://www.nsfsport.com/certified-products/listing-detail.php?id=1273121)) | ~$25–27 est. (retailer) | ~$0.24 | Moderate–high — athlete immune/recovery copy | **Deferred** | NSF Sport verified but chewable, sugar alcohols, lower dose, not plain ascorbic acid |
| 18 | Vitamin C with Zinc (240 caps) | Nutricost | Immune stack | Ascorbic acid + zinc; capsule | 1,000 mg + 45 mg zinc | 2 capsules | 120 | [nutricost.com](https://nutricost.com/products/nutricost-vitamin-c-with-zinc-120-capsules-1000mg-of-vitamin-c-45mg-of-zinc) | Brand + Target listing | claimed | $16.97 (Nutricost.com) | ~$0.071 | Moderate — immune stack positioning | **Rejected** | Multi-active immune stack; outside V1 single-purpose vitamin C scope |
| 19 | Emergen-C Immune+ Super Orange (30 packets) | Emergen-C | Powder / immune drink | Ascorbic acid + multi-vitamin; powder packet | 1,000 mg | 1 packet | 30 | [emergenc.com PDF](https://www.emergenc.com/content/dam/cf-consumer-healthcare/bp-emergenc/en_US/src/pdfs/lbl-00000518-web-ready-emergen-c-immune-plus-super-orange-(v.pdf) | Official label PDF | unknown | ~$12–14 est. (retailer) | ~$0.20 | **High** — immune “triple action,” proprietary complex | **Rejected** | 5 g added sugar; proprietary immune complex; poor formula simplicity |
| 20 | Natural Vitamin C (Acerola Cherry) Powder | Nutricost | Whole-food powder | Acerola fruit powder | 90 mg | 500 mg powder | ~454–908 | [nutricost.com](https://nutricost.com/products/nutricost-natural-vitamin-c-acerola-cherry-powder) | Official product page | claimed | ~$16–20 est. | ~$0.89+ | Moderate — “natural” framing | **Rejected** | Fruit powder weight ≠ vitamin C dose clarity for cluster compare |

---

## E. Rejected / deferred products with reasons

| Product | Bucket | Disposition | Reason |
|---------|--------|-------------|--------|
| Nutricost Vitamin C with Zinc | Immune stack | **Rejected** | Zinc co-active; immune-stack SKU outside V1 single-ingredient vitamin C scope |
| Emergen-C Immune+ Super Orange | Powder / drink mix | **Rejected** | High sugar; proprietary immune complex; multi-vitamin stack; immunity-forward marketing |
| Nutricost Natural Vitamin C (Acerola) Powder | Whole-food powder | **Rejected** | Low disclosed vitamin C mg per serving vs powder weight; poor dose/value compare |
| Nutricost Liposomal Vitamin C Capsules | Liposomal | **Deferred** | Liposomal label complexity; aggressive delivery marketing; LivOn has clearer packet label |
| Klean Athlete Klean-C | Buffered / NSF Sport | **Deferred** | NSF verified chewable with sugar alcohols, 525 mg dose, athlete immune copy — poor fit for baseline compare slots |
| American Health Ester-C 1000 mg | Buffered | **Deferred** | Label-clear but high claim-risk (24-hour immune, absorption/retention); NOW Buffered preferred for V1 |
| Nature Made Vitamin C Gummies | Gummy | **Not screened** | Out of V1 scope per checklist (sugar/format) |
| Pet/veterinary vitamin C | — | **Permanent reject** | Human supplements only |

---

## F. Recommended shortlist (5 products for Phase 8E)

**Status: Recommended 2026-07-07** — user approval required before product YAML drafting.

| # | Slot | Product | Brand | Proposed slug | Locked SKU (draft) | Why shortlist | Key caveats | Testing | Price norm. (2026-07-07) |
|---|------|---------|-------|---------------|-------------------|---------------|-------------|---------|-------------------------|
| 1 | Basic ascorbic acid | Vitamin C-1000 Veg Capsules | NOW Foods | `now-foods-vitamin-c-1000-veg-capsules` | SKU 0690; 100 veg caps; UPC 733739006905 | Clear 1,000 mg ascorbic acid per capsule; official brand SFP; widely retail-available | +100 mg bioflavonoids, 25 mg rutin; immune marketing on brand page | unknown | $14.99 ÷ 100 = **$0.15/serv**; **~$0.075/500 mg** |
| 2 | Buffered / mineral ascorbate | Vitamin C-1000 Complex, Buffered Tablets | NOW Foods | `now-foods-buffered-c-1000-complex` | SKU 0700; 90 tablets; UPC 733739007001 | Calcium ascorbate with disclosed 100 mg calcium; representative buffered bucket | Bioflavonoids/acerola/rutin add-ons; “bioavailable” brand copy | unknown | $19.99 ÷ 90 = **$0.22/serv**; **~$0.11/500 mg** |
| 3 | Liposomal | Lypo-Spheric® Vitamin C | LivOn Laboratories | `livon-lypo-spheric-vitamin-c` | 30 packets × 5.7 mL | Category-representative liposomal with clear 1,000 mg sodium ascorbate per packet | High $/mg; sodium 160 mg; absorption marketing — score clarity not superiority | unknown | $42.95 ÷ 30 = **$1.43/serv**; **~$0.72/500 mg** |
| 4 | Powder | Vitamin C Powder | Nutricost | `nutricost-vitamin-c-powder` | 1 lb (454 g); 1 g scoop | Pure ascorbic acid powder; strong budget $/mg; scoop-based flexibility | Sour taste/stomach tolerance varies; sold by weight | claimed | $13.97 ÷ ~454 = **~$0.031/serv**; **~$0.015/500 mg** |
| 5 | Premium / USP verified (+ retail value) | Extra Strength Vitamin C 1000 mg Tablets | Nature Made | `nature-made-vitamin-c-1000-mg-tablets` | 100 tablets; UPC 031604014896 | **USP Verified** program anchor; ubiquitous retail SKU; clear 1,000 mg ascorbic acid | Brand PDP discontinued — label/price via Target; immune copy on retailer | **verified** (USP) | $15.29 ÷ 100 = **$0.15/serv**; **~$0.076/500 mg** |

### Shortlist balance check

| Planned bucket | Covered by |
|----------------|------------|
| Basic ascorbic acid capsule/tablet | NOW C-1000 Veg Capsules |
| Buffered vitamin C / mineral ascorbate | NOW Buffered C-1000 Complex |
| Liposomal vitamin C | LivOn Lypo-Spheric |
| Powder vitamin C | Nutricost Vitamin C Powder |
| Premium / third-party tested | Nature Made 1000 mg USP Verified |
| Budget / common option | Nutricost powder (also Nutricost 500 mg / rose hips on longlist as backups) |

### Backup candidates if user redirects a slot

| Slot | Backup | Notes |
|------|--------|-------|
| Basic ascorbic acid | Nutricost Vitamin C 500 mg capsules; Solgar 1000 mg tablets | Nutricost = budget; Solgar = legacy brand clarity |
| Buffered | Nutricost Buffered Vitamin C | Lower cost; verify mineral ascorbate type on SFP image in 8E |
| Liposomal | — | No equivalent backup without claim-risk tradeoffs |
| Powder | NOW Vitamin C Crystals | Official SFP with 1,100 mg per ¼ tsp; slightly higher $/mg |
| Premium/testing | Thorne Vitamin C 1000 mg | NSF Contents Certified (claimed); not USP Verified |
| Budget | Kirkland Signature 1000 mg 500-count; Nutricost Rose Hips 1000 mg | Warehouse / membership caveats |

---

## G. Product bucket coverage

| Bucket | Candidates screened | Shortlist pick | Coverage |
|--------|---------------------|----------------|----------|
| 1. Basic ascorbic acid | 6 (NOW, Nature Made, Nutricost ×2, Solgar, Kirkland) | NOW C-1000 Veg Caps | **Yes** |
| 2. Buffered / mineral ascorbate | 4 (NOW Buffered, Nutricost Buffered, Ester-C, Klean-C) | NOW Buffered C-1000 | **Yes** |
| 3. Liposomal | 2 (LivOn, Nutricost Liposomal) | LivOn Lypo-Spheric | **Yes** |
| 4. Powder | 3 (Nutricost, NOW Crystals, Emergen-C rejected) | Nutricost Powder | **Yes** |
| 5. Premium / tested | 4 (Nature Made USP, Thorne, Pure Encapsulations, Klean-C deferred) | Nature Made USP | **Yes** |
| 6. Budget / common | 5 (Nutricost 500 mg, Nutricost rose hips, Kirkland, Nature Made 500 mg USP, Nutricost powder) | Nutricost powder (shortlist) + longlist backups | **Yes** |

---

## H. Testing status summary

| Status | Products | Notes |
|--------|----------|-------|
| **verified** | Nature Made 1000 mg & 500 mg (USP Verified); Klean-C (NSF Certified for Sport) | USP: confirm listing at [quality-supplements.org](https://www.quality-supplements.org/verified-products) at YAML lock; Klean-C deferred from shortlist |
| **claimed** | Nutricost line (ISO lab testing copy); Thorne (NSF Contents Certified per Target — distinct from NSF Sport) | Do not score as `verified` without database/certificate URL |
| **unknown** | NOW Foods, LivOn, Solgar, American Health, Kirkland | No recognized program match captured |

---

## I. Price normalization notes

- **Lowest $/500 mg (ascorbic acid):** Nutricost Vitamin C Powder (~$0.015/500 mg) and Nutricost Rose Hips 1000 mg capsules (~$0.033/500 mg on longlist).
- **Mid-range capsules/tablets:** NOW C-1000, Nature Made USP, Nutricost 500 mg (~$0.067–$0.076/500 mg).
- **Buffered premium:** NOW Buffered C-1000 (~$0.11/500 mg).
- **Liposomal outlier:** LivOn (~$0.72/500 mg) — expected; editorial context only, not a dismissal.
- All prices are **dated manual** checks from brand or non-Amazon retailers; re-check before publication (`lastPriceCheckedAt`).

---

## J. Claim-risk notes

- **Lowest risk:** Nutricost pure powder; Solgar plain tablets (still immune copy on brand site).
- **Moderate:** NOW products (immune/collagen structure-function copy); Nature Made (immune support, pharmacist survey claims).
- **Elevated:** LivOn (absorption/elite delivery); American Health Ester-C (24-hour immune, retention); Emergen-C (rejected).
- **Editorial rule:** Mirror label facts; do not repeat immunity-booster, cold/COVID, or absorption-superiority claims in SuppCheckr copy.

---

## K. Amazon mapping deferred notes

| Shortlist product | Amazon exact-match status | Notes |
|-------------------|---------------------------|-------|
| NOW C-1000 Veg 100 ct | **deferred** | Common NOW SKU — verify UPC 733739006905 before ASIN lock |
| NOW Buffered C-1000 90 ct | **deferred** | UPC 733739007001 |
| LivOn Lypo-Spheric 30 ct | **deferred** | Verify packet count and version |
| Nutricost Vitamin C Powder 1 lb | **deferred** | Multiple size variants — lock 1 lb UPC |
| Nature Made 1000 mg 100 ct | **deferred** | Target UPC 031604014896; follow Klean Magnesium UPC-mismatch precedent |

**No affiliate links, images, reviews, Q&A, ratings, or live Amazon prices used or added in Phase 8D.**

---

## L. Recommended products for Phase 8E YAML drafting

When user approves shortlist, draft in this order (all `draft` / `noindex`):

1. `now-foods-vitamin-c-1000-veg-capsules`
2. `now-foods-buffered-c-1000-complex`
3. `livon-lypo-spheric-vitamin-c`
4. `nutricost-vitamin-c-powder`
5. `nature-made-vitamin-c-1000-mg-tablets`

Per-product citations to create: `label-{slug}`, `retailer-{slug}`, `editorial-price-per-500mg-vitamin-c-{slug}`, `testing-{slug}` (if verified).

---

## M. Open questions / source gaps

1. **Nature Made brand PDP** shows “Discontinued” while Target still sells USP Verified 1000 mg — confirm active SKU and whether formulation changed before YAML lock.
2. **Pure Encapsulations** official product URL returned 404 during research — re-pin PDP before any backup YAML.
3. **Nutricost Buffered Vitamin C** — confirm sodium vs calcium ascorbate split from high-res SFP image (filename suggests 500 mg × 2 caps).
4. **Thorne Vitamin C** — NSF Contents Certified vs NSF Certified for Sport; product not in NSF Sport search results for “Vitamin C” — do not conflate programs.
5. **Kirkland Signature** — Costco.com PDP blocked at fetch; rely on third-party label mirrors until warehouse label photographed.
6. **USP Verified database** — match Nature Made UPC to USP listing entry at YAML time for `verified` status.
7. **User approval** — shortlist not locked until explicit sign-off (Magnesium 4D-1 precedent).

---

*Research and planning only. No product YAML, publication, or affiliate activation in Phase 8D.*
