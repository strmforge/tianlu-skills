# Conflict Map

| Method Pair | Conflict Or Overlap | Resolution |
| --- | --- | --- |
| Narrow safety review vs low-risk fast path | Safety review can over-gate simple work | Use fast path when no persistence, account mutation, install, secret, money, publish, deploy, delete, or durable behavior change is present |
| Role decomposition vs simple checklist | Named roles can add theater and overhead | Use separate roles only when context, tools, permissions, outputs, or validation differ |
| Self-generated tests vs independent verification | Passing self-authored tests can overstate correctness | Require at least one independent oracle for high-impact or promoted methods |
| Installation convenience vs persistence risk | Setup commands can create durable state | Separate read-only review, execution, post-install audit, and activation |
