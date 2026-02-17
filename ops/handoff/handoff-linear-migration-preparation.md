# Handoff: Linear Migration Preparation

> **Date**: 2026-02-17
> **Status**: APPROVED — Linear selected as primary backlog tool
> **Priority**: NEXT SESSION'S PRIMARY INITIATIVE
> **Decision file**: `~/omar/knowledge/research/productivity/backlog-tool-decision.md`

---

## Table of Contents

1. [Decision Summary](#1-decision-summary)
2. [Current Linear State](#2-current-linear-state)
3. [Vision: Task Graph vs Linear Scoping](#3-vision-task-graph-vs-linear-scoping)
4. [Work Breakdown](#4-work-breakdown)
5. [Existing Issues to Review](#5-existing-issues-to-review)
6. [Skills and Agents Needed](#6-skills-and-agents-needed)
7. [Scaffold Integration](#7-scaffold-integration)
8. [Pending Items Inventory](#8-pending-items-inventory)
9. [Research Files Produced](#9-research-files-produced)
10. [Open Questions for Omar](#10-open-questions-for-omar)
11. [Session Entry Checklist](#11-session-entry-checklist)

---

## 1. Decision Summary

**Tool**: Linear (Business Plan, $18/user/month)
**Score**: 8.675 vs GitHub Issues 7.225 (robust — no weight shift flips winner)
**Key drivers**: 40 MCP tools, works with Claude Code AND Gemini CLI, cycles/initiatives/milestones, unlimited issues

**What was wrong in v1 evaluation** (corrected in v2):
- Omar already has Business plan (NOT free tier)
- Linear MCP has 40 tools (NOT 23)
- MCP works with ALL agentic CLIs (NOT just Claude)
- Simplicity removed as dimension per Omar's explicit instruction

---

## 2. Current Linear State

### Workspace
- **URL**: `https://linear.app/el-mountassir`
- **Workspace ID**: `el-mountassir`
- **Issue prefix**: `EM-XXX` (El Mountassir)
- **Plan**: Business ($18/user/month)
- **Active issues**: 29+ (range EM-128 to EM-191+)

### Configuration Already Done
- **API key**: Stored in `~/.secrets/.env` (LINEAR_API_KEY)
- **MCP server**: Connected & authenticated in Claude Code (40 tools)
  - Setup: `claude mcp add linear-server --transport http https://mcp.linear.app/mcp`
  - Config location: `/home/director/.claude.json` (project-scoped for villa-thaifa)
- **GitHub sync**: Configured 2026-02-09 for `El-Mountassir/villa-thaifa-property-management`
- **Branch naming convention**: `agent/<name>/<date>-EM-<issue-id>`

### Documentation Already Exists
- `context/meta/planning/linear-github-setup.md` — GitHub-Linear integration guide
- `context/meta/planning/linear-workflow.md` — Workflow rules (Hybrid MCP + Code execution)

### What's Suboptimal (Omar's assessment)
- Workspace configuration is incomplete / suboptimal
- Agents lack conventions for systematic Linear usage
- No skill or agent specialization for Linear operations
- Existing issues are stale (repo changed A LOT since they were created)
- No integration with scaffold/bootstrap workflow
- Task graph (TaskCreate) vs Linear not scoped — causes confusion

---

## 3. Vision: Task Graph vs Linear Scoping

**Omar's requirement**: Crystal clear separation. No confusion. Every future instance knows exactly what goes where, when, and how.

### Proposed Scoping (TO DECIDE WITH OMAR)

| Tool | Scope | Lifecycle | Audience |
|------|-------|-----------|----------|
| **Linear (EM-XXX)** | Durable work items: features, bugs, initiatives, epics, operational tasks, backlog | Persists across sessions. Tracked through cycles. Has history. | Omar + all agents + future collaborators |
| **TaskCreate (task graph)** | Session-local execution plan: breaking a Linear issue into sub-steps for THIS session | Lives only during current session. Compacted away. | Current agent instance only |
| **AGENTS.md Open Loops** | DEPRECATED — migrate to Linear | N/A | N/A |
| **TASKS.md** | DEPRECATED — migrate to Linear | N/A | N/A |
| **Handoff files** | Session continuity: what the NEXT session needs to know to resume | Per-session, archived after use | Next agent instance |

### Workflow Vision

```
1. Session starts
2. Agent reads Linear (list_issues, filter by cycle/priority)
3. Agent picks highest-priority issue (or Omar assigns)
4. Agent creates session task graph (TaskCreate) to break that issue into steps
5. Agent executes steps, updating Linear issue with progress comments
6. At session end: update Linear issue status + create handoff if incomplete
7. No work exists only in markdown files
```

### Key Design Questions
- Should agents auto-create Linear issues when they discover work? (Yes, but with what conventions?)
- Should the task graph reference Linear issue IDs? (Yes — `TaskCreate` description includes `EM-XXX`)
- What happens to handoff files? (Keep for session context, but durable items go to Linear)
- How do we prevent duplication between Linear and task graph? (Scope rule: Linear = WHAT, task graph = HOW)

---

## 4. Work Breakdown

### Phase 1: Linear Workspace Optimization

| # | Task | Details |
|---|------|---------|
| 1.1 | **Audit existing workspace** | Use MCP to list all teams, projects, labels, workflow states. Document current state. |
| 1.2 | **Review & triage existing issues** | EM-128 through EM-191+. Each one: still relevant? Close stale ones. Update descriptions for current repo state. |
| 1.3 | **Design team/project structure** | One team vs multiple? Project per domain (rooms, finance, ops, infra)? |
| 1.4 | **Configure workflow states** | Optimal state machine: Triage → Backlog → Todo → In Progress → In Review → Done → Cancelled |
| 1.5 | **Design label taxonomy** | Domain labels (rooms, finance, ops, infra), type labels (bug, feature, chore, audit), source labels (agent-created, omar-created) |
| 1.6 | **Configure cycles** | 1-week or 2-week? Auto-rollover? |
| 1.7 | **Enable Triage Intelligence** | Business plan feature. Configure for agent-created issues. |
| 1.8 | **Set up initiatives** | Map to current strategic goals (data consolidation, governance, scaffold, etc.) |

### Phase 2: Agent Conventions & Documentation

| # | Task | Details |
|---|------|---------|
| 2.1 | **Write Linear conventions for AGENTS.md** | When to create issues, what fields are required, naming conventions, status update rules |
| 2.2 | **Write task graph scoping rule for rules.md** | Linear = durable work items, TaskCreate = session-local execution steps |
| 2.3 | **Update CLAUDE.md / AGENTS.md** | Replace Open Loops with "See Linear". Remove TASKS.md references. Add Linear workflow. |
| 2.4 | **Document branch naming** | `{type}/EM-{N}-{description}` (e.g., `fix/EM-42-billing-rates`) |
| 2.5 | **Document commit conventions** | Include Linear ID: `fix(billing): correct rate calculation [EM-42]` |

### Phase 3: Skills & Agents

| # | Task | Details |
|---|------|---------|
| 3.1 | **Create /linear skill** | Wraps common Linear MCP operations. Quick issue creation, status update, list my issues, cycle report. |
| 3.2 | **Create linear-agent sub-agent** | Specialized agent for Linear operations. Can be delegated to for bulk issue management, triage, cycle planning. |
| 3.3 | **Add Linear MCP to Gemini CLI** | `gemini mcp add linear --transport http https://mcp.linear.app/mcp`. Test authentication. |
| 3.4 | **Create /issue skill** | Quick shorthand: `/issue Fix billing rate mismatch` → creates Linear issue with smart defaults |

### Phase 4: Migration & Integration

| # | Task | Details |
|---|------|---------|
| 4.1 | **Migrate audit backlog to Linear** | The 3 directory triage items (212 files) become Linear issues with proper labels |
| 4.2 | **Migrate AGENTS.md Open Loops** | Each open loop becomes a Linear issue |
| 4.3 | **Migrate pending tasks from MEMORY.md** | Each pending task becomes a Linear issue |
| 4.4 | **Migrate handoff open items** | Review all handoff files, extract durable items into Linear issues |
| 4.5 | **Deprecate TASKS.md** | Archive and remove references |
| 4.6 | **Update /repo-bootstrap scaffold** | New repos get Linear integration by default |

### Phase 5: Verification & Testing

| # | Task | Details |
|---|------|---------|
| 5.1 | **End-to-end test: Claude creates issue via MCP** | Verify create → update → comment → close flow |
| 5.2 | **End-to-end test: Gemini creates issue via MCP** | Same flow in Gemini CLI |
| 5.3 | **Test GitHub sync** | Create issue in Linear → verify it links when PR references ID |
| 5.4 | **Test task graph + Linear integration** | Session picks Linear issue → creates task graph → updates Linear on completion |
| 5.5 | **Audit: zero scattered tracking** | Verify no work items remain in markdown files |

---

## 5. Existing Issues to Review

Issues found referenced in the codebase (may be stale — repo changed significantly):

| Issue | Description | Likely Status |
|-------|-------------|---------------|
| EM-191 | Handoff item | Review |
| EM-155 | Direct booking channel (strategic initiative) | Likely still relevant |
| EM-154 | AI agent for reservation management | Review |
| EM-150 | Finalize reservation room 11 | Likely completed |
| EM-149 | Configure HotelRunner prices for all rooms | Review |
| EM-146 | Scout HotelRunner Developer API capabilities | Review |
| EM-143 | Property type discrepancy (Booking.com) | Review |
| EM-142 | Obtain HotelRunner Admin Access for Omar | Likely completed |
| EM-135 | Upload Room 12 photos to HotelRunner | Likely completed |

**Action**: Use Linear MCP `list_issues` to get ALL active issues. Review each one with Omar. Close stale ones, update current ones, create missing ones.

---

## 6. Skills and Agents Needed

### Skills to Create
1. **`/linear`** — Quick Linear operations (list issues, create issue, update status, cycle report)
2. **`/issue`** — Shorthand issue creation with smart defaults
3. **`/triage`** — Review and categorize agent-created issues in Linear triage queue

### Agents to Create
1. **`linear-agent`** — Specialized sub-agent for Linear operations. Delegated to for:
   - Bulk issue creation/update
   - Cycle planning and review
   - Issue triage and categorization
   - Backlog grooming
   - Status reporting

### Existing Skills to Update
1. **`/repo-bootstrap`** — Add Linear project creation to scaffold workflow
2. **`/start`** — Add "read Linear issues" to session start routine
3. **`/end`** — Add "update Linear issues" to session end routine
4. **`/checkpoint`** — Include Linear status update

---

## 7. Scaffold Integration

When `/repo-bootstrap` creates a new project, it should:
1. Create a Linear project in the `el-mountassir` workspace
2. Create default labels for the new project
3. Configure GitHub integration for the new repo
4. Add Linear conventions to the new repo's AGENTS.md
5. Set up branch naming convention with project-specific prefix

---

## 8. Pending Items Inventory

### Critical (39 items total across all sources)

**Blockers (2)**:
- Fix Gemini delegation enforcement (#29) — hooks installed but end-to-end test needed
- Integration test: skill-suggester.py (#26) — blocked by #29

**High Priority (6)**:
- /decide governance format (#24) — blocks GitHub Template Repos
- GitHub Template Repos (#25) — blocked by #24
- Language audit (#30) — scan for French text
- Edit-over-Write hook test (#31) — hook installed, needs e2e test
- Archive/lifecycle system design (#32)
- **LINEAR MIGRATION** (this handoff)

**Medium (18)**: Facility data hardening, finance validation, directory triage (212 files), etc.

**Low (13)**: Legacy booking tasks, API exploration, template creation

### First Items for Linear (after workspace setup)
1. The 3 directory triage items (audit backlog): `~/omar/operations/productivity/audit-backlog-triage.md`
2. All Open Loops from AGENTS.md
3. All pending tasks from MEMORY.md
4. Open items from handoff files

---

## 9. Research Files Produced

All in `~/omar/knowledge/research/productivity/`:

| File | Content | Lines |
|------|---------|-------|
| `backlog-tool-decision.md` | /decide evaluation v2 (corrected) — Linear wins 8.675 vs GH 7.225 | ~220 |
| `linear-mcp-deep-dive.md` | Comprehensive MCP research: 40 tools, Claude+Gemini setup, limitations, changelog | ~810 |
| `linear-agent-integration.md` | Linear CLI/API/SDK research, pricing, automation capabilities | ~750 |
| `gh-cli-linear-sync.md` | GitHub-Linear sync behavior: primary direction, opt-in features, workflow | ~235 |
| `github-issues-agent-integration.md` | GitHub Issues research: gh CLI, Projects v2, MCP, Actions, rate limits | ~680 |
| `linear-workspace-setup-best-practices.md` | Workspace structure, labels, cycles, triage, agent conventions | NEW |

---

## 10. Open Questions for Omar

These should be resolved at session start before executing:

1. **Team structure**: Keep single "El Mountassir" team, or create separate teams per project (Villa Thaifa, LHCM-OS, etc.)?
2. **Issue prefix**: Keep `EM` or switch to project-specific (e.g., `VT` for Villa Thaifa)?
3. **Cycle duration**: 1-week or 2-week sprints?
4. **Existing issues**: Bulk close stale ones, or review each individually?
5. **Task graph scoping**: Does the proposed Linear=WHAT, TaskCreate=HOW model make sense?
6. **Gemini MCP**: Set up in this session or defer?
7. **Skill priority**: `/linear` skill first, or workspace setup first?

---

## 11. Session Entry Checklist

When starting the Linear migration session:

```
[ ] Read this file completely
[ ] Read backlog-tool-decision.md (the approved decision)
[ ] Use Linear MCP to list current workspace state (teams, projects, issues, labels)
[ ] Review existing issues with Omar (close stale, update current)
[ ] Resolve open questions (section 10)
[ ] Execute Phase 1 (workspace optimization) with Omar's input
[ ] Execute Phase 2 (conventions) — update AGENTS.md, rules.md
[ ] Execute Phase 3 (skills & agents) — create /linear skill, linear-agent
[ ] Execute Phase 4 (migration) — move all backlog items to Linear
[ ] Execute Phase 5 (testing) — verify end-to-end flows
[ ] Update MEMORY.md with final state
[ ] Commit and push all changes
```

---

## Dependencies

```
Workspace audit (1.1) → Design decisions (1.3-1.8) → Configure (apply decisions)
                      → Issue review (1.2) → Migration (4.1-4.4)
Conventions (2.1-2.5) → Skills (3.1-3.4) → Scaffold update (4.6)
All of above → Testing (5.1-5.5) → Done
```

**Estimated scope**: This is a FULL SESSION initiative. Do not rush. Quality > speed.
