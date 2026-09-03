import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

// Mirrors the inline script in index.html (which sets the class before
// paint to avoid a flash) - this just keeps React's own state in sync and
// lets the visitor flip it. Reading `document` happens only inside the
// effect, never at render time, so this stays safe during SSG prerender.
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // localStorage unavailable - theme just won't persist across visits
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
