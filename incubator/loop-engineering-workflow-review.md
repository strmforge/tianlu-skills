# Loop Engineering Workflow Review

Status: incubating

Scope: runtime-neutral review method

## Signal

The working thesis is that recurring agent work should be built as a loop, not a one-off prompt. A useful loop has a heartbeat, a state file, a hard gate, a verifier, and a bounded way to resume.

User-shared article signals:

- Loop Engineering is presented as a way to move from prompt craft to recurring workflow design.
- The practical components are automations, worktrees, skills, connectors, and sub-agents.
- The minimal safe loop adds a state file, a gate, and a review step before scale-up.
- The article warns about false completion, understanding debt, cognitive surrender, token burn, and permission creep.

Primary-source signals:

- Addy Osmani's `Loop Engineering` article.
- Anthropic writing on effective context engineering, effective harnesses for long-running agents, multi-agent research systems, and evals.

This file records the method shape and review requirements. It is not an endorsement of any specific runtime implementation and does not recommend unattended activation.

Related umbrella: `agent-role-envelope-cycle-review.md`.

## Source Evidence

- User-shared article on Loop Engineering.
- `https://addyosmani.com/blog/loop-engineering/`
- `https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents`
- `https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents`
- `https://www.anthropic.com/engineering/multi-agent-research-system`
- `https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents`
- `C:\Users\56214\Documents\Codex\tianlu-skills\eval\expected-behavior.md`
- `C:\Users\56214\Documents\Codex\tianlu-skills\eval\test-prompts.md`
- controller-audited local public-repo samples from 2026-06-25 covering tree-search autoresearch loops, worktree-isolated parallel subagents, shared trace state, inherited pass/fail gates, and explicit eval-registry surfaces.
- controller-audited short-worker samples from 2026-07-02 covering slash-command dispatch metadata, deterministic lint/report outputs, prompt-injection gates, print-contract scratchpads, generated tool indexes, research-axis templates, codebase-packing context, and package-audit matrices as loop/state/gate candidates.
- controller-audited short-worker samples from 2026-07-02 covering parallel orchestration state machines, issue-tracker daemon contracts, and YAML workflow gates as source-level loop shapes only.
- controller-audited short-worker samples from 2026-07-02 local 21:13, 21:23, 21:33, and 21:43 covering vision-verified artifact loops, durable task runtimes, MCP/YAML RAG orchestration, tutoring-vault cycles, and hub-routed pattern packages as source-level loop shapes only.
- controller-audited short-worker samples from 2026-07-02 local 21:57, 22:06, 22:16, and 22:26 covering codebase-analysis pipelines, deterministic UX evolve loops, workflow-mode routers, delegate supervision loops, video/media pipelines, mobile streaming packages, and style-locked presentation workflows as source-level loop shapes only.

## Proposed Trigger

Use this candidate when a task is:

- repeated often enough that loop setup can amortize;
- machine-checkable through tests, types, builds, or deterministic review;
- safe to run in bounded iterations;
- able to resume from a state file or durable receipt.

Examples:

- CI failure triage;
- dependency bump and fix;
- lint-and-fix loops;
- issue-to-PR draft loops;
- recurring report generation;
- bounded backlog grooming.

Do not use it for one-off work, opaque judgment work, or work that cannot be automatically checked.

## Proposed Mechanism

Before building a loop:

1. Verify the task is repeatable.
   - One-off tasks should stay as prompts or playbooks.
2. Define a hard stop.
   - The loop needs explicit completion criteria, a maximum budget, and a clean exit.
3. Add project background as a skill.
   - Write down conventions, build steps, and known pitfalls once.
4. Add a state file.
   - Record what changed, what remains, and what to do next.
5. Add a gate.
   - Use tests, type checks, lint, build, or other deterministic checks to auto-reject bad output.
6. Separate writer and verifier.
   - The same model should not be the only judge of its own output.
7. Use worktrees for parallel lanes.
   - Keep concurrent edits isolated until merge time.
7a. Prefer constructional isolation over verbal promises.
   - If a loop claims safe parallelism, look for structural boundaries such as per-lane worktrees, non-overlapping unit decomposition, and mandatory post-lane integration review rather than relying on "be careful" instructions alone.
7b. Distinguish frontier state from plain retry loops.
   - A stronger loop keeps a visible search frontier, branch history, or accepted-node ledger instead of only retrying the last attempt.
8. Add connectors only when they reduce friction.
   - PRs, tickets, alerts, and summaries should flow through explicit tool boundaries.
9. Recheck permissions and review cadence.
   - Do not let a loop become a permission ratchet or an unattended attack surface.
10. Measure acceptance economics.
    - Track accepted change cost, token cost, review time, and reject rate.

## Initial Scope

- Recurring coding and maintenance workflows.
- Bounded automation with explicit review and stop conditions.
- Long-running or scheduled agent work that needs a liveness contract.
- Not a blanket recommendation to make everything autonomous.

## Known Failure Modes

- False completion: the loop announces done before the task is actually done.
- Understanding debt: the agent ships changes no one understands.
- Cognitive surrender: human review disappears because the loop feels productive.
- Token burn: retries and fan-out cost more than the task is worth.
- Permission creep: small write permissions accumulate into broad authority.
- Parallelism theater: a workflow advertises concurrent agents but lacks non-overlap rules, structural isolation, or mandatory integration review.
- Frontier theater: a workflow claims search, exploration, or optimization but only retries serially with no accepted-node history or branch-selection rule.
- Skill injection: unreviewed skills or prompts enter the loop as hidden behavior.
- Log leakage: secrets or private data leak into verbose output and receipts.
- Missing liveness contract: the loop stops, defers, or misses runs but is still treated as complete.

## Controller-Audited Loop Variants

Recent public-source review adds several source-level loop shapes that should stay incubating:

- Fresh-context implementation loops: a small task list plus progress ledger can spawn a new coding-agent instance per iteration, persist state in files such as task status and append-only progress notes, and exit only when an explicit completion marker or iteration cap is reached.
- Hardened loop wrappers: rate-limit handling, circuit breakers, dual-condition exit gates, dry-run modes, and metrics logs are useful liveness surfaces, but they do not prove safe unattended execution.
- Plan-execution CLIs: plan files, task checkboxes, validation commands, review phases, optional external review, stale-loop detection, and finalize stages make loop state reviewable; automatic commits, branch creation, worktrees, and external review tools remain activation surfaces.
- Hat or role event loops: event-loop cores, role hats, memory files, merge queues, backend adapters, and wave dispatch can express role switching and parallel work, but wave execution, adapter behavior, dashboard behavior, and human-interaction channels need separate replay.
- Spec-to-execute loops: brainstorm/spec/plan/execute phases, DAG state, isolated worktrees, two-stage review, and self-modifying release boundaries are strong loop-shape evidence; dogfood metrics and review labels remain source-level claims until independently replayed.
- Command-dispatch loops: frontmatter dispatch targets, operator-argument handling, lifecycle sentinels, and metadata checks can make one iteration's route and output location inspectable; they do not authorize scans, fuzzing, exploit generation, patch generation, or command execution.
- Scratchpad and context gates: persistent scratchpads and codebase-packaging tools can reduce context pressure by keeping raw data outside the conversation and passing only printed summaries or packed evidence bundles; privacy, retention, context quality, and token-economics claims require replay.
- Tool-router and audit loops: generated tool indexes, platform routing matrices, field journals, static-lint outputs, package deltas, migration matrices, and report artifacts can serve as loop state and review outputs; bootstrap, MCP registration, live lookup, security workflow execution, or report publication remain activation surfaces.
- Parallel orchestration loops: touch sets, lock managers, task states, quality gates, auto-spawn rules, retry limits, budget stops, and integration review can make concurrent work inspectable; subagent launch, worktree mutation, lock enforcement, output acceptance, and production safety remain unverified until replay.
- Issue-tracker daemon loops: tracker polling, per-issue workspaces, workflow policy files, bounded concurrency, state-change stops, structured logs, backoff, and restart recovery can make long-running implementation loops reviewable; tracker/API access, daemon persistence, approval/sandbox posture, PR landing, and cleanup safety remain activation surfaces.
- YAML workflow loops: manifest-defined phases, gates, worktree notes, review steps, and finalization contracts can carry workflow state; executing commands, mutating branches, running checks, or treating reviews as acceptance requires scoped replay.
- Phase-gated JSON workflow loops: a planning system can keep `docs/*.json` as the source of truth, render Markdown as views, emit `PASS` or `FAIL`, preserve last-fail artifacts, assign or check IDs, and route back to the prior phase. This is stronger loop-shape evidence than prompt-only stage naming, but it does not prove the scripts enforce append-only continuity, that generated views are correct, or that batch execution is safe without replay on bounded fixtures.
- Vision-verified artifact loops: generate/export/re-read/fix cycles can make visual or diagram defects inspectable when each pass leaves a bounded artifact and a targeted edit trail. They do not prove the generated artifact is good, rights-safe, or acceptable without fixture replay and human-facing review.
- Durable task-runtime loops: retries, queues, idempotency keys, checkpoint metadata, and human-in-loop pauses make long work auditable. They do not prove liveness, external service behavior, or goal completion until the state transitions and stop paths are replayed.
- MCP/YAML RAG loops: independent retrieval, prompting, generation, routing, memory, and evaluation servers can be orchestrated by YAML steps with branches, loops, and shared variables. This is loop architecture evidence only; server launch, retrieval quality, code execution, memory snapshots, and external data handling remain activation surfaces.
- Tutoring and pattern-routing loops: concept vaults, quiz ledgers, hub routers, and narrow rule files can make repeated learning or code-pattern work stateful. They do not prove learning quality, future-session enforcement, or language/runtime correctness without baseline comparison and negative cases.
- Codebase-analysis loops: staged repository intake, graph extraction, status dashboards, parser fallback, cleanup rules, and browser-safe import boundaries can make understanding work inspectable; they do not prove analysis completeness, parser behavior, model fallback quality, or dashboard value without fixture replay.
- Deterministic design loops: fixed-axis synthesis, accepted-decision ledgers, lint thresholds, bounded evolve passes, and plateau stops can make design iteration auditable; they do not prove UI quality, linter correctness, cross-host behavior, or no-telemetry/offline claims.
- Delegated coding and workflow-router loops: mode routers, explicit artifact lists, delegate flag files, run logs, and post-run diff supervision can make subtask execution reviewable; they do not authorize delegate launch, HDL tool validation, source mutation, commit/push, or output acceptance without a scoped activation review.
- Media and style production loops: timing ledgers, human script review, prompt/outline confirmation gates, style locks, image-only packaging, and per-slide artifact containers can make creative work stateful; they do not prove rendering, generation, PPTX/zip assembly, preference learning, rights safety, or final visual quality.
- Visual-diff feedback loops: recon artifacts, exact style tokens, lens-specific section specs, pixel-diff verdicts, red-diff artifacts, targeted patch rounds, and plateau stops can make visual reproduction loops auditable. They do not prove the crawler, extraction, build, comparison, or patch loop works until replayed in a controlled fixture.
- Review-and-guidance maintenance loops: a repo can route changes through a validation matrix, shared review policy, fresh-context reviewer skill, and regenerated command guidance when source commands change. This is useful loop shape, but generated docs, reviewer findings, UI checks, and validation scope remain unproven until exercised on a bounded change.
- Delivery-queue loops: a send-or-publish skill can expose synchronous result mode, asynchronous queue mode, status/log follow-up, and exact target validation as state surfaces. Queue acceptance is not delivery, publication, upload, account safety, or contact correctness proof.

Neutral mechanism: a recurring coding loop is only a candidate when role, state file, per-iteration context reset, bounded budget, verifier gate, completion predicate, and failure receipt are all visible. Implementation language, wrapper choice, and advertised maturity are incidental.

## Verification Needed

- Pilot on one CI triage or dependency-bump workflow.
- Compare single-shot baseline vs looped execution.
- Measure accepted-change cost, reject rate, token burn, review time, and rollback behavior.
- Confirm the hard gate catches bad output before any writeback.
- Confirm stop conditions, resume target, and missed-run behavior.
- Confirm the loop cannot claim completion just because it paused or timed out.
- Confirm whether branch selection, keep-or-revert logic, and shared-state reuse are explicit or only rhetorical.
- Confirm that lock managers, tracker-state changes, daemon restarts, workflow YAML, and finalization commands are replayed in bounded fixtures before any loop is treated as safe or complete.
- Confirm that JSON-pack workflow gates actually preserve ID continuity, write diagnostic artifacts as claimed, route `FAIL` states to bounded replans, and keep user-interaction surfaces separate from automated planning phases.
- Confirm that design evolve loops, workflow routers, delegate run logs, graph dashboards, timing ledgers, and style-lock gates are replayed on bounded fixtures before they are treated as useful or safe loops.

## Placement Candidates

- `playbooks/operations-execution-handoff.md`: for the handoff packet and next-step queue.
- `laws/surface-agent-orchestration.md`: for liveness, delegation, worktree, and shared-state boundaries.
- `laws/surface-evidence-eval.md`: for gates, baselines, and benchmark claims.
- `laws/surface-install-supply-chain.md`: for skills, connectors, and generated helpers that enter the loop.
- `adapters/codex/`: for Codex-specific loop wiring and receipts.

## Promotion Questions

- Does this become a reusable playbook for recurring work, or stay as a scoped review candidate?
- Which loop primitives are stable enough to become Tianlu guidance?
- Can evals distinguish a useful loop from a costly busy loop?
- Where should the liveness contract live so it survives future windows?
