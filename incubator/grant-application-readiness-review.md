# Grant Application Readiness Review

Status: incubating.

## Signal

External feeds surface a recurring solo-operator service shape around grant writing, nonprofit funding, public-funding applications, and AI-assisted proposal packets. The useful mechanism is not "AI writes grants and wins funding." It is a preparation workflow: turn public or owner-supplied funding documents into a source inventory, eligibility and registration readiness table, form/package checklist, narrative and budget evidence ledger, reviewer queue, and no-submit handoff.

In the current scan, Chrome/X queries for grant-writing AI, nonprofit grant freelancers, and grant readiness packets were weak and noisy. That negative signal matters: this opportunity should not be framed from X virality. Official sources show the work is complex, role-bound, form-bound, eligibility-bound, registration-bound, and budget-accountability-bound. GitHub search shows templates and grant-management tools exist, but repository stars and README claims do not prove paid demand, correctness, compliance, or solo-operator viability.

## Source

- Grants.gov Applicant Registration: organizations applying for federal grants must register as entities with SAM.gov first; Grants.gov uses SAM.gov to establish organizational authority; UEI, EBiz POC, role assignment, annual renewal, and 10-business-day-plus registration timing matter.
- SAM.gov Entity Registration: applying for federal awards as a prime awardee requires registration; a Unique Entity ID alone is not enough to apply directly for federal awards.
- Grants.gov How to Apply for Grants: the public flow is learn, check eligibility, search, register, apply using Workspace, and track.
- Grants.gov Workspace Overview: Workspace is the standard way to apply; teams can access and edit forms; AOR submits; Workspace Owner oversees form completion and access.
- Grants.gov Applicant Eligibility: legal eligibility is defined by the funding opportunity, Application Instructions, and agency synopsis; eligibility must be checked before spending time on the application.
- Grants.gov SF-424 Family: the form repository includes SF-424, project abstract, project narrative attachments, budget narrative attachments, SF-424A/B/C/D, assurances, lobbying, and many agency-specific forms.
- eCFR 2 CFR Part 200 and 2 CFR 200.308 were identified as relevant post-award/budget-revision authority sources, but the current direct page fetch was blocked by the federalregister.gov unblock page and needs a fresh official-source replay before being used as row-level evidence.
- GitHub search examples: small grant-management systems, grant templates, and grant proposal AI aids. Treat as L1/L0 ecosystem evidence only, not paid-proof or correctness evidence.

## Proposed Trigger

Use this candidate when a user, nonprofit, school, small business, fiscal sponsor, local organization, grant consultant, or solo operator needs a grant application readiness packet, NOFO checklist, federal or public funding source map, SF-424 package inventory, project narrative evidence map, budget narrative evidence ledger, SAM/UEI readiness review, Workspace role map, AOR/submit-authority boundary, deadline/amendment tracker, or post-award budget-revision handoff.

Use it especially when the task is applicant-side preparation for a public funding opportunity, not seller-side RFP response and not buyer-side procurement sourcing.

## Proposed Mechanism

0. Classify evidence strength before framing the opportunity.
   - L0: X post, course post, revenue screenshot, AI grant-writing claim, community comment, or broad service idea. Use only as demand language.
   - L1: public product page, service page, template, repository, grant-management tool, or vendor-owned workflow description. Treat as workflow-shape evidence, not paid demand or correctness proof.
   - L2-lite: official applicant guidance, public agency instructions, public funding opportunity instructions, named public case study, or public award process description. Treat as source authority for process shape, not applicant eligibility or award likelihood.
   - L2-strong: owner-supplied application package, NOFO, agency instructions, entity registration readback, signed scope, current official-source replay, reviewer approval, or billing evidence inside a scoped engagement.
1. Define the application boundary.
   - Name funding source, opportunity id, program, applicant entity, deadline, allowed artifact, source snapshot, and excluded actions.
   - Separate preparation from eligibility decisions, legal conclusions, budget commitments, certifications, representations, signatures, uploads, submissions, funder contact, account writes, and post-award commitments.
2. Inventory source documents.
   - Capture NOFO or opportunity notice, application instructions, agency synopsis, eligibility criteria, award amount/range, deadlines, amendments, Q&A, required forms, attachments, assurances, budget instructions, narrative instructions, reporting obligations, and submission route.
   - Record URL or file name, source date, section/page, amendment state, source role, and stale-source risk.
3. Build an eligibility and registration readiness table.
   - Record applicant type, entity name, UEI, SAM.gov registration state, EBiz POC, Grants.gov profile state, AOR/submit authority, Workspace Owner, custom roles, and missing confirmations.
   - Mark eligibility as `source says check`, `owner says eligible candidate`, `needs domain review`, `not eligible candidate`, or `unknown`; do not decide legal eligibility.
4. Build the form and package checklist.
   - Map each required form or attachment to source instruction, owner, evidence needed, draft status, reviewer role, deadline, format rule, and submit-blocking risk.
   - Include common surfaces such as SF-424, project abstract, project narrative, budget narrative, SF-424A/B/C/D, assurances, lobbying, site/location, key contacts, and agency-specific forms when present in the source package.
5. Build narrative and budget evidence ledgers.
   - Bind every project narrative claim, capacity claim, beneficiary claim, outcome claim, match/cost-share note, staffing note, partner note, budget line, and budget narrative statement to owner-supplied evidence or a missing-evidence flag.
   - Route finance, accounting, tax, legal, compliance, program-design, and domain-specific claims to reviewers.
6. Track deadlines, amendments, and authority gates.
   - Record opportunity close date, registration timing, SAM renewal risk, Workspace access state, amendment id, changed requirements, changed forms, changed due dates, and reviewer deadlines.
   - Add hard-stop flags for submit authority, certifications, representations, signatures, budget commitments, cost share, lobbying/assurance forms, post-award obligations, portal upload, and external send.
7. Package the owner handoff.
   - Provide source inventory, eligibility/registration readiness table, form checklist, narrative evidence ledger, budget evidence ledger, reviewer queue, deadline/amendment tracker, open questions, and no-submit/no-certify/no-budget-commit/no-account-write receipt.
   - Route executable actions to operations handoff only after explicit scoped approval.

## Initial Scope

This candidate is for source mapping, preparation, evidence organization, conservative drafting support, reviewer handoff, and owner decision support. It must not apply for funds, submit applications, upload documents, sign, certify, represent, attest, contact funders, create or change SAM.gov/Grants.gov/Workspace accounts, decide eligibility, set budgets, commit cost share, make legal/financial/accounting/compliance conclusions, or claim award likelihood, funding readiness, revenue, or income certainty.

It should produce a grant source inventory, eligibility and registration readiness table, form/package checklist, narrative and budget evidence ledgers, reviewer queue, deadline/amendment tracker, risk boundary, and no-action receipt.

## Known Failure Modes

- Treating polished grant writing as proof of eligibility, fundability, compliance, or award likelihood.
- Treating AI-generated proposal text as submit-ready.
- Missing SAM.gov registration, UEI-only limits, EBiz POC, AOR, Workspace Owner, custom roles, or submit-authority boundaries.
- Missing NOFO/application instructions, agency synopsis, amendments, Q&A, deadline changes, required forms, attachment formats, or page/character constraints.
- Collapsing eligibility criteria, evaluation criteria, narrative instructions, and budget instructions into generic persuasive copy.
- Marking an applicant eligible, compliant, or ready without domain-owner review.
- Committing budget amounts, match/cost share, staffing, partners, outcomes, assurances, lobbying statements, certifications, or post-award obligations.
- Uploading, submitting, signing, certifying, representing, or changing account/Workspace state.
- Contacting funders, agencies, fiscal sponsors, partners, auditors, finance owners, or legal reviewers without scoped approval.
- Retaining sensitive identity, tax, registration, financial, payroll, beneficiary, partner, or internal program data unnecessarily.
- Treating X posts, service pages, GitHub templates, or grant-management repos as proof of paid demand, customer willingness, compliance quality, or solo-operator revenue repeatability.
- Treating official guidance as current for a specific opportunity without checking the current NOFO, package, and agency instructions.

## Verification Needed

- Replay on one public Grants.gov funding opportunity with a 5 to 10 row source inventory and form/package checklist, with no account action and no submission.
- Replay on one owner-supplied or public nonprofit grant sample where narrative and budget evidence ledgers can be built without sensitive-data retention.
- Replay on one SAM/UEI/Workspace readiness-only sample to check role boundaries and no-account-write receipts.
- Fresh official-source replay for eCFR 2 CFR Part 200 and 2 CFR 200.308 using a reachable official source or downloaded official text before adding post-award budget-revision row evidence.
- Compare with `rfp-response-compliance-matrix-review.md` to keep applicant-side public-funding preparation separate from seller-side proposal response.
- Compare with `finance-operations-review.md` and `regulated-document-evidence-map.md` to keep budget evidence support separate from accounting, tax, audit, legal, or compliance conclusions.
- Add eval coverage only if repeated failures show agents turning readiness packets into eligibility, compliance, funding, submission, certification, budget, or account authority.

## Placement Candidates

- Keep as incubator while source scope and sample replays are still being proven.
- If stable, promote to a productive playbook for public-funding or grant application readiness packets.
- If overlap is modest, merge a small grant-application subsection into `regulated-document-evidence-map.md`, `draft-and-evidence-packet.md`, or `operations-execution-handoff.md` instead of creating a broad playbook.
