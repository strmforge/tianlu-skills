# Playbook: Learning Operations Planning

Status: seed draft

Scope: learning-operations-neutral. This playbook helps an agent turn learning goals, available materials, time constraints, and feedback into a reviewable learning operating loop. It is not tied to one school, course, platform, subject, age group, country, credential, or teaching style.

## Purpose

Help an agent create useful learning-support artifacts: goal breakdowns, study plans, material maps, practice schedules, self-check templates, review logs, error-pattern tables, progress snapshots, and next-cycle adjustments.

This is learner-side operations support. It does not replace teachers, guardians, tutors, schools, clinicians, exam boards, or credential authorities.

## Inputs

- Learning goal or skill target.
- Time window, deadline, cadence, and available study time.
- Existing materials supplied by the user, such as notes, chapters, syllabi, exercises, transcripts, examples, or prior summaries.
- Current self-assessed confidence, known blockers, and preferred support level.
- Constraints such as accessibility needs, language, device limits, supervision needs, or exam or course rules provided by the user.
- Feedback from practice, quizzes, assignments, reviews, instructors, peers, or self-reflection.
- Privacy and age-sensitivity context when the learner may be a minor or the materials include personal data.

## Procedure

1. Clarify the learning target.
   - Restate the target in one sentence and separate outcome, deadline, material scope, and non-goals.
   - Mark any missing or unverifiable syllabus, standard, rubric, or exam requirement as an assumption.

2. Build a material and concept map.
   - Inventory user-provided materials and group them by topic, dependency, difficulty, and confidence.
   - Keep explanations and practice items anchored to supplied materials unless the user explicitly asks for general background.

3. Break the target into work units.
   - Convert the goal into a small set of modules, practice blocks, review blocks, and checkpoint tasks.
   - Limit each cycle so the learner can start without needing another plan.

4. Create the learning schedule.
   - Allocate work units across the available time window.
   - Leave buffer time for rest, review, missed sessions, and low-confidence topics.
   - Separate required work from optional extension work.

5. Produce practice and self-check templates.
   - Draft prompts, recall questions, concept checks, worked-example slots, or reflection questions based on the material boundary.
   - Do not generate answers intended for submission, test-taking, or academic dishonesty.

6. Track errors and feedback.
   - Convert mistakes, confusion, missed sessions, instructor feedback, or learner notes into an error-pattern table.
   - Separate content gap, process gap, time-management gap, confidence signal, and unclear-material signal.

7. Review progress and adjust.
   - Compare the plan with completion evidence, self-check results, and feedback.
   - Produce a next-cycle adjustment: repeat, narrow, expand, change format, ask for help, or pause.
   - Keep the learner in control by making the plan editable and discardable.

## Outputs

- Learning goal brief.
- Material and concept map.
- Module breakdown.
- Study schedule with buffers.
- Practice and self-check template.
- Review and recall plan.
- Error-pattern table.
- Progress snapshot.
- Next-cycle adjustment plan.
- Learner or reviewer question list.

## Quality Signals

- The plan is concrete enough for the learner to start.
- The schedule includes buffers and does not fill all available time.
- Each checkpoint has observable completion evidence.
- Generated practice stays inside the declared material boundary or marks external assumptions.
- Error patterns describe observable behavior rather than personality, talent, or fixed ability.
- The output is easy for the learner, tutor, teacher, guardian, or training owner to edit.
- The plan reduces dependency on the agent over time instead of making the agent the only way to proceed.

## Human Checkpoints

- Grading, ranking, pass/fail, certification, placement, promotion, retention, disciplinary, or accommodation decisions.
- School, workplace, exam-board, guardian, or instructor policy interpretation.
- Minor learner data, school account access, learning management system writes, classroom records, or private educational records.
- Mental health, learning disability, special education, medical, safety, bullying, self-harm, or crisis signals.
- Academic integrity boundaries: homework submission, exam answers, take-home tests, plagiarism, credential work, or bypassing course rules.
- Long-term learner profile storage, cross-session memory, or sharing learner records.

## Composable With

- `research-to-brief-synthesis.md` when learning starts from scattered source material.
- `asset-repurposing-pipeline.md` when notes, transcripts, or lessons should become study variants.
- `feedback-to-backlog-operations.md` when practice feedback should become a review queue.
- `experiment-design-iteration.md` when a learner wants to test a study method.
- `data-analysis-decision-support.md` when progress logs or practice data need analysis.
- `operations-execution-handoff.md` when a plan should become a daily execution queue.
- `../laws/surface-memory-learning.md` for durable learner profile, continuity, and cross-session state.
- `../laws/surface-browser-runtime.md` when working in logged-in learning platforms.
- `../laws/surface-mcp-tools-auth.md` for private data, account actions, uploads, or platform writes.
- `../laws/surface-evidence-eval.md` for progress claims and method improvement claims.

## Evidence

Source signal: broad-domain scout review found learner-side operations to be underrepresented compared with commerce, content, project, feedback, experiment, and execution-handoff methods.

Validation state: seed draft. Needs replay against real self-study, exam-prep, skill-learning, and training-support cases before promotion.

Known failures:

- Turning learning support into homework completion, exam assistance, or credential work.
- Treating learner behavior as fixed ability, personality, or diagnosis.
- Overpersonalizing from weak signals such as self-described learning style or one bad session.
- Storing or sharing minor, school, workplace, or sensitive learner data without explicit scope.
- Producing a plan that is tidy but impossible to start, revise, or abandon.
