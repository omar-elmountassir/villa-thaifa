# Template: Audit Report

> **Purpose**: Specialized template for audit operations (code, documentation, system)
> **Usage**: For auditor, security-auditor, platform-validator agents
> **Location**: `/docs/reports/templates/audit-report.md`

---

## Frontmatter Template

```yaml
---
title: "Audit Report: [Area] - [Scope]"
author: "auditor|security-auditor|platform-validator"
date: "YYYY-MM-DD"
version: "1.0.0"
category: "audit"
tags: ["audit", "quality", "excellence"]
status: "draft|final"
duration: "X minutes"
audit_scope:
  areas: ["area1", "area2"]
  depth: "quick|standard|comprehensive"
  standards: ["S-TIER", "A-TIER", "B-TIER", "C-TIER", "D-TIER", "F-TIER"]
audit_score:
  overall: "X.X/10"
  breakdown:
    - dimension: "Dimension Name"
      score: "X.X/10"
      grade: "LETTER"
related_tasks:
  - "TASK-XXX"
related_reports:
  - "path/to/baseline-report.md"
---
```

---

## Audit Report Structure

### 1. Header

```markdown
# Audit Report: [Area] - [Scope]

**Date**: YYYY-MM-DD
**Auditor**: agent-name
**Duration**: X minutes
**Status**: ✅ Passed / ❌ Failed / ⚠️ Conditional Pass
**Audit Depth**: Quick/Standard/Comprehensive
**Overall Score**: X.X/10 (LETTER-TIER)
```

### 2. Executive Summary

```markdown
## 📋 Résumé Exécutif

**Audit Scope**: [What was audited]

**Overall Score**: X.X/10 (LETTER-TIER)

**Verdict**: ✅ ACCEPTED / ❌ REJECTED / ⚠️ CONDITIONAL

**Key Findings**:
- [Finding 1 - Impact: HIGH/MEDIUM/LOW]
- [Finding 2 - Impact: HIGH/MEDIUM/LOW]

**Summary**: <2-3 sentence overview>
```

### 3. Audit Methodology

```markdown
## 🔍 Méthodologie d'Audit

### Standards Applied
- **Standard 1**: Description...
- **Standard 2**: Description...

### Assessment Criteria
| Criterion | Weight | Pass Threshold |
|-----------|--------|----------------|
| Criterion 1 | 20% | 80% |
| Criterion 2 | 30% | 90% |

### Audit Process
1. Step 1: [Description]
2. Step 2: [Description]
3. Step 3: [Description]
```

### 4. Detailed Findings

```markdown
## 📊 Résultats Détaillés

### Dimension 1: [Name]

**Score**: X.X/10

**Findings**:

| # | Issue | Severity | Location | Recommendation |
|---|-------|----------|----------|----------------|
| 1 | Description | Critical| file:line | Fix action |
| 2 | Description | High     | file:line | Fix action |

**Examples** (for code/documentation audits):

**❌ BAD** (file.ts:42):
```typescript
// Bad code example
```

**✅ GOOD** (file.ts:42):
```typescript
// Good code example
```

---

### Dimension 2: [Name]

**Score**: X.X/10

[Repeat structure]
```

### 5. Scoring Breakdown

```markdown
## 📈 Breakdown des Scores

### Overall Score: X.X/10

| Dimension | Score | Weight | Weighted Score | Target | Status |
|-----------|-------|--------|----------------|--------|--------|
| Dimension 1 | 8.5/10 | 25% | 2.125 | 9.0/10 | ⚠️ |
| Dimension 2 | 7.0/10 | 30% | 2.100 | 8.0/10 | ❌ |
| Dimension 3 | 9.0/10 | 20% | 1.800 | 9.0/10 | ✅ |
| Dimension 4 | 6.5/10 | 25% | 1.625 | 7.0/10 | ⚠️ |
| **TOTAL** | **7.65/10** | **100%** | **7.65** | **8.25/10** | ❌ |

### Grade Definition

| Score Range | Grade | Description |
|-------------|-------|-------------|
| 9.5-10.0 | S-TIER | Exemplary excellence |
| 8.5-9.4  | A-TIER | High quality |
| 7.5-8.4  | B-TIER | Good with issues |
| 6.5-7.4  | C-TIER | Mediocre |
| 5.0-6.4  | D-TIER | Poor |
| 0.0-4.9  | F-TIER | Catastrophic |
```

### 6. Issues by Severity

```markdown
## 🚨 Issues par Sévérité

### Critical (Blocking) - Must Fix Immediately

1. **Issue Title**
   - **Location**: `path/to/file:line`
   - **Description**: What's wrong
   - **Impact**: Why this is critical
   - **Fix**: Specific action required

### High (Important) - Should Fix Soon

1. **Issue Title**
   - **Location**: `path/to/file:line`
   - **Description**: What's wrong
   - **Impact**: Why this matters
   - **Fix**: Specific action required

### Medium (Nice to Have) - Fix When Possible

1. **Issue Title**
   - **Location**: `path/to/file:line`
   - **Description**: What's wrong
   - **Impact**: Minor improvement
   - **Fix**: Specific action recommended

### Low (Cosmetic) - Optional

1. **Issue Title**
   - **Location**: `path/to/file:line`
   - **Description**: Cosmetic issue
   - **Impact**: Visual/cosmetic only
   - **Fix**: Optional improvement
```

### 7. Penance & Remediation

```markdown
## 📜 Penance & Remediation

### Required Actions (Blocking Acceptance)

| # | Action | Owner | Deadline | Status |
|---|--------|-------|----------|--------|
| 1 | Fix critical issue X | agent-name | YYYY-MM-DD | ⏳ |
| 2 | Fix high priority issue Y | agent-name | YYYY-MM-DD | ⏳ |

### Verification Criteria

- [ ] All critical issues resolved
- [ ] All high priority issues resolved or documented
- [ ] Re-audit confirms fixes

### Expected Timeline

**Estimated effort**: X hours
**Target completion**: YYYY-MM-DD
**Follow-up audit**: Scheduled for YYYY-MM-DD
```

### 8. Positive Findings

```markdown
## ✅ Points Forts

It's important to acknowledge what's working well:

1. **Strength 1**: Description...
   - **Evidence**: Example or reference
   - **Impact**: Positive outcome

2. **Strength 2**: Description...
   - **Evidence**: Example or reference
   - **Impact**: Positive outcome
```

### 9. Recommendations

```markdown
## 💡 Recommandations

### Process Improvements

1. **Recommendation**: Specific improvement
   - **Rationale**: Why this would help
   - **Priority**: P0/P1/P2

### Tool/Infrastructure Needs

1. **Recommendation**: Tool or infrastructure addition
   - **Rationale**: How it would prevent future issues
   - **Priority**: P0/P1/P2

### Training/Knowledge Gaps

1. **Recommendation**: Training or documentation needed
   - **Rationale**: What gap this addresses
   - **Priority**: P0/P1/P2
```

---

## Complete Example: Agent System Audit

```markdown
# Rapport d'Audit: Système d'Agents Villa Thaifa

**Date**: 2026-01-17
**Agent**: auditor
**Durée**: 15 minutes
**Statut**: ❌ REJECTED
**Score Système**: 3.33/10 (F-TIER - CATASTROPHIC)
**Audit Depth**: Compréhensif

---

## 📋 Résumé Exécutif

**Audit Scope**: Système complet d'agents (23 agents)

**Overall Score**: 3.33/10 (F-TIER)

**Verdict**: ❌ REJECTED

**Key Findings**:
- 6 agents orphelins (existants mais non documentés) - Impact: HIGH
- 7 agents fantômes (documentés mais inexistants) - Impact: HIGH
- Format frontmatter incohérent - Impact: MEDIUM
- Registry.md prétend "23 agents" alors que 22 existent - Impact: CRITICAL

**Summary**: Le système souffre de disparités critiques entre documentation et réalité. Les agents récents utilisent un format basique incomplet. Les listes d'agents dans AGENTS.md et registry.md sont incohérentes.

---

## 🔍 Méthodologie d'Audit

### Standards Applied
- **SSOT (Single Source of Truth)**: Registry.md = AGENTS.md = Fichiers physiques
- **Frontmatter Schema**: Tous agents doivent suivre format standard complet
- **Documentation Completeness**: Tous agents doivent être listés et documentés

### Assessment Criteria

| Criterion | Weight | Pass Threshold |
|-----------|--------|----------------|
| SSOT Compliance | 40% | 100% |
| Frontmatter Standardization | 25% | 100% |
| Documentation Completeness | 25% | 100% |
| Agent Functionality | 10% | 90% |

### Audit Process
1. Scanné tous les fichiers dans `.claude/agents/`
2. Comparé avec registry.md et AGENTS.md
3. Validé format frontmatter pour chaque agent
4. Identifié incohérences et gaps
5. Généré matrice d'audit complète

---

## 📊 Résultats Détaillés

### Dimension 1: SSOT Compliance

**Score**: 0/10 (FAILURE)

**Issues**:

| # | Issue | Severity | Location | Recommendation |
|---|-------|----------|----------|----------------|
| 1 | Registry says "23 agents", reality is 22 | Critical | registry.md:3 | Update to 22 |
| 2 | 6 agents exist but not in registry | High | registry.md | Add orphans |
| 3 | 7 agents listed in AGENTS.md but don't exist | High | AGENTS.md:Règle#3 | Remove phantoms |
| 4 | 6 agents exist but not in AGENTS.md | High | AGENTS.md | Add orphans |

---

### Dimension 2: Frontmatter Standardization

**Score**: 4/10 (POOR)

**Issues**:

| # | Issue | Severity | Location | Recommendation |
|---|-------|----------|----------|----------------|
| 1 | 5 agents use basic format (vs 17 standard) | Medium | 5 agent files | Migrate to complete |
| 2 | Missing: agent_id, version, status | Medium | Basic agents | Add fields |
| 3 | Missing: created, modified, created_by | Low | Basic agents | Add metadata |
| 4 | Inconsistent: permission_mode vs permissionMode | Low | Mixed | Standardize |

---

### Dimension 3: Documentation Completeness

**Score**: 3/10 (POOR)

**Issues**:

| # | Issue | Severity | Location | Recommendation |
|---|-------|----------|----------|----------------|
| 1 | 6 agents not in registry.md | High | registry.md | Add all agents |
| 2 | 6 agents not in AGENTS.md | High | AGENTS.md | Add all agents |
| 3 | 7 phantom agents in AGENTS.md | High | AGENTS.md | Remove ghosts |

---

### Dimension 4: Agent Functionality

**Score**: 10/10 (PERFECT)

**Status**: ✅ All 23 agents have valid .md files and are functional

---

## 📈 Breakdown des Scores

### Overall Score: 3.33/10

| Dimension | Score | Weight | Weighted Score | Target | Status |
|-----------|-------|--------|----------------|--------|--------|
| SSOT Compliance | 0.0/10 | 40% | 0.00 | 10.0/10 | ❌ |
| Frontmatter Standardization | 4.0/10 | 25% | 1.00 | 9.0/10 | ❌ |
| Documentation Completeness | 3.0/10 | 25% | 0.75 | 9.0/10 | ❌ |
| Agent Functionality | 10.0/10 | 10% | 1.00 | 9.0/10 | ✅ |
| **TOTAL** | **3.33/10** | **100%** | **3.33** | **9.25/10** | ❌ |

### Grade Definition

**Score: 3.33/10 → F-TIER (CATASTROPHIC)**

---

## 🚨 Issues par Sévérité

### Critical (Blocking) - Must Fix Immediately

1. **SSOT Violation: Registry Counter**
   - **Location**: `registry.md:3`
   - **Description**: Registry prétend "23 agents" alors que 22 existent
   - **Impact**: Violation fondamentale du principe SSOT
   - **Fix**: Changer "17" → "22" dans registry.md

2. **SSOT Violation: Phantom Agents**
   - **Location**: `AGENTS.md:Règle#3`
   - **Description**: 7 agents listés mais N'EXISTENT PAS physiquement
   - **Impact**: Documentation trompeuse, confusion
   - **Fix**: Décider: créer ces agents OU supprimer de la documentation

---

### High (Important) - Should Fix Soon

1. **6 Orphan Agents Not Documented**
   - **Location**: `registry.md`, `AGENTS.md`
   - **Description**: Agents existent mais ne sont PAS listés dans la documentation
   - **Impact**: Capacités cachées non découvrables
   - **Fix**: Ajouter les 6 agents orphelins à registry.md et AGENTS.md

2. **Frontmatter Format Inconsistency**
   - **Location**: 5 agent files (context-builder, etc.)
   - **Description**: Format basique incomplet vs format standard
   - **Impact**: Maintenance difficile, métadonnées manquantes
   - **Fix**: Migrer les 5 agents vers format complet

---

### Medium (Nice to Have) - Fix When Possible

1. **Naming Inconsistency**
   - **Location**: `decision-evaluator.md`
   - **Description**: Frontmatter name est "decision-evaluator-agent" mais filename est "decision-evaluator"
   - **Impact**: Confusion potentielle
   - **Fix**: Standardiser name = filename

---

## 📜 Penance & Remediation

### Required Actions (Blocking Acceptance)

| # | Action | Owner | Deadline | Status |
|---|--------|-------|----------|--------|
| 1 | Update registry.md counter: 17 → 22 | claude-md-agent | Today | ⏳ |
| 2 | Decision sur 7 agents fantômes | decision-evaluator | Today | ⏳ |
| 3 | Ajouter 6 agents orphelins au registry | claude-md-agent | Today | ⏳ |
| 4 | Migrer 5 agents vers format complet | claude-md-agent | This week | ⏳ |

### Verification Criteria

- [ ] Registry.md compte correct: 23 agents
- [ ] AGENTS.md liste tous les 23 agents
- [ ] 0 agents fantômes dans documentation
- [ ] 0 agents orphelins (tous listés)
- [ ] Tous agents ont frontmatter complet
- [ ] Test de conformité passe pour tous agents

### Expected Timeline

**Estimated effort**: 8-12 hours
**Target completion**: 2026-01-24 (1 week)
**Follow-up audit**: 2026-01-24

---

## ✅ Points Forts

1. **Agent Files Complete**: All 23 agents have valid .md files with functional configurations
   - **Evidence**: 100% success rate reading agent files
   - **Impact**: Foundation is solid, only documentation needs fixing

2. **Standard Format Excellent**: 23 agents use excellent standard format
   - **Evidence`: auditor.md, platform-validator.md, etc.
   - **Impact**: Clear template exists for migrating others

3. **Agent Capabilities Clear**: All agents have well-defined capabilities and roles
   - **Evidence**: Registry.md accurately describes each agent's purpose
   - **Impact**: System design is sound

---

## 💡 Recommandations

### Process Improvements

1. **Implement Continuous Validation**
   - **Rationale**: Prevent future SSOT violations
   - **Priority**: P0 (Critical)
   - **Action**: Create validation script that checks:
     - All agents in registry exist as files
     - All agent files are listed in registry
     - All agents follow frontmatter schema

2. **Create Agent Onboarding Checklist**
   - **Rationale**: Ensure new agents follow standards from creation
   - **Priority**: P1 (High)
   - **Action**: Document steps in meta-agent workflow

### Tool/Infrastructure Needs

1. **Automated Registry Sync**
   - **Rationale**: Auto-update registry when agents added/removed
   - **Priority**: P1 (High)
   - **Action**: Create CLI script: `npm run agent:sync-registry`

2. **Frontmatter Validation Tool**
   - **Rationale**: Auto-validate frontmatter on commit
   - **Priority**: P2 (Medium)
   - **Action**: Pre-commit hook for YAML validation

### Training/Knowledge Gaps

1. **Document Frontmatter Schema**
   - **Rationale**: Clear reference for all agent creators
   - **Priority**: P0 (Critical)
   - **Action**: Create `docs/project/standards/agents/frontmatter-schema.md`

---

**Report End**

Generated by: auditor (sonnet)
Date: 2026-01-17
Version: 1.0.0

**Next Audit**: Scheduled for 2026-01-24 (after remediation)
```

---

## Usage Instructions

1. **For System Audits**: Focus on SSOT, documentation, configuration
2. **For Code Audits**: Focus on quality, patterns, SOLID principles
3. **For Security Audits**: Focus on vulnerabilities, OWASP Top 10
4. **For Documentation Audits**: Focus on completeness, accuracy, links

### Severity Guidelines

- **Critical**: Blocks acceptance, must fix immediately
- **High**: Important, should fix within 24-48 hours
- **Medium**: Nice to have, fix when possible
- **Low**: Cosmetic, optional

### Grading Scale

Use consistent grading for all audits:

| Score | Grade | Term | Meaning |
|-------|-------|------|---------|
| 9.5-10 | S | Exemplary | Perfect excellence |
| 8.5-9.4 | A | High | Exceeds expectations |
| 7.5-8.4 | B | Good | Meets expectations |
| 6.5-7.4 | C | Mediocre | Below expectations |
| 5.0-6.4 | D | Poor | Far below expectations |
| 0-4.9 | F | Catastrophic | Unacceptable |

---

**Template Version**: 1.0.0
**Last Updated**: 2026-01-17
**Maintained By**: auditor
