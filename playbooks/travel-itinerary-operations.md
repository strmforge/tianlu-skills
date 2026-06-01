# Playbook: Travel Itinerary Operations Planning

Status: seed draft

Scope: travel-itinerary-operations-neutral. This playbook helps an agent turn destination, date, budget, traveler, preference, route, lodging, activity, document, risk, and booking signals into reviewable travel planning artifacts. It is not tied to one travel platform, airline, hotel, rail operator, country, passport, visa regime, insurer, payment method, or travel style.

## Purpose

Help an agent produce useful travel operations work products: trip briefs, itinerary grids, route or transport option tables, stay shortlists, activity shortlists, packing checklists, document checklists, visa or entry question lists, budget worksheets, risk/weather/accessibility notes, backup plans, booking handoff packets, day-by-day execution checklists, and travel coordination handoff packets.

This playbook supports planning, comparison, and handoff. It does not book, pay, lock inventory, change reservations, submit applications, guarantee entry, make safety conclusions, provide medical or legal advice, promise refunds or insurance coverage, or mutate travel accounts.

## Inputs

- Trip purpose, destination candidates, date windows, trip length, traveler count, traveler roles, accessibility needs, pace preference, budget range, and must-do or must-avoid items.
- Existing flight, rail, lodging, activity, restaurant, event, map, email, booking, or group-chat notes supplied by the user.
- Traveler constraints such as passport or document questions, visa or entry uncertainty, dietary needs, mobility constraints, health considerations, school/work calendar, luggage constraints, or pet/child/elder needs.
- Source material such as official travel advisories, passport/visa/entry pages, airline or hotel terms, operator pages, weather or transport alerts, travel health pages, insurance terms, payment dispute pages, or user-provided booking emails.
- External system surfaces described at a high level, such as OTA, airline, hotel, rail, ride-hailing, activity, restaurant, insurer, payment, visa, map, calendar, email, SMS, or group-chat tools.

## Procedure

1. Define the planning boundary.
   - Name the trip purpose, traveler group, date window, decision owner, artifact type, source inputs, and non-goals.
   - Separate planning artifacts from booking, payment, visa/application submission, account actions, insurance decisions, safety decisions, and professional advice.

2. Normalize traveler constraints.
   - Convert free-form wishes into destination, date, budget, traveler, pace, accessibility, document, risk, and preference fields.
   - Mark unknowns that require official-source or human confirmation, such as visa/entry rules, passport validity, event opening, transport disruption, weather alert, refund terms, or insurance coverage.
   - Use placeholders for sensitive data instead of collecting passport numbers, identity numbers, payment details, account credentials, loyalty numbers, or one-time codes.

3. Build the itinerary structure.
   - Produce a trip brief with purpose, constraints, must-do items, must-avoid items, assumptions, and open questions.
   - Produce an itinerary grid by day, city/area, time block, activity type, transport dependency, buffer, and backup slot.
   - Keep real-time prices, inventory, opening hours, seat availability, hotel availability, and event availability marked as `needs current official check` unless supplied by the user with timestamped evidence.

4. Compare options without pretending to transact.
   - Produce route or transport option tables, stay shortlists, activity shortlists, and budget worksheets using ranges, qualitative labels, or source timestamps.
   - Separate user preferences, quoted source facts, estimates, assumptions, and missing confirmation.
   - Do not select final flights, hotels, activities, insurance products, visa types, or payment paths as a binding decision.

5. Add risk, document, and backup layers.
   - Produce a document checklist, visa or entry question list, travel health question list, risk/weather/accessibility note, and backup plan.
   - Tie risk notes to official or user-supplied source pointers where possible.
   - Treat government advisories, passport/visa/entry pages, official weather and transport alerts, CDC/WHO or local health pages, operator terms, payment terms, and insurance terms as source checks, not final guarantees.

6. Package booking and execution handoff.
   - Produce a booking handoff packet with candidates, constraints, approval questions, price ceilings, time windows, terms to verify, and stop conditions.
   - Produce a day-by-day execution checklist with non-sensitive reminders, source links, local confirmations to perform, and evidence to capture after human execution.
   - Route executable actions to an operations handoff packet when they touch booking, payment, account, identity, visa, insurance, email, SMS, calendar, map, or group-chat systems.

## Outputs

- Trip brief.
- Itinerary grid.
- Route or transport option table.
- Stay shortlist.
- Activity shortlist.
- Packing checklist.
- Document checklist.
- Visa or entry question list.
- Budget worksheet.
- Risk, weather, or accessibility note.
- Backup plan.
- Booking handoff packet.
- Day-by-day execution checklist.
- Travel coordination handoff packet.

## Quality Signals

- The artifact helps a traveler, family member, travel coordinator, operations owner, or travel advisor review the trip without pretending to be the booking or legal authority.
- Dates, destinations, traveler constraints, assumptions, and open questions are visible.
- Real-time facts are timestamped or marked for current official confirmation.
- Options are comparable without hiding uncertainty, price volatility, inventory volatility, refund limits, or document requirements.
- The output includes next human review steps, official-source checks, and evidence to capture before or after booking.

## Human Checkpoints

- Flight, rail, hotel, rental, activity, restaurant, tour, ticket, insurance, visa, passport, entry, health document, payment, refund, cancellation, chargeback, complaint, or account decisions.
- Booking, payment, purchase, reservation, inventory hold, ticketing, check-in, cancellation, refund request, complaint submission, application submission, visa form, insurance claim, chargeback, or account mutation.
- Passport number, identity number, payment card, bank account, account password, one-time code, loyalty number, address, private itinerary, child/minor data, health data, disability data, or travel-document retention, export, sharing, or long-term storage.
- Claims that a price, inventory, flight status, hotel availability, opening time, event availability, visa/entry result, safety condition, health requirement, refund, insurance coverage, or travel right is guaranteed, current, complete, legally sufficient, or final.
- Legal, immigration, medical, safety, insurance, consumer-rights, tax, customs, or travel-regulation interpretation.

## Composable With

- `research-to-brief-synthesis.md` for destination, activity, source, and risk research briefs before itinerary assembly.
- `data-analysis-decision-support.md` for descriptive comparison of budgets, transport options, route durations, and tradeoffs without making the travel decision.
- `operations-execution-handoff.md` when travel artifacts should become an approval sheet, owner map, blocker log, and evidence-capture checklist before external actions.
- `draft-and-evidence-packet.md` for high-constraint refund, complaint, visa, insurer, airline, hotel, or operator draft messages that need reviewable claim-evidence tables.
- `regulated-document-evidence-map.md` when visa, entry, insurance, operator terms, or travel policy documents need source indexes, gap tables, conflict tables, and reviewer questions.
- `../laws/surface-browser-runtime.md` when working in logged-in travel, airline, hotel, OTA, map, calendar, email, group-chat, payment, insurer, visa, or government portals.
- `../laws/surface-mcp-tools-auth.md` for private data, account actions, external sends, bookings, payments, identity, insurance, travel tools, or system writes.
- `../laws/surface-evidence-eval.md` for travel claims, source recency, official verification, and method promotion.

## Evidence

Source signal: broad external-feed and domain scout review found recurring travel operations signals around itinerary planners, collaborative trip planning, trip mode, real-time alerts, AI travel agents, booking handoff, maps, group planning, budgets, packing lists, and the hard boundary between chatty itinerary generation and live booking with inventory, policy, payment, and audit trails. Official-source review of government travel advisories, passport/visa/entry source types, airline/hotel/operator terms, weather and transport alerts, CDC/WHO travel health source types, and FTC/consumer-protection travel guidance confirmed that travel planning can be useful without becoming booking, payment, immigration, health, insurance, or refund authority.

Validation state: seed draft. Needs replay against real family trip planning, business travel planning, multi-city itinerary, visa uncertainty, weather disruption, cancellation/refund, accessibility, and group coordination cases before promotion.

Known failures:

- Inventing prices, inventory, flight status, hotel availability, opening hours, or live travel facts from stale or weak sources.
- Treating a booking handoff packet as permission to book, pay, submit, cancel, refund, complain, or mutate accounts.
- Promising visa, entry, safety, health, refund, insurance, or consumer-rights outcomes.
- Collecting or retaining passport, identity, payment, account, health, child, or private itinerary data unnecessarily.
- Hiding uncertainty behind a polished itinerary instead of surfacing official checks, assumptions, and stop conditions.
