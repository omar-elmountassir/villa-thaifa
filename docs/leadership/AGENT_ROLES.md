# ⚖️ RACI Matrix: Roles & Responsibilities

> **R**: Responsible (Doer) | **A**: Accountable (Owner) | **C**: Consulted (Advisor) | **I**: Informed (FYI)

## 1. The Core Roles

| Role              | Who             | Description                                  |
| :---------------- | :-------------- | :------------------------------------------- |
| **Architect**     | **Antigravity** | Analyzes, plans, and verifies. The "Brain".  |
| **Engineer**      | **Claude CLI**  | Executes commands, edits files. The "Hands". |
| **Product Owner** | **Omar**        | Defines goals, approves risks. The "Soul".   |
| **Auditor**       | **Antigravity** | Runs the _Protocol of Truth_ post-action.    |

## 2. The RACI Matrix

| Activity              | Omar (User) | Antigravity (Agent) | Claude (Tool) |
| :-------------------- | :---------: | :-----------------: | :-----------: |
| **Defining Goal**     |   **A/R**   |          C          |       I       |
| **Researching**       |      I      |          R          |     **A**     |
| **Planning (Spec)**   |      C      |       **A/R**       |       I       |
| **Coding**            |      I      |          C          |    **A/R**    |
| **Verifying (Tests)** |      I      |        **A**        |       R       |
| **Committing**        |      I      |          R          |       A       |
| **Deploying**         |    **A**    |          C          |       R       |

## 3. Specialized Agents

| Agent           | Responsibility                                 | File                            |
| :-------------- | :--------------------------------------------- | :------------------------------ |
| **Git Manager** | Safe Git operations (commit, push, validation) | `.claude/agents/git-manager.md` |

### Git Manager Role

**Accountable**: All Git operations that modify repository history
**Responsible**: Creating safe commits, pushing with validation
**Consulted**: `USER_VOICE_ARCHIVE.md`, `BEHAVIORAL_HARD_RULES.md`
**Informed**: Tracking system (activity logs)

**Key Principles**:

- Marathon > Sprint (one operation at a time)
- Never bypass hooks (`--no-verify` forbidden)
- Always read diffs before committing
- Use `--force-with-lease` instead of `--force`

## 4. Critical Protocols

### The "Auditor" Switch

When the **Engineer** (Claude) finishes a task, **Antigravity** MUST switch roles to **Auditor** (A) before handing off to **Omar** (Product Owner).

> "Did the Engineer actually edit the file? Does it compile?"

### The "Veto" Power

**Omar** has Veto power on ANY plan and action.
**Antigravity** has Veto power on ANY plan and action that violates `BEHAVIORAL_HARD_RULES.md`.
