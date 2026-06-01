# Playbook: Regulated Document Evidence Map

Status: seed draft

Scope: high-constraint evidence mapping. This playbook helps an agent organize regulated or sensitive documents into a traceable evidence map. It does not decide legal effect, medical meaning, investment suitability, compliance status, credit status, insurance eligibility, or final approval.

## Purpose

Help an agent produce a document inventory, requirement-evidence map, gap and conflict table, staleness review, domain-owner review queue, and downstream handoff package.

This playbook also covers professional review question lists when the useful output is a set of questions for a doctor, lawyer, auditor, financial professional, compliance owner, risk owner, or other qualified reviewer. The agent may organize issues into questions, but it must not answer those questions as a final professional conclusion.

## Inputs

- Regulated, sensitive, or high-constraint documents such as policies, contracts, regulations, clinical material, financial disclosures, audit records, compliance guidance, SOPs, controlled internal documents, or approved reference material.
- Source metadata such as origin, version, date, jurisdiction, scope, author, approval status, and access boundary.
- Mapping objective: requirement traceability, evidence location, gap review, conflict review, due diligence, pre-draft preparation, or audit support.
- Review-preparation objective: questions for a qualified reviewer, consultation prep, second-opinion prep, due-diligence follow-up, audit follow-up, or domain-owner handoff.
- Known domain boundaries and forbidden conclusions.
- Required reviewers, retention rules, citation format, and privacy or access constraints.
- Tool, browser, account, export, and data-handling boundaries.

## Procedure

1. Define the mapping scope.
   - State which documents, versions, jurisdictions, subjects, products, patients, customers, transactions, or time periods are in scope.
   - Mark anything that is unavailable, unverified, stale, or out of scope.

2. Build the document inventory.
   - Record each document's title, source, version, effective date, owner, scope, status, and access restriction.
   - Separate provided documents from inferred or missing documents.

3. Extract requirements and material claims.
   - Split the documents into requirements, obligations, definitions, exceptions, facts, claims, and open questions.
   - Keep section, page, clause, timestamp, or excerpt pointers for each material item.

4. Map evidence to each item.
   - For every requirement or claim, record source pointer, evidence type, evidence strength, applicability limit, reviewer need, and current status.
   - Use statuses such as `source-supported`, `needs domain review`, `conflict`, `missing evidence`, `out of scope`, and `stale or unknown`.

5. Surface gaps and conflicts.
   - Identify missing documents, conflicting clauses, outdated versions, unclear applicability, weak evidence, and unsupported assumptions.
   - Do not resolve legal, medical, financial, compliance, safety, insurance, employment, or credit conflicts as final conclusions.

6. Build the review queue.
   - Group items by required reviewer, urgency, evidence gap, decision owner, and downstream use.
   - Separate questions for domain owners from text that can be used safely in a brief or draft.
   - When producing a professional review question list, write each item as: issue, source pointer, question, reviewer, why ask, status, and forbidden conclusion.
   - Use statuses such as `needs professional review`, `missing evidence`, `conflict`, `stale or unknown`, `scope unclear`, and `domain-owner explanation needed`.

7. Package the handoff.
   - Provide the inventory, evidence map, gap table, conflict table, staleness notes, review queue, non-conclusion notice, and suggested next artifact.
   - Route downstream work to a brief, draft packet, or project-specific workflow only after the evidence map is inspectable.

## Outputs

- Document inventory.
- Requirement or claim evidence map.
- Gap, conflict, and staleness table.
- Source pointer index.
- Domain-owner review queue.
- Professional review question list.
- Issue-to-question table.
- Non-conclusion notice.
- Downstream handoff package.

## Quality Signals

- Each material item has a source pointer or is marked as missing evidence.
- Version, date, scope, and applicability limits are visible.
- Conflicts and stale sources are surfaced instead of smoothed over.
- The output helps a reviewer inspect evidence without pretending to give a professional conclusion.
- Review questions are tied to source pointers, gaps, conflicts, or scope limits instead of free-floating suspicion.
- The output distinguishes asking a professional from acting as that professional.
- Downstream briefs or drafts can reuse the map without losing traceability.

## Human Checkpoints

- Current-version confirmation for controlled, legal, clinical, financial, policy, or compliance documents.
- Applicability to a jurisdiction, entity, product, patient, customer, employee, transaction, account, or time period.
- Legal interpretation, clinical interpretation, financial suitability, compliance determination, insurance eligibility, credit decision, safety decision, or final approval.
- Diagnosis, treatment, medication, legal advice, investment recommendation, audit opinion, valuation conclusion, loan approval, regulatory filing judgment, or professional second opinion.
- External send, filing, publication, customer communication, policy change, system write, payment, or account action.
- Export, retention, redaction, or redistribution of private, patient, customer, employee, contract, financial, or controlled business data.

## Composable With

- `research-to-brief-synthesis.md` when the map should become a decision brief.
- `draft-and-evidence-packet.md` when the map should support a reviewable draft.
- `feedback-to-backlog-operations.md` when evidence gaps should become reviewable work items.
- `draft-and-evidence-packet.md` when a question list should become a reviewable letter, consultation note, or approval packet.
- `../laws/surface-evidence-eval.md` for evidence strength, verification, and independent review.
- `../laws/surface-browser-runtime.md` for logged-in document portals, dashboards, or controlled browser sessions.
- `../laws/surface-mcp-tools-auth.md` for APIs, private data, exports, privileged tools, or external sends.

## Evidence

Source signal: cross-domain review found a recurring need in legal, medical, financial, compliance, audit, and due-diligence support work for an artifact that maps evidence before creating briefs or drafts.

Additional source signal: public health, legal, financial, and consumer-protection guidance commonly recommends preparing questions, records, medication or document lists, risks, fees, alternatives, and follow-up points before consulting a professional.

Validation state: seed draft. Needs replay on real contract review, policy comparison, medical-record preparation, financial-disclosure review, audit support, and compliance-document mapping tasks before promotion.

Known failures:

- Treating citation presence as proof that a conclusion is valid.
- Resolving professional interpretation conflicts instead of routing them to a domain owner.
- Writing the question list as if it were an answer list, recommendation, approval, clearance, diagnosis, audit finding, or legal opinion.
- Losing version, date, jurisdiction, or applicability limits.
- Turning the evidence map into a filing, customer message, policy change, or account write without explicit scoped approval.
