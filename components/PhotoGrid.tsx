"use client";

import { useState } from "react";
import { Photo } from "@/data/photos";
import Lightbox from "./Lightbox";

function shufflePhotos<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [shuffled] = useState(() => shufflePhotos(photos));
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedPhoto = selectedIndex !== null ? shuffled[selectedIndex] : null;

  const prev = () =>
    setSelectedIndex((i) =>
      i !== null ? (i - 1 + shuffled.length) % shuffled.length : null
    );
  const next = () =>
    setSelectedIndex((i) =>
      i !== null ? (i + 1) % shuffled.length : null
    );

  return (
    <>
      <div className="grid grid-cols-3 gap-x-8 gap-y-8">
        {shuffled.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => setSelectedIndex(index)}
            className="group w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100"
            aria-label={`View photo: ${photo.alt}`}
          >
            {photo.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto block group-hover:opacity-90 transition-opacity duration-200"
              />
            ) : (
              <div className={`w-full aspect-square ${photo.placeholderColor}`} />
            )}
          </button>
        ))}
      </div>

      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          onClose={() => setSelectedIndex(null)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
