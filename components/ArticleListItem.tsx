import Link from "next/link";
import { Article } from "@/data/articles";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticleListItem({ article }: { article: Article }) {
  return (
    <article className="py-6 border-b border-neutral-100 dark:border-neutral-800 last:border-0 group">
      <Link href={`/writing/${article.slug}`} className="block">
        <div className="flex flex-col xs:flex-row xs:items-baseline xs:justify-between gap-1 xs:gap-4 mb-2">
          <h2 className="text-base font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-150">
            {article.title}
          </h2>
          <time
            dateTime={article.date}
            className="text-xs text-neutral-400 dark:text-neutral-500 shrink-0 tabular-nums"
          >
            {formatDate(article.date)}
          </time>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
          {article.description}
        </p>
      </Link>
    </article>
  );
}
