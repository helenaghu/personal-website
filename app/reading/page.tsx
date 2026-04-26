"use client";

import { useState } from "react";
import Image from "next/image";

type Book = {
  title: string;
  author: string;
  rating: number;
  dateRead: string | null;
  isbn: string;
};

// ISBNs from Goodreads export (ISBN13 column).
// The six books whose Goodreads rows had no ISBN use well-known edition ISBNs.
const currentlyReading: Book[] = [
  { title: "When Breath Becomes Air", author: "Paul Kalanithi", rating: 0, dateRead: null, isbn: "9780812988406" },
];

const haveRead: Book[] = [
  { title: "Wintergirls",                author: "Laurie Halse Anderson", rating: 4, dateRead: "Apr 2026", isbn: "9780142415573" },
  { title: "Thinking in Bets",          author: "Annie Duke",          rating: 4, dateRead: null,       isbn: "9780735216372" },
  { title: "The Diary of a Young Girl", author: "Anne Frank",          rating: 5, dateRead: null,       isbn: "9780553577129" }, // Bantam revised ed.
  { title: "The Iliad",                 author: "Homer",               rating: 2, dateRead: null,       isbn: "9781324001805" },
  { title: "Butter",                    author: "Asako Yuzuki",        rating: 5, dateRead: "Feb 2026", isbn: "9780063236400" },
  { title: "Green Island",              author: "Shawna Yang Ryan",    rating: 5, dateRead: null,       isbn: "9781101874257" },
  { title: "Orphan of Asia",            author: "Wu Zhuoliu",          rating: 5, dateRead: null,       isbn: "9780231137270" },
  { title: "The Odyssey",               author: "Homer",               rating: 3, dateRead: null,       isbn: "9780143039952" },
  { title: "The Catcher in the Rye",    author: "J.D. Salinger",       rating: 5, dateRead: null,       isbn: "9780316769174" },
  { title: "Jane Eyre",                 author: "Charlotte Brontë",    rating: 5, dateRead: null,       isbn: "9780142437209" },
  { title: "To Kill a Mockingbird",     author: "Harper Lee",          rating: 5, dateRead: null,       isbn: "9780446310789" },
  { title: "The Great Gatsby",          author: "F. Scott Fitzgerald", rating: 5, dateRead: null,       isbn: "9780743273565" }, // Scribner
  { title: "China Rich Girlfriend",     author: "Kevin Kwan",          rating: 4, dateRead: null,       isbn: "9780385539081" },
  { title: "Crazy Rich Asians",         author: "Kevin Kwan",          rating: 4, dateRead: null,       isbn: "9780385536974" },
  { title: "The Joy Luck Club",         author: "Amy Tan",             rating: 4, dateRead: null,       isbn: "9780143038092" }, // Penguin
  { title: "1984",                      author: "George Orwell",       rating: 5, dateRead: null,       isbn: "9780452284234" },
  { title: "Fahrenheit 451",            author: "Ray Bradbury",        rating: 5, dateRead: null,       isbn: "9781451673319" }, // S&S 60th anniv.
  { title: "Crying in H Mart",          author: "Michelle Zauner",     rating: 5, dateRead: null,       isbn: "9780525657743" },
  { title: "I'm Glad My Mom Died",      author: "Jennette McCurdy",    rating: 5, dateRead: null,       isbn: "9781982185824" },
  { title: "People We Meet on Vacation",author: "Emily Henry",         rating: 3, dateRead: null,       isbn: "9781984806758" },
  { title: "Grit",                      author: "Angela Duckworth",    rating: 3, dateRead: null,       isbn: "9781443442312" },
  { title: "Free Food for Millionaires",author: "Min Jin Lee",         rating: 4, dateRead: null,       isbn: "9780446504386" },
];

type Filter = "reading" | "read";

function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex flex-col gap-2">
      {/* Cover */}
      <div className="relative aspect-[2/3] w-full bg-neutral-100 dark:bg-neutral-800 rounded-sm overflow-hidden">
        <Image
          src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`}
          alt={book.title}
          fill
          sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
          className="object-cover"
        />
      </div>
      {/* Meta */}
      <div>
        <p className="text-xs font-medium text-neutral-900 dark:text-neutral-100 leading-snug line-clamp-2">
          {book.title}
        </p>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5 line-clamp-1">
          {book.author}
        </p>
        {book.rating > 0 && (
          <p className="text-xs text-neutral-300 dark:text-neutral-600 tracking-tight mt-0.5">
            {"★".repeat(book.rating)}
          </p>
        )}
      </div>
    </div>
  );
}

export default function BookshelfPage() {
  const [filter, setFilter] = useState<Filter>("reading");
  const books = filter === "reading" ? currentlyReading : haveRead;

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl text-neutral-900 dark:text-neutral-50 mb-4">
          Bookshelf
        </h1>
        <div className="h-px bg-neutral-100 dark:bg-neutral-800" />
      </header>

      {/* Toggle */}
      <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-md w-fit">
        {(["reading", "read"] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 text-xs rounded transition-all duration-150 ${
              filter === f
                ? "bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm font-medium"
                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
            }`}
          >
            {f === "reading" ? "Currently Reading" : "Have Read"}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
        {books.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}
