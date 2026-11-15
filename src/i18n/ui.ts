// main 分支只发布中文；英文版在 i18n-en 分支
const ALL_LANGS = ["zh-CN", "en"] as const;
export const LANGS = ["zh-CN"] as const;
export type Lang = (typeof ALL_LANGS)[number];

export const DEFAULT_LANG: Lang = "zh-CN";

/** 语言切换按钮上显示的目标语言名 */
export const LANG_LABELS: Record<Lang, string> = {
  "zh-CN": "中文",
  en: "English",
};

export const ui = {
  "zh-CN": {
    // ── 站点标识 ──
    "site.title": "良绮难忘",
    "site.author": "良绮难忘",

    // ── 导航 ──
    "nav.posts": "文章",
    "nav.tags": "标签",
    "nav.about": "关于",
    "nav.search": "搜索",
    "nav.archives": "归档",
    "nav.galleries": "相册",
    "nav.home": "首页",
    "nav.menu": "菜单",
    "nav.openMenu": "打开菜单",
    "nav.closeMenu": "关闭菜单",
    "nav.skipToContent": "跳到正文",
    "nav.themeLight": "切换到浅色模式",
    "nav.themeDark": "切换到深色模式",
    "nav.language": "切换语言",

    // ── 面包屑 ──
    "breadcrumb.home": "首页",
    "breadcrumb.back": "返回",
    "breadcrumb.goBack": "返回上一页",

    // ── 分页 ──
    "pagination.prev": "上一页",
    "pagination.next": "下一页",
    "pagination.page": "第 {page} 页",

    // ── 首页 ──
    "home.description": "唉，飞光！悲丽平壮观，白如积雪，利若秋霜。",
    "home.writtenBy": "作者",
    "home.featured": "精选",
    "home.recent": "最新",
    "home.exploreAll": "浏览全部文章",
    "home.featuredPosts": "精选文章",
    "home.recentPosts": "最新文章",

    // ── 文章列表 ──
    "posts.title": "文章",
    "posts.all": "全部文章",
    "posts.count": "{count} 篇",
    "posts.empty": "还没有文章。",
    "posts.emptyHint": "新的内容正在酝酿中，欢迎稍后再来。",
    "posts.pageOf": "第 {current} / {total} 页",
    "posts.metaDesc": "全部已发布文章。",
    "posts.metaDescPaged": "全部已发布文章（第 {current} / {total} 页）。",

    // ── 标签 ──
    "tags.title": "标签",
    "tags.all": "全部标签",
    "tags.subtitle": "落脚点与击球点",
    "tags.count": "{count} 个标签",
    "tags.pageDesc": "所有带有「{name}」标签的文章。",
    "tags.empty": "还没有标签。",
    "tags.pageTitle": "标签：{name}",
    "tags.metaDesc": "带有「{name}」标签的文章。",

    // ── 归档 ──
    "archives.title": "归档",
    "archives.subtitle": "按时间顺序浏览所有文章",
    "archives.years": "{count} 年",
    "archives.empty": "还没有归档内容。",

    // ── 相册 ──
    "galleries.title": "相册",
    "galleries.all": "全部相册",
    "galleries.subtitle": "分享瞬间与项目的图片集。",
    "galleries.count": "{count} 个相册",
    "galleries.empty": "还没有相册。",
    "galleries.photos": "{count} 张照片",

    // ── 搜索 ──
    "search.title": "搜索",
    "search.placeholder": "搜索文章…",
    "search.noResults": "没有找到相关内容",
    "search.results": "搜索结果",
    "search.hint": "输入关键词开始搜索",
    "search.hintLong": "输入关键词，搜索文章、教程和想法…",
    "search.open": "打开",
    "search.navigate": "移动",
    "search.poweredBy": "搜索由",
    "search.subtitle": "在博客里查找任何文章、教程或想法。",

    // ── 文章详情 ──
    "post.edit": "编辑此文",
    "post.share": "分享",
    "post.tags": "标签",
    "post.toc": "目录",
    "post.backToTop": "回到顶部",
    "post.minutesRead": "约 {minutes} 分钟",
    "post.by": "作者",
    "post.published": "发布于",
    "post.updated": "更新于",

    // ── 关于 ──
    "about.title": "关于",
    "about.description": "这个站点是什么，以及这里会写些什么。",

    // ── 404 ──
    "404.title": "页面走丢了",
    "404.description": "你访问的页面不存在，或者已经被移走了。",
    "404.back": "回到首页",

    // ── 页脚 ──
    "footer.tagline": "停车场而已。",
    "footer.connect": "联系",
    "footer.madeWith": "用 ♥ 和大量咖啡做成",
    "footer.rights": "保留所有权利",
    "footer.poweredBy": "由",
    "footer.and": "和",
    "footer.builtWith": "构建",
    "footer.rss": "订阅",

    // ── 通用 ──
    "common.readMore": "阅读全文",
    "common.loading": "加载中…",
    "common.close": "关闭",
    "common.copy": "复制",
    "common.copied": "已复制",
  },

  en: {
    // ── Site identity ──
    "site.title": "FomalhautBell",
    "site.author": "FomalhautBell",

    "nav.posts": "Posts",
    "nav.tags": "Tags",
    "nav.about": "About",
    "nav.search": "Search",
    "nav.archives": "Archives",
    "nav.galleries": "Galleries",
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.openMenu": "Open Menu",
    "nav.closeMenu": "Close Menu",
    "nav.skipToContent": "Skip to content",
    "nav.themeLight": "Switch to light mode",
    "nav.themeDark": "Switch to dark mode",
    "nav.language": "Switch language",

    "breadcrumb.home": "Home",
    "breadcrumb.back": "Back",
    "breadcrumb.goBack": "Go back to the previous page",

    "pagination.prev": "Previous",
    "pagination.next": "Next",
    "pagination.page": "Page {page}",

    "home.description":
      "A space where curiosity turns into code. Exploring web development, software architecture, and everything that makes the tech world go round.",
    "home.writtenBy": "Written by",
    "home.featured": "Featured",
    "home.recent": "Recent",
    "home.exploreAll": "Explore all posts",
    "home.featuredPosts": "Featured posts",
    "home.recentPosts": "Recent posts",

    "posts.title": "Posts",
    "posts.all": "All posts",
    "posts.count": "{count} posts",
    "posts.empty": "No posts yet.",
    "posts.emptyHint": "New writing is on the way — check back soon.",
    "posts.pageOf": "Page {current} of {total}",
    "posts.metaDesc": "All the articles I have published.",
    "posts.metaDescPaged": "All published articles (page {current} of {total}).",

    "tags.title": "Tags",
    "tags.all": "All tags",
    "tags.subtitle": "Explore all blog topics. Each tag is a universe of content.",
    "tags.count": "{count} tags",
    "tags.pageDesc": "All the articles with the tag “{name}”.",
    "tags.empty": "No tags yet.",
    "tags.pageTitle": "Tag: {name}",
    "tags.metaDesc": "Articles tagged with “{name}”.",

    "archives.title": "Archives",
    "archives.subtitle": "Everything, in chronological order",
    "archives.years": "{count} years",
    "archives.empty": "Nothing archived yet.",

    "galleries.title": "Galleries",
    "galleries.all": "All galleries",
    "galleries.subtitle": "Image collections to share moments and projects.",
    "galleries.count": "{count} galleries",
    "galleries.empty": "No galleries yet.",
    "galleries.photos": "{count} photos",

    "search.title": "Search",
    "search.placeholder": "Search posts…",
    "search.noResults": "No results found",
    "search.results": "Results",
    "search.hint": "Type a keyword to start searching",
    "search.hintLong": "Type to search for articles, tutorials, and ideas…",
    "search.open": "open",
    "search.navigate": "navigate",
    "search.poweredBy": "powered by",
    "search.subtitle": "Find any article, tutorial, or idea on the blog.",

    "post.edit": "Edit this post",
    "post.share": "Share",
    "post.tags": "Tags",
    "post.toc": "Table of contents",
    "post.backToTop": "Back to top",
    "post.minutesRead": "{minutes} min read",
    "post.by": "Written by",
    "post.published": "Published",
    "post.updated": "Updated",

    "about.title": "About",
    "about.description": "What this site is and what gets written here.",

    "404.title": "Page not found",
    "404.description": "The page you were looking for does not exist or has moved.",
    "404.back": "Back to home",

    "footer.tagline": "Notes on code, systems, and the occasional detour.",
    "footer.connect": "Connect",
    "footer.madeWith": "Made with ♥ and lots of coffee",
    "footer.rights": "All rights reserved",
    "footer.poweredBy": "Powered by",
    "footer.and": "and",
    "footer.builtWith": "Built with",
    "footer.rss": "RSS",

    "common.readMore": "Read more",
    "common.loading": "Loading…",
    "common.close": "Close",
    "common.copy": "Copy",
    "common.copied": "Copied",
  },
} as const;

export type UIKey = keyof (typeof ui)["zh-CN"];
