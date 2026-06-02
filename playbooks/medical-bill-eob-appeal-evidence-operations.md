# Playbook: Medical Bill And EOB Appeal Evidence Operations

Status: seed draft

Scope: medical-bill-eob-appeal-evidence-neutral. This playbook helps an agent turn medical bills, Explanation of Benefits records, denial notices, plan excerpts, prior authorization notes, service dates, amounts, portal screenshots, and response deadlines into reviewable medical-billing and insurance-appeal evidence artifacts. It is not tied to one insurer, provider, plan type, country, claim portal, billing system, care setting, diagnosis, treatment, coding standard, or dispute path.

## Purpose

Help an agent produce useful patient-side work products: medical bill and EOB appeal evidence packets, EOB-to-bill crosswalks, denial timelines, missing-record request lists, plan and policy lookup queues, internal appeal or external review option maps, patient/provider/insurer communication draft packets, deadline trackers, reviewer handoffs, and post-response evidence checklists.

The playbook supports evidence organization, draft preparation, and handoff. It does not file appeals, request external reviews, start patient-provider dispute resolution, upload documents, call insurers or providers, pay bills, dispute bills, decide medical necessity, coding correctness, coverage, reimbursement, legal sufficiency, billing responsibility, or write patient, insurer, provider, EHR, billing, claim, document, spreadsheet-of-record, or portal systems.

## Inputs

- Patient-side objective: understand a denied or partially denied claim, reconcile a provider bill with an EOB, prepare an internal appeal packet, prepare an external review question list, request missing records, organize a billing-office follow-up, or build a reviewer handoff.
- EOB or insurer records: claim number, service date, provider, billed amount, allowed amount, paid amount, patient responsibility, denial or adjustment code, reason text, appeal instructions, and response deadline supplied by the user.
- Provider billing records: provider name, account number, invoice or statement date, charge lines, payments, adjustments, balance due, due date, contact surface, and itemized bill status supplied by the user.
- Plan and policy material supplied by the user: plan excerpt, summary of benefits, coverage policy, prior authorization record, referral record, network status note, insurer notice, or official appeal guidance.
- Supporting records supplied by the user: appointment notes, order/referral notes, prior authorization notes, provider statements, receipts, portal screenshots, previous messages, mail dates, and call notes.
- Boundaries supplied by the user: who may review or approve appeals, what systems are off limits, what health, insurance, payment, identity, account, or portal data may be retained, and whether a caregiver or authorized representative is involved.

## Procedure

1. Define the case boundary.
   - Name the claim, bill, service window, provider, insurer, plan, response deadline, document set, reviewer owner, and non-goals.
   - Separate evidence artifacts from live appeal filing, external review requests, portal uploads, insurer or provider calls, payments, bill disputes, claim mutations, legal analysis, coverage decisions, and clinical conclusions.

2. Build the EOB-to-bill crosswalk.
   - Align each bill line or charge group with the matching EOB claim line when possible.
   - Preserve source fields: service date, procedure or service description as supplied, provider, claim number, billed amount, allowed amount, insurer paid amount, adjustment amount, patient responsibility, denial code, reason text, and source timestamp.
   - Mark unmatched bill lines, unmatched EOB lines, multiple EOBs for one bill, duplicate statements, revised bills, partial payments, stale screenshots, unclear service descriptions, and missing itemized bills as uncertainty flags.

3. Map the denial and response timeline.
   - Create a timeline for service date, claim submission if known, prior authorization or referral date, denial notice date, EOB date, bill date, appeal deadline, external review deadline if supplied, provider response dates, insurer responses, and any user communications.
   - Keep deadline calculations as a tracker for review, not as a legal or plan-rights conclusion.
   - Record the source for each date and the missing confirmation needed before a human acts.

4. Prepare missing-record and official-source lookup queues.
   - List missing documents: itemized bill, full EOB, denial notice, plan language, prior authorization, referral, provider medical-necessity statement, coding explanation, claim history, payment receipt, and appeal instruction page.
   - Build an official-source lookup queue for insurer appeal instructions, plan documents, internal appeal steps, external review availability, Medicare or marketplace appeal pages when relevant, No Surprises Act or patient-provider dispute guidance when relevant, and state insurance department or official consumer-assistance pages when relevant.
   - Keep lookup results as source pointers and questions, not final eligibility, coverage, or appeal-rights decisions.

5. Draft review packets.
   - Produce separate packet sections for patient facts, provider bill facts, EOB facts, denial reasons, plan or policy text, prior authorization facts, provider statements, insurer notices, official-source uncertainty, missing confirmations, and reviewer questions.
   - Draft patient, provider, and insurer communication wording only as unsent drafts for human review.
   - Include a contradiction table for bill-vs-EOB differences, plan-vs-denial differences, prior-authorization-vs-denial differences, and response-date conflicts.

6. Build option and handoff maps.
   - Create an internal appeal and external review option map from supplied documents and official-source pointers.
   - Route plan interpretation, medical necessity, coding, reimbursement, legal sufficiency, billing responsibility, and patient-provider dispute questions to the appropriate patient, caregiver, clinician, billing office, insurer, legal, official-source, or domain-owner reviewer.
   - Keep every option as a review path, not an instruction to file, upload, call, pay, dispute, or escalate.

7. Close the evidence loop.
   - Prepare a post-response capture checklist: insurer response, appeal confirmation, external review acknowledgement, provider statement, updated bill, revised EOB, payment or adjustment receipt, portal screenshot, mail or fax confirmation, reviewer note, and next deadline.
   - Convert recurring gaps into learning candidates: missing itemized bills, unclear denial codes, stale portal evidence, prior authorization ambiguity, provider-insurer mismatch, communication log gaps, and deadline tracker weaknesses.

## Outputs

- Medical bill and EOB appeal evidence operations brief.
- Case boundary and document inventory.
- EOB-to-bill crosswalk.
- Denial and response timeline.
- Missing-record request list.
- Plan, policy, prior-authorization, appeal-instruction, and official-source lookup queue.
- Internal appeal and external review option map.
- Patient, provider, and insurer unsent communication draft packet.
- Deadline tracker and missing-confirmation table.
- Contradiction and uncertainty table.
- Reviewer handoff packet.
- Post-response evidence capture checklist.

## Quality Signals

- The output gives a patient, caregiver, billing reviewer, insurer reviewer, legal reviewer, or clinician a usable packet, not only a warning list.
- Each bill, EOB, denial, date, amount, and deadline links to a supplied source or an explicit missing evidence note.
- The packet keeps billed amount, allowed amount, insurer payment, adjustment, patient responsibility, balance due, payment, and write-off fields distinct.
- The agent separates source facts, assumptions, missing records, draft wording, official-source pointers, and human-review questions.
- The packet does not convert an EOB crosswalk, appeal draft, option map, or deadline tracker into permission to file, upload, call, pay, dispute, write systems, or decide regulated conclusions.

## Human Checkpoints

- Appeal filing, external review request, patient-provider dispute resolution, insurer or provider calls, portal uploads, bill disputes, payment, payment plans, refunds, chargebacks, debt or collection responses, or external sends.
- Medical necessity, coding correctness, diagnosis, treatment, care appropriateness, coverage, reimbursement, network status, prior authorization validity, legal sufficiency, billing responsibility, debt, credit, tax, or insurance-rights conclusions.
- Patient, insurer, provider, EHR, billing, claim, portal, payment, document, spreadsheet-of-record, or system-of-record writes.
- Retention of sensitive health, insurance, payment, identity, account, portal, caregiver, minor, vulnerable-person, or private medical data.

## Composable With

- `consumer-evidence-and-escalation-planning.md` when a medical bill or EOB issue is part of a broader consumer billing, collection, credit, subscription, warranty, or service dispute.
- `medical-care-coordination.md` when the case also needs appointment, referral, clinician question, caregiver, or patient-portal organization.
- `regulated-document-evidence-map.md` when plan documents, denial notices, itemized bills, medical records, or policy excerpts need source mapping before drafting.
- `draft-and-evidence-packet.md` when patient, provider, insurer, or reviewer wording needs a claim-evidence table and approval packet.
- `finance-operations-review.md` when receipts, payments, balances, cash-flow impact, or finance-owner questions need non-conclusion organization.
- `operations-execution-handoff.md` when the evidence packet should become a ready-to-execute human queue with approvals, blockers, deadlines, and evidence capture.
- `../laws/surface-browser-runtime.md` when working in patient portals, insurer portals, provider billing portals, email, document stores, or logged-in account sessions.
- `../laws/surface-mcp-tools-auth.md` for APIs, account actions, private data, payment tools, claim tools, portal writes, or external sends.
- `../laws/surface-evidence-eval.md` for appeal claims, coverage claims, medical-billing claims, official-source lookup, and method promotion.

## Evidence

Source signal: domain scout review found recurring patient-side pain around denied or partially denied claims, EOB-to-bill mismatch, missing itemized bills, prior authorization records, medical-necessity letters, appeal deadlines, and internal appeal versus external review confusion. Primary-source review of HealthCare.gov internal appeal and external review guidance, Medicare appeal guidance, CMS No Surprises Act and patient-provider dispute guidance, Consumer Financial Protection Bureau medical-billing resources, and NAIC/state-insurance consumer guidance confirmed that bills, EOBs, denial notices, appeal instructions, deadlines, records, and official-source lookup should be organized while appeal filing, payment, legal conclusions, coverage decisions, and portal actions remain scoped human-review actions.

Validation state: seed draft. Needs replay against real EOB and provider-bill pairs, Medicare Summary Notice cases, marketplace plan denial cases, prior-authorization denial cases, surprise-billing cases, itemized-bill request cases, provider balance-billing cases, and collection or credit-report spillover cases before promotion.

Known failures:

- Treating an EOB-to-bill crosswalk, appeal draft, official-source queue, option map, or deadline tracker as permission to file an appeal, request external review, upload documents, call an insurer or provider, pay, dispute, or write systems.
- Turning denial reasons into medical necessity, coding correctness, coverage, reimbursement, legal sufficiency, billing responsibility, or insurance-rights conclusions.
- Flattening billed amount, allowed amount, insurer payment, adjustment, patient responsibility, balance due, payment, and write-off into one misleading number.
- Hiding missing itemized bills, missing plan language, missing prior authorization records, stale portal screenshots, unclear denial codes, or conflicting response deadlines behind a tidy appeal narrative.
- Retaining sensitive health, insurance, payment, identity, account, portal, caregiver, minor, vulnerable-person, or private medical data without scoped approval.
