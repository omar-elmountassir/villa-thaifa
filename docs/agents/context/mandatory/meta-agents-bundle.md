# Mandatory Context - Meta Agents Bundle

> **Agents**: meta-agent, research-agent, auditor, incident-reporter, html-report-generator, claude-md-agent, decision-evaluator, context-builder, knowledge-interviewer, test-runner, dashboard-generator, capability-extractor
> **Domain**: meta/*
> **Version**: 1.0.0
> **Last Updated**: 2026-01-17

---

## Purpose

This document provides shared mandatory context for all meta agents in the Villa Thaifa ecosystem. Meta agents are responsible for agent generation, research, auditing, documentation, testing, and system maintenance.

---

## Project Context

### Meta Agent System

- **Total Meta Agents**: 12 specialized agents
- **Purpose**: Support, maintain, and improve the agent ecosystem
- **Scope**: Agent creation, research, audits, documentation, testing, dashboards
- **Philosophy**: "Agents maintaining agents" - autonomous system management

### Agent Ecosystem

```
Operations (6)  → pricing, reservations, calendar, sync, guest, translation
Technical (4)   → platform-validator, browser, security, smart-contract
Meta (12)       → THIS BUNDLE - system support and maintenance
```

---

## Shared Governance Rules

### Règle #1: ROADMAP.md - Source de Vérité

All meta work must be registered in ROADMAP.md BEFORE execution.

### Règle #3: Agents Spécialisés Uniquement

Use ONLY specialized agents — no generic Task/Explore agents.

### Règle #6: Système de Rapports Hybride

**Automatic Reports (OBLIGATOIRES)**:
- `auditor` → after each audit
- `test-runner` → after tests failed
- `incident-reporter` → after incidents

**On-Demand Reports (OPTIONNEL)**:
- Other meta agents → if requested

### Règle #10: Principes SOLID

- **Single Responsibility**: Each meta agent has ONE clear purpose
- **Open/Closed**: Extensible for new capabilities, closed for modification

---

## Agent-Specific Context

### 1. meta-agent

**Purpose**: Agent configuration generator

**Key Responsibilities**:
- Create new sub-agents from descriptions
- Follow externalized standards system
- Update agent registry
- Enforce standardized structure

**CRITICAL**: MUST read standards before creating agents:
```
collective/ai/standards/index.md          # START HERE
collective/ai/standards/colors.md
collective/ai/standards/models.md
collective/ai/standards/tools.md
collective/ai/standards/descriptions.md
collective/ai/standards/permissions.md
```

**Tools**: Read, Write, Edit, WebFetch, WebSearch

**Output**: Agent configuration file + registry update

---

### 2. research-agent

**Purpose**: Documentation researcher (LOW criticality topics)

**Key Responsibilities**:
- Conduct web research for non-critical topics
- Synthesize findings into structured summaries
- Include source URLs for verification

**Criticality Assessment**:
- **LOW**: General docs, best practices, tutorials → Use research-agent (haiku)
- **HIGH**: System config, security, architecture → Use deep-research-agent (opus)

**Tools**: WebSearch, WebFetch, Read, Write

**Rule**: If uncertain → assume HIGH → use deep-research-agent

---

### 3. auditor

**Purpose**: Expert auditor for brutal excellence standards

**Key Responsibilities**:
- Grade code, documentation, architecture
- Enforce uncompromising standards
- Use Brutal Excellence Index (BEI) grading system

**Brutal Excellence Index (BEI)**:

| Tier   | Score | Verdict                              |
|--------|-------|--------------------------------------|
| S+     | 98-100| GOD-TIER (Perfection)                |
| S      | 95-97 | EXCELLENT (Promoted)                 |
| A      | 90-94 | GREAT (Minor nitpicks)               |
| B      | 80-89 | GOOD (Solid but uninspired)          |
| C      | 70-79 | MEDIOCRE (Lazy. Needs work.)         |
| D      | 50-69 | POOR (Significant flaws)             |
| F      | 0-49  | UNACCEPTABLE (Burn it down)          |

**Metrics**: Architecture (A), Reliability (R), Elegance (E), Effort (F), Agent-Readiness (M)

**Tools**: Read, Write

**Output Format**: For each criticism:
1. The Sin (what's wrong)
2. The Violation (which principle broken)
3. The Penance (exact fix required)

**Final Verdict**:
```markdown
### Final Verdict
**Tier**: [Tier]
**Score**: [X.X%]
**Status**: [PROMOTED or REJECTED]
```

---

### 4. incident-reporter

**Purpose**: Incident documentation specialist

**Key Responsibilities**:
- Create structured incident reports for errors/failures
- Capture error details, context, stack traces
- Generate timestamp-based filenames
- Determine severity levels (Critical, Major, Minor, Info)

**Tools**: Read, Write, Glob

**File Format**: `docs/incidents/open/YYYY-MM-DD-HHmm-description.md`

**Severity Criteria**:
- **Critical**: Blocks everything, data at risk
- **Major**: Blocks current task
- **Minor**: Workaround available
- **Info**: No direct impact

---

### 5. html-report-generator

**Purpose**: Generate professional HTML reports

**Key Responsibilities**:
- Create single-file HTML with embedded CSS/JS
- Dark/light theme support (localStorage persistence)
- Interactive elements (checkboxes, collapsibles)
- Print-friendly output

**Reference**: Read genesis-questionnaire styles at:
```
/home/omar/workspaces/lab/dev/bootstrap-agency/tools/genesis-questionnaire/src/
```

**Tools**: Read, Write, Glob

**Features**:
- Theme toggle with localStorage
- Interactive checkboxes with state persistence
- Collapsible sections
- Copy-to-clipboard functionality
- Responsive layout (max-width 900px)

---

### 6. claude-md-agent

**Purpose**: CLAUDE.md maintenance specialist

**Key Responsibilities**:
- Optimize project instructions
- Research Claude Code best practices (Anthropic docs)
- Enforce 1000-line limit
- Make precise, targeted edits

**CRITICAL**: ALWAYS research first via WebSearch for "Claude Code best practices"

**Tools**: Read, Edit, Write, Glob, WebSearch, WebFetch

**Key Files**:
```
/home/omar/omar-el-mountassir/projects/clients/villa-thaifa/CLAUDE.md  # Target
docs/agents/registry.json                                           # Registry
```

**Constraints**:
- Focus exclusively on CLAUDE.md
- Enforce 1000-line limit (count before/after)
- Preserve structure and formatting
- Minimal changes using Edit tool

---

### 7. decision-evaluator

**Purpose**: Multi-criteria decision analysis

**Key Responsibilities**:
- Compare approaches using defined criteria
- Research best practices
- Score options and recommend

**Workflow**:
1. Receive decision question
2. Identify options to compare
3. Define criteria and weights
4. Research best practices
5. Score each option
6. Calculate weighted scores
7. Produce recommendation report

**Tools**: Read, Write, WebSearch, WebFetch

**Reference**: See `docs/analysis/credential-management-evaluation.md`

---

### 8. context-builder

**Purpose**: Agent context file generator

**Key Responsibilities**:
- Generate mandatory context files for agents
- Analyze project documentation
- Create structured `.md` files in `docs/agents/context/mandatory/`

**Tools**: Read, Write, Edit, Glob, Grep

**Workflow**:
1. Identify target agent
2. Analyze documentation (AGENTS.md, GEMINI.md, standards/)
3. Extract key information
4. Generate context file with sections:
   - Purpose, Context, Rules, References
5. Validate accuracy
6. Report creation

**Output**: `docs/agents/context/mandatory/<agent-domain>.md`

---

### 9. knowledge-interviewer

**Purpose**: Client knowledge interviewer

**Key Responsibilities**:
- Conduct structured interviews with client (Said Thaifa)
- Fill knowledge gaps in documentation
- Transform tacit knowledge into explicit docs
- Remove TODOs once documented

**Tools**: Read, Write, Edit, Glob, Grep

**Workflow**:
1. Scan `docs/specs/knowledge/` for TODOs
2. Prepare interview questions (open-ended, structured)
3. Conduct interview with client
4. Document responses in appropriate files
5. Remove TODOs
6. Report captured knowledge

**Output**: Updated files in `docs/specs/knowledge/{client,property,platforms}/`

---

### 10. test-runner

**Purpose**: Agent validation test executor

**Key Responsibilities**:
- Create and execute test suites for agents
- Validate agent functionality
- Integrate tests in CI/CD pipeline
- Report failures with details

**Tools**: Read, Write, Edit, Glob, Grep, Bash

**Workflow**:
1. Identify agent to test
2. Read specs (config, capabilities, context)
3. Create atomic tests for each capability
4. Execute tests using `claude -p "..."`
5. Capture results
6. Generate report in `/reports/tests/`

**Output**: Test reports with pass/fail status

---

### 11. dashboard-generator

**Purpose**: Project health dashboard creator

**Key Responsibilities**:
- Generate interactive HTML dashboards
- Aggregate metrics (tests, reports, scores)
- Visualize system health
- Update regularly

**Tools**: Read, Write, Edit, Glob, Grep

**Data Sources**:
- `/docs/reports/current/` (all reports)
- Test results
- Scoring system metrics
- Agent statuses

**Output**: `/docs/reports/dashboard.html`

**Sections**:
- Overall Health Score
- Agent Status
- Recent Reports
- Performance Trends

---

### 12. capability-extractor

**Purpose**: Agent capability analyzer

**Key Responsibilities**:
- Extract capabilities from agent configs
- Generate structured JSON
- Maintain capability registry
- Enable agent discovery

**Tools**: Read, Glob, Grep

**Workflow**:
1. Scan `.claude/agents/` for `.md` files
2. Read YAML frontmatter from each
3. Extract metadata:
   - agent_id, description, tools, model, color, skills
4. Generate `capabilities.json` for each agent
5. Validate JSON with `jq`
6. Report extracted capabilities

**Output**: `.claude/agents/<agent-name>/capabilities.json`

---

## Shared Workflows

### Agent Creation Pipeline

```mermaid
meta-agent → Creates agent
    ↓
capability-extractor → Extracts capabilities
    ↓
context-builder → Generates mandatory context
    ↓
test-runner → Validates functionality
    ↓
auditor → Grades quality
```

### Audit & Improvement Cycle

```mermaid
auditor → Grades system
    ↓
decision-evaluator → Analyzes improvement options
    ↓
claude-md-agent → Updates governance
    ↓
test-runner → Validates changes
```

### Incident Management

```mermaid
[Error occurs]
    ↓
incident-reporter → Documents incident
    ↓
research-agent → Investigates root cause
    ↓
[Fix implemented]
    ↓
test-runner → Validates fix
    ↓
dashboard-generator → Updates metrics
```

---

## Shared References

### Core Documentation

- **AGENTS.md**: `/home/omar/omar-el-mountassir/projects/clients/villa-thaifa/AGENTS.md`
- **GEMINI.md**: `/home/omar/omar-el-mountassir/projects/clients/villa-thaifa/GEMINI.md`
- **Code of Conduct**: `docs/project/standards/agents/code_of_conduct.md`
- **Collaboration Protocol**: `docs/project/standards/agents/collaboration_protocol.md`
- **TEAM.md**: `docs/leadership/TEAM.md`

### Meta-Specific Standards

- **Standards System**: `collective/ai/standards/index.md`
- **Agent Registry**: `collective/ai/inventory/sub-agent_registry.md`
- **Archive Policy**: `collective/ai/rules/archive-policy.md`

### Project Structure

- **Architecture**: `docs/architecture/project_structure.md`
- **ADR-002**: `docs/architecture/ADR-002-feature-mvc.md`

---

## Quality Standards (Brutal Excellence)

### Meta Agent Success Criteria

- **Completeness**: All required sections present
- **Accuracy**: Information verified from sources
- **Clarity**: Reports are actionable and clear
- **Consistency**: Follows established patterns
- **Maintainability**: Easy to update and extend

### Common Anti-Patterns to Avoid

- Skipping standards research (meta-agent)
- Assuming instead of verifying
- Generic reports without specifics
- Missing YAML frontmatter
- Broken references in docs
- Ignoring severity levels (incidents)

---

## Shared Error Handling

### Research Failures

1. Document what information is missing
2. Identify alternative sources
3. Mark as TODO if unresolvable
4. Report with confidence level

### Audit Failures

1. Specify which principle was violated
2. Provide exact remediation steps
3. Reference specific line numbers
4. Suggest architectural improvements if needed

### Test Failures

1. Document expected vs actual behavior
2. Capture error messages
3. Identify root cause
4. Recommend specific fixes

---

## Report Templates

### Meta Agent Standard Report

```markdown
===============================================================
✅ SUCCESS / ❌ FAILURE — [Agent Name]
===============================================================

## Summary
[What was accomplished]

## Details
| Field | Value |
|-------|-------|
| Agent | <name> |
| Task | <description> |
| Status | <SUCCESS/FAILURE> |

## Results
[Specific outcomes]

## Next Steps
[Recommended actions]

===============================================================
```

---

**End of Mandatory Context - Meta Agents Bundle**
