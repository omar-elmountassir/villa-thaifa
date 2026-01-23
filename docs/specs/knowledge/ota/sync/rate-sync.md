# Rate Synchronization Protocol

> **Purpose**: Maintain rate parity across all OTA channels
> **Critical**: Avoid penalties from rate parity violations
> **Last Updated**: 2026-01-20

---

## Overview

Rate synchronization ensures consistent pricing across all OTA channels while complying with rate parity agreements.

**Key Principle**: Same room type = Same base rate on all OTAs (Booking.com, Expedia, Airbnb, etc.)

**Exceptions Allowed**:
- Channel-specific discounts (e.g., member-only rates)
- Non-refundable vs. flexible rates
- Package deals (room + breakfast, etc.)

---

## Rate Parity Rules

### What is Rate Parity?

**Definition**: Requirement by OTAs that your rates on their platform are equal to or lower than rates on other channels.

**Consequences of Violations**:
1. **Search Deprioritization**: Lower visibility in search results
2. **Featured Listing Removal**: Loss of premium placement
3. **Account Suspension**: Severe/repeated violations can lead to account termination

---

### Enforcement by OTA

| OTA | Enforcement | Monitoring Method | Penalty |
|-----|-------------|-------------------|---------|
| **Booking.com** | Strict | Automated crawlers | Immediate deprioritization |
| **Expedia** | Strict | Manual audits + crawlers | Warning → deprioritization |
| **Airbnb** | Moderate | Community reporting | Warning first, then listing suspension |

---

## Rate Structure

### Base Rate Hierarchy

```
Direct Website (Villa Thaifa site)
  ↓ (Equal to or higher than)
OTA Base Rate (Booking.com, Expedia, Airbnb)
  ↓ (Can offer discounts)
Member Rates (Hotels.com Rewards, etc.)
  ↓ (Deeper discounts)
Non-refundable Rates
  ↓ (Deepest discounts)
Last-minute / Early-bird Promotions
```

**Example**:
- Direct Website: €100/night
- OTA Standard Rate: €100/night (matches direct)
- Hotels.com Member Rate: €95/night (-5%)
- Non-refundable Rate: €90/night (-10%)
- Early Bird (30+ days): €85/night (-15%)

---

## Synchronization Frequency

### Real-time Sync (Recommended)

**Trigger**: Any rate change in HotelRunner
**Delay**: <5 minutes to all connected OTAs
**Coverage**: Availability, rates, restrictions (min stay, etc.)

**Supported Channels**:
- ✅ Booking.com (XML API)
- ✅ Expedia (API)
- ✅ Airbnb (API)

---

### Scheduled Sync (Fallback)

**Frequency**: Every 6 hours (00:00, 06:00, 12:00, 18:00 UTC)
**Use Case**: Channels without real-time API support
**Coverage**: Full rate calendar push (30-365 days ahead)

---

## Rate Management Workflow

### 1. Set Base Rates in HotelRunner

**Steps**:
1. Login to HotelRunner
2. Navigate to Rates & Availability
3. Select room type (e.g., "Deluxe Triple Room")
4. Set base rate for date range
5. Save → Triggers sync to all OTAs

**Best Practice**: Set rates for at least 90 days ahead, update weekly.

---

### 2. Define Rate Plans

**Standard Rate Plan**: Base rate, fully refundable
**Non-refundable Rate Plan**: 10-15% discount, no refunds
**Early Bird Plan**: 15-20% discount, 30+ days advance booking
**Last Minute Plan**: 20-30% discount, 1-3 days before check-in

**Configuration**: Create rate plans in HotelRunner → Map to OTA rate plans

---

### 3. Monitor Rate Parity

**Tools**:
- **HotelRunner Dashboard**: Shows rates across all channels
- **Rate Shopper Tools**: OTA Insight, RateGain (manual check)
- **Google Incognito**: Manually search for your property on each OTA

**Frequency**: Daily check during high season, weekly during low season

---

## Dynamic Pricing Strategy

### Factors for Rate Adjustment

| Factor | Impact | Adjustment Range |
|--------|--------|------------------|
| **Occupancy** | High occupancy → increase rates | +10-30% |
| **Seasonality** | Peak season → premium rates | +20-50% |
| **Day of Week** | Weekend → higher rates | +5-15% |
| **Events** | Local events → surge pricing | +30-100% |
| **Competitor Rates** | Match or undercut competitors | -5-10% |
| **Booking Window** | Last minute → discount | -20-30% |

---

### Automation (Future PMS)

**Goal**: AI-driven dynamic pricing based on market demand

**Inputs**:
- Historical booking data
- Competitor rates
- Local event calendars
- Weather forecasts
- OTA search demand (from APIs)

**Output**: Recommended daily rates per room type

**Implementation**: Custom algorithm in `src/systems/services/pricing/DynamicPricer.ts`

---

## Special Cases

### 1. Direct Booking Incentive

**Strategy**: Offer exclusive benefits on direct bookings (not just lower rates)

**Examples**:
- Free airport transfer (value: €20-30)
- Late checkout (value: €10-15)
- Welcome amenity (fruit basket, wine)
- Loyalty points for future stays

**Rationale**: Avoids rate parity violations while incentivizing direct bookings.

---

### 2. Corporate Rates

**Use Case**: Companies booking multiple rooms

**Discount**: 15-25% off standard rate
**Minimum**: 5+ room nights per month
**Billing**: Net terms (30-60 days)

**Compliance**: Corporate rates exempt from OTA rate parity (B2B channel).

---

### 3. Package Deals

**Example**: Room + Breakfast + Spa Treatment

**Pricing**: €150 (room: €100, breakfast: €15, spa: €35)
**OTA Display**: Package rate, not comparable to room-only rate

**Compliance**: Bundles are exempt from rate parity as long as they include additional services.

---

## Error Handling

### Common Sync Errors

| Error | Cause | Solution |
|-------|-------|----------|
| **Rate rejected** | Below minimum allowed by OTA | Increase rate, check OTA policies |
| **Sync delay >1 hour** | API outage | Check HotelRunner status, contact support |
| **Rate mismatch** | Manual override in OTA extranet | Remove extranet overrides, use HotelRunner only |
| **Parity violation alert** | Competitor undercuts you | Verify claim, adjust rate if valid |

---

### Monitoring & Alerts

**Setup**:
1. Enable email alerts in HotelRunner for sync failures
2. Set up daily rate parity check (manual or automated)
3. Create dashboard showing rates across all OTAs

**Alert Triggers**:
- Sync failure for >30 minutes
- Rate mismatch detected
- OTA sends parity violation warning

---

## Reporting & Analytics

### Key Metrics

| Metric | Definition | Target |
|--------|------------|--------|
| **ADR (Average Daily Rate)** | Total room revenue / rooms sold | €120-150 |
| **RevPAR (Revenue Per Available Room)** | Total room revenue / total rooms | €80-100 |
| **Rate Parity Compliance** | % of days with matching rates | 100% |
| **Dynamic Pricing Effectiveness** | ADR increase from dynamic adjustments | +10-15% |

**Reporting Frequency**: Weekly review, monthly deep dive

---

## Best Practices

### Do's

✅ **Set rates in HotelRunner ONLY** (single source of truth)
✅ **Update rates at least weekly** (anticipate demand)
✅ **Use rate plans** (standard, non-refundable, early bird)
✅ **Monitor competitor rates** (stay competitive)
✅ **Document rate changes** (track performance of adjustments)

### Don'ts

❌ **Never manually override rates in OTA extranet** (breaks sync)
❌ **Don't set different base rates on different OTAs** (parity violation)
❌ **Avoid frequent drastic changes** (confuses algorithms, guests)
❌ **Don't ignore OTA parity warnings** (leads to penalties)

---

## Future Enhancements

- [ ] **Rate Shopper API**: Automated competitor rate tracking
- [ ] **ML-Based Pricing**: Predict optimal rates using historical data
- [ ] **A/B Testing**: Test different rate strategies per OTA
- [ ] **Yield Management**: Optimize for total revenue, not just ADR

---

## Related Documentation

| Document | Location | Purpose |
|----------|----------|---------|
| **OTA Hub** | [`docs/specs/knowledge/ota/README.md`](../README.md) | Overall OTA strategy |
| **Booking.com Spec** | [`docs/specs/knowledge/ota/platforms/booking.com.md`](../platforms/booking.com.md) | Booking.com rate rules |
| **Expedia Spec** | [`docs/specs/knowledge/ota/platforms/expedia.md`](../platforms/expedia.md) | Expedia rate parity |
| **Availability Sync** | [`docs/specs/knowledge/ota/sync/availability-sync.md`](./availability-sync.md) | Availability synchronization |

---

_Rate Synchronization Protocol — Villa Thaifa_
_Maintained by: documentation-manager agent_
_Last updated: 2026-01-20_
