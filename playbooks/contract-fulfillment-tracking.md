# Playbook: Contract Fulfillment Tracking

Status: seed draft

Scope: high-constraint operational tracking. This playbook helps an agent track contract obligations, deliverables, milestones, evidence receipts, exceptions, and escalation points. It does not interpret contract law, decide breach, determine waiver, confirm legal effect, or make external commitments.

## Purpose

Help an agent produce a contract/source inventory, obligation ledger, deliverable and milestone tracker, evidence receipt log, gap and ambiguity table, escalation queue, reviewer question list, internal status packet, and backlog task packets.

## Inputs

- Contract, statement of work, order form, amendment, schedule, policy, SLA, notice, or related supporting document.
- Source metadata such as version, date, party, scope, owner, and jurisdiction if known.
- Obligation context such as deliverable, milestone, acceptance condition, payment condition, notice window, renewal window, or termination window.
- Evidence sources such as email, ticket, file, approval, receipt, meeting note, or system record.
- Known domain boundaries and approval requirements.

## Procedure

1. Define the tracking scope.
   - State which agreements, versions, obligations, windows, and deliverables are in scope.
   - Mark anything stale, unknown, or out of scope.

2. Build the obligation ledger.
   - Record each obligation, source pointer, responsible party, internal owner candidate, trigger, deadline/window, dependency, required evidence, and status.

3. Track deliverables and milestones.
   - Record what is expected, what has been received, what remains, and which evidence proves it.
   - Keep operational status separate from legal conclusion.

4. Surface gaps and ambiguities.
   - Identify missing evidence, conflicting versions, ambiguous language, date-window issues, notice questions, and escalation points.
   - Do not interpret these into legal findings.

5. Build the review queue.
   - Group questions for legal, commercial, finance, delivery, or policy owners.
   - Prepare an internal status packet or meeting agenda.

6. Package handoff and follow-up.
   - Produce backlog task packets and draft internal status materials.
   - If external communication is needed, compose with `draft-and-evidence-packet.md`.

## Outputs

- Contract/source inventory.
- Obligation ledger.
- Deliverable and milestone tracker.
- Evidence receipt ledger.
- Gap, conflict, and ambiguity table.
- Exception and escalation queue.
- Reviewer question list.
- Internal status packet / meeting agenda.
- Backlog task packets.

## Quality Signals

- Every obligation has a source pointer and current operational status.
- Evidence receipts are visible and traceable.
- Ambiguities are surfaced instead of silently resolved.
- The output helps coordination without pretending to be legal interpretation.

## Human Checkpoints

- Whether a clause is legally binding or what it means.
- Whether a breach, waiver, default, or acceptance has occurred.
- Whether to notify, cure, extend, terminate, invoice, pay, dispute, or escalate.
- Any external send, contract modification, or system write with legal effect.

## Composable With

- `regulated-document-evidence-map.md` when contract text must first become a requirement/evidence map.
- `draft-and-evidence-packet.md` when notices, status updates, or escalation drafts are needed.
- `feedback-to-backlog-operations.md` when delivery blockers or client feedback should become backlog items.
- `../laws/surface-evidence-eval.md` for source evidence and verification.
- `../laws/surface-browser-runtime.md` for logged-in contract or document portals.
- `../laws/surface-mcp-tools-auth.md` for tools, APIs, private data, or external sends.

## Evidence

Source signal: contract operations, fulfillment tracking practices, and workflow review showed a recurring need to track obligations and evidence without making legal conclusions.

Validation state: seed draft. Needs replay on real contract tracking, delivery follow-up, and milestone review tasks before promotion.

Known failures:

- Treating operational status as legal conclusion.
- Missing version, date, or notice-window logic.
- Turning reminders into commitments.
- Writing external notices or system records without approval.
