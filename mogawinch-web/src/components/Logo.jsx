import React from 'react';

// Inlined rather than an <img src="...svg">: an <img>-referenced SVG
// renders in an isolated document, so its `stroke="currentColor"` never
// actually picks up the surrounding text color - it stays black in both
// themes. Inlining it as real markup lets it inherit `color` normally.
export default function Logo({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
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
