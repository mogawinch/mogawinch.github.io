// Per-article OG/meta data, built entirely from local build-time article
// data - never from `window.location`, so it renders identically during
// prerender and in the browser.

export const SITE_URL = 'https://mogawinch.com';
export const SITE_NAME = 'Mogawinch HQ';

export function siteUrl(routePath) {
  return `${SITE_URL}${routePath}`;
}

export function articleImageUrl(article) {
  if (!article?.ImagePath) return `${SITE_URL}/assets/mogawinch_logo.svg`;
  return `${SITE_URL}/${article.ImagePath}`;
}

export function articleSeo(article) {
  return {
    title: article.Title,
    description: article.Excerpt,
    image: articleImageUrl(article),
    url: siteUrl(article.route),
  };
}
