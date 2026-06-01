# Playbook: Field Service And Mobile Service Operations Planning

Status: seed draft

Scope: field-service-mobile-service-operations-neutral. This playbook helps an agent turn field service, mobile service, on-site repair, home service, mobile detailing, food truck, mobile clinic logistics, maintenance visit, route, dispatch, technician, crew, job ticket, appointment window, quote, invoice, proof-of-service, follow-up, and field handoff signals into reviewable operating artifacts. It is not tied to one field-service-management system, booking platform, dispatch board, route planner, payment rail, service category, vehicle type, country, jurisdiction, labor model, or customer channel.

## Purpose

Help an agent produce useful mobile-operations work products: service intake summaries, appointment-window question lists, route and visit planning notes, technician or crew handoff packets, parts and tools readiness checklists, customer communication drafts, quote review packets, proof-of-service checklists, invoice and payment-follow-up question lists, issue logs, reschedule plans, and next-day job queues.

The playbook supports preparation and review. It does not dispatch technicians, confirm bookings, send customer messages, quote final prices, collect payment, write field-service systems, or make safety, licensing, insurance, medical, legal, or compliance conclusions.

## Inputs

- Service objective, service type, customer request, job ticket, visit location class, and operating window.
- Appointment windows, staff or technician availability, vehicle or crew constraints, route notes, travel-time assumptions, and customer access constraints supplied by the user.
- Job scope notes, photos or inspection notes supplied by the user, prior visit history, warranty or repeat-visit notes, known parts, tools, consumables, or equipment constraints.
- Quote, invoice, payment-status, proof-of-service, cancellation, reschedule, complaint, review, or follow-up signals supplied by the user.
- Current SOP, dispatch rules, safety checklist, escalation path, communication template, pricing sheet, or handoff format if available.
- Customer-impact, location, privacy, payment, professional-license, worker-safety, regulated-service, and system-of-record boundaries supplied by the user.
- External system surfaces described at a high level, such as booking, FSM, CRM, dispatch, route, map, payment, review, support, inventory, or accounting tools.

## Procedure

1. Define the field-service boundary.
   - Name the service category, operating day or route, customers or sites involved, systems in scope, decision owner, and non-goals.
   - Separate planning artifacts from live dispatch, schedule mutation, customer sends, route commitments, payments, and system writes.

2. Build the service intake snapshot.
   - Summarize each job request: customer need, site or access notes, service history, promised or requested window, known constraints, missing facts, and evidence supplied.
   - Mark stale information, inferred travel times, unverified addresses, uncertain scope, and unsupported assumptions.

3. Prepare appointment and route planning notes.
   - Draft visit sequence options, time-window assumptions, buffer needs, travel risks, access questions, and route dependencies.
   - Do not promise exact arrival times, confirm bookings, assign technicians, reroute live staff, or write map, calendar, dispatch, or booking systems.

4. Prepare job scope and quote review.
   - Convert user-provided scope, photos, prior notes, and price references into a quote question list, scope clarification table, possible change-order prompts, and approval checklist.
   - Keep estimates conditional when site inspection, parts, labor, warranty, taxes, fees, or customer approval are not confirmed.
   - Do not commit prices, discounts, warranties, refunds, compensation, contract terms, or payment obligations.

5. Build parts, tools, and readiness checklists.
   - Produce service-readiness notes for vehicle, crew, tools, parts, consumables, PPE, forms, proof-of-service capture, and post-visit evidence.
   - Treat safety, licensing, insurance, regulated-service, and technical adequacy as prompts for qualified staff or domain owners, not final determinations.

6. Draft customer and crew communication packets.
   - Draft confirmation, arrival-window, delay, access, reschedule, cancellation, follow-up, review-request, invoice-question, or complaint-response wording when enough policy context exists.
   - Label each draft as unsent and route sends, commitments, apologies, refunds, compensation, or account actions to the responsible human.

7. Prepare proof-of-service and post-visit review.
   - Create before/during/after evidence checklists, completion-note templates, exception logs, customer signoff questions, warranty or repeat-visit flags, and unresolved-issue lists.
   - Do not determine service quality, safety completion, compliance, warranty eligibility, liability, or insurance sufficiency.

8. Create the next operating cycle.
   - Produce a next-day job queue, dispatch review packet, unresolved blocker log, evidence to collect, follow-up queue, and post-route review prompts.
   - Route executable actions to an operations handoff packet when they touch customers, technicians, vehicles, routes, money, accounts, external vendors, or systems of record.

## Outputs

- Field service operations brief.
- Service intake and job-scope snapshot.
- Appointment-window and route planning note.
- Dispatch review question list.
- Technician or crew handoff packet.
- Parts, tools, consumables, vehicle, and PPE readiness checklist.
- Quote and change-order review packet.
- Customer communication draft packet.
- Access, arrival, delay, reschedule, and cancellation question list.
- Proof-of-service and evidence-capture checklist.
- Invoice and payment-follow-up question list.
- Complaint, warranty, repeat-visit, or exception log.
- Safety, licensing, insurance, and regulated-service review queue.
- Next-day route or job queue.
- Mobile service operations handoff packet.

## Quality Signals

- The output helps a dispatcher, owner-operator, crew lead, or mobile-service manager prepare real work artifacts, not only risk warnings.
- Each job, route, quote, invoice, and follow-up claim is tied to supplied evidence or marked as an assumption.
- Route and appointment notes include buffers, missing confirmations, and customer-access questions instead of hard promises.
- Technician, crew, vehicle, parts, tools, and proof-of-service needs are separated from final dispatch decisions.
- Draft customer messages are useful but clearly unsent, reviewable, and separated from commitments or account actions.
- Safety, licensing, insurance, payment, legal, medical, and regulated-service questions are routed to qualified humans or domain owners.
- The plan includes what evidence to collect after execution: photos, timestamps, customer signoff, job ids, part ids, receipts, invoice ids, review links, issue ids, or manager notes.

## Human Checkpoints

- Technician or crew assignment, dispatch, live rerouting, route commitment, appointment confirmation, cancellation, reschedule, or customer-facing ETA.
- Customer calls, SMS, email, chat, review replies, apology commitments, refund, compensation, warranty promise, service recovery, or public response.
- Price quote, discount, change order, invoice creation or approval, payment collection, chargeback, refund, debt collection, financing, tax, or accounting decision.
- Booking, FSM, CRM, dispatch, route, map, calendar, inventory, payment, review, support, accounting, vendor, document, spreadsheet-of-record, or system-of-record writes.
- Worker safety, site safety, driving safety, lockbox or home access, emergency, hazardous work, PPE, licensing, insurance, medical, legal, consumer-protection, warranty, liability, or regulated-service conclusion.
- Sensitive customer location, home access, lockbox, alarm, payment, health, vehicle, child, elder, vulnerable-person, credential, account, or private-site data retention.
- Final operating priority when tradeoffs affect customer safety, worker safety, revenue, legal exposure, compliance, or brand trust.

## Composable With

- `local-store-operations.md` when a fixed branch, restaurant, retail counter, or local service desk also needs opening, stock, shift, POS, or review workflows.
- `operations-execution-handoff.md` when the plan should become a ready-to-execute queue with approvals, owners, blockers, and evidence capture.
- `customer-support-quality-review.md` when field-service conversations, complaints, reviews, or service recovery need quality review.
- `feedback-to-backlog-operations.md` when recurring service issues should become backlog items or close-loop notes.
- `data-analysis-decision-support.md` when route performance, job duration, no-show rates, repeat visits, invoice aging, or customer feedback need descriptive analysis.
- `finance-operations-review.md` when invoices, receivables, expenses, cash collection, or payment follow-up need finance-owner review.
- `procurement-vendor-sourcing-operations.md` when parts, tools, consumables, vendors, or subcontractors need sourcing or reorder planning.
- `event-operations-planning.md` when a food truck, mobile pop-up, or mobile crew is tied to event-day operations.
- `medical-care-coordination.md` when mobile care logistics or patient-side coordination appears, while clinical decisions remain out of scope.
- `../laws/surface-browser-runtime.md` when working in logged-in booking, FSM, CRM, dispatch, map, payment, review, support, inventory, or accounting portals.
- `../laws/surface-mcp-tools-auth.md` for APIs, account actions, private data, payments, messages, route systems, or system writes.
- `../laws/surface-evidence-eval.md` for route claims, quote claims, safety claims, compliance claims, improvement claims, or method promotion.

## Evidence

Source signal: broad X and domain scout review found recurring field-service and mobile-service signals around AI booking, dispatch, route planning, customer communication, invoicing, payment follow-up, food-truck scheduling, maintenance visibility, and solo-operator overhead. Official-source review of OSHA safety-management guidance, OSHA and NIOSH motor-vehicle safety material, FTC data-security guidance, FTC consumer review guidance, and CFPB/FTC debt-collection material confirmed that field work often crosses worker-safety, driving, customer-data, review, payment, and communication boundaries.

Validation state: seed draft. Needs replay against mobile detailing, HVAC or plumbing repair, appliance repair, food truck route, maintenance crew, mobile clinic logistics, invoice follow-up, complaint after service, parts readiness, and dispatch overload cases before promotion.

Known failures:

- Treating a route note as permission to dispatch, reschedule, confirm bookings, send messages, or promise exact arrival times.
- Treating a quote packet as permission to commit prices, discounts, warranties, refunds, compensation, or payment terms.
- Treating proof-of-service artifacts as final safety, service-quality, warranty, liability, insurance, legal, medical, or compliance conclusions.
- Retaining sensitive customer location, home access, payment, health, credential, vehicle, or vulnerable-person data without scoped approval.
- Producing a long packet that is too slow for a dispatcher, owner-operator, technician, or crew lead to use during a real service day.
