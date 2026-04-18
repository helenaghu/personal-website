import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOOKSHELF",
};

export default function ReadingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
