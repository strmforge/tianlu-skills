# Continue Context

Date: 2026-06-25

## Objective

Move Tianlu from single-file prompt routing toward role envelopes: one role name, one skill bundle, one workflow contract, boundary laws, and eval coverage inside the absorb -> generate -> compose -> re-enter cycle.

## Current State

- Added a new incubator umbrella candidate: `incubator/agent-role-envelope-cycle-review.md`
- Added a new incubator candidate: `incubator/agent-role-skill-bundle-routing-review.md`
- Added a new incubator candidate: `incubator/loop-engineering-workflow-review.md`
- Added a new incubator candidate: `incubator/context-harness-loop-readiness-review.md`
- Added a new incubator candidate: `incubator/code-intelligence-graph-runtime-review.md`
- Added a concrete incubator pilot: `incubator/public-skill-triage-role-envelope-pilot.md`
- Added a new incubator candidate: `incubator/role-skill-operating-package-review.md`
- Updated incubator index: `incubator/README.md`
- Added eval coverage for the pilot in `eval/test-prompts.md`, `eval/expected-behavior.md`, `eval/oracle-cases.jsonl`, and `eval/seed-answers.jsonl`.
- Added eval coverage for context -> harness -> loop escalation in the same eval files.
- Added eval coverage for public role-skill operating packages that combine agents, skills, trigger metadata, hooks, commands, templates, dispatch loops, reviewer gates, and human approval language.
- Extended the role-skill operating package incubator with marketplace-scale skill catalogs, loop observability sidecars, instruction-file lifecycle governance, and knowledge-vault role packages.
- Extended public mechanism intake groups with controller-audited examples for marketplace supply chains, observability/memory sidecars, instruction lifecycle packages, curated plugin manifests, and knowledge-vault role packages.
- Extended the role-skill operating package incubator with evidence-gated research packages, content workflow packages, clean-room spec-to-runtime packages, and Markdown OS four-file governance packages.
- Extended public mechanism intake groups with controller-audited examples for evidence-gated research, content/account-action separation, clean-room spec-to-runtime, registry lifecycle, vertical skill packs, and Markdown OS file-role governance.
- Extended the public mechanism intake groups with controller-audited graph-backed code intelligence runtimes, auto-detect wiring, incremental reparse loops, and blast-radius query surfaces.
- Added eval coverage for research evidence gates, content workflow account-action boundaries, clean-room spec/runtime activation boundaries, and Markdown OS persistent-write/backend/provider boundaries.
- The latest synthesis push also wrote `incubator/code-intelligence-graph-runtime-review.md` and updated `incubator/README.md` to route the new intake note from the incubator index.
- The role-envelope method is still incubating; it is not promoted to `playbooks/`, `laws/`, adapters, or active runtime behavior yet.

## Working Hypothesis

- A role should be routed by bundle, not by a single prompt file.
- A role envelope is the combined unit: role name, skill bundle, workflow contract.
- Skill names can act as decomposition hints for routing.
- The bundle should stay minimal and be validated against single-file baseline behavior.
- Recurring work should become a loop only when a hard gate, state file, verifier, and liveness contract are present.
- A coding workflow should not enter a loop until it has a current context packet, execution harness contract, scoped approval boundary, and evidence path.
- A role-skill operating package should be treated as scoped source evidence until its routing, execution, persistence, permissions, and eval boundaries are independently reviewed. Counts of agents, skills, hooks, templates, or tests are package-shape evidence, not activation proof.
- A graph-backed code intelligence runtime should be treated as scoped source evidence until its graph/query boundary, auto-detect wiring, incremental update behavior, and reversible install path are independently reviewed. Token-reduction and blast-radius claims are package-shape evidence, not activation proof.
- Observability sidecars and status dashboards can govern loop cost and liveness, but do not authorize unattended execution, remote control, config mutation, or session exposure.
- Instruction files are governed lifecycle artifacts. Hooks may provide feedback; mutating repairs such as pruning, splitting, or sync require an explicit command and separate approval boundary.
- Knowledge-vault role packages strengthen the role-name plus skills plus workflow plus memory/retrieval thesis, but vault writes, web research, hooks, locks, and setup scripts remain inactive until activation review.
- Evidence records, source fitness, claim strength, and proposal readiness gates can carry research state forward, but they do not authorize claim upgrades into neutral knowledge, reports, drafts, or rebuttals.
- Content loops can contribute style, calendar, draft, review, and narrative-intent methods, but browser sessions, publishing, engagement, replies, follows, traffic reads, and account analytics remain separate account-action surfaces.
- Clean-room specifications are useful intermediate artifacts between absorption and runtime implementation, but they do not authorize builds, runs, host-protocol registration, service exposure, or neutral-law promotion.
- Markdown OS file-role separation supports the role-envelope thesis, but persistent instruction writes, skill generation, backend launch, and AI provider calls remain activation surfaces.

## Next Step

- Replay the `Public Skill Triage Operator` pilot on at least three public skill recommendation sets.
- Compare single-file routing vs role envelope routing for trigger precision, context cost, and boundary violations.
- Pick one recurring workflow pilot and compare looped execution vs single-shot baseline.
- Replay `context-harness-loop-readiness-review.md` on one codebase-understanding task, one CI triage task, and one dependency-update task.
- Decide whether the role-envelope method stays incubating, becomes a productive playbook, or gains a narrow agent-orchestration law note.
- Replay `role-skill-operating-package-review.md` on at least three role package shapes: a large role ecology, a hook-routed skill infrastructure pack, and a dispatch/controller pack.
- Replay `role-skill-operating-package-review.md` on marketplace-scale catalog, observability sidecar, instruction-file lifecycle package, and knowledge-vault role package shapes.
- Replay `role-skill-operating-package-review.md` on evidence-gated research, content workflow, clean-room spec-to-runtime, Markdown OS, and registry lifecycle package shapes.
- Decide whether role-skill operating package review should stay as an incubator note, merge into role-envelope review, or become a productive review playbook.

## Validation

- `node scripts/route-lint.mjs` passed.
- `node scripts/check-local-skill-inventory.mjs` passed.
- `node eval/run-oracle-check.mjs` passed.
- `node eval/run-answer-check.mjs eval/seed-answers.jsonl` passed.
- `git diff --check` passed with only line-ending normalization warnings from Git.
- No activation, install, or runtime mutation was performed.
- Latest QClaw synthesis source range: controller-audited cycles `qclaw-tianlu-20260625-004440`, `qclaw-tianlu-20260625-011341`, `qclaw-tianlu-20260625-015314`, and `qclaw-tianlu-20260625-021315`; semantic failure `qclaw-tianlu-20260625-014244` is excluded.
- Current QClaw synthesis source range pending validation in this batch: controller-audited cycles `qclaw-tianlu-20260625-022635`, `qclaw-tianlu-20260625-025356`, `qclaw-tianlu-20260625-032424`, and `qclaw-tianlu-20260625-035402`.
