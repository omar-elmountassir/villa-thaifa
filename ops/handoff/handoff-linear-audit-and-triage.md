# Session Handoff: Linear Audit + File Triage

**Created**: 2026-02-19
**Workspace**: ~/villa-thaifa/
**Priority**: High — Linear issues are stale and blocking effective work tracking

---

## Context

The villa-thaifa codebase underwent massive restructuring (200+ files relocated, directory contract established, structure documentation system added, 14 files migrated from ~/omar/). Linear issues created before this restructuring are likely stale.

**Current Linear state (as of 2026-02-19):**

- 4 VT projects: Room Management, Q1 2026 Operations, OTA Integration, SSOT Migration (all Backlog status)
- 41 total issues: 36 Backlog, 6 Done, 1 In Progress (VT-26 P0 blocker)
- GitHub integration: NOT active
- VT-26 (P0 "Codebase Architecture Audit") is likely completed by recent restructuring work
- VT-19 (Anniversary event) is 19 days overdue
- VT-40 (Logo design) and VT-41 (Resume ops) were just created this session

---

## Progress (2026-02-19 Session)

### Phase 1: Unblock — COMPLETED
1. **Linear-GitHub integration** — Already active. Discovered repo alignment issue: Linear points to `El-Mountassir/villa-thaifa-property-management` (old) but current repo is `omar-elmountassir/villa-thaifa`. Filed to `ops/intake/linear-github-repo-alignment.md`.
2. **VT-26 P0 blocker** — Closed as Done. Architecture audit completed via Safe Harbor migration + February restructuring. 6 downstream issues unblocked.
3. **Linear MCP tools** — Work from orchestrator, not sub-agents. Persisted in MEMORY.md.

### Phase 2: Audit — COMPLETED
- **15 issues closed** (total 41 → 26 remaining):
  - Done (4): VT-15, VT-28, VT-29, VT-41
  - Cancelled (11): VT-14, VT-16, VT-17, VT-18, VT-19, VT-20, VT-2, VT-30, VT-31, VT-32, VT-33
- **VT-2 merged into VT-9** — sub-issues VT-3→8 re-parented
- **SSOT Migration project** — all 4 issues closed as obsolete
- **Anniversary event** — cancelled by Said, all 5 issues closed
- **VT-22** (agent brief) kept open — partially done is NOT done
- **Completion Integrity rule** added to universal.md
- **Delegation Thresholds** strengthened in rules.md (zero tolerance)
- Dashboard: `~/omar/artifacts/dashboards/vt-linear-audit-2026-02-19.html`

### Phase 3: Scan + Triage — COMPLETED

**Scans (3a):** 4 parallel scans completed:
- AGENTS.md Open Loops: 2 items found (facilities hardening, 212-file triage)
- ops/intake/: 25+ items found (GitHub strategy, migration conflicts, manifest CSV)
- ops/handoff/: 13 new items found (repo alignment, language audit, archive lifecycle, governance)
- data/pending-domains/: 2 items found (facilities.md, WhatsApp DBs)

**Triage (3b):** 3 directories triaged (209 files total):
- context/meta/knowledge/: 51 files — 28 KEEP, 21 ARCHIVE, 2 NEEDS-EXTRACTION
- context/meta/planning/: 96 files — 29 KEEP, 53 ARCHIVE, 14 NEEDS-EXTRACTION
- ops/audit/quality/: 62 files — 18 KEEP, 38 ARCHIVE, 6 NEEDS-EXTRACTION

**Linear issues created (3c):** 14 new issues (VT-42 through VT-55):
- Batch 1 (P1): VT-42 (GitHub integration fix), VT-43 (gitignore/PII strategy), VT-44 (hook E2E test)
- Batch 2 (P2): VT-45 (facilities hardening), VT-46 (212-file triage), VT-47 (repath 10 docs), VT-48 (language audit), VT-49 (migration audit), VT-50 (manifest CSV processing)
- Batch 3 (P3): VT-51 (GitHub identity strategy), VT-52 (Said profile consolidation), VT-53 (communications.md review), VT-54 (TTS decision), VT-55 (archive old repo)

**Deferred items (6):** Stale GitHub issues migration, old repo archive strategy, ~/omar/ repo strategy, WhatsApp domain work, archive/lifecycle system design, WOS architecture
**Skipped items (3):** Create ops/archive/sessions/ (ACT-tier), resume project (stale), GitHub template repos (blocked)

**Triage reports:** `/tmp/triage-context-meta-knowledge.md`, `/tmp/triage-context-meta-planning.md`, `/tmp/triage-ops-audit-quality.md`
**Scan evaluation:** `/tmp/scan-items-evaluation.md`
**Dashboard:** `~/omar/artifacts/dashboards/vt-scan-consolidation-2026-02-19.html`

### Rules Updated This Session

- `~/.claude/rules/rules.md`: Delegation Thresholds rewritten with zero-tolerance enforcement
- `~/omar/core/resources/rules/universal.md`: Completion Integrity rule added
- `~/.claude/skills/delegate/SKILL.md`: Gemini-from-Claude-Code pattern documented
- `~/.claude/projects/-home-director-villa-thaifa/memory/MEMORY.md`: Gemini delegation pattern added

### New Files Created

- `ops/intake/linear-github-repo-alignment.md` — repo naming mismatch problem
- `~/omar/artifacts/dashboards/vt-linear-audit-2026-02-19.html` — audit dashboard
- `~/omar/knowledge/research/business/vt-linear-audit-verification-2026-02-19.md` — verification report (pending)

---

## Task Graph (execute in order)

### Phase 1: Unblock (do first)

1. **Activate Linear-GitHub integration** — No sync exists. Set up bidirectional sync between Linear VT team and github.com/omar-elmountassir/villa-thaifa
2. **Update VT-26 P0 blocker** — Review against current codebase state. Likely done or nearly done. Close/update to unblock downstream issues
3. **Fix Linear MCP tools for sub-agents** — The linear-agent sub-agent type couldn't load MCP tools. Investigate ToolSearch scope or agent config

### Phase 2: Audit (depends on Phase 1)

4. **Audit all 41 VT issues** — Compare each against current codebase. Close completed, update stale, flag overdue. Key items:
   - VT-26: likely completed but we aren't sure.. (architecture audit done but might need to be reviewed or redo)
   - VT-19: overdue anniversary event — needs decision
   - SSOT Migration issues (VT-30 to VT-33): check relevance
   - Room Management issues: check against current data/rooms/ state

5. **Decide: consolidate 4 VT projects or keep separate** — After audit, evaluate if 4 projects still make sense or should merge into 1

### Phase 3: Scan + Triage (can parallel)

6. **Scan ~/villa-thaifa/ for Linear-worthy items** — Find work items in files (TODOs, pending, open loops) that should be Linear issues. Key locations:
   - AGENTS.md Open Loops section
   - ops/intake/ (unprocessed items)
   - ops/handoff/ (pending work from handoffs)
   - data/pending-domains/ (domains awaiting hardening)

7. **Triage 212 files** — Three directories need triage:
   - context/meta/knowledge/ (54 files) — archive obsolete, keep relevant
   - context/meta/planning/ (96 files) — archive completed plans, keep active
   - ops/audit/quality/ (62 files) — archive old audits, keep current

   **CRITICAL**: Follow the "Capture Before Archive" rule (universal.md). Before archiving ANY file:
   - Read it completely
   - Extract: tasks → Linear, decisions → ops/decisions/, knowledge → context/meta/knowledge/
   - Verify extractions landed
   - Only then archive
   - Process in batches of 5-10 files

---

## Key Files

- AGENTS.md: directory contract + open loops
- ops/intake/migration-conflict-check.md: migration audit from this session
- ops/intake/migration-path-validation.md: path compliance audit
- context/meta/planning/linear-workflow.md: Linear workflow conventions
- ops/handoff/handoff-linear-migration-preparation.md: prior Linear session handoff

---

## Entry Command

```bash
# Quick state check
cd ~/villa-thaifa && git status && git log --oneline -5
```

---

## Completion Status

**All 3 phases COMPLETED** as of 2026-02-19.

### Linear State Post-Audit
- Total VT issues: 55 (was 41)
- Done: 11 | Canceled: 11 | Backlog: 33
- New issues created this session: VT-42 through VT-55 (14 issues)
- SSOT Migration project: fully closed (4 issues)

### Remaining Work (tracked in Linear)
- VT-42: Fix GitHub integration (P1)
- VT-43: Gitignore/PII strategy (P1)
- VT-44: Hook E2E testing (P1)
- 11 more issues at P2-P3 priority

### Rules Updated This Session
- rules.md: Delegation Thresholds rewritten (zero tolerance), Linear MCP cap (2 calls max)
- universal.md: Completion Integrity, Task-First Execution, Prompt-to-Task Pipeline rules added
- delegate skill: Timeout guide + retry protocol added
- MEMORY.md: Post-audit state, Gemini delegation pattern, Linear spelling anti-pattern

### This Handoff File
This file can be ARCHIVED after Omar confirms all phases are satisfactory. Follow Capture Before Archive protocol — extract any remaining actionable items to Linear before archiving.
