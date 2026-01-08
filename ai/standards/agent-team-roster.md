# Agent Team Roster — Villa Thaifa

> **Purpose**: Complete documentation of all agents needed for Villa Thaifa operations.
> **Pattern**: One team, complete coverage, clear responsibilities.

---

## Team Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        VILLA THAIFA AGENT TEAM                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ORCHESTRATOR (Claude Opus 4.5)                                         │
│       │                                                                 │
│       ├── INFRASTRUCTURE ─────┬── meta-agent (red)                      │
│       │                       └── claude-md-agent (white)               │
│       │                                                                 │
│       ├── OPERATIONS ─────────┬── browser-agent (cyan)                  │
│       │                       ├── platform-validator (yellow)           │
│       │                       └── reservation-manager (purple) [PLANNED]│
│       │                                                                 │
│       ├── INTELLIGENCE ───────┬── research-agent (green)                │
│       │                       ├── pricing-analyst (blue) [PLANNED]      │
│       │                       └── calendar-agent (green) [PLANNED]      │
│       │                                                                 │
│       ├── COMMUNICATION ──────┬── guest-communicator (pink) [PLANNED]   │
│       │                       └── translation-agent (cyan) [PLANNED]    │
│       │                                                                 │
│       └── QUALITY ────────────┬── incident-reporter (orange) [PLANNED]  │
│                               └── data-sync-checker (yellow) [PLANNED]  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Complete Team (All Active)

| Agent | Color | Role | Status |
|-------|-------|------|--------|
| `meta-agent` | red | Creates new agents | ✅ Active |
| `browser-agent` | cyan | Chrome automation for platforms | ✅ Active |
| `research-agent` | green | Web research and documentation | ✅ Active |
| `claude-md-agent` | white | CLAUDE.md maintenance | ✅ Active |
| `platform-validator` | yellow | Validates before platform ops | ✅ Active |
| `incident-reporter` | orange | Creates incident reports | ✅ Active |
| `reservation-manager` | purple | Handles reservation CRUD | ✅ Active |
| `pricing-analyst` | blue | Analyzes pricing, recommends rates | ✅ Active |
| `guest-communicator` | pink | Drafts guest communications | ✅ Active |
| `translation-agent` | cyan | French/English/Arabic translations | ✅ Active |
| `calendar-agent` | green | Availability analysis | ✅ Active |
| `data-sync-checker` | yellow | Validates data consistency | ✅ Active |

---

## Role Coverage Matrix

| Business Function | Coverage | Agent(s) |
|-------------------|----------|----------|
| **Agent Creation** | ✅ Full | meta-agent |
| **Browser Automation** | ✅ Full | browser-agent |
| **Web Research** | ✅ Full | research-agent |
| **Governance** | ✅ Full | claude-md-agent |
| **Platform Validation** | ✅ Full | platform-validator |
| **Incident Reporting** | ✅ Full | incident-reporter |
| **Reservations** | ✅ Full | reservation-manager |
| **Pricing** | ✅ Full | pricing-analyst |
| **Guest Comms** | ✅ Full | guest-communicator |
| **Translation** | ✅ Full | translation-agent |
| **Calendar Sync** | ✅ Full | calendar-agent |
| **Data Sync Check** | ✅ Full | data-sync-checker |

---

## Agent Specifications (Planned)

### incident-reporter (Priority 1)

```yaml
name: incident-reporter
description: Incident documentation specialist. Creates structured incident reports. Use PROACTIVELY when any error, failure, or unexpected behavior occurs.
color: orange
model: haiku
tools: Read, Write, Glob
permissionMode: default
```

**Purpose**: Automatically creates incident files at `docs/incidents/open/YYYY-MM-DD-HHmm-description.md` following project protocol.

---

### reservation-manager (Priority 1)

```yaml
name: reservation-manager
description: Reservation operations engineer. Handles reservation creation, modification, and cancellation. Use PROACTIVELY for any reservation-related task.
color: purple
model: sonnet
tools: Read, Write, Edit, Glob, Grep
permissionMode: default
```

**Purpose**: Manages reservation lifecycle, updates `data/specs/state/current/reservations.md`, coordinates with browser-agent for platform updates.

---

### pricing-analyst (Priority 1)

```yaml
name: pricing-analyst
description: Revenue optimization strategist. Analyzes pricing data and recommends rate adjustments. Use PROACTIVELY when pricing decisions are needed.
color: blue
model: opus
tools: Read, Glob, Grep, WebSearch
permissionMode: plan
```

**Purpose**: Analyzes occupancy, competitor rates, seasonal demand. Produces pricing recommendations for Omar's approval.

---

### guest-communicator (Priority 2)

```yaml
name: guest-communicator
description: Guest messaging specialist. Drafts professional guest communications. Use PROACTIVELY when guest messages need to be composed.
color: pink
model: sonnet
tools: Read, Write
permissionMode: default
```

**Purpose**: Creates welcome messages, check-in instructions, response templates. Maintains consistent voice per `data/admin/client/PROFILE.md`.

---

### translation-agent (Priority 2)

```yaml
name: translation-agent
description: Multilingual translator. Translates content between French, English, and Arabic. Use when translation is needed for guest communications or documentation.
color: cyan
model: haiku
tools: Read, Write
permissionMode: default
```

**Purpose**: Handles translation for Marrakech's international guests. Preserves tone and context.

---

### calendar-agent (Priority 3)

```yaml
name: calendar-agent
description: Availability analyzer. Analyzes room availability across platforms. Use PROACTIVELY to check for conflicts or optimize occupancy.
color: green
model: sonnet
tools: Read, Glob, Grep
permissionMode: plan
```

**Purpose**: Scans reservations, identifies gaps, flags conflicts. Supports revenue optimization.

---

### data-sync-checker (Priority 3)

```yaml
name: data-sync-checker
description: Data integrity validator. Validates consistency between HotelRunner and Booking.com. Use periodically or when sync issues are suspected.
color: yellow
model: sonnet
tools: Read, Glob, Grep
permissionMode: plan
```

**Purpose**: Compares platform data, flags discrepancies, prevents data drift.

---

## Team Statistics

| Metric | Count |
|--------|-------|
| **Total Agents** | 12 |
| **By Model** | |
| └─ Haiku | 3 |
| └─ Sonnet | 6 |
| └─ Opus | 3 |
| **By Color** | |
| └─ Red (Creation) | 1 |
| └─ Orange (Debug) | 1 |
| └─ Yellow (Valid) | 2 |
| └─ Green (Research) | 2 |
| └─ Blue (Executive) | 1 |
| └─ Purple (Engineer) | 1 |
| └─ Cyan (Utility) | 2 |
| └─ Pink (Comms) | 1 |
| └─ White (Docs) | 1 |

---

## Usage

To invoke an agent:

```
Omar: "Analyse les disponibilités"
Orchestrator: [Delegates to calendar-agent]

Omar: "Vérifie la sync avec Booking"
Orchestrator: [Delegates to data-sync-checker]

Omar: "Crée un message de bienvenue pour M. Dupont"
Orchestrator: [Delegates to guest-communicator]
```

The orchestrator automatically delegates to the appropriate agent based on the task.

---

_Agent Team Roster — Villa Thaifa Project_
