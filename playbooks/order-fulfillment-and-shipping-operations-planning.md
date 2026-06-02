# Playbook: Order Fulfillment And Shipping Operations Planning

Status: seed draft

Scope: order-fulfillment-shipping-operations-neutral. This playbook helps an agent turn order, inventory, pick, pack, shipment, label, carrier, warehouse, fulfillment service, tracking, split shipment, backorder, delay, exception, and delivery-performance signals into reviewable fulfillment operations artifacts. It is not tied to one marketplace, ecommerce platform, carrier, WMS, OMS, 3PL, fulfillment service, seller account, country, delivery promise, or warehouse layout.

## Purpose

Help an agent produce useful order-fulfillment work products: order readiness snapshots, pick-pack-ship queues, stock and allocation question lists, shipping option review notes, label and pickup handoff packets, split-shipment or backorder plans, tracking and carrier-scan evidence packets, delay and exception queues, warehouse or 3PL handoffs, customer communication drafts, and fulfillment-performance review notes.

The playbook supports preparation and review. It does not fulfill orders, buy labels, dispatch carriers, ship packages, confirm shipment, promise delivery dates, update tracking, write seller or warehouse systems, or send customer messages.

## Inputs

- Order ids, line items, SKUs, quantities, variants, customer-selected shipping method, order time, promised ship or delivery window, and channel supplied by the user.
- Inventory availability, reserved stock, fulfillment location, bin or shelf notes, lot, serial, batch, bundle, kit, preorder, backorder, made-to-order, or custom-order constraints.
- Packaging, insert, label, customs, insurance, signature, hazardous-material, fragile, temperature, weight, dimension, address, pickup, drop-off, and carrier constraints supplied by the user.
- Marketplace, store, carrier, warehouse, 3PL, fulfillment-service, or internal SLA rules supplied by the user.
- Current order statuses, fulfillment statuses, label statuses, tracking events, carrier scans, handoff notes, exception messages, delivery estimates, or support tickets supplied by the user.
- System surfaces described at a high level, such as ecommerce, marketplace, OMS, WMS, shipping, carrier, 3PL, help desk, CRM, inventory, accounting, spreadsheet-of-record, or analytics tools.

## Procedure

1. Define the fulfillment boundary.
   - Name the channel, order set, fulfillment location, time window, carrier surface, SLA source, decision owner, systems in scope, and non-goals.
   - Separate review artifacts from live fulfillment, label purchase, shipment confirmation, pickup booking, tracking upload, inventory write, customer send, refund, cancellation, and payment actions.

2. Build the order readiness snapshot.
   - Summarize each order's line items, quantity, SKU or variant, selected shipping method, promised ship or delivery window, fulfillment location, stock status, and known blockers.
   - Mark missing address validation, missing dimensions, inventory mismatch, unreserved stock, payment hold, fraud hold, customization hold, preorder or backorder status, regulatory or customs needs, and customer notes.

3. Prepare the pick-pack-ship queue.
   - Convert ready orders into a reviewable queue with pick priority, bin or location notes, bundle or kit requirements, packaging needs, insert requirements, label needs, and handoff owner.
   - Keep the queue as a draft. Do not mark items picked, packed, fulfilled, shipped, collected, or delivered.

4. Review routing and shipping options.
   - Compare shipping service options, carrier constraints, pickup or drop-off needs, cut-off times, promised windows, cost assumptions, insurance or signature needs, and risk flags.
   - For multi-location inventory, split shipments, partial fulfillment, backorders, and substitutions, build a question list and option table for a human operator.
   - Do not choose a final carrier, buy labels, change shipping settings, or promise delivery dates.

5. Prepare label, pickup, and carrier-scan handoff.
   - Build a label-readiness checklist covering address, weight, dimensions, service level, customs, insurance, signature, fragile or hazardous flags, printer or format needs, and void or reprint questions.
   - Build a pickup or drop-off handoff note and a carrier-scan evidence checklist.
   - Do not buy, print, void, or reprint labels; schedule pickups; hand packages to carriers; upload tracking; or confirm shipment.

6. Track delays and exceptions.
   - Convert fulfillment blockers, missing scans, stale tracking, late dispatch risk, out-of-stock risk, wrong item risk, damaged package risk, carrier exception, weather disruption, system outage, and warehouse capacity issues into an exception queue.
   - For each exception, list evidence, customer-impact risk, account-health or SLA risk, owner, review question, and fallback option.
   - Keep delay notes separate from customer promises, cancellation decisions, refunds, and compliance conclusions.

7. Draft customer and internal communication packets.
   - Draft unsent internal handoffs, warehouse or 3PL questions, support notes, delay-update drafts, missing-info requests, and tracking-update drafts when enough context exists.
   - Label every customer-facing draft as unsent and separate wording from shipment promises, refund offers, compensation, cancellation, or account changes.

8. Create the fulfillment learning loop.
   - Convert repeated exceptions into inventory, listing, packaging, picking, carrier, warehouse, 3PL, customer-support, shipping-template, or SLA improvement candidates.
   - Route recurring issues to commerce, after-sales, procurement, finance, data-analysis, or operations-handoff playbooks as needed.

## Outputs

- Order fulfillment operations brief.
- Order readiness and blocker snapshot.
- Pick-pack-ship queue draft.
- Inventory allocation and stock mismatch question list.
- Multi-location, split-shipment, partial-fulfillment, preorder, backorder, made-to-order, or custom-order option table.
- Shipping service and routing review note.
- Label-readiness checklist.
- Pickup, drop-off, warehouse, or 3PL handoff packet.
- Carrier-scan and tracking evidence checklist.
- Delay, stale-tracking, missing-scan, late-dispatch, out-of-stock, wrong-item, damaged-package, carrier-exception, or system-outage queue.
- Customer communication draft packet.
- Account-health, SLA, and delivery-promise risk note.
- Fulfillment performance review and improvement candidates.
- Fulfillment operations handoff packet.

## Quality Signals

- The output gives an operator concrete fulfillment artifacts, not only warnings.
- Each order-status, shipment, tracking, label, delay, or carrier claim is tied to supplied evidence or marked as missing.
- The queue separates ready orders, blocked orders, partial orders, exception orders, and review-only drafts.
- Shipping options preserve cost, time, service-level, carrier, packaging, and customer-impact assumptions.
- Customer-facing drafts are useful but clearly unsent and separated from commitments.
- The playbook turns repeat exceptions into improvement candidates without treating one carrier scan, support note, or platform metric as the whole truth.
- The plan includes post-execution evidence to capture: fulfilled order id, label id, carrier, service, tracking id, first scan, pickup receipt, shipment confirmation, exception id, delivery event, customer message id, warehouse handoff, or issue id.

## Human Checkpoints

- Final fulfillment decision, carrier choice, shipping service selection, label purchase, label void, pickup scheduling, drop-off, warehouse release, shipment confirmation, tracking upload, delivery promise, cancellation, refund, replacement, compensation, or customer send.
- Inventory allocation, stock reservation, stock adjustment, substitution, split shipment, partial fulfillment, backorder handling, made-to-order release, custom-order release, hazardous or restricted item handling, customs declaration, insurance, signature, or regulated-shipping decision.
- Ecommerce, marketplace, OMS, WMS, 3PL, shipping, carrier, help desk, CRM, inventory, accounting, document, spreadsheet-of-record, or system-of-record writes.
- Legal, tax, customs, import/export, consumer-protection, product-safety, hazardous-material, insurance, carrier-liability, platform-performance, account-health, or compliance conclusions.
- Sensitive customer address, payment, identity, account, health, child, elder, vulnerable-person, credential, device, serial-number, customs, private-order, or delivery-location data retention.

## Composable With

- `commerce-operations.md` when product, listing, inventory, shipping promise, or campaign choices shape fulfillment work.
- `after-sales-returns-and-rma-operations-planning.md` when fulfillment issues become returns, refunds, replacements, warranty, disputes, or reverse logistics.
- `customer-support-quality-review.md` when shipping-status conversations, delay macros, escalation timing, or support consistency need QA review.
- `feedback-to-backlog-operations.md` when repeated fulfillment issues should become backlog items or close-loop notes.
- `data-analysis-decision-support.md` when late dispatch, valid tracking, fulfillment time, pick error, stockout, carrier, channel, or warehouse patterns need descriptive analysis.
- `procurement-vendor-sourcing-operations.md` when packaging, carriers, 3PLs, warehouse services, supplies, or replacement parts need sourcing review.
- `finance-operations-review.md` when shipping cost, label cost, delivery claim, refund exposure, or margin impact needs finance-owner review.
- `operations-execution-handoff.md` when the fulfillment packet should become a ready-to-execute queue with approvals, owners, blockers, and evidence capture.
- `../laws/surface-browser-runtime.md` when working in logged-in seller, marketplace, shipping, carrier, warehouse, 3PL, or support portals.
- `../laws/surface-mcp-tools-auth.md` for APIs, account actions, customer data, labels, tracking, carrier actions, inventory, messages, payments, or system writes.
- `../laws/surface-evidence-eval.md` for shipment claims, delay claims, carrier claims, SLA claims, performance claims, and method promotion.

## Evidence

Source signal: broad X and domain scout review found recurring fulfillment signals around multi-warehouse routing, split shipments, label-to-scan gaps, late dispatch, WMS/3PL handoffs, shipping automation, carrier scans, account-health metrics, and delayed or missing tracking. Primary-source review of Shopify order-fulfillment and shipping-label guidance, Amazon Fulfilled by Merchant and Seller Fulfilled Prime guidance, TikTok Shop fulfillment policy, USPS business-shipping guidance, and FTC prompt-delivery guidance confirmed that fulfillment crosses order preparation, picking, packing, labels, carrier handoff, tracking, promised shipment windows, delay notices, account metrics, and system-write boundaries.

Validation state: seed draft. Needs replay against ecommerce order queues, multi-location fulfillment, split shipments, backorders, made-to-order products, missing-scan cases, late-dispatch cases, WMS/3PL handoffs, marketplace shipping metrics, carrier pickup failures, and customer delay-update drafts before promotion.

Known failures:

- Treating a fulfillment queue as permission to fulfill orders, buy labels, confirm shipment, upload tracking, schedule pickup, dispatch a carrier, or write systems.
- Treating a label-created state, tracking number, first scan, or platform metric as proof that the customer received the package.
- Hiding missing stock, stale tracking, missing carrier scans, address problems, packaging constraints, or SLA ambiguity behind a tidy ship-now recommendation.
- Promising delivery dates, refunds, replacements, compensation, cancellation, or compliance status from a review packet.
- Retaining sensitive customer, delivery, payment, account, identity, serial-number, customs, or private-order data without scoped approval.
