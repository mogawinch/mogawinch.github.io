# 🎮 Mogawinch HQ

A personal gaming review and content website, statically pre-rendered at build time and deployed to GitHub Pages.

---

## 🧭 Overview

The site is a **gaming review and blog hub** - honest, down-to-earth reviews scored on the value a game delivers for its price, plus occasional writing on gaming and the industry. Every page is prerendered to real static HTML at build time, so content is visible to search engines and social-media crawlers with no client-side rendering required.

---

## 🛠 Tech Stack

- **React** + **Vite** + [`vite-react-ssg`](https://github.com/Daydreamer-riri/vite-react-ssg) for static-site generation
- **Tailwind CSS** + a trimmed set of shadcn/ui primitives
- **react-router-dom** for routing
- Content stored as static JSON, loaded at build time via `import.meta.glob`
- Deployed as a static site to GitHub Pages via GitHub Actions

---

## 🎮 Features

- Game reviews (`/reviews/games`) and blog posts (`/blogs`), each with search and pagination
- Per-article page prerendered with correct `<title>`/Open Graph tags baked in
- `sitemap.xml` / `robots.txt` generated at build time
- A `/projects` page for other things in progress

---

## 🌍 Live Site

👉 Hosted on GitHub Pages:
`https://mogawinch.com`

---

## 👤 Author

GitHub: https://github.com/mogawinch

---

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
The code in this repository is licensed under **MIT** License **except for the `mogawinch-web/public/assets`** folder. See `LICENSE` file.

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
`mogawinch-web/public/assets` content is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
