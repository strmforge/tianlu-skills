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

Neutral mechanism: a recurring coding loop is only a candidate when role, state file, per-iteration context reset, bounded budget, verifier gate, completion predicate, and failure receipt are all visible. Implementation language, wrapper choice, and advertised maturity are incidental.

## Verification Needed

- Pilot on one CI triage or dependency-bump workflow.
- Compare single-shot baseline vs looped execution.
- Measure accepted-change cost, reject rate, token burn, review time, and rollback behavior.
- Confirm the hard gate catches bad output before any writeback.
- Confirm stop conditions, resume target, and missed-run behavior.
- Confirm the loop cannot claim completion just because it paused or timed out.
- Confirm whether branch selection, keep-or-revert logic, and shared-state reuse are explicit or only rhetorical.

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
