import React, { useState } from 'react';
import { Link2, Check } from 'lucide-react';

// Copies the real canonical page URL (built at prerender time from local
// article data - see lib/seo.js) - the old Blazor site's social-snapshot
// stub concept is fully retired since the real page now carries correct OG
// tags itself.
export default function ShareButton({ url }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleToggle = () => {
    setOpen((v) => !v);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // clipboard API unavailable - no-op, user can still select the text
    }
  };

  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        onClick={handleToggle}
        aria-label="Share this page"
        className="ml-2 inline-flex items-center text-muted-foreground transition-colors hover:text-foreground"
      >
        <Link2 size={20} />
      </button>

      {open && (
        <span className="absolute left-1/2 top-full z-10 mt-2 flex -translate-x-1/2 items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs shadow-lg">
          <span className="max-w-[220px] truncate text-muted-foreground">{url}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1 rounded-md bg-foreground px-2 py-1 font-medium text-background"
          >
            {copied ? <Check size={12} /> : null}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </span>
      )}
    </span>
  );
}
