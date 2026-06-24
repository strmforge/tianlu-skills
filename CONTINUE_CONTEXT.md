# Continue Context

Date: 2026-06-25

## Objective

Move Tianlu from single-file prompt routing toward role envelopes: one role name, one skill bundle, one workflow contract, boundary laws, and eval coverage inside the absorb -> generate -> compose -> re-enter cycle.

## Current State

- Added a new incubator umbrella candidate: `incubator/agent-role-envelope-cycle-review.md`
- Added a new incubator candidate: `incubator/agent-role-skill-bundle-routing-review.md`
- Added a new incubator candidate: `incubator/loop-engineering-workflow-review.md`
- Added a new incubator candidate: `incubator/context-harness-loop-readiness-review.md`
- Added a concrete incubator pilot: `incubator/public-skill-triage-role-envelope-pilot.md`
- Added a new incubator candidate: `incubator/role-skill-operating-package-review.md`
- Updated incubator index: `incubator/README.md`
- Added eval coverage for the pilot in `eval/test-prompts.md`, `eval/expected-behavior.md`, `eval/oracle-cases.jsonl`, and `eval/seed-answers.jsonl`.
- Added eval coverage for context -> harness -> loop escalation in the same eval files.
- Added eval coverage for public role-skill operating packages that combine agents, skills, trigger metadata, hooks, commands, templates, dispatch loops, reviewer gates, and human approval language.
- The role-envelope method is still incubating; it is not promoted to `playbooks/`, `laws/`, adapters, or active runtime behavior yet.

## Working Hypothesis

- A role should be routed by bundle, not by a single prompt file.
- A role envelope is the combined unit: role name, skill bundle, workflow contract.
- Skill names can act as decomposition hints for routing.
- The bundle should stay minimal and be validated against single-file baseline behavior.
- Recurring work should become a loop only when a hard gate, state file, verifier, and liveness contract are present.
- A coding workflow should not enter a loop until it has a current context packet, execution harness contract, scoped approval boundary, and evidence path.
- A role-skill operating package should be treated as scoped source evidence until its routing, execution, persistence, permissions, and eval boundaries are independently reviewed. Counts of agents, skills, hooks, templates, or tests are package-shape evidence, not activation proof.

## Next Step

- Replay the `Public Skill Triage Operator` pilot on at least three public skill recommendation sets.
- Compare single-file routing vs role envelope routing for trigger precision, context cost, and boundary violations.
- Pick one recurring workflow pilot and compare looped execution vs single-shot baseline.
- Replay `context-harness-loop-readiness-review.md` on one codebase-understanding task, one CI triage task, and one dependency-update task.
- Decide whether the role-envelope method stays incubating, becomes a productive playbook, or gains a narrow agent-orchestration law note.
- Replay `role-skill-operating-package-review.md` on at least three role package shapes: a large role ecology, a hook-routed skill infrastructure pack, and a dispatch/controller pack.
- Decide whether role-skill operating package review should stay as an incubator note, merge into role-envelope review, or become a productive review playbook.

## Validation

- `node scripts/route-lint.mjs` passed.
- `node scripts/check-local-skill-inventory.mjs` passed.
- `node eval/run-oracle-check.mjs` passed.
- `node eval/run-answer-check.mjs eval/seed-answers.jsonl` passed.
- `git diff --check` passed with only line-ending normalization warnings from Git.
- No activation, install, or runtime mutation was performed.
- Latest QClaw synthesis source range: controller-audited cycles `qclaw-tianlu-20260624-224540`, `qclaw-tianlu-20260624-231302`, `qclaw-tianlu-20260624-234227`, and `qclaw-tianlu-20260625-001536`.
