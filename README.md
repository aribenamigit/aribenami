# aribenami.com

Personal site. Astro, markdown content, static output.

- `src/content/work/*.md`: case studies (frontmatter schema in `src/content.config.ts`)
- `src/content/writing/*.md`: posts
- `src/data/site.ts`: name, email, LinkedIn, nav, the "Now" block
- `src/pages/`: home, work, writing, resume, about, contact, services (unlisted)
- `src/styles/global.css`: placeholder styling, to be replaced
- `public/images/work/<slug>/`: case study images; `public/files/`: PDFs

Set `draft: true` in frontmatter to keep an entry out of the build.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

Deploy: Cloudflare Pages or Vercel, build command `npm run build`, output `dist`.
