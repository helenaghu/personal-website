export type Photo = {
  id: string;
  src: string | null;
  alt: string;
  placeholderColor: string;
  aspectRatio: "square" | "portrait" | "landscape";
};

export const photos: Photo[] = [
  {
    id: "1",
    src: null,
    alt: "Morning light through a window",
    placeholderColor: "bg-amber-100",
    aspectRatio: "square",
  },
  {
    id: "2",
    src: null,
    alt: "Empty street, early Sunday",
    placeholderColor: "bg-slate-300",
    aspectRatio: "square",
  },
  {
    id: "3",
    src: null,
    alt: "Staircase in an old building",
    placeholderColor: "bg-stone-400",
    aspectRatio: "square",
  },
  {
    id: "4",
    src: null,
    alt: "Shadows on a wall at noon",
    placeholderColor: "bg-neutral-300",
    aspectRatio: "square",
  },
  {
    id: "5",
    src: null,
    alt: "Books on a table",
    placeholderColor: "bg-rose-100",
    aspectRatio: "square",
  },
  {
    id: "6",
    src: null,
    alt: "Canal in the fog",
    placeholderColor: "bg-blue-200",
    aspectRatio: "square",
  },
  {
    id: "7",
    src: null,
    alt: "A corner café",
    placeholderColor: "bg-amber-200",
    aspectRatio: "square",
  },
  {
    id: "8",
    src: null,
    alt: "Rooftops at dusk",
    placeholderColor: "bg-violet-200",
    aspectRatio: "square",
  },
  {
    id: "9",
    src: null,
    alt: "Leaves on wet pavement",
    placeholderColor: "bg-green-200",
    aspectRatio: "square",
  },
  {
    id: "10",
    src: null,
    alt: "Doorway with peeling paint",
    placeholderColor: "bg-red-200",
    aspectRatio: "square",
  },
  {
    id: "11",
    src: null,
    alt: "A park bench in winter",
    placeholderColor: "bg-sky-200",
    aspectRatio: "square",
  },
  {
    id: "12",
    src: null,
    alt: "Market stall at closing time",
    placeholderColor: "bg-orange-200",
    aspectRatio: "square",
  },
];
