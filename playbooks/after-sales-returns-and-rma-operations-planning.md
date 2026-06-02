# Playbook: After-Sales Returns And RMA Operations Planning

Status: seed draft

Scope: after-sales-returns-rma-operations-neutral. This playbook helps an agent turn after-sales, return, exchange, refund, replacement, warranty, RMA, repair intake, damaged shipment, missing item, subscription cancellation, chargeback, dispute, return label, reverse logistics, restock, customer complaint, marketplace case, and post-purchase support signals into reviewable after-sales operations artifacts. It is not tied to one marketplace, ecommerce platform, help desk, payment processor, carrier, warehouse, return portal, repair center, subscription system, product category, country, or refund policy.

## Purpose

Help an agent produce useful after-sales work products: return-intake summaries, policy-and-evidence maps, RMA review packets, refund and replacement question lists, warranty-claim packets, damaged-shipment evidence packets, return-label handoff notes, reverse-logistics and restock handoffs, chargeback or dispute evidence packs, customer communication drafts, exception queues, and post-purchase improvement notes.

The playbook supports preparation and review. It does not approve refunds, replacements, warranty coverage, returns, exchanges, cancellations, chargebacks, payments, inventory adjustments, or customer communications, and it does not write seller, payment, carrier, warehouse, repair, CRM, help-desk, or accounting systems.

## Inputs

- Order, customer request, return reason, product, SKU, quantity, dates, delivery status, and channel supplied by the user.
- Return policy, warranty terms, marketplace policy, subscription terms, payment terms, service terms, or exception rules supplied by the user.
- Customer messages, photos, videos, serial numbers, packing slips, tracking events, delivery confirmations, repair notes, prior cases, or support tickets supplied by the user.
- Refund, replacement, exchange, repair, cancellation, chargeback, dispute, return-label, restock, or inventory signals supplied by the user.
- Current SOP, RMA form, return portal fields, help-desk macro, warehouse receiving checklist, repair intake checklist, fraud-review rule, or escalation path if available.
- Customer-impact, privacy, payment, inventory, legal, regulated-product, product-safety, warranty, marketplace, carrier, warehouse, and system-of-record boundaries supplied by the user.
- External system surfaces described at a high level, such as ecommerce, marketplace, help desk, CRM, RMA, return portal, payment, carrier, WMS, inventory, repair, subscription, or accounting tools.

## Procedure

1. Define the after-sales boundary.
   - Name the case type, channel, product, policy source, order window, evidence available, decision owner, systems in scope, and non-goals.
   - Separate review artifacts from live refunds, replacement shipments, label issuance, return approval, cancellation, customer sends, inventory writes, and payment actions.

2. Build the case intake snapshot.
   - Summarize customer request, order facts, item facts, delivery facts, return reason, desired outcome, prior contact, time windows, and supplied evidence.
   - Mark missing order ids, stale tracking, unsupported customer claims, missing photos, policy gaps, ambiguous dates, and assumptions.

3. Map policy and evidence.
   - Build a policy-evidence table covering return window, item condition, packaging, proof of purchase, delivery status, warranty terms, subscription terms, marketplace requirements, and exception criteria.
   - Keep policy mapping as review support, not a final eligibility, compliance, or legal conclusion.

4. Prepare outcome review packets.
   - Draft separate review packets for refund, replacement, exchange, repair, store credit, cancellation, goodwill gesture, warranty escalation, carrier claim, or denial/escalation options.
   - For each option, list required confirmations, financial impact, inventory impact, customer-impact note, and approval owner.
   - Do not choose the final outcome, promise the outcome, or execute account, payment, shipping, inventory, or customer actions.

5. Prepare reverse-logistics and restock handoffs.
   - Convert return and repair signals into return-label question lists, receiving inspection checklist, quarantine/restock/dispose/refurbish questions, serial-number capture needs, and warehouse or repair handoff notes.
   - Do not issue labels, book carrier pickups, update tracking, receive inventory, restock items, dispose of goods, or adjust inventory records.

6. Prepare dispute and chargeback evidence.
   - Organize transaction, delivery, customer communication, policy, proof-of-service, refund status, and prior resolution evidence into a dispute or chargeback evidence packet.
   - Keep it as a review packet for a payment or finance owner, not a legal, fraud, credit, card-network, or payment decision.

7. Draft customer communication packets.
   - Draft acknowledgement, evidence request, return instructions, delay update, repair status, escalation note, apology draft, denial/escalation draft, or follow-up wording when enough policy context exists.
   - Label each draft as unsent and separate wording from commitments, refunds, compensation, labels, account changes, or external sends.

8. Create the improvement loop.
   - Convert recurring return reasons into product-page fixes, packaging notes, quality flags, supplier questions, warehouse checks, support macro updates, FAQ candidates, or backlog items.
   - Route product, warehouse, finance, supplier, support, quality, or policy actions to the appropriate playbook or human owner.

## Outputs

- After-sales operations brief.
- Case intake and order-fact snapshot.
- Policy and evidence map.
- RMA review packet.
- Refund, replacement, exchange, repair, warranty, cancellation, or goodwill review options.
- Damaged-shipment or missing-item evidence packet.
- Return-label and reverse-logistics question list.
- Receiving, inspection, quarantine, restock, dispose, refurbish, or repair handoff checklist.
- Chargeback or dispute evidence packet.
- Customer communication draft packet.
- Fraud, abuse, exception, or escalation review queue.
- Financial impact and inventory impact note.
- Post-purchase issue log.
- Product, packaging, supplier, listing, support, or quality improvement candidates.
- After-sales operations handoff packet.

## Quality Signals

- The output gives an operator concrete after-sales artifacts, not only risk warnings.
- Each refund, replacement, warranty, return, dispute, or restock claim is tied to supplied evidence or marked as missing.
- Policy mapping separates policy text, source facts, customer claims, reviewer inference, and unresolved questions.
- Draft customer messages are useful but clearly unsent and separated from commitments or account actions.
- Financial impact, inventory impact, customer impact, and evidence gaps are visible before any decision.
- The playbook turns repeat cases into improvement candidates without blaming customers, staff, suppliers, or carriers from weak evidence.
- The plan includes post-resolution evidence to capture: case id, decision owner, approval note, refund id, label id, tracking id, receiving result, restock status, dispute id, customer reply, or issue id.

## Human Checkpoints

- Refund, replacement, exchange, repair, cancellation, store credit, goodwill, compensation, warranty, denial, return approval, exception, chargeback, dispute, fraud, abuse, or final case decision.
- Customer calls, email, SMS, chat, marketplace message, review reply, apology, evidence request, return instruction, denial notice, escalation, or external send.
- Payment, refund execution, payment reversal, chargeback response submission, store-credit issuance, subscription cancellation, account credit, gift card, coupon, or financial-system write.
- Return-label issuance, pickup scheduling, carrier claim, replacement shipment, repair authorization, warehouse receiving, inventory adjustment, restock, quarantine, disposal, refurbishment, or WMS/inventory write.
- Ecommerce, marketplace, help desk, CRM, RMA, return portal, payment, carrier, WMS, inventory, repair, subscription, accounting, document, spreadsheet-of-record, or system-of-record writes.
- Legal, tax, accounting, card-network, consumer-protection, warranty, product-safety, recall, regulated-product, medical, import/export, privacy, fraud, abuse, carrier-liability, insurance, or compliance conclusions.
- Sensitive customer address, payment, identity, account, health, child, elder, vulnerable-person, credential, device, serial-number, or private-order data retention.

## Composable With

- `commerce-operations.md` when return, refund, support, margin, product-page, conversion, or customer-response signals should improve selling materials.
- `customer-support-quality-review.md` when after-sales conversations, macros, escalation timing, tone, or policy consistency need QA review.
- `feedback-to-backlog-operations.md` when recurring return reasons, defects, complaints, or customer friction should become backlog items or close-loop notes.
- `finance-operations-review.md` when refunds, receivables, chargebacks, payout fees, or financial impact need finance-owner review.
- `data-analysis-decision-support.md` when return rate, refund rate, defect rate, exchange rate, dispute rate, cohort, SKU, channel, or carrier patterns need descriptive analysis.
- `procurement-vendor-sourcing-operations.md` when supplier defects, packaging, replacements, parts, or vendor performance need sourcing or vendor review.
- `field-service-and-mobile-service-operations-planning.md` when after-sales issues require repair visits, service proof, field handoff, or technician coordination.
- `local-store-operations.md` when returns, exchanges, stock, and customer handoffs occur in a physical store or branch.
- `operations-execution-handoff.md` when the review packet should become a ready-to-execute queue with approvals, owners, blockers, and evidence capture.
- `../laws/surface-browser-runtime.md` when working in logged-in seller, marketplace, help-desk, payment, carrier, warehouse, repair, or accounting portals.
- `../laws/surface-mcp-tools-auth.md` for APIs, account actions, customer data, payments, messages, labels, shipments, inventory, or system writes.
- `../laws/surface-evidence-eval.md` for policy claims, refund claims, warranty claims, fraud claims, improvement claims, or method promotion.

## Evidence

Source signal: broad X and domain scout review found recurring after-sales signals around RMA dashboards, ecommerce returns, Shopify refund automation, warehouse returns, restock automation, reverse logistics, chargebacks, and support automation. Official-source review of FTC mail/internet/telephone order merchandise guidance, FTC business guidance on refunds and consumer claims, CFPB billing-error and dispute material, and USPS business returns material confirmed that after-sales work crosses customer communication, refund timing, payment dispute, shipping, carrier, and recordkeeping boundaries.

Validation state: seed draft. Needs replay against ecommerce return requests, damaged shipments, warranty claims, subscription cancellation/refund cases, marketplace disputes, chargeback evidence packets, replacement shipments, repair-center intake, and customer complaint escalation before promotion.

Known failures:

- Treating an RMA packet as permission to approve a return, refund, replacement, warranty, cancellation, label, shipment, chargeback, or dispute.
- Treating policy mapping as a legal, compliance, consumer-protection, warranty, product-safety, fraud, carrier-liability, or payment-network conclusion.
- Sending customer messages, issuing labels, moving money, writing inventory, or mutating seller, marketplace, help-desk, payment, carrier, warehouse, repair, or accounting systems without scoped approval.
- Hiding missing order evidence, stale tracking, missing photos, policy ambiguity, or unconfirmed item condition behind a tidy resolution recommendation.
- Retaining sensitive customer, payment, account, identity, health, serial-number, or private-order data without scoped approval.
