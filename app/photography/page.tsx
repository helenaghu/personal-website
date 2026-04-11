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
        <h1 className="font-serif text-3xl text-neutral-900 dark:text-neutral-50 mb-4">
          Photography
        </h1>
        <div className="h-px bg-neutral-100 dark:bg-neutral-800" />
      </header>

      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
        Mostly street and architecture. Shot on film and digital.
      </p>

      <PhotoGrid photos={photos} />
    </div>
  );
}
