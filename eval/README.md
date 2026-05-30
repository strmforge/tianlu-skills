# Eval

Status: seed, soft gate

The current eval layer contains seed prompts, expected behavior, and a minimal machine-readable oracle. It is useful for review, but it is not yet a full automated benchmark.

## Current Boundary

Until independent oracle coverage exists, "passes eval" means:

- the case is present in `test-prompts.md`;
- expected behavior is written in `expected-behavior.md`;
- at least one oracle entry in `oracle-cases.jsonl` names the primary law, companions, must-have behavior, and forbidden behavior;
- deterministic match patterns exist for seed cases when answer checking is used;
- a reviewer can compare an agent answer against those fields and note what the deterministic check cannot judge.

It does not mean the method has passed an independent automated benchmark.

## Hardening Path

1. Keep adding oracle entries for high-risk and promoted cases.
2. Expand answer-judging coverage beyond the current deterministic seed runner.
3. Separate authoring, answering, and judging roles when possible.
4. Record whether each check is self-authored, pre-existing, independently generated, or human-reviewed.
5. Treat promotions as soft until at least one independent oracle exists for the method.

This keeps the eval layer aligned with `laws/surface-evidence-eval.md`: independent verification beats self-grading.

## Current Runner

Run:

```bash
node eval/run-oracle-check.mjs
node eval/run-answer-check.mjs eval/seed-answers.jsonl
```

`run-oracle-check.mjs` validates oracle schema, duplicate ids, and regex pattern syntax.

`run-answer-check.mjs` checks a JSONL answer file against deterministic `must_match` and `forbid_match` patterns. This is a useful regression seed, but it is still shallow: it can miss paraphrases, reward keyword stuffing, and cannot prove semantic correctness or independent verification.
