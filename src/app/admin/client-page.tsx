"use client";

import { useState } from "react";
import { JSONUIProvider, Renderer } from "@json-render/react";
import { Room } from "@/features/rooms/model/schema";
import { adminRegistry } from "@/features/admin/components/AdminRegistry";
import roomFormConfig from "@/features/admin/config/room-form.json";
import { saveRoomData } from "@/features/admin/actions";

export function AdminClient({ rooms }: { rooms: Room[] }) {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(rooms[0]?.id);

  const selectedRoom = rooms.find((r) => r.id === selectedRoomId) || rooms[0];

  const actionHandlers = {
    save: async (data: any) => {
      // Validation could happen here
      await saveRoomData(data as Room);
    },
  };

  return (
    <div>
      {/* Room Selector */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Manage Content</h2>
        <select
          value={selectedRoomId}
          onChange={(e) => setSelectedRoomId(e.target.value)}
          className="p-2 border rounded-md bg-white shadow-sm"
        >
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              Room {room.number}: {room.type}
            </option>
          ))}
        </select>
      </div>

      {/* JSON Renderer */}
      <JSONUIProvider
        key={selectedRoomId}
        registry={adminRegistry as any}
        initialData={selectedRoom}
        actionHandlers={actionHandlers}
      >
        <Renderer
          tree={roomFormConfig as any}
          registry={adminRegistry as any}
        />
      </JSONUIProvider>
    </div>
  );
}
