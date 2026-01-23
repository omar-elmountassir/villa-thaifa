"use server";

import fs from "fs/promises";
import path from "path";
import { Room } from "@/features/rooms/model/schema";
import { revalidatePath } from "next/cache";

const ROOMS_FILE = path.join(process.cwd(), "src/data/rooms.json");

export async function saveRoomData(updatedRoom: Room) {
  try {
    // 1. Read existing data
    const fileContent = await fs.readFile(ROOMS_FILE, "utf-8");
    const rooms: Room[] = JSON.parse(fileContent);

    // 2. Find and update the specific room
    const index = rooms.findIndex((r) => r.id === updatedRoom.id);
    if (index === -1) {
      throw new Error(`Room with ID ${updatedRoom.id} not found`);
    }

    // Merge changes (keeping existing data safe)
    rooms[index] = { ...rooms[index], ...updatedRoom };

    // 3. Write back to disk
    await fs.writeFile(ROOMS_FILE, JSON.stringify(rooms, null, 2), "utf-8");

    // 4. Revalidate cache so changes show up immediately
    revalidatePath("/");
    revalidatePath(`/rooms/${updatedRoom.id}`);
    revalidatePath("/admin");

    return { success: true };
  } catch (error) {
    console.error("Failed to save room data:", error);
    return { success: false, error: "Failed to save data" };
  }
}
