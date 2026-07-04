# SaaS Spend And License Readiness Review

Status: incubating.

## Signal

External feeds, operator complaints, and routine admin pain surface a recurring solo-operator workflow around unused SaaS seats, inactive or deactivated accounts that still count toward billing, renewal surprise, duplicate or overlapping tools, contractor or guest access drift, and manual audit work that burns time before anyone even decides what to change. The useful mechanism is not "cut all the tools," "downgrade the plan," "remove the licenses," "change SSO," "turn off SCIM," "cancel the renewal," or "tell the owner exactly which vendor to keep." It is a preparation workflow: turn app rosters, usage readbacks, license or seat assignment surfaces, billing rules, renewal notes, user-access notes, and owner-supplied evidence into an app roster and owner ledger, seat and license assignment ledger, inactive or guest review queue, renewal and downgrade question queue, duplicate-tool and vendor-overlap review queue, reviewer questions, and a no-change handoff.

In the current scan, X was weaker and noisier than some recent lanes, but it still surfaced the right friction language: unused SaaS licenses, inactive accounts, surprise seat growth, manual audits, renewal confusion, and paying for overlapping tools. GitHub and open-source search were not empty, but they were not strong demand proof. Most results drifted toward generic multi-tenant SaaS management products or OSS license-audit tooling rather than practical SMB seat-waste and renewal-review operations. That reinforces the lane shape: this is mainly an evidence, readiness, and handoff service rather than a tool-first or install-first niche.

## Source

- Microsoft 365 usage reports overview: admins can use reports to see how people in the organization are using Microsoft 365 services, learn who is using a service and who might not need a license, and review reporting windows such as 7, 30, 90, and 180 days. Role boundaries and privacy-display controls matter.
- Microsoft 365 assign licenses to users guidance: admins can assign or unassign licenses, and if unused licenses will not be reassigned, removing licenses from the subscription can reduce paying for excess licenses. License removal and reassignment are real admin actions with downstream consequences.
- Google Workspace Reports API overview: the Reports API exposes activity reports and usage reports; customer usage reports aggregate Google Workspace service usage information for all users in a domain, and user usage reports organize usage information by user.
- Google Workspace Reports API customer and user usage guides: customer usage reports aggregate usage across the domain; user usage reports return per-user usage information and can be customized or filtered for specific usage information.
- Google Enterprise License Manager API concepts and developer guide: Google Workspace users can be auto-assigned licenses by default; the Enterprise License Manager API can assign, unassign, re-assign, update, retrieve, and delete user license assignments; on flexible plans, assigning, unassigning, and re-assigning licenses can have monetary impact and post prorated charges.
- Slack fair billing policy: paid plans bill for active members; invited users become billable when they accept; inactive members can generate prorated credits; member type matters; Slack automatically treats members inactive after over 28 days without use.
- Atlassian app-access guidance: giving users access is done by assigning app roles in Atlassian Administration, and app access can be granted to users or groups through supported admin flows.
- Atlassian remove app access guidance: there is an official workflow to remove app access for users rather than treating seat count as a passive report.
- Atlassian manage users and user tiers guidance: additional users are counted toward billing even if they do not accept the invite or log in, and for a user to stop counting toward billing, an admin must remove or suspend the user according to the supported workflow.
- Atlassian maximum-quantity billing guidance: if the team grows beyond billed quantity, Atlassian can automatically increase quantity and add prorated costs to the next bill.
- Community, X, and weak GitHub samples are useful only as low-authority friction evidence. They do not prove savings amount, unused-seat correctness, user-access correctness, renewal correctness, cancellation safety, downgrade safety, consolidation correctness, procurement approval, security compliance, privacy compliance, or profitable repeatability.

## Proposed Trigger

Use this candidate when a small business owner, startup founder, agency operator, MSP assistant, fractional CTO, finance-ops assistant, procurement reviewer, IT admin, security reviewer, or solo SaaS spend auditor needs a SaaS spend review packet, software subscription and seat audit packet, user-access and inactive-user review packet, renewal and downgrade question packet, or vendor-overlap and duplicate-tool review packet before any admin or billing change.

Use it especially when the task is preparation, classification, and evidence organization before assigning or removing licenses, revoking or restoring access, changing groups or roles, changing SSO or SCIM behavior, changing billing plans, renewing or cancelling subscriptions, contacting vendors, exporting data, or writing to a SaaS admin console. Do not use it as savings authority, renewal authority, cancellation authority, downgrade authority, procurement authority, security authority, privacy authority, contract authority, account authority, or system-write authority.

## Proposed Mechanism

0. Classify evidence strength before framing the opportunity.
   - L0: X complaints, operator threads, "we're paying for dead seats," "Slack is charging for everyone," "Atlassian invited users still count," or "we have five tools doing the same thing" chatter. Use only as friction language and search language.
   - L1: vendor blogs, consultant posts, SaaS-management marketing, or informal audit anecdotes. Treat as workflow-shape evidence, not billing or access authority.
   - L2-lite: official Microsoft, Google, Slack, and Atlassian documentation for usage, licensing, user access, member activity, and billing mechanics. Treat as terminology, process, and boundary authority, not savings or consolidation authority.
   - L2-strong: owner-supplied app rosters, user lists, inactive or deactivated-user tables, group maps, invoice and renewal notes, role or access readbacks, cancellation windows, contract notes, and scoped engagement evidence.
1. Split the workflow into lanes before doing anything else.
   - Lane A: Microsoft 365 usage and license lane covering service usage windows, license assignment, auto-assignment posture, reassignment, and excess-license review.
   - Lane B: Google Workspace usage and license lane covering customer or user usage reports, auto-assigned licenses, SKU-level assignment, flexible-plan monetary impact, and license reassignment posture.
   - Lane C: Slack member activity and billing lane covering active-versus-inactive members, member types, invited-member billing, credit timing, and inactive-member review.
   - Lane D: Atlassian app-access and user-tier lane covering app-role assignment, group access, invited users, billed quantity growth, removal or suspension path, and app-access review.
   - Lane E: cross-vendor overlap and shadow-IT lane covering duplicate tools, overlapping capabilities, inactive contractors or guests, department ownership gaps, renewal clustering, and approval or reviewer gaps.
   - Name app, plan, subscription scope, source snapshot, allowed artifact, and excluded actions for each lane.
2. Inventory official sources and readback surfaces.
   - Capture official admin docs, billing notes, user-access notes, usage reports, invoices, renewal dates, cancellation windows, contract terms, group or role notes, stale or broken source risks, and login-gated source risks.
   - Record URL or file name, source date, vendor, lane type, field or artifact type, whether the source is official, owner-supplied, dashboard readback, export, login-gated, or L0 or L1 signal.
3. Classify the evidence packet and its risks.
   - Separate app roster facts, owner facts, user-access facts, seat and license facts, renewal facts, billing facts, plan facts, guest or contractor facts, inactive or deactivated-user facts, duplicate-tool facts, shadow-IT cues, stale source, export risk, privacy risk, and security-review cues.
   - Use statuses such as `source-supported candidate`, `needs usage readback`, `needs roster cleanup`, `needs owner review`, `needs finance review`, `needs procurement review`, `needs security review`, `needs privacy review`, `needs legal review`, `stale`, `broken`, `login-gated`, `conflict`, and `ready for owner handoff`.
4. Build the SaaS spend and license ledgers.
   - For each app or subscription, record vendor, product, billed quantity, active-use evidence, inactive-use evidence, invite or pending-user state, guest or contractor state, plan type, renewal date, cancellation window, downgrade note, app-access route, group or role path, owner, cost-center, overlap candidate, shadow-IT cue, missing evidence, conflicting source, stale source, reviewer role, and forbidden next action.
   - Keep account IDs, user emails, employee identifiers, contractor identifiers, customer identifiers, billing contacts, payment methods, invoice details, contract terms, security notes, and exportable usage data as sensitive. Prefer pointers, redacted summaries, or field labels unless scoped retention is explicitly approved.
5. Prepare the reviewer queue.
   - Turn gaps into questions for the owner, finance reviewer, procurement reviewer, IT admin, security reviewer, privacy reviewer, legal reviewer where relevant, department owner, or system owner.
   - Do not contact vendors, users, employees, contractors, customers, finance, legal, security, or internal teams without scoped approval.
6. Review access, billing, and identity boundaries.
   - Mark license assignment or removal, seat reduction, user invite or deletion, user suspension, group or role changes, app-access changes, SSO or SCIM changes, IdP changes, billing-plan changes, renewals, cancellations, downgrades, upgrades, payment-method changes, export actions, and console writes as owner-approved follow-up only.
   - Treat Microsoft 365, Google Workspace, Slack, Atlassian, IdP, procurement, finance, and contract-management consoles as account or action boundaries, not read-write permission.
7. Package the owner handoff.
   - Provide app roster and owner ledger, seat and license assignment ledger, inactive or deactivated-user review queue, guest and contractor review queue, renewal and downgrade question queue, duplicate-tool and vendor-overlap queue, reviewer queue, open questions, and no-license-change/no-access-change/no-role-change/no-group-change/no-SSO-change/no-SCIM-change/no-IdP-change/no-billing-plan-change/no-renewal-decision/no-cancel/no-downgrade/no-upgrade/no-vendor-contact/no-export/no-system-write receipt.
   - Route executable actions to operations handoff only after explicit scoped approval.

## Initial Scope

This candidate is for source mapping, usage and access readback interpretation, evidence organization, conservative draft support, lane classification, reviewer handoff, and owner decision support. It must not assign, remove, revoke, suspend, reactivate, invite, delete, or otherwise change users, seats, licenses, groups, roles, or app access; must not change SSO, SCIM, IdP, or admin roles; must not change plans, subscriptions, renewals, cancellations, downgrades, upgrades, invoices, or payment methods; must not contact vendors or internal stakeholders; must not export usage data; and must not retain sensitive account, credential, user, employee, contractor, customer, usage, contract, invoice, payment, security, or privacy data without scoped approval.

It should produce an app roster and owner ledger, seat and license assignment ledger, inactive and guest review queues, renewal and downgrade question queue, duplicate-tool and vendor-overlap queue, reviewer queue, open questions, risk boundary, and no-action receipt.

## Known Failure Modes

- Treating usage, billing, user access, renewals, and vendor overlap as one uniform workflow instead of separate lanes.
- Treating an activity report, usage report, user list, or invoice as proof that the right cost-cutting action is obvious.
- Treating inactive users, invited users, guests, contractors, or default access groups as interchangeable.
- Treating official access or billing docs as permission to change licenses, access, plans, or renewals.
- Treating duplicate-tool suspicions as proof that one tool can be removed safely.
- Treating GitHub SaaS-management repositories or OSS license-audit tools as proof of buyer demand or installation authority.
- Logging into SaaS admin consoles to remove access, change billing, edit roles, export data, or contact vendors without scoped approval.
- Retaining excessive user, employee, contractor, customer, billing, contract, security, or usage data.

## Verification Needed

- Replay on one Microsoft 365 packet with service-usage and license-allocation notes to test ledger extraction.
- Replay on one Google Workspace packet with user-usage and license-assignment notes to test usage-versus-SKU lane extraction.
- Replay on one Slack packet to test active-versus-inactive and credit-timing classification.
- Replay on one Atlassian packet to test invited-user, app-access, and billed-quantity boundary extraction.
- Replay on one duplicate-tool or vendor-overlap packet to test overlap classification without collapsing it into a removal decision.
- Compare with `procurement-vendor-sourcing-operations.md`, `finance-operations-review.md`, `contract-fulfillment-tracking.md`, `data-analysis-decision-support.md`, and `operations-execution-handoff.md` to keep readiness support separate from procurement decisions, finance decisions, contract interpretation, admin-console actions, exports, or system-of-record authority.
- Add eval coverage only if repeated failures show agents turning these packets into user or license changes, access changes, billing changes, renewals, cancellations, vendor contact, exports, or security and privacy conclusions.

## Placement Candidates

- Keep as incubator while source scope and sample replays are still being proven.
- If stable, promote to a productive playbook for SaaS spend, seat, license, and vendor-overlap readiness packets.
- If overlap proves modest, merge narrower sections into `procurement-vendor-sourcing-operations.md`, `finance-operations-review.md`, `contract-fulfillment-tracking.md`, or `data-analysis-decision-support.md` instead of creating a broad SaaS-admin-specific playbook.
