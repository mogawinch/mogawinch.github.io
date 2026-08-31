// Build-time content loading: every article JSON under src/content/** is
// pulled in via import.meta.glob (an ESM import, not a runtime fetch), so
// this works identically in dev, during the Node prerender pass, and in the
// browser bundle. This module is the single source of truth for the route
// list - both vite-react-ssg's getStaticPaths (src/App.jsx) and the sitemap
// generator (scripts/generate-sitemap.mjs) call getAllRoutes() from here so
// they can never drift apart.

import { encodeSlug } from './base64.js';
import contentIndex from '../content/index.json';

const modules = import.meta.glob('/src/content/**/*.json', { eager: true });

const STATIC_ROUTES = ['/', '/about', '/projects', '/privacy', '/terms', '/reviews/games', '/blogs'];

function typeFromPath(path) {
  if (path.startsWith('content/reviews/games/')) return 'game';
  if (path.startsWith('content/blogs/')) return 'blog';
  return null;
}

let _articles = null;

// content/index.json is the site's master index (mirrors the original
// Blazor pages, which only ever listed articles referenced here). Several
// extra files sit in src/content/blogs/ as uncommitted scratch/test fixtures
// that were never wired into index.json and never appeared on the live
// site - filtering through the index keeps them from surfacing.
function loadArticles() {
  if (_articles) return _articles;

  const indexedPaths = new Set(contentIndex.map((entry) => entry.Path));

  _articles = Object.entries(modules)
    .map(([file, mod]) => {
      // file looks like '/src/content/reviews/games/avowed.json'
      const path = file.replace('/src/content/', 'content/');
      const type = typeFromPath(path);
      if (!type) return null; // skip content/index.json and anything else
      if (!indexedPaths.has(path)) return null; // not part of the published index

      const data = mod.default ?? mod;
      const slug = encodeSlug(path);
      const route = type === 'game' ? `/reviews/games/${slug}` : `/blogs/${slug}`;

      return { path, slug, type, route, ...data };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.Date) - new Date(a.Date));

  return _articles;
}

export function getAllArticles() {
  return loadArticles();
}

export function getArticlesByType(type) {
  return loadArticles().filter((a) => a.type === type);
}

export function getArticleByPath(path) {
  return loadArticles().find((a) => a.path === path) || null;
}

export function getArticleBySlug(slug) {
  return loadArticles().find((a) => a.slug === slug) || null;
}

export function getAllRoutes() {
  return [...STATIC_ROUTES, ...loadArticles().map((a) => a.route)];
}
