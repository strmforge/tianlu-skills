# Public Skill Collection Quality Gate

Status: incubating

Scope: runtime-neutral

## Signal

An external feed item on 2026-05-30 pointed to `addyosmani/agent-skills`, a public repository describing a multi-runtime collection of engineering workflow skills.

A later feed item on 2026-05-30 pointed to `Leonxlnx/taste-skill`, a public repository of frontend design and output-completeness skills. It is a useful second sample because many of its methods are intentionally preference-heavy and domain-shaped.

Another later feed item on 2026-05-30 pointed to `anthropics/skills`, an official public repository of Agent Skills examples and Claude plugin marketplace metadata. It is a useful third sample because an official source, demo purpose, and marketplace install path can make agents under-review adoption risk.

Another later feed item on 2026-05-30 pointed to `EveryInc/compound-engineering-plugin`, a public cross-runtime plugin and converter repository. It is a useful fourth sample because it combines skill collection, agent collection, marketplace manifests, a package installer, target-specific conversion, config writes, hooks, and cleanup behavior.

Another later feed item on 2026-05-30 pointed to `scanaislop/aislop`, a public deterministic scanner for AI-coding-agent code issues. It is a useful fifth sample because it combines scanner evidence, auto-fix, CI, hooks, MCP tools, local history, badges, telemetry, and agent handoff prompts.

Another later feed item on 2026-05-30 pointed to `nowork-studio/NotFair`, a public domain plugin and skill collection for SEO and advertising workflows. It is a useful sixth sample because it combines skill packaging, remote OAuth MCP servers, account tokens, recurring tasks, and write actions that can affect ad accounts and spend.

Another later feed item on 2026-05-30 pointed to `mukul975/Anthropic-Cybersecurity-Skills`, a public cybersecurity skill library mapped to multiple security and AI-risk frameworks. It is a useful seventh sample because a large structured skill catalog can include dual-use defensive, offensive, compliance, incident-response, and AI-risk material while also advertising cross-runtime installation.

A later primary-source report on 2026-05-30 reviewed security issues in the emerging Agent Skill ecosystem. It is a useful eighth sample because it separates confirmed malicious skills from vulnerable skills that can still become attack-chain accomplices through third-party content ingestion, unsafe credential handling, remote prompt or code execution, money access, or system-service modification.

Primary source review, read-only:

- Repository: `https://github.com/addyosmani/agent-skills`
- Observed commit: `6ce029897d2b794940325fc7148774a6ec51111c`
- Repository shape at review time: skills, agents, references, commands, hooks, setup docs, plugin manifests, and validation scripts.
- The repository documents skill anatomy, quality criteria, progressive disclosure, anti-rationalization sections, verification requirements, and a validator for skill frontmatter and required sections.

Secondary sample, read-only:

- Repository: `https://github.com/Leonxlnx/taste-skill`
- Observed commit: `3c7017d636c3a4aad378433ea6d0cfa6c921da4a`
- Repository shape at review time: multiple `skills/*/SKILL.md` files, image-generation skills, examples, assets, `skill.sh`, repository instructions, changelog, and research notes.
- The repository documents brief inference, design dials, design-system selection, style bans, redesign audit, final pre-flight checks, and full-output enforcement.
- The repository's design taste guidance is scoped by frontend aesthetics and author preference. Its extractable mechanism is the review structure, not the specific taste profile.

Third sample, read-only:

- Repository: `https://github.com/anthropics/skills`
- Observed commit: `da20c92503b2e8ff1cf28ca81a0df4673debdbf7`
- Repository shape at review time: 17 `skills/*/SKILL.md` files, many scripts and resources, per-skill licenses, bundled fonts/templates, third-party notices, and Claude plugin marketplace metadata.
- The repository README describes the skills as demonstrations and educational references, notes that implementations and production behavior may differ, and says to test skills thoroughly before relying on them.
- The marketplace metadata exposes skill sets such as document skills, example skills, and a Claude API skill. Official source and marketplace packaging are provenance signals, not automatic local activation approval.

Fourth sample, read-only:

- Repository: `https://github.com/EveryInc/compound-engineering-plugin`
- Observed commit: `85987d496fdfdc8a18faf592fd53329e23266537`
- Repository shape at review time: plugin manifests for multiple runtimes, 38 skill entrypoints, 50+ agent files, hook-related files, Bun/TypeScript CLI, package metadata, privacy and security docs, target-specific conversion code, and Codex install guidance.
- The Codex manifest points to a native skill folder and advertises interactive read/write capabilities. The README also documents a companion Bun install step for Codex agents because native plugin install does not cover the full agent-heavy workflow.
- The converter can write target-specific artifacts such as Codex agents, prompts, skills, config, hooks, install manifests, backups, and cleanup output. Cross-runtime portability is useful, but each target still needs its own activation and persistence review.

Fifth sample, read-only:

- Repository: `https://github.com/scanaislop/aislop`
- Observed commit: `d64de766dff422ac5a2347084d11189b3f00b79e`
- Repository shape at review time: package entrypoints for scan, fix, CI, hooks, MCP server, history files, telemetry, badges, and multi-language scanner rules.
- The repository describes deterministic scanning, auto-fix, agent-specific handoff flags, post-agent edit hooks, MCP tools, local history, and CI use.
- Scanner output is useful evidence, but installing hooks, registering MCP tools, writing history, sending telemetry, or auto-fixing files each adds activation or mutation surface that needs review.

Sixth sample, read-only:

- Repository: `https://github.com/nowork-studio/NotFair`
- Observed commit: `c56cdf92961ad02f96a7ef3120bc39971543e7ca`
- Repository shape at review time: Claude Code plugin metadata, many SEO and ads skills, optional remote MCP servers, OAuth setup, account-management capabilities, evals, references, and app/task infrastructure.
- The repository describes Google Ads and Meta Ads workflows, including account reads and potential writes such as bid, budget, campaign, keyword, and scheduling changes.
- Domain skill quality and OAuth connectivity are not enough for account or spend mutation. Any write path needs bound authorization, spend limits, token storage and revocation review, receipts, and rollback or compensation.

Seventh sample, read-only:

- Repository: `https://github.com/mukul975/Anthropic-Cybersecurity-Skills`
- Observed commit: `0f429d0f96ee70d2a6c259c4ecc6c6e18e0d23ff`
- Repository shape at review time: plugin metadata, 754 structured cybersecurity skills, framework mappings, index file, skills directory, tools directory, and compatibility claims for many agent runtimes.
- The repository describes coverage across security domains and maps skills to frameworks such as ATT&CK, CSF, ATLAS, D3FEND, and AI RMF.
- Framework mapping helps classification and review, but dual-use cybersecurity skills still need target authorization, scope, safe mode, legal boundary, and per-domain activation review before any local import or execution.

Eighth sample, read-only:

- Report: `Technical Report: Exploring the Emerging Threats of the Agent Skill Ecosystem`
- Review surface at review time: static report text and linked taxonomy, not any skill execution.
- Report shape at review time: analysis of thousands of skills, issue taxonomy, malicious payload examples, and vulnerable-skill categories.
- The report distinguishes malicious skills from vulnerable skills. A skill can lack an obvious malicious payload while still creating adoption risk through third-party content ingestion, unsafe credential handling, remote prompt or code loading, direct money access, or system-service modification.
- Scanner output is useful evidence, but "not malicious" is not the same as safe to install, autoload, grant account access, or treat as neutral law.

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
   - Treat official, verified, or marketplace-listed sources as better provenance, not as a reason to skip local adoption review.
3. Sample for method quality.
   - For representative skills, inspect trigger clarity, workflow determinism, verification evidence, negative cases, scope boundaries, and whether details are loaded progressively.
   - For preference-heavy skills, separate the preference profile from the review mechanism. Do not import taste, style, persona, or voice as neutral law.
4. Review activation and persistence.
   - Check install paths, autoload behavior, hooks, lifecycle scripts, plugin manifests, generated config, shell commands, and rollback or disable paths.
   - For cross-runtime converters, review each target writer separately. A converter that is safe or useful for one runtime can still create different persistence, naming, hook, config, or permission surfaces in another runtime.
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
9. Separate intent from exposure.
   - A confirmed malicious payload blocks adoption.
   - A vulnerable but apparently benign skill still needs adoption review for content ingestion, credential handling, remote loading, money access, service modification, persistence, and rollback.

## Initial Scope

This candidate is about adopting or learning from public skill collections. It is not a general endorsement of any specific repository.

## Known Failure Modes

- High star count, author reputation, or polished README is mistaken for local suitability.
- Official source, demo purpose, or marketplace packaging is mistaken for local activation approval.
- Cross-runtime support is mistaken for cross-runtime safety or identical semantics.
- Scanner quality is mistaken for permission to install hooks, register MCP tools, write local state, send telemetry, or auto-fix code.
- Domain expertise or account login is mistaken for permission to mutate spend-affecting settings.
- Framework mapping or security-domain coverage is mistaken for authorization to activate dual-use cybersecurity skills.
- No confirmed malicious payload is mistaken for safe adoption despite vulnerable attack surfaces.
- A scanner clean result is mistaken for permission to install, autoload, register tools, or write durable memory.
- A public skill pack is copied wholesale, importing platform assumptions, hooks, scripts, or context bloat.
- A meta-skill router over-triggers and loads too much context.
- A domain-specific or taste-heavy skill is treated as neutral because its checklist is detailed.
- Subjective style preferences are copied into general methods instead of kept in adapters, overlays, or scoped variants.
- Useful method ideas are rejected because the source also contains runtime-specific install instructions.
- Skill collection review focuses on content quality but misses activation, hook, or persistence surfaces.

## Verification Needed

- Apply this gate to public skill or rule collections without installing them. Eight samples have been reviewed so far: one engineering workflow collection, one frontend taste/output collection, one official example/marketplace collection, one cross-runtime plugin/converter collection, one scanner/hook/MCP package, one domain account-action plugin, one dual-use cybersecurity skill library, and one skill ecosystem security report.
- Record whether it changes adoption decisions compared with simple README review.
- Add eval cases for high-star public skill packs, install-heavy packs, duplicated local methods, and preference-heavy packs.

## Placement Candidates

- `laws/surface-install-supply-chain.md`: adoption and activation review.
- `laws/surface-memory-learning.md`: feed-to-method and skill-generation lifecycle.
- `index/conflict-map.md`: skill collection usefulness versus skill sprawl and context cost.
- `eval/test-prompts.md`: public skill pack adoption cases.

## Promotion Questions

- Does this gate add behavior not already covered by install review and feed learning?
- Can it be expressed as a short checklist without creating process theater?
- Does it improve the absorb-generalize-compose loop by helping agents extract mechanisms instead of importing packs?
