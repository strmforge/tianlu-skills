# Playbook: HR Recruiting Operations Planning

Status: seed draft

Scope: hr-recruiting-operations-neutral. This playbook helps an agent turn role, recruiting, interview, onboarding, and employee-service signals into reviewable HR operations artifacts. It is not tied to one ATS, HRIS, payroll system, country, employer, job family, interview method, or employment law regime.

## Purpose

Help an agent produce useful HR operations work products: role intake briefs, job description drafts, structured interview plans, scorecard templates, resume review checklists, interview feedback summaries, onboarding checklists, employee-service FAQ drafts, bias or consistency review notes, and handoff packets.

This playbook supports HR operations preparation and review. It does not make hiring, rejection, promotion, discipline, compensation, legal, payroll, benefits, accommodation, or employment decisions.

## Inputs

- Role intake notes, job family, required responsibilities, skills, work context, and hiring stage.
- Existing job description, competency model, interview plan, scorecard, hiring rubric, or onboarding checklist if available.
- Candidate materials supplied under an explicit review boundary, such as resumes, portfolios, interview notes, scorecards, recruiter notes, or feedback snippets.
- HR policy, employee handbook, FAQ, onboarding materials, or service-desk categories supplied by the user.
- Privacy, retention, protected-class, jurisdiction, union, worker-classification, accommodation, and company-policy constraints supplied by the user.
- Target systems described at a high level, such as ATS, HRIS, payroll, scheduling, document-signing, identity, ticketing, or learning systems.

## Procedure

1. Define the HR operations boundary.
   - Name the role, stage, artifact type, input sources, decision owner, and non-goals.
   - Separate operational drafts from candidate decisions, employee decisions, legal interpretations, system writes, sends, and commitments.

2. Normalize role and criteria.
   - Convert role notes into responsibilities, required skills, working conditions, evidence needed, and reviewer questions.
   - Replace vague traits with observable, role-relevant criteria where possible.
   - Mark potentially biased, protected-class, or unverifiable criteria for human HR review instead of silently using them.

3. Draft recruiting artifacts.
   - Produce job description drafts, role intake briefs, sourcing briefs, interview plan drafts, recruiter question lists, and communication drafts when policy context exists.
   - Keep all candidate-facing messages as drafts until a human owner approves the send.

4. Build structured review tools.
   - Create interview scorecard templates, competency rubrics, resume review checklists, feedback forms, and evidence fields.
   - Use scorecards as consistency aids, not as automated ranking, rejection, hiring, promotion, or compensation decisions.

5. Summarize candidate or interview evidence.
   - Group supplied notes by declared criteria, source, confidence, missing evidence, agreement, disagreement, and follow-up questions.
   - Preserve source phrasing for sensitive feedback when possible.
   - Do not infer protected traits, health, disability, age, family status, immigration status, union status, personality labels, or long-term performance from weak signals.

6. Prepare onboarding and employee-service artifacts.
   - Convert role, team, policy, and service-desk signals into onboarding checklists, first-week plans, access request checklists, policy FAQ drafts, routing guides, and escalation lists.
   - Treat account creation, access grants, payroll, benefits, accommodations, worker classification, policy exceptions, and HRIS writes as human checkpoints.

7. Review fairness, privacy, and consistency risks.
   - Produce a bias-risk note, sensitive-data note, missing-policy list, local-review question list, and audit trail for the artifact.
   - Mark any unsupported claim of being unbiased, compliant, accurate, validated, or legally sufficient as unverified.

8. Package the HR operations handoff.
   - Include artifact ids, source inputs, assumptions, reviewer questions, approval needs, data-retention notes, system surfaces, and post-use evidence to collect.
   - Route executable actions to an operations handoff packet when they touch ATS, HRIS, payroll, identity, email, calendar, ticketing, legal, or employee systems.

## Outputs

- Role intake brief.
- Job description draft and bias review note.
- Structured interview plan.
- Interview scorecard or rubric template.
- Resume review checklist.
- Candidate evidence summary.
- Interview feedback summary.
- Recruiter, interviewer, or hiring-manager question list.
- Onboarding checklist and first-week plan draft.
- Employee-service FAQ or routing draft.
- Bias, privacy, and consistency review note.
- HR operations handoff packet.

## Quality Signals

- The artifact is useful to a recruiter, hiring manager, HR operations owner, interviewer, or onboarding owner without pretending to be the decision maker.
- Criteria are role-relevant, observable, and source-backed, or marked for review.
- Candidate summaries separate supplied facts, reviewer notes, missing evidence, assumptions, and follow-up questions.
- Sensitive data, protected traits, legal or policy uncertainty, and system-write surfaces are clearly marked.
- Scorecards improve consistency without becoming automated decisions.
- The output includes the next human review step and evidence to collect after use.

## Human Checkpoints

- Hiring, rejection, advancement, ranking, scoring for decision, promotion, transfer, discipline, termination, performance, compensation, benefits, accommodation, worker classification, legal, payroll, tax, immigration, union, or employment-policy decisions.
- Candidate or employee communication sends, offer letters, rejection notices, interview scheduling sends, external notices, or public job posting.
- ATS, HRIS, payroll, benefits, identity, background-check, scheduling, ticketing, document-signing, learning-system, or system-of-record writes.
- Collection, retention, export, sharing, or long-term storage of candidate, employee, applicant, payroll, health, disability, demographic, background-check, or other sensitive data.
- Claims that a tool, rubric, model, score, or workflow is unbiased, validated, compliant, legally sufficient, or predictive of job performance.
- Local employment-law, equal-opportunity, accommodation, wage, benefit, leave, privacy, and workplace policy interpretation.

## Composable With

- `draft-and-evidence-packet.md` for high-constraint HR, employee, candidate, legal, or policy communications that need reviewable drafts and evidence tables.
- `customer-support-quality-review.md` when employee-service desk, HR helpdesk, or policy FAQ conversations need QA review.
- `learning-operations-planning.md` for onboarding, training, role-readiness, and procedure-learning loops.
- `data-analysis-decision-support.md` for hiring funnel, time-to-fill, interview-load, onboarding, or service-desk data analysis without making employment decisions.
- `operations-execution-handoff.md` when HR artifacts should become an approval sheet, owner map, blocker log, and evidence-capture checklist.
- `feedback-to-backlog-operations.md` when candidate, employee, interviewer, or manager feedback should become improvement work.
- `../laws/surface-browser-runtime.md` when working in logged-in ATS, HRIS, job board, calendar, ticketing, identity, or payroll surfaces.
- `../laws/surface-mcp-tools-auth.md` for private data, account actions, external sends, system writes, identity, payroll, benefits, or HR tools.
- `../laws/surface-evidence-eval.md` for rubric evidence, bias claims, performance claims, compliance claims, and method promotion.

## Evidence

Source signal: broad X and domain scout review found recurring HR operations signals around AI recruiter workflows, resume screening with human review gates, interview scorecards, structured evaluations, onboarding workflows, employee-service desks, and AI screening bias. Official-source review of EEOC artificial-intelligence guidance, ADA-related employment selection guidance, U.S. Department of Labor FLSA recordkeeping guidance, and FTC guidance on AI claims and hiring scams confirmed that HR workflows touch equal-opportunity, disability, wage-record, privacy, and truth-in-claims surfaces.

Validation state: seed draft. Needs replay against real job description review, structured interview planning, interview feedback summary, onboarding checklist, employee-service FAQ, and HR handoff cases before promotion.

Known failures:

- Turning operational support into automated hiring, rejection, ranking, compensation, discipline, or performance decisions.
- Preserving biased or protected-class criteria because they appeared in user-provided role notes.
- Treating AI-generated scores, rubrics, or summaries as validated, unbiased, compliant, or predictive evidence.
- Writing candidate or employee data into durable memory, HR systems, or communication channels without explicit scope.
- Producing generic HR templates that ignore local law, company policy, union context, accommodation needs, or privacy constraints.
