import { Book } from "@/data/books";
import Image from "next/image";

export default function BookCard({ book }: { book: Book }) {
  const content = (
    <div className="group cursor-default">
      {/* Cover */}
      <div className="aspect-[2/3] w-full overflow-hidden rounded-sm mb-3 shadow-sm group-hover:shadow-md transition-shadow duration-200">
        {book.cover ? (
          <Image
            src={book.cover}
            alt={`Cover of ${book.title}`}
            width={200}
            height={300}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className={`w-full h-full ${book.coverColor} flex flex-col justify-end p-3`}
          >
            <span className="text-white/90 text-xs font-medium leading-snug line-clamp-3">
              {book.title}
            </span>
          </div>
        )}
      </div>

      {/* Meta */}
      <div>
        <p className="text-sm text-neutral-900 dark:text-neutral-100 font-medium leading-snug line-clamp-2">
          {book.title}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
          {book.author}
        </p>
      </div>
    </div>
  );

  if (book.link) {
    return (
      <a
        href={book.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
