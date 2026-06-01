# Playbook: Project Workstream Status Synthesis

Status: seed draft

Scope: project-status synthesis. This playbook helps an agent turn mixed task, brief, experiment, issue, commit, note, and evidence signals into a reviewable project status snapshot. It does not run a project management system, dispatch tasks, assign owners, or mutate trackers.

## Purpose

Help an agent produce a task/status inventory, workstream map, done-evidence checklist, stale or unknown list, next checkpoint plan, handoff draft, and candidate task packets.

## Inputs

- Task sources such as backlog items, briefs, experiment results, notes, issues, commits, comments, handoff notes, or meeting notes.
- Current work context such as goal, milestone, workstream, deadline window, blocker, dependency, or decision owner if known.
- Evidence available for completion, blockers, or readiness.
- Known project-specific status vocabulary, if the user provided it.
- Constraints around privacy, permissions, and account or system access.

## Procedure

1. Define the snapshot boundary.
   - State which workstreams, time window, and source types are in scope.
   - Mark anything that is stale, unverified, outside the window, or missing.

2. Inventory the work.
   - List tasks, experiments, decisions, blockers, and open questions.
   - Record source pointers for each item.

3. Classify current state.
   - Label each item using evidence-based states such as done, blocked, stale, unknown, needs-review, or in-progress.
   - Avoid assignment, scheduling, or dispatch language.

4. Map dependencies and risks.
   - Show which items depend on others, what is blocking progress, and what evidence is missing.
   - Separate fact from assumption.

5. Build the review package.
   - Produce a handoff draft, status summary, next checkpoint plan, and candidate task packets.
   - Keep live writes and live system changes out of scope.

6. Surface decisions needed.
   - Group open questions by decision owner, priority, urgency, and evidence gap.
   - Mark anything that requires human approval before action.

## Outputs

- Task/status inventory.
- Workstream map.
- Done-evidence checklist.
- Stale, unknown, and needs-review list.
- Next checkpoint plan.
- Handoff or status update draft.
- Candidate task packets.

## Quality Signals

- Every current-state claim has a source pointer or is marked as missing evidence.
- The snapshot distinguishes evidence from assertion.
- Open items are visible without pretending to assign or execute them.
- The output is useful for review without becoming a project tracker.

## Human Checkpoints

- Priority, deadline, scope, owner assignment, or resource allocation.
- Any live write to issue trackers, project-management tools, workspace documents, CRM, calendars, message channels, or other systems of record.
- Any change to project-specific workflow, team process, or status vocabulary.

## Composable With

- `feedback-to-backlog-operations.md` when incoming feedback should become candidate tasks.
- `research-to-brief-synthesis.md` when the status snapshot should be grounded in research findings or a decision brief.
- `experiment-design-iteration.md` when experiment results need to be folded into a broader workstream view.
- `../laws/surface-agent-orchestration.md` for delegation, handoff, queues, and coordination state.
- `../laws/surface-evidence-eval.md` for done evidence and independent verification.

## Evidence

Source signal: cross-domain workflow review found a recurring need to synthesize current status from mixed sources without turning the agent into a task dispatcher or tracker.

Validation state: seed draft. Needs replay on real project review, team handoff, experiment coordination, and workstream audit tasks before promotion.

Known failures:

- Treating summary text as evidence of completion.
- Assigning owners or deadlines as if the playbook were a management system.
- Hiding uncertainty behind a clean status table.
- Writing to live trackers or schedules without explicit approval.
