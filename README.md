# Ganesh Chaudaki — Portfolio

Premium, responsive, SEO-optimized portfolio for **Ganesh Bhimrao Chaudaki**, Software Engineer — Full-Stack Development, AI applications, enterprise software, and SaaS products.

Built with **React 19 + Vite + TypeScript + Tailwind CSS 4 + Framer Motion**.

## Features

- 🎨 Premium dark/light UI with glassmorphism, gradients, and an animated background
- ⚡ Route-level code splitting, lazy loading, and manual vendor chunks
- 🎬 Scroll reveal animations, scroll progress bar, animated counters, loading screen
- 📱 Mobile-first responsive layout with a sticky glass navbar
- ♿ Accessibility: skip link, focus rings, ARIA labels, reduced-motion support
- 🔍 SEO: per-page meta via React Helmet, Open Graph, JSON-LD, sitemap, robots.txt
- 🗂 Project filtering + search, case-study pages with features / challenges / architecture
- ✉️ Contact form with validation and EmailJS (falls back to `mailto:` until configured)
- 🚀 Vercel-ready (`vercel.json` with SPA rewrites and asset caching)

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Configuration

### Contact form (FormSubmit)

The form posts to [FormSubmit](https://formsubmit.co)'s AJAX endpoint and delivers
submissions to the email in `src/data/profile.ts` — no account or API keys required.
The very first submission triggers a one-time **activation email** to that address;
click the link in it once and the form is live. Includes a honeypot field for spam.

### Personalizing content

All content lives in `src/data/` — no component edits needed:

| File                     | Contents                                              |
| ------------------------ | ----------------------------------------------------- |
| `src/data/profile.ts`    | Name, tagline, email, social URLs, stats              |
| `src/data/projects.ts`   | Featured projects (add GitHub / live demo URLs here)  |
| `src/data/skills.ts`     | Skill categories and icons                            |
| `src/data/experience.ts` | Career timeline and education                         |
| `src/data/services.ts`   | Services offered                                      |
| `src/data/misc.ts`       | Client work counters, certifications, testimonials, tech timeline, blog placeholders |

Also update:

- `public/resume.pdf` — replace the placeholder with your real resume
- `index.html` — canonical URL, OG image, JSON-LD `sameAs` links
- `public/sitemap.xml` + `public/robots.txt` — your real domain
- Headshot: replace the "GC" placeholder in `src/components/home/Hero.tsx` with an `<img>`
- Project images: `src/components/ProjectVisual.tsx` renders gradient placeholders — swap in real screenshots when ready

## Deploying to Vercel

1. Push this repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new) — Vite is auto-detected
3. Add the three `VITE_EMAILJS_*` environment variables
4. Deploy — `vercel.json` handles SPA routing and asset caching

## Project structure

```
src/
├── components/
│   ├── home/          # Hero, Testimonials, GithubActivity
│   ├── layout/        # Navbar, Footer, Layout, ScrollProgress, LoadingScreen
│   └── ui/            # shadcn-style primitives (Button, Card, Badge, Input)
├── context/           # ThemeContext (dark/light with persistence)
├── data/              # All site content (edit here)
├── lib/               # cn() utility
└── pages/             # Route components (lazy-loaded)
```
