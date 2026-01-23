# CLAUDE.md - Claude Code CLI Context

> **Role**: Specialized Agent Interface for Claude Code CLI
> **Last Updated**: 2026-01-20

## Quick Start

1. **Read [Master Manifest](AGENTS.md) @AGENTS.md FIRST** - Contains governance rules (#1-15), Agent Registry (24 agents)
2. **Read [`GEMINI.md`]GEMINI.md @GEMINI.md** - Strategic Vision, Antigravity Framework
3. **Check ROADMAP.md** - Task registry (SSOT for all work)

---

## OUTPUT RULES (Claude-Specific)

### Regle #16: Fichiers > Chat

- **TOUJOURS** ecrire le contenu de valeur directement dans des fichiers
- **JAMAIS** mettre du contenu reutilisable/important dans le chat
- Apres creation/modification: fournir uniquement le **lien du fichier**
- **NE PAS** repeter le contenu du fichier dans le chat

**Exemples:**

- BAD: "Voici le message: [contenu dans le chat]"
- GOOD: "Fichier cree: `docs/reports/current/operations/2026-01-20-operations-hotelrunner-001.md`"

---

### Regle #17: Reports - Structure Obligatoire

- **JAMAIS** creer des rapports a la racine de `docs/reports/`
- **TOUJOURS** placer dans la bonne categorie:
  - `current/audit/` - Audits, evaluations
  - `current/operations/` - Operations plateforme, HotelRunner, messages client
  - `current/investigations/` - Enquetes, verifications, incidents
  - `current/agents/` - Rapports d'agents, handoffs

---

### Regle #18: Reports - Naming Convention

Format obligatoire: `YYYY-MM-DD-category-context-seq.md`

- `YYYY-MM-DD` = Date ISO
- `category` = audit|operations|investigations|agents
- `context` = Agent ou domaine (hotelrunner, calendar, auditor)
- `seq` = Numero sequentiel (001, 002, ...)

**Exemple:** `2026-01-20-operations-hotelrunner-001.md`

---

### Regle #19: Reports - Index by-date

- **TOUJOURS** creer/mettre a jour `docs/reports/by-date/YYYY-MM-DD.md`
- Lister tous les rapports du jour avec liens relatifs

---

## How to Invoke Agents

```bash
# Using Claude Code CLI
claude @agent-name "prompt"

# Examples
claude @auditor "Audit /src/app/admin/ directory"
claude @platform-validator "Validate booking data for Room 3, Jan 20-25"
claude @browser-agent "Screenshot HotelRunner dashboard"
claude @research-agent "Find Next.js 15 best practices for i18n"
```

> **Full Agent Registry**: See [AGENTS.md](AGENTS.md) section "Agent Registry (24 Agents)"

---

## Tools Available

### File System Operations

| Tool      | Description               | Use Case                                  |
| --------- | ------------------------- | ----------------------------------------- |
| **Read**  | Read file contents        | View files, analyze code, check configs   |
| **Write** | Write/create files        | Generate new files, complete replacements |
| **Edit**  | Edit existing files       | Precise edits, string replacements        |
| **Glob**  | Pattern-based file search | Find files by pattern (e.g., `**/*.tsx`)  |
| **Grep**  | Content search            | Search file contents with regex           |

### Command Execution

| Tool     | Description            | Use Case                               |
| -------- | ---------------------- | -------------------------------------- |
| **Bash** | Execute shell commands | Run git, npm, tests, system operations |

### Jupyter Operations

| Tool                      | Description            | Use Case                     |
| ------------------------- | ---------------------- | ---------------------------- |
| **NotebookEdit**          | Edit Jupyter notebooks | Modify notebook cells        |
| **mcp**ide**executeCode** | Execute code in kernel | Run Python code in notebooks |

### MCP Integrations

| Tool                                                  | Description             | Use Case                   |
| ----------------------------------------------------- | ----------------------- | -------------------------- |
| **mcp**ide**getDiagnostics**                          | Get VS Code diagnostics | Check for errors/warnings  |
| **mcp**plugin_context7_context7**query-docs**         | Query documentation     | Get library/framework docs |
| **mcp**plugin_context7_context7**resolve-library-id** | Resolve library IDs     | Find Context7 library IDs  |

### Web and Browser

| Tool                                      | Description        | Use Case                            |
| ----------------------------------------- | ------------------ | ----------------------------------- |
| **WebSearch**                             | Search the web     | Find current information            |
| **mcp**web_reader**webReader**            | Read web pages     | Fetch and convert URLs              |
| **mcp**plugin_playwright_playwright**\*** | Browser automation | Automate Chrome, screenshots, forms |

### Image Analysis

| Tool                                                  | Description        | Use Case                                  |
| ----------------------------------------------------- | ------------------ | ----------------------------------------- |
| **mcp**zai-mcp-server**ui_to_artifact**               | Convert UI to code | Generate frontend code from screenshots   |
| **mcp**zai-mcp-server**extract_text_from_screenshot** | OCR                | Extract text from screenshots             |
| **mcp**zai-mcp-server**diagnose_error_screenshot**    | Diagnose errors    | Analyze error screenshots                 |
| **mcp**zai-mcp-server**understand_technical_diagram** | Analyze diagrams   | Understand technical diagrams             |
| **mcp**zai-mcp-server**analyze_data_visualization**   | Analyze charts     | Extract data insights from visualizations |

### Planning and Tracking

| Tool          | Description       | Use Case               |
| ------------- | ----------------- | ---------------------- |
| **TodoWrite** | Manage task lists | Track multi-step tasks |
| **Skill**     | Execute skills    | Invoke built-in skills |

### Time Operations

| Tool                            | Description       | Use Case                  |
| ------------------------------- | ----------------- | ------------------------- |
| **mcp**time**get_current_time** | Get current time  | Check time in timezones   |
| **mcp**time**convert_time**     | Convert timezones | Convert between timezones |

---

## Key Paths

| Resource          | Path                                                             |
| ----------------- | ---------------------------------------------------------------- |
| **Agent Configs** | `.claude/agents/*.md`                                            |
| **Reports**       | `docs/reports/current/{audit,agents,operations,investigations}/` |
| **Templates**     | `docs/reports/templates/`                                        |
| **Standards**     | `docs/project/standards/agents/`                                 |

---

## References

> **All governance, rules, and agent information is in AGENTS.md**

| What                           | Where                                                                                                |
| ------------------------------ | ---------------------------------------------------------------------------------------------------- |
| **Governance Rules (#1-15)**   | [AGENTS.md](AGENTS.md)                                                                               |
| **Agent Registry (24 agents)** | [AGENTS.md](AGENTS.md)                                                                               |
| **Agent Selection Guide**      | [AGENTS.md](AGENTS.md)                                                                               |
| **Project Structure**          | [docs/architecture/project_structure.md](docs/architecture/project_structure.md)                     |
| **Code of Conduct**            | [docs/project/standards/agents/code_of_conduct.md](docs/project/standards/agents/code_of_conduct.md) |
| **Strategic Vision**           | [GEMINI.md](GEMINI.md)                                                                               |
| **Task Registry (SSOT)**       | [ROADMAP.md](ROADMAP.md)                                                                             |
| **Report System**              | [docs/reports/README.md](docs/reports/README.md)                                                     |

---

## Identity

- You are a **Sub-Agent** within the Villa Thaifa ecosystem
- Your output must be compatible with the Antigravity Framework
- Follow handover protocol in `docs/project/standards/agents/collaboration_protocol.md`

---

_For governance rules, agent registry, and common standards, refer to [AGENTS.md](AGENTS.md)._
