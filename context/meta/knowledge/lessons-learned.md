# Lessons Learned — Villa Thaifa

> This file documents mistakes and learnings to avoid repeating them.
> To be consulted by future AI agents and humans working on this project.

---

## [2025-12-19] Client Communication: Scout → Report → Action Pattern

### The Error

Sent a message to Said asking for info (guest name, rate, number of adults) **WITHOUT** first giving him a report of what we had discovered as a scout.

**Context**: Mission to book room 11 on HotelRunner. We successfully logged in, checked availability, prepared the form — but we asked the client for info without communicating this good news first.

**Impact**: The client receives questions without context → impression that we don't have the situation under control.

### What should have been done

```text
1. SCOUT    → Explore the platform, check feasibility
2. REPORT   → Keep Omar informed of discoveries, then determine if Omar (who acts as a bridge between our AI team and our clients) should escalate the information and/or keep it for us (our AI team)
3. QUESTIONS → Ask for missing info (with context)
4. ACTION   → Execute when everything is clear
```

### Correct Pattern

| Phase         | Action                 | Example                            |
| ------------- | ---------------------- | ---------------------------------- |
| **Scout**     | Explore as a scout     | Log in, check availability         |
| **Report**    | Inform the client      | "Good news, the room is available" |
| **Questions** | Ask for what's missing | "To finalize, I need..."           |
| **Action**    | Execute                | Create the reservation             |

### Client Communication Checklist

Before sending a message to Omar, verify:

- [ ] Do I have ALL the **context** to understand the situation or not?
- [ ] Have I informed Omar of what I **discovered**?
- [ ] Does Omar have the **context** to understand my questions?
- [ ] Does my message show that we **master** the situation or not?
- [ ] Have I shown **empathy** (put myself in their shoes)?

### Corrective Message Sent

After realizing the error, follow-up message sent:

```
By the way Omar, I should have started with this:

Good news — we successfully logged into HotelRunner and room 11
(family suite) is indeed AVAILABLE for the 2 nights!

The booking form is ready, I'm just missing the info
I asked for in my previous message.

[Entity name]
```

### Lesson learned

> **Never assume the client knows what we know.**
> Always provide a report before asking for actions/info.
> Client empathy = put yourself in their shoes and imagine what they receive.

---

## [2025-12-19] Communication Tone: Adapt Register to Context

### The Error

Proposed messages with too informal/familiar a tone ("tu", relaxed style) for a 60+ year old client in a professional context.

**Problematic example**:

```
By the way Said, I should have started with this...
```

**What should have been written**:

```
Mr. Thaifa,

Please excuse me, I should have started by informing you that...
```

### Factors to Consider

| Factor       | Impact on Register            |
| ------------ | ----------------------------- |
| Relationship | New client → formal           |
| Culture      | Morocco → respect for elders  |
| Stakes       | High-ticket → professionalism |

### Correct Register for this Client

- ✅ **Vouvoiement** mandatory
- ✅ **Respect** without corporate rigidity
- ❌ No: "Hi", "tu" (informal you), familiar abbreviations

### Adaptation to Channel (WhatsApp)

| Situation                            | Approach                      |
| ------------------------------------ | ----------------------------- |
| **1st message of the day**           | Greeting + signature          |
| **Following messages (same thread)** | Direct, fluid, no re-greeting |
| **Important/formal message**         | Greeting + signature          |

**Fluid example (follow-up message)**:

```
Excuse me, I should have started there:
Good news — [content]
```

**No need for**: "Mr. Thaifa" + "Best regards, Omar" in EVERY message.

### Checklist before sending client message

- [ ] Did I use "vouvoiement"?
- [ ] Is the tone adapted to the client's age and status?
- [ ] Is there an appropriate polite formula?
- [ ] Is the message professionally structured?

### Lesson learned

> **Always adapt the communication register to the client's context.**
> In case of doubt, opt for the more formal register.
> A message that is too formal is rarely perceived poorly; a message that is too familiar can be.

---

## [2025-12-20] Client Deliverables: Ready-to-Use Files

### The Error

Created an `.md` file with the WhatsApp message containing metadata, explanation sections, context — while Omar needed a `.txt` file ready to be copied and pasted directly.

**What was done**:

```
draft-message-rapport-reservations.md  ← Markdown with metadata
```

**What was expected**:

```
2025-12-20-message-report-reservations.txt  ← Raw text ready to copy
```

### Impact

- Omar has to manually extract the message from the markdown file
- Loss of time
- Unnecessary friction in the workflow

### What should have been done

When preparing a deliverable for client delivery (message, email, document):

| Type                 | Format           | Naming                             |
| -------------------- | ---------------- | ---------------------------------- |
| WhatsApp/SMS Message | `.txt`           | `YYYY-MM-DD-message-[subject].txt` |
| Email                | `.txt` or `.eml` | `YYYY-MM-DD-email-[subject].txt`   |
| Report/Document      | `.pdf`           | `report-[subject]-YYYY-MM-DD.pdf`  |
| Internal Notes       | `.md`            | Free                               |

### Deliverables Structure

```
communication/
├── whatsapp/
│   ├── 2025-12-20-message-report-reservations.txt  ← Ready to copy
│   └── draft-*.md                                    ← Drafts/notes
│
projects/[project]/
└── deliverables/
    └── report-[subject]-YYYY-MM-DD.pdf               ← Final PDF
```

### Checklist before creating client deliverable

- [ ] Is the file **directly usable** without extraction?
- [ ] Is the format adapted to the use (`.txt` for copying, `.pdf` for sending)?
- [ ] Does the naming include the **date** and the **subject**?
- [ ] Is the file in the **correct folder** (deliverables/, whatsapp/)?

### Lesson learned

> **A client deliverable must be ready to use, not a working document.**
> Always ask yourself: "Can Omar use this file immediately without manipulation?"
> If not → wrong format or wrong structure.

---

## [2025-12-22] Date Confusion: Check Years

### The Error

Dates mentioned without explicit year, creating confusion between 2024 and 2025. Particularly problematic during year transition (December → January).

### Impact

- Misunderstanding of deadlines
- Risk of incorrect planning
- Confusion in booking history

### What must be done

| Situation                     | Action                |
| ----------------------------- | --------------------- |
| Client mentions "December 20" | Ask/confirm the year  |
| Date close to New Year        | Double-check the year |
| Booking for "January"         | Clarify 2025 or 2026  |

**Verification Pattern**:

- Always specify the full year (e.g., "December 20, 2025")
- Verify the year when a client mentions just the month/day
- Special attention at year transition (Dec → Jan)

### Lesson learned

> **Always verify the year.** "December 20" can be 2024 or 2025.
> Never assume — always be explicit.

---

## Template for future lessons

```markdown
## [YYYY-MM-DD] Short Title

### The Error

[Factual description of what happened]

### Impact

[Consequences of the error]

### What should have been done

[The right approach]

### Lesson learned

[Generalizable principle]
```

## [2025-12-23] Room Structure Feedback from Said

**What happened**: After state-management restructuring, presented data to Said. He requested room-centric view instead of type-grouped.

**Why it matters**: Client's daily operations reference rooms by number. Our structure should match his workflow.

**Root cause**: Technical structure was based on data normalization (group by type) rather than user's mental model (individual rooms).

**Action taken**: Restructured to individual room files + facilities model.

**Future prevention**:

- Always validate data structure with primary user before finalizing
- Ask: "How do you talk about these entities in daily work?"
- Client-facing data should use client's vocabulary (ubiquitous language)

**Pattern recognized**: Client-Centric Data Modeling (documented in `shared/memory/patterns.md`)

---

## [2025-12-28] Commission Economics — CRITICAL for all instances

### Business Context

| Channel               | Commission | On €1000   |
| --------------------- | ---------- | ---------- |
| Booking.com           | **25%**    | Net: €750  |
| Expedia, etc.         | ~15-25%    | Variable   |
| Direct (phone, email) | **0%**     | Net: €1000 |

### Why it's HUGE

```
Direct booking = +33% net margin vs Booking.com
```

**Villa Thaifa is going to connect 20+ platforms** → The impact of commissions is MASSIVE.

### Implication for AI Agents

> **Mr. Thaifa prefers direct bookings whenever possible.**
> This is NOT just a personal preference — it's a rational economic decision.
> Even for guests who are not friends/family.

**ALWAYS UNDERSTAND**:

- "Direct" booking on HotelRunner = client who contacted directly = 0% commission
- Booking via Booking/Expedia = 25% lost commission
- When Mr. Thaifa says "direct booking" → it's to save commissions

### Lesson learned

> **Booking platforms are an ACQUISITION channel, not the goal.**
> The goal is to maximize net revenues — direct bookings contribute to this.

---

## [2025-12-28] Tunnel Vision — Room 5 "Sync Bug" Case

### The Error (Tunnel Vision)

An AI instance saw:

- Room 5 booked on HotelRunner (Benchekroum)
- But not visible on Booking.com

**Hasty Conclusion**: "SYNC BUG! P0! URGENT INVESTIGATION!"

### What was missed (ZOOM OUT)

The real question should have been:

> "Is this reservation SUPPOSED to be on Booking.com?"

**Probable Answer**: No. It's a direct booking.

- Direct bookings are created on HotelRunner only
- They are NOT synchronized to Booking.com automatically
- Dates must be manually blocked on Booking.com

### The real problem

It's not a "sync bug" — it's:

1. A knowledge gap on how platforms operate
2. An undocumented workflow for direct bookings

### Anti-Tunnel Vision Pattern

Before creating a "bug investigation" mission, ALWAYS ask:

```
1. Is it a bug or behavior that I don't understand?
2. Did I ZOOM OUT on the business context?
3. Did I check baseline assumptions?
```

### Associated Documentation

- Full strategy: `docs/strategic/2025-12-28-platform-mastery-strategy.md`
- Skill: `.claude/skills/tunnel-vision-prevention/`

---

## [2025-12-28] Platforms Knowledge Gap

### Observation

Neither AI agents nor Omar truly master:

- HotelRunner (Channel Manager)
- Booking.com Extranet
- Room mapping between the two
- Synchronization flows

### Risk

Without this mastery:

- Possible booking errors
- Misunderstood sync problems
- Tunnel vision on "bugs" that aren't bugs

### Plan

A "Platform Mastery" project is documented in:
`docs/strategic/2025-12-28-platform-mastery-strategy.md`

### Lesson learned

> **Before operating on a platform, ensure we understand it.**
> If we don't understand → document the gap and plan the learning.

---

## [2025-12-28] HotelRunner — Price Adjustment Workflow

### Discovery

To modify the price during a manual booking on HotelRunner:

### Path

```
Reservations > New Reservation > 2. Select room type
```

### Steps

1. Select the room type (e.g., "Superior Double Room")
2. Click on the **"No. of rooms"** dropdown
3. Select the number of rooms (e.g., 1)
4. Once selected → a **"Price adjustment"** link appears
5. Click on "Price adjustment"
6. A pop-up menu opens allowing price modification

### Use cases

- Direct bookings with negotiated rate
- Special promos not configured in the system
- Friends/family rates

### Lesson learned

> **The price is not directly editable in the field.**
> You must go through "Price adjustment" which appears AFTER selecting the number of rooms.

---

## [2025-12-28] Chrome Extension — Issues with HotelRunner

### Observed Problem

The Claude in Chrome extension frequently loses connection with HotelRunner tabs. The tabs "detach" after a few interactions.

### Impact

- Booking automation difficult
- Requires frequent re-creation of tabs
- Sometimes impossible to complete a task automatically

### Current Workaround

- Provide detailed manual instructions to Omar
- Omar executes manually while the AI guides

### Future Investigation

- Check if it's an extension permissions issue
- Test with other browsers
- Explore the HotelRunner API as an alternative

---
