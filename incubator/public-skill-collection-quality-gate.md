# Public Skill Collection Quality Gate

Status: incubating

Scope: runtime-neutral

## Signal

An external feed item on 2026-05-30 pointed to `addyosmani/agent-skills`, a public repository describing a multi-runtime collection of engineering workflow skills.

Primary source review, read-only:

- Repository: `https://github.com/addyosmani/agent-skills`
- Observed commit: `6ce029897d2b794940325fc7148774a6ec51111c`
- Repository shape at review time: skills, agents, references, commands, hooks, setup docs, plugin manifests, and validation scripts.
- The repository documents skill anatomy, quality criteria, progressive disclosure, anti-rationalization sections, verification requirements, and a validator for skill frontmatter and required sections.

No install, clone, package execution, plugin activation, hook execution, or skill import was performed during review.

## Proposed Trigger

Use this candidate when an agent, user, feed post, marketplace, blog, ranking, README, or repository recommends a public skill pack, prompt pack, agent rule pack, command bundle, plugin, or reusable instruction collection.

## Proposed Mechanism

Treat public skill collections as catalogs of candidate methods, not as installation instructions or ready-to-trust authority.

Review in this order:

1. Identify package shape.
   - Count skills, commands, agents, hooks, scripts, manifests, references, setup docs, and CI files.
   - Separate passive markdown from executable or persistent surfaces.
2. Pin the source.
   - Record repository URL, commit, license, maintainer, release or branch, and last update time.
3. Sample for method quality.
   - For representative skills, inspect trigger clarity, workflow determinism, verification evidence, negative cases, scope boundaries, and whether details are loaded progressively.
4. Review activation and persistence.
   - Check install paths, autoload behavior, hooks, lifecycle scripts, plugin manifests, generated config, shell commands, and rollback or disable paths.
5. Check local overlap and marginal utility.
   - Compare the candidate collection with existing local laws, adapters, overlays, and evals.
   - Prefer extracting a mechanism or eval case over copying whole skills.
6. Estimate context cost.
   - Identify whether the pack encourages loading every skill, a meta-skill router, task-specific skills, or references on demand.
7. Decide placement.
   - Note-only when the pack is mainly a list, duplicate, install-heavy, vague, or unverified.
   - Incubator when it reveals a reusable mechanism with clear evidence and boundaries.
   - Adapter or overlay only when runtime- or project-specific assumptions are explicit.
8. Validate before promotion.
   - Add at least one eval prompt or review checklist before turning extracted guidance into active behavior.

## Initial Scope

This candidate is about adopting or learning from public skill collections. It is not a general endorsement of any specific repository.

## Known Failure Modes

- High star count, author reputation, or polished README is mistaken for local suitability.
- A public skill pack is copied wholesale, importing platform assumptions, hooks, scripts, or context bloat.
- A meta-skill router over-triggers and loads too much context.
- Useful method ideas are rejected because the source also contains runtime-specific install instructions.
- Skill collection review focuses on content quality but misses activation, hook, or persistence surfaces.

## Verification Needed

- Apply this gate to at least three public skill or rule collections without installing them.
- Record whether it changes adoption decisions compared with simple README review.
- Add eval cases for high-star public skill packs, install-heavy packs, and duplicated local methods.

## Placement Candidates

- `laws/surface-install-supply-chain.md`: adoption and activation review.
- `laws/surface-memory-learning.md`: feed-to-method and skill-generation lifecycle.
- `index/conflict-map.md`: skill collection usefulness versus skill sprawl and context cost.
- `eval/test-prompts.md`: public skill pack adoption cases.

## Promotion Questions

- Does this gate add behavior not already covered by install review and feed learning?
- Can it be expressed as a short checklist without creating process theater?
- Does it improve the absorb-generalize-compose loop by helping agents extract mechanisms instead of importing packs?
