# DLP Alert Triage Evidence Review

Status: incubating.

## Signal

Microsoft Purview Data Loss Prevention alerts expose a concrete operating surface: alert queues, incident grouping, matched policy conditions, event details, owner/status/comments, Security Copilot triage support, investigation tools, remediation candidates, and later policy tuning.

The useful solo-operator method is not to run a customer's security program or change tenant settings. The useful first product is a DLP alert evidence packet that separates observed alert facts, missing evidence, reviewer questions, and owner-approved next actions.

## Proposed Trigger

Use this candidate when a user asks about:

- DLP alerts, data loss prevention alerts, data exposure alerts, sensitive-information alerts, or policy-match event triage;
- Microsoft Purview DLP alert review, Microsoft Defender DLP incident review, Security Copilot DLP triage, or DLP alert queue cleanup;
- turning alert exports, screenshots, audit notes, incident rows, matched-condition notes, or owner-supplied security logs into an evidence packet;
- evaluating whether DLP alert triage can become a one-person-one-computer service offer.

## Proposed Mechanism

1. Separate alert evidence from remediation authority.
   - L0: social posts, founder claims, consultant offers, tool demos, screenshots, or revenue claims.
   - L1: official platform docs, vendor docs, dashboard field definitions, security product release notes, and public workflow descriptions.
   - L2: owner-supplied tenant exports, redacted alert screenshots, authorized incident queues, activity logs, investigation notes, policy configuration readbacks, and prior remediation receipts inside a scoped engagement.
2. Build an alert source map before requesting tenant access.
   - Record source portal, alert or incident identifier, policy name, rule or matched condition, workload, service source, user, file or item, event time, severity, status, owner, comments, Copilot summary or triage category if available, event link state, export state, source timestamp, and missing fields.
   - Keep alert row facts, event facts, policy facts, user facts, file facts, matched-condition facts, Copilot-generated summaries, and human notes in separate rows.
   - Treat dashboard summaries, Copilot triage, activity explorer rows, event links, and exports as evidence sources only. They are not proof of sensitive-data classification sufficiency, DLP policy correctness, compliance, legal impact, or production readiness.
3. Produce a triage queue, not a security verdict.
   - Classify rows as likely true positive, likely false positive, needs owner review, needs policy-owner review, needs privacy/legal review, needs security review, or missing evidence.
   - Record priority rationale, affected surface, business impact hypothesis, confidence, reviewer role, and unresolved source gaps.
   - Do not claim incident severity, breach status, notification duty, insider-risk conclusion, user intent, legal compliance, or final false-positive status without the responsible owner's decision.
4. Package remediation candidates as owner decisions.
   - Possible action candidates can include monitor only, user education, clean-up review, account action review, file or sharing review, sensitivity-label review, policy tuning review, or escalation.
   - Keep every candidate as a no-write handoff row with required approver, tool or account surface, rollback or correction path, and action receipt requirement.
5. Keep tenant and sensitive-data boundaries explicit.
   - Do not reset passwords, disable accounts, remove shares, unshare items, apply sensitivity labels, download email, export activity data, copy matched sensitive content, change DLP policies, tune thresholds, change alert status, add comments, assign owners, share event links, or write tickets unless the user gives explicit scoped approval for that exact account, tenant, tool, and action.
   - Do not retain matched sensitive content, customer data, employee data, legal/health/finance data, credentials, file contents, or tenant logs in durable notes unless a data-handling boundary is approved.
6. Package a human-owned handoff.
   - Output official-source map, alert evidence ledger, true/false-positive review queue, missing-evidence queue, remediation-candidate queue, reviewer/approver matrix, no-policy-mutation/no-tenant-write/no-sensitive-retention receipt, and next evidence request list.

## Initial Scope

This candidate is for DLP alert source mapping, triage preparation, reviewer queueing, and no-write owner handoff. It does not authorize tenant access, alert status changes, owner assignment, comments, event-link sharing, activity export, file access, content preview, password reset, account disablement, share removal, unshare, sensitivity-label application, email download, DLP policy creation or tuning, alert threshold changes, remediation execution, legal/compliance/security conclusions, incident notification decisions, customer or employee contact, ticket/system writes, or sensitive-data retention.

## Known Failure Modes

- Treating a Security Copilot DLP triage summary or priority category as a final human security decision.
- Treating a dashboard row, alert status, matched condition, event link, activity row, or export as proof of DLP sufficiency, sensitive-data classification correctness, legal impact, or compliance.
- Turning likely true-positive or likely false-positive labels into final incident disposition without the owner, security, privacy, legal where relevant, and policy-owner review.
- Sharing event links, exporting activity data, opening content preview, copying matched content, or retaining sensitive snippets while preparing a generic evidence packet.
- Executing remediation candidates such as reset password, disable account, remove sharing, unshare, download email, apply sensitivity label, or policy tuning without scoped approval.
- Confusing policy tuning with evidence review, or changing thresholds because a queue has many false positives.
- Treating a DLP alert triage service as breach determination, insider-risk investigation, employee discipline, legal advice, or compliance certification.
- Using X, consultant pricing, tool demos, or screenshots as proof that customers will pay, that remediation works, or that a solo operator can safely handle regulated incidents.

## Verification Needed

- Replay on a synthetic redacted Microsoft Purview DLP alert packet with no real tenant, user, file, or sensitive content.
- Replay on a public-document-only source map that uses Microsoft docs to identify fields and action surfaces without tenant access.
- If an owner supplies data, start with screenshots or exports that have been redacted by the owner and record the exact data-handling boundary before review.
- Check current Microsoft licensing, role, retention, Content Explorer, Activity Explorer, Defender incident, Security Copilot, and DLP policy-tuning docs before any account-connected engagement.
- Add eval coverage only if repeated failures show agents are treating DLP alert evidence packets as policy mutation, remediation, legal/compliance conclusion, incident disposition, or tenant-write authority.

## Placement Candidates

- Keep in incubator while the service surface and data-handling boundary are still being shaped.
- If stable, merge into `playbooks/operations-execution-handoff.md`, `playbooks/regulated-document-evidence-map.md`, or a future security-operations evidence packet subsection.
- Use `laws/surface-evidence-eval.md` for claim support and incident/conclusion boundaries.
- Use `laws/surface-browser-runtime.md` for logged-in portal or account reads.
- Use `laws/surface-mcp-tools-auth.md` for tenant tools, exports, remediation actions, account writes, ticket writes, and system writes.
