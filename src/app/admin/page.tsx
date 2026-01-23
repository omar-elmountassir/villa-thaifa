import { getAllRooms } from "@/features/rooms/bindings/api";
import { AdminClient } from "./client-page";

export default async function AdminPage() {
  // Auth is handled by layout.tsx
  const rooms = await getAllRooms();
  return <AdminClient rooms={rooms} />;
}
