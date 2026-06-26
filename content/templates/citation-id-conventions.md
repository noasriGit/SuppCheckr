# Citation ID Conventions

Stable citation IDs link claims to sources in YAML. Use lowercase kebab-case. Prefix by scope.

## Prefix patterns

| Prefix | Use for | Example ID |
|--------|---------|------------|
| `nih-` | NIH ODS or NIH pages | `nih-creatine-overview` |
| `pubmed-` | PubMed / PMID-linked sources | `pubmed-creatine-review-2021` |
| `issn-` | ISSN position stands (use `consensus_body` or `PubMed` sourceType) | `issn-creatine-position-stand` |
| `fda-` | FDA supplement regulation context | `fda-dietary-supplements-overview` |
| `ftc-` | FTC advertising/endorsement guidance | `ftc-endorsement-guides` |
| `label-` | Brand Supplement Facts / label image | `label-{product-slug}-facts` |
| `retailer-` | Retailer product listing (price) | `retailer-{product-slug}-amazon` |
| `test-` | Third-party testing / COA | `test-{product-slug}-nsf` |
| `cert-` | Certification body page | `cert-{product-slug}-informed-sport` |
| `brand-` | Brand website (non-label) | `brand-{brand-slug}-about` |
| `editorial-` | Internal methodology / calculations | `editorial-price-per-5g-{product-slug}` |

## Field rules

- IDs must be **unique within the entity** (product, guide, ingredient, etc.).
- `accessDate`: ISO date when URL was last verified (YYYY-MM-DD).
- `sourceType` must match [`SourceTypeSchema`](../../lib/schemas/common.ts).
- `supportsClaimIds` must list every claim this citation supports (bidirectional with claim `citationIds`).

## Creatine cluster starter set (reference — add real URLs in Phase 2C+)

| ID | sourceType | Purpose |
|----|------------|---------|
| `nih-creatine-overview` | NIH | General creatine context |
| `pubmed-creatine-safety-review` | PubMed | Safety context |
| `issn-creatine-position-stand` | consensus_body | Evidence alignment context |
| `fda-dietary-supplements-overview` | FDA | Regulatory framing (not approval) |
| `ftc-endorsement-guides` | FTC | Affiliate/monetization copy |

Do **not** use `example.com` URLs in published content.

---

## Magnesium cluster starter set (Phase 4+ — add real URLs when drafting)

Separate source categories when assigning IDs:

| Category | ID pattern | sourceType | Used for claimTypes |
|----------|------------|------------|---------------------|
| **General evidence / safety** | `nih-magnesium-hp`, `nih-magnesium-consumer` | NIH | `health_context`, `safety_context` |
| **Regulatory framing** | `fda-dietary-supplements-overview`, `ftc-endorsement-guides` | FDA, FTC | `health_context`, `safety_context`, monetization copy |
| **Product label facts** | `label-{magnesium-product-slug}` | brand_label | `label_fact` |
| **Brand claims (unverified)** | `brand-{magnesium-product-slug}-page` | brand_label | `brand_claim` |
| **Retail price data** | `retailer-{magnesium-product-slug}` | retailer_listing | `price_fact` |
| **Verified third-party testing** | `testing-{magnesium-product-slug}` | third_party_testing, certification_body | `brand_claim` (testing statements only when verified) |
| **Editorial calculations** | `editorial-price-per-100mg-elemental-{product-slug}` | internal_editorial | `price_fact` |

### Magnesium reference IDs

| ID | sourceType | Purpose |
|----|------------|---------|
| `nih-magnesium-hp` | NIH | RDA/AI/UL, interactions, kidney disease, supplement safety |
| `nih-magnesium-consumer` | NIH | Consumer-oriented magnesium overview |
| `fda-dietary-supplements-overview` | FDA | Supplements are not FDA-approved to treat disease |
| `ftc-endorsement-guides` | FTC | Endorsement/testimonial advertising boundaries |

### Magnesium product ID examples (replace `{slug}` with product slug)

| ID | sourceType | Purpose |
|----|------------|---------|
| `label-{magnesium-product-slug}` | brand_label | Supplement Facts — form, elemental mg, serving size |
| `retailer-{magnesium-product-slug}` | retailer_listing | Dated manual price only — not evidence for health claims |
| `testing-{magnesium-product-slug}` | third_party_testing | COA or program listing — use only when verification gate passes |
| `cert-{magnesium-product-slug}-usp` | certification_body | USP Verified example pattern |
| `cert-{magnesium-product-slug}-nsf` | certification_body | NSF Sport / NSF contents certified example pattern |
| `editorial-price-per-100mg-elemental-{slug}` | internal_editorial | Documented calculation: price ÷ (elemental mg × servings) × 100 |

**Do not** cite Amazon reviews, retailer Q&A, or blogs as `label_fact`, `health_context`, or verification for `testing-*` IDs.
