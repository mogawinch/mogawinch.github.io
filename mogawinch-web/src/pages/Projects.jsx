import React, { useState } from 'react';
import { Wrench, Gamepad2, Sparkles, Download, Github, Play } from 'lucide-react';
import { Head } from 'vite-react-ssg';
import { siteUrl, SITE_URL, SITE_NAME } from '@/lib/seo';

const projects = [
  {
    title: 'Pokémon: Petalburg Dynasty',
    tag: 'RomHack · Completed',
    status: 'Completed',
    description:
      "A direct follow-up to Pokémon Emerald. With Norman gone, you step into the Petalburg Gym in your father's stead.",
    highlights: [
      "A continuation of Emerald's story",
      "Take the reins of the Petalburg Gym in your father's place",
      "Built on Hoenn's foundations",
    ],
    links: [
      {
        label: 'Download on Hackdex',
        href: 'https://www.hackdex.app/hack/pokemon-petalburg-dynasty',
        icon: Download,
        primary: true,
      },
      {
        label: 'GitHub Releases',
        href: 'https://github.com/mogawinch/Pokemon-Petalburg-Dynasty/releases',
        icon: Github,
      },
    ],
    trailer: { id: 'nkeXOS_Y5HA', title: 'Pokémon: Petalburg Dynasty - Trailer' },
  },
];

// Click-to-load facade: nothing is requested from YouTube's player until the
// visitor presses play, which keeps the page light and the site cookie-free
// by default.
function Trailer({ id, title }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative mt-7 aspect-video overflow-hidden rounded-lg border border-border/60 bg-muted">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play trailer: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-black shadow-lg">
              <Play size={26} className="ml-1 fill-current" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - {SITE_NAME}</title>
        <meta name="description" content="What Mogawinch HQ is building when it's not writing game reviews." />
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

              <div className="mt-8 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
                      l.primary
                        ? 'bg-foreground text-background hover:bg-foreground/85'
                        : 'border border-border/70 text-foreground hover:bg-muted'
                    }`}
                  >
                    <l.icon size={16} /> {l.label}
                  </a>
                ))}
              </div>

              <Trailer {...p.trailer} />
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-border/60 bg-muted/40 p-7 text-center sm:p-10">
          <Gamepad2 size={22} className="mx-auto text-foreground" />
          <h2 className="font-heading mt-3 text-xl font-semibold tracking-tight">More on the way.</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Petalburg Dynasty is still being worked on. New builds are posted on Hackdex and GitHub as they
            come out.
          </p>
        </div>
      </main>
    </>
  );
}
