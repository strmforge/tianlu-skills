# Playbook: Event Operations Planning

Status: seed draft

Scope: event-operations-planning-neutral. This playbook helps an agent turn event, conference, workshop, webinar, meetup, venue, agenda, speaker, sponsor, vendor, registration, ticketing, attendee, check-in, accessibility, safety, communications, and day-of execution signals into reviewable event operations artifacts. It is not tied to one event platform, ticketing system, venue type, payment rail, conference app, organizer model, jurisdiction, industry, or event size.

## Purpose

Help an agent produce useful event operations work products: event operations briefs, run-of-show timelines, agenda and session maps, registration flow checklists, attendee communication draft packets, speaker and sponsor coordination drafts, vendor and venue readiness checklists, accessibility and accommodation question lists, safety and crowd-flow risk notes, staffing and volunteer role maps, issue logs, escalation plans, ticketing or refund question lists, day-of execution checklists, and event operations handoff packets.

This playbook supports planning, comparison, drafting, and handoff. It does not sell tickets, buy tickets, issue refunds, execute payments, approve chargebacks, decide attendee eligibility, mutate attendee rosters, scan or invalidate tickets, send attendee messages, sign venue or vendor commitments, make accessibility, safety, legal, insurance, or compliance conclusions, or retain sensitive attendee, payment, health, accessibility, identity, credential, or access-control data.

## Inputs

- Event objective, format, audience, venue, date window, agenda, session list, registration model, ticket type, attendance estimate, staffing plan, or operating constraint.
- Speaker, sponsor, vendor, venue, volunteer, staff, attendee, accessibility, safety, travel, catering, signage, AV, livestream, recording, merchandise, badge, check-in, and post-event notes supplied by the user.
- Draft registration pages, ticket terms, refund notes, attendee FAQ, confirmation emails, run-of-show drafts, venue policies, vendor terms, sponsor requirements, accessibility notes, safety plans, incident notes, or post-event feedback.
- Source material such as official accessibility guidance, public-gathering or emergency planning guidance, ticketing and consumer-protection guidance, venue rules, platform terms, organizer policies, or local authority requirements.
- External system surfaces described at a high level, such as ticketing platforms, registration tools, payment tools, attendee apps, badge tools, access-control systems, email, SMS, CRM, calendar, livestream, webinar, venue, vendor, sponsor, and help-desk systems.

## Procedure

1. Define the event operations boundary.
   - Name the event scope, event phase, actor, artifact type, source inputs, time window, decision owner, and non-goals.
   - Separate operations drafts from ticket sales, payment, refund, chargeback, attendee eligibility, access-control changes, external sends, venue or vendor commitments, safety conclusions, accessibility determinations, legal conclusions, and system-of-record writes.

2. Normalize the operating facts.
   - Convert free-form material into event, venue, agenda, session, speaker, sponsor, vendor, attendee, registration, ticket, check-in, accessibility, safety, communication, staff, timeline, dependency, issue, and follow-up fields.
   - Mark accessibility, accommodation, ticketing, refund, resale, consumer-protection, safety, emergency, insurance, crowd, privacy, recording, consent, venue, vendor, and local-law questions as `needs official or domain-owner review`.
   - Use placeholders for sensitive data instead of collecting attendee identity documents, payment details, badge IDs, QR codes, medical details, disability details, access credentials, account credentials, or one-time codes.

3. Build the event operations brief.
   - Produce a concise operations brief with event purpose, audience, operating model, agenda shape, key constraints, current facts, unknowns, source timestamps, approval needs, and forbidden actions.
   - Separate user-supplied facts, source facts, estimates, assumptions, stale records, missing confirmations, and system surfaces.

4. Build timeline and flow artifacts.
   - Produce a run-of-show timeline, session map, venue zone map or checklist, arrival and registration flow, check-in flow, badge or credential flow, staff role map, volunteer brief, and issue escalation map.
   - Keep check-in mutation, credential issuance, roster edits, access denial, capacity enforcement, and incident command decisions as human checkpoints.

5. Prepare attendee and stakeholder communication artifacts.
   - Produce attendee FAQ drafts, confirmation email drafts, reminder drafts, speaker coordination drafts, sponsor coordination drafts, vendor handoff drafts, signage copy drafts, and post-event feedback prompts.
   - Do not send, schedule, publish, DM, SMS, email, post, or change templates in live systems without scoped approval.

6. Prepare ticketing, registration, accessibility, and safety review artifacts.
   - Produce a registration flow checklist, ticketing and refund question list, accessibility and accommodation question list, crowd-flow and entrance risk note, emergency communication question list, and privacy or data-minimization checklist.
   - Do not decide ticket validity, refund entitlement, chargeback response, attendee eligibility, accessibility sufficiency, service-animal treatment, safety compliance, venue capacity, insurance coverage, or emergency adequacy.

7. Package the event operations handoff.
   - Produce an event operations handoff packet with current facts, run-of-show, open questions, approval needs, stop conditions, system surfaces, sensitive-data surfaces, owner map, escalation plan, evidence to capture after human execution, and post-event review prompts.
   - Route executable actions to an operations handoff packet when they touch registration, ticketing, payment, refund, access control, attendee rosters, badge tools, venue systems, vendor tools, sponsor tools, email, SMS, CRM, calendar, livestream, help desk, or other external systems.

## Outputs

- Event operations brief.
- Agenda and session map.
- Run-of-show timeline.
- Venue readiness checklist.
- Registration and check-in flow checklist.
- Badge, credential, or access-control question list.
- Attendee communication draft packet.
- Speaker, sponsor, vendor, staff, or volunteer coordination draft.
- Accessibility and accommodation question list.
- Safety, crowd-flow, entrance, and emergency communication risk note.
- Staffing and volunteer role map.
- Ticketing, refund, resale, and attendee eligibility question list.
- Issue log and escalation plan.
- Day-of execution checklist.
- Post-event feedback and review prompt set.
- Event operations handoff packet.

## Quality Signals

- The artifact helps an organizer, producer, conference operator, community manager, venue coordinator, event marketer, sponsor manager, or operations owner review the event without pretending to be the ticketing, payment, safety, accessibility, legal, insurance, or system authority.
- Event, venue, agenda, speaker, sponsor, vendor, attendee, registration, ticketing, staff, timeline, communication, and issue facts are separated from assumptions and missing confirmations.
- Accessibility, accommodation, ticketing, refund, resale, consumer-protection, crowd, safety, emergency, insurance, local-law, recording, privacy, and consent issues are flagged for official-source or domain-owner review rather than resolved by the agent.
- Communication drafts are clearly marked as drafts and do not send, publish, promise, threaten, or commit.
- The handoff names approval needs, stop conditions, data-minimization choices, system surfaces, sensitive-data surfaces, and evidence to capture after human execution.

## Human Checkpoints

- Ticket sale, ticket purchase, ticket issuance, ticket transfer, comp ticket, refund, chargeback, payment, payout, tax, fee, price, resale, promo code, sponsorship payment, vendor invoice, or money movement.
- Attendee eligibility, admission approval, access denial, waitlist movement, roster edit, identity check, age check, badge issuance, QR code scan, ticket invalidation, access-control mutation, duplicate-entry handling, or capacity enforcement.
- Accessibility, accommodation, service-animal, companion seating, accessible ticketing, effective communication, language access, disability, health, mobility, or protected-class handling.
- Safety, emergency, crowd control, venue capacity, evacuation, shelter, lockdown, medical response, security response, incident command, police, fire, EMS, insurance, or legal conclusion.
- Venue contract, vendor contract, sponsor commitment, speaker contract, cancellation clause, refund policy, recording rights, consent release, privacy policy, waiver, liability, or compliance interpretation.
- Attendee, speaker, sponsor, vendor, volunteer, staff, customer, press, platform, venue, or public sends.
- Registration, ticketing, payment, attendee app, badge, access-control, venue, vendor, sponsor, CRM, email, SMS, calendar, livestream, webinar, help-desk, document, analytics, or system-of-record writes.
- Identity document, payment card, bank account, medical data, disability or accommodation details, child or age information, access code, QR code, badge ID, roster export, account credential, one-time code, private attendee list, or incident report retention, export, sharing, or long-term storage.

## Composable With

- `content-operations.md` when event topics, speaker material, recordings, recaps, clips, and social content need a content operating loop.
- `asset-repurposing-pipeline.md` when session transcripts, slides, recordings, or event notes should become multiple follow-up assets.
- `creator-monetization-operations.md` when sponsors, affiliates, media kits, or creator event revenue need monetization artifacts without commercial commitments.
- `customer-support-quality-review.md` when attendee, vendor, speaker, or sponsor conversations need quality review without sending replies or judging employees.
- `feedback-to-backlog-operations.md` when attendee feedback, incident reports, sponsor feedback, speaker feedback, or staff notes should become backlog items and post-event improvements.
- `project-workstream-status-synthesis.md` when a complex event needs status snapshots, workstream maps, blocker maps, and handoff drafts.
- `operations-execution-handoff.md` when event artifacts should become an approval sheet, owner map, blocker log, stop-condition note, and evidence-capture checklist before external action.
- `regulated-document-evidence-map.md` when venue policies, ticketing terms, accessibility guidance, insurance documents, sponsor terms, safety plans, or privacy documents need source indexes and reviewer questions.
- `draft-and-evidence-packet.md` for attendee, sponsor, vendor, venue, speaker, refund, accessibility, or incident communications that need reviewable claim-evidence tables and approval packets.
- `../laws/surface-browser-runtime.md` when working in logged-in ticketing, registration, attendee app, venue, vendor, sponsor, email, SMS, calendar, livestream, webinar, CRM, or help-desk surfaces.
- `../laws/surface-mcp-tools-auth.md` for private data, external sends, account actions, payment tools, ticketing tools, badge tools, access-control tools, attendee apps, or system writes.
- `../laws/surface-evidence-eval.md` for event claims, source recency, official verification, regulated boundaries, and method promotion.

## Evidence

Source signal: broad external-feed and domain scout review found recurring event operations signals around conference planning, ticketing-to-onsite handoff, registration infrastructure, attendee apps, QR code registration, venue changes, confirmation emails, event kits, sponsor/vendor coordination, and entrance friction. Official-source review of accessibility, ticketing, public-gathering, emergency planning, ticket-scam, and consumer-protection source types confirmed that useful event operations planning is distinct from ticket sales, payments, refunds, attendee access decisions, safety conclusions, accessibility conclusions, account writes, and sensitive attendee data retention.

Validation state: seed draft. Needs replay against real conference planning, workshop registration, venue-change communication, speaker handoff, sponsor handoff, vendor coordination, attendee FAQ, QR check-in, refund question, accessibility request routing, safety planning, incident escalation, and post-event feedback cases before promotion.

Known failures:

- Treating an event operations packet as permission to sell, buy, refund, charge, transfer, scan, invalidate, admit, deny, send, publish, sign, dispatch, or write systems.
- Inventing accessibility, ticketing, refund, resale, venue capacity, safety, emergency, insurance, privacy, recording, consent, local-law, or consumer-protection conclusions from weak data.
- Letting a polished attendee communication draft become a promise, legal notice, safety assurance, accessibility determination, refund commitment, sponsor commitment, vendor authorization, or public announcement.
- Collecting or retaining attendee identity, payment, disability, health, age, badge, QR, credential, access, roster, account, incident, or private attendee data unnecessarily.
- Hiding official-source, legal, venue, accessibility, safety, ticketing, or domain-owner uncertainty behind a tidy event checklist.
