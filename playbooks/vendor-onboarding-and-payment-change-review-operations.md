# Playbook: Vendor Onboarding And Payment-Change Review Operations

Status: seed draft

Scope: vendor-onboarding-payment-change-review-neutral. This playbook helps an agent turn vendor onboarding packets, W-9 or tax-information forms, invoices, purchase orders, receipt evidence, service-entry evidence, remittance instructions, and vendor payment-change requests into reviewable accounts-payable artifacts. It is not tied to one ERP, SRM, accounting system, bank, payment rail, procurement policy, tax jurisdiction, supplier category, organization size, or public/private procurement model.

## Purpose

Help an agent produce a vendor onboarding and payment-change review packet, W-9 and tax-information note, invoice, PO, receipt, and service-entry comparison, known-contact callback checklist, payment-change verification checklist, suspicious-signal queue, accounts-payable handoff, and post-resolution evidence log.

This playbook supports evidence organization, comparison, draft questions, and handoff. It does not add or update vendor master records, change bank details, approve invoices, execute payments, send remittance confirmations, treat tax forms or invoices as payment authorization, write ERP/SRM/procurement/accounting/banking/vendor/email/document/spreadsheet-of-record systems, or retain sensitive vendor bank, tax, identity, credential, account, or confidential business data.

## Inputs

- Vendor onboarding packet, vendor profile notes, supplier contact placeholders, tax-information form, W-9 or equivalent local tax form, ownership or entity-type notes, insurance or compliance documents, contract summary, purchase request, purchase order, receiving record, service-entry record, invoice, credit memo, or statement.
- Email thread, portal message, remittance instruction, payment-method request, bank-account change request, address change request, urgency note, approval note, callback note, or prior vendor-history note supplied by the user.
- Buyer, requester, receiver, project owner, accounts-payable, finance, legal, tax, security, procurement, or vendor-master owner constraints supplied by the user.
- Source material such as internal procurement/AP policy, vendor onboarding procedure, payment-change procedure, fraud-awareness guidance, tax-form instructions, invoice-processing guidance, and domain-owner notes.
- External system surfaces described at a high level, such as ERP, SRM, vendor master, procurement portal, accounting tool, invoice system, banking portal, email, document system, spreadsheet, ticketing tool, and approval workflow.

## Procedure

1. Define the review boundary.
   - Name the vendor, entity, requester, buyer, AP owner, vendor-master owner, invoice set, PO set, time window, source inputs, requested output, decision owner, and non-goals.
   - Separate review work from vendor master updates, bank-detail changes, invoice approval, payment execution, remittance confirmation, tax conclusion, fraud conclusion, legal conclusion, and system-of-record writes.

2. Normalize vendor-stated facts.
   - Convert free-form onboarding material into vendor name, entity type, tax-information placeholder, contact-source placeholder, invoice identifiers, PO identifiers, receipt or service evidence, remittance instructions, requested change, request channel, request timestamp, and source pointer fields.
   - Mark facts as `vendor-stated`, `user-supplied`, `system-recorded`, `official-source`, `known-contact`, `callback-evidence`, `missing`, or `unverified`.
   - Redact or placeholder sensitive bank, tax, identity, credential, account, and confidential business data unless the user has provided a scoped review reason.

3. Build the W-9 or tax-information note.
   - Summarize only the tax-information purpose, source, form status, name/TIN/entity fields at a redacted level, signature or certification status if supplied, missing fields, stale fields, and reviewer questions.
   - Treat a W-9 or tax-information form as tax-reporting evidence only, not payment authorization, bank-change approval, vendor eligibility, or fraud clearance.
   - Route tax treatment, withholding, backup withholding, entity classification, and form validity questions to the tax, finance, legal, official-source, or domain owner.

4. Compare invoice, PO, receipt, and service-entry evidence.
   - Build a comparison table for vendor name, invoice number, invoice date, PO or contract reference, line description, quantity, unit price, total, tax/fee/shipping notes, delivery or service dates, receiving evidence, service acceptance evidence, payment terms, and required documentation.
   - Separate exact matches, mismatches, missing fields, stale records, partial receipts, service-entry gaps, duplicate invoice signals, and fields that require buyer, receiver, AP, or finance review.
   - Do not modify invoice, PO, receipt, service-entry, or accounting records to force a match.

5. Isolate the payment-change request.
   - Produce a payment-change summary with requested change, old method placeholder, new method placeholder, request channel, request timing, requester identity claim, supporting evidence, urgency language, contact source, and affected invoice/payment set.
   - Mark changes in bank account, payment method, remittance address, payment procedure, contact channel, or direct-deposit details as high-risk until independently verified.
   - Do not use email-supplied phone numbers, links, reply-to addresses, or new contacts as verification sources.

6. Build the known-contact callback checklist.
   - List known-contact sources such as prior vendor master contact, contract contact, independently verified website or directory, buyer-provided known contact, prior approved AP contact, or user-approved internal directory.
   - Create an unsent callback script that asks the known contact to confirm the requested change, affected invoices, effective date, authorized requester, and any mismatch.
   - Record callback status as `not started`, `scheduled`, `attempted`, `confirmed by human`, `contradicted`, `needs second approver`, or `blocked`.
   - Do not place calls, send messages, update contacts, or mark verification complete without scoped approval.

7. Create the suspicious-signal queue.
   - Flag last-minute payment changes, unexplained urgency, new banking or remittance instructions, email-only refusal to use voice/video/known channels, changed reply-to domains, lookalike domains, new personal email addresses, unusual advance-payment requests, invoice mismatch, duplicate invoice, amount mismatch, vendor-name mismatch, PO/receipt mismatch, and missing internal approver.
   - Use review labels such as `needs AP review`, `needs buyer review`, `needs receiving review`, `needs security review`, `needs legal/tax review`, `needs known-contact callback`, or `hold pending human confirmation`.
   - Frame signals as review questions, not fraud conclusions.

8. Package the accounts-payable handoff.
   - Produce a handoff packet with current facts, source pointers, comparison table, requested changes, callback checklist, suspicious-signal queue, missing confirmations, sensitive-data surfaces, system surfaces, owner map, stop conditions, and evidence to capture after human execution.
   - Route executable actions to an operations handoff when they touch vendor master, banking, ERP, SRM, procurement, accounting, invoice, document, spreadsheet-of-record, email, approval, or payment systems.

9. Prepare the post-resolution evidence log.
   - After a human owner resolves the issue, record only non-sensitive status, reviewer, date, evidence pointer, decision category, open follow-ups, and lessons learned.
   - Do not retain bank account numbers, tax IDs, identity documents, credentials, private account data, or confidential attachments unless an approved retention path exists.

## Outputs

- Vendor onboarding and payment-change review packet.
- W-9 and tax-information note.
- Vendor-stated fact ledger.
- Invoice, PO, receipt, and service-entry comparison.
- Payment-change request summary.
- Known-contact source list.
- Known-contact callback checklist and unsent script.
- Payment-change verification checklist.
- Suspicious-signal queue.
- Missing-confirmation and reviewer-question list.
- Sensitive-data and system-surface note.
- Accounts-payable handoff packet.
- Post-resolution evidence log.

## Quality Signals

- The artifact helps AP, finance, procurement, security, buyer, receiver, tax, legal, or vendor-master owners review the packet without pretending to be the approval, payment, tax, fraud, legal, or system authority.
- Vendor-stated facts, tax-information facts, invoice facts, PO and receipt facts, service-entry facts, remittance instructions, requested bank or payment changes, email-thread facts, known-contact sources, callback evidence, source timestamps, missing confirmations, sensitive-data surfaces, system surfaces, and human review questions are clearly separated.
- Payment-change verification uses independently known contact sources rather than contact details supplied inside the same change request.
- Invoice review exposes PO, receipt, acceptance, service-entry, quantity, amount, and documentation gaps instead of hiding them behind a clean payable status.
- Sensitive vendor bank, tax, identity, credential, account, and confidential business data is minimized, redacted, or represented as placeholders unless the user supplies a scoped approved review path.

## Human Checkpoints

- Vendor creation, vendor approval, vendor rejection, vendor-master record update, bank-detail change, payment-method change, remittance-address change, contact-record change, portal setup, credential handling, or account activation.
- Invoice approval, payable approval, purchase order issuance, receiving confirmation, service-entry confirmation, payment execution, wire transfer, ACH, card payment, check issuance, remittance confirmation, refund, chargeback, or money movement.
- Tax treatment, withholding, W-9 validity, entity classification, 1099/reporting conclusion, accounting treatment, audit conclusion, fraud conclusion, security conclusion, legal conclusion, compliance conclusion, insurance conclusion, sanctions conclusion, or vendor eligibility.
- Vendor, supplier, bank, buyer, receiver, AP, customer, authority, or external communication.
- ERP, SRM, procurement portal, vendor master, accounting, invoice, banking, payment, email, SMS, calendar, ticket, document, spreadsheet-of-record, approval workflow, or system-of-record writes.
- Vendor bank account, tax ID, identity document, beneficial ownership, private contact data, credential, one-time code, contract full text, negotiated pricing, security questionnaire, account data, or confidential business data retention, export, sharing, or long-term storage.

## Composable With

- `procurement-vendor-sourcing-operations.md` when the packet also needs supplier sourcing, RFI/RFQ/RFP, quote comparison, supplier due-diligence, purchase request, or onboarding checklist work.
- `finance-operations-review.md` when payables, cash-flow timing, budget impact, missing receipts, or transaction anomalies need finance-owner review without money movement.
- `contract-fulfillment-tracking.md` when invoice payment depends on contract obligations, milestones, acceptance evidence, or renewal windows.
- `regulated-document-evidence-map.md` when onboarding, tax, payment, banking, security, insurance, or vendor documents need traceable evidence maps.
- `draft-and-evidence-packet.md` for unsent AP, vendor, buyer, finance, security, or reviewer communications that need claim-evidence tables and approval packets.
- `operations-execution-handoff.md` when the review packet should become an owner map, approval sheet, blocker log, stop-condition note, and evidence-capture checklist before external action.
- `../laws/surface-browser-runtime.md` when working in logged-in ERP, SRM, procurement, accounting, banking, invoice, vendor, email, document, or approval portals.
- `../laws/surface-mcp-tools-auth.md` for private vendor data, credentials, payment tools, banking APIs, procurement APIs, accounting tools, external sends, system writes, or authorization surfaces.
- `../laws/surface-evidence-eval.md` for source evidence, independent verification, regulated boundaries, and method promotion.

## Evidence

Source signal: broad domain and external-feed review found recurring small-business and AP scenarios where agents are asked to organize vendor onboarding, W-9, invoice, remittance, and bank-change evidence without becoming a payment authority. Official-source review confirmed three stable mechanisms: business email compromise guidance treats vendor invoice/payment changes as high-risk and recommends verifying payment changes through direct or known channels; IRS Form W-9 guidance frames W-9 as a request for taxpayer identification and certifications for information reporting, not as payment authorization; FAR Prompt Payment guidance shows invoice payment depends on proper invoice content plus receiving or acceptance documentation, which generalizes into a PO/receipt/service-entry comparison method.

Primary sources reviewed:

- FBI Business Email Compromise guidance: https://www.fbi.gov/how-we-can-help-you/safety-resources/scams-and-safety/common-scams-and-crimes/business-email-compromise
- FBI Business E-Mail Compromise prevention notes: https://www.fbi.gov/news/stories/business-e-mail-compromise-on-the-rise
- FBI BEC payment-change warning: https://www.fbi.gov/news/press-releases/fbi-anticipates-rise-in-business-email-compromise-schemes-related-to-the-covid-19-pandemic
- IRS About Form W-9: https://www.irs.gov/forms-pubs/about-form-w-9
- IRS Instructions for the Requester of Form W-9: https://www.irs.gov/instructions/iw9
- FAR 32.905 Payment documentation and process: https://www.acquisition.gov/far/32.905

Validation state: seed draft. Needs replay against real small-business vendor onboarding, AP payment-change review, W-9 intake, invoice/PO/receipt mismatch, service-entry exception, duplicate invoice, urgent bank-change, and post-resolution evidence log cases before promotion.

Known failures:

- Treating a complete vendor packet, W-9, invoice, callback script, or payment-change checklist as permission to update vendor master data, change bank details, approve an invoice, pay, send remittance confirmation, or write systems.
- Using contact details supplied inside the same email thread or change request as independent verification.
- Claiming a vendor, invoice, W-9, or payment-change packet is fraud-free, tax-ready, payable, verified, validated, complete, or final without scoped review.
- Retaining sensitive vendor bank, tax, identity, credential, account, or confidential business data unnecessarily.
- Turning suspicious signals into fraud accusations instead of AP/security/legal review questions.
