import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const social = [
  { label: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/mogawinchhq', icon: '/assets/bmc.png' },
  { label: 'Bluesky', href: 'https://bsky.app/profile/mogawinchhq.bsky.social', icon: '/assets/bluesky.png' },
  { label: 'X (Twitter)', href: 'https://x.com/MogawinchHQ', icon: '/assets/twitter.png' },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2">
              <Logo className="h-7 w-7 text-foreground" />
              <span className="font-heading text-xl font-semibold tracking-tight">Mogawinch HQ</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Honest, down-to-earth video game reviews and writing by Mark Winch.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  <img src={s.icon} alt="" className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Explore</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/reviews/games" className="text-muted-foreground hover:text-foreground">Game Reviews</Link></li>
                <li><Link to="/blogs" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
                <li><Link to="/projects" className="text-muted-foreground hover:text-foreground">Projects</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Site</p>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:markwinch@mogawinch.com" className="text-muted-foreground hover:text-foreground">Contact</a></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms</Link></li>
                <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Mogawinch HQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
