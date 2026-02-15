# data/ — Canonical Source of Truth

## Structure

- `rooms/` — room inventory, reconciliation log, OTA exports
- `finance/` — billing and rate data (pending onboarding)
- `pending-domains/` — amenities, beds, facilities awaiting canonical hardening
- `status/` — per-domain canonical/pending/archived tracking

## Authority Principle

- Canonical files and reconciliation logs are authoritative.
- Legacy/pending files are contestable until reconciled.
- `STATUS.md` is the top-level status summary for all data domains.
