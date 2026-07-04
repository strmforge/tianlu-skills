# Transfer Credit Equivalency Readiness Review

Status: incubating.

## Signal

External feeds surface a recurring student and school-adjacent workflow around transfer credit, course equivalency, articulation, transfer evaluation, and prior learning assessment or recognition. The useful solo-operator mechanism is not "get credits approved" or "guarantee degree progress." It is a preparation workflow: turn public official policies, equivalency tools, catalog rules, and owner-supplied transcripts or program plans into a source inventory, rule map, course-matching checklist, evidence ledger, reviewer queue, deadline tracker, and no-submit/no-school-contact/no-account-action handoff.

In the current scan, read-only Chrome/X results were noisy but directionally useful: schools, transfer pathways, equivalency-search tools, and prior-learning-credit options repeatedly appeared. GitHub searches did not produce a compelling tooling ecosystem for this slice. That negative ecosystem signal matters: this candidate should be framed as document and rule readiness, not as open-source automation or credit-decision software.

## Source

- Oklahoma State Regents for Higher Education, Introduction to the Course Equivalency Project: the Course Equivalency Project (CEP) is a postsecondary resource service providing course-equivalency information to facilitate student transfer within the Oklahoma System of Higher Education; the database contains faculty-generated course equivalency information; equivalency means course A satisfies all program requirements that course B satisfies.
- Oklahoma State Regents for Higher Education, Course Transfer: course-equivalency tables show courses transferable among Oklahoma public colleges and some private institutions; the searchable CEP database lets users check whether a specific course is transferable to another Oklahoma college or university; course equivalencies are tied to the academic year.
- Western Washington University, Transfer Credit Policies: transfer credit is generally awarded for baccalaureate-oriented courses from regionally accredited institutions; some course categories do not transfer; students may use the Transfer Course Equivalency Guide and an Automatic Transcript Evaluator estimate, but official evaluation is provided after intent to enroll and transcript review.
- Western Washington University, Transfer Student Transfer Equivalency Report (TER): students are encouraged to review TER before registration; the TER shows accepted transfer credits and Western course equivalents; reports update after final transcripts are received.
- Western Washington University, Transfer Course Equivalency Guide: public lookup surface for how courses from Washington colleges and universities transfer to Western, separated from official student-specific evaluation.
- Pennsylvania College of Technology, Transferring Credits: courses from institutionally accredited colleges transfer when comparable to Penn College courses and applicable to a Penn College degree program; transfer evaluations have timing expectations; minimum grade and other policy boundaries apply.
- Valley City State University catalog, Additional Credit Opportunities: additional credit opportunities include transfer credit, examination credit, and credit for life and work experience through Prior Learning Assessment (PLA); PLA connects learning from life and work to a VCSU degree.
- Humber Polytechnic, PLAR page and academic regulations: PLAR allows learners to identify, document, have assessed, and gain recognition for prior learning; applicants may seek credit for learning from work or life experience if it corresponds to specific course or program outcomes; granting credit does not guarantee entry into a program; assessment methods vary and can include portfolios, simulations, interviews, assignments, or challenge exams.
- GitHub and community search samples: transfer-credit and articulation surfaces exist mostly as policy or institutional-process pages, not as a strong reusable open-source service stack. Treat ecosystem signals as weak L1 only.

## Proposed Trigger

Use this candidate when a student, parent, transfer counselor, academic coach, enrollment adviser, school-support nonprofit, bootcamp-to-college adviser, PLA or PLAR applicant, or solo operator needs a transfer credit readiness packet, course equivalency source map, articulation rule checklist, transfer evaluation preparation packet, prior learning assessment evidence checklist, degree-plan impact review queue, school-specific transcript and syllabus request list, or no-submit/no-contact/no-account-action handoff.

Use it especially when the task is preparation and evidence organization before official school review. Do not use it as a transfer-credit decision, degree-audit decision, registrar action, admissions action, PLA or PLAR approval, school-contact workflow, or academic-outcome promise.

## Proposed Mechanism

0. Classify evidence strength before framing the opportunity.
   - L0: X post, student anecdote, transfer-forum claim, consultant landing page, equivalency screenshot, or generic "transfer all your credits" advice. Use only as pain language and search language.
   - L1: public school transfer pages, catalog pages, advising pages, equivalency lookups, articulation tables, or consultant workflow pages. Treat as institution-specific workflow-shape evidence, not universal policy or outcome proof.
   - L2-lite: official statewide articulation systems, official institutional transfer-credit policies, official catalog rules, official PLA or PLAR pages, and official evaluator instructions. Treat as process and terminology authority, not student-specific approval authority.
   - L2-strong: owner-supplied transcript, degree plan, syllabus, school transfer report, official evaluator message, current institution instruction, or scoped engagement evidence.
1. Define the student and institution boundary.
   - Name source institution, target institution, program or major, credential level, term or academic year, transcript state, public source snapshot, allowed artifact, and excluded actions.
   - Separate preparation from admissions application, transcript submission, syllabus submission, registrar contact, evaluator contact, portal access, TER or degree-audit generation in a logged-in system, PLA or PLAR application, and transfer-credit approval.
2. Inventory official and institution-specific sources.
   - Capture statewide articulation/equivalency tools, school transfer-credit policies, public equivalency guides, evaluator instructions, academic-year applicability, non-transferable categories, minimum grade rules, transcript rules, syllabus requirements, PLA or PLAR eligibility statements, assessment methods, deadlines, and response-time expectations.
   - Record URL or file name, source date, institution, academic year, source role, stale-source risk, and whether the source is statewide, institution-specific, owner-supplied, or L0/L1 signal.
3. Classify the pathway.
   - Separate course equivalency lookup, official transcript evaluation, major-specific applicability, general-education applicability, lower-division or upper-division boundary, PLA or PLAR request, challenge exam path, portfolio path, and non-transferable or excluded-credit path.
   - Use statuses such as `source-supported candidate`, `institution-specific`, `needs syllabus`, `needs transcript`, `needs target-school review`, `needs faculty review`, `not transferable category`, `conflict`, `stale`, and `ready for owner review`.
4. Build the course and evidence ledger.
   - For each course or learning claim, record source course, target course candidate, credit amount, grade rule, academic-year rule, source instruction, evidence item, evidence owner, sensitivity, reviewer role, missing syllabus or transcript item, conflicting rule, deadline, and forbidden next action.
   - For PLA or PLAR, record claimed learning, matching course or outcome area, evidence type, assessment method candidate, and reviewer queue.
5. Prepare the reviewer queue.
   - Turn gaps into questions for the student, transfer adviser, registrar, departmental evaluator, faculty subject-matter reviewer, prior-learning office, or program adviser.
   - Do not contact any school, evaluator, faculty member, adviser, or third party without scoped approval.
6. Review account, submission, and decision boundaries.
   - Mark transcript uploads, portal actions, TER or official evaluation access, PLA or PLAR applications, challenge assessments, syllabus submissions, and school emails or calls as owner-approved follow-up only.
   - Treat school portals, transcript vendors, equivalency tools with login, and student information systems as account/action surfaces, not read/write permission.
7. Package the owner handoff.
   - Provide source inventory, pathway classification, course-matching checklist, evidence ledger, reviewer queue, deadline/status tracker, open questions, and no-submit/no-contact/no-account-action/no-credit-outcome-claim receipt.
   - Route executable actions to operations handoff only after explicit scoped approval.

## Initial Scope

This candidate is for source mapping, rule interpretation support, evidence organization, conservative draft support, reviewer handoff, and student decision support. It must not submit transcripts or syllabi, access school portals, generate official TER or degree evaluations in logged-in systems, contact registrars or advisers, apply for PLA or PLAR, decide transferability, decide degree applicability, promise time or cost savings, promise graduation-path outcomes, make accreditation or legal conclusions, or retain sensitive student records without scoped approval.

It should produce a transfer-credit source inventory, pathway classification, course-matching checklist, evidence ledger, reviewer queue, deadline or timing tracker, open questions, risk boundary, and no-action receipt.

## Known Failure Modes

- Treating a public equivalency table or guide as a guarantee of official transfer credit approval.
- Treating transferable credit as the same as degree applicability for a specific major or graduation requirement.
- Applying one institution's rule, minimum grade, excluded category, academic-year table, or evaluator timeline to another institution.
- Confusing public equivalency lookup, unofficial estimate, official transcript evaluation, and enrolled-student degree audit.
- Treating PLA or PLAR as "credit for experience" without documenting learning outcomes, evidence, and assessment method.
- Missing syllabus requirements, transcript timing, academic-year applicability, or institution-specific excluded-credit categories.
- Logging into student systems, transcript vendors, school portals, or evaluation tools, or uploading materials without scoped approval.
- Contacting advisers, registrars, faculty, or schools without scoped approval.
- Treating X posts, school examples, consultant pages, or tool screenshots as proof of paid demand, approval likelihood, degree progress, cost savings, or time savings.
- Retaining excessive transcript, student-id, grade, disciplinary, disability, immigration, or financial-aid-adjacent data.

## Verification Needed

- Replay on one statewide or systemwide course-equivalency source with a 5 to 10 row course-matching checklist and no account action.
- Replay on one public institution transfer-credit policy plus one equivalency guide to test rule extraction, non-transferable categories, and timing boundaries.
- Replay on one synthetic student transfer packet with transcript and syllabus placeholders to test the evidence ledger and reviewer queue without sensitive-data retention.
- Replay on one PLA or PLAR source to test learning-outcome mapping, assessment-method branching, and no-approval wording.
- Compare with `regulated-document-evidence-map.md`, `learning-operations-planning.md`, `operations-execution-handoff.md`, and `solo-business-lifecycle-planning.md` to keep readiness support separate from academic decision authority or outreach.
- Add eval coverage only if repeated failures show agents turning readiness packets into transferability decisions, degree-audit authority, registrar contact, portal action, PLA or PLAR application action, or academic-outcome promises.

## Placement Candidates

- Keep as incubator while source scope and replay coverage are still being proven.
- If stable, promote to a productive playbook for transfer-credit and prior-learning readiness packets.
- If overlap is modest, merge a small transfer-credit subsection into `regulated-document-evidence-map.md`, `learning-operations-planning.md`, or `operations-execution-handoff.md` instead of creating a broad playbook.
