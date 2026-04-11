"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-150 group"
    >
      <span className="w-8 h-4 rounded-full bg-neutral-200 dark:bg-neutral-700 relative flex items-center transition-colors duration-200">
        <span
          className={`absolute w-3 h-3 rounded-full bg-white dark:bg-neutral-300 shadow-sm transition-transform duration-200 ${
            theme === "dark" ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </span>
      <span>{theme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}
