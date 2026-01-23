# Booking.com Integration Specification

> **Status**: ✅ Active (Two-Way XML Sync)
> **Property ID**: 5446847
> **Connection Type**: HotelRunner Channel Manager
> **Last Updated**: 2026-01-20

---

## Overview

Booking.com is Villa Thaifa's primary OTA channel, currently representing 100% of OTA bookings.

**Key Stats**:
- Overall Score: 9.3/10 (80 reviews)
- Staff Rating: 9.7/10 (Exceptional)
- Breakfast Rating: 10/10 (Perfect)
- Location Rating: 8.2/10 (Improvement opportunity)

---

## Integration Details

### Connection Method

**Channel Manager**: HotelRunner
**Sync Type**: Two-Way XML
**Frequency**: Real-time (rate/availability changes push within minutes)

### What Syncs

| Data Type | Direction | Frequency | Status |
|-----------|-----------|-----------|--------|
| **Availability** | HotelRunner → Booking.com | Real-time | ✅ Working |
| **Rates** | HotelRunner → Booking.com | Real-time | ✅ Working |
| **Reservations** | Booking.com → HotelRunner | Real-time | ✅ Working |
| **Modifications** | Booking.com → HotelRunner | Real-time | ✅ Working |
| **Cancellations** | Booking.com → HotelRunner | Real-time | ✅ Working |
| **Content** | Manual via Extranet | On-demand | ⚠️ Manual process |
| **Reviews** | Booking.com only | N/A | 📖 Read-only |

---

## Room Mapping

> **Source**: [`docs/specs/knowledge/platforms/hotelrunner/channel-mapping.md`](../../knowledge/platforms/hotelrunner/channel-mapping.md)

| Physical Rooms | HotelRunner Type | Booking.com Display Name |
|----------------|------------------|--------------------------|
| 1, 3, 8 | Deluxe Triple Room | Chambre Triple Deluxe |
| 2 | Deluxe Double Room | Chambre Double Deluxe |
| 4, 5 | Double Room Superior | Chambre Double Supérieure |
| 6 | Executive Suite | Suite Exécutive |
| 7 | Deluxe King Suite | Suite De Luxe King Size |
| 9, 11 | Family Suite | Suite Familiale |
| 10 | Suite | Suite |
| 12 | Presidential Suite | Suite Présidentielle |

**Critical**: These mappings are configured in HotelRunner → Booking.com channel settings.

---

## Known Issues

### SYNC-001: Manual HotelRunner Bookings

**Issue**: Manual reservations created in HotelRunner (source: "Online") may not reduce availability on Booking.com.

**Status**: ⏳ Verifying (TASK-NOW-005)
**Severity**: Medium
**Impact**: Risk of overbooking if manual reservations created without checking Booking.com

**Investigation Steps**:
1. Create test manual reservation in HotelRunner
2. Check if availability decreases on Booking.com
3. If fixed → Archive issue
4. If persists → Open HotelRunner support ticket

**Workaround**: Always check Booking.com extranet after creating manual bookings.

---

## Content Management

### Current State

**Description**: Manually maintained via Booking.com Extranet
**Photos**: 307 images across all room types (needs audit - many orphaned)
**Amenities**: Listed per room type in Extranet
**Policies**: Managed in Extranet (check-in/out, cancellation, payment)

### Content Update Process

1. **Login**: Booking.com Extranet (credentials in vault)
2. **Navigate**: Property → Room Types
3. **Edit**: Click room type to modify description/amenities
4. **Upload Photos**: Photo Gallery section
5. **Save**: Changes reflect on Booking.com within 24h

**Note**: Content changes do NOT sync to HotelRunner (one-way manual process).

---

## Performance Metrics

### Review Breakdown (80 reviews)

| Category | Score | Benchmark | Status |
|----------|-------|-----------|--------|
| **Overall** | 9.3/10 | 9.0+ (Excellent) | ✅ Exceeds |
| **Staff** | 9.7/10 | 9.0+ (Exceptional) | ✅ Exceeds |
| **Breakfast** | 10/10 | 9.0+ (Perfect) | ✅ Perfect |
| **Location** | 8.2/10 | 8.5+ (Target) | ⚠️ Below target |
| **Cleanliness** | 9.5/10 | 9.0+ (Excellent) | ✅ Exceeds |
| **Comfort** | 9.4/10 | 9.0+ (Excellent) | ✅ Exceeds |

**Action Items**:
- **Location Score**: Consider highlighting unique features (proximity to attractions, quiet area, etc.) in description
- **Maintain Excellence**: Continue exceptional service to sustain 9.3+ overall score

---

## Rate Strategy

### Current Approach

**Pricing**: Manually set in HotelRunner, syncs to Booking.com
**Flexibility**: Can adjust rates per room type, per date range
**Special Offers**: Managed via HotelRunner (early bird, last minute, etc.)

### Best Practices

1. **Rate Parity**: Ensure rates match other OTAs (Booking.com penalty for undercutting)
2. **Dynamic Pricing**: Adjust based on occupancy, season, events
3. **Minimum Stay**: Configure in HotelRunner for peak periods
4. **Non-refundable Rates**: Offer 10-15% discount for non-refundable bookings

---

## API Access

> **Full Documentation**: [`docs/specs/knowledge/platforms/booking/xml-lock.md`](../../knowledge/platforms/booking/xml-lock.md)

### XML API Endpoints

**Base URL**: `https://secure-supply-xml.booking.com/hotels/xml/`

**Operations**:
- `reservations`: Retrieve new/modified bookings
- `availability`: Push room availability
- `rates`: Push rate updates
- `content`: Upload property content (limited)

**Authentication**: HotelRunner manages credentials and certificate

---

## Extranet Guide

> **Full Guide**: [`docs/specs/knowledge/booking_extranet_guide.md`](../../knowledge/booking_extranet_guide.md)

### Quick Access

**URL**: https://admin.booking.com
**Login**: Via HotelRunner SSO or direct credentials

### Key Sections

1. **Dashboard**: Overview of bookings, revenue, performance
2. **Reservations**: Manage bookings, modifications, cancellations
3. **Rates & Availability**: Manual override (use HotelRunner instead)
4. **Property**: Content management (photos, descriptions, amenities)
5. **Finance**: Invoices, commission statements
6. **Inbox**: Guest messages, Booking.com notifications

---

## Troubleshooting

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| **Availability not updating** | XML sync delay | Wait 5 minutes, check HotelRunner logs |
| **Rate mismatch** | Manual override in Extranet | Check "Rates & Availability" tab, remove overrides |
| **Missing reservation** | XML parsing error | Check HotelRunner inbox for error notifications |
| **Overbooking** | Manual reservation not syncing | Verify SYNC-001, always cross-check availability |

### Support Escalation

1. **HotelRunner Support**: support@hotelrunner.com (24-48h response)
2. **Booking.com Partner Support**: Extranet → Help Center → Contact Us
3. **Emergency**: Call Booking.com partner hotline (number in Extranet)

---

## Future Enhancements

### Planned Improvements

- [ ] **Content Sync**: Automate photo/description updates via API
- [ ] **Review Response**: Automated thank-you messages for reviews
- [ ] **Smart Pricing**: ML-based dynamic pricing based on Booking.com demand data
- [ ] **A/B Testing**: Test different descriptions/photos for conversion optimization

---

## Related Documentation

| Document | Location | Purpose |
|----------|----------|---------|
| **OTA Hub** | [`docs/specs/knowledge/ota/README.md`](../README.md) | Overall OTA strategy |
| **HotelRunner Main** | [`docs/specs/knowledge/platforms/hotelrunner/hotelrunner.md`](../../knowledge/platforms/hotelrunner/hotelrunner.md) | Channel Manager docs |
| **Booking.com Data** | [`docs/specs/knowledge/platforms/booking/booking-com-data.md`](../../knowledge/platforms/booking/booking-com-data.md) | Detailed property data |
| **XML Lock Config** | [`docs/specs/knowledge/platforms/booking/xml-lock.md`](../../knowledge/platforms/booking/xml-lock.md) | Technical XML setup |
| **UI Nuances** | [`docs/specs/knowledge/platforms/booking/ui-nuances.md`](../../knowledge/platforms/booking/ui-nuances.md) | Extranet interface tips |

---

_Booking.com Integration Specification — Villa Thaifa_
_Maintained by: documentation-manager agent_
_Last verified: 2026-01-20_
