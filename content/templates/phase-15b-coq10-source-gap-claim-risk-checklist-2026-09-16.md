# Phase 15B — CoQ10 source-gap and claim-risk checklist (2026-09-16)

Use before any Phase 15C product YAML. Claim language: [`coq10-claim-language-guide.md`](./coq10-claim-language-guide.md). Sources: [`coq10-source-inventory-2026-07-07.md`](./coq10-source-inventory-2026-07-07.md). SKUs: [`phase-15b-coq10-final-sourcing-2026-09-17.md`](./phase-15b-coq10-final-sourcing-2026-09-17.md). Evening lock (historical): [`phase-15b-coq10-blocker-resolution-2026-09-16.md`](./phase-15b-coq10-blocker-resolution-2026-09-16.md).

---

## A. Authoritative-source gaps

| Source | 2026-09-16 status | Required action |
|--------|-------------------|-----------------|
| NIH ODS Coenzyme Q10 Health Professional fact sheet (`https://ods.od.nih.gov/factsheets/CoenzymeQ10-HealthProfessional/`) | **HTTP 404** on 2026-09-16. Automated re-check 2026-09-17 returned **403**, not a restored sheet. ODS `list-all` pointed CoQ10 to **NCCIH**. | **Done 2026-09-17:** removed `nih-coq10-hp` from the live ingredient source list. Keep citing NCCIH + FDA. Preserve the dead URL and 404 in research history. Shells remain draft/noindex. |
| NCCIH CoQ10 overview | Live (`https://www.nccih.nih.gov/health/coenzyme-q10`, last updated January 2019; re-verified 2026-09-17) | Primary ingredient/safety context. Do not convert bottom-line disease-research bullets into shopping claims. |
| FDA dietary supplements | Live (`https://www.fda.gov/food/dietary-supplements`, re-verified 2026-09-17) | Keep |
| NCI PDQ CoQ10 (patient) | Live, updated 2024-05-28 | Optional cancer-context citation only — **no** treatment pages |
| USP Verified directory | CoQ10 search listed Kirkland 300 mg, Nature Made 100/200/400 mg, Nature Made + black pepper, Member's Mark 200 mg | Product verification only with name **and** current label/price. Doctor's Best “USP Verified fermented CoQ10” is **not** this list. |
| NSF Certified for Sport | Not re-queried for CoQ10 SKUs today | July: no Thorne CoQ10 NSF listing. Re-search before calling any SKU NSF. |

Draft ingredient YAML no longer points at the 404 ODS URL (repaired 2026-09-17). **Do not publish that shell until a later publication phase.**

---

## B. Label / SKU gaps (limited launch lock 2026-09-17)

| SKU | Gap | YAML gate |
|-----|-----|-----------|
| Life Extension Super Ubiquinol 100 mg 60 sg (01929) | Testing unknown; brand bioavailability copy | **Pass** — eligible for limited 15C YAML |
| Jarrow Q-absorb 100 mg 60 sg | Testing unknown; 1–3×/day directions; soy | **Pass** — lock 60ct not 120ct |
| NOW Foods CoQ10 200 mg 60 veg caps (3176) | Testing claimed (GMP), not USP product | **Pass** |
| Qunol Ultra 100 mg 90ct | Facts panel does not name ubiquinone; very high attributed claims | Not wave 1 |
| NOW 100 mg 50 sg (3208) | Facts row does not say ubiquinone | Alternate only |
| Doctor's Best HA 100/200 mg | Brand sold out | Do not select |
| Nutricost 200 mg 60 caps | Form word missing | Reject |
| Kirkland 300 mg 100 sg | Current Costco facts/price missing | Reject until current facts + dated price |
| Member's Mark 200 mg | Count/facts not locked to USP row | Reject |
| Thorne CoQ10 SP624 | Facts table says Coenzyme Q10 100 mg; form in details copy | Alternate / future branded review |
| Sports Research 100 mg 120 Plantgel | No brand facts table | Reject |

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

Kirkland 300 mg: `verified` **only after** YAML includes a current USP directory URL **and** current facts/price. Not a wave-1 SKU.  
Doctor's Best HA: `claimed` unless a product-row is found.  
Jarrow / LE: `unknown`. NOW 200 mg: `claimed`. Qunol: `unknown` / high attributed-claim caution.

---

## E. Keyword / SERP gaps

Seven exact keywords have 2026-09-16 Ahrefs US Volume + KD in [`phase-15b-coq10-keyword-refresh-2026-09-16.md`](./phase-15b-coq10-keyword-refresh-2026-09-16.md). Remaining seed terms are marked **unavailable**. A full ten-keyword export is desirable, not an absolute blocker to limited 15C YAML drafts. Phase 8A KD 3 is **not** current; `best coq10 supplement` is KD **46**.

---

## F. Indexation / affiliate gaps (intentional)

- [x] No CoQ10 product YAML
- [x] No affiliate/ASIN mappings
- [x] Category + ingredient remain `draft` / `noindex: true`
- [x] Do not request indexing for CoQ10 URLs
