import type { Metadata } from "next";
import { articles } from "@/data/articles";
import ArticleListItem from "@/components/ArticleListItem";

export const metadata: Metadata = {
  title: "NOTEPAD",
};

export default function WritingPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl text-neutral-900 dark:text-neutral-50 mb-4">
          Notepad
        </h1>
        <div className="h-px bg-neutral-100 dark:bg-neutral-800" />
      </header>

      <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
        {sorted.map((article) => (
          <ArticleListItem key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
