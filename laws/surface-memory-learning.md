# Memory And Learning Laws

Scope: runtime-neutral

Status: active draft

## Law: Context Is A Working Set, Not Memory

Trigger:

- A task depends on long conversation history, large repositories, memory stores, markdown vaults, retrieval results, transcripts, generated summaries, previous agent runs, or context compression.

Mechanism:

- Decide what belongs in the immediate context, what belongs in durable state, what should remain as an external artifact, and what should be isolated in a helper process or tool.
- For each context item, record objective link, source, trust level, timestamp or version, hash when practical, role in the current task, representation, priority, expiry point, and verification method.
- Prefer pointers, structured fields, small excerpts, and summaries with loss notes over dumping whole histories into the prompt.
- Preserve decisions, evidence, unresolved risks, next actions, and artifact references across compaction or handoff.
- Recheck stale, contradicted, generated, or third-party context before it changes behavior.

Failure Modes:

- Treating a larger context window as a reliable memory system.
- Loading whole feeds, vaults, logs, or prior conversations until relevant facts are crowded out.
- Letting a lossy summary become the only source of truth for decisions, evidence, hashes, or remaining risk.

Boundary:

- Context can support reasoning. It is not durable authority unless it has a write contract and a review path.

## Law: Durable Memory Writes Are Behavior Changes

Trigger:

- An agent creates, updates, imports, exports, deletes, promotes, or relies on memory that can affect future windows, tool choices, permission lanes, retrieval, preferences, workflows, or skill candidates.

Mechanism:

- Treat durable memory as active behavior, not passive storage.
- External content, code comments, repository text, webpages, emails, social posts, tool outputs, logs, and generated summaries may propose memory events, but they must not write durable memory directly.
- Before durable writeback, create a structured memory event with source, scope, claim, trigger, evidence, risk, confidence, expiry or review date, proposed storage layer, owner, and delete or rollback path.
- Choose the storage layer deliberately: scratch note, repo-local note, user preference, project fact, work experience, procedural workflow, eval case, safety rule, skill candidate, or active skill.
- Do not store secrets, credentials, session material, account-sensitive text, hidden instructions, or raw third-party control text in durable memory.
- Durable memory must be listable, attributable, reviewable, conflict-aware, and removable.

Failure Modes:

- A viewed page, tool output, or repository instruction silently becomes a future behavior rule.
- A memory item steers tool selection, provider choice, permissions, or agent roles without provenance and negative tests.
- Project-specific failures are promoted into generic rules without repeated evidence.

Boundary:

- Memory is allowed to make future work better. The cost is provenance, scope, review, and rollback.

## Law: Memory Lifecycle Needs A Write Contract

Trigger:

- A system creates, updates, retrieves, merges, supersedes, decays, archives, deletes, exports, benchmarks, or promotes memories, preferences, procedural notes, vector entries, graph facts, markdown memories, or skill-derived memories.

Mechanism:

- Define the write contract before durable memory changes: who can propose a write, allowed sources, memory type, operation, schema, citation anchors, conflict policy, retention policy, retrieval contract, and rollback path.
- Use a schema that includes claim, scope, trigger phrase, evidence, confidence, conflict links, expiry or review date, owner, and citation anchors.
- Recheck citation anchors when practical before a retrieved memory changes behavior.
- Treat missing, stale, contradicted, or out-of-scope anchors as needs-review, not authority.
- Strengthen a memory only when it changed a real decision and the outcome was acceptable. Retrieval alone is not evidence of value.
- Decay or archive memories that are repeatedly retrieved but unused, stale, contradicted, harmful, or outside their declared scope.

Failure Modes:

- Retrieval accuracy is mistaken for memory quality.
- Old preferences or project facts override newer corrections without surfacing the conflict.
- Opaque vector chunks become procedural authority without replayable workflows, checklists, templates, or evidence.

Boundary:

- Memory quality is mostly determined at write and update time, not at retrieval time.

## Law: Memory Trajectory Matters

Trigger:

- Memory persists observations, traces, web or browser findings, graph relations, vector chunks, tool outcomes, successful-task templates, or derived summaries across sessions.

Mechanism:

- Inspect the trajectory before trusting or promoting memory that can affect future behavior.
- Track original observation, intermediate summarizers, indexing or embedding step, merge or update operation, retrieval path, and final prompt injection point.
- Keep authority classes separate: user preference, project fact, web observation, tool result, successful experience, safety rule, and third-party claim must not silently merge.
- Before retrieved memory changes tool, connector, provider, permission lane, or agent role selection, compare it against explicit task policy and treat it as recommendation unless a higher authority confirms it.
- Record activation scope: which future tasks, repositories, accounts, tools, sites, or workflows may recall the memory, and which must not.
- Deletion or rollback must remove dependent summaries, graph edges, embeddings, caches, and derived skill candidates, not only the visible note.

Failure Modes:

- A memory looks true in isolation, but its propagation path is poisoned, stale, or out of scope.
- Conflicting graph edges or retrieved chunks are merged into a stronger false fact.
- A deleted note remains active through derived indexes, summaries, or embeddings.

Boundary:

- A memory item is not only text. It is text plus history, scope, propagation, and recall behavior.

## Law: Feed Learning Extracts Mechanisms, Not Vibes

Trigger:

- An agent learns from feeds, communities, documentation, issue trackers, benchmarks, newsletters, blogs, videos, chats, or social posts.

Mechanism:

- Convert incoming items into a queue with states such as accepted, rejected, needs-review, verified, incubating, and promoted.
- Extract mechanism, trigger, action, expected outcome, evidence, failure mode, contraindication, scope, and recall cue.
- Store compact triggers and source references instead of whole feeds.
- Verify primary sources or local run evidence before promotion.
- Keep unverified items as notes, checklist candidates, or incubator entries rather than active methods.

Failure Modes:

- A trend, ranking, anecdote, or persuasive post becomes a durable rule.
- The agent fills working context with whole feeds instead of reusable mechanisms.
- A narrow lesson from one runtime, project, or tool is promoted as generic method.

Boundary:

- Feeds can supply signals. They do not supply authority.

## Law: Skills Are Delivery Artifacts, Not Evidence Layers

Trigger:

- An agent turns user corrections, incidents, field notes, traces, logs, transcripts, feed research, or repeated workflows into a skill, SOP, adapter, overlay, prompt route, checklist, or active learning rule.

Mechanism:

- Treat the skill-like artifact as a delivery form, not as the evidence layer itself.
- Preserve or link the evidence contract behind the artifact: observed facts, inferred workflow, recommended procedure, verification steps, rollback or stop conditions, failure patterns, source references or excerpt hashes, confidence, limits, and scope.
- Keep enough provenance for audit, replay, regression testing, conflict review, and later retirement.
- If a concise skill must omit detail for context budget, point to the evidence record rather than deleting it.
- Compare evidence-backed variants against bare trigger-action recipes when claiming improvement.
- Keep the evidence source authoritative over the packaged skill when the two conflict.

Failure Modes:

- A useful-sounding "when X, do Y" recipe becomes active behavior after dropping why it exists, what failed before, how to verify it, when to stop, and where the source evidence lives.
- A generated skill becomes detached from the incidents, corrections, or traces that justify it.
- A delivery artifact is treated as broader, safer, or more current than its underlying evidence supports.

Boundary:

- A skill can deliver experience. It is not a substitute for the experience, evidence, or audit trail that produced it.

## Law: Skill Generation Requires Promotion Evidence

Trigger:

- A method, memory, workflow, checklist, prompt, tool route, or repeated correction is proposed as a new skill, adapter, overlay, active rule, or self-improvement patch.

Mechanism:

- Generate or update a skill-like artifact only when the method is reusable across future windows, the trigger is clear, the behavior can be described as deterministic guidance, checklist, script, or template, evidence supports it, safety boundaries can be written, and a validation path exists.
- Put generated methods in draft, incubator, or agent-created namespaces first; keep them outside autoload or active behavior paths until reviewed.
- Keep usage evidence: source, runs, successes, failures, last used, last modified by agent, reviewer notes, and rollback path.
- Treat user or expert corrections as eval labels, not automatic permission to change active behavior.
- Convert failures into eval cases before patching prompts, skills, tools, workflows, or routes.
- Make improvements as reviewable diffs with bounded edit scope, regression checks, and baseline-versus-new evidence when claiming improvement.

Failure Modes:

- A one-session workaround becomes a permanent skill.
- An optimizer silently rewrites active behavior without review or rollback.
- A skill is created for a vague trend, isolated opinion, hidden-credential workflow, or untrusted executable code.

Boundary:

- Self-improvement can be automatic in discovery and drafting. Activation requires evidence, review, and rollback.
