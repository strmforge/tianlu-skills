# Codex Adapter

Status: draft

This adapter will translate Tianlu methods into a Codex skill.

Codex-specific details belong here, not in runtime-neutral `dao/` or `laws/`.

## Codex Constraints

- Codex `SKILL.md` frontmatter should contain only `name` and `description`.
- Runtime compatibility notes belong in the skill body or adapter docs, not extra YAML fields.
- Keep `SKILL.md` thin and route detailed methods through references.
- Validate with Codex skill validation and forward-testing before active installation.

## Planned Output

```text
safe-agent-workflow/
├── SKILL.md
├── agents/
│   └── openai.yaml
└── references/
    └── ...
```
