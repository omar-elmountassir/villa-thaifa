# Browser Protocols for OTA Platforms

> **Purpose**: Centralized authentication and navigation protocols for all OTA platforms.
> **Consumers**: browser-agent, platform-validator, any agent needing OTA access
> **Last Updated**: 2026-01-20
> **SSOT**: This file is the single source of truth for browser protocols.

---

## Global Configuration

### Contact for 2FA/OTP

**All verification codes go to Omar El Mountassir**:

- **Phone (SMS)**: See `.env.local` → `OMAR_PHONE`
- **Email (OTP)**: See `.env.local` → `OMAR_EMAIL`

### Credentials Location

**All credentials**: `.env.local` at project root

---

## Platform Protocols

### 1. Booking.com

| Field            | Value                                           |
| ---------------- | ----------------------------------------------- |
| **URL**          | <https://admin.booking.com>                     |
| **Status**       | ✅ Connected                                    |
| **Auth Type**    | Email OTP                                       |
| **Credentials**  | `BOOKING_ADMIN_EMAIL`, `BOOKING_ADMIN_PASSWORD` |
| **OTP Delivery** | Email to `OMAR_EMAIL`                           |

**Login Flow**:

1. Navigate to URL
2. Enter email/password from `.env.local`
3. Wait for OTP email → Ask user for code
4. Enter OTP → Access granted

**Navigation**: Direct access to dashboard after login.

---

### 2. Expedia Partner Central

| Field            | Value                                           |
| ---------------- | ----------------------------------------------- |
| **URL**          | <https://www.expediapartnercentral.com>         |
| **Status**       | 🟡 Account Ready                                |
| **Auth Type**    | SMS 2FA                                         |
| **Credentials**  | `EXPEDIA_ADMIN_EMAIL`, `EXPEDIA_ADMIN_PASSWORD` |
| **2FA Delivery** | SMS to `OMAR_PHONE`                             |

**Login Flow**:

1. Navigate to URL
2. Enter email/password from `.env.local`
3. **⚠️ 2FA REQUIRED**: SMS code sent to `OMAR_PHONE`
4. Ask user for SMS code → Enter code
5. **IMPORTANT**: Click "Portfolio Performance" to see Villa Thaifa

**Navigation Map**:

```
Login → Main Dashboard (Villa Thaifa NOT visible!)
      → Click "Portfolio Performance"
      → Villa Thaifa appears → Select property
```

**Detailed Spec**: [`docs/specs/knowledge/ota/platforms/expedia.md`](../platforms/expedia.md)

---

### 3. HotelRunner (Channel Manager)

| Field            | Value                                                     |
| ---------------- | --------------------------------------------------------- |
| **URL**          | <https://app.hotelrunner.com>                             |
| **Status**       | ✅ Connected                                              |
| **Auth Type**    | Email OTP                                                 |
| **Credentials**  | `HOTELRUNNER_OWNER_EMAIL`, `HOTELRUNNER_OWNER_PASSWORD`   |
| **OTP Delivery** | Email                                                     |
| **Note**         | Use Owner account (Said's) - Omar account not yet created |

**Login Flow**:

1. Navigate to URL
2. Enter email/password from `.env.local`
3. Wait for OTP email → Ask user for code
4. May encounter reCAPTCHA → Ask user to solve

**Navigation**: Direct access to channel manager dashboard.

---

### 4. Airbnb

| Field                 | Value                                 |
| --------------------- | ------------------------------------- |
| **URL**               | <https://www.airbnb.com/hosting>      |
| **Status**            | ⏳ Pending                            |
| **Auth Type**         | OAuth via HotelRunner                 |
| **Connection Method** | HotelRunner → Channels → Add → Airbnb |

**Not yet connected** - Will use OAuth flow through HotelRunner, not direct login.

---

### 5. Trip.com

| Field                 | Value                                   |
| --------------------- | --------------------------------------- |
| **URL**               | <https://partner.trip.com>              |
| **Status**            | ⏳ Pending                              |
| **Auth Type**         | HotelRunner Channel                     |
| **Connection Method** | HotelRunner → Channels → Add → Trip.com |

**Not yet connected** - Will be managed through HotelRunner channel manager.

---

### 6. Traveloka

| Field                 | Value                                    |
| --------------------- | ---------------------------------------- |
| **URL**               | <https://partner.traveloka.com>          |
| **Status**            | ⏳ Pending                               |
| **Auth Type**         | HotelRunner Channel                      |
| **Connection Method** | HotelRunner → Channels → Add → Traveloka |
| **Note**              | Strong in Southeast Asia market          |

**Not yet connected** - Will be managed through HotelRunner channel manager.

---

### 7. Hotelbeds

| Field                 | Value                                                           |
| --------------------- | --------------------------------------------------------------- |
| **URL**               | <https://partner.hotelbeds.com>                                 |
| **Status**            | ⏳ Pending                                                      |
| **Auth Type**         | HotelRunner Channel                                             |
| **Connection Method** | HotelRunner → Channels → Add → Hotelbeds                        |
| **Type**              | B2B Wholesaler (sells to travel agencies, not direct consumers) |

**Not yet connected** - Will be managed through HotelRunner channel manager.

---

### 8. Odigeo

| Field                 | Value                                 |
| --------------------- | ------------------------------------- |
| **URL**               | <https://www.odigeoconnect.com>       |
| **Status**            | ⏳ Pending                            |
| **Auth Type**         | HotelRunner Channel                   |
| **Connection Method** | HotelRunner → Channels → Add → Odigeo |
| **Brands**            | eDreams, Opodo, Go Voyages            |

**Not yet connected** - Will be managed through HotelRunner channel manager.

---

## Quick Reference Table

| #   | Platform    | URL                       | Status | Auth      | Connection  |
| --- | ----------- | ------------------------- | ------ | --------- | ----------- |
| 1   | Booking.com | admin.booking.com         | ✅     | Email OTP | Direct + HR |
| 2   | Expedia     | expediapartnercentral.com | 🟡     | SMS 2FA   | Direct + HR |
| 3   | HotelRunner | app.hotelrunner.com       | ✅     | Email OTP | Direct      |
| 4   | Airbnb      | airbnb.com/hosting        | ⏳     | OAuth     | HR Channel  |
| 5   | Trip.com    | partner.trip.com          | ⏳     | HR        | HR Channel  |
| 6   | Traveloka   | partner.traveloka.com     | ⏳     | HR        | HR Channel  |
| 7   | Hotelbeds   | partner.hotelbeds.com     | ⏳     | HR        | HR Channel  |
| 8   | Odigeo      | odigeoconnect.com         | ⏳     | HR        | HR Channel  |

**HR** = HotelRunner

---

## 2FA/OTP Handling Protocol

When authentication blocks automation:

```
1. STOP automation immediately
2. REPORT to orchestrator:
   ⚠️ AUTH REQUIRED
   Platform: [name]
   Type: [SMS/Email OTP]
   Contact: OMAR_PHONE or OMAR_EMAIL
   Action: [what user needs to provide]
3. WAIT for user input
4. ENTER code when provided
5. CONTINUE automation
```

**DO NOT**:

- Attempt multiple logins (risk of lockout)
- Guess or skip verification
- Assume auth is broken (2FA is normal)

---

## Related Files

| File                                          | Purpose                   |
| --------------------------------------------- | ------------------------- |
| `.env.local`                                  | All credentials           |
| `docs/specs/knowledge/ota/README.md`                    | OTA strategy hub          |
| `docs/specs/knowledge/ota/platforms/*.md`               | Platform-specific details |
| `docs/specs/knowledge/platforms/OTA-INDEX.md` | Operational status        |

---

_Browser Protocols — Villa Thaifa OTA Integration_
_Maintained by: documentation-manager_
