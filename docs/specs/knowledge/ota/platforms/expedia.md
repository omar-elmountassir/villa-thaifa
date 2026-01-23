# Expedia Integration Specification

> **Status**: 🟡 BLOCKED - Legal Info Required
> **Priority**: P0 (Critical for OTA diversification)
> **Target**: Connect by end of January 2026
> **Last Updated**: 2026-01-20
> **Account Created**: ✅ Yes (HotelRunner + Said + Omar as admins)
> **Hotel ID**: 114807934 (confirmed)
> **Blocker**: ⚠️ Legal/Tax information not filled in Expedia

---

## Overview

Expedia Group is the world's 2nd largest OTA network, essential for reaching US and European travelers.

**Market Coverage**:

- Expedia.com (primary brand)
- Hotels.com (loyalty program)
- Vrbo (vacation rentals)
- Orbitz, Travelocity, Hotwire (subsidiaries)

**Why Priority P0**:

- Complements Booking.com (different customer base)
- Strong in US market (50%+ of bookings)
- Hotels.com Rewards drives repeat bookings
- Single connection = access to all Expedia Group brands

---

## Integration Details

### Connection Method

**Channel Manager**: HotelRunner
**Connection Type**: API-based (Expedia Partner Central)
**Sync Type**: Two-way real-time

### Prerequisites

**To Connect**:

1. **Hotel ID**: Unique Expedia property identifier
2. **Extranet Access**: Expedia Partner Central account
3. **Authorization**: Grant HotelRunner API access in Partner Central

**Current Status** (Updated 2026-01-20):

- [x] Partner Central account created
- [x] HotelRunner added as admin (dounia karkouri - HotelRunner property manager)
- [x] Said added as admin (thaifa thaifa)
- [x] Omar added as admin (Omar El Mountassir)
- [x] Access verified (2FA via SMS working)
- [x] Hotel ID confirmed: **114807934**
- [x] HotelRunner authorization DONE (they're already admin!)
- [ ] ⚠️ **BLOCKER**: Legal/Tax information not filled in Expedia Partner Central

---

## 🚨 Exploration Findings (2026-01-20)

> **Investigation by**: browser-agent + Omar (manual verification)
> **Date**: 2026-01-20

### Current State

| Aspect | Finding |
|--------|---------|
| **Hotel ID** | 114807934 |
| **Property Dashboard** | ✅ ACCESSIBLE via correct navigation (see below) |
| **Portfolio Status** | Visible with "Needs attention" badge |
| **Blocker** | ⚠️ Legal/Tax info not filled → HotelRunner connection blocked |

### Property Admins (Confirmed)

| Name | Role | Source |
|------|------|--------|
| **dounia karkouri** | Property Manager | HotelRunner |
| **thaifa thaifa** | Owner | Said Thaifa |
| **Omar El Mountassir** | Admin | Omar |

### Correct Navigation Path

**IMPORTANT**: The "Manage Property" search doesn't work. Use this path instead:

```
1. Login to Partner Central
   ↓
2. Click "Portfolio Performance" (sidebar)
   ↓
3. Click "Update competitive set" (under Villa Thaifa row)
   ↓
4. Now click "Home" / "Accueil"
   ↓
5. Redirects to: https://apps.expediapartnercentral.com/supply/home?htid=114807934
   ↓
6. Villa Thaifa property dashboard accessible!
```

**Property Dashboard URL**: `https://apps.expediapartnercentral.com/supply/home?htid=114807934`

### Metrics (Last 28 Days)

| Metric | Value | Status |
|--------|-------|--------|
| **Revenue (USD)** | $0 | ⚠️ Listing not live |
| **Room Nights** | 0 | ⚠️ Listing not live |
| **Average Daily Rate** | — | No data |
| **Page Views** | 0 | ⚠️ Listing not live |
| **Conversion Rate** | — | No data |

### Root Cause: Legal Info Missing

**HotelRunner is blocked** because Villa Thaifa hasn't filled in the required legal/tax information in Expedia Partner Central.

**What needs to be filled** (likely requirements):
- Business legal name (VILLA THAIFA SARLAU)
- Tax ID / Fiscal Identifier (IF: 06529089)
- Trade Register Number (RC: 60557)
- Business address
- Banking information for payouts

**Reference**: Legal info available in `docs/specs/knowledge/property/legal-info.md`

### Why "Needs Attention"?

The badge means Villa Thaifa underperforms its competitive set. But the real issue is:
- **Listing NOT live** → 0 metrics across the board
- **Blocked by legal info** → HotelRunner cannot complete connection

---

## 🔑 Access Protocol (For Claude & browser-agent)

> **CRITICAL**: Read this section before ANY Expedia operation.

### Credentials

**Location**: `.env.local` (project root)

```
EXPEDIA_URL=https://www.expediapartnercentral.com
EXPEDIA_ADMIN_EMAIL=omar@el-mountassir.com
EXPEDIA_ADMIN_PASSWORD=<see .env.local>
EXPEDIA_2FA_PHONE=+212643390409
```

### Login Flow

1. **Navigate** to https://www.expediapartnercentral.com
2. **Enter** email: omar@el-mountassir.com
3. **Enter** password from .env.local
4. **⚠️ 2FA REQUIRED**: SMS code sent to OMAR_PHONE (+212643390409)
   - **IF BLOCKED**: Stop and ask Omar for SMS code
   - Do NOT attempt multiple logins (may lock account)
5. **After login**: Click **"Portfolio Performance"** to see Villa Thaifa
   - Villa Thaifa is NOT visible on main dashboard
   - MUST click Portfolio Performance first

### Navigation Map (CORRECTED)

```
Partner Central Login
    ↓
Main Dashboard (Villa Thaifa NOT visible in search!)
    ↓
Click "Portfolio Performance" (sidebar)
    ↓
Villa Thaifa appears with "Needs attention" badge
    ↓
Click "Update competitive set" (under Villa Thaifa row)
    ↓
"Competitive set" page opens
    ↓
Now click "Home" / "Accueil" (sidebar)
    ↓
Redirects to: https://apps.expediapartnercentral.com/supply/home?htid=114807934
    ↓
✅ Villa Thaifa Property Dashboard accessible!
```

**Direct Property Dashboard URL**:
`https://apps.expediapartnercentral.com/supply/home?htid=114807934`

### 2FA Handling Protocol

**When 2FA SMS is requested**:

1. **STOP** browser automation immediately
2. **REPORT** to orchestrator: "2FA required - need SMS code from Omar"
3. **WAIT** for user to provide 6-digit code
4. **ENTER** code and continue

**DO NOT**:

- Attempt to bypass 2FA
- Try multiple login attempts (risk of lockout)
- Assume access is broken (2FA is normal)

---

## Connection Steps

### 1. Create Expedia Partner Account

**URL**: https://www.expediapartnercentral.com/signup

**Requirements**:

- Property details (name, address, contact)
- Bank account for commission payments
- Property photos (minimum 5 high-quality images)
- Room type descriptions

**Estimated Time**: 2-3 business days for account approval

---

### 2. Obtain Hotel ID

**Method 1: Partner Central**

1. Login to Expedia Partner Central
2. Navigate to Property → Settings
3. Hotel ID displayed in URL and property details

**Method 2: Support Request**

1. Contact Expedia Partner Support
2. Provide: Property name, address, contact
3. Receive Hotel ID via email (24-48h)

---

### 3. Authorize HotelRunner

**In Expedia Partner Central**:

1. Navigate to Tools → Connectivity
2. Select "Third-party channel manager"
3. Choose "HotelRunner" from list
4. Grant API access permissions
5. Copy API credentials (key + secret)

**In HotelRunner**:

1. Navigate to Channels → Add Channel
2. Select "Expedia"
3. Enter Hotel ID + API credentials
4. Map room types (12 rooms → 8 types)
5. Set initial rates and availability
6. Test connection

**Validation**: Create test booking to verify sync

---

## Room Mapping Strategy

> **Same as Booking.com** (8 room types)

| Physical Rooms | Room Type            | Expedia Display Strategy            |
| -------------- | -------------------- | ----------------------------------- |
| 1, 3, 8        | Deluxe Triple Room   | Emphasize family-friendly, 3 guests |
| 2              | Deluxe Double Room   | Romantic getaway, couples           |
| 4, 5           | Double Room Superior | Best value, popular choice          |
| 6              | Executive Suite      | Business travelers, extra space     |
| 7              | Deluxe King Suite    | Luxury king bed, premium amenities  |
| 9, 11          | Family Suite         | Large families, 4 guests            |
| 10             | Suite                | Classic suite, versatile            |
| 12             | Presidential Suite   | Ultimate luxury, special occasions  |

**Content Strategy**:

- Use different photos than Booking.com (avoid duplicate content penalty)
- Highlight unique amenities per room type
- Optimize descriptions for US audience (imperial measurements, US English)

---

## Rate Strategy

### Rate Parity Rules

**Critical**: Expedia enforces strict rate parity.

**Rule**: Rates on Expedia MUST be equal to or lower than:

- Direct website rates
- Other OTA rates (Booking.com, Airbnb, etc.)

**Penalty**: Deprioritization in search results if undercut on other channels.

**Best Practice**: Set identical base rates across all OTAs, differentiate with special offers.

---

### Recommended Rate Structure

| Rate Type          | Discount | Use Case                             |
| ------------------ | -------- | ------------------------------------ |
| **Standard Rate**  | 0%       | Default, matches other OTAs          |
| **Member Rate**    | -5%      | Hotels.com Rewards members           |
| **Non-refundable** | -10%     | Advance purchase, guaranteed revenue |
| **Early Bird**     | -15%     | 30+ days advance booking             |
| **Last Minute**    | -20%     | 1-3 days before check-in             |

**Commission**: Expedia standard commission ~15-25% (negotiable based on volume).

---

## Content Requirements

### Photos

**Minimum**: 5 high-quality images per room type
**Recommended**: 10-15 images per room type

**Requirements**:

- Resolution: 1920x1080 minimum
- Format: JPG, PNG
- Size: <5MB per image
- No watermarks, borders, or text overlays

**Categories**:

- Bedroom view (hero shot)
- Bathroom
- Amenities (closeup of features)
- View from room (if applicable)
- Property exterior/common areas

---

### Descriptions

**Room Type Description**:

- Length: 150-300 words
- Language: US English
- Focus: Comfort, amenities, unique features
- Include: Bed type, room size (sq ft), max occupancy

**Property Description**:

- Length: 300-500 words
- Highlight: Location, facilities, nearby attractions
- Tone: Welcoming, informative, aspirational

**Amenities**: Select from Expedia's standardized list (WiFi, parking, breakfast, etc.)

---

## Sync Configuration

### What Syncs

| Data Type         | Direction                  | Frequency | Status                |
| ----------------- | -------------------------- | --------- | --------------------- |
| **Availability**  | HotelRunner → Expedia      | Real-time | ⏳ Pending connection |
| **Rates**         | HotelRunner → Expedia      | Real-time | ⏳ Pending connection |
| **Reservations**  | Expedia → HotelRunner      | Real-time | ⏳ Pending connection |
| **Modifications** | Expedia → HotelRunner      | Real-time | ⏳ Pending connection |
| **Cancellations** | Expedia → HotelRunner      | Real-time | ⏳ Pending connection |
| **Content**       | Manual via Partner Central | On-demand | ⏳ Pending setup      |

---

## Performance Metrics (Projected)

### Target KPIs (3 months post-connection)

| Metric                       | Target                    | Rationale                             |
| ---------------------------- | ------------------------- | ------------------------------------- |
| **Booking Share**            | 30% of total OTA bookings | Balance with Booking.com (40%)        |
| **ADR (Average Daily Rate)** | Match Booking.com +5%     | US travelers willing to pay premium   |
| **Conversion Rate**          | 8-10%                     | Industry benchmark                    |
| **Review Score**             | 4.5/5 (9.0/10)            | Match current Booking.com performance |

---

## Troubleshooting

### Common Issues

| Issue                        | Cause                                    | Solution                            |
| ---------------------------- | ---------------------------------------- | ----------------------------------- |
| **Connection fails**         | Incorrect Hotel ID                       | Verify ID in Partner Central        |
| **API credentials rejected** | Wrong credentials                        | Regenerate in Partner Central       |
| **Room mapping errors**      | Mismatch between HotelRunner and Expedia | Re-map room types manually          |
| **Rates not syncing**        | Rate parity violation                    | Check rates on all channels, adjust |

---

## Support Contacts

| Support Type                        | Contact Method                               | Response Time |
| ----------------------------------- | -------------------------------------------- | ------------- |
| **Expedia Partner Support**         | Partner Central → Help Center                | 24-48h        |
| **HotelRunner Integration Support** | support@hotelrunner.com                      | 24h           |
| **Emergency Connectivity Issues**   | Expedia Partner Hotline (in Partner Central) | 2-4h          |

---

## Next Actions

### Immediate (This Week) - UPDATED 2026-01-20

- [x] Create Expedia Partner Central account ✅
- [x] HotelRunner added as admin ✅ (dounia karkouri)
- [x] Said added as admin ✅ (thaifa thaifa)
- [x] Omar added as admin ✅
- [x] Locate Hotel ID ✅ **114807934**
- [x] Identify what "attention required" means ✅ (listing not live, blocked by legal info)
- [x] Find correct navigation path ✅ (Portfolio Performance → Update competitive set → Home)
- [ ] **🚨 BLOCKER**: Fill in Legal/Tax information in Expedia Partner Central
  - Navigate to property dashboard: `https://apps.expediapartnercentral.com/supply/home?htid=114807934`
  - Find "Legal" or "Tax" or "Business Information" section
  - Fill using data from `docs/specs/knowledge/property/legal-info.md`:
    - Legal Name: VILLA THAIFA (SARLAU)
    - Tax ID (IF): 06529089
    - Trade Register (RC): 60557
    - Address: KM 12 Préfecture Sidi Youssef Ben Ali, Marrakech

### Short-term (After Legal Info Filled)

- [ ] Verify HotelRunner connection completes successfully
- [ ] Map room types in HotelRunner (12 rooms → 8 types)
- [ ] Set initial rates (match Booking.com rates)
- [ ] Verify/complete property photos and descriptions
- [ ] Activate listing

### Post-Connection (Month 1)

- [ ] Create test booking to verify sync
- [ ] Monitor rate parity across all OTAs
- [ ] Track booking performance (conversion, ADR)
- [ ] Optimize content based on analytics

---

## Future Enhancements

- [ ] **Hotels.com Rewards**: Enroll in loyalty program for repeat bookings
- [ ] **Smart Pricing**: Integrate with Expedia's revenue management tools
- [ ] **Promotional Campaigns**: Run targeted ads on Expedia platform
- [ ] **API Automation**: Build custom sync logic in PMS (Phase 3)

---

## Related Documentation

| Document                  | Location                                                                                                            | Purpose                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| **OTA Hub**               | [`docs/specs/knowledge/ota/README.md`](../README.md)                                                                          | Overall OTA strategy          |
| **HotelRunner Main**      | [`docs/specs/knowledge/platforms/hotelrunner/hotelrunner.md`](../../knowledge/platforms/hotelrunner/hotelrunner.md) | Channel Manager docs          |
| **Rate Sync Protocol**    | [`docs/specs/knowledge/ota/sync/rate-sync.md`](../sync/rate-sync.md)                                                          | Rate synchronization strategy |
| **Content Sync Protocol** | [`docs/specs/knowledge/ota/sync/content-sync.md`](../sync/content-sync.md)                                                    | Content management strategy   |

---

_Expedia Integration Specification — Villa Thaifa_
_Maintained by: documentation-manager agent_
_Last updated: 2026-01-20_
