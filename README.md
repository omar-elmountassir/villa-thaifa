# Villa Thaifa — Data & Operations Workspace

Operational workspace for Villa Thaifa digital transformation.

## Structure

```
├── data/         canonical source-of-truth (rooms, finance, pending domains)
├── docs/         operational docs, agent configs, client info, media
├── context/      reference material — architecture, planning, audits (read-only)
├── ops/          status dashboards, intake queue, migration logs
├── scripts/      validation and tooling utilities
├── src/          application code
└── tests/        pytest suite
```

## Quick Start

```bash
uv sync
make test
```

## Governance

Read first: `AGENTS.md`, then `ops/status/INDEX.md`.
