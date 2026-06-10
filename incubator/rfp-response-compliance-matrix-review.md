# RFP Response Compliance Matrix Review

Status: incubating.

## Signal

External feeds surface a recurring seller-side proposal response pattern: monitor RFPs, extract requirements, build a compliance matrix, draft proposal sections, and prepare bid or proposal packets. This appears in AI-agent business ideas, government-contracting startup claims, and proposal-team posts describing the hidden work of finding disqualifying requirements inside long RFPs.

This signal is useful for one-person-one-computer scouting because a solo operator can organize public or user-supplied RFP documents into source maps, compliance matrices, draft packets, amendment trackers, and reviewer queues. It is not proof of proposal compliance, win probability, eligibility, revenue, or submission authority.

## Source

- FAR 15.203 Requests for proposals.
- FAR 15.204-5 Part IV representations and instructions.
- FAR 15.206 Amending the solicitation.
- FAR 15.208 Submission, modification, revision, and withdrawal of proposals.
- FAR 15.304 Evaluation factors and significant subfactors.
- SBA Contracting Guide.
- CSA AI Controls Matrix, AI-CAIQ, Cloud Controls Matrix and CAIQ v4.1, STAR Registry, and STAR for AI.
- Shared Assessments SIG overview and support pages.
- Public vendor Trust Center or compliance pages when they can be read without login or evidence download.
- L0 social signals around RFP agents, compliance matrices, proposal response drafting, and federal proposal response services.

## Proposed Trigger

Use this candidate when a user, small business, contractor, proposal consultant, agency, or solo operator needs a reviewable RFP response packet, compliance matrix, proposal outline, bid response evidence table, amendment tracker, questionnaire/DDQ response map, or source-to-draft review package.

Use it especially when the task is seller-side: responding to an RFP, solicitation, request for quote, security questionnaire, due-diligence questionnaire, vendor questionnaire, or commercial proposal request.

## Proposed Mechanism

0. Classify paid-proof strength before framing the opportunity.
   - L0: social post, launch post, founder claim, screenshot, community comment, or course/idea page. Use only as demand language.
   - L1: public product page, pricing page, offer page, docs, vendor-owned service page, or public Trust Center page. Treat it as offer-existence and workflow-shape evidence, not payment proof.
   - L2-lite: public customer story, public acquisition, public ratings/marketplace evidence, named customer proof, or signed public case study. Treat it as market-activity evidence, not billing, margin, retention, compliance, or solo-operator proof.
   - L2-strong: owner-supplied invoice, checkout readback, paid pilot acceptance, signed scope, audited metric, or billing evidence reviewed inside a scoped private engagement.
1. Define the response boundary.
   - Name buyer or issuing organization, solicitation/RFP id, source documents, due date, amendment state, response surface, allowed artifact, and excluded actions.
   - Separate internal preparation from bid/no-bid final decisions, pricing commitments, signatures, certifications, representations, uploads, submissions, external sends, buyer contact, subcontractor contact, and portal writes.
2. Inventory source documents.
   - Capture main RFP, response instructions, evaluation factors, SOW/PWS/specifications, attachments, forms, clauses, certifications, Q&A, amendments, pre-bid notes, and submission instructions.
   - Record source URL or file name, source date, amendment id, page or section, and stale-source risk.
3. Build a compliance matrix.
   - For each requirement, record requirement id, source section/page, requirement summary, response required, proposal location, owner role, evidence needed, current evidence status, reviewer role, amendment affected, deadline or format constraint, risk flag, and status.
   - Use statuses such as `mapped`, `needs evidence`, `needs reviewer`, `blocked`, `not applicable candidate`, and `ready for owner review`.
   - Include hard stop flags for signer identity, certifications or representations, customer references, pricing, subcontractor commitments, portal upload, and final submission.
   - For security questionnaires, DDQs, CAIQ, AI-CAIQ, SIG, or Trust Center requests, add questionnaire family, version, question id, control mapping, answer owner, evidence pointer, evidence sensitivity, NDA or access rule, reviewer role, disclosure boundary, and customer-send status.
   - For public Trust Center or trust-portal replays, add portal URL, product scope, public/private status, document-title versus document-content status, access-request state, download state, customer/prospect-only note, source timestamp, update notice, and whether the row can support a draft answer or only a reviewer question.
4. Build a proposal evidence packet.
   - Create a proposal outline mapped to instructions and evaluation factors.
   - Bind every material claim to source evidence, approved internal evidence, or a missing-evidence flag.
   - Keep capability, past performance, staffing, pricing, security, privacy, subcontracting, insurance, small-business status, and legal claims under reviewer ownership.
5. Track amendments and deadlines.
   - Record amendment changes, affected requirements, changed due dates, changed formats, clarification deadlines, and proposal sections requiring rework.
   - Treat deadlines as review evidence, not submission authority or late-proposal excuse.
6. Package the owner handoff.
   - Provide source inventory, compliance matrix, draft outline, claim-evidence ledger, reviewer queue, amendment/deadline tracker, open questions, and no-action receipt.
   - Route executable actions to operations handoff only after explicit scoped approval.
7. Prove the method on a small ledger before widening automation.
   - For security questionnaires or DDQs, start with a 10 to 25 row sample answer-evidence ledger.
   - Each row should include question id, question text, source candidate, evidence status, draft-answer status, owner role, reviewer role, sensitivity, missing evidence, and forbidden next action.
   - Treat partial public evidence as a source pointer or reviewer question, not as final answer content.

## Initial Scope

This candidate is for source mapping, evidence organization, drafting support, and owner/reviewer handoff. It must not submit proposals, upload documents, sign, certify, represent, attest, set price, decide bid/no-bid, decide eligibility, contact buyers, contact subcontractors, write proposal portals, or claim legal, procurement, compliance, security, pricing, award, or win-rate conclusions.

It should produce an RFP source inventory, compliance matrix, proposal outline, claim-evidence ledger, amendment/deadline tracker, reviewer queue, risk boundary, and no-action receipt.

## Known Failure Modes

- Treating a compliance matrix as proof that the proposal is compliant.
- Treating AI-drafted proposal sections as submit-ready.
- Missing amendments, Q&A, changed due dates, or hidden disqualifying requirements.
- Collapsing response instructions and evaluation factors into generic marketing copy.
- Marking requirements `not applicable` without owner or domain review.
- Committing pricing, delivery, staffing, security, privacy, subcontracting, insurance, certifications, or small-business status.
- Uploading, submitting, signing, certifying, or representing through a portal.
- Contacting the buyer, contracting officer, prime, subcontractor, vendor, or customer without scoped approval.
- Retaining sensitive pricing, bid strategy, identity, tax, certification, security, customer, or subcontractor data unnecessarily.
- Treating proposal response service ideas or X posts as revenue proof.
- Treating questionnaire completion, Trust Center evidence, STAR/CAIQ/AI-CAIQ/SIG mapping, SOC 2 reports, ISO certificates, pentest summaries, or AI-generated answers as proof of security posture, compliance, procurement approval, customer-send readiness, or disclosure authority.
- Treating public product pages, pricing pages, acquisition announcements, ratings, customer logos, or vendor case studies as proof of actual paid demand for a solo service, margin, retention, customer willingness, or revenue repeatability.
- Treating visible Trust Center document titles, framework badges, customer logos, public/private document lists, or request-access buttons as permission to download, request access, share evidence, summarize controlled reports, send customer answers, or make compliance/security/procurement conclusions.

## Verification Needed

- Replay on one public federal solicitation with a 5 to 10 row compliance matrix and no submission.
- Replay completed once on a public D.C. Courts RFP for a legal case and document management system. The sample produced a 10-row matrix covering solicitation identity, Section C requirements, amendment acknowledgment, two-volume PDF packaging, Tab A-D structure, signature/certification gate, technical approach, experience evidence, and evaluation factors. The replay confirmed that matrix columns need owner/reviewer/evidence/amendment/boundary fields or the artifact can look like a compliance conclusion.
- Replay on one commercial RFP or questionnaire sample.
- Replay on one security questionnaire/DDQ response sample where internal evidence and sensitive-data boundaries matter.
- Replay completed once on public CSA AI-CAIQ / CAIQ / STAR and Shared Assessments SIG source pages. The sample produced a 10-row questionnaire evidence matrix covering questionnaire scope, control mapping, answer-evidence ledgers, ownership, sensitive-evidence queues, registry status, Trust Center pointers, AI-assisted answer QA, reviewer handoff, and no-submit/no-share/no-compliance-conclusion boundaries. It confirmed that the seller-side response shape also applies to public security-questionnaire lanes, but sensitive evidence and customer-send authority need stricter columns than ordinary RFP requirement rows.
- Public service-shape review completed once across Vanta, Conveyor, HyperComply, Whistic, and SecurityScorecard / HyperComply acquisition sources. The review found L1 product/pricing/offer evidence and one L2-lite acquisition signal, but no L2-strong solo-operator paid proof. It confirmed the need to separate offer existence, market activity, and actual paid-proof before framing the opportunity.
- Public Trust Center replay completed once across OpenAI Trust Portal, Conveyor Trust Center, Vanta Security, Postman Customer Trust Portal, and SecurityScorecard Trust sources. The replay confirmed that trust-portal source maps need explicit public/private/access/download/customer-send columns and must separate visible document titles, framework lists, and request-access flows from usable evidence content or disclosure authority.
- Synthetic 25-row questionnaire answer-evidence ledger replay completed once using only public/source-map evidence from the prior rounds. The replay confirmed that the method can produce a useful preparation packet, but many rows stay at source-pointer, missing-evidence, owner-review, or no-customer-send status rather than final answers.
- Compare with `procurement-vendor-sourcing-operations.md` to keep buyer-side sourcing and seller-side response roles separate.
- Add eval coverage only if repeated failures show agents turning compliance matrices into submission, certification, pricing, or award authority.

## Placement Candidates

- Keep as incubator while scope and sample replays are still being proven.
- If stable, promote to a productive playbook for seller-side proposal response evidence packets.
- If overlap is modest, merge a small seller-side subsection into `draft-and-evidence-packet.md` or `operations-execution-handoff.md` instead of creating a broad playbook.
