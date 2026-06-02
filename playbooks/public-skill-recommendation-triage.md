# Playbook: Public Skill Recommendation Triage

Status: seed draft

Scope: public-skill-recommendation-triage-neutral. This playbook helps an agent turn public recommendations for skills, prompt packs, plugins, command bundles, agent rules, or productivity tools into a reviewable triage packet. It is not tied to one agent runtime, marketplace, model provider, content niche, coding tool, or social platform.

## Purpose

Help an agent respond to public "install these skills/tools" recommendations without treating the recommendation as an install list.

The useful output is a triage packet: source inventory, claim and evidence table, surface map, local-overlap map, extraction candidates, risk class, no-install decision, review queue, and next-action options.

This playbook is productive, not only defensive. It should help the user learn which method ideas are useful, which ones duplicate existing methods, which ones belong in a scoped adapter or overlay, and which ones should stay rejected or unverified.

## Inputs

- Recommendation source: post, article, video, marketplace page, README, issue, release note, or personal list.
- Recommended items: skill names, repositories, packages, plugins, commands, extensions, MCP servers, scripts, or tools.
- User objective: coding, commerce, writing, content operations, research, support, learning, finance operations, or another concrete workflow.
- Existing local methods, skills, adapters, overlays, playbooks, and laws.
- Runtime constraints: account access, install policy, browser/session access, package manager, context budget, budget or cost limits, and allowed tools.
- Success metric: safer adoption decision, better method extraction, reduced context bloat, or a clear review queue.

## Procedure

1. Clarify the recommendation and task fit.
   - Separate the user's goal from the recommender's framing.
   - Separate the list or curator from the individual recommended items. A public list, social post, or article may combine items that are not all endorsed by the same source.
   - Identify whether the request is to install, compare, learn from, extract methods, or build a local equivalent.
   - If the user only wants a quick opinion, still label unverified items and avoid install instructions.

2. Inventory each recommended item.
   - Record name, source URL, maintainer or publisher, repository or package identity, version, commit or release when available, license, and last-update signal.
   - Mark source status: primary source reviewed, secondary claim only, unavailable, or unknown.
   - Do not clone, install, run, autoload, activate, register tools, or copy into active behavior during triage.

3. Map surfaces.
   - Separate passive markdown from executable or persistent surfaces.
   - Look for skills, prompts, commands, agents, hooks, scripts, package lifecycle steps, plugin manifests, MCP or API tools, browser extensions, account permissions, background jobs, telemetry, local state, generated config, and rollback paths.
   - Treat centralized feeds, remote content endpoints, desktop application patchers, model or tool bridges, repository packers, local cleanup scripts, and preview helpers as different surface types even when a public post calls them all "skills".
   - Mark whether the item may change future agent behavior, mutate accounts, spend money, publish, send messages, read private data, or expose secrets.

4. Sample method quality.
   - Inspect representative instructions for trigger clarity, procedure, evidence, verification, stop conditions, negative cases, scope boundaries, progressive disclosure, and context cost.
   - For taste-heavy or domain-heavy methods, separate the useful review mechanism from the author's preference profile.
   - For tool wrappers, separate the workflow idea from the install, account, and execution surface.

5. Compare local overlap and marginal utility.
   - Check whether existing local playbooks, laws, adapters, or overlays already cover the same trigger.
   - Label each item as new mechanism, partial overlap, duplicate, narrower variant, runtime-specific adapter candidate, project overlay candidate, eval idea, or reject.
   - Prefer extracting a small method, checklist, or eval case over copying a full pack.

6. Classify risk and review path.
   - Use low risk for read-only ideas with no install or persistence.
   - Use medium risk for inactive local drafts, adapter ideas, or tools that require later install review.
   - Use high risk for hooks, scripts, package installs, account tools, browser extensions, MCP servers, payment or spend paths, durable memory writes, or autoloaded behavior.
   - Route high-risk items through the supporting law family before any activation.

7. Produce the triage packet.
   - Include an item table with source status, useful idea, surfaces, overlap, risk, decision, and next action.
   - Include a no-install receipt when no activation occurred.
   - Include extraction candidates as neutral method drafts only when source, trigger, mechanism, evidence, failure mode, and boundary are clear.

8. Prepare the next step.
   - For useful but unverified items, create a review queue or source lookup list.
   - For useful mechanisms, suggest an incubator candidate, playbook addition, adapter note, overlay note, or eval case.
   - For rejected items, state why: unverifiable, duplicate, install-heavy, account-heavy, hidden persistence, context bloat, preference lock-in, poor trigger, or mismatch with the user's goal.

## Outputs

- Recommendation source inventory.
- Item-by-item triage table.
- Install, persistence, account, browser, tool, and data surface map.
- Local overlap and marginal utility map.
- Extractable method and eval candidate list.
- Risk class and review queue.
- No-install or no-activation receipt.
- Human decision packet with next actions.

## Quality Signals

- The output answers the user's actual objective, not only the public ranking.
- Every recommended item has a source status and a decision status.
- The agent distinguishes popularity, official source, or polish from local suitability.
- The packet identifies what can be learned without installing anything.
- The result reduces skill sprawl and context bloat instead of adding more active instructions.
- High-risk items are routed to review without blocking low-risk learning.

## Human Checkpoints

- Installing, cloning, running, copying into active skill paths, autoloading, or activating any third-party item.
- Enabling hooks, commands, plugins, MCP servers, browser extensions, package scripts, background jobs, or persistent config.
- Granting account, browser, repository, file-system, payment, publication, or messaging access.
- Writing durable memory, active rules, project policy, or future-session instructions.
- Importing taste, style, persona, legal, medical, financial, security, or domain-specific defaults as neutral methods.

## Composable With

- `research-to-brief-synthesis.md` when the recommendation should become a broader research brief.
- `feedback-to-backlog-operations.md` when multiple recommendations or user comments should become a backlog.
- `operations-execution-handoff.md` when approved review tasks need an execution packet.
- `../laws/surface-install-supply-chain.md` for install, package, hook, plugin, extension, and persistence review.
- `../laws/surface-memory-learning.md` for skill generation, durable behavior, and feed-to-method learning.
- `../laws/surface-evidence-eval.md` for source strength, verification, and promotion claims.
- `../laws/surface-mcp-tools-auth.md` for tools, APIs, MCP servers, credentials, accounts, payments, and runtime output.
- `../laws/surface-browser-runtime.md` when review uses logged-in browser sessions or browser extensions.
- `../incubator/public-skill-collection-quality-gate.md` when a public collection needs deeper adoption-gate review.

## Evidence

Source signal: a public recommendation post listed five Codex skills or tools as worth installing. The useful pattern was not the specific install advice, but the recurring user need to triage public recommendations into source review, safety surfaces, local overlap, and method extraction.

Validation state: seed draft. Needs replay on public skill lists for coding, commerce operations, writing, content operations, research, and tool-adoption workflows before promotion.

Known failures:

- Treating a ranking, star count, official-looking source, or social proof as permission to install.
- Rejecting every recommendation because it has install risk, instead of extracting safe method ideas.
- Importing a preference-heavy or runtime-specific skill as neutral law.
- Missing hidden persistence through hooks, generated config, package scripts, browser extensions, MCP servers, or autoload paths.
- Adding many active skills when a checklist, eval case, adapter note, or overlay would be enough.
