# Playbook: Finance Operations Review

Status: seed draft

Scope: financial-operations-neutral. This playbook helps an agent review operating finance signals such as revenue, expenses, cash flow, budgets, receivables, payables, evidence gaps, and anomaly queues. It does not provide tax, accounting, investment, credit, audit, or legal conclusions, and it does not move money or write finance systems.

## Purpose

Help an agent produce a financial operations snapshot, income and expense evidence ledger, budget variance table, cash-flow view, receivables and payables watchlist, anomaly queue, scenario notes, finance-owner question list, and review packet.

## Inputs

- Revenue, sales, invoice, receipt, refund, fee, payout, expense, payroll, subscription, inventory, or cost records.
- Bank, payment processor, marketplace, accounting, spreadsheet, or finance-system exports when the user provides them.
- Budget, forecast, target, prior-period comparison, cash-flow assumption, runway assumption, or finance-owner notes.
- Evidence for each claim, such as invoices, receipts, statements, contracts, order records, or approval notes.
- Known accounting categories, tax categories, cost centers, or approval rules if provided by the user.

## Procedure

1. Define the review boundary.
   - State the time window, entity, account set, source types, and excluded records.
   - Mark missing, stale, estimated, duplicate, or unverified data.

2. Build the source ledger.
   - Record income, expense, receivable, payable, refund, fee, and transfer items with source pointers.
   - Separate transaction evidence from interpretation.

3. Classify operating state.
   - Group items by category, period, source, status, and review need.
   - Keep user-provided categories visible rather than inventing authoritative accounting treatment.

4. Review budget and cash movement.
   - Compare budget, forecast, actuals, timing, and assumptions.
   - Produce cash-flow and runway scenario notes only as operational estimates.

5. Surface risks and anomalies.
   - Identify missing receipts, unmatched transactions, unusual changes, late receivables, upcoming payables, margin pressure, duplicate entries, and approval gaps.
   - Do not turn anomalies into fraud, tax, audit, or accounting conclusions.

6. Package the review.
   - Produce the financial operations snapshot, evidence ledger, variance table, watchlist, anomaly queue, owner question list, and next-review checklist.
   - Keep payments, accounting-system writes, tax filings, invoices, credit actions, and external communications out of scope.

## Outputs

- Financial operations snapshot.
- Income and expense evidence ledger.
- Budget variance table.
- Cash-flow and runway scenario notes.
- Receivables and payables watchlist.
- Missing-evidence and anomaly queue.
- Finance-owner question list.
- Internal review packet.
- Next-review checklist.

## Quality Signals

- Every material number has a source pointer or is marked as missing evidence.
- Estimates, assumptions, and verified records are clearly separated.
- The output helps a human finance owner review decisions without pretending to be accounting or tax advice.
- Anomalies are framed as review questions, not conclusions.

## Human Checkpoints

- Accounting treatment, tax categorization, filing position, audit conclusion, credit decision, investment advice, or legal conclusion.
- Payment, refund, invoice, payroll, transfer, write-off, budget approval, expense approval, or finance-system write.
- External communication to customers, vendors, tax authorities, auditors, lenders, investors, employees, or regulators.

## Composable With

- `commerce-operations.md` for revenue, refund, margin, inventory, or promotion signals from commerce work.
- `sales-pipeline-operations-planning.md` for pipeline and forecast inputs before they become operating-finance assumptions.
- `contract-fulfillment-tracking.md` for payment conditions, milestone receipts, deliverables, and contract-linked obligations.
- `regulated-document-evidence-map.md` when financial documents need a traceable evidence map before review.
- `draft-and-evidence-packet.md` for reviewable finance, vendor, customer, or management communications.
- `../laws/surface-evidence-eval.md` for source evidence and independent verification.
- `../laws/surface-browser-runtime.md` for logged-in finance dashboards.
- `../laws/surface-mcp-tools-auth.md` for finance APIs, private data, credentials, payments, or account actions.

## Evidence

Source signal: small-business finance and recordkeeping guidance, public cash-flow projection guidance, and workflow review showed a recurring need to review operating finance evidence without making accounting, tax, audit, credit, investment, or payment decisions.

Validation state: seed draft. Needs replay on real budget review, cash-flow review, expense cleanup, receivables follow-up, and finance handoff tasks before promotion.

Known failures:

- Treating estimates as verified records.
- Treating anomalies as fraud, tax, or audit conclusions.
- Moving money, issuing invoices, or writing accounting systems without approval.
- Hiding missing receipts or source gaps behind polished summaries.
