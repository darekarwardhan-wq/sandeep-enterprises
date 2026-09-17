"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);

    const supabase = createClient();

    await supabase.auth.signOut();

    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="w-full border border-white/10 px-4 py-3 text-left text-sm text-gray-400 transition hover:border-red-500/30 hover:text-red-400 disabled:opacity-50"
    >
      {loading ? "Signing out..." : "Logout"}
    </button>
  );
}