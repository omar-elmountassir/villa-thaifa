# Template: Agent Operation Report

> **Purpose**: Report template for agent operations (executions, workflows, handovers)
> **Usage**: For all specialized agents when reporting on operations
> **Location**: `/docs/reports/templates/agent-report.md`

---

## Frontmatter Template

```yaml
---
title: "Agent Report: [Operation Name]"
author: "agent-name"
date: "YYYY-MM-DD"
version: "1.0.0"
category: "agents"
tags: ["agent-operation", "agent-name", "operation-type"]
status: "draft|final"
duration: "X minutes"
operation:
  type: "creation|modification|execution|validation|investigation"
  scope: "description of what was done"
  success: true|false|partial
outcome:
  result: "success|failure|partial"
  artifacts:
    - "path/to/artifact1"
    - "path/to/artifact2"
  metrics:
    - name: "Metric Name"
      value: "X"
      unit: "count|percentage|ms"
related_tasks:
  - "TASK-XXX"
next_actions:
  - "action1"
  - "action2"
---
```

---

## Agent Report Structure

### 1. Header

```markdown
# Agent Report: [Operation Name]

**Date**: YYYY-MM-DD
**Agent**: agent-name
**Model**: sonnet/opus/haiku
**Duration**: X minutes
**Operation Type**: creation/modification/execution/validation
**Status**: ✅ Success / ❌ Failure / ⚠️ Partial
**Version**: 1.0.0
```

### 2. Executive Summary

```markdown
## 📋 Résumé

<One paragraph summary of what was done>

**Operation**: [Type of operation]
**Outcome**: [Result]
**Artifacts Created**: [Count]
**Next Steps**: [Brief mention]
```

### 3. Operation Context

```markdown
## 🎯 Contexte de l'Opération

### Purpose
<Why this operation was performed>

### Input/Trigger
<What triggered this operation>
- **Task**: TASK-XXX
- **Request**: [User request or automated trigger]

### Objectifs
- [ ] Objective 1 ✅/❌
- [ ] Objective 2 ✅/❌
- [ ] Objective 3 ✅/❌
```

### 4. Execution Details

```markdown
## ⚙️ Détails d'Exécution

### Steps Performed

1. **Step 1: [Name]**
   - **Status**: ✅ Success / ❌ Failed / ⏳ Skipped
   - **Duration**: X minutes
   - **Details**: What was done
   - **Output**: Result or artifact

2. **Step 2: [Name]**
   - **Status**: ✅ Success / ❌ Failed / ⏳ Skipped
   - **Duration**: X minutes
   - **Details**: What was done
   - **Output**: Result or artifact

### Tools Used

| Tool | Purpose | Result |
|------|---------|--------|
| Read | Read file X | Success |
| Write | Created file Y | Success |
| Bash | Executed command Z | Success |

### Dependencies

| Dependency | Type | Status | Notes |
|------------|------|--------|-------|
| Agent X | Agent | ✅ | Completed successfully |
| File Y | File | ✅ | Read successfully |
| Service Z | External | ❌ | Timeout (retried) |
```

### 5. Artifacts & Deliverables

```markdown
## 📦 Artefacts & Livrables

### Files Created

| File | Path | Purpose | Size |
|------|------|---------|------|
| filename.md | /path/to/file | Description | X KB |
| config.json | /path/to/file | Description | X KB |

### Files Modified

| File | Path | Changes | Lines Changed |
|------|------|---------|---------------|
| filename.md | /path/to/file | Description | +15/-5 |

### Data Generated

- **Data Set 1**: Description
  - **Format**: JSON/CSV/Markdown
  - **Records**: X rows/items
  - **Location**: /path/to/data

### Reports Generated

- [Report 1](path/to/report.md) - Description
- [Report 2](path/to/report.md) - Description
```

### 6. Metrics & Performance

```markdown
## 📊 Métriques & Performance

### Operation Metrics

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Files processed | 25 | 25 | ✅ |
| Errors encountered | 0 | 0 | ✅ |
| Warnings | 2 | <5 | ✅ |
| Execution time | 5m 30s | <10m | ✅ |

### Quality Metrics

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Success rate | 100% | >95% | ✅ |
| Coverage | 100% | >90% | ✅ |
| Accuracy | 100% | >95% | ✅ |
```

### 7. Issues Encountered

```markdown
## 🚧 Problèmes Rencontrés

### Issue 1 (if any)
- **Description**: What went wrong
- **Severity**: Critical/High/Medium/Low
- **Impact**: Effect on operation
- **Resolution**: How it was fixed
- **Duration**: X minutes

**Example**:

### Issue: Missing file
- **Description**: Required config file `/config/agent.json` not found
- **Severity**: High
- **Impact**: Could not load agent configuration
- **Resolution**: Created default config file
- **Duration**: 2 minutes

---

✅ **No issues encountered** (if no problems)
```

### 8. Decisions Made

```markdown
## 🎯 Décisions Prises

### Decision 1
- **Context**: Situation requiring decision
- **Options Considered**:
  - Option A: Description
  - Option B: Description
  - Option C: Description
- **Decision**: Option chosen
- **Rationale**: Why this option
- **Impact**: Effect on outcome

### Decision 2 (if any)
[Repeat structure]
```

### 9. Learnings & Insights

```markdown
## 💡 Apprentissages & Insights

### What Worked Well
1. **Success 1**: Description...
   - **Why it worked**: Reason
   - **Reusable pattern**: Yes/No - description

2. **Success 2**: Description...
   - **Why it worked**: Reason
   - **Reusable pattern**: Yes/No - description

### What Could Be Improved
1. **Improvement 1**: Description...
   - **How to improve**: Specific action
   - **Priority**: P0/P1/P2

2. **Improvement 2**: Description...
   - **How to improve**: Specific action
   - **Priority**: P0/P1/P2

### Discoveries
1. **Discovery 1**: New information found
   - **Impact**: Effect on project/system
   - **Action needed**: What to do with this
```

### 10. Handoff Information

```markdown
## 🤝 Handoff Information

### Current State

**Completed**:
- [x] Task 1
- [x] Task 2

**In Progress**:
- [ ] Task 3 (50% complete)
- [ ] Task 4 (started, needs X)

**Blocked**:
- [ ] Task 5 - Blocked by [reason]

### Next Agent/Session Actions

1. **Action 1**: Description
   - **Priority**: P0/P1/P2
   - **Dependencies**: What needs to be done first
   - **Estimated time**: X minutes

2. **Action 2**: Description
   - **Priority**: P0/P1/P2
   - **Dependencies**: What needs to be done first
   - **Estimated time**: X minutes

### Context Retained

**Important Context**:
- [Context point 1]
- [Context point 2]

**Files to Reference**:
- [/path/to/file1.md](/path/to/file1.md) - Description
- [/path/to/file2.md](/path/to/file2.md) - Description

### State of Related Systems

- **System 1**: Status and relevant state
- **System 2**: Status and relevant state
```

---

## Complete Example: Meta-Agent Creating New Agent

```markdown
# Agent Report: Creation of documentation-manager

**Date**: 2026-01-17
**Agent**: meta-agent
**Model**: opus
**Duration**: 8 minutes
**Operation Type**: creation
**Status**: ✅ Success
**Version**: 1.0.0

---

## 📋 Résumé

Création réussie de l'agent **documentation-manager** pour gérer tous les fichiers markdown du projet (400+ fichiers). L'agent a été créé avec le frontmatter standard complet, des capabilities détaillées, et une spécification complète.

**Operation**: Agent Creation
**Outcome**: Success
**Artifacts Created**: 2 files (agent config, specification)
**Next Steps**: Update registry, integrate with workflow

---

## 🎯 Contexte de l'Opération

### Purpose

L'agent `claude-md-agent` actuel est limité à la maintenance de `CLAUDE.md` seulement. Le projet a 400+ fichiers .md qui nécessitent une gestion plus large (audits, liens, TODOs, déduplication). Un nouvel agent spécialisé est nécessaire.

### Input/Trigger

- **Task**: TASK-RESOLVE-008, TASK-RESOLVE-009
- **Request**: "utilises meta-agent pour créer notre Documentation markdown expert! Car `claude-md-agent` n'est là que pour CLAUDE.md!"
- **Source**: Omar El Mountassir (CEO)

### Objectifs

- [x] Créer fichier agent `.claude/agents/documentation-manager.md` ✅
- [x] Définir capabilities complètes (audit, validation, maintenance, optimisation, reporting) ✅
- [x] Spécifier workflows pour chaque capability ✅
- [x] Suivre schéma frontmatter standard (10 mandatory fields) ✅
- [x] Créer document de spécification détaillée ✅

---

## ⚙️ Détails d'Exécution

### Steps Performed

1. **Step 1: Analyzed Requirements**
   - **Status**: ✅ Success
   - **Duration**: 1 minute
   - **Details**: Analysé gap entre claude-md-agent (CLAUDE.md only) et besoin réel (400+ .md files)
   - **Output**: Requirements list

2. **Step 2: Designed Agent Capabilities**
   - **Status**: ✅ Success
   - **Duration**: 2 minutes
   - **Details**: Défini 5 capabilities principales avec workflows détaillés
   - **Output**: Capability matrix

3. **Step 3: Created Agent Configuration**
   - **Status**: ✅ Success
   - **Duration**: 3 minutes
   - **Details**: Généré fichier `.claude/agents/documentation-manager.md` avec frontmatter complet
   - **Output**: `/home/omar/omar-el-mountassir/projects/clients/villa-thaifa/.claude/agents/documentation-manager.md`

4. **Step 4: Created Specification Document**
   - **Status**: ✅ Success
   - **Duration**: 2 minutes
   - **Details**: Créé spécification détaillée avec workflows, exemples, intégrations
   - **Output**: `/home/omar/omar-el-mountassir/projects/clients/villa-thaifa/docs/project/plans/documentation-manager-spec.md`

### Tools Used

| Tool | Purpose | Result |
|------|---------|--------|
| Write | Create agent config file | Success |
| Write | Create specification document | Success |
| Read | Verify frontmatter schema standard | Success |

### Dependencies

| Dependency | Type | Status | Notes |
|------------|------|--------|-------|
| frontmatter-schema.md | Standard | ✅ | Reference for format |
| registry.md | File | ✅ | Will be updated next |
| claude-md-agent | Agent | ✅ | Complementary agent |

---

## 📦 Artefacts & Livrables

### Files Created

| File | Path | Purpose | Size |
|------|------|---------|------|
| documentation-manager.md | .claude/agents/ | Agent configuration | 8.5 KB |
| documentation-manager-spec.md | docs/project/plans/ | Detailed specification | 12.3 KB |

### Key Agent Configuration

```yaml
agent_id: documentation-manager
name: Documentation Manager
version: "1.0.0"
status: active
created: "2026-01-17"
modified: "2026-01-17"
created_by: claude-opus-4.5
description: Expert for managing all markdown documentation (400+ files)
domain: meta/documentation
model: sonnet
tools: [Read, Write, Edit, Glob, Grep]
```

### Capabilities Defined

1. **Audit & Validation**: Lint frontmatter, validate links, check structure
2. **Maintenance**: Fix broken links, update metadata, enforce standards
3. **Optimization**: Deduplicate content, optimize structure, suggest improvements
4. **TODO Tracking**: Find TODOs, categorize by priority, track resolution
5. **Reporting**: Generate audit reports, maintain docs index

---

## 📊 Métriques & Performance

### Operation Metrics

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Files created | 2 | 2 | ✅ |
| Frontmatter compliance | 100% | 100% | ✅ |
| Capabilities defined | 5 | 5 | ✅ |
| Workflows specified | 5 | 5 | ✅ |
| Execution time | 8 min | <15 min | ✅ |

### Quality Metrics

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Schema compliance | 100% | 100% | ✅ |
| Documentation completeness | 100% | >95% | ✅ |
| Specification detail | High | High | ✅ |

---

## 🚧 Problèmes Rencontrés

✅ **No issues encountered**

The operation proceeded smoothly without any errors or blockers.

---

## 🎯 Décisions Prises

### Decision 1: Scope Definition

- **Context**: Determining what documentation-manager should handle vs claude-md-agent
- **Options Considered**:
  - Option A: Replace claude-md-agent entirely
  - Option B: Make claude-md-agent handle everything
  - Option C: Keep claude-md-agent for CLAUDE.md, create new agent for everything else
- **Decision**: Option C - Complementary approach
- **Rationale**: claude-md-agent is specialized and working well for CLAUDE.md. New agent handles broader scope without disrupting existing workflow.
- **Impact**: Clear separation of concerns, both agents have focused responsibilities

### Decision 2: Model Selection

- **Context**: Choosing which model to use for documentation-manager
- **Options Considered**:
  - Option A: Haiku (fast, cost-effective)
  - Option B: Sonnet (balanced)
  - Option C: Opus (highest quality)
- **Decision**: Option B - Sonnet
- **Rationale**: Documentation management requires complex analysis (link checking, deduplication) that benefits from Sonnet's capabilities, but doesn't need Opus's maximum reasoning power.
- **Impact**: Optimal cost/performance balance

---

## 💡 Apprentissages & Insights

### What Worked Well

1. **Frontmatter Schema Standard**
   - **Why it worked**: Having a clear standard made agent creation straightforward
   - **Reusable pattern**: Yes - Use this schema for all future agent creations

2. **Capability-Based Design**
   - **Why it worked**: Structuring around capabilities (not just features) clarified the agent's purpose
   - **Reusable pattern**: Yes - Use capability matrix for other meta-operations

### What Could Be Improved

1. **Automation Potential**
   - **How to improve**: Could create semi-automated agent generation script
   - **Priority**: P2 (Medium) - Nice to have but manual process works fine

2. **Integration Testing**
   - **How to improve**: Should add test invocation of new agent immediately after creation
   - **Priority**: P1 (High) - Will add to workflow

### Discoveries

1. **Documentation Gap Larger Than Expected**
   - **Impact**: Justifies creating dedicated documentation-manager agent
   - **Action needed**: Prioritize documentation cleanup in Phase 0

2. **Clear Pattern for Agent Creation**
   - **Impact**: Future agent creations will be faster
   - **Action needed**: Document pattern in meta-agent's own instructions

---

## 🤝 Handoff Information

### Current State

**Completed**:
- [x] documentation-manager agent created
- [x] Agent specification documented
- [x] Frontmatter schema compliant

**In Progress**:
- [ ] Update registry.md to include documentation-manager (next task)
- [ ] Update AGENTS.md to reference documentation-manager
- [ ] Test agent with real operation

**Blocked**:
- None

### Next Agent/Session Actions

1. **Update Registry** (TASK-RESOLVE-010)
   - **Priority**: P0 (Critical)
   - **Dependencies**: None
   - **Estimated time**: 2 minutes
   - **Agent**: claude-md-agent
   - **Details**: Add documentation-manager to registry.md, change counter 22→23

2. **Create Report Templates** (TASK-RESOLVE-012)
   - **Priority**: P0 (Critical)
   - **Dependencies**: TASK-RESOLVE-011 (directory structure)
   - **Estimated time**: 10 minutes
   - **Agent**: claude-md-agent
   - **Details**: Create 4 templates: standard, audit, agent, incident

3. **Test documentation-manager** (Future)
   - **Priority**: P1 (High)
   - **Dependencies**: After templates created
   - **Estimated time**: 15 minutes
   - **Agent**: test-runner
   - **Details**: Invoke documentation-manager on real task, validate output

### Context Retained

**Important Context**:
- This is part of Phase 0 critical repair (Score: 3.33/10 → 10/10)
- Agent system has 22 existing agents, documentation-manager is #23
- 6 orphan agents still need to be added to registry
- 5 new agents (Phase 0) need frontmatter standardization

**Files to Reference**:
- [`.claude/agents/documentation-manager.md`](.claude/agents/documentation-manager.md) - New agent config
- [`docs/project/plans/documentation-manager-spec.md`](docs/project/plans/documentation-manager-spec.md) - Full spec
- [`docs/project/standards/agents/frontmatter-schema.md`](docs/project/standards/agents/frontmatter-schema.md) - Schema standard
- [`docs/reports/current/audit/agent-audit-2026-01-17.md`](docs/reports/current/audit/agent-audit-2026-01-17.md) - Audit that triggered this

### State of Related Systems

- **Registry**: Shows 23 agents ✅
- **AGENTS.md**: Shows 23 agents ✅
- **Phase 0**: Completed (19/19 tasks) ✅
- **Agent System**: 23 agents total, 100% consistent

---

## 📊 Success Metrics

### Creation Success: ✅

- [x] Frontmatter complete (10/10 mandatory fields)
- [x] Capabilities clearly defined (5 main capabilities)
- [x] Workflows specified (5 workflows with examples)
- [x] Specification documented (12.3 KB spec doc)
- [x] Integration notes documented (claude-md-agent, auditor)

### Ready for Deployment: ✅

- [x] Follows all standards
- [x] Tools specified (Read, Write, Edit, Glob, Grep)
- [x] Model selected (sonnet)
- [x] Domain defined (meta/documentation)
- [x] Output format defined (documentation_audit_report)

---

**Report End**

Generated by: meta-agent (opus)
Date: 2026-01-17
Version: 1.0.0

**Next Report**: After registry update and template creation
```

---

## Usage Guidelines

### When to Use This Template

Use this template when:
1. An agent completes a significant operation
2. An agent is created, modified, or deprecated
3. An agent executes a complex workflow
4. Handing off work to another agent or session
5. Documenting agent performance and learnings

### Report Types

- **Creation**: New agent created, new feature added
- **Modification**: Existing agent updated, configuration changed
- **Execution**: Task completed, workflow executed
- **Validation**: Testing, verification, quality check
- **Investigation**: Root cause analysis, debugging

### Handoff Best Practices

1. **State Clarity**: Clearly document what's done vs in-progress
2. **Next Actions**: Prioritized, with dependencies
3. **Context Retention**: What the next agent/session needs to know
4. **Related Files**: Link all relevant artifacts
5. **System State**: Status of related systems/components

---

**Template Version**: 1.0.0
**Last Updated**: 2026-01-17
**Maintained By**: meta-agent
