"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/reading", label: "What I'm Reading" },
  { href: "/writing", label: "Writing" },
  { href: "/photography", label: "Photography" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: "X / Twitter",
    href: "https://x.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block py-1.5 text-sm transition-colors duration-150 ${
        active
          ? "text-neutral-900 dark:text-neutral-50 font-medium"
          : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className="flex flex-col h-full">
      {/* Identity */}
      <div className={isMobile ? "mb-8" : "mb-7"}>
        <Link
          href="/about"
          className="block group"
          onClick={() => setMobileOpen(false)}
        >
          <h1 className="font-serif text-xl text-neutral-900 dark:text-neutral-50 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-150">
            Your Name
          </h1>
        </Link>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 tracking-wide uppercase">
          Writer &amp; Reader
        </p>
      </div>

      {/* Bio */}
      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-7">
        I write about books, cities, and the texture of everyday life. Based
        in [City]. Slow reader, occasional photographer.
      </p>

      {/* Social */}
      <div className="flex items-center gap-3 mb-7">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-150"
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-neutral-100 dark:bg-neutral-800 mb-5" />

      {/* Navigation */}
      <nav className="space-y-0.5">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            active={pathname === link.href || pathname.startsWith(link.href + "/")}
            onClick={() => setMobileOpen(false)}
          />
        ))}
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Theme toggle */}
      <div className="mt-8">
        <ThemeToggle />
      </div>
    </div>
  );

  return (
    <>
      {/* ── DESKTOP SIDEBAR ── */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 xl:w-72 flex-col px-8 xl:px-10 py-10 border-r border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 z-30">
        <SidebarContent />
      </aside>

      {/* ── MOBILE HEADER ── */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 h-14 flex items-center justify-between px-5 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-100 dark:border-neutral-800">
        <Link
          href="/about"
          className="font-serif text-base text-neutral-900 dark:text-neutral-50"
        >
          Your Name
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
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
      </header>

      {/* ── MOBILE DRAWER ── */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="lg:hidden fixed inset-0 z-30 bg-black/20 dark:bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <div className="lg:hidden fixed top-14 left-0 bottom-0 w-72 z-40 bg-neutral-50 dark:bg-neutral-900 border-r border-neutral-100 dark:border-neutral-800 px-7 py-8 overflow-y-auto animate-fade-in">
            <SidebarContent isMobile />
          </div>
        </>
      )}
    </>
  );
}
