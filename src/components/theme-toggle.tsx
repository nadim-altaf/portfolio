"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  // Safe client-side check that avoids hydration mismatches
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className="w-10 h-10 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)]"
        aria-hidden="true"
      />
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 rounded-xl bg-[var(--surface2)] border border-[var(--border-color)] text-[var(--text)] flex items-center justify-center cursor-pointer transition-all hover:bg-[var(--surface3)] hover:rotate-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="w-[18px] h-[18px] text-[var(--gold)]" aria-hidden="true" />
      ) : (
        <Moon className="w-[18px] h-[18px] text-[var(--cyan)]" aria-hidden="true" />
      )}
    </button>
  );
}
