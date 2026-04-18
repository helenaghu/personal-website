import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "HELENA",
    template: "%s — HELENA",
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
          <div className="min-h-screen">
            <Navbar />
            {/* pt-14 offsets the fixed navbar height */}
            <div className="pt-14">
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
