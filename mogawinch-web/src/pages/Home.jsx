import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Head } from 'vite-react-ssg';
import ArticleCard from '@/components/ArticleCard';
import { getArticlesByType } from '@/lib/content';
import { siteUrl, SITE_URL, SITE_NAME } from '@/lib/seo';

export default function Home() {
  const games = getArticlesByType('game');
  const blogs = getArticlesByType('blog');

  const featured = games[0] || null;
  const featuredGames = games.slice(1, 7);
  const featuredBlogs = blogs.slice(0, 6);

  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Honest, down-to-earth video game reviews and writing by Mark Winch." />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/assets/mogawinch_logo.svg`} />
        <meta property="og:url" content={siteUrl('/')} />
        <meta property="og:site_name" content={SITE_NAME} />
      </Head>

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <section className="pb-10 pt-12 sm:pt-20">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Game reviews &amp; writing
          </p>
          <h1 className="font-heading max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Thoughts on the games I play, and the ideas worth talking about.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm Mark Winch. I write considered, spoiler-free reviews of the games I spend real time
            with, judged on the value they deliver for their price. I also post now and then about
            gaming and the industry around it.
          </p>
        </section>

        {featured && (
          <section className="pb-16">
            <ArticleCard article={featured} featured />
          </section>
        )}

        <section className="pb-16">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">Featured Games</h2>
            <Link
              to="/reviews/games"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-foreground/60"
            >
              All reviews <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGames.map((a) => (
              <ArticleCard key={a.path} article={a} />
            ))}
          </div>
        </section>

        <section className="pb-16">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">Featured Blogs</h2>
            <Link
              to="/blogs"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-foreground/60"
            >
              All posts <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBlogs.map((a) => (
              <ArticleCard key={a.path} article={a} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
