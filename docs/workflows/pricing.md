# Workflow: Price Update

> Process to modify prices on HotelRunner/Booking.com.

---

## Prerequisites

- [ ] Read `data/specs/hotel/rooms.md` (current rates)
- [ ] Read `data/specs/promotions/planned.md` (planned changes)
- [ ] Omar validation on new rates

---

## Steps

### 1. BASELINE — Capture current state

```bash
cp data/specs/hotel/rooms.md archive/YYYY/QQ/snapshots/rooms-YYYY-MM-DD.md
```

### 2. PLAN — Document changes

```text
Update data/specs/promotions/planned.md:
- Old rate
- New rate
- Reason for change
- Effective date
```

### 3. CONFIRM — Omar Validation

```text
Present comparative table:
| Room | Old | New | Delta |
Wait for explicit validation
```

### 4. EXECUTE — Apply on HotelRunner

```text
1. Open app.hotelrunner.com
2. Navigation: Rates → Room Rates
3. Modify rates
4. Verify propagation to OTAs
```

### 5. VERIFY — Confirm on Booking.com

```text
1. Open admin.booking.com
2. Verify that rates are synchronized
3. Confirmation screenshot
```

### 6. UPDATE DATA

```text
1. Update data/specs/hotel/rooms.md
2. Log in archive/YYYY/QQ/execution/pricing.md
3. Add entry in archive/YYYY/QQ/changelogs/pricing.md
```

---

## Points of Attention

| Risk                       | Mitigation                               |
| -------------------------- | ---------------------------------------- |
| HotelRunner/Booking desync | Verify propagation after 15 min          |
| Input error                | Double-check before validation           |
| Conflicting promotions     | Check `data/specs/promotions/current.md` |

---

<i>Workflow v0.1.0-alpha.0</i>
