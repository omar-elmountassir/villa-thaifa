# Mandatory Context - Technical Agents Bundle

> **Agents**: platform-validator, browser-agent, security-auditor, smart-contract-auditor
> **Domain**: technical/*
> **Version**: 1.0.0
> **Last Updated**: 2026-01-17

---

## Purpose

This document provides shared mandatory context for all technical agents in the Villa Thaifa ecosystem. Individual agent-specific details are in separate sections below.

---

## Project Context

### Technical Infrastructure

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Architecture**: Feature MVC with JSON-First approach
- **Platforms**: HotelRunner (PMS), Booking.com (OTA)
- **Browser Automation**: Chrome via MCP tools

### Technical Stack

```typescript
// Core Technologies
Next.js 15          // React framework
TypeScript          // Type safety
Tailwind CSS        // Styling
JSON-Render         // UI from JSON schemas
```

---

## Shared Governance Rules

### Règle #10: Principes SOLID

All technical agents must follow:
- **S - Single Responsibility**: One clear purpose per agent
- **O - Open/Closed**: Extensible, closed for modification
- **L - Liskov Substitution**: Substitutable components
- **I - Interface Segregation**: Specific interfaces
- **D - Dependency Inversion**: Depend on abstractions

### Code of Conduct (from code_of_conduct.md)

1. **Strict MVC + Bindings**:
   - All features MUST follow `src/features/[name]/{model,view,controller,bindings}`
   - No Cross-Controller Calls (use `bindings/api.ts` or `bindings/events.ts`)
   - DIRECT IMPORTS ARE FORBIDDEN

2. **JSON-First Architecture**:
   - Views should be schemas/configs for `json-render`
   - UI is a projection of Agent State

3. **No Orphaned Files**:
   - Every file must be part of a defined Feature or Core System

4. **No Silent Failures**:
   - If a tool call fails, YOU MUST REPORT IT

---

## Agent-Specific Context

### 1. platform-validator

**Purpose**: Gatekeeper for all platform operations (HotelRunner, Booking.com)

**Key Responsibilities**:
- Validate data before platform operations
- Enforce 94%+ confidence threshold
- Require Omar confirmation for execution
- Block operations if validation fails

**Tools**: Read, Glob, Grep (read-only validation)

**Critical Rule**: NEVER execute platform operations — validation only

**File Context**:
```
data/specs/platform/rules.md           # Platform operation rules
data/specs/state/current/reservations.md  # Current state
data/specs/configs/hotel/rooms/        # Room configurations
```

---

### 2. browser-agent

**Purpose**: Browser automation specialist for Chrome operations

**Key Responsibilities**:
- Handle all browser-based operations
- Manage Chrome automation (scraping, forms, screenshots)
- Interact with HotelRunner, Booking.com web interfaces
- Preserve orchestrator's context window

**Tools**:
- mcp__claude-in-chrome__computer
- mcp__claude-in-chrome__navigate
- mcp__claude-in-chrome__read_page
- mcp__claude-in-chrome__screenshot
- And 7+ other MCP tools

**Critical Rules**:
- Call tabs_context_mcp FIRST before any action
- Take screenshots before/after important actions
- Handle tab detachment errors gracefully
- Follow 90%+ confidence rule (below 90% → STOP and report)

**File Context**:
```
data/specs/platform/rules.md           # Platform rules (read before operations)
ai/output/                             # Screenshots and extracted data
```

**Dependencies**: platform-validator (must validate before operations)

---

### 3. security-auditor

**Purpose**: Application security specialist

**Key Responsibilities**:
- Review code for vulnerabilities
- Implement secure authentication (JWT, OAuth2)
- Ensure OWASP compliance
- Handle CORS, CSP, encryption

**Focus Areas**:
- Authentication/authorization (JWT, OAuth2, SAML)
- OWASP Top 10 vulnerability detection
- Secure API design and CORS configuration
- Input validation and SQL injection prevention
- Encryption implementation
- Security headers and CSP policies

**Tools**: Read, Write, Edit, Bash

**Approach**:
1. Defense in depth - multiple security layers
2. Principle of least privilege
3. Never trust user input - validate everything
4. Fail securely - no information leakage
5. Regular dependency scanning

**Output**:
- Security audit report with severity levels
- Secure implementation code with comments
- Authentication flow diagrams
- Security checklist
- Recommended security headers

---

### 4. smart-contract-auditor

**Purpose**: Smart contract security auditor (blockchain)

**Key Responsibilities**:
- Vulnerability assessment (reentrancy, access control)
- Attack pattern recognition (flash loans, MEV)
- Static analysis (Slither, Mythril, Semgrep)
- Dynamic testing (fuzzing, invariant testing)
- Economic security analysis

**Focus Areas**:
- Reentrancy vulnerabilities
- Access control issues
- Integer overflow/underflow
- Flash loan attacks
- MEV (Maximal Extractable Value)
- Governance attacks
- Tokenomics review

**Tools**: Read, Write, Edit

**Approach**:
1. Systematic code review (OWASP guidelines)
2. Automated scanning with multiple tools
3. Manual inspection for business logic
4. Economic attack vector modeling
5. Comprehensive reporting

**Output**:
- Detailed security audit reports
- Vulnerability analysis with PoC exploits
- Remediation recommendations
- Risk assessment matrices
- Post-remediation verification

---

## Shared Technical Standards

### Architecture (ADR-002)

All technical work MUST follow Feature MVC:

```
src/features/[feature-name]/
├── model/        # Data structures, types
├── view/         # JSON schemas for UI
├── controller/   # Business logic
└── bindings/     # API, events (communication layer)
```

**NO cross-controller imports** — use bindings/

### File Organization

- **Resources**: Global, organizational (`resources/legal`, `resources/brand`)
- **Assets**: Local, consumable (`courses/*/assets/videos`)
- **NO root-level** `utils/` or `assets/` dumping grounds

### Semantic Naming

- Use descriptive, semantic names
- NO numbered prefixes (`01-`, `vol-1-`) → forbidden
- NO generic names (`data.ts`, `handler.ts`)

---

## Shared References

### Core Documentation

- **AGENTS.md**: `/home/omar/omar-el-mountassir/projects/clients/villa-thaifa/AGENTS.md`
- **GEMINI.md**: `/home/omar/omar-el-mountassir/projects/clients/villa-thaifa/GEMINI.md`
- **Code of Conduct**: `docs/project/standards/agents/code_of_conduct.md`
- **Collaboration Protocol**: `docs/project/standards/agents/collaboration_protocol.md`

### Architecture

- **Project Structure**: `docs/architecture/project_structure.md`
- **ADR-002 (Feature MVC)**: `docs/architecture/ADR-002-feature-mvc.md`

### Platform Knowledge

- **Platform Rules**: `data/specs/platform/rules.md`
- **HotelRunner**: `data/specs/knowledge/platforms/hotelrunner/`
- **Booking.com**: `data/specs/knowledge/platforms/booking/`

---

## Quality Standards (Brutal Excellence)

### Architecture (A)
- **Excellent**: Modular, atomic modularity, colocation principle
- **Poor**: Spaghetti code, tight coupling, flat structures

### Reliability (R)
- **Excellent**: Handles edge cases, defensive coding, testable
- **Poor**: Happy path only, swallowed exceptions

### Elegance (E)
- **Excellent**: Semantic naming, zero boilerplate
- **Poor**: Generic names, dead code, numbered prefixes

### Effort (F)
- **Robust (8-10)**: Handles edge cases, future-proof, comprehensive
- **Weak (0-4)**: Happy path only, copy-paste, hardcoded

### Agent-Readiness (M)
- **Excellent**: Full YAML frontmatter, machine-parsable
- **Poor**: Plain text, implicit context, missing metadata

---

## Shared Success Criteria

- All code follows SOLID principles
- No cross-controller violations
- JSON-first architecture maintained
- Security best practices followed
- Clear documentation and comments
- No orphaned files
- Semantic naming enforced

---

**End of Mandatory Context - Technical Agents Bundle**
