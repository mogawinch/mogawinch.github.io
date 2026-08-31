import React from 'react';
import RootLayout from '@/layouts/RootLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import GameReviews from '@/pages/GameReviews';
import GameReviewDetail from '@/pages/GameReviewDetail';
import Blogs from '@/pages/Blogs';
import BlogDetail from '@/pages/BlogDetail';
import NotFound from '@/pages/NotFound';
import { getArticlesByType } from '@/lib/content';

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'terms', element: <Terms /> },
      { path: 'reviews/games', element: <GameReviews /> },
      {
        path: 'reviews/games/*',
        element: <GameReviewDetail />,
        // Determines which of the Base64 review slugs get prerendered to
        // real static HTML - shares the same content source as the sitemap
        // generator (src/lib/content.js) so the two can never drift apart.
        getStaticPaths: () => getArticlesByType('game').map((a) => `reviews/games/${a.slug}`),
      },
      { path: 'blogs', element: <Blogs /> },
      {
        path: 'blogs/*',
        element: <BlogDetail />,
        getStaticPaths: () => getArticlesByType('blog').map((a) => `blogs/${a.slug}`),
      },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export default routes;
