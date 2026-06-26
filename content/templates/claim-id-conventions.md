# Claim ID Conventions

Structured claims live in product YAML (`claims[]`) and should map to prose fields via `fieldPath` where applicable.

## ID pattern

```
{entity}-{claim-type-short}-{topic}
```

| Segment | Values |
|---------|--------|
| entity | Product slug prefix, e.g. `optimum-creatine` |
| claim-type-short | `label`, `price`, `health`, `safety`, `brand`, `editorial`, `affiliate` |
| topic | Short descriptor, e.g. `serving-5g`, `price-per-5g` |

## Examples

| ID | claimType | claimRiskLevel | Typical fieldPath |
|----|-----------|----------------|-------------------|
| `{slug}-label-form-monohydrate` | label_fact | low | supplementFacts.ingredients |
| `{slug}-label-serving-5g` | label_fact | medium | supplementFacts.ingredients |
| `{slug}-price-msrp` | price_fact | low | pricing.msrp |
| `{slug}-price-per-5g` | price_fact | low | pricing.pricePerActiveDose |
| `{slug}-brand-nsf-claimed` | brand_claim | medium | thirdPartyTesting.details |
| `{slug}-editorial-pro-1` | editorial_opinion | low | pros[0] |
| `{slug}-affiliate-retailer-link` | affiliate_or_monetization_claim | low | retailers |

## Risk level guidance

| claimType | Default risk | Citation requirement when published |
|-----------|--------------|--------------------------------------|
| label_fact | low–medium | medium+ requires `brand_label` |
| price_fact | low | requires `retailer_listing` |
| health_context | medium | NIH / PubMed / consensus_body / FDA |
| safety_context | medium–high | authoritative health source types |
| brand_claim | medium | brand_label / third_party_testing / certification_body |
| editorial_opinion | low–medium | internal_editorial + supporting facts |
| affiliate_or_monetization_claim | low | internal_editorial or FTC |

## Bidirectional linking

```yaml
claims:
  - id: example-label-serving-5g
    citationIds: [label-example-facts]

sources:
  - id: label-example-facts
    supportsClaimIds: [example-label-serving-5g]
```
