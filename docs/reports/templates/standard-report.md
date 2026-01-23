# Template: Standard Report

> **Purpose**: General purpose report template for most agent operations
> **Usage**: Copy this template and fill in the relevant sections
> **Location**: `/docs/reports/templates/standard-report.md`

---

## Frontmatter Template

```yaml
---
title: "Report Title: Brief Description"
author: "agent-name"
date: "YYYY-MM-DD"
version: "1.0.0"
category: "audit|agents|operations|investigations"
tags: ["tag1", "tag2", "tag3"]
status: "draft|final"
duration: "X minutes"
related_tasks:
  - "TASK-XXX"
  - "TASK-YYY"
related_reports:
  - "path/to/related-report.md"
---
```

---

## Report Structure

### 1. Header

```markdown
# [TITLE]

**Date**: YYYY-MM-DD
**Agent**: agent-name
**Duration**: X minutes
**Status**: ✅ Success / ❌ Failure / ⚠️ Partial
**Version**: 1.0.0
```

### 2. Executive Summary

**Purpose**: Brief overview (2-3 sentences) of what was done and the outcome.

```markdown
## 📋 Résumé

<Brief overview of the operation, findings, or results>
```

**Example**:

> Système d'agents Villa Thaifa complètement cohérent avec 23 agents, 100% frontmatter standardisé, Phase 0 complétée avec succès. Score système: 9.5/10 (S-TIER).

### 3. Context & Objective

**Purpose**: Explain WHY this operation was performed.

```markdown
## 🎯 Contexte & Objectif

### Contexte
<Background information>

### Objectif
<What was to be achieved>
```

**Example**:

> **Contexte**: Suite à l'audit catastrophique du 17 janvier 2026 (Score: 3.33/10), une réparation systémique critique est requise.
>
> **Objectif**: Auditer tous les agents existants pour établir la vérité sur le système et identifier les incohérences.

### 4. Actions Performed

**Purpose**: List all steps taken during the operation.

```markdown
## ⚙️ Actions Effectuées

- [x] Action 1 completed
- [x] Action 2 completed
- [x] Action 3 completed
- [ ] Action 4 pending (if applicable)
```

**Best Practices**:
- Use atomic checkboxes (one action per checkbox)
- Mark completed actions with `[x]`
- Mark pending/incomplete actions with `[ ]`
- Group related actions together

### 5. Results & Findings

**Purpose**: Present the data, findings, or outcomes.

```markdown
## 📊 Résultats

### Quantitative Results

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Metric 1 | 85% | 90% | ⚠️ |
| Metric 2 | 22 | 22 | ✅ |

### Qualitative Findings

1. **Finding 1**: Description...
   - **Impact**: High/Medium/Low
   - **Recommendation**: Action to take

2. **Finding 2**: Description...
   - **Impact**: High/Medium/Low
   - **Recommendation**: Action to take
```

### 6. Problems & Blockers

**Purpose**: Document any issues encountered.

```markdown
## 🚧 Problèmes Rencontrés

### Problem 1
- **Description**: What went wrong
- **Severity**: Critical/High/Medium/Low
- **Resolution**: How it was fixed (or "Unresolved")
- **Impact**: Effect on timeline or results

### Problem 2 (if any)
...
```

**If no problems**:

```markdown
## 🚧 Problèmes Rencontrés

✅ **Aucun problème rencontré**
```

### 7. Recommendations

**Purpose**: Next steps and improvements.

```markdown
## 💡 Recommandations

### Immediate (P0 - Critical)
1. **Action**: Specific action
   - **Reason**: Why this is critical
   - **Owner**: Who should do it
   - **Deadline**: When it should be done

### Short-term (P1 - High)
1. **Action**: Specific action
   - **Reason**: Why this is important
   - **Owner**: Who should do it

### Long-term (P2 - Medium)
1. **Action**: Specific action
   - **Reason**: Nice to have
   - **Owner**: Who should do it
```

### 8. Appendices (Optional)

**Purpose**: Additional data, logs, or references.

```markdown
## 📎 Annexes

### Appendix A: Detailed Data
<Raw data, tables, etc.>

### Appendix B: Related Files
- `/path/to/file1.md`
- `/path/to/file2.md`

### Appendix C: References
- [Link 1](URL)
- [Link 2](URL)
```

---

## Complete Example

Here's a complete example report using this template:

```markdown
# Audit Report: Agent System Reality Check

**Date**: 2026-01-17
**Agent**: auditor
**Duration**: 15 minutes
**Status**: ✅ Success
**Version**: 1.0.0

---

## 📋 Résumé

Système d'agents Villa Thaifa avec **23 agents cohérents**, **100% frontmatter standardisé**, **0 agents orphelins** et **0 agents fantômes**. Score système actuel: **9.5/10 (S-TIER)**.

---

## 🎯 Contexte & Objectif

### Contexte
Suite à l'audit catastrophique du 17 janvier 2026 (Score: 3.33/10), une réparation systémique critique du système d'agents est requise avant toute autre feature development.

### Objectif
Auditer tous les agents existants dans `.claude/agents/` pour établir la vérité sur le système et identifier les incohérences entre:
- Fichiers physiques (réalité)
- `registry.md` (documentation)
- `AGENTS.md` (gouvernance)

---

## ⚙️ Actions Effectuées

- [x] Scanné tous les fichiers dans `.claude/agents/`
- [x] Vérifié l'existence de chaque agent listé dans registry.md
- [x] Vérifié l'existence de chaque agent listé dans AGENTS.md
- [x] Analysé le format frontmatter de chaque agent
- [x] Comparé les trois sources de vérité
- [x] Généré matrice d'audit complète

---

## 📊 Résultats

### Agents Existants (22)

| # | Agent | Fichier | Registry | AGENTS.md | Format |
|---|-------|---------|----------|-----------|--------|
| 1 | auditor | ✅ | ❌ | ✅ | Complet |
| 2 | platform-validator | ✅ | ✅ | ❌ | Complet |
... [continue table]

### Incohérences Identifiées

1. **6 Agents Orphelins**: Existents mais NON listés dans registry.md
   - auditor, decision-evaluator, html-report-generator, smart-contract-auditor, translation-agent, security-auditor
   - **Impact**: HIGH - Capacités cachées non découvrables

2. **7 Agents Fantômes**: Listés dans AGENTS.md mais N'EXISTENT PAS
   - legacy-rescuer, feature-dev, bug-hunter, performance-optimizer, security-scanner, dependency-manager, code-reviewer
   - **Impact**: HIGH - Documentation trompeuse

3. **Format Frontmatter Unifié**: Standard complet pour tous 23 agents
   - **Impact**: POSITIVE - Cohérence parfaite ✅

### Score Système

| Dimension | Score | Status |
|-----------|-------|--------|
| Agent System | 6.5/10 | ❌ C-TIER |
| Knowledge Base | 2.8/10 | ❌ F-TIER |
| Documentation | 3.2/10 | ❌ F-TIER |

**Overall**: 3.33/10 (CATASTROPHIC)

---

## 🚧 Problèmes Rencontrés

✅ **Aucun problème technique rencontré**

**Note**: Les problèmes identifiés sont structurels (documentation vs réalité), pas liés à l'exécution de l'audit lui-même.

---

## 💡 Recommandations

### Immediate (P0 - Critical)

1. **Mettre à jour registry.md** avec les 6 agents orphelins
   - **Reason**: Violation SSOT (Single Source of Truth)
   - **Owner**: claude-md-agent
   - **Deadline**: Aujourd'hui

2. **Décider du sort des 7 agents fantômes**
   - **Reason**: Documentation trompeuse
   - **Owner**: decision-evaluator
   - **Deadline**: Aujourd'hui

### Short-term (P1 - High)

3. **Standardiser le format frontmatter**
   - **Reason**: Cohérence et maintenance
   - **Owner**: meta-agent
   - **Deadline**: Cette semaine

---

## 📎 Annexes

### Appendix A: Matrice Complète

[Full audit table with all 23 agents]

### Appendix B: Fichiers Modifiés

- `docs/project/standards/agents/registry.md`
- `AGENTS.md`

### Appendix C: Rapports Connexes

- `/docs/reports/current/audit/phantom-agents-decision-2026-01-17.md`

---

**Report End**

Generated by: auditor (sonnet)
Date: 2026-01-17
Version: 1.0.0
```

---

## Usage Instructions

1. **Copy this template** to your report location:
   ```bash
   cp docs/reports/templates/standard-report.md docs/reports/current/[category]/YYYY-MM-DD-[title].md
   ```

2. **Fill in frontmatter** with accurate metadata

3. **Replace placeholder sections** with actual content

4. **Use proper status indicators**:
   - ✅ Success
   - ❌ Failure
   - ⚠️ Partial/Warning
   - ⏳ In Progress
   - 🔄 Pending

5. **Save with naming convention**:
   - Format: `YYYY-MM-DD-category-agent-seq.md`
   - Example: `2026-01-17-audit-auditor-001.md`

---

**Template Version**: 1.0.0
**Last Updated**: 2026-01-17
**Maintained By**: claude-md-agent
