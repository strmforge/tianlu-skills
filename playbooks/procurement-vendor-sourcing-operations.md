# Playbook: Procurement And Vendor Sourcing Operations Planning

Status: seed draft

Scope: procurement-vendor-sourcing-operations-neutral. This playbook helps an agent turn procurement, vendor sourcing, supplier discovery, requirements, RFI, RFQ, RFP, quote, bid, purchase request, purchase order, invoice, receipt, supplier risk, vendor onboarding, reorder, and sourcing review signals into reviewable procurement operations artifacts. It is not tied to one ERP, SRM, CLM, marketplace, approval system, payment rail, supplier category, jurisdiction, industry, organization size, or public/private procurement model.

## Purpose

Help an agent produce useful procurement operations work products: sourcing objective briefs, requirements matrices, vendor discovery shortlists, RFI/RFQ/RFP question packets, quote and bid comparison tables, supplier risk and due-diligence question lists, budget and approval question lists, purchase request packets, PO/invoice/receipt/three-way-match handoff notes, vendor onboarding checklists, reorder and lead-time notes, issue logs, escalation plans, and procurement operations handoff packets.

This playbook supports planning, comparison, drafting, evidence organization, and handoff. It does not approve vendors, reject vendors, rank vendors as a final decision, issue purchase orders, place orders, pay invoices, approve invoices, approve budgets, change vendor master data, commit contract terms, decide supplier eligibility, make sanctions, compliance, tax, accounting, legal, insurance, security, privacy, financial, or audit conclusions, write ERP/SRM/CLM/procurement/accounting/vendor systems, or retain sensitive vendor bank, tax, identity, credential, contract, pricing, account, or security data.

## Inputs

- Business need, category, item or service description, quantity, quality threshold, delivery window, budget range, location, service level, warranty, support, implementation, training, or acceptance criteria.
- Existing supplier pool, supplier notes, vendor performance records, public supplier information, category benchmarks, market notes, lead-time notes, inventory notes, reorder signals, or supply disruption signals.
- Draft RFI, RFQ, RFP, statement of work, bill of materials, specification sheet, quote, bid, proposal, supplier response, approval note, or purchase request.
- Finance, legal, security, privacy, compliance, insurance, tax, risk, operations, warehouse, receiving, accounts payable, and business-owner constraints supplied by the user.
- Source material such as organizational procurement policy, approved-supplier rules, public procurement guidance, supply-chain risk guidance, service-provider data-security guidance, source-selection criteria, vendor-responsibility criteria, contract templates, onboarding checklists, and domain-owner notes.
- External system surfaces described at a high level, such as ERP, SRM, CLM, procurement portals, supplier portals, accounting tools, inventory tools, ticketing tools, email, spreadsheets, dashboards, and approval workflows.

## Procedure

1. Define the procurement operations boundary.
   - Name the procurement phase, category, buyer, requester, approval owner, supplier set, source inputs, time window, artifact type, decision owner, and non-goals.
   - Separate operations drafts from vendor approval, supplier rejection, final ranking, purchase order issuance, order placement, invoice approval, payment, budget approval, contract commitment, legal/compliance/security conclusions, and system-of-record writes.

2. Normalize the requirement.
   - Convert free-form need statements into requirement, quantity, quality, delivery, budget, acceptance, service-level, warranty, support, implementation, inventory, receiving, and renewal fields.
   - Separate must-have requirements from preferences, assumptions, estimates, stale records, and missing confirmations.
   - Mark legal, tax, sanctions, insurance, safety, privacy, security, accessibility, labor, import/export, sector-specific, public-procurement, or regulated claims as `needs official or domain-owner review`.

3. Build the sourcing objective brief.
   - Produce a brief with business purpose, category, required outcome, constraints, current facts, unknowns, approval needs, comparison criteria, source timestamps, and forbidden actions.
   - State whether the work is discovery, RFQ/RFP drafting, bid comparison, purchase request preparation, vendor onboarding preparation, reorder planning, or post-sourcing review.

4. Prepare vendor discovery and supplier shortlist artifacts.
   - Create a vendor discovery ledger with source pointers, supplier capabilities, location, category fit, known constraints, public records, user-supplied history, and uncertainty notes.
   - Produce a shortlist for human review rather than a final supplier decision.
   - Do not add vendors to systems, contact suppliers, invite bidders, blacklist suppliers, or infer eligibility from weak or unverifiable data.

5. Draft RFI/RFQ/RFP and response templates.
   - Produce question packets, requirement matrices, response templates, evaluation-factor drafts, deadline and clarification question lists, and missing-input lists.
   - Keep buyer, legal, finance, security, privacy, compliance, and domain-owner review points visible before any external send.
   - Do not promise terms, set binding deadlines, add unreviewed contract language, or send platform/email messages without scoped approval.

6. Compare quotes, bids, and proposals.
   - Build a comparison table for unit price, total cost, delivery, quality, service levels, implementation effort, switching cost, warranty, support, payment terms, risk flags, source evidence, and missing data.
   - Use review labels such as `needs buyer review`, `needs finance review`, `needs legal review`, `needs security review`, `needs compliance review`, or `needs receiving review`.
   - Do not choose a winning supplier, issue award notices, commit pricing, negotiate terms, or hide missing evidence behind a tidy score.

7. Prepare supplier risk and due-diligence question lists.
   - Produce question lists for capacity, financial resilience, delivery risk, quality assurance, security, privacy, data handling, subcontractors, insurance, sanctions or eligibility screening, conflicts of interest, continuity, safety, sustainability, and incident notification.
   - Treat screening results, public records, watchlist hits, insurance notes, security questionnaires, and compliance claims as review inputs.
   - Do not release or reject suppliers, decide compliance, decide sanctions status, decide insurance sufficiency, approve security posture, or store sensitive vendor data outside the approved review path.

8. Package purchase request and approval materials.
   - Produce a purchase request packet with requirement summary, vendor comparison, budget questions, approval owners, open risks, source pointers, and decision options.
   - Keep payment terms, tax handling, accounting categories, budget movement, invoice handling, chargeback, refund, and money movement out of agent authority.

9. Prepare PO, receipt, invoice, and three-way-match handoff notes.
   - Produce draft handoff questions for PO creation, receiving evidence, service-entry evidence, invoice fields, PO/receipt/invoice differences, exception queues, and accounts-payable review.
   - Do not issue POs, place orders, confirm receipt, approve invoices, change invoice status, modify PO/receipt/invoice fields to force a match, or execute payment.

10. Prepare vendor onboarding and post-sourcing review artifacts.
    - Produce onboarding checklists, owner maps, system-surface maps, data-minimization notes, supplier contact placeholders, review cadence questions, performance metric drafts, issue logs, and escalation plans.
    - Keep vendor master writes, bank or tax data entry, credentials, portal setup, contract activation, and performance penalties as human/system-owner checkpoints.

11. Package the procurement operations handoff.
    - Produce a handoff packet with current facts, source pointers, comparison tables, approval needs, stop conditions, sensitive-data surfaces, system surfaces, owner map, escalation route, and evidence to capture after human execution.
    - Route executable actions to an operations handoff packet when they touch supplier portals, ERP, SRM, CLM, procurement systems, accounting tools, inventory tools, email, approvals, payments, contracts, or vendor records.

## Outputs

- Sourcing objective brief.
- Requirements and acceptance matrix.
- Vendor discovery ledger.
- Supplier shortlist for human review.
- RFI, RFQ, or RFP question packet.
- Supplier response template.
- Quote, bid, or proposal comparison table.
- Total-cost and delivery comparison note.
- Supplier risk and due-diligence question list.
- Budget and approval question list.
- Purchase request packet.
- PO, receipt, invoice, and three-way-match handoff note.
- Vendor onboarding checklist.
- Reorder, lead-time, and inventory handoff note.
- Issue log and escalation plan.
- Procurement operations handoff packet.

## Quality Signals

- The artifact helps a buyer, requester, finance owner, legal reviewer, security reviewer, compliance reviewer, warehouse or receiving owner, accounts-payable owner, or operations lead review the procurement without pretending to be the approval, payment, legal, compliance, security, or system authority.
- Requirements, supplier facts, quote fields, bid fields, delivery assumptions, pricing assumptions, budget assumptions, risk flags, source timestamps, and missing confirmations are clearly separated.
- Vendor comparisons expose source evidence, unknowns, and review needs instead of hiding judgment behind a single unreviewed score.
- Sensitive vendor bank, tax, identity, credential, contract, pricing, account, or security data is minimized, redacted, or represented as placeholders unless the user explicitly supplies an approved review scope.
- The handoff names approval needs, stop conditions, system surfaces, sensitive-data surfaces, owner roles, and evidence to capture after human execution.

## Human Checkpoints

- Vendor approval, supplier rejection, supplier ranking as a final decision, award decision, shortlisting rule, blacklist/graylist decision, supplier eligibility, conflict-of-interest decision, sanctions decision, or compliance release.
- Purchase order issuance, order placement, order cancellation, order change, receiving confirmation, service-entry confirmation, invoice approval, payment, refund, chargeback, budget approval, accounting classification, tax treatment, write-off, or money movement.
- Contract terms, statement-of-work commitment, pricing commitment, delivery commitment, warranty commitment, indemnity, limitation of liability, insurance sufficiency, data-processing terms, security terms, privacy terms, import/export terms, or legal conclusion.
- Supplier outreach, bidder invitation, RFI/RFQ/RFP send, negotiation message, award notice, rejection notice, dispute notice, escalation notice, payment notice, or vendor/customer/authority communication.
- ERP, SRM, CLM, procurement portal, supplier portal, vendor master, accounting, inventory, receiving, approval workflow, spreadsheet of record, email, SMS, calendar, help desk, or document-system writes.
- Vendor bank account, tax ID, beneficial ownership, identity document, private contact data, credentials, one-time code, contract full text, negotiated pricing, security questionnaire, vulnerability report, insurance document, or confidential business data retention, export, sharing, or long-term storage.

## Composable With

- `commerce-operations.md` when product, inventory, marketplace, promotion, listing, return, or supplier signals need commerce work products.
- `local-store-operations.md` when shop, restaurant, branch, stock, restock, POS, and shift signals need local operations artifacts before supply orders.
- `event-operations-planning.md` when event venues, sponsors, vendors, catering, AV, signage, badges, or logistics suppliers need sourcing artifacts.
- `finance-operations-review.md` when budgets, payables, invoices, cash-flow, anomalies, and payment timing need finance-owner review without money movement.
- `contract-fulfillment-tracking.md` when a signed agreement, statement of work, delivery milestone, SLA, acceptance evidence, or renewal window needs operational tracking.
- `regulated-document-evidence-map.md` when supplier policies, security questionnaires, insurance certificates, compliance documents, contract templates, or public procurement rules need traceable evidence maps.
- `draft-and-evidence-packet.md` for RFI, RFQ, RFP, vendor communication, escalation, award, rejection, dispute, or approval drafts that need claim-evidence tables and review packets.
- `data-analysis-decision-support.md` when supplier scorecards, quote tables, spend data, inventory data, or lead-time data need descriptive analysis without deciding the procurement.
- `operations-execution-handoff.md` when sourcing artifacts should become an approval sheet, owner map, blocker log, stop-condition note, and evidence-capture checklist before external action.
- `../laws/surface-browser-runtime.md` when working in logged-in supplier, ERP, SRM, CLM, procurement, accounting, inventory, email, approval, or vendor portals.
- `../laws/surface-mcp-tools-auth.md` for private vendor data, credentials, payments, procurement APIs, supplier systems, accounting tools, external sends, or system writes.
- `../laws/surface-evidence-eval.md` for procurement claims, source evidence, independent verification, regulated boundaries, and method promotion.

## Evidence

Source signal: broad external-feed and domain scout review found recurring procurement operations signals around AI-assisted vendor sourcing, RFI/RFQ/RFP drafting, supplier comparison, purchase request preparation, PO and invoice handoff, vendor onboarding, supply disruption, inventory restocking, and supplier-risk review. Official-source review of supply-chain risk management, service-provider data-security guidance, vendor responsibility criteria, and source-selection evaluation criteria confirmed that useful procurement planning is distinct from vendor approval, purchasing authority, payment authority, legal/compliance/security conclusions, account writes, and sensitive vendor-data retention.

Validation state: seed draft. Needs replay against real small-business sourcing, local store restock, event vendor sourcing, SaaS procurement, manufacturing supplier comparison, quote comparison, purchase request preparation, PO/invoice exception handoff, supplier onboarding, and reorder-planning cases before promotion.

Known failures:

- Treating a procurement operations packet as permission to approve, reject, rank, contact, invite, award, order, issue POs, receive goods, approve invoices, pay, write systems, or commit terms.
- Treating a tidy comparison table as a final supplier decision while hiding missing evidence, local procurement policy, eligibility constraints, conflicts, or reviewer uncertainty.
- Inventing legal, compliance, sanctions, tax, accounting, insurance, security, privacy, import/export, public-procurement, or audit conclusions from weak data.
- Collecting or retaining vendor bank, tax, identity, credential, contract, pricing, security, account, or confidential business data unnecessarily.
- Letting a draft RFI/RFQ/RFP, award notice, rejection notice, escalation note, or approval packet become an external communication without scoped approval.
