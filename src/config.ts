export const SITE = {
  website: "https://fomalhautbell.github.io/",
  author: "FomalhautBell",
  profile: process.env.PUBLIC_SOCIAL_GITHUB ?? "", // set in .env
  desc: "唉，飞光！悲丽平壮观，白如积雪，利若秋霜。",
  title: "FomalhautBell",
  ogImage: "og.webp", // located in the public folder
  ogImageZh: "og-zh.webp", // 中文站点使用的 OG 图
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 12,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showGalleries: true,
  showGalleriesInIndex: true, // Show galleries in the general paginated list (only if showGalleries is true)
  showBackButton: true, // show back button in post detail
  showTagsInCards: true, // show tag pills at the bottom of post cards
  showCoverImages: false, // show cover images (OG) in post cards (requires pnpm build in dev mode)
  indexPostsGrid: false, // show recent/featured posts in grid layout on the home page (like /posts page)
  heroTerminalPrompt: {
    prefix: "~", // highlighted part on the left
    path: "/blog", // central prompt text
    suffix: "$", // terminal symbol on the right
  },
  backdropEffects: {
    cursorGlow: true, // cursor tracking with soft halo
    grain: true, // background visual noise layer
  },
  editPost: {
    enabled: false, // 关闭，避免暴露仓库编辑链接
    text: "Edit this post",
    url: process.env.PUBLIC_EDIT_POST_URL ?? "", // set in .env
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // 默认语言；页面实际语言由 URL 前缀决定
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
