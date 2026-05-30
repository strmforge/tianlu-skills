# Agent Orchestration Laws

Scope: runtime-neutral

Status: seed

## Law: Work Units Need Boundaries

Trigger:

- Delegating, splitting, resuming, or coordinating agent work.

Mechanism:

- Define objective, scope, inputs, acceptance criteria, validation plan, tool boundaries, owner, and done evidence before treating the work as agent-ready.

Failure Modes:

- Wrong task continuation.
- Conflicting parallel edits.
- Missing acceptance criteria.
- Unreviewable handoff.

Boundary:

- This law does not require a specific runtime, thread tool, or file layout. Adapters may translate it into local task packets, goals, tickets, prompts, or planning files.
