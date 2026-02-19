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

### Phase 3: Scan + Triage — NOT STARTED
Task graph created with atomic breakdown:
- 3a (parallel): Scan 4 locations for Linear-worthy items
- 3b (parallel): Triage 3 directories (212 files total) with Capture Before Archive
- 3c: Create Linear issues from scan findings (blocked by 3a)
- 3d: Verify + close handoff (blocked by all above)

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
