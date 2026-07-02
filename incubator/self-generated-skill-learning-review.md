# Self-Generated Skill Learning Review

Status: incubating

Scope: runtime-neutral review method

## Signal

Two 2026 external research signals frame Skill learning as a loop rather than a static prompt asset:

- Ctx2Skill extracts context-specific natural-language skills from long or technical contexts through multi-agent self-play, then uses Cross-Time Replay to select a less overfit skill version.
- OPID extracts hierarchical hindsight skills from completed on-policy agent trajectories, then uses those skills during training to create dense token-level distillation advantages while requiring no skill retrieval at inference time.
- Later controller-audited public-source review adds a lighter skill-artifact optimization shape: rollouts, reflection, aggregation, candidate selection, bounded textual edits, validation gates, offline sleep proposals, and explicit user adoption stages around skill documents.

This candidate records the mechanism shape only. It is not an endorsement of either repository, dataset, model checkpoint, training script, dependency stack, API endpoint, or self-learning runtime claim.

## Source

- User-provided article: `清华又发了2篇Skill，可太卷了`
- Ctx2Skill paper: `From Context to Skills: Can Language Models Learn from Context Skillfully?`, arXiv `2604.27660v3`, published 2026-04-30, updated 2026-06-02.
- Ctx2Skill repository: `https://github.com/S1s-Z/Ctx2Skill`, Python, GitHub API checked 2026-07-02, no license returned by API and no root `LICENSE` seen in light root listing.
- OPID paper: `OPID: On-Policy Skill Distillation for Agentic Reinforcement Learning`, arXiv `2606.26790v1`, published and updated 2026-06-25.
- OPID repository: `https://github.com/jinyangwu/OPID/tree/main`, Python, MIT by GitHub API, released paper/code on 2026-06-25 per README.
- Nantianmen external-info mirror: `G:\南天门设想与实现对照库\60_待核验\2026-07-02_Ctx2Skill_OPID_Skill自生成与内化外部资讯记录.md`.

- Controller-audited public-source short-worker window from 2026-07-02 local 17:57 for a skill-optimization package that exposed train/eval/sleep entrypoints, training-loop docs, configuration gates, and offline proposal staging. This is source-review evidence only; no training, eval, or sleep cycle was run.

## Proposed Trigger

Use this incubator note when a future workflow asks whether an agent, role, Skill group, or Tianlu method can learn from:

- a long source context, such as a document bundle, session export, codebase notes, domain manual, or research corpus;
- a completed agent trajectory, including successes, failures, refusals, eval records, route misses, or user corrections;
- sparse outcome-only feedback where intermediate steps need hindsight explanation;
- a skill document or role bundle that claims it can be improved by rollouts, reflection, bounded edits, eval gates, or offline sleep review;
- a claim that a Skill, role, or model has become self-improving.

## Proposed Mechanism

Separate two routes.

### Context-to-Skill Route

```text
source context
-> probe task and rubric generation
-> reasoner attempt with current skill set
-> judge verdicts against rubric items
-> failure/success diagnosis
-> skill delta generation
-> cross-time replay or equivalent anti-overfit selection
-> candidate Skill / Skill-group version
-> evidence, permission, acceptance, and activation gates
```

Use this route for inference-time natural-language Skill extraction. It can support Tianlu Cheng / Sheng, but it does not by itself prove runtime activation or durable learning.

### Trajectory-to-Distillation Route

```text
completed trajectory
-> episode-level workflow or failure-avoidance skill
-> critical-step local decision skill
-> critical-first routing during training
-> old-policy rescoring under original vs skill-augmented context
-> token-level skill advantage
-> training objective update
-> inference-time no-skill-retrieval claim only if training evidence exists
```

Use this route only as a training-method candidate. Without a real training loop, logprob comparison, and held-out eval, it is not a runtime capability.

### Skill-Artifact Optimization Route

```text
current skill document or role bundle
-> rollout or task replay
-> reflection over successes and failures
-> aggregate lessons
-> select candidate edits
-> apply bounded textual update
-> validation or held-out gate
-> staged proposal
-> explicit user or owner adoption
-> rollback or keep-next-candidate on failure
```

Use this route for natural-language Skill or role-bundle evolution when the output is still an artifact proposal. A validation gate, score, or offline sleep loop is review state, not proof that the skill is improved or safe to activate.

## Initial Scope

This candidate belongs to Tianlu's absorb -> generate -> compose -> re-enter loop:

- Cheng / absorb: external papers, source context, agent trajectories, failures, validation receipts, user corrections.
- Sheng / generate: neutral context-skill extraction packets and trajectory-skill distillation packets.
- Chuang / compose: Skill groups, WorkflowPacks, role context Skill preflight, Skill probe judges, replay selectors.
- Return-to-Cheng / evolve: eval failures, route misses, overfit skills, judge errors, user rejection, and real-use receipts.

The first useful local artifact should be a packet schema, not a model download or training run.

## Known Failure Modes

- Self-play collapse: the challenger generates increasingly extreme tasks and the reasoner overfits.
- Judge circularity: a model-generated rubric and model-generated verdict can create false confidence.
- Skill hallucination: generated skills can sound reusable while unsupported by the source context.
- Privacy leakage: long contexts and trajectories may contain private project paths, user preferences, credentials, or sensitive failures.
- License ambiguity: Ctx2Skill's repository did not expose a license in the light GitHub API/root check.
- Training-cost drift: OPID-style adoption requires heavy training infrastructure and analyzer endpoints.
- Claim inflation: inference-time skill packets, external repositories, or paper metrics may be misreported as local self-learning.
- Gate inflation: a held-out gate, eval score, or sleep proposal is reported as if the skill had already been safely adopted or proven better.
- Adoption blur: generated skill edits move from proposal to active runtime behavior without an owner decision, rollback path, or conflict review.

## Verification Needed

- Primary-source review of the full paper PDFs before method promotion.
- License and dependency review before any clone, install, or reuse.
- Small local fixtures for a context-skill packet and a trajectory-skill packet.
- Negative cases where generated skills are rejected, overfit, contradictory, or unsupported by source evidence.
- Held-out replay or eval evidence before calling a generated skill useful.
- Explicit separation between candidate generation, user acceptance, activation, and any training/internalization claim.
- Small fixtures for skill-artifact edit packets, including baseline skill, candidate diff, eval result, conflict note, adoption decision, and rollback path.

## Placement Candidates

- `incubator/`: current placement.
- `playbooks/`: only if a stable productive packet-writing workflow emerges.
- `laws/surface-memory-learning.md`: durable learning, generated memory, and future-window influence boundaries.
- `laws/surface-evidence-eval.md`: rubric, judge, replay, held-out eval, and proof-layer boundaries.
- `laws/surface-install-supply-chain.md`: repository, dependency, license, model, and dataset adoption gates.
- `adapters/codex/`: only after a runtime-specific packet or skill-preflight envelope is reviewed.

## Non-Claims

- This note does not make Ctx2Skill or OPID active Tianlu runtime behavior.
- This note does not authorize cloning, installing, training, downloading datasets, or calling analyzer endpoints.
- This note does not authorize running skill train/eval/sleep loops, mining private sessions, adopting generated skill edits, or changing active skill bundles.
- This note does not prove Nantianmen has self-play skill extraction, on-policy RL, parameter internalization, or inference-time no-skill-retrieval capability.
- This note does not promote a law or playbook.
