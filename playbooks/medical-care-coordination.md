# Playbook: Medical Care Coordination Planning

Status: seed draft

Scope: medical-care-coordination-neutral. This playbook helps an agent turn appointment, visit, follow-up, referral, caregiver, medication-list, test-report, patient-portal, and billing signals into reviewable care coordination artifacts. It is not tied to one clinic, EHR, patient portal, insurer, country, specialty, condition, or medical law regime.

## Purpose

Help an agent produce useful non-clinical care coordination work products: appointment prep cards, symptom or question timelines, medication and allergy rosters, test or report evidence indexes, patient-side visit note templates, clinician question lists, follow-up trackers, referral or appointment status boards, care task responsibility matrices, insurance or billing evidence packs, patient-portal draft packets, and care coordination handoff packets.

This playbook supports preparation, organization, and review. It does not provide diagnosis, treatment, triage, medication advice, clinical interpretation, insurance eligibility decisions, patient communication sends, EHR writes, patient-record writes, or emergency reassurance.

## Inputs

- User role and authority boundary, such as patient, caregiver, family member, clinic operations owner, care coordinator, or non-clinical support worker.
- Care stage, such as before appointment, during appointment, after visit, between visits, referral, discharge follow-up, home care, billing review, or patient-portal draft.
- Appointment details, visit goals, prior instructions, supplied symptoms or concerns, patient-stated timeline, medications, allergies, test/report inventory, referral status, bills, insurance documents, and caregiver notes.
- Existing clinician instructions, discharge notes, patient education material, appointment reminders, portal messages, care plans, or billing documents supplied by the user.
- Privacy, consent, caregiver authorization, data-retention, jurisdiction, clinic policy, insurer, portal, EHR, or account boundaries supplied by the user.
- Target systems described at a high level, such as patient portal, EHR, appointment system, referral system, pharmacy portal, billing system, insurer portal, calendar, email, SMS, or ticketing system.

## Procedure

1. Define the care coordination boundary.
   - Name the user role, care stage, artifact type, source inputs, intended reviewer, and non-goals.
   - Separate coordination artifacts from clinical judgment, patient-record updates, portal sends, insurance decisions, and emergency decisions.

2. Minimize sensitive data.
   - Ask only for the minimum information needed to structure the artifact.
   - Prefer placeholders, initials, date ranges, source pointers, document ids, or user-held references over full identifiers, record numbers, insurance numbers, addresses, or raw medical records.
   - Mark any patient, caregiver, minor, disability, mental-health, reproductive, genetic, infectious-disease, substance-use, financial, identity, or insurance data surface for scoped review.

3. Organize the user-provided facts.
   - Split supplied information into patient-stated facts, source-document facts, clinician instructions, caregiver notes, missing evidence, conflicts, assumptions, and follow-up questions.
   - Preserve clinician wording when the distinction matters.
   - Do not infer diagnoses, severity, prognosis, urgency, medication suitability, test meaning, or treatment options from the facts.

4. Build the coordination artifact.
   - For visit preparation, produce an appointment prep card, symptom or question timeline, medication and allergy roster, test/report evidence index, and clinician question list.
   - For post-visit work, produce a patient-side visit note template, follow-up tracker, next-appointment prep list, and open-question queue.
   - For referral or access work, produce a referral or appointment status board, missing-document list, contact-routing sheet, and evidence-capture checklist.
   - For home or caregiver coordination, produce a care task responsibility matrix, shift handoff note, supply checklist, and escalation question list.
   - For billing or insurance organization, produce an insurance or billing evidence pack that indexes documents without promising coverage, reimbursement, authorization, eligibility, or price outcomes.

5. Add review and escalation checkpoints.
   - Route clinical questions to clinicians, medication questions to clinicians or pharmacists, portal or EHR updates to authorized staff, billing or insurance claims to insurer or billing staff, and caregiver-access questions to the patient or authorized representative.
   - When emergency, self-harm, severe symptom, child-safety, pregnancy, public-health, or end-of-life signals appear, stop normal artifact generation and provide an emergency or professional-contact prompt appropriate to the user's local context without triaging severity.

6. Package the coordination handoff.
   - Include artifact ids, source inputs, assumptions, missing documents, reviewer questions, approval needs, sensitive-data surfaces, system surfaces, and post-use evidence to collect.
   - Route executable actions to an operations handoff packet when they touch patient portals, EHRs, appointments, referrals, billing, insurance, pharmacy, identity, email, SMS, calendar, or ticketing systems.

## Outputs

- Appointment prep card.
- Symptom or question timeline.
- Medication and allergy roster.
- Test, report, imaging, or document evidence index.
- Patient-side visit notes template.
- Clinician question list.
- Follow-up tracker.
- Referral or appointment status board.
- Care task responsibility matrix.
- Shift or caregiver handoff note.
- Insurance or billing evidence pack.
- Patient-portal draft packet.
- Care coordination handoff packet.

## Quality Signals

- The artifact helps a patient, caregiver, clinician, care coordinator, clinic operations owner, billing staff member, or reviewer inspect the situation without pretending to be the clinical decision maker.
- Patient-stated facts, clinician instructions, source-document facts, assumptions, missing evidence, and questions are separated.
- The output is organized around visit preparation, follow-up, referral/access, caregiver coordination, or billing evidence rather than diagnosis or treatment.
- Sensitive data, consent, caregiver authority, portal/EHR surfaces, insurer surfaces, and system-write risks are clearly marked.
- The output includes a next human review step and evidence to collect after use.

## Human Checkpoints

- Diagnosis, differential diagnosis, prognosis, severity, urgency, triage, treatment choice, medication start/stop/change/dose, drug interaction, clinical interpretation, test interpretation, imaging interpretation, pathology interpretation, emergency reassurance, or clinical directive.
- Portal messages, patient communications, appointment bookings, referral changes, EHR writes, patient-record writes, pharmacy actions, billing system writes, insurer submissions, identity updates, calendar sends, SMS/email sends, ticketing writes, or any system-of-record mutation.
- Insurance eligibility, reimbursement, coverage, prior authorization, out-of-pocket cost, billing adjustment, refund, payment, appeal, or financial responsibility decision.
- Patient consent, caregiver authorization, legal representative status, minor patient authority, privacy, retention, export, sharing, or long-term storage of patient, caregiver, health, financial, identity, or insurance data.
- Claims that a template, model, workflow, summary, or artifact is clinically accurate, safe, compliant, approved, validated, complete, or sufficient for medical, insurance, legal, billing, or emergency decisions.

## Composable With

- `draft-and-evidence-packet.md` when a visit packet, patient-portal draft, insurer note, or clinician question list needs reviewable draft language and evidence tables.
- `regulated-document-evidence-map.md` when clinical documents, discharge notes, insurance documents, policies, or patient instructions need source indexes, gap tables, conflict tables, and reviewer question queues.
- `operations-execution-handoff.md` when coordination artifacts should become an approval sheet, owner map, blocker log, and evidence-capture checklist before external actions.
- `data-analysis-decision-support.md` for descriptive appointment, follow-up, billing, access, or care-operations data analysis without making clinical, insurance, billing, or staffing decisions.
- `customer-support-quality-review.md` when patient-support, clinic front-desk, or care-navigation conversations need QA review without patient action.
- `../laws/surface-browser-runtime.md` when working in logged-in patient portals, EHR views, insurer portals, appointment systems, pharmacy portals, billing systems, calendars, email, SMS, or ticketing surfaces.
- `../laws/surface-mcp-tools-auth.md` for private data, account actions, external sends, system writes, portal actions, identity, billing, insurance, pharmacy, or healthcare tools.
- `../laws/surface-evidence-eval.md` for clinical-adjacent claims, evidence status, source verification, and method promotion.

## Evidence

Source signal: broad X and domain scout review found recurring healthcare operations signals around patient intake, medical scribe workflows, EHR documentation burden, referral follow-up, missed-appointment follow-up, patient-portal workflows, care coordination, and patient onboarding. Official-source review of AHRQ patient question-preparation material, HHS/OCR HIPAA privacy guidance, ONC information-blocking and patient-access material, FDA artificial-intelligence software-as-medical-device material, and FTC health-claim guidance confirmed that useful non-clinical preparation is distinct from clinical decision-making, PHI handling, system writes, and health or AI performance claims.

Validation state: seed draft. Needs replay against real appointment-prep, post-visit follow-up, referral tracking, caregiver handoff, patient-portal draft, billing-evidence, and care-coordination handoff cases before promotion.

Known failures:

- Turning coordination support into diagnosis, treatment, triage, medication advice, or test interpretation.
- Treating a polished question list, visit summary, or follow-up tracker as a clinical record or medical order.
- Writing patient data into portals, EHRs, calendars, billing systems, insurer systems, pharmacy systems, or durable memory without explicit scope and authorization.
- Promising insurance coverage, reimbursement, appointment availability, referral success, cost, safety, accuracy, or compliance from weak evidence.
- Ignoring consent, caregiver authority, minor-patient boundaries, privacy, retention, or sensitive-data minimization.
