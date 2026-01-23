---
title: "Manifest Audit: CLAUDE.md vs GEMINI.md vs AGENTS.md - Separation of Concerns"
author: "auditor"
date: "2026-01-20"
version: "1.0.0"
category: "audit"
tags: ["documentation", "governance", "architecture", "brutal-excellence"]
status: "final"
duration: "45 minutes"
---

# Manifest Audit Report: Separation of Concerns

> **Mission**: Identify content that is COMMON (→ AGENTS.md) vs FILE-SPECIFIC (keep in CLAUDE.md/GEMINI.md)
> **Methodology**: Brutal Excellence Protocol (BEI Scoring)
> **Scope**: 3 files - CLAUDE.md, GEMINI.md, AGENTS.md

---

## Executive Summary

### Verdict

**Current State**: 🔴 **CRITICAL VIOLATION** - Massive Content Duplication & Role Confusion

**Problems Identified**:
1. **CLAUDE.md**: 682 lines - 70% is COMMON content that belongs in AGENTS.md
2. **GEMINI.md**: 32 lines - Perfect modular index BUT references files that should be in AGENTS.md
3. **AGENTS.md**: 657 lines - Contains most common content BUT missing critical pieces from CLAUDE.md

**Impact**:
- **Maintenance Hell**: Same rules documented in 2+ places
- **Divergence Risk**: Rules updated in one file but not others
- **Cognitive Load**: Agents don't know which file is authoritative
- **Violation**: Règle #5 (Documentation Spécifique) is broken

---

## 1. CLAUDE.md Analysis (682 lines)

### ✅ KEEP in CLAUDE.md (Claude Code CLI Specific)

**Total**: ~200 lines (30% of file)

| Section | Lines | Reason | Action |
|---------|-------|--------|--------|
| **Tools Available** | ~150 | Claude Code CLI specific tools (Read, Write, Bash, MCP, Jupyter, Web, Image) | ✅ KEEP |
| **Agent Invocation Examples** | ~30 | Claude-specific `claude @agent-name` syntax | ✅ KEEP |
| **MCP Integration Details** | ~20 | Claude Code CLI MCP servers (playwright, zai-mcp-server, context7, etc.) | ✅ KEEP |

**Sections to KEEP**:
```markdown
## 🔧 Tools Available
- File System Operations (Read, Write, Edit, Glob, Grep)
- Command Execution (Bash)
- Jupyter Operations
- MCP Integrations
- Web & Browser
- Image Analysis
- Planning & Tracking
- Time Operations

## How to Invoke Agents
- Using Claude Code CLI
- Examples with claude @agent-name
```

---

### 🔴 MIGRATE to AGENTS.md (Common Content)

**Total**: ~480 lines (70% of file)

| Section | Lines | Reason | Destination in AGENTS.md |
|---------|-------|--------|--------------------------|
| **Agent Registry (23 agents)** | ~150 | Common to ALL agents | `## 🤖 Agent Registry` |
| **Critical Rules (13 rules)** | ~200 | Common governance | Already in AGENTS.md, remove duplicate |
| **Documentation Structure** | ~50 | Project architecture | Already in `docs/architecture/project_structure.md` |
| **Reporting System** | ~80 | Common to ALL agents | Already in AGENTS.md Règle #6 |

**Sections to MIGRATE**:
```markdown
❌ REMOVE from CLAUDE.md:
- ## 🚨 Critical Rules (Quick Reference)
  → Already in AGENTS.md as "## 🚨 Nouvelles Règles Critiques"

- ## 📚 Documentation Structure
  → Already covered by AGENTS.md "## 📌 References"

- ## 📊 Reporting System
  → Already in AGENTS.md Règle #6

- ## 🤖 Agents Spécialisés Disponibles (Full Table)
  → Should be in AGENTS.md "## 🤖 Agent Registry"
```

---

### 📋 CLAUDE.md RECOMMENDED STRUCTURE (After Cleanup)

```markdown
# CLAUDE.md - Claude Code CLI Context

> **Role**: Specialized Agent Interface for Claude Code CLI
> **Master Manifest**: AGENTS.md (for governance, rules, agent registry)
> **Purpose**: Document Claude Code CLI specific tools and integrations

## ⚡ Quick Start

1. Read AGENTS.md (governance, rules, agent registry)
2. Read GEMINI.md (strategic vision, architecture)
3. Check this file for Claude Code CLI specific tools

## 🔧 Tools Available

### File System Operations
[Table of tools with descriptions]

### Command Execution
[Bash tool details]

### MCP Integrations
[MCP servers and capabilities]

### Web & Browser
[WebSearch, Browser automation]

### Image Analysis
[zai-mcp-server capabilities]

## 🤖 How to Invoke Agents

```bash
# Using Claude Code CLI
claude @agent-name "prompt"

# Examples
claude @auditor "Audit /src/app/admin/ directory"
```

## 📚 References

- **Governance**: AGENTS.md (master manifest)
- **Vision**: GEMINI.md (strategic brain)
- **Agent Registry**: AGENTS.md ## 🤖 Agent Registry
- **Critical Rules**: AGENTS.md ## 🚨 Nouvelles Règles Critiques

---

**Total Recommended Lines**: ~250 lines (down from 682)
```

---

## 2. GEMINI.md Analysis (32 lines)

### ✅ VERDICT: PERFECT - No Changes Needed

**Current State**: 🟢 **EXCELLENT** (Modular Index Pattern)

**Structure**:
```markdown
## 1. Governance (The Laws)
@docs/leadership/TEAM.md
@docs/leadership/PRINCIPLES.md
@docs/leadership/AGENT_ROLES.md

## 2. Standards (The Code)
@docs/project/standards/BEHAVIORAL_HARD_RULES.md
@docs/project/standards/PROTOCOL_OF_TRUTH.md
@docs/project/standards/DOD_DOR.md

## 3. Project Reality (Villa Thaifa)
- **Roadmap**: @ROADMAP.md
- **Active Tasks**: @tasks/active.md
- **Agents**: @AGENTS.md

## 4. CTO Directives (Legacy Preserved)
> **PRIME DIRECTIVE**: Tu es un CTO. Tu ORCHESTRES.
```

**Why Perfect**:
- ✅ Pure hyperlink index (no duplication)
- ✅ Gemini-specific CTO directive (kept as legacy)
- ✅ References external files (DRY principle)
- ✅ Clear separation of concerns

**Action**: ✅ **KEEP AS-IS**

**Note**: The referenced files (TEAM.md, PRINCIPLES.md, AGENT_ROLES.md, etc.) contain Gemini/Antigravity specific content (RACI matrix, Antigravity philosophy). This is correct - they should NOT be in AGENTS.md.

---

## 3. AGENTS.md Analysis (657 lines)

### ✅ Current Content (Correct)

| Section | Status | Notes |
|---------|--------|-------|
| **🚨 Nouvelles Règles Critiques (Règles #1-13)** | ✅ CORRECT | Common governance |
| **📌 References** | ✅ CORRECT | Links to TEAM.md, project_structure.md, code_of_conduct.md |
| **🚀 Active Plans & Status** | ✅ CORRECT | Project state |

### 🔴 MISSING Content (Should be added)

| Missing Section | Source | Priority | Rationale |
|-----------------|--------|----------|-----------|
| **🤖 Agent Registry (23 agents)** | CLAUDE.md | 🔴 P0 CRITICAL | ALL agents need to know available agents |
| **📊 Standardized Frontmatter Schema** | CLAUDE.md (implicit) | 🟡 P1 HIGH | Common standard for all agent configs |
| **🔄 Agent Capabilities Schema** | CLAUDE.md (implicit) | 🟡 P1 HIGH | Common standard for agent metadata |

---

### 📋 AGENTS.md RECOMMENDED ADDITIONS

```markdown
## 🤖 Agent Registry (23 Agents Deployed)

> **Purpose**: Central registry of all specialized agents
> **Maintenance**: Updated via meta-agent when new agents are created
> **Usage**: Reference this table to select appropriate agent for task

| Agent | Role | Domain | Model | Use Cases |
|-------|------|--------|-------|-----------|
| **context-builder** | Construction de contexte | meta/context | sonnet | Build mandatory context for agents |
| **capability-extractor** | Extraction de capabilities | meta/analysis | sonnet | Extract and document agent capabilities |
| **knowledge-interviewer** | Interviews connaissances | meta/knowledge | sonnet | Interview stakeholders for knowledge base |
| **test-runner** | Exécution de tests | quality/testing | sonnet | Run test suites, validate code |
| **dashboard-generator** | Génération de dashboards | visualization/monitoring | sonnet | Create monitoring dashboards |
| **auditor** | Brutal excellence standards | methodology/audit | sonnet | Code reviews, documentation audits |
| **platform-validator** | Pre-flight checks | technical/validation | sonnet | Validate data BEFORE platform operations |
| **data-sync-checker** | SSOT vs platform check | technical/sync | sonnet | Compare local specs with platform state |
| **security-auditor** | Vulnerability scanning | technical/security | sonnet | Security audits, vulnerability assessment |
| **incident-reporter** | Error tracking | operations/incidents | sonnet | Document errors, create incident reports |
| **meta-agent** | Creating NEW agents | meta/generation | opus | Generate new agent configurations |
| **browser-agent** | Web scraping, UI testing | technical/automation | sonnet | Chrome automation, platform interactions |
| **research-agent** | Documentation search | meta/research | haiku | Web research for general topics |
| **claude-md-agent** | Maintaining CLAUDE.md/GEMINI.md | meta/documentation | sonnet | Update documentation files |
| **html-report-generator** | Professional HTML reports | documentation/reports | sonnet | Generate HTML reports from data |
| **smart-contract-auditor** | Smart contract audit | technical/blockchain | sonnet | Audit smart contracts |
| **decision-evaluator** | Decision analysis | business/analysis | sonnet | Analyze decisions, cost-benefit |
| **pricing-analyst** | Revenue optimization | business/pricing | sonnet | Pricing analysis, rate strategies |
| **reservation-manager** | Booking lifecycle | business/operations | sonnet | Manage reservations, operations |
| **calendar-agent** | Availability checks | technical/scheduling | sonnet | Check availability, manage calendar |
| **guest-communicator** | Message drafting | business/communication | sonnet | Draft guest messages, templates |
| **translation-agent** | Translation with cultural notes | business/localization | sonnet | Translate content with context |
| **documentation-manager** | Gestion documentation | meta/documentation | sonnet | Manage all markdown documentation |

### Agent Selection Guide

**For Code Quality**:
- Use `auditor` for brutal excellence evaluation
- Use `security-auditor` for security-specific reviews

**For Platform Operations**:
- ALWAYS use `platform-validator` FIRST (before any platform action)
- Then use `browser-agent` for execution
- Then use `data-sync-checker` to verify SSOT

**For Documentation**:
- Use `claude-md-agent` for markdown updates (CLAUDE.md, GEMINI.md)
- Use `documentation-manager` for ALL other markdown files
- Use `html-report-generator` for professional reports
- Use `research-agent` for general research (LOW criticality only)

**For New Agents**:
- Use `meta-agent` to create new specialized agents
- Follow standards in `collective/ai/standards/`

## 📋 Agent Configuration Standards

### Frontmatter Schema

All agent configurations MUST include:

```yaml
---
name: "agent-name"
role: "Brief role description"
domain: "category/subcategory"
model: "sonnet|opus|haiku"
version: "1.0.0"
capabilities:
  - "capability-1"
  - "capability-2"
use_cases:
  - "Use case 1"
  - "Use case 2"
dependencies:
  - "agent-name-1"
  - "agent-name-2"
---
```

### Capabilities Schema

See `docs/project/standards/agents/capabilities.md` for complete schema.
```

---

## 4. Referenced Files Analysis

### Files Referenced by GEMINI.md

| File | Purpose | Correct Location? | Action |
|------|---------|------------------|--------|
| **docs/leadership/TEAM.md** | RACI matrix, roles (Antigravity-specific) | ✅ YES | Keep (Gemini-specific) |
| **docs/leadership/PRINCIPLES.md** | Antigravity philosophy (Augmentation, Marathon, Kaizen) | ✅ YES | Keep (Gemini-specific) |
| **docs/leadership/AGENT_ROLES.md** | RACI, Antigravity vs Claude roles | ✅ YES | Keep (Gemini-specific) |
| **docs/project/standards/BEHAVIORAL_HARD_RULES.md** | No Assumption, Tool Feedback, Marathon rules | 🟡 PARTIAL | Common standards, should be referenced in AGENTS.md |
| **docs/project/standards/PROTOCOL_OF_TRUTH.md** | Verification checklist, Reflexion | 🟡 PARTIAL | Common standards, should be referenced in AGENTS.md |
| **docs/project/standards/DOD_DOR.md** | Definition of Done/Ready | 🟡 PARTIAL | Common standards, should be referenced in AGENTS.md |

**Recommendation**:
- Keep Gemini-specific philosophy files (TEAM.md, PRINCIPLES.md, AGENT_ROLES.md) under `docs/leadership/`
- Add references to BEHAVIORAL_HARD_RULES.md, PROTOCOL_OF_TRUTH.md, DOD_DOR.md in AGENTS.md as common standards

---

## 5. Migration Plan

### Phase 1: AGENTS.md Enhancement (P0 - CRITICAL)

**TASK-MIGRATE-001**: Add Agent Registry to AGENTS.md

```markdown
- [ ] Copy agent registry table from CLAUDE.md
- [ ] Add to AGENTS.md as "## 🤖 Agent Registry"
- [ ] Add Agent Selection Guide
- [ ] Verify all 23 agents are listed
- [ ] Remove duplicate from CLAUDE.md
```

**TASK-MIGRATE-002**: Add Common Standards References to AGENTS.md

```markdown
- [ ] Add section "## 📋 Common Standards"
- [ ] Reference BEHAVIORAL_HARD_RULES.md
- [ ] Reference PROTOCOL_OF_TRUTH.md
- [ ] Reference DOD_DOR.md
- [ ] Add frontmatter schema section
```

### Phase 2: CLAUDE.md Cleanup (P0 - CRITICAL)

**TASK-CLEANUP-001**: Remove Duplicate Content from CLAUDE.md

```markdown
- [ ] Remove "Critical Rules" section (already in AGENTS.md)
- [ ] Remove "Documentation Structure" (already in project_structure.md)
- [ ] Remove "Reporting System" (already in AGENTS.md Règle #6)
- [ ] Remove agent registry table (move to AGENTS.md)
- [ ] Keep only Claude Code CLI specific tools
- [ ] Add references to AGENTS.md for governance
```

**TASK-CLEANUP-002**: Restructure CLAUDE.md

```markdown
- [ ] Create new structure (see recommended structure above)
- [ ] Add "Read AGENTS.md first" directive
- [ ] Focus on tools and MCP integrations
- [ ] Keep agent invocation examples
- [ ] Reduce from 682 lines to ~250 lines
```

### Phase 3: Verification (P1 - HIGH)

**TASK-VERIFY-001**: Validate Separation of Concerns

```markdown
- [ ] Verify no duplication between CLAUDE.md and AGENTS.md
- [ ] Verify GEMINI.md still references correct files
- [ ] Verify all agents can find required information
- [ ] Test with new Claude instance (context loading)
```

---

## 6. Brutal Excellence Scoring

### Current State (Before Migration)

| Metric | Score | Reasoning |
|--------|-------|-----------|
| **Architecture (A)** | 3/10 | 70% content duplication, unclear separation of concerns |
| **Reliability (R)** | 4/10 | Risk of divergence when updating one file but not others |
| **Elegance (E)** | 3/10 | 682 lines in CLAUDE.md vs needed ~250 lines |
| **Effort (F)** | 2/10 | Copy-paste approach, minimal thought to DRY principle |
| **Agent-Readiness (M)** | 5/10 | Frontmatter exists but content is scattered |

**Brutal Excellence Index (BEI)**: **3.4/10** = **17%**

**Tier**: **F (UNACCEPTABLE)**
**Status**: **REJECTED**

### The Sins Committed

**Sin #1: Content Duplication**
- **Violation**: DRY principle (Don't Repeat Yourself)
- **Evidence**: Critical Rules documented in both CLAUDE.md and AGENTS.md
- **Penance**: Consolidate all common content in AGENTS.md, reference from CLAUDE.md

**Sin #2: Unclear Separation of Concerns**
- **Violation**: Règle #5 (Documentation Spécifique)
- **Evidence**: CLAUDE.md contains 70% common content that should be in AGENTS.md
- **Penance**: Create clear boundaries - CLAUDE.md = tools, AGENTS.md = governance

**Sin #3: Maintenance Hell**
- **Violation**: Anti-Négligence Protocol (ZERO TOLÉRANCE)
- **Evidence**: Updating rules requires editing 2+ files
- **Penance**: Single Source of Truth - AGENTS.md for all governance

**Sin #4: Cognitive Overload**
- **Violation**: Golden Paths (easy = correct)
- **Evidence**: 682 lines to read vs needed 250 lines
- **Penance**: Ruthless reduction - keep only Claude-specific content

**Sin #5: Missing Agent Registry in AGENTS.md**
- **Violation**: Common resource not in common manifest
- **Evidence**: 23 agents listed only in CLAUDE.md
- **Penance**: Move registry to AGENTS.md where ALL agents can see it

### Target State (After Migration)

| Metric | Target | How We Get There |
|--------|--------|------------------|
| **Architecture (A)** | 9/10 | Clear separation: AGENTS.md = governance, CLAUDE.md = tools |
| **Reliability (R)** | 9/10 | Single Source of Truth for common content |
| **Elegance (E)** | 9/10 | CLAUDE.md reduced to 250 lines (clean, focused) |
| **Effort (F)** | 8/10 | Thoughtful restructuring with DRY principle |
| **Agent-Readiness (M)** | 9/10 | Agent registry in AGENTS.md, clear references |

**Target BEI**: **8.8/10** = **88%**
**Target Tier**: **B (GOOD)** - Not S-Tier because still room for optimization
**Target Status**: **PROMOTED** (if B+ or above, but aiming for A)

---

## 7. Recommendations Summary

### IMMEDIATE Actions (P0 - Execute NOW)

1. **AGENTS.md**:
   - ✅ ADD: Agent Registry (23 agents table)
   - ✅ ADD: Agent Selection Guide
   - ✅ ADD: Common Standards References (BEHAVIORAL_HARD_RULES, PROTOCOL_OF_TRUTH, DOD_DOR)
   - ✅ ADD: Frontmatter Schema section

2. **CLAUDE.md**:
   - ❌ REMOVE: Critical Rules section (duplicate of AGENTS.md)
   - ❌ REMOVE: Documentation Structure (covered by project_structure.md)
   - ❌ REMOVE: Reporting System (covered by AGENTS.md Règle #6)
   - ❌ REMOVE: Agent registry table (moving to AGENTS.md)
   - ✅ KEEP: Tools Available (Claude Code CLI specific)
   - ✅ KEEP: How to Invoke Agents (Claude-specific syntax)
   - ✅ ADD: "Read AGENTS.md first" directive
   - 🎯 TARGET: Reduce from 682 to ~250 lines

3. **GEMINI.md**:
   - ✅ NO CHANGES - Already perfect modular index

### HIGH PRIORITY (P1 - Next Week)

1. **Validation**:
   - Test with new Claude instance (fresh context)
   - Verify no broken references
   - Verify agents can find all needed information

2. **Documentation**:
   - Update AGENTS.md to reference common standards
   - Create capability schema documentation
   - Update project_structure.md if needed

### MEDIUM PRIORITY (P2 - Future)

1. **Optimization**:
   - Consider creating `docs/project/standards/agents/registry.md` for full agent details
   - Keep summary table in AGENTS.md, link to full registry
   - Automate registry updates via meta-agent

---

## 8. Final Verdict

### Current State

**Tier**: F (UNACCEPTABLE)
**Score**: 17%
**Status**: REJECTED

### Critical Issues

1. 🔴 **70% content duplication** in CLAUDE.md
2. 🔴 **Agent Registry missing** from AGENTS.md
3. 🔴 **Unclear separation** of concerns (Règle #5 violation)
4. 🔴 **Maintenance hell** (update in 2+ places)
5. 🔴 **Cognitive overload** (682 lines vs needed 250)

### The Penance

**Execute Migration Plan Phase 1-3**:
- Add Agent Registry to AGENTS.md (TASK-MIGRATE-001)
- Add Common Standards to AGENTS.md (TASK-MIGRATE-002)
- Remove duplicates from CLAUDE.md (TASK-CLEANUP-001)
- Restructure CLAUDE.md to focus on tools (TASK-CLEANUP-002)
- Verify separation of concerns (TASK-VERIFY-001)

**Success Criteria**:
- ✅ AGENTS.md = Single Source of Truth for governance
- ✅ CLAUDE.md = Claude Code CLI tools only (~250 lines)
- ✅ GEMINI.md = Modular index (no changes)
- ✅ 0% content duplication
- ✅ Clear separation of concerns (Règle #5 satisfied)

**Target Score**: 88% (Tier B - GOOD, potentially A with polish)

---

**Generated**: 2026-01-20
**Auditor**: claude-sonnet-4-5 (Brutal Excellence Protocol)
**Duration**: 45 minutes
**Next Action**: Execute TASK-MIGRATE-001 (Add Agent Registry to AGENTS.md)
