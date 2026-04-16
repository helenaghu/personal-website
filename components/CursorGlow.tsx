"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>();

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      el.style.opacity = "1";
    };
    const handleLeave = () => { el.style.opacity = "0"; };

    // Lerp loop for smooth trailing motion
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.7);
      current.current.y = lerp(current.current.y, target.current.y, 0.7);
      el.style.left = `${current.current.x}px`;
      el.style.top = `${current.current.y}px`;
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500"
      style={{
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,149,255,0.35) 0%, rgba(0,149,255,0.12) 50%, transparent 70%)",
        filter: "blur(5px)",
      }}
    />
  );
}
