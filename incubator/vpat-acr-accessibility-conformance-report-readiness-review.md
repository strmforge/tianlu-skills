# VPAT ACR Accessibility Conformance Report Readiness Review

Status: incubating.

## Signal

External feeds surface a recurring procurement and vendor-readiness pattern around VPAT, Accessibility Conformance Reports (ACRs), Section 508, software accessibility questionnaires, and RFP accessibility requirements. The useful solo-operator method is not "certify accessibility" or "make a product compliant." It is a preparation workflow: turn public or owner-supplied product, procurement, and accessibility-test material into an ACR readiness source map, criteria-evidence ledger, reviewer queue, supplemental accessibility report queue, and no-certification/no-customer-send handoff.

In the current scan, Chrome/X queries for VPAT and ACR produced weak but relevant procurement-language signals: buyers ask for VPATs in RFPs, vendors often learn about the requirement late, and training or explanation content exists around creating ACRs. This L0 signal is useful as demand language only. Official and primary sources are required before shaping the method.

## Source

- ITI VPAT page: an ACR based on a completed ITI VPAT is a leading global reporting format for buyers and sellers identifying ICT accessibility features; VPAT covers Section 508, EN 301 549, and W3C/WAI WCAG; the visible current version is VPAT 2.5Rev (April 2025); four editions are 508, EU, WCAG, and INT; conformance levels are `supports`, `partially supports`, `does not support`, and `not applicable`; a completed VPAT for a specific product is an ACR; ITI does not review or approve VPATs; there is no VPAT certification, pass/fail scale, certification logo, or submission process.
- Section508.gov sell/VPAT page: ACRs explain how ICT products such as software, hardware, electronic content, and support documentation meet Revised 508 Standards; ACRs help federal contracting officials and government buyers assess ICT during market research and proposal evaluation; vendors are recommended to generate an ACR for ICT marketed to the federal government; OpenACR Editor creates portable machine-readable ACR documents.
- Section508.gov create-ACR guide: the product owner/developer/vendor must first test the product against applicable standards; title page fields include organization, product/version, report date, product description, contact information, notes, and evaluation methods; conformance phrases must use `Supports`, `Partially Supports`, `Does Not Support`, or `Not Applicable`; remarks are required for `Partially Supports` and `Does Not Support`; Level A and Level AA tables are required where applicable; Chapter 3/4/5/6 tables apply to functional performance, hardware, software, and support documentation/services; the final ACR document should be accessible.
- Section508.gov request-accessibility-information page: for each ICT item, procurement teams may request a complete ACR based on VPAT, a Supplemental Accessibility Report (SAR), evaluation methods, accessibility/usability features, unusable core functions, accessible configuration and installation information, authoring-tool content capabilities, demos, remediation plans, accessibility improvement plans, training descriptions, accessible content samples, and test plans.
- Section508.gov understand-claims page: `partially supports` and `does not support` indicate non-conformance for that standard or criterion; `not applicable` needs careful review; `not evaluated` gives no assurance and should prompt clarification; purchasers should conduct independent conformance validation/testing whenever possible.
- GSA OpenACR and OpenACR Editor GitHub repositories: public open-source tools and formats exist for structured, machine-readable ACR work. Repository metadata and README claims are ecosystem evidence only, not proof of ACR correctness, accessibility conformance, install safety, procurement acceptance, or paid solo-service demand.
- L0 X procurement-language signals around VPAT in RFPs, supplier management, and vendor training. Treat as search-language and opportunity-shape evidence only.

## Proposed Trigger

Use this candidate when a user, software vendor, SaaS team, contractor, proposal consultant, accessibility consultant, solo operator, procurement reviewer, or product owner needs a VPAT or ACR readiness packet, Accessibility Conformance Report source map, Section 508 or EN 301 549 evidence ledger, WCAG-table evidence queue for a software or ICT product, Supplemental Accessibility Report queue, RFP accessibility response support, OpenACR preparation map, product accessibility claim review, or no-certification/no-customer-send handoff.

Use it especially when the task is product or vendor conformance reporting for procurement, not website remediation, not ADA/WCAG legal compliance, not buyer-side supplier selection, and not seller-side full proposal submission.

## Proposed Mechanism

0. Classify evidence strength before framing the opportunity.
   - L0: X post, RFP anecdote, vendor complaint, course post, community comment, or revenue/service claim. Use only as demand language.
   - L1: public VPAT/ACR examples, product pages, trust-center pages, OpenACR repos, templates, vendor-owned guidance, or public tool docs. Treat as workflow-shape evidence, not correctness or procurement proof.
   - L2-lite: ITI VPAT page, Section508.gov guidance, U.S. Access Board ICT standards, public solicitation instructions, or official source text. Treat as process and terminology authority, not product-specific conformance proof.
   - L2-strong: owner-supplied product build, current product/version scope, test evidence, accessibility audit evidence, completed internal checklist, reviewer approval, solicitation instructions, or product-owner attestation inside a scoped engagement.
1. Define the reporting boundary.
   - Name product, version, ICT item, vendor or owner, target market, solicitation/RFP if any, VPAT edition, standards in scope, report date, source snapshot, allowed artifact, and excluded actions.
   - Separate preparation from product testing authority, certification, procurement approval, legal/compliance/accessibility sufficiency conclusions, customer send, public posting, solicitation submission, portal upload, account writes, and product changes.
2. Inventory source documents and product scope.
   - Capture VPAT edition, ITI instructions, applicable Section 508, EN 301 549, WCAG, or solicitation requirements, product description, release/version evidence, support documentation, hardware/software/web/electronic-content/authoring-tool surfaces, evaluation methods, existing audit reports, issue trackers, test plans, remediation notes, and owner-supplied evidence.
   - Record URL or file name, source date, version, product scope, source role, access boundary, reviewer owner, and stale-source risk.
3. Build the ACR criteria-evidence ledger.
   - For each criterion or table row, record criterion id, standard/table, applicability candidate, conformance phrase candidate, remarks/evidence, testing method, tool or manual evidence pointer, product area, known defect or exception, owner role, reviewer role, evidence status, sensitivity, missing evidence, and forbidden next action.
   - Use statuses such as `source-supported`, `needs test evidence`, `needs product-owner review`, `needs accessibility reviewer`, `not applicable candidate`, `not evaluated`, `conflict`, `stale`, and `ready for owner review`.
   - Treat `not applicable`, `partially supports`, `does not support`, and `not evaluated` as review flags, not as wording to smooth away.
4. Prepare the supplemental accessibility packet.
   - Build a SAR queue for evaluation methods, accessibility and usability features, core functions that may not be usable by persons with disabilities, accessible configuration and installation information, authoring-tool content capabilities, demos, remediation plans, accessibility improvement plans, training descriptions, accessible content samples, and test-plan needs.
   - Keep procurement requested items separate from product facts, evidence gaps, roadmap commitments, price/schedule commitments, and customer promises.
5. Review claim and disclosure boundaries.
   - State that VPAT completion is not ITI approval, VPAT certification, a pass/fail score, a certification logo, legal compliance, Section 508 procurement approval, WCAG conformance proof, accessibility sufficiency, or user success proof.
   - Mark customer-send, public posting, RFP submission, solicitation response, product-roadmap promises, remediation commitments, and legal/compliance statements as owner-approved follow-up only.
6. Shape OpenACR or document outputs only as inactive artifacts.
   - If OpenACR is in scope, map fields into structured YAML/HTML-ready rows, version-control notes, and accessible-document QA items without installing tools, executing conversion, publishing output, or claiming machine-readable validation proves conformance.
   - Respect ITI service-mark and template instructions; do not alter VPAT marks or imply ITI endorsement.
7. Package the owner handoff.
   - Provide source inventory, product-scope table, ACR criteria-evidence ledger, SAR queue, conformance-phrase review flags, reviewer queue, solicitation/accessibility requirement tracker, OpenACR/document output checklist, open questions, and no-certification/no-customer-send/no-post/no-submit/no-product-change receipt.
   - Route executable actions to operations handoff only after explicit scoped approval.

## Initial Scope

This candidate is for source mapping, evidence organization, conservative drafting support, reviewer handoff, and product-owner decision support. It must not certify accessibility, claim Section 508/WCAG/EN 301 549/legal compliance, decide procurement acceptability, decide product accessibility sufficiency, complete product testing as final authority, issue or imply VPAT certification, use certification logos, submit or post ACRs, send customers or buyers an ACR, upload to procurement portals, contact buyers or vendors, commit remediation, change product/repository/docs, install or run OpenACR tooling, or retain sensitive product, customer, disability, security, procurement, or internal test data without scoped approval.

It should produce a VPAT/ACR source inventory, product-scope table, criteria-evidence ledger, supplemental accessibility report queue, reviewer queue, solicitation requirement tracker, risk boundary, and no-action receipt.

## Known Failure Modes

- Treating a completed VPAT or ACR as ITI approval, certification, a pass/fail result, a certification logo, procurement approval, or legal compliance proof.
- Treating `supports` rows as proof that every user with a disability can use the product successfully.
- Treating `not applicable` as harmless without product-owner, accessibility, or procurement review.
- Hiding `partially supports`, `does not support`, or `not evaluated` rows behind generic accessibility language.
- Filling table rows from generic WCAG knowledge instead of product/version-specific test evidence.
- Confusing website accessibility remediation with product conformance reporting for ICT procurement.
- Collapsing ACR preparation into a full RFP response, customer-send answer, public trust-center publication, or procurement submission.
- Turning OpenACR machine-readable format, validation, or GitHub repository existence into proof of conformance, tool safety, procurement acceptance, or paid demand.
- Committing roadmap, remediation, configuration, training, price, schedule, warranty, support, or accessibility promises without owner approval.
- Retaining sensitive product defects, customer data, disability-related feedback, security reports, procurement details, credentials, account data, or internal test evidence unnecessarily.
- Treating X posts, vendor blogs, service pages, or tool READMEs as paid-demand, correctness, compliance, accessibility, or solo-revenue proof.

## Verification Needed

- Replay on one public ACR or VPAT sample with a 5 to 10 row criteria-evidence ledger, without customer send, public posting, or compliance conclusion.
- Replay on one public solicitation or RFP that requests VPAT/ACR accessibility information, mapping required ACR/SAR fields without proposal submission.
- Replay on one synthetic owner-supplied software product packet with fake product/version/test evidence to test the criteria-evidence ledger, SAR queue, and no-certification receipt.
- Replay one OpenACR source-map sample without installing, converting, publishing, or claiming validation as conformance.
- Compare with `rfp-response-compliance-matrix-review.md` to keep ACR rows from becoming proposal submission authority.
- Compare with the existing website accessibility/WCAG audit eval case to keep website remediation and product conformance reporting separate.
- Compare with `regulated-document-evidence-map.md` and `procurement-vendor-sourcing-operations.md` to keep evidence mapping separate from buyer-side vendor approval or compliance decisions.
- Add eval coverage only if repeated failures show agents turning VPAT/ACR packets into certification, compliance, customer-send, public posting, RFP submission, product-change, or procurement-approval authority.

## Placement Candidates

- Keep as incubator while source scope and replay coverage are still being proven.
- If stable, promote to a productive playbook for VPAT/ACR readiness evidence packets.
- If overlap is modest, merge a small ACR subsection into `regulated-document-evidence-map.md`, `draft-and-evidence-packet.md`, `procurement-vendor-sourcing-operations.md`, or `rfp-response-compliance-matrix-review.md` instead of creating a broad playbook.
