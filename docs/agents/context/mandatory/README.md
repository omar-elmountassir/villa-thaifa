# Mandatory Context Files - Master Index

> **Project**: Villa Thaifa Agent System
> **Total Agents**: 23
> **Context Files Created**: 7
> **Last Updated**: 2026-01-17
> **Created By**: context-builder agent

---

## Overview

This directory contains mandatory context files for all 23 specialized agents in the Villa Thaifa ecosystem. Context files provide agents with the essential information they need to operate effectively within the project.

---

## Context File Structure

Each context file includes:
- **Purpose**: Why the agent exists and what it does
- **Project Context**: Villa Thaifa strategic vision and operations
- **Governance Rules**: Applicable rules from AGENTS.md
- **Technical Standards**: Architecture and coding standards
- **Workflow & Instructions**: Step-by-step operational guidance
- **Dependencies**: Other agents this agent coordinates with
- **References**: Links to key documentation
- **Quality Standards**: Brutal Excellence criteria
- **Report Format**: Required output structure

---

## Context Files Created

### Bundle Files (Consolidated Context)

| File | Agents Covered | Domain | Purpose |
|------|---------------|--------|---------|
| **pricing-agent.md** | pricing-analyst | hospitality/pricing | Revenue optimization strategy |
| **reservation-agent.md** | reservation-manager | hospitality/reservations | Reservation lifecycle management |
| **calendar-agent.md** | calendar-agent | hospitality/occupancy | Availability analysis |
| **platform-validator-agent.md** | platform-validator | technical/validation | Platform operation gatekeeping |
| **guest-communicator-agent.md** | guest-communicator | hospitality/communication | Guest communications |
| **meta-agent.md** | meta-agent | meta/generation | Agent creation |
| **technical-agents-bundle.md** | platform-validator, browser-agent, security-auditor, smart-contract-auditor | technical/* | Technical operations |
| **operations-agents-bundle.md** | pricing-analyst, reservation-manager, calendar-agent, data-sync-checker, guest-communicator, translation-agent | hospitality/* | Hospitality operations |
| **meta-agents-bundle.md** | 13 meta agents | meta/* | System support and maintenance |

---

## Agent Coverage

### Operations Agents (6)

1. ✅ **pricing-analyst** - See: pricing-agent.md OR operations-agents-bundle.md
2. ✅ **reservation-manager** - See: reservation-agent.md OR operations-agents-bundle.md
3. ✅ **calendar-agent** - See: calendar-agent.md OR operations-agents-bundle.md
4. ✅ **data-sync-checker** - See: operations-agents-bundle.md
5. ✅ **guest-communicator** - See: guest-communicator-agent.md OR operations-agents-bundle.md
6. ✅ **translation-agent** - See: operations-agents-bundle.md

### Technical Agents (4)

7. ✅ **platform-validator** - See: platform-validator-agent.md OR technical-agents-bundle.md
8. ✅ **browser-agent** - See: technical-agents-bundle.md
9. ✅ **security-auditor** - See: technical-agents-bundle.md
10. ✅ **smart-contract-auditor** - See: technical-agents-bundle.md

### Meta Agents (13)

11. ✅ **meta-agent** - See: meta-agent.md OR meta-agents-bundle.md
12. ✅ **research-agent** - See: meta-agents-bundle.md
13. ✅ **auditor** - See: meta-agents-bundle.md
14. ✅ **incident-reporter** - See: meta-agents-bundle.md
15. ✅ **html-report-generator** - See: meta-agents-bundle.md
16. ✅ **claude-md-agent** - See: meta-agents-bundle.md
17. ✅ **decision-evaluator** - See: meta-agents-bundle.md
18. ✅ **context-builder** - See: meta-agents-bundle.md
19. ✅ **knowledge-interviewer** - See: meta-agents-bundle.md
20. ✅ **test-runner** - See: meta-agents-bundle.md
21. ✅ **dashboard-generator** - See: meta-agents-bundle.md
22. ✅ **capability-extractor** - See: meta-agents-bundle.md
23. ✅ **documentation-manager** - See: meta-agents-bundle.md

---

## How to Use These Context Files

### For Agent Invocation

When invoking an agent, the mandatory context is automatically loaded via the `context_to_load` configuration in each agent's `.md` file:

```yaml
context_to_load:
  mandatory:
    - $DOCS/agents/context/mandatory/
```

### For Agent Development

When creating or modifying agents:

1. Read the relevant context file(s) for your agent domain
2. Ensure your agent's configuration aligns with the context
3. Follow the governance rules specified
4. Use the referenced documentation
5. Follow the report format specified

### For System Understanding

To understand the agent ecosystem:

1. Start with this README (overview)
2. Read bundle files for domain-wide context
3. Read individual agent files for specific details
4. Cross-reference with AGENTS.md and TEAM.md

---

## Context File Hierarchy

```
docs/agents/context/mandatory/
├── README.md                                    # This file (master index)
│
├── Individual Agent Files (Detailed)
│   ├── pricing-agent.md
│   ├── reservation-agent.md
│   ├── calendar-agent.md
│   ├── platform-validator-agent.md
│   ├── guest-communicator-agent.md
│   └── meta-agent.md
│
└── Bundle Files (Consolidated)
    ├── technical-agents-bundle.md       # 4 agents
    ├── operations-agents-bundle.md      # 6 agents
    └── meta-agents-bundle.md            # 13 agents
```

---

## Maintenance

### When to Update Context Files

- **Governance Changes**: When AGENTS.md rules are updated
- **Architecture Changes**: When project structure evolves
- **Agent Changes**: When agent capabilities or workflows change
- **New Agents**: When new agents are added to the system

### Update Process

1. Identify which context files need updates
2. Read source documentation (AGENTS.md, GEMINI.md, standards/)
3. Update context files with accurate information
4. Validate all references are correct
5. Update this README if file structure changes

### Responsible Agent

- **context-builder** is responsible for generating and updating context files
- **auditor** verifies context file quality
- **claude-md-agent** updates governance sections if needed

---

## References

### Core Documentation

- **AGENTS.md**: `/home/omar/omar-el-mountassir/projects/clients/villa-thaifa/AGENTS.md`
- **GEMINI.md**: `/home/omar/omar-el-mountassir/projects/clients/villa-thaifa/GEMINI.md`
- **Code of Conduct**: `docs/project/standards/agents/code_of_conduct.md`
- **Collaboration Protocol**: `docs/project/standards/agents/collaboration_protocol.md`
- **TEAM.md**: `docs/leadership/TEAM.md`

### Project Structure

- **Architecture**: `docs/architecture/project_structure.md`
- **ADR-002**: `docs/architecture/ADR-002-feature-mvc.md`

### Agent Configuration

- **Agent Definitions**: `.claude/agents/*.md`
- **Agent Registry**: `docs/agents/registry.json`

---

## Quality Assurance

### Validation Checklist

- [ ] All 23 agents have context coverage
- [ ] All file references use absolute paths
- [ ] All governance rules from AGENTS.md are included
- [ ] All references are accurate and accessible
- [ ] Report formats are clearly specified
- [ ] Dependencies are documented
- [ ] Quality standards are defined

### Success Criteria

- ✅ Every agent can find its mandatory context
- ✅ Context is accurate and comprehensive
- ✅ References are complete and correct
- ✅ File structure is logical and maintainable
- ✅ Bundle files reduce duplication efficiently
- ✅ Individual files provide agent-specific details

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0.0 | 2026-01-17 | Initial context file generation for 23 agents | context-builder |

---

**End of Master Index**

> For questions or issues, refer to the context-builder agent documentation
> or consult the project's AGENTS.md file.
