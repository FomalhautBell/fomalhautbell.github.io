/**
 * 计算文章的预计阅读时长。
 * 中文按字符数、西文按单词数分别估算，再取整。
 *
 * @param body - 原始 markdown/MDX 内容
 * @param cjkCharsPerMinute - 中文阅读速度（默认 350 字/分钟）
 * @param wordsPerMinute - 西文阅读速度（默认 200 词/分钟）
 * @returns 分钟数（至少 1）
 */
export function getReadingTimeMinutes(
  body: string,
  cjkCharsPerMinute = 350,
  wordsPerMinute = 200
): number {
  // 去掉 frontmatter
  const withoutFrontmatter = body.replace(/^---[\s\S]*?---\n?/, "");

  // 去掉不是正文的 markdown/MDX 语法
  const plainText = withoutFrontmatter
    .replace(/```[\s\S]*?```/g, "") // 代码块
    .replace(/`[^`]*`/g, "") // 行内代码
    .replace(/!\[.*?\]\(.*?\)/g, "") // 图片
    .replace(/\[.*?\]\(.*?\)/g, "$1") // 链接保留文字
    .replace(/^#{1,6}\s+/gm, "") // 标题标记
    .replace(/[*_~]{1,3}([^*_~]+)[*_~]{1,3}/g, "$1") // 粗体/斜体
    .replace(/^\s*[-*+>|]\s*/gm, "") // 列表、引用、表格
    .replace(/\s+/g, " ")
    .trim();

  const cjkPattern = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g;
  const cjkCount = (plainText.match(cjkPattern) || []).length;
  const latinCount = plainText
    .replace(cjkPattern, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = cjkCount / cjkCharsPerMinute + latinCount / wordsPerMinute;
  return Math.max(1, Math.ceil(minutes));
}
