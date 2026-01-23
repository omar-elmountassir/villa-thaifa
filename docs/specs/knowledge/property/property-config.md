# Villa Thaifa — Property Configuration

> **Purpose**: Centralized property-level configuration for all agents.
> **Consumers**: calendar-agent, pricing-analyst, reservation-manager, etc.
> **Last Updated**: 2026-01-20
> **SSOT**: This file is the single source of truth for property configuration.

---

## Property Overview

| Field | Value |
|-------|-------|
| **Property Name** | Villa Thaifa |
| **Type** | Boutique Hotel / Riad |
| **Location** | Marrakech, Morocco |
| **Total Rooms** | 12 |
| **Room Types** | 8 |

---

## Room Configuration

**Data Source**: `src/data/rooms.json`

### Room Count

| Metric | Value |
|--------|-------|
| **Total Physical Rooms** | 12 |
| **Room Types** | 8 |

### Room Mapping (Physical → Types)

| Room Numbers | Type Name | Count |
|--------------|-----------|-------|
| 1, 3, 8 | Deluxe Triple Room | 3 |
| 2 | Deluxe Double Room | 1 |
| 4, 5 | Double Room Superior | 2 |
| 6 | Executive Suite | 1 |
| 7 | Deluxe King Suite | 1 |
| 9, 11 | Family Suite | 2 |
| 10 | Suite | 1 |
| 12 | Presidential Suite | 1 |

---

## Legal Entity

> **Full Details**: `docs/specs/knowledge/property/legal-info.md`

| Field | Value |
|-------|-------|
| **Legal Name** | VILLA THAIFA (SARLAU) |
| **Legal Form** | Single-Member Limited Liability Company |
| **Tax ID (IF)** | 06529089 |
| **Trade Register** | 60557 (Marrakech Court) |

**Usage**: Use Tax ID for OTA "VAT Number" fields, Trade Register for "Business Registration" fields.

---

## Channel Manager

| Field | Value |
|-------|-------|
| **Channel Manager** | HotelRunner |
| **Property ID (Booking.com)** | 5446847 |
| **Connected OTAs** | 1 (Booking.com) |
| **Pending OTAs** | 6 (Expedia, Airbnb, Trip.com, Traveloka, Hotelbeds, Odigeo) |

---

## Data File Locations

| Data | Path |
|------|------|
| **Rooms JSON** | `src/data/rooms.json` |
| **Facilities JSON** | `src/data/facilities.json` |
| **OTA Protocols** | `docs/specs/knowledge/ota/protocols/browser-protocols.md` |
| **Legal Info** | `docs/specs/knowledge/property/legal-info.md` |
| **Credentials** | `.env.local` |

---

## Agents Using This Config

| Agent | Uses |
|-------|------|
| **calendar-agent** | Room count, availability analysis |
| **pricing-analyst** | Room types, rate optimization |
| **reservation-manager** | Room assignments, booking lifecycle |
| **data-sync-checker** | Room mapping verification |
| **browser-agent** | Property context for platform operations |

---

## How to Reference

**In agent instructions**, use:
```
Read property config from: docs/specs/knowledge/property/property-config.md
```

**DO NOT hardcode**:
- Room count ("12 rooms")
- Room type names
- Property IDs
- Platform counts

---

_Property Configuration — Villa Thaifa_
