# Adapters

Adapters translate Tianlu methods into runtime-specific packages.

Adapters may include runtime file formats, metadata, installation notes, and validation commands. They must not weaken `dao/` principles or pretend adapter-specific behavior is runtime-neutral.

Current adapter drafts:

- `codex/`
- `claude-code/`
- `hermes/`
