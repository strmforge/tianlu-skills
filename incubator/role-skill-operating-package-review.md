# Role Skill Operating Package Review

Status: incubating

Scope: runtime-neutral review method

## Signal

Recent controller-audited public repository batches repeatedly show the same shape: a useful agent role is not only a persona prompt. It is an operating package made from a role name, a skill bundle, routing or trigger metadata, workflow state, gates, verifier or reviewer surfaces, and a clear human approval boundary.

This candidate is narrower than general public skill intake. It focuses on role packages that combine several active-looking surfaces at once: agents, skills, hooks, commands, templates, dispatch controllers, trigger registries, documentation loops, and eval or test gates.

The candidate remains incubating. The reviewed repositories were inspected as local source evidence only. No hook, command, package, connector, account path, dispatch worker, or runtime skill was installed, executed, or activated.

## Source Evidence

Controller-audited public repository samples from the local short-worker loop include:

- role-specialized audit suites with sub-agent files, scoring outputs, fixtures, routing tests, and account-action red lanes;
- staged creative-production and commercial content suites with routed skills, domain corpora, quality gates, reviewer gates, and tests;
- a large role ecology with many agent files, skill directories, path rules, hooks, templates, tiered delegation, escalation rules, and explicit human approval protocol;
- a dispatch controller pattern with task metadata, callbacks, worktree isolation, cost controls, hooks, and red-lane runtime surfaces;
- a hook-routed skill infrastructure sample with `skill-rules.json`, prompt/file trigger metadata, `UserPromptSubmit`, `PostToolUse`, and `Stop` hooks, progressive-disclosure skills, and resumable dev docs.

These examples are evidence of recurring mechanism shape. They are not proof that any package is safe, portable, current, or validated for local use.

Related Tianlu candidates:

- `agent-role-skill-bundle-routing-review.md`
- `agent-role-envelope-cycle-review.md`
- `context-harness-loop-readiness-review.md`
- `loop-engineering-workflow-review.md`
- `public-agent-skill-mechanism-intake-review.md`
- `public-skill-collection-quality-gate.md`

## Proposed Trigger

Use this candidate when a public repository, internal design, or agent runtime proposal defines a role through multiple cooperating surfaces, such as:

- many agent files plus a skill library;
- a primary role plus routed helper skills;
- hook-based or rule-based skill auto-activation;
- slash commands or templates tied to role workflows;
- state, context, dev docs, ledgers, or receipts for resume;
- reviewer, test, lint, scoring, or eval gates;
- dispatch, callbacks, worktrees, or scheduled worker loops.

## Proposed Mechanism

Review the package as an operating package before any activation:

1. Inventory the surfaces.
   - Role files, skill files, trigger metadata, hooks, commands, templates, scripts, config, MCP or connector entries, state files, tests, evals, and docs.
2. Separate routing from execution.
   - A trigger registry, semantic router, hook, or skill name can help select the right bundle, but it is not permission to run commands or mutate runtime config.
3. Separate package shape from package quality.
   - Counts of agents, skills, hooks, templates, tests, or badges are structure evidence, not adoption proof.
4. Extract the neutral mechanism.
   - Role ecology, skill bundle, trigger registry, progressive disclosure, dev-doc continuation, gate, verifier, dispatch receipt, or human approval protocol.
5. Keep the scoped package scoped.
   - The package can be a useful composed variant without becoming neutral law.
6. Require activation review for executable surfaces.
   - Hooks, scripts, package installs, MCP servers, browser or account access, callbacks, scheduled loops, broad permissions, commits, pushes, and external services need separate scoped approval.
7. Add eval coverage before promotion.
   - Test whether the role package improves routing and completion against a single-prompt baseline, while avoiding over-bundling, permission creep, and false completion.

## Initial Scope

- Public or internal role packages that bundle multiple skills, agents, triggers, state files, and gates.
- Source-level mechanism extraction for Tianlu's absorb -> generate -> compose -> re-enter cycle.
- Not a runtime adapter and not an install guide.
- Not a claim that hook-based auto-activation, dispatch, or worktree isolation is safe by default.

## Known Failure Modes

- Role theater: the package has an impressive name but no real workflow contract.
- Count worship: many agents, skills, hooks, or templates are treated as quality proof.
- Auto-activation creep: trigger metadata and hooks silently become runtime authority.
- Over-bundling: too many helper skills increase context cost and route collisions.
- Loop without liveness: dispatch or scheduled work runs without state, stop conditions, verifier, or human checkpoint.
- Self-validation: the same package that produces work also declares it accepted.
- Permission bleed: worktree or package boundaries are mistaken for browser, account, secret, MCP, or filesystem isolation.
- Scope laundering: a scoped package is promoted to neutral law because it looked coherent once.

## Verification Needed

- Replay on several role packages and compare against single-prompt role definitions.
- Measure trigger precision, bundle completeness, context cost, acceptance or rejection rate, and boundary violations.
- Add negative cases for large package counts, hook-based auto-activation, dispatch controllers, and reviewer gates.
- Decide whether a stable productive playbook is needed, or whether this remains an incubator note supporting role-envelope and public-skill-intake work.
- Define a small trust card for role operating packages before any future adapter activation.

## Placement Candidates

- `incubator/`: current placement.
- `playbooks/`: if a stable review workflow emerges for building or assessing role operating packages.
- `laws/surface-agent-orchestration.md`: delegation, role ecology, dispatch, liveness, and verifier boundaries.
- `laws/surface-install-supply-chain.md`: hooks, scripts, installs, package managers, and runtime config writes.
- `laws/surface-memory-learning.md`: durable behavior, dev docs, state, and future-window influence.
- `laws/surface-evidence-eval.md`: package-count claims, tests, gates, and promotion evidence.
- `adapters/`: only after a runtime-specific activation envelope is reviewed.

## Promotion Questions

- Does this candidate change behavior beyond existing role-envelope, loop, and public-skill intake notes?
- Can evals distinguish useful operating packages from role theater, count worship, and permission creep?
- Which pieces are neutral method: trigger registry, role ecology, workflow state, gate, verifier, or trust card?
- Which pieces must stay scoped adapter material: hooks, runtime settings, package scripts, MCP servers, browser access, callbacks, and commands?
