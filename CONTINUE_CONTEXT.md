# Continue Context

Date: 2026-06-23

## Objective

Move Tianlu from single-file prompt routing toward role envelopes: one role name, one skill bundle, one workflow contract, boundary laws, and eval coverage inside the absorb -> generate -> compose -> re-enter cycle.

## Current State

- Added a new incubator umbrella candidate: `incubator/agent-role-envelope-cycle-review.md`
- Added a new incubator candidate: `incubator/agent-role-skill-bundle-routing-review.md`
- Added a new incubator candidate: `incubator/loop-engineering-workflow-review.md`
- Added a new incubator candidate: `incubator/context-harness-loop-readiness-review.md`
- Added a concrete incubator pilot: `incubator/public-skill-triage-role-envelope-pilot.md`
- Updated incubator index: `incubator/README.md`
- Added eval coverage for the pilot in `eval/test-prompts.md`, `eval/expected-behavior.md`, `eval/oracle-cases.jsonl`, and `eval/seed-answers.jsonl`.
- Added eval coverage for context -> harness -> loop escalation in the same eval files.
- The role-envelope method is still incubating; it is not promoted to `playbooks/`, `laws/`, adapters, or active runtime behavior yet.

## Working Hypothesis

- A role should be routed by bundle, not by a single prompt file.
- A role envelope is the combined unit: role name, skill bundle, workflow contract.
- Skill names can act as decomposition hints for routing.
- The bundle should stay minimal and be validated against single-file baseline behavior.
- Recurring work should become a loop only when a hard gate, state file, verifier, and liveness contract are present.
- A coding workflow should not enter a loop until it has a current context packet, execution harness contract, scoped approval boundary, and evidence path.

## Next Step

- Replay the `Public Skill Triage Operator` pilot on at least three public skill recommendation sets.
- Compare single-file routing vs role envelope routing for trigger precision, context cost, and boundary violations.
- Pick one recurring workflow pilot and compare looped execution vs single-shot baseline.
- Replay `context-harness-loop-readiness-review.md` on one codebase-understanding task, one CI triage task, and one dependency-update task.
- Decide whether the role-envelope method stays incubating, becomes a productive playbook, or gains a narrow agent-orchestration law note.

## Validation

- `node scripts/route-lint.mjs` passed.
- `node scripts/check-local-skill-inventory.mjs` passed.
- `node eval/run-oracle-check.mjs` passed.
- `node eval/run-answer-check.mjs eval/seed-answers.jsonl` passed.
- `git diff --check` passed with only line-ending normalization warnings from Git.
- No activation, install, or runtime mutation was performed.
