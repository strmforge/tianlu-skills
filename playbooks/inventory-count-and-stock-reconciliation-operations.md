# Playbook: Inventory Count And Stock Reconciliation Operations

Status: seed draft

Scope: inventory-count-stock-reconciliation-neutral. This playbook helps an agent turn physical counts, system quantities, POS or WMS exports, stock movement notes, return or receiving records, damage notes, and adjustment history into reviewable inventory count and reconciliation artifacts. It is not tied to one marketplace, POS, WMS, ERP, accounting system, retail format, warehouse layout, product category, country, or stock-count cadence.

## Purpose

Help an agent produce useful inventory-control work products: count plans, SKU and location count sheets, expected-versus-observed variance tables, recount queues, stock movement ledgers, adjustment-candidate handoff packets, shrinkage or damage review questions, root-cause hypothesis lists, and next-cycle count controls.

The playbook supports preparation, reconciliation, and handoff. It does not adjust inventory, approve write-offs, decide shrinkage, theft, spoilage, recall, accounting, tax, insurance, employee, vendor, customer, product-safety, or legal conclusions, or write POS, WMS, ERP, marketplace, spreadsheet-of-record, accounting, or inventory systems.

## Inputs

- Count objective: full count, cycle count, spot check, location count, SKU family count, high-variance review, stockout review, receiving review, return restock review, or shrinkage review.
- Physical count data: SKU, variant, barcode, lot, serial, batch, bin, shelf, location, unit of measure, counted quantity, counter, timestamp, and evidence supplied by the user.
- System quantities: available, on hand, committed, reserved, damaged, unavailable, safety stock, in transit, received, returned, adjusted, or transferred quantities supplied by the user.
- Movement records: sales, refunds, returns, exchanges, receiving, purchase orders, transfers, fulfillment, cancellations, damaged goods, samples, internal use, donations, expired stock, and manual adjustment history supplied by the user.
- Source exports and surfaces described at a high level, such as POS, inventory, WMS, OMS, ERP, marketplace, 3PL, accounting, spreadsheet, dashboard, or supplier systems.
- Stock-control boundaries supplied by the user: who can approve recounts, who can approve adjustments, who owns accounting, who owns loss prevention, and what data may be retained.

## Procedure

1. Define the inventory boundary.
   - Name the count scope, location, SKU set, time window, system sources, unit conventions, data cutoff, decision owner, and non-goals.
   - Separate reconciliation artifacts from live inventory writes, stock adjustments, purchase orders, fulfillment actions, write-offs, employee actions, vendor claims, customer messages, and accounting entries.

2. Build the count plan.
   - Produce a count sheet or count packet with SKU, variant, barcode, lot, serial, bin, shelf, location, expected quantity if allowed, blind-count flag, unit of measure, count owner, evidence needed, and recount trigger.
   - Mark frozen, moving, committed, reserved, in-transit, returned, quarantined, damaged, expired, sample, internal-use, and unavailable stock as separate count questions when relevant.

3. Normalize source quantities.
   - Convert system exports into a source ledger that preserves source name, timestamp, field meaning, location, quantity type, and known limitations.
   - Keep available, on hand, committed, reserved, unavailable, in transit, and adjusted quantities distinct instead of flattening them into one stock number.

4. Reconcile expected versus observed stock.
   - Build a variance table by SKU, variant, lot, serial, bin, shelf, or location.
   - Include expected quantity, observed count, variance quantity, variance value if supplied, last movement evidence, source timestamp, recount status, and reviewer question.
   - Mark stale exports, missing locations, unit mismatches, bundle or kit ambiguity, open orders, pending receipts, pending returns, and integration delays as uncertainty flags.

5. Prepare recount and investigation queues.
   - Route high-value, high-quantity, high-risk, negative, zeroed, unexpected-found, perishable, regulated, serial-numbered, or repeated-variance items into a recount queue.
   - Convert variance patterns into hypothesis questions: counting error, receiving gap, sales or refund timing, transfer mismatch, return-restock ambiguity, bundle/kit handling, unit conversion, damaged or expired stock, theft or loss allegation, spoilage, system sync issue, or process gap.
   - Keep these as questions, not conclusions.

6. Draft adjustment-candidate handoff.
   - Package only candidate adjustments with evidence: SKU, location, current system quantity, proposed counted quantity, reason candidate, evidence refs, recount result, owner, approval needed, and rollback or correction note.
   - Use neutral reason candidates such as count discrepancy, correction, received stock, damaged, expired, internal use, donation, theft or loss review, found stock, transfer mismatch, return restock, or unavailable stock only when the supplied evidence supports a review question.
   - Do not submit, approve, schedule, or write the adjustment.

7. Close the learning loop.
   - Summarize recurring variance patterns into process-improvement candidates: count cadence, barcode discipline, receiving process, transfer process, return inspection, bundle handling, POS sync, warehouse layout, shelf labeling, cycle-count prioritization, staff training, or supplier follow-up.
   - Route operational follow-up to local store, fulfillment, after-sales, procurement, finance, data-analysis, or operations-handoff playbooks as needed.

## Outputs

- Inventory count operations brief.
- Count scope and source boundary note.
- SKU, bin, shelf, location, lot, serial, or batch count sheet.
- Source quantity ledger.
- Expected-versus-observed variance table.
- Recount queue and recount evidence checklist.
- Stock movement timeline or ledger.
- Adjustment-candidate handoff packet.
- Shrinkage, theft, loss, spoilage, damage, expiry, recall, vendor, employee, customer, or process review question list.
- High-risk SKU, location, category, or repeated-variance watchlist.
- Next-cycle count control checklist.
- Inventory reconciliation operations handoff packet.

## Quality Signals

- The output gives an operator a usable reconciliation packet, not only a warning list.
- Each variance links to a physical count, system quantity, movement record, timestamp, or explicit missing evidence.
- Quantity types stay separate: available is not treated as on hand, committed is not treated as missing, and unavailable stock is not treated as sellable without evidence.
- The packet separates recount candidates, adjustment candidates, process hypotheses, and human approvals.
- High-risk claims such as theft, loss, spoilage, recall, accounting impact, employee responsibility, vendor responsibility, or customer impact remain review questions.
- The plan includes post-action evidence to capture after human execution: adjustment id, reason, approver, timestamp, before/after quantity, source record, receipt, photo, count sheet, movement record, or issue id.

## Human Checkpoints

- Final inventory adjustment, stock write, write-off, restock, disposal, quarantine release, recall handling, transfer, purchase order, fulfillment release, or accounting entry.
- Reason-code selection when it implies shrinkage, theft, loss, spoilage, expiry, damage, recall, fraud, employee responsibility, vendor responsibility, customer responsibility, insurance, tax, product safety, or legal effect.
- POS, inventory, WMS, OMS, ERP, marketplace, supplier, 3PL, accounting, dashboard, document, spreadsheet-of-record, or system-of-record writes.
- Employee, vendor, customer, supplier, carrier, warehouse, or 3PL accusation, discipline, chargeback, claim, penalty, reimbursement, or contract action.
- Sensitive customer, employee, vendor, supplier, serial-number, product identifier, pricing, cost, margin, location, security, loss-prevention, account, credential, or regulated-product data retention.

## Composable With

- `local-store-operations.md` when stock reconciliation is part of a store, restaurant, branch, or shift operating cycle.
- `order-fulfillment-and-shipping-operations-planning.md` when stock mismatch affects open orders, allocation, picking, packing, split shipment, or backorder review.
- `after-sales-returns-and-rma-operations-planning.md` when returns, RMA receiving, restock, refurbish, disposal, or damaged-shipment evidence affects stock.
- `procurement-vendor-sourcing-operations.md` when receiving, reorder, supplier discrepancy, lead time, or purchase-order follow-up is needed.
- `finance-operations-review.md` when inventory value, write-off, margin, shrinkage, insurance, accounting, or audit questions need finance-owner review.
- `data-analysis-decision-support.md` when variance, stockout, shrinkage, or cycle-count patterns need descriptive analysis.
- `operations-execution-handoff.md` when the reconciliation packet should become a ready-to-execute queue with approvals, owners, blockers, and evidence capture.
- `../laws/surface-browser-runtime.md` when working in logged-in POS, inventory, WMS, OMS, marketplace, 3PL, supplier, or accounting portals.
- `../laws/surface-mcp-tools-auth.md` for APIs, account actions, private data, inventory tools, payments, system writes, or external sends.
- `../laws/surface-evidence-eval.md` for variance claims, shrinkage claims, adjustment claims, process-improvement claims, and method promotion.

## Evidence

Source signal: broad external and domain scout review found recurring small-business, ecommerce, retail, and warehouse pain around physical counts, cycle counts, POS or inventory exports, adjustment reasons, unavailable stock, damaged or lost goods, and mismatch between counted, available, committed, reserved, and on-hand quantities. Primary-source review of Shopify inventory adjustment guidance, Shopify inventory reporting guidance, Square inventory count guidance, and Lightspeed inventory count and adjustment guidance confirmed that stock counts, variance review, adjustment reasons, history or audit trails, and system-write authority must be kept distinct.

Validation state: seed draft. Needs replay against real retail stock counts, ecommerce stock mismatches, Shopify or POS count exports, multi-location warehouse counts, return-restock reviews, receiving discrepancy cases, shrinkage-review cases, and cycle-count improvement plans before promotion.

Known failures:

- Treating a variance table as permission to adjust inventory, write off stock, release quarantined stock, dispose of goods, place orders, fulfill orders, or write systems.
- Flattening available, on-hand, committed, reserved, unavailable, in-transit, and adjusted quantities into one misleading number.
- Turning a count discrepancy into a theft, loss, spoilage, employee, vendor, customer, accounting, tax, insurance, product-safety, recall, or legal conclusion.
- Hiding stale exports, open orders, pending receipts, pending returns, bundle ambiguity, unit mismatch, or integration delay behind a tidy adjustment recommendation.
- Retaining sensitive customer, employee, vendor, supplier, serial-number, pricing, cost, margin, location, security, loss-prevention, account, credential, or regulated-product data without scoped approval.
