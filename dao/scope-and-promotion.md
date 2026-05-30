# Scope And Promotion

Every method needs a scope label.

## Scope Labels

- `runtime-neutral`: applies across agent runtimes.
- `adapter-specific`: applies to one runtime or tool family.
- `overlay-specific`: applies to one project, organization, machine, or person.
- `incubating`: not yet stable enough to route by default.
- `deprecated`: kept for history but not recommended.
- `unsafe`: known dangerous unless explicitly reviewed.

## Promotion Test

A method can move to a broader scope only when:

- the trigger is stable;
- the mechanism is clear;
- evidence exists outside the original case;
- failure modes are known;
- it does not conflict with source principles;
- it passes relevant eval cases;
- the index maps its dependencies and conflicts.

Promotion is not based on popularity, novelty, or a single successful run.

## Routing Pressure Test

Before adding a new broad law, check:

- trigger fit: which surface actually caused the need;
- fan-in: whether one primary law plus companions is enough;
- overlap: whether an existing law should be updated instead;
- conflict: whether the new rule weakens an existing boundary;
- positive exit: what evidence is enough to proceed;
- context budget: whether the detail belongs in a law file, adapter, overlay, or index;
- lifecycle: whether the method is stable, stale, duplicated, too broad, or too narrow.
