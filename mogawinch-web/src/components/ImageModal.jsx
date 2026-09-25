import React, { useEffect } from 'react';
import { X } from 'lucide-react';

// Simple full-screen lightbox. Rendered conditionally by the caller (only
// once `src` is set from a click handler), so it never touches `window`/
// `document` outside of an effect - safe for prerendering.
export default function ImageModal({ src, alt, onClose }) {
  useEffect(() => {
    if (!src) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 text-white/80 transition-colors hover:text-white"
      >
        <X size={28} />
      </button>
      <img
        src={src}
        alt={alt || ''}
        className="max-h-full max-w-full rounded-lg object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
