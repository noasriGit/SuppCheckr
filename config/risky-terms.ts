export const RISKY_TERMS = [
  "cures",
  "treats",
  "prevents",
  "heals",
  "reverses",
  "guaranteed results",
  "fda-approved supplement",
  "doctor recommended",
  "clinically proven",
  "burn fat fast",
  "testosterone booster",
  "detox",
  "miracle",
  "no side effects",
  "safe for everyone",
  "best overall",
  "best for everyone",
  "side-effect free",
  "side effect free",
] as const;

/** Terms that block publication when found in published entity prose. */
export const PUBLICATION_BLOCKING_TERMS = RISKY_TERMS;
