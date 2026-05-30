# Eval

Status: seed, soft gate

The current eval layer contains seed prompts, expected behavior, and a minimal machine-readable oracle. It is useful for review, but it is not yet a full automated benchmark.

## Current Boundary

Until an answer-judging runner and independent oracle coverage exist, "passes eval" means:

- the case is present in `test-prompts.md`;
- expected behavior is written in `expected-behavior.md`;
- at least one oracle entry in `oracle-cases.jsonl` names the primary law, companions, must-have behavior, and forbidden behavior;
- a reviewer can compare an agent answer against those fields.

It does not mean the method has passed an independent automated benchmark.

## Hardening Path

1. Keep adding oracle entries for high-risk and promoted cases.
2. Add an answer-judging runner that parses `oracle-cases.jsonl` and checks candidate answers for required and forbidden behavior.
3. Separate authoring, answering, and judging roles when possible.
4. Record whether each check is self-authored, pre-existing, independently generated, or human-reviewed.
5. Treat promotions as soft until at least one independent oracle exists for the method.

This keeps the eval layer aligned with `laws/surface-evidence-eval.md`: independent verification beats self-grading.

## Current Runner

Run:

```bash
node eval/run-oracle-check.mjs
```

This only validates oracle schema and duplicate ids. It does not judge agent answers yet.
