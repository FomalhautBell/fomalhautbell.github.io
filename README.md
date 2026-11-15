# fomalhautbell.github.io

Personal blog — notes on software, systems, and the occasional detour.

Built with [Astro](https://astro.build/), based on a heavily customized version of the
[AstroPaper](https://github.com/satnaing/astro-paper) theme. Static output, no analytics,
no trackers.

## Local development

Requires Node.js and pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

## Build

```bash
pnpm build      # outputs to dist/
pnpm preview    # serve the built site locally
```

## Languages

The site is bilingual. Pages live under a locale prefix and a single page file
renders both languages via `getStaticPaths`:

- `/zh-CN/…` — 中文（默认，`/` 会重定向到这里）
- `/en/…` — English

UI strings live in `src/i18n/ui.ts` (one object per locale, flat keys). Helpers in
`src/i18n/utils.ts`: `getLangFromUrl`, `useTranslations`, `localizePath`,
`switchLangPath`. In a page or component:

```astro
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
<a href={localizePath("/posts", lang)}>{t("nav.posts")}</a>
```

To add a locale: extend `LANGS` and `ui` in `src/i18n/ui.ts`, then add the label to
`LANG_LABELS`. Any `getStaticPaths` that maps over `LANGS` picks it up automatically.

## Writing posts

Posts live in `src/data/blog/` as Markdown or MDX. Minimum frontmatter:

```yaml
---
title: "Post title"
description: "One line that shows up in listings and social cards."
pubDatetime: 2026-01-01T10:00:00Z
tags:
  - tag-one
draft: false
---
```

Galleries live in `src/data/galleries/`.

## Deployment

Pushes to `main` are built and published to GitHub Pages by
`.github/workflows/deploy.yml`. Site-wide settings (title, author, description, timezone,
feature toggles) are in `src/config.ts`.

Optional environment variables — all of them are optional, and an unset value simply hides
the corresponding feature — are documented in `.env.example`. Copy it to `.env` for local
development; `.env` is gitignored.

## License

See [LICENSE](./LICENSE).
