# Conflict Map

| Method Pair | Conflict Or Overlap | Resolution |
| --- | --- | --- |
| Narrow safety review vs low-risk fast path | Safety review can over-gate simple work | Use fast path when no persistence, account mutation, install, secret, money, publish, deploy, delete, or durable behavior change is present |
| Role decomposition vs simple checklist | Named roles can add theater and overhead | Use separate roles only when context, tools, permissions, outputs, or validation differ |
| Self-generated tests vs independent verification | Passing self-authored tests can overstate correctness | Require at least one independent oracle for high-impact or promoted methods |
| Installation convenience vs persistence risk | Setup commands can create durable state | Separate read-only review, execution, post-install audit, and activation |
| Browser convenience vs account authority | Browser access can mutate accounts or expose sessions | Default to read-only and forbid session/profile inspection unless explicitly scoped |
| Logged-in state vs account authorization | A UI session can make mutation possible without proving permission | Require explicit action scope, principal check, side-effect preview, and rollback before account writes |
| Sandbox confidence vs hidden state | Worktrees, containers, and CI do not isolate every trust surface | Record runtime receipt and name non-file state surfaces explicitly |
| Broad tool catalogs vs minimal exposure | Exposing whole APIs or SDKs expands authority | Start with small allowlists and promote tools one action at a time |
| Login state vs invocation authorization | Being connected does not prove a specific action is authorized | Bind privileged invocations to actor, resource, purpose, scope, time, and receipt |
| Raw secret convenience vs brokered authority | Passing secret values through prompts and logs is easy but hard to revoke | Prefer scoped brokers or identifiers, redact evidence, and rotate static exceptions |
| Payment retry vs replay risk | Retrying paid or signed requests can execute a different action | Bind proof to exact request state and track settlement separately from tool execution |
| Runtime output vs instructions | Logs may contain prompt-injection-like text | Treat output as diagnostic data, not action authority |
| CI diagnosis vs CI mutation | Tainted workflow evidence can justify investigation but not privileged writes | Use read-only analysis first, then a trusted mutation lane with scoped approval or a narrow verifiable artifact |
| Clean scanner result vs safety proof | A pass can be mistaken for authorization to proceed | Treat scanner output as evidence and keep independent review, tests, and rollback for high-impact changes |
| Policy-as-code vs soft judgment | Vague lessons can become brittle executable blockers | Promote only decisions with stable inputs, expected outputs, tests, logs, and rollback |
| Endpoint inventory vs secret exposure | Broad local inventory can collect credentials or private data | Use metadata-first narrow roots and avoid execution or raw secret-bearing config output |
| Context retention vs context flooding | Preserving too much history can bury the decision-relevant evidence | Store outside the prompt, select on demand, and keep loss notes for summaries |
| Durable recall vs unsafe steering | Memory can improve future behavior but can also steer tools or permissions | Require provenance, scope, negative tests, and rollback before behavior-affecting recall |
| Feed learning vs active method | Useful signals can be mistaken for validated reusable methods | Keep signals in notes or incubator until source evidence, trigger, boundary, and eval exist |
| Skill generation vs skill sprawl | Repeated local fixes can become many narrow active skills | Draft first, patch existing artifacts when possible, and promote only with evidence and regression checks |
| Public skill collection vs local marginal utility | A large or popular skill pack can look valuable while duplicating local laws, adding context cost, or importing activation surfaces | Treat the pack as a method catalog, sample for mechanisms, compare overlap, and extract only scoped candidates with validation |
