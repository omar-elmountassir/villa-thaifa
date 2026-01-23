# 🔵 Git Manager Skill

> **Purpose**: Safe Git operations through the Claude Code CLI
> **Agent**: `.claude/agents/git-manager.md`

## Quick Start

```bash
# Commit changes safely
claude -p "@git-manager 'Commit the new documentation files'"

# Push to remote
claude -p "@git-manager 'Push current branch to origin'"

# Full workflow (commit + push)
claude -p "@git-manager 'Commit and push the agent refactoring'"
```

## What This Skill Does

### 1. Pre-Commit Validation
- Runs `git status` to see what's changed
- Reads `git diff` to understand actual changes
- Verifies commit message follows conventional commits
- **NEVER** bypasses hooks (`--no-verify` is forbidden)

### 2. Safe Push Operations
- Checks remote branch status
- Verifies how many commits will be pushed
- Uses `--force-with-lease` instead of `--force`
- Confirms with user before pushing

### 3. Marathon Compliance
- One operation at a time (no rushing)
- Verifies each step before proceeding
- Asks user when uncertain
- Logs operations to tracking system

## Safety Features

### Anti-Disaster Protocol
- ❌ No force pushes without explicit approval
- ❌ No hook bypassing
- ❌ No commits without reviewing diffs
- ✅ All operations verified before completion

### Error Handling
- Hooks fail → Stop, fix, retry
- Push rejected → Fetch, rebase, ask user
- Uncertain state → Ask user, don't guess

## Integration Points

This skill respects:
- `USER_VOICE_ARCHIVE.md` (Message ID: 1749 - "Slow Down")
- `BEHAVIORAL_HARD_RULES.md` (No silent failures)
- `PROTOCOL_OF_TRUTH.md` (Verify before completion)
- `~/bin/log-event` (Tracking system logs)

## Examples

### Commit Documentation
```bash
claude -p "@git-manager 'Commit the new ARCHITECTURE.md file'"
# Expected output:
# - git status
# - git diff review
# - Conventional commit message: docs(arch): add system architecture
# - Verification step
```

### Push Feature Branch
```bash
claude -p "@git-manager 'Push feature/gateway to origin'"
# Expected output:
# - Remote status check
# - Commit count
# - Safe push
```

### Fix and Re-commit
```bash
claude -p "@git-manager 'The hook failed, fix the linting error and retry'"
# Expected workflow:
# - Read hook error
# - Fix the issue
# - Verify fix
# - Retry commit
```

## Definition of Done

An operation is complete when:
- ✅ Command executed successfully (exit code 0)
- ✅ Verification passed (`git log`, `git status`)
- ✅ Tracking updated (if applicable)
- ✅ User notified with summary

---

**Last Updated**: 2026-01-17
**Maintained By**: Agentic Dojo
