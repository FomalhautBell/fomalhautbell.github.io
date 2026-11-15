import { DEFAULT_LANG, LANGS, ui, type Lang, type UIKey } from "./ui";

export { LANGS, DEFAULT_LANG, ui };
export type { Lang, UIKey };

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value);
}

/** 从 URL 的第一段解析语言，取不到就回落到默认语言 */
export function getLangFromUrl(url: URL | string): Lang {
  const pathname = typeof url === "string" ? url : url.pathname;
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLang(segment) ? segment : DEFAULT_LANG;
}

export function useTranslations(lang: Lang) {
  const dict = ui[lang] ?? ui[DEFAULT_LANG];
  return function t(key: UIKey, vars?: Record<string, string | number>): string {
    let text: string = dict[key] ?? ui[DEFAULT_LANG][key] ?? key;
    if (vars) {
      for (const [name, value] of Object.entries(vars)) {
        text = text.replaceAll(`{${name}}`, String(value));
      }
    }
    return text;
  };
}

/** 把站内绝对路径挂上语言前缀 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const stripped = LANGS.some(l => clean === `/${l}` || clean.startsWith(`/${l}/`))
    ? clean.replace(new RegExp(`^/(${LANGS.join("|")})`), "")
    : clean;
  const rest = stripped === "" ? "/" : stripped;
  return rest === "/" ? `/${lang}/` : `/${lang}${rest}`;
}

/** 在两种语言之间切换同一个页面 */
export function switchLangPath(pathname: string, target: Lang): string {
  const parts = pathname.split("/").filter(Boolean);
  // 没有语言前缀的页面（例如 404）没有对应译本，直接回到目标语言首页
  if (!isLang(parts[0])) return `/${target}/`;
  parts.shift();
  const rest = parts.length ? `/${parts.join("/")}` : "/";
  return rest === "/" ? `/${target}/` : `/${target}${rest}`;
}

/** 去掉语言前缀，得到语言无关的路径 */
export function stripLang(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (isLang(parts[0])) parts.shift();
  return parts.length ? `/${parts.join("/")}` : "/";
}
