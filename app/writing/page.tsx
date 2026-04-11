import type { Metadata } from "next";
import { articles } from "@/data/articles";
import ArticleListItem from "@/components/ArticleListItem";

export const metadata: Metadata = {
  title: "Writing",
};

export default function WritingPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-serif text-3xl text-neutral-900 dark:text-neutral-50 mb-4">
          Writing
        </h1>
        <div className="h-px bg-neutral-100 dark:bg-neutral-800" />
      </header>

      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
        Essays and notes on things I find interesting.
      </p>

      <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
        {sorted.map((article) => (
          <ArticleListItem key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
