import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/data/articles";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const paragraphs = article.content
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <div className="space-y-8">
      {/* Back */}
      <Link
        href="/writing"
        className="inline-flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-150"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        All writing
      </Link>

      {/* Header */}
      <header className="space-y-3">
        <time
          dateTime={article.date}
          className="block text-xs text-neutral-400 dark:text-neutral-500 tabular-nums"
        >
          {formatDate(article.date)}
        </time>
        <h1 className="font-serif text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-50 leading-tight">
          {article.title}
        </h1>
        <p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
          {article.description}
        </p>
        <div className="h-px bg-neutral-100 dark:bg-neutral-800 pt-2" />
      </header>

      {/* Body */}
      <div className="space-y-5">
        {paragraphs.map((para, i) => (
          <p
            key={i}
            className="text-base text-neutral-700 dark:text-neutral-300 leading-loose"
          >
            {para}
          </p>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-neutral-100 dark:border-neutral-800">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to all writing
        </Link>
      </div>
    </div>
  );
}
