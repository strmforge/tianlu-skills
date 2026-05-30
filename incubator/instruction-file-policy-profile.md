# Instruction-File Policy Profile

Status: incubating

## Signal

Agent instruction files can make everyday work safer and less frustrating when they encode clear boundaries for common file tasks, command approvals, language, and skill selection.

The same mechanism is risky because instruction files are persistent agent-facing policy. They can silently change future behavior, over-broaden permissions, or conflict with runtime sandbox and approval settings.

## Source

- X signal observed on 2026-05-30: a post shared a non-engineer-focused Codex `AGENTS.md` setup for academic and document workflows.
- Primary source reviewed: public article page at `note.com/genkaijokyo/n/n76d27b3e66a8`.
- Official reference checked: OpenAI Codex AGENTS.md documentation and Codex approval/sandbox documentation were used as background for the general behavior model.

Additional sample, read-only:

- Repository: `https://github.com/jerry47j-lang/ai-agent-rules-generator`
- Observed commit: `f7ce782a0d6d0d0e8a33749bba80a7b6f4b61839`
- Repository shape at review time: static HTML, CSS, and JavaScript generator for files such as `AGENTS.md`, Cursor rules, GitHub Copilot instructions, and `CLAUDE.md`.
- The README says the tool can be opened locally with no backend, build step, account, or API key. The generated files are still persistent agent-facing instructions and should be treated as drafts until reviewed.

## Proposed Trigger

Use this candidate when a user, team, project, or agent wants to create or modify persistent instruction files such as:

- `AGENTS.md`;
- project-local or user-level agent instructions;
- rules that affect command approvals, file editing, language, test habits, or skill discovery;
- non-code workflows involving Office documents, CSV files, notes, papers, slides, or other user artifacts.

## Proposed Mechanism

Before writing or adopting an instruction-file profile:

1. Separate runtime authority from agent preference.
   - The profile may ask an agent to proceed or pause, but sandbox, approval policy, and permission mode still define what is actually allowed.
2. Divide rules by scope.
   - Global rules: safety, destructive-action boundaries, language, secret handling, and command explanation.
   - Project rules: tone, file conventions, domain vocabulary, output format, and local workflow preferences.
3. Define file-class policies.
   - Original binary documents should be copied before edits unless the user explicitly asks for in-place modification.
   - Text or markdown workflow files may be edited directly when that is the expected source artifact.
   - CSV exports should state encoding and compatibility expectations when target tools are known.
4. Define command lanes.
   - Read-only inspection commands may proceed when low risk.
   - Writes, deletes, dependency changes, migrations, network access, credential-touching actions, commits, pushes, and broad file scans require an explanation and approval path.
5. Define skill discovery behavior.
   - The agent should inspect nearby skills or project workflows when relevant, explain which one it is using, and avoid relying solely on implicit trigger matching.
6. Keep the profile reviewable.
   - Record source, scope, owner, last review date, conflict precedence, and rollback path.
7. Treat generated instruction files as draft policy.
   - Generator output is convenient starting material, not authority.
   - Review the generated text for hidden assumptions, broad permissions, stale commands, private data, and runtime-specific claims before committing, copying to an autoload path, or relying on it in future agent sessions.

## Initial Scope

- Runtime-neutral method candidate for persistent instruction files.
- Especially useful for non-engineering workflows where file loss, format corruption, or unexplained commands damage trust.
- Candidate placement: `laws/surface-install-supply-chain.md` for persistent instruction adoption plus `laws/surface-memory-learning.md` for future behavior change.

## Known Failure Modes

- A profile says "proceed" and users mistake that for expanded runtime permissions.
- Broad "read-only" command permission accidentally includes large scans, network access, or secret-bearing files.
- Binary document copy rules create confusing duplicates or fail to preserve metadata.
- CSV encoding rules are target-environment-specific and may not fit all locales or tools.
- Skill discovery rules cause over-triggering, context bloat, or conflicting skill instructions.
- A project-local profile overrides safer global rules without an explicit conflict model.
- Third-party profiles become supply-chain instructions when copied from posts, templates, or repositories.
- Static generators make persistent instruction files look low-risk because they avoid backend execution, while the output can still alter future agent behavior.

## Verification Needed

- Confirm the target agent runtime's instruction-file loading order and precedence.
- Confirm which file paths are user-level, project-level, and nested project-level.
- Confirm how the runtime treats instruction files relative to sandbox, approval, and permission profiles.
- Test with representative tasks:
  - read-only inspection command;
  - binary document edit requiring copy-first;
  - CSV export with target encoding;
  - nearby skill selection;
  - destructive command requiring explicit approval;
  - conflicting global and project-local rules.
- Test generated-file review with a sample output before committing or placing it in a runtime autoload path.
- Confirm rollback path for removing or reverting the profile.

## Placement Candidates

- `laws/surface-install-supply-chain.md`: adoption and review of persistent instruction files.
- `laws/surface-memory-learning.md`: persistent behavior change and future-window recall.
- `index/trigger-routing.md`: companion route for instruction files that affect file editing, command lanes, or skill discovery.
- `eval/test-prompts.md`: evals for copy-first binary document edits, CSV encoding, and skill discovery.
