import CursorImage from "@/components/CursorImage";

export default function HomePage() {
  return (
    <div className="max-w-sm">
      <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 mb-6">
        This website is a personal collection of what makes me quintessentially
        myself. I aim to document what I consume and what I create.
      </p>
      <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-2">
        Some descriptors
      </p>
      <CursorImage />
    </div>
  );
}
