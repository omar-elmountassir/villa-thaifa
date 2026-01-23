# Villa Thaifa - Unified Archive Directory

**Purpose**: Centralized repository for all archived project content
**Established**: 2026-01-17
**Version**: 2.0.0 (Consolidated Structure)

## Directory Structure

This `/archive/` directory is the **ONLY** archive location in the Villa Thaifa project. All historical documents, legacy systems, and project snapshots are consolidated here.

### Top-Level Organization

```
/archive/
├── README.md                    (this file)
│
├── legacy/                      (Old systems and deprecated structures)
│   └── archive_v1/              (First archival system, pre-consolidation)
│
├── by-date/                     (Chronological archives)
│   └── YYYY/
│       └── QQ/                  (Quarter: Q1, Q2, Q3, Q4)
│           ├── briefs/
│           ├── changelogs/
│           ├── decisions.md
│           ├── demos/
│           ├── drafts/
│           ├── execution/
│           ├── ideas/
│           ├── reports/
│           ├── snapshots/
│           ├── state-docs/
│           └── tasks/
│
├── by-type/                     (Categorized archives by content type)
│   ├── strategic/               (Strategic documents and plans)
│   ├── workflows/               (Workflow definitions)
│   ├── documentation/           (Technical documentation)
│   ├── data/                    (Data files and schemas)
│   └── meta/                    (Project metadata: AGENTS.md, ROADMAP.md, etc.)
│
└── project-snapshots/           (Complete project snapshots at specific dates)
    └── YYYY-MM-DD_description/  (Full project structure preserved)
```

## Archive Categories

### `/archive/legacy/`
**Contains**: Old systems, deprecated architectures, and historical implementations
**Example**: `archive_v1/` (the original archive system from 2025-12)

**When to use**:
- Preserving old implementation approaches
- Reference for historical context
- Deprecated workflows that may need revival

**Conventions**:
- Name with `_v1`, `_v2` suffix for version tracking
- Include README.md explaining why it was archived
- Keep complete structure intact

### `/archive/by-date/`
**Contains**: Time-organized archives (quarterly structure)
**Organization**: Year → Quarter → Content type

**When to use**:
- Chronological project history
- Quarterly reviews and retrospectives
- Time-based project tracking

**Conventions**:
- Use ISO 8601 dates: `YYYY-MM-DD`
- Organize by quarter: `Q1`, `Q2`, `Q3`, `Q4`
- Separate content by type (briefs, reports, tasks, etc.)

### `/archive/by-type/`
**Contains**: Content organized by category/function
**Categories**: Strategic, workflows, documentation, data, meta

**When to use**:
- Finding content by topic rather than time
- Reference materials for specific domains
- Cross-project documentation

**Conventions**:
- Use descriptive category names
- Include index/README in each category
- Link related documents

### `/archive/project-snapshots/`
**Contains**: Complete project structure at specific points in time
**Format**: Full directory tree preservation

**When to use**:
- Major milestones and releases
- Pre-refactoring backups
- Complete state restoration points

**Conventions**:
- Name with date and description: `YYYY-MM-DD_description`
- Include entire project structure
- Document reason for snapshot in README.md

## Migration History

### 2026-01-17: Great Archive Consolidation
**Objective**: Consolidate 3 separate archive directories into unified structure
**Source Directories**:
1. `/archive/` (legacy_structure) → Reorganized into `/archive/by-date/` and `/archive/by-type/`
2. `/legacy/archive_v1/` → Moved to `/archive/legacy/archive_v1/`
3. `/docs/reports/archived/` → Removed (empty, only .gitkeep)

**Files Migrated**: 123 total files
- 96 Markdown (.md) files
- 19 other files (JSON, HTML, PDF, etc.)

**Structure Improvement**: Score 2.0/10 → 9.0/10

**Rationale**:
- Single source of truth for archived content
- Clear separation between active and archived content
- Improved discoverability through logical organization
- Simplified maintenance and cleanup

## Best Practices

### When to Archive
- **Feature completion**: Move working docs to archive when feature is production-ready
- **Quarterly cleanup**: Archive previous quarter's content at quarter start
- **Major refactors**: Snapshot entire structure before significant changes
- **Deprecated systems**: Move old systems to `/archive/legacy/`

### What NOT to Archive
- Active project documentation (keep in `/docs/`)
- Currently used templates (keep in `/docs/templates/`)
- Configuration files (keep in project root or `/config/`)
- Test files (keep in `/tests/` or `__tests__/`)

### Archive Maintenance
- **Quarterly review**: Clean up and reorganize archived content
- **Index updates**: Keep INDEX.md files current
- **Duplicate cleanup**: Remove duplicate files after validation
- **Link validation**: Check and fix broken internal links quarterly

## Access Guidelines

### Reading Archives
- Archives are **READ-ONLY** once placed
- Use for reference, research, and historical context
- Do not modify archived content without explicit reason

### Modifying Archived Content
If you need to modify archived content:
1. Copy file to active working location
2. Make modifications there
3. Archive new version when complete
4. Add note to old version referencing new location

### Restoring from Archive
To restore archived content to active use:
1. Copy file/directory to appropriate active location
2. Update all references and links
3. Remove from archive if no longer needed (with approval)
4. Document restoration in migration history

## Related Documentation

- **Project Structure**: `/docs/project/STRUCTURE.md`
- **Documentation Standards**: `/docs/project/standards/documentation.md`
- **Archive Consolidation Report**: `/docs/reports/current/audit/archive-consolidation-2026-01-17.md`

## Questions or Issues?

**Contact**: Project Team
**Last Updated**: 2026-01-17
**Maintained By**: Claude Code CLI (Automated Documentation System)

---

**Remember**: This is the ONLY archive directory. Do not create new archive directories elsewhere in the project.
