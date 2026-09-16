# Phase 15B — CoQ10 source-gap and claim-risk checklist (2026-09-16)

Use before any Phase 15C product YAML. Claim language: [`coq10-claim-language-guide.md`](./coq10-claim-language-guide.md). Sources: [`coq10-source-inventory-2026-07-07.md`](./coq10-source-inventory-2026-07-07.md). SKUs: [`coq10-product-longlist-research-2026-09-16.md`](./coq10-product-longlist-research-2026-09-16.md). Evening lock: [`phase-15b-coq10-blocker-resolution-2026-09-16.md`](./phase-15b-coq10-blocker-resolution-2026-09-16.md).

---

## A. Authoritative-source gaps

| Source | 2026-09-16 status | Required action |
|--------|-------------------|-----------------|
| NIH ODS Coenzyme Q10 Health Professional fact sheet (`https://ods.od.nih.gov/factsheets/CoenzymeQ10-HealthProfessional/`) | **HTTP 404.** ODS `list-all` now points CoQ10 to **NCCIH**, not an ODS HP sheet. **Disposition: retired/removed standalone ODS CoQ10 HP page** — documented, not silently replaced in YAML. | Keep citing NCCIH + FDA in new copy. Replace `nih-coq10-hp` at 15C citation lock. Do not publish the ingredient shell while this URL is the primary NIH citation. |
| NCCIH CoQ10 overview | Live (`https://www.nccih.nih.gov/health/coenzyme-q10`, last updated January 2019) | Primary ingredient/safety context. Do not convert bottom-line disease-research bullets into shopping claims. |
| FDA dietary supplements | Live (`https://www.fda.gov/food/dietary-supplements`) | Keep |
| NCI PDQ CoQ10 (patient) | Live, updated 2024-05-28 | Optional cancer-context citation only — **no** treatment pages |
| USP Verified directory | CoQ10 search listed Kirkland 300 mg, Nature Made 100/200/400 mg, Nature Made + black pepper, Member's Mark 200 mg | Product verification only with name **and** current label/price. Doctor's Best “USP Verified fermented CoQ10” is **not** this list. |
| NSF Certified for Sport | Not re-queried for CoQ10 SKUs today | July: no Thorne CoQ10 NSF listing. Re-search before calling any SKU NSF. |

Draft ingredient YAML still points at the 404 ODS URL. **Do not publish that shell until the citation is replaced.**

---

## B. Label / SKU gaps (shortlist)

| SKU | Gap | YAML gate |
|-----|-----|-----------|
| Life Extension Super Ubiquinol 100 mg 60 sg (01929) | Testing unknown; brand bioavailability copy | Eligible for later YAML **after** cluster/keyword gates; not 15C-authorized alone |
| Doctor's Best Ubiquinol 100 mg 60 sg | Brand **sold out**; Vitacost temporarily unavailable | Do not select for launch |
| Doctor's Best HA 100 mg 120 sg | Brand sold out; USP **ingredient** vs **product** | In-stock + wording lock |
| Nutricost 200 mg 60 caps | Form word missing on DSLD (2022-08-23) | **Reject** until ubiquinone/ubiquinol is on the label |
| Kirkland 300 mg 100 sg | Current Costco facts/price missing (2019 DSLD only) | Current facts + dated price |
| Member's Mark 200 mg | 180 ct search vs old 75 ct DSLD; no official facts | Exact count + official panel |
| Sports Research 100 mg 120 Plantgel | Not verified ubiquinol; no brand facts table | Official facts; wrong slot |

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
