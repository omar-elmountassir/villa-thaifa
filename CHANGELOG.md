# Changelog

All notable changes to this workspace will be documented in this file.

The format is based on Keep a Changelog.

## [Unreleased]

### Added

- Linear approved as primary backlog/work management tool (score 8.675 vs GitHub Issues 7.225).
- Comprehensive Linear migration preparation handoff: `ops/handoff/handoff-linear-migration-preparation.md`.
- Audit backlog triage file: `~/omar/operations/productivity/audit-backlog-triage.md` (212 files across 3 directories).
- Linear research: MCP deep-dive (40 tools), GitHub sync analysis, workspace setup best practices.
- PreToolUse blocking hooks: `block-html-writes.sh` (forces Gemini delegation for HTML), `enforce-edit-over-write.sh` (forces Edit over Write on existing files).
- Session handoff system: `ops/handoff/` with verify-first task instructions for cross-session continuity.
- Mandatory post-edit verification rule in `rules.md` (independent agent verifies no content loss after edits).

### Changed

- Migration placement audit completed (436 files scanned, 13 violations fixed, 8 warnings logged).
- Loose ops/ root files moved to correct subdirectories (handoff/, audit/, archive/).
- `data/STATUS.md` moved to `ops/status/data-domain-status.md` per directory contract.
- AGENTS.md Open Loops updated (replaced completed items with directory triage backlog).

### Changed

- Full repository restructuring: 200+ files moved to correct directories per AGENTS.md contract.
- All 12 room profiles deduplicated (R01-R12, ~45% size reduction, zero content loss — Opus-verified).
- `AGENTS.md` rewritten with File Placement Decision Tree + Directory Contract for unambiguous file navigation.
- `STRUCTURE.md` updated to match post-consolidation filesystem.
- `docs/README.md` updated to reflect new structure.
- Finance data populated: `data/finance/rates.json` and `data/finance/billing.json`.
- Bootstrap branch merged to main (branch deleted).

## [2026-02-13] - Baseline

### Added

- Root governance baseline files: `AGENTS.md`, `README.md`, `CHANGELOG.md`.
- Operational status system under `ops/status/`.
- Unprocessed intake manifest at `ops/intake/unprocessed/manifest.csv`.
- Full-depth isolation snapshot: `ops/status/2026-02-13-isolation-report-full-depth.md`.

### Changed

- Repository now has explicit operating principles for canonicalization, reconciliation, and archive safety.
- `AGENTS.md` now enforces contestability-by-default for unprocessed items and mandatory clarification workflow.
- Git has been initialized locally and connected to GitHub origin.
- Baseline synced to remote branch: `bootstrap/2026-02-13-baseline`.
