# Availability Synchronization Protocol

> **Purpose**: Real-time inventory management across all OTA channels
> **Critical**: Prevent overbookings and maximize occupancy
> **Last Updated**: 2026-01-20

---

## Overview

Availability synchronization ensures accurate room inventory across all OTA channels in real-time, preventing overbookings while maximizing revenue.

**Key Principle**: Single Source of Truth (SSOT) = HotelRunner inventory

**Flow**: HotelRunner → All OTAs (Booking.com, Expedia, Airbnb, etc.)

---

## Inventory Management

### Physical Rooms vs. Virtual Inventory

**Physical Inventory**: 12 actual rooms at Villa Thaifa
**Virtual Inventory**: 8 room types (Deluxe Triple, Executive Suite, etc.)

**Mapping**:
```
Room Type: Deluxe Triple Room
  ├── Room 1 (physical)
  ├── Room 3 (physical)
  └── Room 8 (physical)
  → Total Inventory: 3 units

Room Type: Family Suite
  ├── Room 9 (physical)
  └── Room 11 (physical)
  → Total Inventory: 2 units
```

**OTA View**: OTAs see "3 Deluxe Triple Rooms available" (not individual room numbers).

---

## Synchronization Mechanism

### Real-time Push (Preferred)

**Trigger**: Booking, modification, or cancellation on ANY channel
**Action**: HotelRunner recalculates inventory and pushes to ALL channels
**Delay**: <5 minutes

**Example Flow**:
1. Guest books "Deluxe Triple Room" on Booking.com
2. Booking.com sends reservation to HotelRunner (XML/API)
3. HotelRunner reduces Deluxe Triple inventory: 3 → 2
4. HotelRunner pushes updated availability to Expedia, Airbnb, etc.
5. All OTAs now show "2 Deluxe Triple Rooms available"

---

### Polling (Fallback)

**Frequency**: Every 15 minutes
**Use Case**: Channels without webhook/push notification support
**Coverage**: Full inventory check for all room types

---

## Stop-Sell Management

### What is Stop-Sell?

**Definition**: Temporarily close a room type for bookings on specific dates.

**Use Cases**:
- Property maintenance (e.g., renovations)
- Private events (entire property booked)
- Strategic inventory control (hold rooms for direct bookings)

---

### Stop-Sell Types

| Type | Scope | Use Case |
|------|-------|----------|
| **Full Stop-Sell** | All channels (incl. direct) | Maintenance, closed dates |
| **Channel-Specific Stop-Sell** | Single OTA (e.g., Booking.com only) | Strategic inventory allocation |
| **Room-Type Stop-Sell** | Specific room type | Room unavailable, others open |

---

### Configuration

**In HotelRunner**:
1. Navigate to Rates & Availability
2. Select room type and date range
3. Click "Stop Sale" toggle
4. Choose scope (all channels or specific channel)
5. Save → Sync to OTAs within 5 minutes

**Reversal**: Turn off "Stop Sale" toggle → Rooms reappear on OTAs

---

## Minimum Stay Restrictions

### Purpose

Control bookings to optimize occupancy and reduce operational burden.

**Example**: Require 2-night minimum on weekends to avoid single-night gaps.

---

### Configuration

**In HotelRunner**:
1. Navigate to Restrictions
2. Set "Minimum Stay" for date range
3. Apply to all channels or specific channels
4. Save → Sync to OTAs

**Common Patterns**:
- **Weekends**: 2-night minimum (Friday-Saturday)
- **Peak Season**: 3-night minimum
- **Holidays**: 5-7 night minimum (Christmas, New Year)

---

## Maximum Stay Restrictions

### Purpose

Prevent long-term bookings that block high-revenue periods.

**Example**: 14-night maximum to ensure inventory turnover.

**Configuration**: Same as minimum stay, set "Maximum Stay" field.

---

## Overbooking Prevention

### Risk Scenarios

1. **Manual Bookings**: Created in HotelRunner but don't sync to OTA
2. **Sync Delays**: >5 minute lag between channels
3. **Concurrent Bookings**: Two guests book same room simultaneously on different OTAs

---

### Mitigation Strategies

#### 1. Inventory Buffer

**Strategy**: Reserve 1 room per type as safety buffer

**Example**:
- Physical Inventory: 3 Deluxe Triple Rooms
- Virtual Inventory on OTAs: 2 Deluxe Triple Rooms (1 room buffer)

**Trade-off**: Reduces revenue potential by ~8% (1/12 rooms held back)

**Recommendation**: Use buffer only during high season or if sync issues persist.

---

#### 2. Real-time Validation

**Pre-booking Check**:
1. Guest attempts to book on Booking.com
2. Booking.com queries HotelRunner API: "Is room available?"
3. HotelRunner checks current inventory (incl. pending bookings)
4. Responds: Yes (proceed) or No (show as unavailable)

**Status**: Supported by Booking.com, Expedia (API-based channels)

---

#### 3. Sync Monitoring

**Alert System**:
- If sync delay >30 minutes → Email alert to admin
- If sync failure detected → Automatically stop-sell affected room types
- Daily sync health report (success rate, average delay)

**Tools**: HotelRunner dashboard, custom monitoring script

---

## Known Issue: Manual Booking Sync (SYNC-001)

### Problem

**Observation**: Manual reservations created in HotelRunner (source: "Online") may not reduce availability on Booking.com.

**Impact**:
- Risk of overbooking (OTA shows room available when it's actually booked)
- Discovered on 2025-12-29, verification pending (TASK-NOW-005)

---

### Investigation Steps (TASK-NOW-005)

- [ ] Create test manual reservation in HotelRunner
- [ ] Wait 10 minutes
- [ ] Check Booking.com extranet: Did availability decrease?
- [ ] If YES → Issue resolved, archive this section
- [ ] If NO → Open HotelRunner support ticket with details

---

### Temporary Workaround

**Until resolved**:
1. After creating manual booking in HotelRunner → Login to Booking.com extranet
2. Manually verify availability has decreased
3. If not, manually adjust availability in Booking.com
4. Document discrepancy in incident log

---

## Multi-Channel Booking Flow

### Scenario: Guest Books on Booking.com

```
┌─────────────────────────────────────────────────────────┐
│ Guest searches for "Villa Thaifa" on Booking.com        │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│ Booking.com queries HotelRunner API: Availability?      │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│ HotelRunner responds: "2 Deluxe Triple Rooms available" │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│ Guest books 1 Deluxe Triple Room                        │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│ Booking.com sends reservation to HotelRunner (XML)      │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│ HotelRunner reduces inventory: 2 → 1                    │
└────────────────┬────────────────────────────────────────┘
                 │
          ┌──────┴───────┬──────────┬──────────┐
          ▼              ▼          ▼          ▼
    ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
    │ Expedia │  │ Airbnb  │  │Trip.com │  │ Direct  │
    │ (1 left)│  │ (1 left)│  │(1 left) │  │(1 left) │
    └─────────┘  └─────────┘  └─────────┘  └─────────┘
```

**Result**: All channels now show "1 Deluxe Triple Room available".

---

## Cancellation & Modification Sync

### Cancellation Flow

1. Guest cancels on Booking.com
2. Booking.com sends cancellation to HotelRunner
3. HotelRunner increases inventory: 1 → 2
4. HotelRunner pushes to all OTAs
5. All OTAs now show "2 Deluxe Triple Rooms available"

**Timing**: Same <5 minute real-time sync

---

### Modification Flow (Date Change)

**Example**: Guest changes check-in from Jan 20 → Jan 22

1. Booking.com sends modification to HotelRunner
2. HotelRunner releases Jan 20-21 (inventory +1)
3. HotelRunner blocks Jan 22-23 (inventory -1)
4. Pushes updates to all OTAs
5. All channels reflect new availability

---

## Reporting & Monitoring

### Key Metrics

| Metric | Definition | Target |
|--------|------------|--------|
| **Occupancy Rate** | (Booked rooms / Total rooms) × 100 | 70-85% |
| **Sync Success Rate** | (Successful syncs / Total sync attempts) × 100 | 99%+ |
| **Average Sync Delay** | Time from booking to all channels updated | <5 min |
| **Overbooking Rate** | Overbookings / Total bookings | 0% |

---

### Daily Monitoring Checklist

- [ ] Check HotelRunner dashboard for sync errors
- [ ] Verify availability matches across all OTAs (spot check)
- [ ] Review bookings for anomalies (duplicate reservations, gaps)
- [ ] Check occupancy forecast (next 30 days)

---

## Best Practices

### Do's

✅ **Use HotelRunner ONLY** to manage availability (never manual in OTA extranet)
✅ **Set stop-sell early** for maintenance/private events (30+ days notice)
✅ **Monitor sync health daily** (especially after new channel connections)
✅ **Test new channels** with dummy bookings before going live
✅ **Document incidents** (sync failures, overbookings) for pattern analysis

### Don'ts

❌ **Never manually adjust availability in OTA extranet** (creates sync conflicts)
❌ **Don't close all channels** for strategic inventory (use channel-specific stop-sell)
❌ **Avoid last-minute stop-sell** (guests may have already seen availability)
❌ **Don't ignore sync alerts** (investigate immediately)

---

## Future Enhancements

- [ ] **Real-time Dashboard**: Live view of availability across all channels
- [ ] **Predictive Overbooking**: ML model to safely overbook by 2-5% (industry practice)
- [ ] **Auto-Recovery**: If sync fails, auto-retry 3x before alerting admin
- [ ] **Channel Performance Analytics**: Which OTAs drive most bookings per room type?

---

## Related Documentation

| Document | Location | Purpose |
|----------|----------|---------|
| **OTA Hub** | [`docs/specs/knowledge/ota/README.md`](../README.md) | Overall OTA strategy |
| **Rate Sync** | [`docs/specs/knowledge/ota/sync/rate-sync.md`](./rate-sync.md) | Rate synchronization |
| **Booking.com Spec** | [`docs/specs/knowledge/ota/platforms/booking.com.md`](../platforms/booking.com.md) | Booking.com details |
| **HotelRunner Channel Mapping** | [`docs/specs/knowledge/platforms/hotelrunner/channel-mapping.md`](../../knowledge/platforms/hotelrunner/channel-mapping.md) | Room type mapping |

---

_Availability Synchronization Protocol — Villa Thaifa_
_Maintained by: documentation-manager agent_
_Last updated: 2026-01-20_
