"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../../lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        router.replace("/admin/dashboard");
      }
    }

    checkSession();
  }, [router, supabase]);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const cleanEmail = email.trim();

    if (!cleanEmail || !password) {
      setError("Please enter your email and password.");
      setLoading(false);
      return;
    }

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: cleanEmail,
      password,
    });

    if (loginError) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
      return;
    }

    router.replace("/admin/dashboard");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen bg-gray-50 text-[#111111]">
      {/* LEFT SIDE */}
      <section className="hidden w-1/2 bg-[#111111] lg:flex lg:flex-col lg:justify-between">
        <div className="p-10">
          <a href="/" className="inline-block">
            <div className="text-xl font-black tracking-[0.12em] text-white">
              SANDEEP{" "}
              <span className="text-orange-500">ENTERPRISES</span>
            </div>

            <div className="mt-1 text-[9px] font-medium tracking-[0.35em] text-gray-500">
              FABRICATION • ERECTION
            </div>
          </a>
        </div>

        <div className="px-10 pb-16">
          <p className="text-sm font-bold tracking-[0.25em] text-orange-500">
            ADMINISTRATION
          </p>

          <h1 className="mt-5 max-w-xl text-5xl font-black leading-tight text-white">
            Manage your
            <br />
            business website.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-gray-400">
            Access your projects, enquiries and website management tools from
            one secure dashboard.
          </p>
        </div>

        <div className="border-t border-white/10 px-10 py-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} SANDEEP ENTERPRISES
          </p>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="flex min-h-screen w-full items-center justify-center px-5 py-12 lg:w-1/2">
        <div className="w-full max-w-md">
          {/* MOBILE LOGO */}
          <div className="mb-10 text-center lg:hidden">
            <a href="/" className="inline-block">
              <div className="text-xl font-black tracking-[0.12em]">
                SANDEEP{" "}
                <span className="text-orange-500">ENTERPRISES</span>
              </div>

              <div className="mt-1 text-[8px] font-medium tracking-[0.35em] text-gray-500">
                FABRICATION • ERECTION
              </div>
            </a>
          </div>

          {/* LOGIN CARD */}
          <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm sm:p-9">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-orange-500">
                ADMIN LOGIN
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Welcome back.
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Sign in to access the Sandeep Enterprises admin dashboard.
              </p>
            </div>

            {/* ERROR */}
            {error && (
              <div
                role="alert"
                className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="mt-7 space-y-5">
              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-gray-800"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@example.com"
                  className="w-full rounded-xl border border-black/10 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-bold text-gray-800"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-black/10 bg-gray-50 px-4 py-3.5 pr-20 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-bold text-gray-500 transition hover:text-orange-500"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-orange-500 px-6 py-4 text-sm font-black text-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign In →"}
              </button>
            </form>

            {/* BACK TO WEBSITE */}
            <div className="mt-7 border-t border-black/10 pt-6 text-center">
              <a
                href="/"
                className="text-sm font-medium text-gray-500 transition hover:text-orange-500"
              >
                ← Back to website
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            Authorized administrators only.
          </p>
        </div>
      </section>
    </main>
  );
}