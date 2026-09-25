import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Head } from 'vite-react-ssg';
import { SITE_NAME } from '@/lib/seo';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found - {SITE_NAME}</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main className="mx-auto max-w-3xl px-5 py-32 text-center sm:px-8">
        <p className="font-heading text-6xl font-semibold tracking-tight">404</p>
        <h1 className="font-heading mt-4 text-2xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background"
        >
          <ArrowLeft size={16} /> Back home
        </Link>
      </main>
    </>
  );
}
