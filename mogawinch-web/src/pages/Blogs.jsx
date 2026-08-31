import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import ArticleCard from '@/components/ArticleCard';
import SearchBox from '@/components/SearchBox';
import Pagination from '@/components/Pagination';
import { getArticlesByType } from '@/lib/content';
import { siteUrl, SITE_NAME } from '@/lib/seo';

const PAGE_SIZE = 6;

export default function Blogs() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const [page, setPage] = useState(1);

  const allBlogs = getArticlesByType('blog');

  const filtered = useMemo(() => {
    if (!search) return allBlogs;
    const q = search.toLowerCase();
    return allBlogs.filter((a) => a.Title?.toLowerCase().includes(q));
  }, [allBlogs, search]);

  const totalPages = Math.max(Math.ceil(filtered.length / PAGE_SIZE), 1);
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <Head>
        <title>Blog - {SITE_NAME}</title>
        <meta name="description" content="Longer-form writing on gaming, the industry, and the technology shaping how we play." />
        <meta property="og:title" content={`Blog - ${SITE_NAME}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl('/blogs')} />
        <meta property="og:site_name" content={SITE_NAME} />
      </Head>

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="pb-10 pt-12 sm:pt-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Writing</p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">All Blog Posts</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Longer-form thoughts on gaming, the industry, and the technology shaping how we play.
          </p>
        </header>

        <SearchBox basePath="/blogs" initialValue={search} placeholder="Search blogs..." />

        <p className="mb-6 text-sm text-muted-foreground">{filtered.length} posts</p>

        <div className="grid gap-6 pb-4 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((a) => (
            <ArticleCard key={a.path} article={a} />
          ))}
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
        />
      </main>
    </>
  );
}
