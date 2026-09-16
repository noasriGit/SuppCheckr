# Phase 15B — CoQ10 source-gap and claim-risk checklist (2026-09-16)

Use before any Phase 15C product YAML. Claim language: [`coq10-claim-language-guide.md`](./coq10-claim-language-guide.md). Sources: [`coq10-source-inventory-2026-07-07.md`](./coq10-source-inventory-2026-07-07.md). SKUs: [`coq10-product-longlist-research-2026-09-16.md`](./coq10-product-longlist-research-2026-09-16.md).

---

## A. Authoritative-source gaps

| Source | 2026-09-16 status | Required action |
|--------|-------------------|-----------------|
| NIH ODS Coenzyme Q10 Health Professional fact sheet (`https://ods.od.nih.gov/factsheets/CoenzymeQ10-HealthProfessional/`) | **HTTP 404** on fetch | Do not keep citing a dead URL in new copy. Re-lock: NCCIH overview (live) plus current ODS directory pointers (NCCIH / MedlinePlus / NCI). If ODS restored a CoQ10 sheet, capture the new URL. |
| NCCIH CoQ10 overview | Live (`https://www.nccih.nih.gov/health/coenzyme-q10`, last updated January 2019) | Primary ingredient context. Bottom-line bullets include heart/statin/Parkinson **research summaries** — cite conservatively; do not convert into shopping claims. |
| FDA dietary supplements | Still the regulatory overview URL used in 15A | Keep |
| USP Verified directory | CoQ10 search listed Kirkland 300 mg, Nature Made 100/200/400 mg, Nature Made + black pepper, Member's Mark 200 mg | Use for **product** verification only with name match + access date. Doctor's Best “USP Verified fermented CoQ10” is **not** this list. |
| NSF Certified for Sport | Not re-queried for CoQ10 SKUs today | July: no Thorne CoQ10 NSF listing. Re-search before calling any SKU NSF. |

Draft ingredient YAML still points at the 404 ODS URL. **Do not publish that shell until the citation is replaced.**

---

## B. Label / SKU gaps (shortlist)

| SKU | Gap | YAML gate |
|-----|-----|-----------|
| Doctor's Best Ubiquinol 100 mg 60 sg | Brand **sold out**; no third-party product cert | In-stock channel |
| Doctor's Best HA 100 mg 120 sg | Sold out; USP **ingredient** vs **product** | Wording lock |
| Nutricost 200 mg 60 caps | No official PDP; form word missing; other-ingredients conflict across retailers | **Form + one official/bottle panel** or reject |
| Kirkland 300 mg 100 sg | No 2026-09-16 Supplement Facts; no warehouse price | Facts + dated price |
| Sports Research (alternate) | No facts table on brand HTML | Official facts |
| NOW 100 mg / 200 mg | Cloudflare block | Official facts |
| Qunol Ultra | Form not named beyond “Coenzyme Q10” | Form word or reject |
| Nature Made 100/200 | Discontinued PDPs | Do not YAML |

---

## C. Claim-risk checklist (every CoQ10 URL)

Copy fails review if it:

- [ ] Ranks products for heart disease, BP, cholesterol, fertility, migraine, Parkinson's, anti-aging, or guaranteed energy
- [ ] Advises starting, stopping, or pairing CoQ10 with statins or warfarin
- [ ] Uses “best for seniors / heart patients / statin users” as a heading or title
- [ ] Treats ubiquinol as universally superior or repeats “3× absorption” as fact
- [ ] Calls Doctor's Best or Sports Research “USP Verified **product**” without a directory row
- [ ] Uses Amazon reviews, Q&A, stars, images, or live Amazon price as evidence
- [ ] Invents oil, gelatin, allergen, or mg fields
- [ ] Adds PQQ/omega combo SKUs to wave 1 without a documented comparison role

Allowed: label comparison; dated price per 100 mg; “consult a qualified healthcare professional”; NCCIH-sourced interaction caveats without protocols.

---

## D. Testing-status vocabulary (do not collapse)

| Status | When to use |
|--------|-------------|
| `verified` | SKU-matched USP/NSF/Informed (or equivalent) listing with URL + date |
| `claimed` | Brand/retailer testing language, GMP, “third-party tested,” USP **ingredient** or “USP Grade” |
| `unknown` | No usable testing statement |
| `not_claimed` | Explicitly no testing claim |

Kirkland 300 mg: `verified` **after** YAML includes the 2026-09-16 USP directory URL.  
Doctor's Best HA: `claimed` unless a product-row is found.  
Nutricost / Qunol / Jarrow / LE: `claimed` or `unknown` as in the longlist — never `verified` from marketing.

---

## E. Keyword / SERP gaps

Live US Ahrefs Volume, Global volume, KD, CPS, TP, parent topic, and SERP features were **not** retrieved 2026-09-16. Title/meta lock is blocked until [`phase-15b-coq10-keyword-refresh-2026-09-16.md`](./phase-15b-coq10-keyword-refresh-2026-09-16.md) §G is completed. Phase 8A KD 3 is **not** current.

---

## F. Indexation / affiliate gaps (intentional)

- [x] No CoQ10 product YAML
- [x] No affiliate/ASIN mappings
- [x] Category + ingredient remain `draft` / `noindex: true`
- [x] Do not request indexing for CoQ10 URLs
