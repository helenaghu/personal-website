"use client";

import { useState, useEffect, useRef } from "react";

type Descriptor = {
  label: string;
  image: string;
};

const descriptors: Descriptor[] = [
  { label: "Chinese-American", image: "/chinese american.JPG" },
  { label: "Youngest daughter", image: "/youngest daughter.jpg" },
  { label: "UCLA grad", image: "/UCLA grad.JPG" },
  { label: "Southern California born", image: "/socal born.jpg" },
  { label: "San Francisco living", image: "/sf living.JPG" },
];

export default function CursorImage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
        {descriptors.map((d, i) => (
          <span key={d.label}>
            <span
              className="cursor-default underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-150"
              onMouseEnter={() => setActiveImage(d.image)}
              onMouseLeave={() => setActiveImage(null)}
            >
              {d.label}
            </span>
            {i < descriptors.length - 1 && ". "}
          </span>
        ))}
        {"."}
      </p>

      {activeImage && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: pos.x + 16,
            top: pos.y + 16,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activeImage}
            alt=""
            className="w-56 h-auto object-contain border-[6px] border-black dark:border-white"
          />
        </div>
      )}
    </>
  );
}
