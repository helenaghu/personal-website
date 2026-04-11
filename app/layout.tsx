import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Your Name",
    template: "%s — Your Name",
  },
  description: "Personal website — writing, reading, and photography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased">
        <ThemeProvider>
          {/* Full-height layout: sidebar fixed left, content scrolls right */}
          <div className="min-h-screen">
            <Sidebar />
            {/* Offset for fixed sidebar on desktop; offset for fixed header on mobile */}
            <div className="lg:ml-64 xl:ml-72 pt-14 lg:pt-0">
              <main className="max-w-2xl mx-auto px-6 py-12 lg:py-16 xl:py-20 lg:px-10">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
