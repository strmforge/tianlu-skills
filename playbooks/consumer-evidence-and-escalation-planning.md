# Playbook: Consumer Evidence And Escalation Planning

Status: seed draft

Scope: consumer-evidence-escalation-neutral. This playbook helps an agent turn consumer, patient-billing, subscription, credit-report, contractor, school-service, warranty, post-purchase, or service-dispute signals into reviewable evidence and escalation artifacts. It is not tied to one jurisdiction, business, platform, agency, insurer, school, contractor board, complaint portal, or dispute process.

## Purpose

Help an agent produce useful evidence and escalation work products: issue intake snapshots, evidence inventories, event ledgers, communication logs, record-request lists, written communication draft packets, timing trackers, escalation option maps, official-source lookup queues, stop-line questions, and handoff packets.

This playbook supports organization, drafting, and review. It does not file complaints, send letters, call providers, initiate chargebacks, make payments, submit forms, mutate portals, decide legal, medical, financial, credit, insurance, education, construction, warranty, or compliance conclusions, or promise outcomes.

## Inputs

- User-supplied issue description, desired outcome, affected product, service, bill, account, subscription, credit item, contractor work, school matter, warranty claim, or post-purchase dispute.
- Records supplied by the user, such as invoices, bills, explanations of benefits, receipts, contracts, estimates, screenshots, emails, chats, letters, policies, photos, tracking records, account notices, credit report excerpts, school communications, or prior complaint references.
- Relevant dates, deadlines, notices, promised response windows, cancellation windows, billing dates, shipment dates, service dates, appointment dates, dispute dates, and prior follow-up dates.
- Known business, platform, provider, credit-data supplier, insurer, school, contractor, regulator, ombuds, complaint portal, or official-source surfaces supplied by the user.
- Privacy, minor, health, financial, identity, education, account, payment, address, phone, SSN, insurance, credit, portal, or data-retention boundaries supplied by the user.
- Domain owner or reviewer role when known, such as consumer, caregiver, parent, finance owner, attorney, clinician, insurance/billing staff, school advocate, contractor expert, regulator, or support lead.

## Procedure

1. Define the issue boundary.
   - Name the issue type, parties, product or service, account or document class, date range, desired output, intended reviewer, jurisdiction or domain variables if known, and non-goals.
   - Separate evidence organization and draft preparation from filing, sending, portal writes, payments, chargebacks, legal notices, medical decisions, credit decisions, insurance decisions, education decisions, contractor decisions, or official submissions.

2. Build the intake snapshot.
   - Summarize user-stated facts, source-document facts, dates, amounts, account references, requested outcome, prior responses, and current blocker.
   - Mark assumptions, missing confirmations, contradictions, stale evidence, sensitive-data surfaces, system surfaces, and human review questions.

3. Inventory records and request gaps.
   - Build a record inventory with source, date, author, document type, short description, evidence value, shareability, and redaction needs.
   - Create a missing-record request list for itemized bills, explanations of benefits, contract terms, cancellation records, proof of shipment, service logs, credit report details, records from an entity that supplied credit-report data, prior written notices, school records, repair records, warranty terms, or official policy pages.
   - Prefer source pointers, document ids, excerpts, hashes, or user-held references over retaining full sensitive records.

4. Normalize the timeline and evidence.
   - Create an event ledger with dates, source records, user actions, other-party actions, responses, missed responses, open gaps, and next check date.
   - Build a claim/request/response matrix that separates what the user says, what records show, what the other party claims, what official or policy sources need checking, and what remains unresolved.

5. Draft written communication packets.
   - Produce unsent draft language for evidence requests, correction requests, status requests, cancellation confirmation requests, billing clarification, contractor scope questions, school process questions, or escalation notices.
   - Label every draft as `DRAFT`, use verifiable facts and neutral wording, include attachment lists, and keep commitments, accusations, legal claims, medical claims, credit conclusions, and compliance conclusions out unless supplied by an authorized source.

6. Build the timing tracker.
   - Track known response windows, cancellation windows, dispute windows, billing cycles, shipment or service windows, appointment or school meeting dates, renewal dates, and follow-up checkpoints.
   - Mark each timing item as user-supplied, source-documented, official-source-needed, or domain-owner review needed. Do not calculate legal, credit, insurance, education, or regulatory deadlines as final conclusions.

7. Map escalation options.
   - Map the likely path from frontline support, billing office, platform, provider, credit-data supplier, contractor, school, internal appeal, supervisor, ombuds, official complaint portal, regulator, small-claims or formal process, or professional review.
   - Keep the map as options for human review, not a recommendation to file, sue, appeal, charge back, contact authorities, stop payment, or use any specific professional.
   - Add an official-source lookup queue for federal, state, local, agency, school, board, platform, or policy pages that must be checked before external use.

8. Package the handoff.
   - Produce a handoff packet with intake snapshot, evidence inventory, timeline, communication log, missing evidence, draft packet, timing tracker, escalation map, stop-line questions, approval needs, and follow-up evidence checklist.
   - Route executable actions to a human owner or operations handoff before any send, filing, payment, chargeback, portal write, account change, complaint submission, or system-of-record mutation.

## Outputs

- Consumer issue intake snapshot.
- Source and record request list.
- Evidence inventory.
- Timeline or event ledger.
- Communication log.
- Claim, request, and response matrix.
- Missing-evidence and contradiction table.
- Written communication draft packet.
- Deadline or timing tracker.
- Escalation options map.
- Official-source and contact lookup queue.
- Stop-line and professional-review question list.
- Handoff packet.
- Follow-up evidence capture checklist.

## Quality Signals

- The output helps a consumer, caregiver, parent, operator, advocate, reviewer, or domain owner understand the issue without pretending to decide it.
- User-stated facts, source documents, timestamps, assumptions, missing confirmations, contradictions, sensitive-data surfaces, and system surfaces are separated.
- Drafts are specific enough to review or adapt, but clearly unsent and marked as drafts.
- The escalation path starts with evidence and internal resolution where appropriate, not with a premature external complaint or formal process.
- Official sources, policies, and contact channels are queued for checking rather than invented.
- The packet preserves enough source pointers for review while minimizing sensitive data retention.
- The plan includes post-use evidence to capture: sent copy, confirmation number, response date, case id, complaint id, tracking id, refund id, dispute id, meeting notes, or reviewer response.

## Human Checkpoints

- Filing complaints, submitting forms, sending letters or emails, making calls, opening chats, initiating chargebacks, stopping payment, making payments, canceling services, updating accounts, uploading documents, signing PDFs, or mutating portals.
- Legal, medical, financial, credit, insurance, education, construction, tax, warranty, consumer-protection, compliance, liability, fraud, harassment, discrimination, privacy, accessibility, safety, or regulatory conclusions.
- Diagnosis, treatment, medical necessity, test interpretation, coverage promise, credit repair strategy, debt strategy, liability allocation, contractor selection, school eligibility, jurisdiction-specific special-education or accommodation service decision, or official deadline conclusion.
- Retaining or sharing sensitive health, financial, identity, credit, education, minor, address, phone, account, payment, insurance, contractor, school, or portal data.
- Recommending a specific lawyer, doctor, financial advisor, debt repair service, contractor, advocate, claims company, paid representative, or enforcement path.
- Treating a complete evidence packet as permission to act externally.

## Composable With

- `draft-and-evidence-packet.md` when communication drafts need claim-evidence tables, approval packets, and non-conclusion notices.
- `regulated-document-evidence-map.md` when bills, EOBs, contracts, credit reports, school records, official notices, or policies need source maps, gap tables, and reviewer question queues.
- `medical-care-coordination.md` when medical billing, appointment, referral, patient-portal, or care coordination signals need non-clinical organization.
- `after-sales-returns-and-rma-operations-planning.md` when post-purchase returns, refunds, warranty, damaged shipment, chargeback, or RMA signals need operator review artifacts.
- `field-service-and-mobile-service-operations-planning.md` when home service, repair, mobile service, proof-of-service, quotes, invoices, or contractor-like field work needs operational evidence.
- `rental-housing-operations.md` when rental, maintenance, deposit, tenant communication, or housing-service signals need operations packets without legal conclusions.
- `finance-operations-review.md` when payment, billing, refund, receivable, payable, or anomaly records need finance-owner review.
- `customer-support-quality-review.md` when business-side response quality, macro consistency, or support escalation timing needs QA review.
- `operations-execution-handoff.md` when the evidence packet should become an approval sheet, action queue, blocker log, and evidence-capture checklist before human execution.
- `../laws/surface-browser-runtime.md` when working in logged-in portals, accounts, complaint sites, support consoles, patient portals, insurer portals, credit portals, school portals, or contractor-board sites.
- `../laws/surface-mcp-tools-auth.md` for APIs, account actions, external sends, private data, privileged invocations, payments, complaint submissions, forms, uploads, or system writes.
- `../laws/surface-evidence-eval.md` for official-source claims, timing claims, improvement claims, and method promotion.

## Evidence

Source signal: broad domain review found repeated need for a cross-industry evidence packet before consumers, caregivers, parents, or operators escalate billing, subscription, credit-report, contractor, school-process, warranty, or service disputes. Official-source sampling across consumer, credit, healthcare, education, and trade-agency guidance confirmed that useful preparation often depends on records, timelines, written requests, official channels, and review boundaries.

Validation state: seed draft. Needs replay against medical bill and explanation-of-benefits cases, subscription cancellation and renewal disputes, credit-report error disputes, contractor estimate or scope disputes, special-education or accommodation process evidence requests, warranty/repair disputes, and marketplace after-sales disputes before promotion.

Known failures:

- Treating the evidence packet as permission to file, send, call, submit, pay, charge back, cancel, upload, or mutate account state.
- Producing legal, medical, financial, credit, insurance, education, construction, warranty, compliance, or regulatory conclusions while calling them evidence organization.
- Inventing official channels, contact paths, deadlines, complaint standards, or entitlement rules without primary-source review.
- Retaining raw sensitive records when source pointers, excerpts, redacted attachments, hashes, or user-held references would be enough.
- Escalating too early and making the user look unprepared, accusatory, or inconsistent when the evidence gaps are still unresolved.
- Hiding contradictions, missing records, unsupported claims, stale dates, or jurisdiction-specific uncertainty behind a polished draft.
