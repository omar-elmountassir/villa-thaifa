# ADR-002: Feature-Based MVC Architecture

> **Date**: 2026-01-17
> **Status**: ACCEPTED
> **Deciders**: Omar, Antigravity
> **Context**: Defining the code organization pattern for Villa Thaifa PMS features.

## 1. Context

Villa Thaifa is building a Property Management System (PMS) with multiple business domains:
- **Rooms**: Inventory management, pricing, availability
- **Facilities**: Pool, garden, hall management
- **Admin**: Authentication, dashboard, operations
- **Reservations**: Booking logic, conflicts, pricing rules

Each domain has:
- **Model** (Data structure, validation)
- **View** (UI components)
- **Controller** (Business logic, API bindings)

## 2. Options

### Option A: Traditional MVC (Layers)

```
src/
├── models/      (all data models)
├── views/       (all UI components)
└── controllers/ (all business logic)
```

**Problems**:
- Hard to find related code (room model is far from room view)
- Easy to break boundaries (controllers calling other controllers)
- Difficult to maintain as features grow

### Option B: Feature-Based Slices (RECOMMENDED) ✅

```
src/
└── features/
    ├── rooms/
    │   ├── model/          (schema.ts, types.ts)
    │   ├── view/           (RoomCard.tsx, RoomList.tsx)
    │   ├── controller/     (actions.ts, hooks.ts)
    │   └── bindings/       (api.ts - external integration)
    ├── facilities/
    └── admin/
```

**Benefits**:
- **Colocation**: All room code is in one place
- **Encapsulation**: Features don't know about each other
- **Bindings Layer**: Clean API for cross-feature communication
- **Scalability**: Easy to add/remove features

## 3. Decision

We choose **Feature-Based MVC** with the following structure:

### Feature Directory Structure

```
src/features/[feature-name]/
├── model/              # Data layer
│   ├── schema.ts       # Zod validation schema
│   └── types.ts        # TypeScript types
├── view/               # Presentation layer
│   ├── [Feature]Card.tsx
│   └── [Feature]List.tsx
├── controller/         # Business logic
│   ├── actions.ts      # Server actions
│   └── hooks.ts        # React hooks
└── bindings/           # External integration (CRITICAL)
    └── api.ts          # Public API for other features
```

### Binding Rules (Zero Cross-Feature Calls)

❌ **WRONG**: Direct import between features
```typescript
// src/features/rooms/controller/actions.ts
import { checkAvailability } from '../facilities/controller/actions'; // FORBIDDEN
```

✅ **CORRECT**: Use bindings
```typescript
// src/features/rooms/bindings/api.ts
export const getRooms = async () => { /* ... */ }

// src/features/facilities/bindings/api.ts
export const checkAvailability = async (roomId: string) => { /* ... */ }

// Usage in other features
import { checkAvailability } from '@/features/facilities/bindings/api';
```

### Implementation Pattern

#### 1. Model (Data)

```typescript
// src/features/rooms/model/schema.ts
import { z } from 'zod';

export const RoomSchema = z.object({
  id: z.string(),
  name: z.string(),
  capacity: z.number(),
  price: z.number(),
});

export type Room = z.infer<typeof RoomSchema>;
```

#### 2. View (Presentation)

```typescript
// src/features/rooms/view/RoomCard.tsx
import { Room } from '../model/types';

export function RoomCard({ room }: { room: Room }) {
  return <div>{room.name}</div>;
}
```

#### 3. Controller (Logic)

```typescript
// src/features/rooms/controller/actions.ts
'use server';

import { revalidatePath } from 'next/cache';
import { getRooms as fetchRooms } from '../bindings/api';

export async function getRooms() {
  const rooms = await fetchRooms();
  return rooms;
}
```

#### 4. Bindings (Integration)

```typescript
// src/features/rooms/bindings/api.ts
import { RoomSchema } from '../model/schema';
import rooms from '@/data/rooms.json';

/**
 * PUBLIC API for Rooms feature
 * Other features MUST import from here, not from internal files
 */
export const getRooms = async () => {
  return RoomSchema.array().parse(rooms);
};

export const getRoomById = async (id: string) => {
  const rooms = await getRooms();
  return rooms.find(r => r.id === id);
};
```

## 4. Examples in Codebase

### Rooms Feature

```
src/features/rooms/
├── bindings/api.ts          ✅ Exists
├── model/schema.ts          ✅ Exists
└── components/RoomCard.tsx  ✅ Exists (view layer)
```

### Facilities Feature

```
src/features/facilities/
├── bindings/api.ts          ✅ Exists
└── model/schema.ts          ✅ Exists
```

### Admin Feature

```
src/features/admin/
├── actions.ts               ✅ Exists (controller)
├── components/AdminRegistry.tsx  ✅ Exists (view)
└── lib/auth.ts              ⚠️  Should be model/
```

## 5. Migration Checklist

When adding a new feature:

- [ ] Create directory: `src/features/[feature]/`
- [ ] Create `model/schema.ts` with Zod validation
- [ ] Create `bindings/api.ts` as public API
- [ ] Create `view/` components
- [ ] Create `controller/` actions/hooks
- [ ] Update `docs/architecture/project_structure.md`
- [ ] NO direct imports from other features (use bindings)

## 6. References

- **ADR-001**: Domain-Driven Structure (`src/domains/` vs `src/areas/`)
- **Project Structure**: `docs/architecture/project_structure.md`
- **Tech Stack**: `docs/architecture/tech_stack.md`

## 7. Status

**ACCEPTED** - 2026-01-17

**Current Implementation**:
- ✅ Rooms feature
- ✅ Facilities feature
- ✅ Admin feature
- ⚠️  Some refactoring needed (admin/lib/ → admin/model/)

**Next Steps**:
1. Refactor admin feature structure
2. Add reservations feature
3. Enforce bindings rule in code review
