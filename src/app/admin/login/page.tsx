"use client";

import { useState } from "react";
import { verifySecret } from "@/features/admin/lib/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const success = await verifySecret(code);
      if (success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError("Invalid code");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 to-black">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-light text-white tracking-widest uppercase mb-2">
            Villa Thaifa
          </h1>
          <p className="text-slate-400 text-sm tracking-wide uppercase">
            Internal Governance Panel
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="code"
                className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2"
              >
                Enter Access Code
              </label>
              <input
                id="code"
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white placeholder:text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-center tracking-[0.5em] text-xl"
                autoFocus
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center font-medium animate-shake">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-slate-950 font-bold py-4 rounded-xl hover:bg-slate-200 transition-colors disabled:opacity-50 uppercase tracking-widest text-sm"
            >
              {loading ? "Authenticating..." : "Unlock Dashboard"}
            </button>
          </form>
        </div>

        <p className="mt-8 text-center text-slate-500 text-xs tracking-wide">
          Protected by Villa Thaifa Security &copy; 2026
        </p>
      </div>
    </div>
  );
}
