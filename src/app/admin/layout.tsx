import Link from "next/link";
import {
  isAuthenticated,
  verifySecret,
  logout,
} from "@/features/admin/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await isAuthenticated();

  if (!auth) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
        <form
          className="bg-white p-8 rounded-xl border border-neutral-200 shadow-xl max-w-sm w-full space-y-6"
          action={async (formData: FormData) => {
            "use server";
            const code = formData.get("code") as string;
            if (await verifySecret(code)) {
              redirect("/admin");
            }
          }}
        >
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-neutral-900">
              Villa Thaifa Admin
            </h1>
            <p className="text-sm text-neutral-500">
              Please enter the secret access code.
            </p>
          </div>
          <input
            type="password"
            name="code"
            placeholder="Secret Code"
            autoFocus
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-center text-lg tracking-widest"
          />
          <button
            type="submit"
            className="w-full bg-neutral-900 text-white py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            Access Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-neutral-200 bg-white p-6 flex flex-col gap-8 sticky top-0 h-screen">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-neutral-900">
            Villa Thaifa
          </h1>
          <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mt-1">
            Admin Panel
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-neutral-900 text-white text-sm font-medium transition-colors shadow-sm"
          >
            Dashboard
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-500 hover:bg-neutral-50 text-sm font-medium transition-colors"
            >
              Logout
            </button>
          </form>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 max-w-5xl">
        <header className="mb-12 border-b border-neutral-100 pb-8 flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900">Dashboard</h2>
            <p className="text-neutral-500 mt-2">
              Manage your property content and reservations.
            </p>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
