# OTA Integration Hub — Villa Thaifa

> **Purpose**: Single Source of Truth (SSOT) for all OTA integrations
> **Last Updated**: 2026-01-20
> **Channel Manager**: HotelRunner
> **Property ID Booking.com**: 5446847

---

## 📊 OTA Strategy Overview

### Current Status

| Metric | Value | Status |
|--------|-------|--------|
| **Active OTAs** | 1/7 | 🟡 Initial Phase |
| **Total Available Channels** | 137 | Via HotelRunner |
| **Current Channel Manager** | HotelRunner | ✅ Active |
| **Two-Way XML Sync** | Booking.com only | ✅ Working |

---

## 🎯 Priority OTAs (7 Confirmed)

> **Selection Criteria**: Market reach, revenue potential, target audience alignment

| # | OTA | Code | Status | Priority | Market | Actions Required |
|---|-----|------|--------|----------|--------|------------------|
| 1 | **Booking.com** | `bookingcom` | ✅ Active | P0 | Global | Verify TASK-NOW-005 sync |
| 2 | **Expedia** | `expedia` | ⏳ In Progress | P0 | Global | Hotel ID + Extranet authorization |
| 3 | **Airbnb** | `airbnb-api` | ❌ Not Connected | P1 | Global | OAuth via HotelRunner |
| 4 | **Trip.com** | `tripcom` | ❌ Not Connected | P1 | APAC/Global | HotelRunner activation |
| 5 | **Traveloka** | `traveloka` | ❌ Not Connected | P1 | Southeast Asia | HotelRunner activation |
| 6 | **Hotelbeds** | `hotelbeds` | ❌ Not Connected | P1 | B2B Wholesale | HotelRunner activation |
| 7 | **ODIGEO** | `odigeo` | ❌ Not Connected | P2 | Europe | HotelRunner activation |

### Why These 7?

1. **Booking.com** - 80% of current bookings, 9.3/10 rating
2. **Expedia** - 2nd largest OTA globally, strong US/Europe
3. **Airbnb** - Alternative audience (travelers seeking local experience)
4. **Trip.com** - Dominant in Asia-Pacific, Chinese travelers
5. **Traveloka** - Southeast Asia leader (Indonesia, Thailand, Malaysia)
6. **Hotelbeds** - B2B wholesale, bulk booking potential
7. **ODIGEO** - European aggregator (eDreams, Opodo, Go Voyages)

---

## 📈 Performance Metrics

### Booking.com (Active)

| Metric | Value | Context |
|--------|-------|---------|
| **Overall Score** | 9.3/10 | 80 reviews |
| **Staff** | 9.7/10 | Exceptional |
| **Breakfast** | 10/10 | Perfect |
| **Location** | 8.2/10 | Improvement opportunity |
| **Cleanliness** | 9.5/10 | Excellent |
| **Comfort** | 9.4/10 | Excellent |

**Source**: Booking.com Extranet (Last sync: 2025-12-29)

---

## 🔧 Technical Architecture

### Current Stack

```
┌─────────────────────────────────────────┐
│         Villa Thaifa Property           │
│           (12 Rooms → 8 Types)          │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│          HotelRunner (Channel Manager)  │
│         API: developers.hotelrunner.com │
└─────────────────┬───────────────────────┘
                  │
        ┌─────────┴─────────┬──────────┐
        ▼                   ▼          ▼
┌──────────────┐  ┌──────────────┐  ┌─────────────┐
│ Booking.com  │  │   Expedia    │  │   Airbnb    │
│  (Active)    │  │ (Connecting) │  │  (Planned)  │
└──────────────┘  └──────────────┘  └─────────────┘
```

### Future Architecture (PMS Phase)

```
src/systems/services/channels/
├── core/
│   ├── ChannelManager.ts      # Abstract interface
│   ├── SyncEngine.ts           # Bidirectional sync
│   └── RatePusher.ts           # Rate/availability updates
├── providers/
│   ├── booking/
│   │   ├── BookingClient.ts    # Booking.com API client
│   │   └── BookingMapper.ts    # Data transformation
│   ├── expedia/
│   ├── airbnb/
│   └── hotelrunner/
│       ├── HotelRunnerAPI.ts   # Channel Manager API
│       └── ChannelRegistry.ts  # 137 channels
└── utils/
    ├── RoomMapper.ts           # 12 rooms → 8 types
    └── ValidationGuard.ts      # Pre-push validation
```

---

## 🗂️ Documentation Structure

### Directory Layout

```
docs/specs/knowledge/ota/
├── README.md                   # This file (SSOT)
├── platforms/                  # Platform-specific specs
│   ├── booking.com.md         # Booking.com integration
│   ├── expedia.md             # Expedia integration
│   ├── airbnb.md              # Airbnb integration
│   ├── tripcom.md             # Trip.com integration
│   ├── traveloka.md           # Traveloka integration
│   ├── hotelbeds.md           # Hotelbeds B2B
│   └── odigeo.md              # ODIGEO integration
└── sync/                       # Sync protocols
    ├── rate-sync.md           # Rate synchronization
    ├── availability-sync.md   # Availability sync
    ├── content-sync.md        # Room descriptions/images
    └── reservation-flow.md    # Booking lifecycle
```

### Existing Documentation (Reference)

> **Important**: Content below is in `docs/specs/knowledge/platforms/` - DO NOT duplicate

| Document | Location | Purpose |
|----------|----------|---------|
| **OTA-INDEX.md** | [`docs/specs/knowledge/platforms/OTA-INDEX.md`](../knowledge/platforms/OTA-INDEX.md) | Current state snapshot, metrics |
| **HotelRunner Main** | [`docs/specs/knowledge/platforms/hotelrunner/hotelrunner.md`](../knowledge/platforms/hotelrunner/hotelrunner.md) | Access, constraints, inventory |
| **Channel Mapping** | [`docs/specs/knowledge/platforms/hotelrunner/channel-mapping.md`](../knowledge/platforms/hotelrunner/channel-mapping.md) | 12 rooms → 8 types mapping |
| **HotelRunner API** | [`docs/specs/knowledge/platforms/hotelrunner/api-reference.md`](../knowledge/platforms/hotelrunner/api-reference.md) | API documentation |
| **Full Channel List** | [`docs/specs/knowledge/platforms/hotelrunner/channels_full_list.md`](../knowledge/platforms/hotelrunner/channels_full_list.md) | 137 channels A-Z |
| **Booking.com Data** | [`docs/specs/knowledge/platforms/booking/booking-com-data.md`](../knowledge/platforms/booking/booking-com-data.md) | Property data, scores, rules |
| **XML Lock Config** | [`docs/specs/knowledge/platforms/booking/xml-lock.md`](../knowledge/platforms/booking/xml-lock.md) | Two-way XML configuration |
| **Booking UI Nuances** | [`docs/specs/knowledge/platforms/booking/ui-nuances.md`](../knowledge/platforms/booking/ui-nuances.md) | Extranet interface details |

---

## 🔄 Room Mapping (12 → 8 Types)

> **Critical**: This mapping is the foundation of all OTA integrations

| Physical Rooms | Room Type (HotelRunner) | Room Type (Booking.com) | Capacity |
|----------------|-------------------------|-------------------------|----------|
| 1, 3, 8 | Deluxe Triple Room | Chambre Triple Deluxe | 3 guests |
| 2 | Deluxe Double Room | Chambre Double Deluxe | 2 guests |
| 4, 5 | Double Room Superior | Chambre Double Supérieure | 2 guests |
| 6 | Executive Suite | Suite Exécutive | 2 guests |
| 7 | Deluxe King Suite | Suite De Luxe King Size | 2 guests |
| 9, 11 | Family Suite | Suite Familiale | 4 guests |
| 10 | Suite | Suite | 2 guests |
| 12 | Presidential Suite | Suite Présidentielle | 4 guests |

**Sync Mechanism**: HotelRunner maintains master inventory, pushes to OTAs via two-way XML or API.

---

## 🚨 Known Issues

> **Tracking**: Issues tracked in ROADMAP.md with TASK-NOW-XXX IDs

| ID | Issue | Status | Severity | Assigned Task |
|----|-------|--------|----------|---------------|
| SYNC-001 | Manual HotelRunner bookings don't reduce Booking.com availability | ⏳ Verifying | Medium | [TASK-NOW-005](../../ROADMAP.md#task-now-005-vérifier-sync-hotelrunner--bookingcom) |

---

## 📋 Next Actions

### Immediate (This Week)

- [ ] **TASK-NOW-005**: Verify HotelRunner → Booking.com sync (manual reservations)
- [ ] **Expedia**: Obtain Hotel ID, authorize HotelRunner extranet access
- [ ] **Airbnb**: OAuth connection via HotelRunner

### Short-term (This Month)

- [ ] Create platform-specific integration specs in `platforms/`
- [ ] Document sync protocols in `sync/`
- [ ] Define rate push strategy (daily/weekly cadence)
- [ ] Setup monitoring dashboard for OTA performance

### Medium-term (Q1 2026)

- [ ] Connect Trip.com, Traveloka, Hotelbeds
- [ ] Implement PMS code in `src/systems/services/channels/`
- [ ] Create automated rate optimization engine
- [ ] Setup A/B testing for descriptions/images per OTA

---

## 📚 Additional Resources

### External Links

| Resource | URL | Purpose |
|----------|-----|---------|
| **HotelRunner Developer Portal** | https://developers.hotelrunner.com | API docs, channel list |
| **HotelRunner Channel List** | https://developers.hotelrunner.com/services/channel-list | 137+ available channels |
| **Booking.com Connectivity** | https://connect.booking.com | XML API documentation |
| **Expedia Partner Central** | https://www.expediapartnercentral.com | Partner resources |

### Internal Links

| Resource | Location | Purpose |
|----------|----------|---------|
| **Project Roadmap** | [`ROADMAP.md`](../../ROADMAP.md) | Overall project tasks |
| **Mission & Vision** | [`docs/project/meta/MISSION.md`](../project/meta/MISSION.md) | Strategic direction |
| **Agent Registry** | [`docs/project/standards/agents/registry.md`](../project/standards/agents/registry.md) | Available agents |

---

## 🎓 Learning Resources

### HotelRunner Academy

- Channel Manager Best Practices
- Rate Strategy Optimization
- OTA Performance Monitoring

### OTA-Specific Training

- **Booking.com**: Extranet mastery, review management
- **Expedia**: Rate parity, content optimization
- **Airbnb**: Host dashboard, instant booking

---

## 📞 Support Contacts

| Platform | Support Channel | Response Time |
|----------|----------------|---------------|
| **HotelRunner** | support@hotelrunner.com | 24-48h |
| **Booking.com** | Extranet messaging | 24h |
| **Expedia** | Partner Central tickets | 48h |

---

## 🏆 Success Metrics

### Target KPIs (End of Q1 2026)

| Metric | Current | Target | Progress |
|--------|---------|--------|----------|
| **Active OTAs** | 1 | 7 | 14% |
| **Avg. Daily Rate (ADR)** | TBD | +15% | - |
| **Booking Distribution** | 100% Booking.com | 40/30/30 split | - |
| **Channel Manager Automation** | Manual | 95% automated | - |

**Distribution Target**: 40% Booking.com, 30% Expedia/Airbnb, 30% Trip.com/Others

---

_OTA Integration Hub — Villa Thaifa_
_Maintained by: documentation-manager agent_
_Last audit: 2026-01-20_
