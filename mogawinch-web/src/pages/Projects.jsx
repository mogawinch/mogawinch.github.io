import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Gamepad2, Sparkles } from 'lucide-react';
import { Head } from 'vite-react-ssg';
import { siteUrl, SITE_URL, SITE_NAME } from '@/lib/seo';

const projects = [
  {
    title: 'Pokémon: Petalburg Dynasty',
    tag: 'RomHack · In Development',
    status: 'In Development',
    description:
      "A direct follow-up to Pokémon Emerald. With Norman gone, you step into the Petalburg Gym in your father's stead - and discover that running a gym is nothing like challenging one.",
    highlights: [
      "A continuation of Emerald's story, not a new region",
      "Take the reins of the Petalburg Gym in your father's place",
      "New story, encounters, and balancing built on Hoenn's foundations",
    ],
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - {SITE_NAME}</title>
        <meta name="description" content="What Mark Winch is building when he's not writing game reviews." />
        <meta property="og:title" content={`Projects - ${SITE_NAME}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/assets/mogawinch_logo.svg`} />
        <meta property="og:url" content={siteUrl('/projects')} />
        <meta property="og:site_name" content={SITE_NAME} />
      </Head>

      <main className="mx-auto max-w-3xl px-5 sm:px-8">
        <header className="pb-10 pt-12 sm:pt-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Projects</p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Things I'm building.</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            When I'm not writing about games, I'm making one. Here's what I'm working on.
          </p>
        </header>

        <div className="grid gap-6 pb-8">
          {projects.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-xl border border-border/60 bg-card p-6 sm:p-9">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  <Wrench size={12} /> {p.tag}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1 text-[11px] font-semibold text-background">
                  <Sparkles size={12} /> {p.status}
                </span>
              </div>

              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/80">{p.description}</p>

              <ul className="mt-6 space-y-2.5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-border/60 bg-muted/40 p-7 text-center sm:p-10">
          <Gamepad2 size={22} className="mx-auto text-foreground" />
          <h2 className="font-heading mt-3 text-xl font-semibold tracking-tight">More on the way.</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Petalburg Dynasty is actively in development. I'll be writing about the build process here as it
            progresses.
          </p>
          <Link
            to="/blogs"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/60"
          >
            Read the blog <ArrowRight size={15} />
          </Link>
        </div>
      </main>
    </>
  );
}
