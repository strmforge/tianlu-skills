# Method Lifecycle

Tianlu tracks methods through a lifecycle:

```text
signal -> incubating -> scoped law -> adapter packaging -> eval -> promotion / retention / retirement
```

## Stages

### Signal

A signal is a claim, incident, source, workflow, repo, doc, user correction, or observed failure that may become reusable.

### Incubating

An incubating method has promise but not enough scope or evidence.

Required fields:

- trigger;
- proposed mechanism;
- source;
- known risk;
- initial scope;
- verification needed.

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

### Adapter Packaging

Runtime-specific adapters translate a law into a local format, such as a Codex skill or another agent runtime instruction file.

### Eval

Evals test whether a method changes behavior in the intended direction without unacceptable side effects.

### Promotion

A method can be promoted when it survives cross-context evidence, adapter testing, and conflict review.

### Retirement

A method should be retired or downgraded when it is stale, harmful, duplicated, overbroad, unverifiable, or replaced by a better law.
