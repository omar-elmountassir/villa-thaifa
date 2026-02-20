# Architecture ADR-001: Domains vs Areas Structure

> **Date**: 2026-01-12
> **Status**: ACCEPTED
> **Deciders**: Omar, Antigravity
> **Context**: Definition of the future codebase structure for Villa Thaifa PMS.

## 1. Context

We are building a **Property Management System (PMS)** platform.
This is not a simple showcase website ("Experience"), it's a management tool ("Business Truth").

Key features include:

- **Reservations** (Conditional rules, date conflicts)
- **Pricing** (Seasons, promos, complex calculations)
- **Channel Manager** (HotelRunner Sync, Mapping)
- **Finance** (Revenues, Expenses)

## 2. Options

### Option A: `src/areas/` (Feature/UI Driven)

- Organization by screen: `Dashboard`, `Settings`, `BookingPage`.
- **Advantage**: Easy to build quick views.
- **Disadvantage**: Business logic (e.g., "Calculate price") gets duplicated or hidden within view controllers.

### Option B: `src/domains/` (Domain Driven - RECOMMENDED)

- Organization by "Business Truth": `Reservations`, `Pricing`, `Channels`.
- **Advantage**:
  - The logic for "How we calculate a price" is isolated from "How we display it".
  - Essential for a system that will have multiple interfaces (Web, WhatsApp Bot, internal API).
  - Future-proof for AI (Agents better understand isolated concepts).

## 3. Recommended Decision: `domains/`

We choose the **Domain-Driven** approach because Villa Thaifa is a project with high business rule density.

### Target Structure (Draft)

```text
src/
├── domains/
│   ├── booking/        (Reservation logic, Availability)
│   ├── pricing/        (Seasons, Promos, Calculations)
│   ├── inventory/      (Rooms, Maintenance)
│   └── accounting/     (Revenues, Invoices)
├── apps/               (Our interfaces / Areas)
│   ├── admin-web/      (React/Next Dashboard)
│   └── whatsapp-bot/   (Conversational Agent)
└── core/               (Shared infra, DB)
```

## 4. Technical Stack (To Be Defined)

This structure plays well with:

- **Backend / API**: Node.js (NestJS or Hono) or Python (FastAPI).
- **Frontend**: Next.js or Vite.
