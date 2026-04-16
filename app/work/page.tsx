import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Briefcase",
};

export default function WorkPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl text-neutral-900 dark:text-neutral-50 mb-4">
          Briefcase
        </h1>
        <div className="h-px bg-neutral-100 dark:bg-neutral-800" />
      </header>

      <div>
        <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          I&apos;m currently a product manager in fintech, focused on building
          and scaling the next generation of digital payment experiences. my joy
          in building products comes from my interest in storytelling and using
          products to bring community together and experiences to life. the
          below outlines some select highlights of my career thus far.
        </p>
      </div>

      <div className="space-y-6">
        <div className="py-4 border-b border-neutral-100 dark:border-neutral-800">
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-2">1. Visa Tap · February 2026</p>
          <div className="flex gap-6 items-center">
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 flex-1">
              One of my interests as a product manager is product storytelling and
              how branding, design, and marketing all come to play in consumer
              product. Visa&apos;s longstanding Super Bowl partnership gives
              millions of consumers a direct touchpoint with Visa as a brand, but
              much less the products Visa offers. I led a product initiative at
              Visa for Super Bowl LX, where fans at the Super Bowl Experience at
              Moscone Center got hands-on with Visa&apos;s latest Tap to Add Card
              technology.
            </p>
            <div className="w-1/3 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/ttac.jpeg"
                alt="Visa Tap to Add Card"
                className="w-full h-auto"
              />
              <a
                href="https://www.linkedin.com/posts/huhelena_visatap-superbowllx-taptoeverything-ugcPost-7426412245061951489-fJqi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6BikEB5_PuanRh9muzziMAvytgZfbEDu0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-150 mt-2 block"
              >
                View LinkedIn post ↗
              </a>
            </div>
          </div>
        </div>

        <div className="py-4 border-b border-neutral-100 dark:border-neutral-800">
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-2">2. Visa Tokenized Asset Platform · October 2024</p>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 mb-3">
            I was part of the founding team to launch Visa&apos;s first
            capabilities of minting, burning, and performing money movement
            using stablecoins. I authored and published the core documentation
            for its initial pilot with BBVA. The product launch also received a
            nod on an episode of The Tonight Show Starring Jimmy Fallon.
          </p>
          <a
            href="https://www.youtube.com/watch?v=9Rg575UXEO0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-150"
          >
            Watch the product announcement on YouTube ↗
          </a>
        </div>

        <div className="py-4 border-b border-neutral-100 dark:border-neutral-800">
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-2">3. LA28 · Summer 2023</p>
          <div className="flex gap-6 items-start">
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 flex-1">
              I was in the second intern class of the 2028 Los Angeles Olympic and
              Paralympic Games, focusing on drafting the 5 year narrative and
              strategy around Angeleno perception. Additional projects included
              LA28 Emblems, Look of the Games and the LA28 App.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/la28.jpeg"
              alt="LA28"
              className="w-1/3 h-auto flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
