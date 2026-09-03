import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Game Reviews', to: '/reviews/games' },
  { label: 'Blog', to: '/blogs' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="font-heading text-xl font-semibold tracking-tight">Mogawinch HQ</span>
        </Link>

        <div className="flex items-center gap-1 md:gap-6">
          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => {
              const active = l.to === '/' ? location.pathname === '/' : location.pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-sm transition-colors ${
                    active ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          <ThemeToggle />

          <button className="p-2 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/70 bg-background md:hidden">
          <div className="flex flex-col px-5 py-3">
            {links.map((l) => {
              const active = l.to === '/' ? location.pathname === '/' : location.pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`border-b border-border/40 py-3 text-sm last:border-0 ${
                    active ? 'text-foreground font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
