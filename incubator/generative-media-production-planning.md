# Generative Media Production Planning

Title: Generative media production planning

Signal:
- X Round 399 sampling found repeated creator and tool signals around ComfyUI character consistency, AI UGC grids, model nodes, and video production workflows.
- Primary sources show that generated-media work can become a real execution surface: ComfyUI queues workflow prompts and records prompt history; TikTok separates inbox upload from direct post scopes; YouTube upload is an authorized write endpoint; caption and accessibility deliverables have platform and W3C guidance.

Source:
- L0 signal: X read-only search for ComfyUI character consistency workflows, 2026-06-07.
- ComfyUI server routes: https://docs.comfy.org/development/comfyui-server/comms_routes
- TikTok Upload API: https://developers.tiktok.com/doc/content-posting-api-reference-upload-video
- TikTok Direct Post API: https://developers.tiktok.com/doc/content-posting-api-reference-direct-post
- TikTok Content Posting get started: https://developers.tiktok.com/doc/content-posting-api-get-started/
- YouTube videos.insert: https://developers.google.com/youtube/v3/docs/videos/insert
- YouTube video resource fields: https://developers.google.com/youtube/v3/docs/videos
- YouTube altered or synthetic content disclosure: https://support.google.com/youtube/answer/14328491
- TikTok AI-generated content labels: https://support.tiktok.com/en/using-tiktok/creating-videos/ai-generated-content
- ComfyUI workflow API format: https://docs.comfy.org/development/api-development/workflow-api-format
- ComfyUI workflow JSON spec: https://docs.comfy.org/specs/workflow_json
- C2PA specification: https://spec.c2pa.org/specifications/specifications/2.1/specs/C2PA_Specification.html
- W3C WAI audio/video planning: https://www.w3.org/WAI/media/av/planning/
- YouTube supported subtitle and caption files: https://support.google.com/youtube/answer/2734698

Proposed trigger:
- The user asks for an AI video, AI avatar, digital human, AI anime, generated ad, AI UGC, product-video, short-video, lip-sync, character-consistency, ComfyUI, ToonCrafter, Audio2Face, or generated-media production workflow.
- The user wants a repeatable production plan, shot list, prompt matrix, reference ledger, render queue, QA checklist, export package, or publication handoff for generated media.

Proposed mechanism:
1. Produce a production brief that captures objective, audience, channel, duration, format, creative constraints, and review owner.
2. Build a source and reference ledger covering source assets, prompts, model or workflow references, character references, voice or likeness inputs, music, stock assets, product claims, and missing permissions.
3. Build a shot, prompt, and workflow matrix with per-shot intent, inputs, workflow or tool reference, seed or run controls when available, expected output, and retry notes.
4. Build a run and version ledger with queue id, prompt id or job id, workflow JSON pointer, model or node versions, render settings, output path, failed frames or failed clips, rerender policy, and reviewer status.
5. Build a QA pass for identity or character drift, motion drift, lip-sync drift, timing, captions, transcript, audio description need, platform export constraints, and visible disclosure labels that need human review.
6. Produce a publication handoff packet with target channels, official spec lookup date, required metadata, privacy or visibility choice fields, AI-generated or sponsored-content label fields, approval status, and open questions.

Initial scope:
- This is a productive planning candidate, not a law and not an adapter.
- It is tool-neutral and channel-neutral. Specific tools such as ComfyUI, ToonCrafter, Audio2Face, MuseTalk, TikTok, YouTube, or platform APIs are source examples and adapter candidates, not universal requirements.
- It composes existing `content-operations`, `asset-repurposing-pipeline`, `creator-rights-and-disclosure-clearance-planning`, `campaign-and-ad-operations-planning`, and `operations-execution-handoff`.

Known failure modes:
- Treating a production plan as permission to call generation tools, upload files, publish posts, schedule posts, change visibility, toggle AI-generated or paid-partnership labels, buy licenses, contact rights holders, decide fair use, decide likeness or voice consent, or write platform accounts.
- Treating generated-media provenance, workflow JSON, prompt history, queue status, screenshots, or successful renders as proof that the asset is rights-cleared, platform-safe, accessible, or ready to publish.
- Overfitting a neutral playbook to one tool, one model, one platform, one creator workflow, one local GPU setup, or one vendor API.
- Free or cheap model/provider routing can increase fan-out, but it does not reduce the need for route receipts, evidence ledgers, budget ceilings, or review gates.

Verification needed:
- Add and replay a narrow eval that separates generated-media planning packets from generation, upload, publication, rights, account, and retention authority.
- Replay at least two real planning tasks: one tool-local workflow such as ComfyUI and one platform handoff such as TikTok or YouTube, with no account mutation.
- If promoted to playbook, update `playbooks/README.md`, `index/trigger-routing.md`, and relevant expected behavior with explicit composition rather than duplicating existing creator, content, campaign, and handoff playbooks.

Replay evidence notes:
- A tool-local workflow replay should include a packet id, objective, source date, reviewer, explicit `planning_only: true`, source-asset ledger, workflow JSON pointer or hash, format type, node and model inventory, planned prompt controls, QA checklist, reviewer questions, and an execution-absence receipt. The receipt should state that no prompt or workflow was submitted, no queue id or server prompt id was created, no history receipt was produced, no generation process was started, no model or custom node was downloaded, and no source asset was uploaded or transformed.
- A platform handoff replay should include target platform, intended state, required platform write scope, visibility fields, AI-generated or synthetic-content disclosure fields, sponsored or paid-promotion fields, caption/transcript/accessibility fields, source and rights ledger, human approval fields, and a no-upload receipt. The receipt should state that no OAuth or platform login was used, no private account data was read, no upload, direct-post, update, caption-insert, upload-url, visibility, label, schedule, or publication endpoint was called, and no post id, publish id, upload URL, schedule, visibility change, or label change was created.
- Replay completion is evidence for method shaping only. It does not by itself promote this incubator item, prove platform safety, prove rights clearance, authorize generation or account mutation, or justify a neutral playbook without repeated scoped replays and comparison against the existing content, asset, rights, campaign, and execution-handoff playbooks.

Replay ledger:
- 2026-06-07: One redacted ComfyUI-style local workflow planning replay recorded `planning_only: true`, no workflow submission, no prompt call, no queue id, no server prompt id, no history receipt, no generation process, no model or custom-node download, and no asset upload or transformation. The replay left workflow JSON schema completeness, concrete node/model selection, output QA, accessibility QA, and publication handoff unresolved.
- 2026-06-07: One redacted TikTok/YouTube publication handoff replay recorded `planning_only: true`, no OAuth or platform login, no private account read, no upload, direct-post, schedule, visibility, label, caption, upload-url, or publication endpoint call, and no post id, publish id, upload URL, caption id, schedule, visibility change, or label change. The replay left final media, captions/transcript, platform reviewer approval, rights approval, accessibility review, provenance metadata, and publication readiness unresolved.

Placement candidates:
- `playbooks/generative-media-production-planning.md` only after replay evidence shows a stable productive method that is not already covered by existing playbooks.
- Adapter candidates for concrete workflow engines or APIs should stay in `adapters/` or remain scoped notes until their runtime boundaries are known.
- Boundary coverage belongs in `eval/` and existing laws, mainly `surface-mcp-tools-auth`, `surface-browser-runtime`, and `surface-evidence-eval`.
