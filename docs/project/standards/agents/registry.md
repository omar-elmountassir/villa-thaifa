# 🤖 Villa Thaifa Agent Fleet (Registry)

> **Total Agents**: 23 specialized agents
> **Location**: `.claude/agents/` > **Framework**: **Claude Code CLI** (Sub-agents)
> **Orchestrator**: Claude (main instance) via Terminal
> **Last Updated**: 2026-01-17 (Added documentation-manager)

---

## 🛠️ Specialized Agents (The "Special Forces")

> **Note**: These agents are strictly **Claude Code** configurations.
> **Invocation**: `claude -p "Use @agent-name to..."` or `claude @agent-name`

### 🏢 Operations & Business

| Agent                     | Role            | Capabilities                       | Model  |
| :------------------------ | :-------------- | :--------------------------------- | :----- |
| **`pricing-analyst`**     | Revenue Manager | Market analysis, Rate optimization | Opus   |
| **`reservation-manager`** | Booking Agent   | Reservation lifecycle, Upsell      | Sonnet |
| **`calendar-agent`**      | Scheduler       | Availability checks, Gap analysis  | Sonnet |
| **`guest-communicator`**  | Concierge       | Drafting messages, Welcome guides  | Sonnet |
| **`translation-agent`**  | Linguist        | Multilingual translation (FR/EN/AR) | Haiku  |

### ⚙️ Technical & Audit

| Agent                    | Role                | Capabilities                                 | Model  |
| :----------------------- | :------------------ | :------------------------------------------- | :----- |
| **`platform-validator`** | Gatekeeper          | Pre-flight checks, Safety validation         | Sonnet |
| **`data-sync-checker`**  | Integrity           | SSOT vs Platform discrepancy check           | Sonnet |
| **`security-auditor`**   | SecOps              | Vulnerability scanning, OWASP, Auth review   | Opus   |
| **`incident-reporter`**  | Logger              | Error tracking, Post-mortems                 | Haiku  |
| **`auditor`**            | Quality Controller  | Brutal excellence standards, Code review      | Sonnet |
| **`smart-contract-auditor`** | Blockchain Auditor | Smart contract vulnerability assessment    | Opus   |

### 🔧 Infrastructure & Quality (NEW - Phase 0)

| Agent                    | Role          | Capabilities                                | Model  |
| :----------------------- | :------------ | :------------------------------------------ | :----- |
| **`context-builder`**    | Context Gen   | Creates mandatory context files for agents  | Sonnet |
| **`capability-extractor`** | Analyzer     | Extracts agent capabilities into JSON       | Sonnet |
| **`knowledge-interviewer`** | Interviewer | Fills knowledge gaps with client           | Opus   |
| **`test-runner`**        | Validator     | Creates and executes agent test suites      | Sonnet |
| **`dashboard-generator`** | Visualizer    | Generates project health dashboards         | Sonnet |

### 🚀 Utility & Meta

| Agent                    | Role             | Capabilities                                  | Model  |
| :----------------------- | :--------------- | :-------------------------------------------- | :----- |
| **`meta-agent`**         | Architect        | Creating NEW agents (Self-replication)        | Opus   |
| **`browser-agent`**      | Navigator        | Web scraping, UI testing (Chrome automation)  | Sonnet |
| **`research-agent`**     | Scout            | Documentation search, Fast info gathering     | Haiku  |
| **`claude-md-agent`**    | Librarian        | Maintaining `CLAUDE.md` (governance docs)     | Opus   |
| **`documentation-manager`** | Doc Expert     | ALL .md files: audits, links, TODOs, dedup   | Sonnet |
| **`html-report-generator`** | Report Engineer | Professional HTML reports with themes         | Opus   |
| **`decision-evaluator`** | Analyst          | Multi-criteria decision analysis              | Opus   |

---

## 📜 Usage Protocol

1.  **Define the Task**: "I need to check room availability."
2.  **Select the Agent**: "`calendar-agent` is best for this."
3.  **Context Injection**: `claude @.claude/agents/calendar-agent.md "Check availability for..."`
4.  **Verification**: Claude reviews the output.

---

## 🔄 Pending Changes (Decision Matrix 2026-01-17)

### Agents to CREATE (3) - Prioritized

| Priority | Agent            | Role              | Reason                           |
| :------- | :--------------- | :---------------- | :------------------------------- |
| **P0**   | `feature-dev`    | Feature Developer | CRITICAL gap - blocks development |
| **P1**   | `bug-hunter`     | Debug Specialist  | Root cause analysis              |
| **P1**   | `legacy-rescuer` | Legacy Migrator   | Phase 2 requirement              |

### Agents to REMOVE from AGENTS.md (3)

These were listed in AGENTS.md but don't exist and are duplicates:

| Agent                | Action      | Reason                               |
| :------------------- | :---------- | :----------------------------------- |
| `security-scanner`   | DELETE      | Duplicate of `security-auditor`      |
| `dependency-manager` | DELETE      | Not complex enough for dedicated agent |
| `code-reviewer`      | DELETE      | Duplicate of `auditor`               |

### Deferred (1)

| Agent                     | New Name              | Priority | When                      |
| :------------------------ | :-------------------- | :------- | :------------------------ |
| `performance-optimizer`   | `performance-engineer` | P2       | When performance issues arise |

**Final Target Count**: 26 agents (23 current + 3 new - 3 removed + 1 renamed + 1 documentation)

---

## 📋 Standards & Governance

| Document | Purpose | Location |
|----------|---------|----------|
| **Frontmatter Schema** | Agent configuration standard (TASK-RESOLVE-005) | `frontmatter-schema.md` |
| **Code of Conduct** | Agent behavior rules | `code_of_conduct.md` |
| **Collaboration Protocol** | Handover and memory rules | `collaboration_protocol.md` |

### Frontmatter Schema (NEW - 2026-01-17)

Tous les agents DOIVENT suivre le schema standard defini dans `frontmatter-schema.md`:

- **Champs obligatoires**: `agent_id`, `name`, `version`, `status`, `created`, `modified`, `created_by`, `description`, `model`, `tools`
- **Champs optionnels**: `context_to_load`, `dependencies`, `output_format`, `color`, `domain`, `tags`, `skills`, `permissionMode`
- **Changelog**: Recommande pour traçabilite

**Action requise**: Les 5 nouveaux agents (context-builder, capability-extractor, knowledge-interviewer, test-runner, dashboard-generator) doivent etre migrés vers le schema complet.

---

## 📊 Registry Status

- **Last Audit**: 2026-01-17
- **Audit Score**: 6.5/10 (C-TIER) → Target: 10/10 (S-TIER)
- **Next Actions**:
  1. Migrate 5 new agents to complete frontmatter schema (TASK-RESOLVE-005)
  2. Update AGENTS.md Règle #3 to match this registry
- **Report**: `/docs/reports/current/audit/agent-audit-2026-01-17.md`
