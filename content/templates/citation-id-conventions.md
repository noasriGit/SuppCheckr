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
