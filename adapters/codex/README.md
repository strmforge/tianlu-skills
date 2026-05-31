# Codex Adapter

Status: draft

This adapter translates Tianlu methods into Codex skill packaging and Codex-specific operating receipts.

Codex-specific details belong here, not in runtime-neutral `tiandao/` or `laws/`.

## Codex Constraints

- Codex `SKILL.md` frontmatter should contain only `name` and `description`.
- Runtime compatibility notes belong in the skill body or adapter docs, not extra YAML fields.
- Keep `SKILL.md` thin and route detailed methods through references.
- Verify the effective skill-loading path before relying on long bodies, tail sections, or cross-skill handoffs. Authored file contents are not proof that Codex delivered the same content to the model.
- Validate with Codex skill validation and forward-testing before active installation.

## Planned Output

```text
safe-agent-workflow/
|-- SKILL.md
|-- agents/
|   `-- openai.yaml
`-- references/
    `-- ...
```

## Adapter Drafts

- [Feed-to-method adapter](feed-to-method.md)
- [Chrome/X troubleshooting adapter](chrome-x-troubleshooting.md)

## Response Receipt Pattern

When Tianlu methods are packaged as a Codex skill, keep final responses concise but include the durable receipt when the task touched safety-relevant state:

- reusable method or law family applied;
- state, artifact, draft, receipt, or checkpoint created;
- verification performed and commands or evidence used;
- remaining risk, missing evidence, or reason a candidate was not activated;
- durable files edited, with paths and hashes when practical.

This is adapter guidance, not a runtime-neutral law. Other runtimes may package the same receipt fields differently.
