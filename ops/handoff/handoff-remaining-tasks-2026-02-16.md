# Handoff: Remaining Tasks — 2026-02-16

**Context**: Session A (this one) completed the full data consolidation + repo restructuring of villa-thaifa. These tasks remain. Another session may have partially completed some — VERIFY before executing.

---

## How to Use This File

For each task:

1. **VERIFY** the "check if done" step first
2. If already done → mark DONE and move on
3. If partially done → pick up where it left off
4. If not started → execute using the instructions

---

## Task: Enforce Edit-over-Write with Blocking Hook

**Priority**: High
**Status**: DONE (Session A, 2026-02-17)
**Hook**: `~/.claude/hooks/enforce-edit-over-write.sh` — registered in `~/.claude/settings.json` PreToolUse > Write matcher.
**Verify it works**: Try `Write` on any existing file — should be blocked with "Use Edit tool instead." Try `Write` on a new file path — should pass through.

---

## Task: Language Audit — Scan for French

**Priority**: Medium
**Check if done**: `grep -rl 'Chambre\|Réservation\|Bienvenue\|Bonjour' ~/.claude/handlers/ ~/.claude/hooks/ --include='*.py'` — if no results, handlers are clean. Also check `~/.claude/output-styles/nova-dyad.md` for French.
**What**: Scan all .md, .py, .json files in villa-thaifa/ and ~/.claude/ for French text. Fix by replacing with English.
**Exceptions**: French room descriptions in data/rooms/RXX/profile.md are OTA data from Booking.com — KEEP those in French (they're canonical data, not our output).
**What to scan**: `~/.claude/handlers/*.py`, `~/.claude/hooks/*.py`, `ops/handoff/*.md`, `docs/**/*.md`

---

## Task: /decide Governance Format

**Priority**: Medium
**Check if done**: `ls ~/omar/knowledge/research/development/repo-organization/governance-*` — if a decision file exists with a clear verdict, it's done.
**What**: Use /decide skill to evaluate: human-standard governance (CONTRIBUTING.md, CODE_OF_CONDUCT.md, etc.) vs AI-adapted versions.
**Handoff file**: `ops/handoff/handoff-governance-decide.md` — read this for full context.
**Decision**: Which governance files to include and in what format for AI-managed repos.

---

## Task: Design Archive/Lifecycle System

**Priority**: Medium
**Check if done**: `ls ~/omar/knowledge/research/development/ | grep archive` — if a design doc exists, it's done or in progress.
**What**: Design a system for archiving completed work. Omar's pain point: completed work never gets archived, cluttering active directories.
**Approach**: Use skills: /systems-thinking, /sequential-thinking, /brainstorming, /decide
**Key questions**: When to archive? Where? How to find archived items? Automated triggers?
**Output**: Design doc at ~/omar/knowledge/research/development/archive-lifecycle-design.md

---

## Task: GitHub Template Repos

**Priority**: Low (blocked by governance decision)
**Check if done**: Check if GitHub template repos exist at github.com/omar-elmountassir
**What**: Create GitHub Template Repos for Villa Thaifa patterns.
**Handoff file**: `ops/handoff/handoff-github-template-repos.md`
**Blocker**: Governance format decision must be made first.

---

## Task: Test Hooks + Skill-Suggester Integration (END-TO-END)

**Priority**: HIGH — do this first to confirm hooks work in a live session
**Prerequisite**: Hooks were installed in Session A but take effect on NEXT session start. This session IS that next session.

**Step 1: Verify hooks are loaded**
```bash
# Check settings.json has the hooks registered
grep -c "block-html-writes\|enforce-edit-over-write" ~/.claude/settings.json
# Expected: 3 (block-html-writes appears twice: Write + Edit matchers; enforce-edit-over-write once)
```

**Step 2: Test HTML write blocking (Gemini delegation)**
Try to write an HTML file directly:
```
# In conversation, ask Claude to: "Write a simple HTML file at /tmp/test-hook.html"
# Expected: BLOCKED — Claude should receive deny message and delegate to Gemini instead
```

**Step 3: Test Edit-over-Write enforcement**
Try to use Write on an existing file:
```
# In conversation, ask Claude to: "Use Write tool to update AGENTS.md"
# Expected: BLOCKED — Claude should receive deny message and use Edit instead
```

**Step 4: Test Write on NEW file passes**
```
# In conversation, ask Claude to: "Create a new file at /tmp/test-new-file.md with content 'hello'"
# Expected: ALLOWED — Write on new files should work normally
```

**Step 5: Test skill-suggester integration**
```bash
# Run non-interactive test:
claude -p "create an HTML dashboard for room availability"
# Expected: Claude delegates to Gemini (/gemini skill) instead of writing HTML directly
```

**If any test fails**: Check hook scripts exist and are executable:
```bash
ls -la ~/.claude/hooks/block-html-writes.sh ~/.claude/hooks/enforce-edit-over-write.sh
# Both should be -rwxr-xr-x
```

**If hooks don't fire at all**: Restart Claude Code session (hooks load at startup).

---

## Task: Build /repo-bootstrap Skill

**Priority**: Low (after governance)
**Check if done**: `ls ~/.claude/skills/ | grep repo-bootstrap`
**What**: Build the /repo-bootstrap skill using Copier (Jinja2 template engine).
**Design doc**: `~/omar/knowledge/research/development/repo-bootstrap/skill-design.md`
**Blocked by**: Governance decision (#24)

---

## Task: Comprehensive Model Routing Strategy

**Priority**: Low
**Check if done**: `ls ~/omar/knowledge/research/ai/ | grep model-routing`
**What**: Full strategy doc covering all Claude + Gemini model variants, when to use each.
**Current state**: Lightweight heuristic in `~/.claude/rules/rules.md` § AI Model Delegation. Needs expansion.

---

## Session A Completed (for reference)

These are DONE — do not redo:

- [x] Data consolidation: rooms, facilities, finance, bookings, operations
- [x] Room profile dedup (all 12 rooms, Opus-verified)
- [x] Repo restructuring: 200+ files moved to correct locations
- [x] AGENTS.md rewrite (File Placement Decision Tree + Directory Contract)
- [x] STRUCTURE.md updated to match filesystem
- [x] Branch merge: bootstrap/2026-02-13-baseline → main (pushed, branch deleted)
- [x] New rule: mandatory post-edit verification agent (rules.md #5)
- [x] Finance: rates.json + billing.json populated
- [x] Gemini delegation blocking hook: `~/.claude/hooks/block-html-writes.sh` (blocks Write/Edit on *.html)
- [x] Edit-over-Write blocking hook: `~/.claude/hooks/enforce-edit-over-write.sh` (blocks Write on existing files)
- [x] Both hooks registered in `~/.claude/settings.json` PreToolUse, unit tested (3/3 pass)
- [x] Hooks take effect on next session start (NOT in the session that created them)
