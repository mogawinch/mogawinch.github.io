import React from 'react';
import { Head } from 'vite-react-ssg';
import { siteUrl, SITE_NAME } from '@/lib/seo';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - {SITE_NAME}</title>
        <meta name="description" content="Privacy policy for Mogawinch HQ." />
        <meta property="og:title" content={`Privacy Policy - ${SITE_NAME}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl('/privacy')} />
        <meta property="og:site_name" content={SITE_NAME} />
      </Head>

      <main className="mx-auto max-w-3xl px-5 sm:px-8">
        <header className="pb-10 pt-12 sm:pt-16">
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
        </header>

        <div className="article-prose pb-16">
          <h2>1. Introduction</h2>
          <p>
            At Mogawinch HQ, we value your privacy. We do not collect personal information directly. However,
            this website may display ads from third-party networks, which could collect certain information
            about your browsing behavior.
          </p>

          <h2>2. Third-Party Ads</h2>
          <p>
            We may use advertising services that deliver relevant ads. These third-party services may use
            cookies or other technologies to collect anonymous data, such as your device type, browser, or
            pages visited, to provide tailored ads. We do not control these practices.
          </p>

          <h2>3. Cookies</h2>
          <p>
            While our site itself does not use cookies, third-party ad networks may set cookies to track ad
            performance and deliver personalized ads. You can disable cookies in your browser if you prefer.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We do not store or process any personal data ourselves. For information collected by third-party
            ads, please consult the respective ad network's privacy policies.
          </p>

          <h2>5. Contact</h2>
          <p>
            For questions about this privacy policy, please contact us at{' '}
            <a href="mailto:markwinch@mogawinch.com">markwinch@mogawinch.com</a>.
          </p>
        </div>
      </main>
    </>
  );
}
