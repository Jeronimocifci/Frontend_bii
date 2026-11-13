import { Lang, RouteKey, routePath } from "../../i18n/config";
import { getDictionary } from "../../i18n/dictionaries";

const KEYS: RouteKey[] = ["home", "products", "about", "whereToBuy", "contact"];

export const getNavItems = (lang: Lang) => {
  const t = getDictionary(lang).nav;
  return KEYS.map((key) => ({ label: t[key], href: routePath(lang, key) }));
};

const normalize = (p: string) => p.replace(/\/$/, "") || "/";

export const isActivePath = (pathname: string, href: string, homeHref: string) => {
  const path = normalize(pathname);
  const target = normalize(href);
  if (target === normalize(homeHref)) return path === target;
  return path === target || path.startsWith(target + "/");
};
