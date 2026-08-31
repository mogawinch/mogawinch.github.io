import React, { useState } from 'react';
import ImageModal from '@/components/ImageModal';

function scoreTone(score) {
  if (score <= 5) return 'text-rose-600';
  if (score <= 7) return 'text-amber-600';
  return 'text-emerald-600';
}

// Shared paragraph/secondary-image renderer for both game reviews and blog
// posts. Reviews additionally pass `reviewScore`/`goodSummary`/`badSummary`.
export default function ArticleBody({ paragraphs, secondaryImagePath, reviewScore, goodSummary, badSummary }) {
  const [modalSrc, setModalSrc] = useState(null);
  const middleIndex = Math.floor((paragraphs?.length || 0) / 2);

  return (
    <div className="article-prose">
      {(paragraphs || []).map((text, index) => (
        <React.Fragment key={index}>
          <p>{text}</p>
          {index === middleIndex && secondaryImagePath && (
            <img
              src={`/${secondaryImagePath}`}
              alt="Secondary"
              onClick={() => setModalSrc(`/${secondaryImagePath}`)}
            />
          )}
        </React.Fragment>
      ))}

      {reviewScore != null && (
        <div className="mt-10 rounded-2xl border border-border/60 bg-muted/40 p-6 sm:p-8">
          <h2 className="font-heading mb-5 text-xl font-semibold tracking-tight">Review Summary</h2>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="grid flex-1 gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-emerald-600">Good</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/85">
                  {(goodSummary || []).map((g, i) => (
                    <li key={i}>{g}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-rose-600">Bad</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/85">
                  {(badSummary || []).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
              <span className={`font-heading text-5xl font-semibold ${scoreTone(reviewScore)}`}>{reviewScore}</span>
              <span className="text-sm text-muted-foreground">out of 10</span>
            </div>
          </div>
        </div>
      )}

      <ImageModal src={modalSrc} onClose={() => setModalSrc(null)} />
    </div>
  );
}
