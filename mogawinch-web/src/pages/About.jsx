import React from 'react';
import { Head } from 'vite-react-ssg';
import { siteUrl, SITE_NAME } from '@/lib/seo';

export default function About() {
  return (
    <>
      <Head>
        <title>About - {SITE_NAME}</title>
        <meta name="description" content="About Mogawinch HQ - honest, down-to-earth video game reviews focused on the value a game provides for its price." />
        <meta property="og:title" content={`About - ${SITE_NAME}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl('/about')} />
        <meta property="og:site_name" content={SITE_NAME} />
      </Head>

      <main className="mx-auto max-w-3xl px-5 sm:px-8">
        <header className="pb-10 pt-12 sm:pt-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">About</p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">About Mogawinch HQ</h1>
        </header>

        <div className="article-prose">
          <p>
            Welcome to <strong>Mogawinch HQ</strong>, a site dedicated to thoughtful, honest, and down-to-earth
            video game reviews. Our goal is to help players discover games that truly deserve their time and
            money.
          </p>
          <p>
            Unlike traditional reviews that focus purely on technical or graphical fidelity, we place our
            emphasis on <strong>the value a game provides for its market price</strong>. Whether it's a small
            indie gem or a massive AAA release, we evaluate how well the experience, gameplay depth, and content
            justify its cost. Each score reflects the overall quality of a game relative to its price, with a 10
            representing an outstanding experience that offers exceptional value.
          </p>

          <h2>Editorial Process</h2>
          <p>
            Every review published on <strong>Mogawinch HQ</strong> follows a consistent editorial process. We
            use a high-level template to ensure each article is structured and easy to follow. Each review
            includes:
          </p>
          <ul>
            <li><strong>Introduction</strong>: What makes the game stand out or worth discussing.</li>
            <li><strong>The Good</strong>: Highlights the strengths that elevate the experience.</li>
            <li><strong>The Bad</strong>: Discusses the flaws that hold the game back.</li>
            <li><strong>Summary</strong>: Overall impression and value assessment based on the game's market price.</li>
          </ul>
          <p>
            To maintain a clear writing quality across all articles, we use language modeling tools to assist
            with <strong>grammar refinement</strong> and <strong>style consistency</strong>. However, every
            review is <strong>written, edited, and approved by a human</strong>, ensuring that final judgments
            always come from real gameplay experiences.
          </p>
          <p>
            Corrections or updates may be made post-publication if new information becomes available or if an
            error is identified.
          </p>
        </div>

        <h2 className="font-heading mt-14 mb-5 text-xl font-semibold tracking-tight">Our Writers</h2>
        <div className="rounded-xl border border-border/60 bg-card p-6 sm:p-7">
          <img
            src="/assets/writers/markwinch.jpg"
            alt="Mark Winch"
            className="h-20 w-20 rounded-full object-cover"
          />
          <h3 className="font-heading mt-4 text-lg font-semibold">Mark Winch</h3>
          <p className="text-sm text-muted-foreground">Founder &amp; Main Writer</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/85">
            Mark has worked in the video game industry for several years, primarily at Ubisoft, where he
            developed a strong understanding of how games are designed and produced. A lifelong gamer across
            both PC and consoles, his reviews focus on honesty, clarity, and how much <em>value</em> a game
            truly delivers for its market price.
            <br />
            <br />
            To maintain transparency and avoid conflicts of interest, Mark does not review Ubisoft titles.
          </p>
        </div>
      </main>
    </>
  );
}
