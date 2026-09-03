import React from 'react';
import { Moon, Sun } from 'lucide-react';

/**
 * Flips between light and dark and remembers the choice.
 *
 * Deliberately stateless: which icon shows is decided by CSS (`dark:` variants)
 * off the class already on <html>, so the prerendered markup and the hydrated
 * markup always agree. Reading React state here would mismatch on first paint.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch (e) {
      /* storage blocked: the theme still applies for this page view */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#121212' : '#ffffff');
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Sun size={18} className="dark:hidden" />
      <Moon size={18} className="hidden dark:block" />
    </button>
  );
}
