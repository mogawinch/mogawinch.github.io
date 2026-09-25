import React from 'react';
import { Head } from 'vite-react-ssg';
import { siteUrl, SITE_NAME } from '@/lib/seo';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms &amp; Conditions - {SITE_NAME}</title>
        <meta name="description" content="Terms and conditions for Mogawinch HQ." />
        <meta property="og:title" content={`Terms & Conditions - ${SITE_NAME}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl('/terms')} />
        <meta property="og:site_name" content={SITE_NAME} />
      </Head>

      <main className="mx-auto max-w-3xl px-5 sm:px-8">
        <header className="pb-10 pt-12 sm:pt-16">
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Terms &amp; Conditions</h1>
        </header>

        <div className="article-prose pb-16">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Mogawinch HQ. By accessing or using our website, you agree to comply with these terms and
            conditions. Please read them carefully before using the site.
          </p>

          <h2>2. Use of Content</h2>
          <p>
            All content on this site is for personal, non-commercial use only. You may not copy, modify,
            distribute, or republish any content without explicit permission.
          </p>

          <h2>3. User Conduct</h2>
          <p>
            Users agree not to engage in any activity that may harm the website, other users, or violate
            applicable laws.
          </p>

          <h2>4. Disclaimer</h2>
          <p>
            The site is provided &ldquo;as is&rdquo; without any warranties. We are not responsible for any
            errors, omissions, or losses arising from using this website.
          </p>

          <h2>5. Changes to Terms</h2>
          <p>We may update these terms at any time. Continued use of the site constitutes acceptance of any changes.</p>

          <h2>6. Contact</h2>
          <p>
            For questions regarding these terms, please contact us at{' '}
            <a href="mailto:markwinch@mogawinch.com">markwinch@mogawinch.com</a>.
          </p>
        </div>
      </main>
    </>
  );
}
