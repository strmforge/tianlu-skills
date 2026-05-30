# Agent Orchestration Laws

Scope: runtime-neutral

Status: seed

## Law: Work Units Need Boundaries

Trigger:

- Delegating, splitting, resuming, or coordinating agent work.
- Launching parallel agents, subagents, async workers, or human-agent handoffs.
- Using threads, branches, worktrees, tickets, task files, queues, or dashboards as coordination state.

Mechanism:

- Define objective, scope, inputs, acceptance criteria, validation plan, tool boundaries, owner, and done evidence before treating the work as agent-ready.
- Record decomposition, dependencies, ordering, merge owner, and parallel-safety constraints.
- Bind coordination state to concrete artifacts: thread or task id, title, objective, status, branch or worktree when applicable, owner, artifact refs, cleanup, merge, and close state.
- Give each delegated worker an explicit contract: allowed tools, forbidden actions, data boundary, output schema, acceptance check, and writeback boundary.
- For async or multi-agent work, define message schema, handoff markers, termination conditions, shared state rules, conflict handling, and audit trail.
- For shared state, define owners, allowed readers and writers, merge semantics, freshness rules, idempotency keys, and rollback for partial writes.

Failure Modes:

- Wrong task continuation.
- Conflicting parallel edits.
- Missing acceptance criteria.
- Unreviewable handoff.
- Stale shared state.
- Context leakage across workers.
- Treating subagents as permission boundaries.
- Treating thread or worktree organization as cosmetic UI instead of persistent coordination state.

Boundary:

- This law does not require a specific runtime, thread tool, or file layout. Adapters may translate it into local task packets, goals, tickets, prompts, or planning files.
- A worktree, thread, queue, or side conversation is not a security sandbox by itself.
- Returned worker output is evidence, not authority; final synthesis and permission checks remain with the coordinator unless explicitly delegated.

## Law: Roles Need Contracts

Trigger:

- A workflow proposes named roles such as architect, implementer, reviewer, critic, planner, or specialist agents.

Mechanism:

- Use roles only when they change context, tools, permissions, artifact expectations, or validation.
- Define what each role produces, what evidence accepts it, and who owns merge/conflict resolution.

Failure Modes:

- Role names become theater instead of structure.
- Multiple agents duplicate work or silently merge contradictions.

Boundary:

- If a role does not change inputs, outputs, tools, or validation, keep it as a checklist section rather than a separate worker.
