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

`main` 只发布中文，页面直接挂在根路径下（`/posts/`、`/tags/` …）。

英文版本连同语言切换器维护在 `i18n-en` 分支上（`/zh-CN/…` 与 `/en/…` 双前缀）。
需要时切过去即可：

```bash
git switch i18n-en    # 双语版本
git switch main       # 中文版本
```

文案字典在 `src/i18n/ui.ts`，取用方式 `const t = useTranslations(lang)`。

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
