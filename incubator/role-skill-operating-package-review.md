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
- a parallel implementation orchestrator pattern with dependency-ordered batches, self-contained specs, worktree isolation by construction, bounded retries, and mandatory post-execution integration review;
- a hook-routed skill infrastructure sample with `skill-rules.json`, prompt/file trigger metadata, `UserPromptSubmit`, `PostToolUse`, and `Stop` hooks, progressive-disclosure skills, and resumable dev docs.
- marketplace-scale skill and plugin catalogs with structured specs, category folders, metadata, validation scripts, release notes, web browsing surfaces, and visible install paths;
- cost, token, session, and control-plane observability sidecars that expose burn rate, reset forecasts, session logs, remote-control surfaces, and config-write boundaries;
- instruction-file lifecycle packages where hooks check size or drift, but explicit repair commands perform mutating split, prune, or sync work;
- knowledge-vault role packages that combine a skill suite, methodology modes, retrieval, bounded research, multi-writer locking, agents, scripts, tests, and seeded vault material.
- design-system diagram skill packages that carry semantic palette, layout law, multilingual sizing, and export-backend constraints inside the skill itself;
- staged design-composition packages that require a brief gate, a deterministic fit check, and a fixed-axis critique loop around generation;
- frontend design skill packs that lock each brief to one anchor, preserve CSS-token fidelity, and keep content discipline separate from visual styling.
- preview-first presentation skill packs that generate visual previews and keep a safe fallback template path so style discovery is visible rather than purely verbal.
- typed harness packages that separate agent definition, session-versus-run semantics, sandboxes, plans, and blueprints as visible operating surfaces;
- secure portable skill runtimes that compile skill definitions into runnable agents with egress, secrets, audit, and deployment surfaces called out explicitly;
- multi-host projected role packages where canonical skill bodies are projected into `.agents`, `.claude`, `.gemini`, or similar runtime surfaces via thin pointers and small host policy files rather than duplicated skill content.
- instruction-file packages that add a separate manifesto-lint or pass/fail prose-review surface on top of ordinary plugin packaging and loadability checks.
- evidence-gated research role packages that preserve question cards, evidence records, claim strength, source fitness, non-upgraded wording, contradictions, and proposal readiness gates before research claims move into knowledge, writing, reports, drafts, or rebuttals;
- content workflow packages that combine style learning, calendar planning, draft generation, traffic review, narrative-intent budgets, and anti-generic-voice rules while keeping browser sessions, publishing, engagement, replies, and traffic reads behind account-action gates;
- clean-room spec-to-runtime packages that put behavioral, tool, UI, state, permission, command, and host-protocol specifications between source absorption and implementation modules;
- Markdown OS packages that separate kernel invariants, on-demand procedures, task state, and governed lessons, then apply budget diagnostics, stale and density gates, path-limited writes, and explicit generation or review surfaces.
- creative and research method packages that use case libraries, prompt templates, staged scoring, and intersection synthesis as workflow gates;
- meta-skill and domain-editing packages that compare baseline against with-skill output, keep result ledgers, revert regressions, preserve volume thresholds, maintain rolling summaries, and protect structured formats;
- database, data-agent, and security packages that expose safe probes, cross-backend reasoning, session reuse, credential boundaries, exact fix formats, or prompt-injection targets while keeping real systems inactive.
- compact contract-first skill packages that use a fixed question set to turn vague user intent into an executable, verifiable, and pausable goal contract across more than one coding host.
- team-architecture factory packages that choose a named team pattern from a domain sentence, then emit agent, skill, orchestration, and validation surfaces while depending on runtime-specific team primitives.
- domain role-system packages that combine many narrow specialist prompts, a workflow router, evidence-pack metadata, provenance modes, data-mode controls, safety boundaries, and an internal eval ledger.
- local-first coding-agent workbench packages where isolated worktrees or branches, local storage, sidecar/IPC flows, native terminal sessions, diffs, and PR/MR actions define the operating package boundary.

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
   - For smaller packages, the reusable mechanism may be an intake contract rather than a large role ecology; a fixed question set can itself be the role-entry operating surface.
5. Keep the scoped package scoped.
   - The package can be a useful composed variant without becoming neutral law.
6. Require activation review for executable surfaces.
   - Hooks, scripts, package installs, MCP servers, browser or account access, callbacks, scheduled loops, broad permissions, commits, pushes, and external services need separate scoped approval.
6a. Separate projection from parity.
   - A host-specific pointer, manifest, or settings file can prove projection into another runtime surface. It does not prove equivalent skill loading, permissions, execution semantics, or review behavior across hosts.
7. Treat observability as a governor, not permission.
   - Statuslines, cost monitors, session viewers, sidecar memory services, and remote dashboards can improve loop control, but they also create retention, exposure, write, and remote-control surfaces.
8. Treat instruction files as lifecycle artifacts.
   - `CLAUDE.md`, `AGENTS.md`, project memory, and role prompt files need size, drift, inheritance, and repair policies. A hook that warns is not the same as a command that mutates.
8a. Treat manifesto lint as a package surface.
   - A repo may expose explicit pass/fail review for instruction prose. That surface is valuable, but it is still source evidence until replayed on scoped examples.
9. Treat evidence and spec artifacts as intermediate state.
   - Research contracts, evidence records, claim-promotion gates, and clean-room specs can carry neutralized knowledge forward, but they are not runtime execution proof, writing authority, or protocol activation proof.
10. Treat content loops and file-generation tools as dual-surface packages.
   - Planning, drafting, style analysis, taxonomy, and templates may be useful methods; browser publishing, account access, local backend use, and filesystem writes remain separate activation surfaces.
11. Treat measurable gates as claims until replayed.
   - A threshold, rubric, score, safe probe, or improvement number is only source evidence until it is replayed on scoped examples with failure handling.
12. Treat state surfaces as future-behavior boundaries.
   - Session memories, rolling summaries, workspace reuse, result ledgers, and context stores can improve continuity, but they also define retention, rollback, and owner-review obligations.
13. Add eval coverage before promotion.
   - Test whether the role package improves routing and completion against a single-prompt baseline, while avoiding over-bundling, permission creep, and false completion.
14. Treat generated team structures as proposal artifacts.
   - Team patterns, generated agents, skill files, and orchestration templates can be useful role-envelope material, but runtime-specific primitives, generated quality, and fallback behavior require separate replay.
15. Treat domain specialist counts as catalog evidence.
   - A large role catalog, internal score, evidence-pack format, or workflow count can show package shape. It does not prove domain accuracy, professional authority, PHI/PII safety, billing correctness, legal compliance, or external validation.
16. Treat workbench PR actions as gated surfaces.
   - Per-task worktrees and local state are valuable state boundaries, but create-PR, merge, CI-fix, conflict-resolution, account connection, and remote-review actions remain activation surfaces.

## Initial Scope

- Public or internal role packages that bundle multiple skills, agents, triggers, state files, and gates.
- Source-level mechanism extraction for Tianlu's absorb -> generate -> compose -> re-enter cycle.
- Not a runtime adapter and not an install guide.
- Not a claim that hook-based auto-activation, dispatch, or worktree isolation is safe by default.

## Known Failure Modes

- Role theater: the package has an impressive name but no real workflow contract.
- Contract theater: a package presents a strong intake questionnaire, but there is no evidence that it changes routing, verification, or pause behavior downstream.
- Count worship: many agents, skills, hooks, or templates are treated as quality proof.
- Auto-activation creep: trigger metadata and hooks silently become runtime authority.
- Over-bundling: too many helper skills increase context cost and route collisions.
- Loop without liveness: dispatch or scheduled work runs without state, stop conditions, verifier, or human checkpoint.
- Self-validation: the same package that produces work also declares it accepted.
- Permission bleed: worktree or package boundaries are mistaken for browser, account, secret, MCP, or filesystem isolation.
- Projection laundering: several host folders or pointer files are treated as proof of multi-runtime compatibility without replay in each host.
- Scope laundering: a scoped package is promoted to neutral law because it looked coherent once.
- Observability laundering: a dashboard, statusline, session viewer, or cost monitor is treated as authorization to run unattended loops.
- Repair-hook confusion: a read/check hook is mistaken for safe automatic mutation of instruction files.
- Loadability confusion: a package that can be discovered or installed is treated as if its instruction prose has already passed a quality gate.
- Vault overreach: a knowledge-base role package with locks, retrieval, and tests is treated as safe to write local vaults, fetch the web, or activate hooks without review.
- Claim-upgrade laundering: evidence records or source trust labels are treated as permission to strengthen uncertain claims into knowledge, reports, drafts, or rebuttals.
- Content-action laundering: a useful content calendar or style-learning loop is treated as authority to open a real browser session, publish, reply, engage, or read account analytics.
- Spec-runtime laundering: a clean-room spec or host-protocol document is treated as proof that building, running, registering, or exposing the runtime is safe.
- File-role laundering: a four-file governance model is treated as permission to write persistent instruction files, generate skills, launch local backends, or activate AI providers.
- Gate laundering: a numeric threshold, score, rubric, or probe is treated as independent validation without replay.
- State laundering: session reuse, rolling memory, or result ledgers are treated as permission to persist future behavior.
- Generated-team laundering: a plausible team pattern is treated as proof that the generated role package works in the target runtime.
- Domain-authority laundering: a specialist role pack is treated as medical, legal, compliance, coding, billing, or clinical authority because its catalog is large or internally scored.
- Workbench-action laundering: branch/worktree isolation is treated as permission to open PRs, fix CI, resolve conflicts, or merge.

## Verification Needed

- Replay on several role packages and compare against single-prompt role definitions.
- Measure trigger precision, bundle completeness, context cost, acceptance or rejection rate, and boundary violations.
- Add negative cases for large package counts, hook-based auto-activation, dispatch controllers, and reviewer gates.
- Add negative cases for evidence-gated research packages, content automation packages, clean-room spec/runtime packages, and Markdown OS file-role governance packages.
- Add negative cases for generated team factories, internally scored domain role systems, and local-first workbenches with visible PR/MR buttons.
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
