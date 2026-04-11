export type Book = {
  id: string;
  title: string;
  author: string;
  cover: string | null;
  coverColor: string;
  status: "reading" | "read";
  link?: string;
};

export const books: Book[] = [
  {
    id: "1",
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    cover: null,
    coverColor: "bg-stone-700",
    status: "reading",
  },
  {
    id: "2",
    title: "Middlemarch",
    author: "George Eliot",
    cover: null,
    coverColor: "bg-rose-800",
    status: "reading",
  },
  {
    id: "3",
    title: "The Rings of Saturn",
    author: "W. G. Sebald",
    cover: null,
    coverColor: "bg-slate-600",
    status: "reading",
  },
  {
    id: "4",
    title: "Gilead",
    author: "Marilynne Robinson",
    cover: null,
    coverColor: "bg-amber-700",
    status: "read",
  },
  {
    id: "5",
    title: "The Waves",
    author: "Virginia Woolf",
    cover: null,
    coverColor: "bg-cyan-700",
    status: "read",
  },
  {
    id: "6",
    title: "Austerlitz",
    author: "W. G. Sebald",
    cover: null,
    coverColor: "bg-neutral-700",
    status: "read",
  },
  {
    id: "7",
    title: "The Remains of the Day",
    author: "Kazuo Ishiguro",
    cover: null,
    coverColor: "bg-green-800",
    status: "read",
  },
  {
    id: "8",
    title: "Stoner",
    author: "John Williams",
    cover: null,
    coverColor: "bg-orange-800",
    status: "read",
  },
  {
    id: "9",
    title: "The Dispossessed",
    author: "Ursula K. Le Guin",
    cover: null,
    coverColor: "bg-indigo-700",
    status: "read",
  },
];
