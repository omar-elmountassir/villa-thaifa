# Decision Report: Fate of Phantom Agents

**Date**: 2026-01-17
**Agent**: decision-evaluator
**Task**: TASK-RESOLVE-002
**Duration**: 15 minutes
**Status**: Success

---

## Executive Summary

After comprehensive analysis of the 7 phantom agents listed in AGENTS.md, the decision matrix is:

- **Agents to CREATE**: 3 (feature-dev, bug-hunter, legacy-rescuer)
- **Agents to DELETE**: 3 (security-scanner, dependency-manager, code-reviewer)
- **Agents to RENAME**: 1 (performance-optimizer -> performance-engineer)

**Rationale**: The analysis prioritizes eliminating redundancy while filling critical gaps in the development workflow for Villa Thaifa's digital transformation.

---

## Detailed Analysis

### Agent Fantome #1: legacy-rescuer

**Claimed Capability**: Rescue code legacy

**Coverage Analysis**:
- NOT covered by any existing agent
- Unique capability: migrating legacy content to modern formats
- Referenced in ROADMAP.md TASK-NOW-003: "Extract client data from legacy/archive_v1/"

**Multi-Criteria Scoring**:

| Criterion | Score | Notes |
|-----------|-------|-------|
| Business Value | 9/10 | Critical - legacy data must be rescued |
| Usage Frequency | 8/10 | High - Phase 2 requires legacy migration |
| Duplication | 10/10 | No overlap |
| Creation Cost | 4/10 | Low - straightforward agent |
| Maintenance | 7/10 | Medium - legacy formats vary |

**Total Score**: 38/50

**Recommendation**: **CREATE**

**Rationale**: The `legacy/archive_v1/` directory contains valuable client data (PROFILE.md, CONTACT.md) that needs extraction. No existing agent handles this specific "archaeology + migration" workflow. ROADMAP.md explicitly references this agent in TASK-NOW-003.

**Priority**: P1 (High) - Required for Phase 2 completion

---

### Agent Fantome #2: feature-dev

**Claimed Capability**: Develop new features

**Coverage Analysis**:
- NOT covered by any existing agent
- Gap: meta-agent creates agents but doesn't build features
- Gap: claude-md-agent only updates documentation

**Multi-Criteria Scoring**:

| Criterion | Score | Notes |
|-----------|-------|-------|
| Business Value | 10/10 | Essential - this is the core development work |
| Usage Frequency | 10/10 | Continuous - every feature needs this |
| Duplication | 10/10 | No overlap |
| Creation Cost | 6/10 | Medium - complex agent |
| Maintenance | 8/10 | Medium - framework evolution |

**Total Score**: 44/50

**Recommendation**: **CREATE**

**Rationale**: This is the MOST critical gap. Without a dedicated feature-dev agent, Claude (main instance) must execute directly, violating Règle #4 (Orchestration). The ROADMAP Phase 2 requires building an Admin Dashboard - who will build it if not feature-dev?

**Priority**: P0 (Critical) - Blocking all feature development

**Agent Specs** (to be created):
- Domain: technical/development
- Model: sonnet
- Capabilities: MVC-compliant feature creation, testing, documentation
- Dependencies: test-runner, claude-md-agent, auditor

---

### Agent Fantome #3: bug-hunter

**Claimed Capability**: Hunt and fix bugs

**Coverage Analysis**:
- PARTIALLY covered by auditor (finds issues but doesn't fix)
- Gap: Auditor is "brutal review" - doesn't actively debug
- Gap: No agent specializes in root cause analysis

**Multi-Criteria Scoring**:

| Criterion | Score | Notes |
|-----------|-------|-------|
| Business Value | 9/10 | High - bugs block progress |
| Usage Frequency | 8/10 | High - inevitable in development |
| Duplication | 6/10 | Partial overlap with auditor |
| Creation Cost | 5/10 | Medium - debugging is complex |
| Maintenance | 7/10 | Medium - new bug patterns emerge |

**Total Score**: 35/50

**Recommendation**: **CREATE**

**Rationale**: Auditor finds bugs but doesn't fix them. bug-hunter specializes in:
1. Root cause analysis (traceback analysis, log review)
2. Reproduction and isolation
3. Fix implementation and verification

The distinction: Auditor = "This code sucks" | bug-hunter = "Here's why it crashes and how to fix it"

**Priority**: P1 (High) - Will be needed as codebase grows

---

### Agent Fantome #4: performance-optimizer

**Claimed Capability**: Performance optimization

**Coverage Analysis**:
- NOT covered by any existing agent
- Unique capability: profiling, bottleneck analysis, optimization

**Multi-Criteria Scoring**:

| Criterion | Score | Notes |
|-----------|-------|-------|
| Business Value | 7/10 | Medium - nice to have, not blocking |
| Usage Frequency | 5/10 | Low - optimization is episodic |
| Duplication | 10/10 | No overlap |
| Creation Cost | 7/10 | High - requires deep profiling knowledge |
| Maintenance | 6/10 | High - performance patterns change |

**Total Score**: 35/50

**Recommendation**: **RENAMER** (to performance-engineer)

**Rationale**: "performance-optimizer" sounds reactive. "performance-engineer" suggests proactive, systematic approach. However, this is NOT a P0 priority. Can be deferred to Phase 3 or created on-demand.

**Priority**: P2 (Medium) - Defer until performance issues arise

---

### Agent Fantome #5: security-scanner

**Claimed Capability**: Scan for security vulnerabilities

**Coverage Analysis**:
- FULLY covered by `security-auditor` (existing agent)
- security-auditor: "Review code for vulnerabilities, OWASP Top 10, JWT, OAuth2, CORS, CSP"
- This is 100% duplication

**Multi-Criteria Scoring**:

| Criterion | Score | Notes |
|-----------|-------|-------|
| Business Value | 5/10 | Covered by security-auditor |
| Usage Frequency | 0/10 | Redundant |
| Duplication | 0/10 | Complete overlap |
| Creation Cost | N/A | Not creating |
| Maintenance | N/A | Not creating |

**Total Score**: 5/50

**Recommendation**: **DELETE**

**Rationale**: security-auditor already exists and handles this domain. The name "scanner" implies automated tools (npm audit, Snyk) which are NOT the primary concern - the project needs architectural security review, which security-auditor provides.

**Action**: Remove from AGENTS.md Règle #3 list

---

### Agent Fantome #6: dependency-manager

**Claimed Capability**: Manage dependencies

**Coverage Analysis**:
- NOT explicitly covered, but...
- This is a low-value administrative task
- Can be handled by manual Claude execution or simple scripts
- Does NOT require a specialized agent

**Multi-Criteria Scoring**:

| Criterion | Score | Notes |
|-----------|-------|-------|
| Business Value | 3/10 | Low - npm update is not complex |
| Usage Frequency | 4/10 | Low - updates are episodic |
| Duplication | 8/10 | Can be done by any agent + Bash |
| Creation Cost | 2/10 | Low but not worth it |
| Maintenance | 5/10 | Low |

**Total Score**: 22/50

**Recommendation**: **DELETE**

**Rationale**: Dependency management is not complex enough to warrant a dedicated agent:
- `npm outdated`, `npm audit`, `npm update` are standard commands
- Can be handled by feature-dev or claude-md-agent as needed
- Adding an agent for this violates "LESS TALK, MORE DO" - it's over-engineering

**Action**: Remove from AGENTS.md Règle #3 list

---

### Agent Fantome #7: code-reviewer

**Claimed Capability**: Review code

**Coverage Analysis**:
- FULLY covered by `auditor` (existing agent)
- Auditor: "Brutal excellence standards", "Grades code, documentation, and architecture"
- This is 100% duplication

**Multi-Criteria Scoring**:

| Criterion | Score | Notes |
|-----------|-------|-------|
| Business Value | 2/10 | Covered by auditor |
| Usage Frequency | 0/10 | Redundant |
| Duplication | 0/10 | Complete overlap with auditor |
| Creation Cost | N/A | Not creating |
| Maintenance | N/A | Not creating |

**Total Score**: 2/50

**Recommendation**: **DELETE**

**Rationale**: Auditor IS the code review agent. The "Brutal Excellence Protocol" covers everything code-reviewer would do. Adding another name creates confusion without adding value.

**Action**: Remove from AGENTS.md Règle #3 list

---

## Decision Matrix Final

| Agent Fantome | Decision | Action Required | Priority |
|---------------|----------|-----------------|----------|
| **legacy-rescuer** | CREATE | Invoke meta-agent to create | P1 (High) |
| **feature-dev** | CREATE | Invoke meta-agent to create | P0 (Critical) |
| **bug-hunter** | CREATE | Invoke meta-agent to create | P1 (High) |
| **performance-optimizer** | RENAME | Create as performance-engineer later | P2 (Medium) |
| **security-scanner** | DELETE | Remove from AGENTS.md | P0 (Critical) |
| **dependency-manager** | DELETE | Remove from AGENTS.md | P0 (Critical) |
| **code-reviewer** | DELETE | Remove from AGENTS.md | P0 (Critical) |

---

## Updated Agent Registry (Post-Decision)

### Current Agents (10 existing)
1. claude-md-agent
2. context-builder
3. capability-extractor
4. knowledge-interviewer
5. test-runner
6. dashboard-generator
7. platform-validator
8. auditor
9. data-sync-checker
10. meta-agent

### Agents to Add (3)
11. **feature-dev** - Feature development (P0)
12. **bug-hunter** - Debugging and root cause analysis (P1)
13. **legacy-rescuer** - Legacy content migration (P1)

### Agents to Remove (3)
- security-scanner (duplicate of security-auditor)
- dependency-manager (not complex enough)
- code-reviewer (duplicate of auditor)

### Deferred (1)
- performance-engineer (renamed from performance-optimizer) - P2

**Final Count**: 13 active agents (10 existing + 3 new)

---

## Implementation Plan

### Immediate (P0)
1. Remove 3 phantom agents from AGENTS.md Règle #3
2. Invoke meta-agent to create feature-dev
3. Update CLAUDE.md agent registry

### Short-term (P1)
4. Invoke meta-agent to create bug-hunter
5. Invoke meta-agent to create legacy-rescuer
6. Test new agents on real tasks

### Deferred (P2)
7. Create performance-engineer when performance issues arise

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| feature-dev creation fails | Low | High | Use meta-agent with detailed specs |
| Missing security-scanner causes confusion | Medium | Low | Clear documentation of security-auditor role |
| Legacy data lost before legacy-rescuer created | Medium | High | Prioritize legacy-rescuer creation |

---

## Conclusion

The analysis identified a critical gap (feature-dev) that is currently blocking development work. The decision to create 3 agents and remove 3 duplicates will:

1. Enable true agent orchestration (Règle #4 compliance)
2. Eliminate redundancy and confusion
3. Fill critical workflow gaps
4. Maintain lean agent architecture (13 vs 17 claimed)

**Next Action**: Execute P0 tasks immediately to unblock feature development.

---

**Report End**

Generated by: decision-evaluator
Date: 2026-01-17
Version: 1.0.0
