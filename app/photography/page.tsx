import type { Metadata } from "next";
import { photos } from "@/data/photos";
import PhotoGrid from "@/components/PhotoGrid";

export const metadata: Metadata = {
  title: "Photography",
};

export default function PhotographyPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl text-neutral-900 dark:text-neutral-50 mb-4">
          Album
        </h1>
        <div className="h-px bg-neutral-100 dark:bg-neutral-800" />
      </header>

      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
        Some of my photography, all shot on 35mm.
      </p>

      <div className="w-screen relative left-1/2 -translate-x-1/2" style={{ padding: "0 10vw" }}>
        <PhotoGrid photos={photos} />
      </div>
    </div>
  );
}
