"use client";

import { useState } from "react";
import { Photo } from "@/data/photos";
import Lightbox from "./Lightbox";
import Image from "next/image";

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  const prev = () =>
    setSelectedIndex((i) =>
      i !== null ? (i - 1 + photos.length) % photos.length : null
    );
  const next = () =>
    setSelectedIndex((i) =>
      i !== null ? (i + 1) % photos.length : null
    );

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-1.5">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100"
            aria-label={`View photo: ${photo.alt}`}
          >
            {photo.src ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            ) : (
              <div
                className={`w-full h-full ${photo.placeholderColor} group-hover:brightness-95 transition-all duration-200`}
              />
            )}
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
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
