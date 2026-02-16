# Audit: Unstaged/Untracked Files — 2026-02-16

**Audit Date**: 2026-02-16
**Branch**: bootstrap/2026-02-13-baseline
**Current Task**: Task #11 (Audit remaining unstaged files for proper placement)

---

## Summary

- **Total unstaged items**: 7 categories
- **Modified files**: 4 (all eligible for commit)
- **Untracked directories**: 4 (mixed verdict)
- **Deleted file**: 1 (requires decision)
- **Overall status**: Mostly ready to commit; directories require gitignore updates

---

## File-by-File Analysis

### 1. Modified: `data/finance/billing.json`

**Status**: M (modified, staged for commit)
**Current location**: `/home/director/villa-thaifa/data/finance/billing.json`

**Content summary**: Billing configuration with version 1.0, owner_pending confidence level. Contains:
- Property legal entity and tax info (mostly null, pending from owner)
- Payment methods accepted (cash, bank_transfer, notes about Card/Booking.com)
- Tax rates (null, pending from owner Said)
- Invoicing workflow (not yet defined)

**Verdict**: ✓ **CORRECT** — Already in proper location (`data/finance/`). Canonical financial config should stay here.

**Action**: Commit in next batch.

---

### 2. Modified: `data/finance/rates.json`

**Status**: M (modified, staged for commit)
**Current location**: `/home/director/villa-thaifa/data/finance/rates.json`

**Content summary**: Room rate matrix (v1.0) with:
- Currency config (EUR primary, MAD secondary, rate 10.72)
- 12 rooms with base rates in EUR and MAD
- Data confidence: owner_pending

**Verdict**: ✓ **CORRECT** — Already in proper location (`data/finance/`). This is canonical rate data.

**Action**: Commit in next batch. Note: Task #7 marked as completed; Task #8 still in_progress (billing.json structure).

---

### 3. Modified: `docs/repo-organization-decision.md`

**Status**: M (modified, not staged)
**Current location**: `/home/director/villa-thaifa/docs/repo-organization-decision.md`

**Content summary**: Decision artifact documenting:
- Repository organization restructuring (final decision on file placement)
- Constraints on AGENTS.md, CLAUDE.md, GEMINI.md at root
- Target structure with docs/core/ for MISSION, STRUCTURE, PRINCIPLES
- Completed checklist of governance items (LICENSE, README, CODE_OF_CONDUCT, SECURITY, CONTRIBUTING, etc.)
- repo-bootstrap skill decisions (6 key decisions documented)
- Follow-up items still pending

**Context**: This is output from a prior session that completed a governance/organization project. Per rules.md:
- All rule changes must have been approved by Omar
- This is a decision artifact, not operational work

**Verdict**: ✓ **CORRECT** — Belongs in `docs/` as a reference decision document. However, consider: This is a specific decision artifact from one session. After decisions are implemented, decision docs are typically archived to reduce clutter. **Recommendation**: If all items in the checklist are confirmed complete in current codebase, move to `context/audit/decisions/` or archive to `archive/YYYY/QQ/`. For now, keep in docs/ if still being referenced.

**Action**: Commit as-is, or move to context/audit/decisions/ before commit (recommend keeping for next 1-2 days while bootstrap is being finalized).

---

### 4. Modified: `ops/handoff-2026-02-16-gemini-standardization.md`

**Status**: M (modified, not staged)
**Current location**: `/home/director/villa-thaifa/ops/handoff-2026-02-16-gemini-standardization.md`

**Content summary**: Handoff document from prior session covering:
- Gemini skill updates (default model, session recovery)
- Google AI Pro tier research
- AI Model Delegation rule additions
- Facilities directory image audit (53 images in docs/facilities/)
- Pending items (migrate facility images, full migration audit)
- Key files modified

**Verdict**: ✓ **CORRECT** — Belongs in `ops/` (status dashboards, handoff notes, migration logs). This is operational context from a prior session.

**Action**: Commit in next batch. Important: This documents incomplete work (facility images still in docs/facilities/, full audit pending). Reflects the "Open Loops" listed in AGENTS.md.

---

### 5. Deleted: `context/meta/knowledge/pricing.md`

**Status**: D (deleted, not staged)
**Original location**: `context/meta/knowledge/pricing.md`

**Content recovered**: Workflow document ("Workflow : Mise à Jour Tarifs") with steps for updating prices on HotelRunner/Booking.com. Includes:
- Prerequisites (read current rates, planned changes, get Omar approval)
- Execution steps (BASELINE, PLAN, CONFIRM, EXECUTE, VERIFY, UPDATE DATA)
- Risk mitigation table

**Analysis**:
1. **Is the deletion intentional?** Unknown. File is marked as D (deleted) in git status.
2. **Was content preserved elsewhere?** YES — A matching file exists at `docs/workflows/pricing.md` with IDENTICAL content.
3. **Is the location migration justified?** YES. Per project structure:
   - `context/` = read-only reference material
   - `docs/workflows/` = operational documentation
   - Pricing workflow is operational, not reference — belongs in docs/

**Verdict**: ✓ **CORRECT DELETION** — Workflow content has been moved to the correct location (`docs/workflows/pricing.md`). The deletion is intentional as part of the data consolidation phase.

**Action**: Commit the deletion (it's already staged in git status as D).

---

### 6. Untracked: `docs/plans/` directory

**Status**: ?? (untracked directory, 3 files)
**Current location**: `/home/director/villa-thaifa/docs/plans/`

**Contents**:
- `handoff-github-template-repos.md` (9.5 KB)
- `handoff-critical-session-state.md` (14.4 KB)
- `handoff-governance-decide.md` (6.2 KB)

**Analysis**:
1. **Directory doesn't exist in .gitignore** — currently untracked
2. **Files are handoff documents** from the prior session
3. **Appropriate location?**
   - `docs/plans/` could work for session handoff artifacts
   - OR `ops/` if these are operational status documents
   - Current structure: Session handoffs typically go in `ops/handoff-*` (see item #4 above)

**Verdict**: ⚠ **NEEDS CLARIFICATION**
- If these are temporary session planning docs → Move to `ops/` with prefix `ops/handoff-*-{date}-{topic}.md`
- If they're reference plans for future work → Can stay in `docs/plans/` but directory needs to be gitignore'd or committed
- Current state (untracked) is ambiguous

**Recommendation**:
- **Option A** (recommended): Move all 3 to `ops/` with consistent naming: `ops/handoff-2026-02-16-github-templates.md`, etc. Then add `docs/plans/` to .gitignore as it's not yet a stable directory.
- **Option B**: Commit `docs/plans/` as a new directory for cross-session planning. Add empty `.gitkeep` to reserve the space.

**Action**: ASK OMAR — Are these session artifacts (→ ops/) or forward-looking plans (→ docs/plans/)? Recommend Option A.

---

### 7. Untracked: `docs/workflows/` directory

**Status**: ?? (untracked directory, 1 file)
**Current location**: `/home/director/villa-thaifa/docs/workflows/`

**Contents**:
- `pricing.md` (1.7 KB) — already analyzed above as migrated content

**Analysis**:
1. **Directory intent**: Workflows should be documented in `docs/`. This location is correct per structure.
2. **Not in .gitignore** — This is intentional future structure
3. **File is already moved here correctly** (from context/meta/knowledge/pricing.md)

**Verdict**: ✓ **CORRECT** — Workflows directory is the right place. File inside (pricing.md) is correct.

**Action**: Add `docs/workflows/` to .gitignore OR commit it with the pricing.md file when committing the deletion of the old path. Likely: Commit both the move (D context/meta/knowledge/pricing.md + docs/workflows/pricing.md) together.

---

### 8. Untracked: `logs/` directory

**Status**: ?? (untracked directory, 7 files)
**Current location**: `/home/director/villa-thaifa/logs/`

**Contents** (all JSON/debug logs from orchestration):
- `chat.json` (2.0 MB)
- `notification.json` (34 KB)
- `stop.json` (20 KB)
- `subagent_start.json` (16 KB)
- `subagent_stop.json` (46 KB)
- `.orchestration_state.json` (88 B)
- `subagent_debug.log` (8.4 KB)

**Analysis**:
1. **These are runtime logs** from Claude Code orchestration
2. **.gitignore status**: NOT in .gitignore
3. **Belong in git?** NO — These are session-specific ephemeral data, not source artifacts
4. **Project structure rule**: `logs/` is listed as a managed directory for "log files" — but typically these are temporary

**Verdict**: ⚠ **SHOULD BE GITIGNORED**
- Add `logs/` to .gitignore (update regex pattern)
- Current .gitignore only ignores `npm-debug.log*`, `yarn-debug.log*`, `pnpm-debug.log*`
- Add pattern: `logs/` (exclude entire directory)

**Action**: Update .gitignore to include `logs/`. Then the directory can exist locally without being tracked. No files need to be deleted; just exclude from git.

---

### 9. Untracked: `tmp/` directory

**Status**: ?? (untracked directory, 1 file)
**Current location**: `/home/director/villa-thaifa/tmp/`

**Contents**:
- `preserved.md` (24.8 KB) — Appears to be a partial edit diff/record of room profile changes (lines 90-325, showing deleted and modified sections from data/rooms/R01-R04/profile.md)

**Analysis**:
1. **Purpose unclear**: File contains edit-line output (╌╌╌ separators, +/- prefixes, line numbers) suggesting it's an intermediate artifact from an edit operation
2. **Should be in git?** Unlikely — appears to be a working file / debugging output
3. **.gitignore status**: NOT in .gitignore, though `temp/` is (typo: should match `tmp/`)

**Verdict**: ⚠ **GITIGNORE ISSUE**
- `tmp/` directory exists in project structure but isn't explicitly gitignored
- Current .gitignore has `temp/` (note: different spelling)
- `preserved.md` looks like an accidental artifact (intermediate edit output)

**Recommendation**:
1. **Update .gitignore**: Change `temp/` to `tmp/` OR add both patterns
2. **Action on preserved.md**:
   - If it's a recovery file needed for ongoing work → move to a specific ops/ recovery directory with timestamp
   - If it's ephemeral → delete locally (don't commit)

**Action**: Ask Omar about `tmp/preserved.md` — is it needed? If not, delete locally. Update .gitignore to include `tmp/`.

---

## Gitignore Issues

Current .gitignore has inconsistencies:

| Pattern | Issue |
|---------|-------|
| `temp/` | Should be `tmp/` to match directory structure |
| `logs/` | NOT present — should exclude runtime logs |
| (nothing) | `docs/plans/` not explicitly managed |
| (nothing) | `docs/workflows/` not explicitly managed |

**Recommendation**: Update .gitignore:
```
# Add/correct:
tmp/
logs/

# Remove or clarify:
temp/  # (or keep for backward compat if used elsewhere)
```

---

## Decisions Needed

| Item | Decision | Recommendation |
|------|----------|-----------------|
| `docs/plans/` (3 files) | Move to ops/ OR keep in docs/? | Move to ops/ (handoff artifacts) |
| `tmp/preserved.md` | Keep for recovery OR delete? | ASK OMAR |
| `.gitignore` | Update to exclude logs/, tmp/ | YES, do this now |
| `docs/repo-organization-decision.md` | Archive or keep in docs/? | Keep for now (still being referenced in bootstrap) |

---

## Commit Readiness

### Ready to Commit Now:
1. ✓ `data/finance/billing.json` (modified) — Task #8 in progress, but file is ready
2. ✓ `data/finance/rates.json` (modified) — Task #7 completed, rates finalized
3. ✓ Delete `context/meta/knowledge/pricing.md` — Intentional move to docs/workflows/
4. ✓ Add `docs/workflows/pricing.md` — Correctly placed workflow

**Commit batch**: `refactor: finance data finalization + pricing workflow consolidation`

### Pending Decisions:
1. ⚠ `docs/plans/` — Needs reclassification (ops/ vs docs/plans/)
2. ⚠ `tmp/preserved.md` — Needs Omar decision
3. ⚠ `.gitignore` — Needs update (low-risk, recommend immediate)
4. ✓ `docs/repo-organization-decision.md` — Can commit but may archive later

---

## Next Steps

1. **Immediate** (no decision needed):
   - Update .gitignore to include `logs/`, `tmp/`
   - Commit the 4 ready items listed above
   - Update Task #8 and #9 status

2. **Ask Omar**:
   - Disposition of `docs/plans/` directory (move to ops/ or keep?)
   - Disposition of `tmp/preserved.md` (keep or delete?)

3. **Follow-up** (from handoff #4 above):
   - Migrate facility images from docs/facilities/*/images/ to data/property/facilities/*/images/
   - Run comprehensive audit of entire repo for any remaining files in docs/ or context/ that should be in data/

---

## Audit Commands

For verification:

```bash
# Verify changes are correct
git diff data/finance/billing.json data/finance/rates.json

# Show all untracked
git status --short

# Check what will be committed
git diff --cached
```
