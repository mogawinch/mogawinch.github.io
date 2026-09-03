import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

function scoreVariant(score) {
  if (score == null) return null;
  if (score < 5) return 'low';
  if (score < 7) return 'medium';
  return 'high';
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function ArticleCard({ article, featured = false }) {
  const variant = scoreVariant(article.ReviewScore);

  return (
    <Link
      to={article.route}
      className={`group flex overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.03] dark:hover:border-border dark:hover:shadow-black/50 ${
        featured ? 'flex-col md:flex-row' : 'flex-col'
      }`}
    >
      <div className={`relative overflow-hidden bg-muted ${featured ? 'aspect-[16/10] md:aspect-auto md:w-1/2' : 'aspect-[16/10]'}`}>
        <img
          src={`/${article.ImagePath}`}
          alt={article.Title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className={`flex flex-1 flex-col p-5 ${featured ? 'justify-center md:p-8' : ''}`}>
        <div className="mb-3 flex items-center gap-3">
          {variant && <Badge variant={variant}>{article.ReviewScore}/10</Badge>}
          <span className="text-xs text-muted-foreground">{formatDate(article.Date)}</span>
        </div>
        <h3 className={`font-heading font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-foreground/70 ${featured ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>
          {article.Title}
        </h3>
        <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${featured ? 'line-clamp-3' : 'line-clamp-2'}`}>
          {article.Excerpt}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <span>{article.Author}</span>
        </div>
      </div>
    </Link>
  );
}
