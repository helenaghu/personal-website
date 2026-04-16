"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/reading", label: "Bookshelf" },
  { href: "/writing", label: "Notepad" },
  { href: "/photography", label: "Album" },
  { href: "/work", label: "Briefcase" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-14 bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-800">
        <div className="h-full px-6 lg:px-10 flex items-center justify-between">

          {/* Left group: site name + nav tabs */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="font-bold text-base text-neutral-900 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors duration-150"
            >
              Helena
            </Link>

            <nav className="hidden sm:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-150 ${
                    pathname === link.href ||
                    pathname.startsWith(link.href + "/")
                      ? "text-neutral-900 dark:text-neutral-50 font-medium"
                      : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right group: theme toggle + hamburger (mobile only) */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="sm:hidden text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              {mobileOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="sm:hidden fixed top-14 left-0 right-0 z-30 bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-800 px-6 py-3 animate-fade-in">
          <nav className="space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 text-sm transition-colors duration-150 ${
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/")
                    ? "text-neutral-900 dark:text-neutral-50 font-medium"
                    : "text-neutral-500 dark:text-neutral-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
