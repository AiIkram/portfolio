# Ikram Aissiou — Academic Portfolio

Personal academic homepage built with **React 19 + Vite 7 + Tailwind CSS 4**.
The production build compiles to a **single self-contained `index.html`** (all JS and CSS inlined), which makes it trivially easy to host anywhere — especially GitHub Pages.

Live site: `https://<your-username>.github.io`

---

## Quick start (local)

```bash
npm install     # install dependencies
npm run dev     # dev server with hot reload
npm run build   # production build -> dist/index.html
npm run preview # preview the production build
```

---

## Deploying to GitHub Pages

### Option A — Automatic (recommended)

The repo ships with a GitHub Actions workflow at
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that builds and
publishes the site on every push to `main`.

**Steps**

1. Create a **public** repository. Two choices:
   - `AiIkram.github.io` → the site is served at `https://aiikram.github.io/`
   - any other name, e.g. `portfolio` → served at `https://aiikram.github.io/portfolio/`

   Both work — the build has no path-dependent assets.

2. Push this project to that repository:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/AiIkram/<repo-name>.git
   git push -u origin main
   ```

3. In GitHub, open **Settings → Pages** and under **Build and deployment**
   set **Source** to **GitHub Actions**.

4. Wait ~1 minute for the workflow run to finish (check the **Actions** tab).
   Your site is now live.

After that, every `git push` to `main` redeploys automatically.

### Option B — Manual, no Actions

```bash
npm run build
npx gh-pages -d dist       # one-off: npm install -D gh-pages
```

Or simply drag the contents of `dist/` into the repository root and enable
**Settings → Pages → Deploy from a branch → main / root**.

---

## Editing your content

**Everything you are likely to change lives in one file: [`src/data.ts`](src/data.ts).**
No JSX knowledge required — it is plain data.

| What you want to change | Where |
| --- | --- |
| Name, role, email, phone, social links | `PROFILE` |
| Portrait photo | `PROFILE.portrait` |
| About paragraphs | `ABOUT_ME` |
| Selected highlights sidebar | `HIGHLIGHTS` |
| Research statement & pillars | `RESEARCH_STATEMENT`, `FOCUS_AREAS` |
| Publications | `PAPERS` (grouped via `group` + `PUB_GROUPS`) |
| Manuscripts under review | `UNDER_REVIEW` |
| News timeline | `NEWS` |
| Mentors, mates, mentees | `MENTORS`, `MATES`, `MENTEES_NOTE`, `COMMUNITIES` |
| Diamond facets (non-research work) | `FACETS` |
| Blog posts | `POSTS` |
| Photo gallery | `GALLERY` |
| Jobs & internships | `EXPERIENCE` |
| Degrees, schools, certifications | `EDUCATION`, `SCHOOLS`, `CERTS` |
| Skills & languages | `SKILLS`, `SOFT_SKILLS`, `LANGUAGES` |
| Scrolling keyword ticker | `TICKER` |
| Stat counters | `STATS` |

### Adding your photos

Place image files in **`public/`**, then reference them with a **relative path
(no leading slash)** so the site works whether it is served from a repository
sub-path or a domain root:

```ts
// src/data.ts
export const GALLERY: Shot[] = [
  {
    src: "images/miccai-poster.jpg",   // ← file at public/images/miccai-poster.jpg
    caption: "MICCAI 2026, Strasbourg.",
    tag: "Conference",
    span: "wide",
    tone: "gold",
  },
];
```

`span` controls the tile size in the mosaic: `"tall"`, `"wide"`, `"big"` (2×2) or `"normal"`.
External image URLs also work.

### Writing a blog post

Add an object to `POSTS` in `src/data.ts`:

```ts
{
  slug: "my-new-post",          // short unique id
  title: "My post title",
  date: "2026",
  read: "5 min",
  tags: ["Uncertainty", "MRI"],
  tone: "teal",                 // gold | teal | coral | ice
  excerpt: "One or two sentences shown on the card.",
  body: [
    "First paragraph of the post.",
    "Wrap a phrase in **double asterisks** to highlight it in the accent colour.",
  ],
  // link: "https://...",       // optional: links out instead of opening in-site
}
```

`body` is a plain array of paragraphs — no markdown file or CMS needed.
Cards appear newest-first as written; clicking one opens a full-screen reader
(`Esc` or ✕ to close). Set `link` to publish elsewhere (Medium, Substack, a
preprint) and the card will link out instead.

---

## Project structure

```
src/
├── App.tsx                 # page composition & section layout
├── data.ts                 # ← ALL editable content
├── index.css               # design tokens, keyframes, utilities
├── lib/
│   └── hooks.ts            # scroll reveal, scroll-spy, counters,
│                           # scramble decode, pointer parallax
└── components/
    ├── Intro.tsx           # "Entering IKRAM'S SPACE" entry splash
    ├── Ambient.tsx         # canvas starfield + vignettes + grain
    ├── Nav.tsx             # sticky nav, progress rail, mobile menu
    ├── Hero.tsx            # name, portrait orbit, keyword ticker
    ├── Gallery.tsx           # photo mosaic + lightbox
    ├── Blog.tsx              # post cards + in-site reader
    ├── Diamond.tsx           # interactive facet stone
    └── People.tsx            # mentors, mates, mentees
```

---

## Accessibility & performance notes

- All motion respects `prefers-reduced-motion`.
- Intro splash is skippable with a click or any keypress.
- Gallery lightbox supports `←` / `→` / `Esc`.
- Semantic headings and labelled controls throughout.
- Single-file output ≈ 95 kB gzipped, no runtime dependencies beyond React.

---

## License

Site code: MIT. Content © Ikram Aissiou.
