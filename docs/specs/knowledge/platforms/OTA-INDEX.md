# OTA Index — Villa Thaifa

> **Dernière mise à jour**: 2026-01-20
> **Channel Manager**: HotelRunner
> **Property ID Booking.com**: 5446847

---

## Statut des Canaux

| OTA | Statut | Type Sync | Dernière Sync | Actions Requises |
|-----|--------|-----------|---------------|------------------|
| **Booking.com** | ✅ Actif | Two-Way XML | 2025-12-29 | - |
| **Expedia** | 🟡 Compte prêt | - | - | Autoriser HotelRunner, vérifier "attention required" |
| **Airbnb** | ❌ Non connecté | - | - | OAuth (login Airbnb Host) |

---

## Métriques Clés

### Booking.com

| Métrique | Valeur | Source |
|----------|--------|--------|
| **Score Global** | 9.3/10 | 80 avis |
| **Personnel** | 9.7/10 | Exceptionnel |
| **Petit-déjeuner** | 10/10 | Parfait |
| **Emplacement** | 8.2/10 | Point faible |

---

## Mapping Chambres (12 chambres → 8 types)

| Chambres | Type HotelRunner | Type Booking.com |
|----------|------------------|------------------|
| 1, 3, 8 | Deluxe Triple Room | Chambre Triple Deluxe |
| 2 | Deluxe Double Room | Chambre Double Deluxe |
| 4, 5 | Double Room Superior | Chambre Double Supérieure |
| 6 | Executive Suite | Suite Exécutive |
| 7 | Deluxe King Suite | Suite De Luxe King Size |
| 9, 11 | Family Suite | Suite Familiale |
| 10 | Suite | Suite |
| 12 | Presidential Suite | Suite Présidentielle |

---

## Problèmes Connus

| ID | Description | Statut | Date | Action |
|----|-------------|--------|------|--------|
| SYNC-001 | Réservations manuelles HotelRunner ne sync pas vers Booking.com | ⏳ À vérifier | 2025-12-29 | [TASK-NOW-005](../../../../ROADMAP.md) |

---

## Canaux HotelRunner Disponibles (130+)

> **Source**: [developers.hotelrunner.com/services/channel-list](https://developers.hotelrunner.com/services/channel-list)

### Canaux Prioritaires pour Villa Thaifa

| Canal | Code | Statut | Priorité |
|-------|------|--------|----------|
| Booking.com | `bookingcom` | ✅ Actif | - |
| Expedia | `expedia` | 🟡 Compte prêt | P1 |
| Airbnb | `airbnb-api` | ❌ Non connecté | P1 |
| Agoda | `agodaycs5` | ❌ Non connecté | P2 |
| Trip.com | `tripcom` | ❌ Non connecté | P2 |
| TripAdvisor | `tripadvisor` | ❌ Non connecté | P2 |
| HalalBooking | `halalbooking` | ❌ Non connecté | P2 (niche) |
| VRBO | `vrbo` | ❌ Non connecté | P3 |
| Google | `google_v2` | ❌ Non connecté | P3 |

### Liste Complète (137 canaux)

**→ [Voir la liste complète](hotelrunner/channels_full_list.md)** — 137 canaux avec codes et catégories

---

## Documentation Détaillée

### HotelRunner (Channel Manager)

| Document | Description |
|----------|-------------|
| [hotelrunner.md](hotelrunner/hotelrunner.md) | Accès, contraintes, inventaire |
| [channel-mapping.md](hotelrunner/channel-mapping.md) | Mapping détaillé HR ↔ Booking.com |
| [api-reference.md](hotelrunner/api-reference.md) | Référence API |

### Booking.com

| Document | Description |
|----------|-------------|
| [booking-com-data.md](booking/booking-com-data.md) | Données complètes (scores, règlement, équipements) |
| [xml-lock.md](booking/xml-lock.md) | Configuration XML |
| [ui-nuances.md](booking/ui-nuances.md) | Particularités interface |

### Guides Extranet

| Document | Description |
|----------|-------------|
| [booking_extranet_guide.md](../booking_extranet_guide.md) | Guide d'utilisation extranet |
| [booking_extranet_incidents.md](../booking_extranet_incidents.md) | Incidents connus |

---

## Prochaines Étapes

1. **Vérifier sync** — TASK-NOW-005 (réservations manuelles)
2. **Finaliser Expedia** — Compte prêt, vérifier "attention required", autoriser HotelRunner
3. **Connecter Airbnb** — OAuth simple via HotelRunner

> **Note Expedia**: Accès vérifié (2FA SMS fonctionne). Navigation: Login → Portfolio Performance → Villa Thaifa.
> Credentials dans `.env.local`. Voir [`docs/specs/knowledge/ota/platforms/expedia.md`](../../ota/platforms/expedia.md) pour protocole complet.

---

## Architecture Future

| Type | Emplacement |
|------|-------------|
| **Documentation** (actuel) | `docs/specs/knowledge/platforms/` |
| **Code intégration** (futur) | `src/systems/services/channels/` |

Quand on codera l'intégration OTA (API clients, sync logic), le code ira dans `src/systems/services/channels/`.

---

## 🆕 NEW: Strategic OTA Documentation (2026-01-20)

> **Important**: Pour la stratégie OTA consolidée, consultez [`docs/specs/knowledge/ota/`](../../ota/README.md)

**Nouvelle structure créée**:
- **Hub stratégique**: [`docs/specs/knowledge/ota/README.md`](../../ota/README.md) - SSOT pour stratégie OTA
- **Specs plateformes**: [`docs/specs/knowledge/ota/platforms/`](../../ota/platforms/) - Booking.com, Expedia, etc.
- **Protocoles sync**: [`docs/specs/knowledge/ota/sync/`](../../ota/sync/) - Rate sync, availability sync

**Séparation des préoccupations**:
- `docs/specs/knowledge/ota/` → Documentation stratégique (roadmap, intégration, sync)
- `docs/specs/knowledge/platforms/` → Connaissances opérationnelles (état actuel, accès, données)

---

_Index centralisé OTA — Villa Thaifa_
