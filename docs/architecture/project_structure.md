# Project Structure — Villa Thaifa

> **Authority**: Referenced by `AGENTS.md` (Master Manifest)
> **Dernière mise à jour**: 2026-01-20
> **Généré par**: tree command + manual curation

---

## Root Directory

```
villa-thaifa/
├── AGENTS.md          # Master Manifest (tous agents)
├── CLAUDE.md          # Claude Code CLI context
├── GEMINI.md          # Gemini/Antigravity context
├── README.md          # Human entry point
├── ROADMAP.md         # Task registry (SSOT)
├── package.json
├── tsconfig.json
├── .claude/           # Agent configurations
│   └── agents/        # 23 agent definitions (.md)
├── archive/           # Deprecated content (by date/type)
├── content/           # Static assets (photos, markdown)
├── docs/              # Knowledge Base (81 dirs)
├── src/               # Application code (20 dirs)
└── tasks/             # Work management
    └── active.md      # Kanban
```

---

## /docs/ — Knowledge Base (81 directories)

```
docs/
├── agents/                    # Agent system
│   ├── booking-manager/
│   ├── capabilities/          # Extracted capabilities
│   ├── context/
│   │   ├── domain/{meta,ops,tech}/
│   │   ├── mandatory/         # Required context files
│   │   └── mission/
│   └── handovers/
│
├── architecture/              # ADRs, structure docs
├── analysis/
├── briefs/
│
├── incidents/                 # Issue tracking
│   ├── open/
│   ├── recurring/
│   └── resolved/
│
├── knowledge/                 # Business knowledge
│   ├── client/
│   ├── communications/templates/
│   ├── finance/
│   ├── processes/
│   └── property/FACILITIES/
│
├── leadership/                # Team structure
│
├── learning/                  # Training materials
│   └── agentic-engineering/
│       ├── curriculum/{01,02,03}/
│       ├── frameworks/
│       ├── lessons/
│       └── patterns/
│
├── project/                   # Project management
│   ├── audit/
│   ├── communication/whatsapp/
│   ├── documentation/
│   ├── meta/                  # MISSION.md lives here
│   ├── plans/
│   ├── requirements/
│   └── standards/agents/      # Code of conduct, protocols
│
├── reports/                   # Reporting system
│   ├── current/{audit,agents,operations,investigations}/
│   ├── by-date/
│   ├── by-agent/
│   ├── templates/
│   └── archived/2026/Q1/
│
├── specs/                     # Technical specifications
│   ├── configs/
│   └── knowledge/
│       ├── logs/
│       ├── platforms/         # OTA documentation
│       │   ├── booking/
│       │   ├── hotelrunner/
│       │   └── OTA-INDEX.md   # Centralized OTA index
│       ├── policies/rules/
│       └── villa-thaifa/state/{current,planned}/
│
├── standards/
├── templates/
└── testing/
```

---

## /src/ — Application Code (20 directories)

```
src/
├── app/                       # Next.js App Router
│   ├── admin/login/
│   └── rooms/[id]/
│
├── components/ui/             # Shared UI components
│
├── data/                      # Static JSON data
│
├── systems/                   # Core infrastructure (future)
│   └── services/
│       └── channels/          # OTA integrations (HotelRunner, Booking, Airbnb)
│
└── features/                  # Domain-Driven Slices (MVC)
    ├── admin/
    │   ├── components/
    │   ├── config/
    │   └── lib/
    ├── facilities/
    │   ├── bindings/
    │   └── model/
    └── rooms/
        ├── bindings/
        ├── components/
        └── model/
```

---

## Key Locations Quick Reference

| Purpose | Path |
|---------|------|
| **OTA/Channels (docs)** | `docs/specs/knowledge/platforms/` |
| **OTA/Channels (code)** | `src/systems/services/channels/` (futur) |
| **Agent configs** | `.claude/agents/` |
| **Reports** | `docs/reports/current/` |
| **Business knowledge** | `docs/specs/knowledge/` |
| **Technical specs** | `docs/specs/` |
| **Standards/Rules** | `docs/project/standards/` |
| **Architecture decisions** | `docs/architecture/` |

---

## Maintenance

**Ce fichier doit être mis à jour quand:**
- Nouveau directory créé
- Directory renommé ou déplacé
- Restructuration majeure

**Commande de vérification:**
```bash
tree -d /path/to/villa-thaifa/{docs,src} | head -100
```

---

_Structure documentée: 2026-01-20_
