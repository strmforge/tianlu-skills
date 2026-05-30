# Method Lifecycle

Tianlu tracks methods through a lifecycle:

```text
scoped input -> incubating -> neutral extraction -> scoped recombination -> eval -> promotion / retention / retirement -> scoped input
```

The lifecycle is a loop, not a one-way ladder. Scoped input is biased by an event, runtime, project, tool, or task. A neutral method is extracted by making the reusable mechanism explicit and removing or containing local bias. A scoped variant is then composed for a concrete context; that variant is intentionally biased again, and its results can re-enter as new scoped input.

## Stages

### Signal

A signal is a claim, incident, source, workflow, repo, doc, user correction, or observed failure that may become reusable.

Capture enough context to recover the source later. A signal can suggest a method, but it cannot activate one.

### Incubating

An incubating method has promise but not enough scope or evidence.

Required fields:

- trigger;
- proposed mechanism;
- source;
- known risk;
- initial scope;
- verification needed.

Verification may include source checks, permission and data exposure review, rollback or disable path, and a small dry run or replay case.

### Neutral Extraction

Neutral extraction turns one or more scoped candidates into a reusable method.

Required fields:

- reusable trigger;
- mechanism independent of local names, paths, tools, and habits;
- evidence outside or beyond the original event when available;
- local bias removed or explicitly contained;
- boundaries for when the method should not be used.

Neutral does not mean empty or minimal. It means the method stays plastic enough to be recombined without pretending that one local variant is universal.

### Scoped Law

A scoped law is a reusable method with a declared applicability boundary.

Required fields:

- scope;
- trigger;
- mechanism;
- evidence;
- failure modes;
- boundary;
- validation status.

Scoped laws should prefer local, inspectable artifacts over conversation memory.

### Adapter Packaging

Runtime-specific adapters translate a law into a local format, such as a Codex skill or another agent runtime instruction file.

### Scoped Recombination

Scoped recombination combines neutral methods into a concrete variant for a runtime, project, organization, machine, person, or task.

The variant must keep source, scope, evidence, and boundaries visible. It should not be promoted as broad law just because it fits its target context well.

### Eval

Evals test whether a method changes behavior in the intended direction without unacceptable side effects.

Keep successful traces, corrected traces, edge cases, negative cases, and safety cases separate when practical.

### Promotion

A method can be promoted when it survives cross-context evidence, adapter testing, and conflict review.

Do not promote a method if it only shifts failure modes, increases permission use, hides uncertainty, loses receipts, or improves one case while breaking a higher-priority safety case.

### Retirement

A method should be retired or downgraded when it is stale, harmful, duplicated, overbroad, unverifiable, or replaced by a better law.
