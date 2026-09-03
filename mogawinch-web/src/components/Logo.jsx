import React from 'react';

/**
 * The Mogawinch mark, inlined rather than loaded via <img> so its stroke picks up
 * currentColor from the surrounding text and flips with the theme.
 * Source of truth for the shape is public/assets/mogawinch_logo.svg - keep both in sync.
 */
export default function Logo({ className }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="Mogawinch HQ"
      className={className}
    >
      <path
        d="M11 46V14L32 32L53 14V37A6.5 6.5 0 1 1 40 37"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
