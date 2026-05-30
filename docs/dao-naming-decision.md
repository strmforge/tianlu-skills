# Dao Naming Decision

Status: owner decision required

`dao/` currently means source principles for the Tianlu method system: method lifecycle, scope and promotion, conflict resolution, and governing principles. It does not claim to be the full philosophical source layer outside this repository.

There is a naming risk: readers may confuse `tianlu-skills/dao/` with a broader top-level Dao concept. The directory name is therefore a governance decision, not a mechanical Codex refactor.

## Options

### Option A: Keep `dao/`

Use `dao/` intentionally as a compact source-principles directory.

Required guardrails:

- Keep README and docs clear that this is the source layer for the method system.
- Do not import private mythology, project-specific language, or non-neutral doctrine into this repository.
- Keep broad philosophical text in docs only when it explains repository structure and remains neutral.

### Option B: Rename To A Less Ambiguous Term

Possible names:

- `principles/`
- `source/`
- `governance/`

Benefits:

- Reduces confusion for outside readers.
- Makes the repository look more conventional and neutral.

Costs:

- Loses the source/collection/order symmetry of `dao/`, `laws/`, and `index/`.
- Requires path updates across README, docs, indexes, and eval references.

No rename should happen until the repository owner chooses the intended public meaning.
