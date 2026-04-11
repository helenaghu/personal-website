"use client";

import { useState } from "react";
import BookCard from "@/components/BookCard";
import { books } from "@/data/books";

type Filter = "reading" | "read";

export default function ReadingPage() {
  const [filter, setFilter] = useState<Filter>("reading");

  const filtered = books.filter((b) => b.status === filter);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-serif text-3xl text-neutral-900 dark:text-neutral-50 mb-4">
          What I&rsquo;m Reading
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
      {filtered.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 sm:gap-6">
          {filtered.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-neutral-400 dark:text-neutral-500 py-8">
          Nothing here yet.
        </p>
      )}
    </div>
  );
}
