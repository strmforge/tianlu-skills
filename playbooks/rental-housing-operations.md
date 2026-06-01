# Playbook: Rental Housing Operations Planning

Status: seed draft

Scope: rental-housing-operations-neutral. This playbook helps an agent turn rental housing, property, unit, applicant, tenant, maintenance, vendor, rent, move-in, move-out, and handoff signals into reviewable rental operations artifacts. It is not tied to one property-management system, landlord type, tenant-screening provider, payment rail, housing market, lease form, country, state, municipality, building type, or management model.

## Purpose

Help an agent produce useful rental housing operations work products: rental operations briefs, property or unit status snapshots, tour and application checklists, application evidence checklists, fee and disclosure question lists, tenant-screening evidence packets, fair-housing and accommodation flag lists, tenant communication draft packets, maintenance intake summaries, vendor comparison tables, rent reminder draft queues, move-in and move-out checklists, issue logs, follow-up trackers, and rental operations handoff packets.

This playbook supports planning, comparison, drafting, and handoff. It does not approve or reject applicants, screen tenants, collect rent, execute payments, sign leases, create legal notices, decide evictions, dispatch vendors, send tenant or vendor messages, mutate property systems, provide legal advice, or retain sensitive applicant, tenant, household, disability, health, identity, payment, lease, or screening data.

## Inputs

- Property, building, unit, portfolio, landlord, property manager, housing provider, or tenant-service objective.
- Unit status, availability window, tour notes, application workflow notes, fee disclosures, tenant-screening summary, lease or renewal milestones, maintenance tickets, vendor notes, rent ledger summaries, move-in or move-out tasks, complaint notes, or handoff records supplied by the user.
- Applicant, tenant, household, accessibility, accommodation, language, communication, urgency, payment, privacy, and documentation constraints described without unnecessary sensitive details.
- Source material such as official fair-housing guidance, tenant-screening guidance, consumer protection guidance, local housing agency pages, lease or property policy excerpts, vendor terms, platform terms, or user-provided notices and messages.
- External system surfaces described at a high level, such as property-management systems, leasing portals, tenant-screening tools, payment tools, maintenance ticketing systems, vendor portals, email, SMS, calendar, accounting, document storage, or CRM tools.

## Procedure

1. Define the rental operations boundary.
   - Name the property or unit scope, actor, artifact type, time window, source inputs, decision owner, and non-goals.
   - Separate operations drafts from applicant approval, tenant screening, legal notices, rent collection, payments, lease execution, evictions, vendor dispatch, account actions, and system-of-record writes.

2. Normalize the operating facts.
   - Convert free-form material into property, unit, applicant, tenant, lease, maintenance, vendor, payment, timeline, communication, and follow-up fields.
   - Mark local-law, fair-housing, tenant-screening, accommodation, fee, deposit, notice, eviction, payment, refund, and lease questions as `needs official or domain-owner review`.
   - Use placeholders for sensitive data instead of collecting identity numbers, Social Security numbers, payment details, bank details, background-check reports, disability or health details, household composition details, full addresses, account credentials, or one-time codes.

3. Build the rental operations snapshot.
   - Produce a property or unit status snapshot with current facts, unknowns, source timestamps, pending actions, issue status, and owner questions.
   - Separate user-supplied facts, source facts, estimates, assumptions, stale records, missing confirmations, and system surfaces.

4. Prepare tour, application, and screening artifacts.
   - Produce a tour checklist, application evidence checklist, fee and disclosure question list, screening evidence packet, fair-housing flag list, accommodation question list, and applicant communication draft packet.
   - Keep applicant approval, rejection, ranking, screening criteria decisions, protected-trait inferences, adverse-action decisions, and legal notice wording as human checkpoints.

5. Prepare tenant communication and maintenance artifacts.
   - Produce tenant FAQ drafts, maintenance intake summaries, triage notes, missing-information requests, vendor comparison tables, vendor coordination drafts, appointment-window options, issue logs, and follow-up trackers.
   - Do not dispatch vendors, guarantee repair timing, confirm costs, promise rent credits, send messages, or close maintenance tickets as completed.

6. Prepare rent, renewal, and move-cycle review artifacts.
   - Produce rent reminder draft queues, ledger question lists, renewal handoff question lists, move-in checklists, move-out checklists, deposit evidence checklists, inspection issue lists, and approval-needed sheets.
   - Do not collect rent, change amounts, change due dates, add fees, waive fees, process refunds, decide deposit deductions, sign renewals, terminate leases, or interpret lease rights.

7. Package the handoff.
   - Produce a rental operations handoff packet with current facts, drafts, open questions, approval needs, forbidden actions, source checks, sensitive-data surfaces, system surfaces, and evidence to collect after human execution.
   - Route executable actions to an operations handoff packet when they touch messages, notices, fees, deposits, rent, payments, leases, screening tools, tenant portals, maintenance systems, vendor systems, calendars, email, SMS, accounting, CRM, or property-management systems.

## Outputs

- Rental operations brief.
- Property or unit status snapshot.
- Tour and application checklist.
- Application evidence checklist.
- Fee and disclosure question list.
- Tenant-screening evidence packet.
- Fair-housing and accommodation flag list.
- Tenant communication draft packet.
- Maintenance intake and triage summary.
- Vendor comparison or coordination draft.
- Rent reminder draft queue.
- Move-in and move-out checklist.
- Lease renewal or handoff question list.
- Issue log and follow-up tracker.
- Rental operations handoff packet.

## Quality Signals

- The artifact helps a renter, landlord, property manager, housing provider, tenant-service coordinator, or operations owner review the situation without pretending to be the legal, screening, payment, or system authority.
- Property, unit, applicant, tenant, lease, maintenance, vendor, rent, and timeline facts are separated from assumptions and missing confirmations.
- Fair-housing, accommodation, tenant-screening, fee, deposit, notice, eviction, lease, and payment issues are flagged for official-source or domain-owner review rather than resolved by the agent.
- Communication drafts are clearly marked as drafts and do not send, threaten, promise, or commit.
- The handoff names approval needs, stop conditions, data-minimization choices, and evidence to capture after human execution.

## Human Checkpoints

- Applicant approval, rejection, ranking, tenant screening, adverse action, housing eligibility, income qualification, credit, criminal-record, eviction-history, household, disability, accommodation, service animal, source-of-income, voucher, familial-status, or protected-trait decisions.
- Application fee, deposit, rent, late fee, refund, rent credit, waiver, payment, chargeback, collection, accounting, ledger, invoice, payout, or money movement.
- Lease offer, lease signing, renewal, termination, default, breach, notice, eviction, pay-or-quit, legal complaint, housing-agency complaint, or tenant-rights interpretation.
- Tenant, applicant, vendor, landlord, property-manager, housing-provider, agency, or platform sends.
- Property-management, leasing, tenant-screening, payment, accounting, maintenance, vendor, email, SMS, calendar, CRM, document, identity, access-control, or system-of-record writes.
- Maintenance dispatch, emergency classification, habitability conclusion, safety conclusion, repair authorization, vendor selection, cost approval, completion confirmation, warranty decision, or compensation commitment.
- Identity number, Social Security number, passport, driver license, bank account, payment card, income document, employment document, credit report, background-check report, address, household details, child or family status, disability, health, accommodation, lease, rent ledger, access code, account credential, or one-time-code retention, export, sharing, or long-term storage.

## Composable With

- `local-store-operations.md` when a property office, branch, front desk, or field team needs opening, shift, vendor, or issue-handoff patterns.
- `customer-support-quality-review.md` when tenant, applicant, vendor, or resident conversations need quality review without sending replies or judging employees.
- `draft-and-evidence-packet.md` for tenant, applicant, vendor, landlord, or property-manager messages that need reviewable claim-evidence tables and approval packets.
- `regulated-document-evidence-map.md` when lease, policy, notice, screening, fee, deposit, fair-housing, accommodation, vendor, or local housing documents need source indexes, gap tables, conflict tables, and reviewer questions.
- `data-analysis-decision-support.md` when unit status, rent ledger summaries, maintenance timing, response metrics, vacancy, or portfolio signals need descriptive analysis without domain decisions.
- `operations-execution-handoff.md` when rental artifacts should become an approval sheet, owner map, blocker log, and evidence-capture checklist before external action.
- `../laws/surface-browser-runtime.md` when working in logged-in property-management, leasing, screening, payment, maintenance, vendor, email, SMS, calendar, CRM, or document portals.
- `../laws/surface-mcp-tools-auth.md` for private data, account actions, external sends, payments, screening tools, identity, vendor tools, or system writes.
- `../laws/surface-evidence-eval.md` for rental claims, source recency, official verification, regulated boundaries, and method promotion.

## Evidence

Source signal: broad external-feed and domain scout review found recurring rental operations signals around rental applications, application fees, fair-housing workshops, tenant communication, leasing workflows, maintenance coordination, vendor follow-up, rent reminders, and property-management automation. Official-source review of fair-housing, tenant-screening, rental-scam, consumer-protection, and housing-complaint source types confirmed that useful rental operations planning is distinct from applicant decisions, legal conclusions, payment actions, eviction or notice drafting, account writes, and sensitive applicant or tenant data retention.

Validation state: seed draft. Needs replay against real rental application intake, apartment tour scheduling, tenant-screening summary, accommodation request routing, maintenance-ticket triage, vendor comparison, rent reminder, move-in, move-out, deposit dispute, and renewal handoff cases before promotion.

Known failures:

- Treating an operations packet as permission to approve, reject, rank, screen, charge, collect, refund, send, dispatch, sign, terminate, evict, or write systems.
- Inventing local fee caps, notice rules, fair-housing conclusions, screening rules, deposit rules, rent balances, repair obligations, or legal rights from weak data.
- Letting a polished communication draft become a threat, legal notice, promise, rent concession, repair commitment, or vendor authorization.
- Collecting or retaining identity, payment, income, screening, disability, health, household, child, family, address, account, access, lease, or rent-ledger data unnecessarily.
- Hiding local-law and domain-owner uncertainty behind a tidy rental operations checklist.
