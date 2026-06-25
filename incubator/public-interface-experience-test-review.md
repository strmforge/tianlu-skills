# Public-Interface Experience Test Review

Status: incubating

Scope: runtime-neutral review method

## Signal

Controller-audited public skill batches keep surfacing a stronger testing claim than ordinary "generate tests from docs" language. The useful shape is narrower and more demanding: tests are treated as a second truth for user experience, replay logs are first-class state, public interfaces are the only authority surface, and internal mocks are treated as false comfort rather than proof.

This candidate keeps that shape in incubation. It is not a recommendation to auto-generate tests, mutate a codebase, run a harness, or treat any document-derived suite as validated without replay.

## Source Evidence

Controller-audited local QClaw short-worker receipts from 2026-06-25 include source-review evidence for:

- a pure-text skill pack that turns technical documents into experience-oriented test suites;
- explicit rules that tests must verify behavior through public interfaces rather than internal implementation details;
- explicit rules that only external dependencies may be mocked, while internal modules must stay real;
- replay-level structured JSON logging as a first-class output surface;
- explicit "not for" boundaries that reject unit-test theater, mock-heavy pseudo-tests, and one-off debugging.

The receipts are evidence packets, not neutral law. A worker summary is accepted only after controller path verification, source spot-check, and conflict correction.

Related Tianlu candidates:

- `stateful-skill-gate-review.md`
- `role-skill-operating-package-review.md`
- `public-agent-skill-mechanism-intake-review.md`
- `loop-engineering-workflow-review.md`

## Proposed Trigger

Use this candidate when a repository, skill, or internal proposal claims to:

- generate tests from docs, specs, SDK references, protocols, or feature plans;
- capture experience-level behavior rather than implementation detail;
- emit replay-grade logs, traces, or JSON receipts for test runs;
- protect refactors by regenerating or extending user-facing test coverage;
- discourage internal mocking or call out public-interface-only verification.

## Proposed Mechanism

Review the testing method as an experience-proof loop:

1. Separate documents from test authority.
   - A document can seed the first suite, but once created the tests must answer to user experience, not to document wording.
2. Identify the interface boundary.
   - Name the public API, UI flow, protocol boundary, or user-visible behavior that the test is allowed to exercise.
3. Identify the mock boundary.
   - External dependencies may be simulated; internal modules, routing, orchestration, and state transitions should stay real unless the method explicitly narrows scope.
4. Treat replay logs as state.
   - Replay-level JSON, step logs, hook logs, and execution receipts are useful because they preserve how the experience was exercised and where it failed.
5. Treat anti-mock language as a gate, not a slogan.
   - "Never mock internal modules" is only useful if the test shape, harness, and review path make fake confidence visible.
6. Keep document-derived suites scoped.
   - A generated suite may be a strong absorb or compose artifact without becoming proof of runtime correctness, product quality, or release readiness.
7. Require comparison and failure evidence before promotion.
   - Compare the experience-test method against unit-heavy and mock-heavy baselines; preserve where it catches regressions and where it produces noise or overreach.

## Initial Scope

- Source-level review of doc-to-test and spec-to-test methods.
- Public-interface experience coverage and replay logging methods.
- Incubator synthesis only.
- Not a runtime adapter, codegen endorsement, or autonomous test-writing authority.

## Known Failure Modes

- Document worship: tests keep serving stale docs instead of real user behavior.
- Mock theater: the suite proves that mocks behave as configured, not that the product works.
- Replay theater: logs are produced, but they omit the interface path, state transitions, or failing evidence needed for replay.
- Coverage inflation: many generated tests create the appearance of safety without exercising meaningful experience boundaries.
- Refactor laundering: generated tests are treated as proof that a refactor is safe without baseline comparison or negative cases.
- Interface drift blindness: tests stay tied to implementation helpers and miss API, UI, or protocol drift.

## Verification Needed

- Replay on at least one API-doc example, one product-spec example, and one protocol-spec example.
- Compare against a smaller unit-heavy baseline and a mock-heavy baseline.
- Add negative cases where internal mocks hide regressions, document wording diverges from product behavior, or replay logs are too thin to reproduce failures.
- Decide whether this remains a supporting incubator note or becomes a productive playbook for experience-test generation review.

## Placement Candidates

- `incubator/`: current placement.
- `playbooks/`: if a stable review workflow emerges for document-to-experience-test generation.
- `laws/surface-evidence-eval.md`: public-interface authority, replay evidence, and anti-mock boundaries.
- `laws/surface-agent-orchestration.md`: test-generation loops, receipts, and verifier separation.

## Promotion Questions

- What minimum replay evidence is needed before a document-derived suite is trusted as an experience guardrail?
- Which parts are reusable neutral method: public-interface boundary, anti-mock gate, replay logging, or refactor-guardrail framing?
- When should a doc-to-test method stay scoped project practice instead of becoming Tianlu guidance?
