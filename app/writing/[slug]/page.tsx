import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/data/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
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

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
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
        {article.slug === "23-lessons-at-23" && (
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/bday.jpg"
              alt="Birthday"
              className="w-full h-auto"
            />
            <figcaption className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">
              my 2nd birthday, i think i only care about eating
            </figcaption>
          </figure>
        )}
        <h1 className="text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-50 leading-tight">
          {article.title}
        </h1>
        <p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
          {article.description}
        </p>
        <div className="h-px bg-neutral-100 dark:bg-neutral-800 pt-2" />
      </header>

      {/* Body */}
      <div className="space-y-5">
        {paragraphs.map((para, i) => {
          // Detect numbered list items like "1. First sentence. Rest of text."
          const numberedMatch = para.match(/^(\d+\.\s)(.+)$/s);
          if (numberedMatch) {
            const prefix = numberedMatch[1]; // "1. "
            const body = numberedMatch[2];   // rest of text
            // Find end of first sentence (period followed by space + more text, or end)
            const firstSentenceMatch = body.match(/^(.+?[.!?])\s+(.+)$/s);
            if (firstSentenceMatch) {
              return (
                <p key={i} className="text-base text-neutral-700 dark:text-neutral-300 leading-loose">
                  <strong>{prefix}{firstSentenceMatch[1]}</strong>
                  <br />
                  {firstSentenceMatch[2]}
                </p>
              );
            }
            // Only one sentence
            return (
              <p key={i} className="text-base text-neutral-700 dark:text-neutral-300 leading-loose">
                <strong>{para}</strong>
              </p>
            );
          }
          return (
            <p key={i} className="text-base text-neutral-700 dark:text-neutral-300 leading-loose">
              {para}
            </p>
          );
        })}
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
