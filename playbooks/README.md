# Productive Playbooks

Productive playbooks are output-oriented method cards.

They exist because a method system should not become only a set of gates. Gates keep work safe, but agents also need reusable ways to produce useful work: merchandise plans, content calendars, long-form drafts, research briefs, customer responses, analysis reports, and other concrete artifacts.

Use `laws/` for foundation methods that govern evidence, authority, safety, persistence, tools, and promotion. Use `playbooks/` for methods that help an agent create, improve, compare, or operate something.

## Rule Of Placement

- Put a method in `playbooks/` when its main purpose is productive output.
- Put a method in `laws/` when its main purpose is a boundary, gate, proof rule, authority rule, or promotion rule.
- Put a method in `incubator/` when the trigger, evidence, or scope is not clear yet.
- Put a method in `adapters/` or `overlays/` when it is tied to a runtime, product, project, organization, machine, or person.

Productive playbooks may reference laws, but they should not turn every step into a gate. A playbook should tell an agent how to do useful work. A law should tell an agent when work needs evidence, permission, review, or containment.

## Method Card Fields

Each playbook should declare:

- `purpose`: what useful output the playbook helps produce.
- `scope`: where it applies and where it does not.
- `inputs`: what information the agent needs before using it.
- `procedure`: the productive steps.
- `outputs`: the expected artifacts.
- `quality signals`: how to tell whether the output is useful.
- `human checkpoints`: where user or domain-owner judgment is needed.
- `composable with`: related playbooks or law families.
- `evidence`: source or experience backing the method.

## Current Seed Playbooks

| Playbook | Role | Scope | Status |
| --- | --- | --- | --- |
| [Commerce Operations Planning](commerce-operations.md) | Turn product, audience, pricing, and channel signals into merchandise and campaign work products. | commerce-neutral | seed draft |
| [Marketplace Listing And Catalog Readiness Planning](marketplace-listing-and-catalog-readiness-planning.md) | Turn marketplace listing, catalog, category, attribute, title, media, variant, policy, inventory, and launch-readiness signals into reviewable listing readiness artifacts. | marketplace-listing-catalog-readiness-neutral | seed draft |
| [Long-Form Fiction Development](longform-fiction-development.md) | Turn story intent into character, world, conflict, outline, draft, and revision artifacts. | creative-writing-neutral | seed draft |
| [Content Operations Planning](content-operations.md) | Turn audience, topic, platform, script, distribution, and feedback signals into a content operating loop. | content-operations-neutral | seed draft |
| [Research To Brief Synthesis](research-to-brief-synthesis.md) | Turn scattered source signals into an actionable brief with evidence, risks, options, and next actions. | domain-neutral | seed draft |
| [Experiment Design And Iteration](experiment-design-iteration.md) | Turn an idea into a bounded experiment, result review, and next-iteration backlog. | domain-neutral | seed draft |
| [Asset Repurposing Pipeline](asset-repurposing-pipeline.md) | Turn one source asset into multiple scoped variants with a mapping table and consistency checks. | domain-neutral | seed draft |
| [Feedback To Backlog Operations](feedback-to-backlog-operations.md) | Turn user, customer, reader, support, or stakeholder feedback into reviewable backlog items and close-loop notes. | domain-neutral | seed draft |
| [Offer And Narrative Positioning](offer-narrative-positioning.md) | Turn audience evidence and constraints into a value proposition and narrative positioning package. | domain-neutral | seed draft |
| [Draft And Evidence Packet](draft-and-evidence-packet.md) | Turn high-constraint source material into a reviewable draft, evidence table, and approval packet without producing expert conclusions. | high-constraint drafting | seed draft |
| [Regulated Document Evidence Map](regulated-document-evidence-map.md) | Turn regulated or sensitive documents into traceable evidence maps, gap tables, and review queues without producing expert conclusions. | high-constraint evidence mapping | seed draft |
| [Consumer Evidence And Escalation Planning](consumer-evidence-and-escalation-planning.md) | Turn consumer, billing, subscription, credit-report, contractor, school-process, warranty, or service-dispute signals into evidence packets, timing trackers, draft communications, and escalation maps without filing, sending, mutating accounts, or making expert conclusions. | consumer-evidence-escalation-neutral | seed draft |
| [Project Workstream Status Synthesis](project-workstream-status-synthesis.md) | Turn mixed project signals into a reviewable status snapshot, workstream map, and handoff package without becoming a task tracker. | project-status-neutral | seed draft |
| [Sales Pipeline Operations Planning](sales-pipeline-operations-planning.md) | Turn lead, account, opportunity, and stage signals into a reviewable sales pipeline packet without mutating CRM or making deal commitments. | sales-operations-neutral | seed draft |
| [Contract Fulfillment Tracking](contract-fulfillment-tracking.md) | Turn agreements, obligations, deliverables, milestones, and receipts into an operational tracking packet without making legal conclusions. | high-constraint operations | seed draft |
| [Finance Operations Review](finance-operations-review.md) | Turn operating finance signals into evidence ledgers, budget variance tables, cash-flow notes, anomaly queues, and review packets without making finance conclusions. | financial-operations-neutral | seed draft |
| [Creator Monetization Operations](creator-monetization-operations.md) | Turn audience, offer, sponsorship, affiliate, product, and revenue signals into monetization work products without publishing or making commercial commitments. | creator-monetization-neutral | seed draft |
| [Creator Rights And Disclosure Clearance Planning](creator-rights-and-disclosure-clearance-planning.md) | Turn source assets, music, clips, quotes, brand relationships, sponsorships, affiliate signals, disclosure rules, reused-content flags, and platform-policy concerns into reviewable rights and disclosure clearance artifacts without publishing, licensing, appealing, or making legal conclusions. | creator-rights-disclosure-clearance-neutral | seed draft |
| [Customer Support Quality Review](customer-support-quality-review.md) | Turn support conversations, tickets, policies, and templates into QA scorecards, error-pattern tables, improvement packets, and recheck plans without acting on customers or employees. | customer-support-quality-neutral | seed draft |
| [Data Analysis Decision Support](data-analysis-decision-support.md) | Turn datasets, metrics, experiments, logs, and dashboards into data dictionaries, quality reports, metric definitions, findings, uncertainty notes, and decision-support packets without making domain decisions. | data-analysis-neutral | seed draft |
| [Operations Execution Handoff](operations-execution-handoff.md) | Turn upstream plans and drafts into execution queues, approval sheets, blocker logs, fallback notes, and evidence-capture packets without acting on external systems. | operations-neutral | seed draft |
| [Learning Operations Planning](learning-operations-planning.md) | Turn learning goals, materials, time constraints, and feedback into study plans, concept maps, practice templates, review logs, and next-cycle adjustments. | learning-operations-neutral | seed draft |
| [Local Store Operations Planning](local-store-operations.md) | Turn local retail, restaurant, service, branch, or field-location signals into store checklists, stock watchlists, shift handoffs, review drafts, POS summaries, and next-cycle plans. | local-store-operations-neutral | seed draft |
| [HR Recruiting Operations Planning](hr-recruiting-operations.md) | Turn role, recruiting, interview, onboarding, and employee-service signals into reviewable HR operations artifacts without making employment decisions. | hr-recruiting-operations-neutral | seed draft |
| [Medical Care Coordination Planning](medical-care-coordination.md) | Turn appointment, visit, follow-up, referral, caregiver, patient-portal, and billing signals into reviewable care coordination artifacts without making clinical decisions. | medical-care-coordination-neutral | seed draft |
| [Travel Itinerary Operations Planning](travel-itinerary-operations.md) | Turn destination, date, budget, traveler, transport, lodging, activity, document, risk, and booking signals into reviewable travel planning artifacts without booking or paying. | travel-itinerary-operations-neutral | seed draft |
| [Rental Housing Operations Planning](rental-housing-operations.md) | Turn rental housing, applicant, tenant, maintenance, vendor, rent, move-in, move-out, and handoff signals into reviewable rental operations artifacts without screening, collecting, sending, dispatching, or making legal conclusions. | rental-housing-operations-neutral | seed draft |
| [Event Operations Planning](event-operations-planning.md) | Turn event, conference, registration, ticketing, attendee, venue, speaker, sponsor, vendor, safety, accessibility, and day-of signals into reviewable event operations artifacts without selling, refunding, admitting, sending, or making compliance conclusions. | event-operations-planning-neutral | seed draft |
| [Procurement And Vendor Sourcing Operations Planning](procurement-vendor-sourcing-operations.md) | Turn procurement, vendor sourcing, supplier discovery, RFI/RFQ/RFP, quote, purchase request, PO, invoice, onboarding, and reorder signals into reviewable procurement artifacts without approving vendors, buying, paying, committing contracts, or writing systems. | procurement-vendor-sourcing-operations-neutral | seed draft |
| [Field Service And Mobile Service Operations Planning](field-service-and-mobile-service-operations-planning.md) | Turn field service, mobile service, on-site job, route, dispatch, technician, crew, quote, invoice, proof-of-service, and follow-up signals into reviewable mobile operations artifacts without dispatching, sending, paying, or writing systems. | field-service-mobile-service-operations-neutral | seed draft |
| [After-Sales Returns And RMA Operations Planning](after-sales-returns-and-rma-operations-planning.md) | Turn after-sales, return, exchange, refund, replacement, warranty, RMA, repair, damaged-shipment, dispute, chargeback, label, reverse-logistics, and restock signals into reviewable after-sales artifacts without approving, sending, paying, shipping, or writing systems. | after-sales-returns-rma-operations-neutral | seed draft |
| [Order Fulfillment And Shipping Operations Planning](order-fulfillment-and-shipping-operations-planning.md) | Turn order, inventory, pick, pack, shipment, label, carrier, tracking, split-shipment, backorder, delay, exception, warehouse, and 3PL signals into reviewable fulfillment artifacts without fulfilling, buying labels, dispatching carriers, shipping, sending, or writing systems. | order-fulfillment-shipping-operations-neutral | seed draft |

These are seed drafts, not universal laws. They are intentionally broad enough to help many concrete agents, such as an e-commerce operator, a writing assistant, or a media manager, while still requiring scoped adaptation before use in a real project.
