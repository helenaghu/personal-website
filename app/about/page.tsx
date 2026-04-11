import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-serif text-3xl text-neutral-900 dark:text-neutral-50 mb-4">
          About
        </h1>
        <div className="h-px bg-neutral-100 dark:bg-neutral-800" />
      </header>

      <div className="space-y-5">
        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Hi, I&rsquo;m Your Name. I&rsquo;m a writer, reader, and occasional
          photographer based in [City]. This is my small corner of the internet
          where I share what I&rsquo;m thinking about, reading, and seeing.
        </p>
        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          By day I work in [field]. By night I read too many books and take
          walks with my camera. I believe in the slow accumulation of ideas and
          the value of paying close attention to ordinary things.
        </p>
        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          You can reach me at{" "}
          <a
            href="mailto:hello@yourname.com"
            className="text-neutral-900 dark:text-neutral-100 underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-neutral-900 dark:hover:decoration-neutral-100 transition-colors duration-150"
          >
            hello@yourname.com
          </a>
          .
        </p>
      </div>

      <div className="pt-2">
        <h2 className="font-serif text-xl text-neutral-900 dark:text-neutral-50 mb-5">
          A few things I care about
        </h2>
        <ul className="space-y-2.5">
          {[
            "Long-form reading and writing",
            "Film photography and quiet observation",
            "Urban architecture and street life",
            "Coffee, taken seriously",
            "Notebooks and slow correspondence",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400"
            >
              <span className="mt-2 block w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
        <h2 className="font-serif text-xl text-neutral-900 dark:text-neutral-50 mb-5 mt-8">
          Colophon
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
          This site is built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            Tailwind CSS
          </a>
          . Typography uses system fonts. No trackers, no analytics, no cookies.
        </p>
      </div>
    </div>
  );
}
