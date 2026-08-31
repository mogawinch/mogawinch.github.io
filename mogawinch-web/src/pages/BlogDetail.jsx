import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Head } from 'vite-react-ssg';
import ArticleBody from '@/components/ArticleBody';
import ShareButton from '@/components/ShareButton';
import { decodeSlug } from '@/lib/base64';
import { getArticleByPath } from '@/lib/content';
import { articleSeo, SITE_NAME } from '@/lib/seo';

export default function BlogDetail() {
  const params = useParams();
  const slug = params['*'];

  let article = null;
  try {
    article = getArticleByPath(decodeSlug(slug));
  } catch {
    article = null;
  }

  if (!article) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-32 text-center sm:px-8">
        <h1 className="font-heading text-3xl font-semibold tracking-tight">Post not found</h1>
        <p className="mt-3 text-muted-foreground">The post you're looking for doesn't exist or has been moved.</p>
        <Link to="/blogs" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background">
          <ArrowLeft size={16} /> All posts
        </Link>
      </main>
    );
  }

  const seo = articleSeo(article);

  return (
    <>
      <Head>
        <title>{article.Title} - {SITE_NAME}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={article.Title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={seo.image} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:site_name" content={SITE_NAME} />
      </Head>

      <article className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="pb-6 pt-8">
          <Link to="/blogs" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft size={15} /> Blog
          </Link>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
          <img src={`/${article.ImagePath}`} alt={article.Title} className="h-full w-full object-cover" />
        </div>

        <header className="py-8">
          <h1 className="font-heading flex flex-wrap items-center gap-2 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {article.Title}
            <ShareButton url={seo.url} />
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{article.Author}</span>
            <span>&middot;</span>
            <span>{article.Date}</span>
          </div>
        </header>

        <ArticleBody paragraphs={article.Paragraph} secondaryImagePath={article.SecondaryImagePath} />

        <div className="mt-10 border-t border-border/60 pt-8 pb-4">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/60">
            <ArrowLeft size={16} /> More posts
          </Link>
        </div>
      </article>
    </>
  );
}
