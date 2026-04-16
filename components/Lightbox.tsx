"use client";

import { useEffect } from "react";
import { Photo } from "@/data/photos";

type LightboxProps = {
  photo: Photo;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({
  photo,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      {/* Controls */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors p-2"
        aria-label="Close"
      >
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
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 z-10 text-white/70 hover:text-white transition-colors p-2"
        aria-label="Previous"
      >
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
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 z-10 text-white/70 hover:text-white transition-colors p-2 mr-10"
        aria-label="Next"
      >
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
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative z-10 flex flex-col items-center mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        {photo.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo.src}
            alt={photo.alt}
            style={{ maxHeight: "80vh", maxWidth: "90vw", width: "auto", height: "auto" }}
          />
        ) : (
          <div
            className={`${photo.placeholderColor} w-96 aspect-square rounded-sm flex items-center justify-center`}
          >
            <span className="text-neutral-600/60 text-sm">{photo.alt}</span>
          </div>
        )}
      </div>
    </div>
  );
}
