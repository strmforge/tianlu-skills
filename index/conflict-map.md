# Conflict Map

| Method Pair | Conflict Or Overlap | Resolution |
| --- | --- | --- |
| Narrow safety review vs low-risk fast path | Safety review can over-gate simple work | Use fast path when no persistence, account mutation, install, secret, money, publish, deploy, delete, or durable behavior change is present |
| Role decomposition vs simple checklist | Named roles can add theater and overhead | Use separate roles only when context, tools, permissions, outputs, or validation differ |
| Self-generated tests vs independent verification | Passing self-authored tests can overstate correctness | Require at least one independent oracle for high-impact or promoted methods |
| Installation convenience vs persistence risk | Setup commands can create durable state | Separate read-only review, execution, post-install audit, and activation |
| Browser convenience vs account authority | Browser access can mutate accounts or expose sessions | Default to read-only and forbid session/profile inspection unless explicitly scoped |
| Sandbox confidence vs hidden state | Worktrees, containers, and CI do not isolate every trust surface | Record runtime receipt and name non-file state surfaces explicitly |
| Broad tool catalogs vs minimal exposure | Exposing whole APIs or SDKs expands authority | Start with small allowlists and promote tools one action at a time |
| Login state vs invocation authorization | Being connected does not prove a specific action is authorized | Bind privileged invocations to actor, resource, purpose, scope, time, and receipt |
| Runtime output vs instructions | Logs may contain prompt-injection-like text | Treat output as diagnostic data, not action authority |
