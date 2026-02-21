# Villa Thaifa App — Vision Seed

**Date**: 2026-02-21
**Status**: Concept — needs planning before any build
**For**: Omar + Said

## The Idea

A web app for Villa Thaifa operations. Not a full hotel PMS — a lightweight, purpose-built tool for Omar and Said to manage daily operations.

## First module: Property & Rooms Dashboard

What the json-render demo attempted to show:

- Property overview (name, location, ratings across platforms)
- 12 room cards with pricing (EUR/MAD), capacity, category
- Key stats (total rooms, price range, exchange rate)
- Policies (check-in/out, cancellation, children, pets)
- Facilities (pool, spa, restaurant, wifi, parking, transfer)

This dashboard is the SEED — the first page of the app.

## Potential future modules

- Booking calendar / availability view
- Guest communication hub (WhatsApp integration)
- Revenue dashboard (occupancy, rates, revenue per room)
- Said's validation checklist (interactive version of data/admin/said-data-validation-checklist.md)
- Housekeeping status board

## Tech stack (proposed)

- Next.js + Tailwind + shadcn/ui (validated by json-render demo experience)
- Data source: canonical JSON files in data/ (rates.json, property-config.json, etc.)
- No database needed initially — read directly from repo files
- Deploy: local or Vercel

## Data sources available

- data/finance/rates.json — room pricing (12 rooms, EUR/MAD)
- data/property/property-config.json — property overview, ratings, policies, facilities
- data/rooms/ — per-room profiles (R01-R12)
- data/operations/ — channels, check-in, housekeeping, maintenance, emergency configs

## Next step

Plan the app properly (ROADMAP.md) before building anything. Use /plan or architect agent.

## Relationship to LHCM-OS

Villa Thaifa app = first pilot. If successful, generalize patterns into LHCM-OS framework. VT-specific, LHCM-OS-aware.
