"use server";

import { cookies } from "next/headers";

const ADMIN_SECRET_COOKIE = "admin_secret_v1";
const SECRET_CODE = process.env.ADMIN_SECRET || "villa2026"; // Fallback for dev

export async function verifySecret(code: string): Promise<boolean> {
  if (code === SECRET_CODE) {
    const cookieStore = await cookies();
    cookieStore.set(ADMIN_SECRET_COOKIE, "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    return true;
  }
  return false;
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_SECRET_COOKIE)?.value === "true";
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SECRET_COOKIE);
}
