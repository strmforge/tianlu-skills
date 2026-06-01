# Playbook: Data Analysis Decision Support

Status: seed draft

Scope: data-analysis-neutral. This playbook helps an agent turn datasets, metrics, experiment results, logs, dashboards, and business questions into reviewable analysis packets. It does not make causal, financial, medical, legal, employment, investment, or operational decisions.

## Purpose

Help an agent produce a data dictionary, quality report, metric definition table, cleaning plan, descriptive analysis, anomaly review queue, experiment readout, conclusion-boundary note, decision options, and analyst handoff packet.

## Inputs

- Dataset extracts, spreadsheets, logs, database query results, dashboard exports, experiment results, survey responses, or metric snapshots.
- Business question, decision context, success metric, time window, segment, cohort, and known exclusions.
- Data schema, field definitions, calculation rules, source system notes, and owner-provided caveats.
- Prior-period comparison, control group, benchmark, or expected baseline when available.
- Evidence pointers for each source, such as file name, query, dashboard, export timestamp, or source owner.

## Procedure

1. Define the analysis boundary.
   - State the question, intended decision support, time window, population, source systems, and excluded data.
   - Mark missing, stale, sampled, estimated, transformed, or unverified inputs.

2. Build the data inventory.
   - Produce a data dictionary with field names, types, units, allowed values, null rate, uniqueness, and source owner when known.
   - Keep source fields separate from derived fields.

3. Check data quality before interpretation.
   - Review missing values, duplicates, outliers, inconsistent categories, impossible values, join loss, and time-window mismatch.
   - Record fixes as a reversible cleaning plan rather than silently editing the source.

4. Define metrics and comparisons.
   - Write each metric formula, numerator, denominator, segment, aggregation level, and version.
   - Identify denominator-zero handling, sample size, and comparison baseline.

5. Produce descriptive findings.
   - Summarize distribution, trend, segment difference, cohort movement, funnel step, or anomaly pattern.
   - Separate observed facts from hypotheses and recommended actions.

6. Handle experiments and statistical claims carefully.
   - Check group assignment, exposure window, sample size, confidence interval, effect size, and guardrail metrics when provided.
   - Treat statistical significance as evidence for review, not as automatic product, finance, medical, or policy authority.

7. Package the decision-support packet.
   - Produce the analysis summary, evidence table, quality issues, metric definitions, finding-to-action map, uncertainty list, next data requests, and human decision points.
   - Label correlations as correlation unless a valid causal design and reviewer boundary are explicit.

## Outputs

- Analysis boundary note.
- Data dictionary and source inventory.
- Data quality report.
- Reversible cleaning plan.
- Metric definition table.
- Descriptive findings summary.
- Experiment or comparison readout.
- Anomaly and follow-up queue.
- Conclusion boundary and uncertainty note.
- Decision options and analyst handoff packet.

## Quality Signals

- Every finding has a source pointer, metric definition, time window, and scope.
- Data quality issues are visible before conclusions.
- Correlation, causation, estimate, assumption, and verified measurement are separated.
- The packet gives a human owner enough evidence to approve, reject, or ask for more data.
- Recommended next actions are tied to evidence strength and uncertainty.

## Human Checkpoints

- Final business, product, hiring, medical, financial, legal, compliance, safety, or investment decision.
- Causal interpretation, policy change, pricing change, treatment, diagnosis, employment outcome, budget approval, or production rollout.
- Data deletion, dashboard publication, customer communication, external reporting, model deployment, or system-of-record write.
- Use of sensitive, personal, regulated, or account-bound data.

## Composable With

- `commerce-operations.md` for marketplace, product, pricing, campaign, review, and conversion analysis.
- `content-operations.md` for topic, platform, packaging, distribution, and audience performance analysis.
- `customer-support-quality-review.md` for support QA sampling, error-pattern, and service-quality analysis.
- `experiment-design-iteration.md` for experiment setup, stop criteria, and result review.
- `feedback-to-backlog-operations.md` for turning analytic findings into reviewable backlog items.
- `finance-operations-review.md` when analysis touches budgets, revenue, expenses, cash flow, or anomalies.
- `../laws/surface-evidence-eval.md` for evidence, independent verification, and promotion claims.
- `../laws/surface-browser-runtime.md` for logged-in dashboards.
- `../laws/surface-mcp-tools-auth.md` for databases, APIs, private data, account actions, or production writes.

## Evidence

Source signal: multi-domain scout review showed repeated need for data dictionaries, quality reports, metric definitions, experiment readouts, anomaly queues, and explicit correlation-versus-causation boundaries across commerce, content, product, finance, support, and HR-like workflows.

Validation state: seed draft. Needs replay on real dashboard review, spreadsheet analysis, experiment readout, support QA metrics, and commerce performance tasks before promotion.

Known failures:

- Treating correlation as causation.
- Hiding missing data, cleaning assumptions, or join loss behind a polished summary.
- Treating a statistically significant result as automatic authority to ship, spend, hire, diagnose, or change policy.
- Mixing sensitive data into examples, prompts, durable notes, or public artifacts.
