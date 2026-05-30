# Evidence And Eval Laws

Scope: runtime-neutral

Status: seed

## Law: Claims Need Evidence Before Promotion

Trigger:

- Turning a signal, habit, or observed success into a reusable method.
- Claiming that a new method, prompt, memory, skill, workflow, tool route, or self-improvement loop made an agent better.

Mechanism:

- Record source, scope, mechanism, expected outcome, failure mode, and validation evidence.
- Prefer small eval cases before activation or promotion.
- Build replay cases from real successes, corrected failures, edge cases, negative cases, and safety-sensitive cases.
- Keep expected behavior and forbidden behavior explicit.
- Compare baseline and candidate behavior before activation.
- Keep train, validation, and held-out cases separate for iterative optimization.
- Preserve rejected edits with reasons so the same bad change is not rediscovered.

Failure Modes:

- Encoding anecdotes as universal rules.
- Promoting a method because it is popular rather than validated.
- Losing rollback evidence.
- Letting a method improve one case while regressing a higher-priority safety case.
- Letting the same agent create the work and serve as the only judge.

Boundary:

- A method can stay useful in a narrow scope without being promoted.
- Raw sensitive traces should not be broadly reused; prefer compact structured traces or redacted artifacts.

## Law: Independent Verification Beats Self-Grading

Trigger:

- The same agent, prompt, context, generated tests, or tool route could create the work and judge whether it is correct.

Mechanism:

- Prefer pre-existing tests, specs, fixtures, contracts, production incidents, deterministic tools, or independent reviewer context.
- Record which checks were self-authored, pre-existing, independently generated, or human-reviewed.
- For new tests, include at least one independent oracle such as a spec excerpt, reproduction, golden fixture, contract probe, or user-approved snapshot.

Failure Modes:

- Passing tests only prove the implementation satisfies tests the agent wrote.
- A reviewer model with the same context repeats the solver's blind spots.

Boundary:

- An independent reviewer is evidence, not authority.
