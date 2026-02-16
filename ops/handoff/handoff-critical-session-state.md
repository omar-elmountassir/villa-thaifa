# Critical Handoff — Session 2026-02-16

**COMPACTION IMMINENT** — Next instance: Read this file first before any other action.

---

## URGENT ISSUES (Fix First)

### 1. Claude Still Does Work Instead of Delegating — CRITICAL

**The Problem**: Omar repeatedly expressed frustration that Claude keeps executing work directly instead of delegating to Gemini and sub-agents. The skill-suggester hook fires correctly (unit tested, 8/8 pass) but Claude IGNORES the hook output and proceeds with direct execution anyway.

**Root Cause**: The hook outputs `additionalContext` (a suggestion). Claude's training bias overrides this and handles tasks directly instead of respecting delegation boundaries.

**Current State**:

- Hook: `~/.claude/hooks/skill-suggester.py` — outputs suggestions but no enforcement
- Rules: `~/.claude/rules/rules.md` has "Output Routing Rule" (line ~450) and "AI Model Delegation" (line ~480) but Claude ignores them
- Settings: `~/.claude/settings.json` has hook registered but no blocking mechanism

**What's Needed**: A STRONGER enforcement mechanism. Investigate these options (in order):

1. **PreToolUse hook** that BLOCKS `Write` and `Edit` on HTML files and returns error message forcing Gemini delegation
2. **Explicit rule violation detection** in hook that detects when Claude is about to violate the delegation rule and forces acknowledgment
3. **Test with `claude -p`** to verify end-to-end that hook enforcement actually works (not just unit tests)

**Next Instance Action**: Before continuing any work, FIX THIS. It's Omar's #1 frustration. The hook exists but the mechanism is too weak.

**Test Command**:

```bash
# In /home/director/villa-thaifa, run:
claude -p ""
# Verify that Claude calls Gemini instead of writing HTML directly
```

### 2. TTS Degraded (Secondary Issue)

**Status**: ElevenLabs credits exhausted (0 remaining). Currently using pyttsx3 (offline, lower quality).

**Config**: `~/.claude/data/tts_config.json`

**To Restore**:

- Option A: Top up ElevenLabs credits (premium but higher quality)
- Option B: Switch to OpenAI TTS (requires API key, moderate cost)

**Action for Next Instance**: Ask Omar which TTS to use when resuming voice-based workflows.

### 3. Language Rule Changed to English-Only

**Decision**: ALL output now English. Omar will use Chrome translator for French if needed.

**Files Updated**:

- `~/.claude/output-styles/nova-dyad.md` — English only, TTS-optimized
- `~/.claude/rules/rules.md` — Updated
- `~/.claude/handlers/notification.py` — French messages converted to English
- `~/.claude/handlers/stop.py` — French messages converted to English

**Enforcement**: Next instance must not output French under any circumstances.

---

## PENDING TASKS (In Priority Order)

| #      | Task                                                 | Priority | Owner       | Handoff File                                  | Blocker?                    |
| ------ | ---------------------------------------------------- | -------- | ----------- | --------------------------------------------- | --------------------------- |
| **29** | **FIX: Stronger Gemini delegation enforcement**      | CRITICAL | Next Claude | (this file — inline instructions above)       | YES — blocks all other work |
| **24** | /decide: Governance templates (human vs AI-adapted)  | High     | Next Claude | `docs/plans/handoff-governance-decide.md`     | No                          |
| **25** | Create GitHub Template Repos                         | Medium   | Next Claude | `docs/plans/handoff-github-template-repos.md` | No                          |
| **26** | Integration test: skill-suggester.py via `claude -p` | High     | Next Claude | (inline — use test command above)             | No                          |
| **30** | Audit all session outputs for language violations    | Medium   | Next Claude | (inline — scan modified files for French)     | No                          |

---

## KEY DECISIONS MADE (All Approved by Omar)

| Decision                                                                  | Outcome                 | Evidence                                                                       |
| ------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------ |
| Villa Thaifa: incremental fix NOT redo                                    | APPROVED — Score 7.8/10 | `docs/repo-organization-decision.md`                                           |
| Template engine: Copier (Jinja2 + lifecycle)                              | APPROVED                | `~/omar/knowledge/research/development/repo-bootstrap/scaffolding-research.md` |
| Workflow: preset-specific (SCOUT/REPORT for ops, Fork/Branch for library) | APPROVED                | `docs/repo-organization-decision.md`                                           |
| Git init: ask-first on /repo-bootstrap                                    | APPROVED                | `docs/repo-organization-decision.md`                                           |
| Governance: human-standard (AI adaptation pending /decide task #24)       | APPROVED                | `docs/repo-organization-decision.md`                                           |
| Skill name: /repo-bootstrap                                               | APPROVED                | `~/omar/knowledge/research/development/repo-bootstrap/skill-design.md`         |
| Implementation: skill-only first, GitHub Template Repos as follow-up      | APPROVED                | `~/omar/knowledge/research/development/repo-bootstrap/skill-design.md`         |
| Gemini delegation: HARD RULE for frontend/HTML and research               | APPROVED                | `~/.claude/rules/rules.md` § AI Model Delegation                               |
| Gemini model: flash-preview default, pro for complex research             | APPROVED                | `~/omar/knowledge/research/ai/gemini-delegation-architecture.md`               |
| Auto-open HTML in Chrome: yes                                             | APPROVED                | `docs/repo-organization-decision.md`                                           |
| Output routing: structured content → HTML dashboard, chat = 1-line status | APPROVED                | `~/.claude/rules/rules.md` § Output Routing Rule                               |
| Language: English only everywhere                                         | APPROVED                | `~/.claude/output-styles/nova-dyad.md`                                         |
| HTML artifacts location: ~/omar/artifacts/dashboards/                     | APPROVED                | `docs/repo-organization-decision.md`                                           |

---

## KEY FILES FOR NEXT INSTANCE

| File                                                                                 | Purpose                                                                   | Line Count | Status              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- | ---------- | ------------------- |
| `docs/repo-organization-decision.md`                                                 | Master decision doc — all checklists, design decisions, approval trail    | 400+       | CANONICAL           |
| `docs/plans/handoff-governance-decide.md`                                            | Handoff for task #24 (/decide governance)                                 | 150+       | READY               |
| `docs/plans/handoff-github-template-repos.md`                                        | Handoff for task #25 (GitHub Template Repos)                              | 150+       | READY               |
| `~/omar/knowledge/research/development/repo-bootstrap/skill-design.md`               | Full skill design, triggers, workflow                                     | 1200+      | COMPLETE            |
| `~/omar/knowledge/research/development/repo-bootstrap/scaffolding-research.md`       | Scaffolding tools research (Copier, Cookiecutter, etc.)                   | 600+       | COMPLETE            |
| `~/omar/knowledge/research/development/repo-bootstrap/villa-thaifa-redo-analysis.md` | Redo vs fix analysis + cost/benefit                                       | 800+       | COMPLETE            |
| `~/omar/knowledge/research/ai/gemini-delegation-architecture.md`                     | Gemini delegation architecture, triggers, model selection                 | 500+       | COMPLETE            |
| `~/.claude/rules/rules.md`                                                           | Global rules (updated with Output Routing + AI Model Delegation sections) | 500+       | UPDATED             |
| `~/.claude/output-styles/nova-dyad.md`                                               | Output style (updated: English, TTS-optimized)                            | 100+       | UPDATED             |
| `~/.claude/hooks/skill-suggester.py`                                                 | Hook implementation (Gemini triggers + repo-bootstrap)                    | 200+       | NEEDS STRENGTHENING |

---

## OMAR'S FRUSTRATION POINTS (Do NOT Repeat)

1. **DELEGATE, don't execute** — Claude has executed work directly multiple times despite the rule existing. This is the #1 issue. Fix the enforcement mechanism first. Use Gemini for HTML/frontend and deep research. Use sub-agents for everything else. The orchestrator coordinates, it doesn't execute.

2. **English only** — No French in any output, ever. Omar will use Chrome translator if needed. This includes notifications, error messages, status, everything.

3. **Don't dump text in chat** — Structured content (dashboards, analysis, decisions) goes to HTML files in ~/omar/artifacts/dashboards/. Chat = 1-line status only. Returns file path, not content.

4. **Don't forget to update related files** — When changing AGENTS.md, also update STRUCTURE.md, decision docs, and all cross-references. Omar caught this multiple times this session.

5. **Persist decisions to files immediately** — Don't acknowledge in chat and then remember to write later. Write the file FIRST, then respond with file path. Act, don't note. Chat is ephemeral.

6. **Verify against ground truth** — Never claim completeness from memory or chat history. Read the actual files, run actual tests, show verification output.

7. **TDD not YAGNI** — The rule is "Feature Gate" (user-facing features only), NOT "don't structure anything." Future-proof all directory layout, naming, and architecture by default. Structure is never waste.

---

## CRITICAL REMINDERS

### Before Starting Work

1. Read this file completely
2. Read all handoff files in `docs/plans/`
3. Check `AGENTS.md`, `STRUCTURE.md`, `MISSION.md` for current contracts
4. Read `~/.claude/CLAUDE.md` (Omar's global instructions) — mode system drives behavior
5. Read `~/.claude/rules/rules.md` — Rules apply to ALL work

### During Work

- If task is >200 lines of source or >100 lines of output → delegate via Task tool
- If you can test it, you MUST test it
- If it's in code or config, verify syntax/validation passes
- Use `uv` ONLY for Python — no `pip`, `python3`, `poetry`
- Store durable facts/decisions in mcp-memory (tag appropriately)
- File writes go through Edit (preserve source) not Write (confabulation risk)

### After Work Completes

- Update relevant decision/status files
- Run verification (tests, syntax, tree view)
- Report back: file path + 1-line status + 5-line summary (not content)
- Persist any new learnings to files or mcp-memory

---

## OPEN LOOPS (Don't Drop These)

From AGENTS.md § Open Loops:

1. **Pending data domains**: `data/pending-domains/` (amenities, beds, facilities)
2. **Pending content triage**: `docs/pending/`
3. **Finance data**: `data/finance/` (billing/rates not yet onboarded)
4. **SCM branch merge**: `bootstrap/2026-02-13-baseline` → `main`

These are Omar's known issues. Don't resolve them without explicit /decide conversation.

---

## WHAT NEXT INSTANCE SHOULD DO (In Order)

1. **Read this entire file** and all files in `docs/plans/`
2. **FIX task #29** (stronger Gemini delegation enforcement) — this is blocking everything
3. **Run task #26** (integration test with `claude -p`) to verify fix works
4. **Run task #30** (language audit) to find and fix any French output
5. **Start task #24** (/decide governance) using the handoff file
6. **Continue task #25** (GitHub Template Repos) after #24 completes
7. **Implement villa-thaifa incremental fix** (archive /context/, add governance, merge to main) once decision tasks complete

---

## SESSION METADATA

| Item                    | Value                                                             |
| ----------------------- | ----------------------------------------------------------------- |
| Date                    | 2026-02-16                                                        |
| Current Branch          | `bootstrap/2026-02-13-baseline`                                   |
| Main Branch             | `main`                                                            |
| Critical Files Modified | AGENTS.md, CHANGELOG.md, rules.md, output-styles, hooks, handlers |
| Files Deleted           | 34 context files (audit remediation, archived with checksum)      |
| New Research Produced   | 4 major knowledge files (1500+ lines total)                       |
| Tests Passing           | 8/8 (skill-suggester.py unit tests)                               |
| Blockers                | Gemini delegation enforcement weak (CRITICAL)                     |
| Next Sync               | Merge branch to main after villa-thaifa fix completes             |

---

## CHECKSUM / VERIFICATION

Last verified state:

- `git status` shows branch is clean except modified tracked files
- All research files in ~/omar/knowledge/research/ verified present
- All hook/rule updates in ~/.claude/ verified
- TTS config updated (ElevenLabs exhausted, pyttsx3 active)
- Language rule enforcement: updated nova-dyad.md + notification.py + stop.py

**Next instance**: Do not trust this metadata. Run `git status` and `tree` yourself. Verify files exist where claimed.

---

END HANDOFF
