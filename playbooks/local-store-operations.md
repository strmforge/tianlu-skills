# Playbook: Local Store Operations Planning

Status: seed draft

Scope: local-store-operations-neutral. This playbook helps an agent turn local retail, restaurant, service, branch, booth, clinic-front-desk, or field-location signals into reviewable store operating artifacts. It is not tied to one POS, booking system, delivery platform, marketplace, franchise, cuisine, country, store format, or labor model.

## Purpose

Help an agent produce useful local-operations work products: opening and closing checklists, shift-readiness notes, stock and supply watchlists, review and complaint drafts, sales or POS summaries, issue logs, staff handoff notes, vendor question lists, and next-day operating plans.

The playbook supports preparation and review. It does not make live store, labor, food-safety, payment, customer, employee, or system-of-record decisions.

## Inputs

- Store, branch, location, or service counter objective.
- Operating window, peak periods, staffing assumptions, and known constraints.
- Store notes, sales summaries, POS exports, inventory counts, supply lists, reservation or appointment signals, review snippets, complaint notes, or incident logs supplied by the user.
- Current checklist, SOP, training guide, role map, or handoff format if available.
- Customer-impact, food-safety, regulated-service, labor, privacy, and payment boundaries supplied by the user.
- External system surfaces described at a high level, such as POS, inventory, booking, scheduling, delivery, review, support, or vendor tools.

## Procedure

1. Define the location and operating boundary.
   - Name the location type, operating day or period, objective, known systems, and non-goals.
   - Separate preparation drafts from live store actions, system writes, customer messages, payments, orders, and employee decisions.

2. Build the operating snapshot.
   - Summarize current facts: sales or visit signals, staffing coverage, stock or supply status, open issues, customer feedback, and unresolved questions.
   - Mark missing counts, stale exports, inferred trends, and unsupported assumptions.

3. Produce the readiness checklist.
   - Draft opening, shift-change, closing, cleanliness, equipment, signage, queue, reservation, pickup, or service-readiness checklists as relevant.
   - Keep safety, regulated-service, and compliance items as prompts for trained staff or managers, not final determinations.

4. Prepare stock and supply review.
   - Convert inventory, sales, or usage signals into a stock watchlist, reorder question list, substitution note, and count-verification checklist.
   - Do not invent quantities, place orders, adjust inventory records, or decide shrinkage, spoilage, loss, or recall conclusions.

5. Prepare staffing and handoff drafts.
   - Convert expected workload into role coverage notes, shift handoff notes, break-coverage questions, training needs, and escalation points.
   - Treat schedules, wage impacts, time records, payroll, discipline, hiring, termination, and performance decisions as human checkpoints.

6. Package customer-facing draft work.
   - Draft review replies, complaint follow-up notes, FAQ updates, service recovery options, or front-desk scripts when enough policy context exists.
   - Separate draft wording from sends, refunds, compensation, discounts, apology commitments, or customer-account actions.

7. Summarize store data for review.
   - Produce a POS or operations summary with metric definitions, observed changes, anomalies, and questions for the manager.
   - Separate descriptive observations from causal claims, fraud claims, safety claims, pricing decisions, or staffing decisions.

8. Create the next operating cycle.
   - Produce the next-day or next-shift plan, approval list, blocker log, evidence to collect, and post-shift review prompts.
   - Route executable actions to an operations handoff packet when they touch systems, accounts, money, staff, customers, or external vendors.

## Outputs

- Local operations snapshot.
- Opening, shift-change, and closing checklist.
- Store readiness checklist.
- Stock and supply watchlist.
- Count-verification and reorder question list.
- Shift coverage and handoff draft.
- Review or complaint response draft.
- POS, sales, or traffic summary.
- Issue and incident log.
- Vendor, manager, or reviewer question list.
- Next-day or next-shift operating plan.
- Evidence-capture checklist.

## Quality Signals

- The output gives a manager or operator concrete work artifacts, not only risk warnings.
- Each stock, staffing, customer, or metric claim is tied to supplied evidence or marked as an assumption.
- Checklists are short enough to use during a real shift.
- System writes, money actions, customer sends, staff decisions, and regulated conclusions are clearly separated from drafts.
- The plan includes what evidence to collect after execution: counts, screenshots, receipts, issue ids, photos, customer replies, or manager notes.
- The playbook improves repeatability without pretending every location has the same rules, menu, staffing model, or compliance obligations.

## Human Checkpoints

- Price changes, discount activation, promotion launch, purchases, vendor orders, payments, refunds, compensation, cash handling, or financial commitments.
- POS, inventory, booking, scheduling, delivery, review, CRM, payroll, accounting, or system-of-record writes.
- Published schedules, shift changes, wage, overtime, payroll, time-record, employee performance, discipline, hiring, termination, or staffing decisions.
- Food safety, allergen, sanitation, product safety, recall, spoilage, shrinkage, theft, workplace safety, security, medical, legal, or regulated-service conclusions.
- Customer replies, public review replies, apology commitments, service recovery, refunds, escalations, or external notices.
- Final operating priority when tradeoffs affect customer safety, employee safety, revenue, compliance, or brand trust.

## Composable With

- `commerce-operations.md` when product, offer, pricing, campaign, inventory, or review signals should become selling or promotion drafts.
- `customer-support-quality-review.md` when customer conversations, complaints, reviews, or service recovery need quality review.
- `feedback-to-backlog-operations.md` when recurring issues should become backlog items or close-loop notes.
- `data-analysis-decision-support.md` when POS, sales, traffic, inventory, or staffing data needs metric definitions and descriptive analysis.
- `operations-execution-handoff.md` when the plan should become a ready-to-execute queue with approvals, owners, blockers, and evidence capture.
- `learning-operations-planning.md` when staff training, onboarding, or procedure learning needs a reviewable learning loop.
- `../laws/surface-browser-runtime.md` when working in logged-in dashboards, review platforms, booking tools, delivery tools, or POS portals.
- `../laws/surface-mcp-tools-auth.md` for account actions, APIs, private data, payments, system writes, or external sends.
- `../laws/surface-evidence-eval.md` for store metrics, trend claims, safety claims, improvement claims, or method promotion.

## Evidence

Source signal: broad X and domain scout review found recurring local-operations signals around restaurant operations, retail operations, POS analytics, restocking, scheduling, review response, store checklists, and remote operations. Official-source review of FDA Food Code material, U.S. Department of Labor FLSA recordkeeping and retail guidance, and National Restaurant Association 2026 industry reporting confirmed that retail food safety and labor recordkeeping are regulated surfaces, while restaurant operators are investing in technology, automation, and data analytics for efficiency and workforce development.

Validation state: seed draft. Needs replay against real store opening/closing, review response, POS summary, stock review, shift handoff, and post-shift review cases before promotion.

Known failures:

- Treating draft checklists as permission to change prices, place orders, issue refunds, publish schedules, or write POS and inventory systems.
- Inventing stock counts, labor availability, sales causes, food-safety status, or customer commitments from weak data.
- Making food safety, allergen, recall, sanitation, wage, payroll, employee, legal, or regulated-service conclusions.
- Producing a tidy operations packet that is too long to use during a real shift.
