import { Lang, RouteKey, routePath } from "../../i18n/config";
import { getDictionary } from "../../i18n/dictionaries";

/** Barra superior en computador (el logo ya lleva al inicio). */
const DESKTOP: RouteKey[] = ["products", "business", "about", "whereToBuy", "contact"];
/** Menú lateral en celular. */
const MOBILE: RouteKey[] = ["home", "products", "business", "faq", "about", "whereToBuy", "contact"];
/** Pie de página. */
const FOOTER: RouteKey[] = ["home", "products", "business", "faq", "about", "whereToBuy", "contact"];

const build = (lang: Lang, keys: RouteKey[]) => {
  const t = getDictionary(lang).nav;
  return keys.map((key) => ({ key, label: t[key], href: routePath(lang, key) }));
};

export const getNavItems = (lang: Lang, place: "desktop" | "mobile" | "footer" = "desktop") =>
  build(lang, place === "desktop" ? DESKTOP : place === "mobile" ? MOBILE : FOOTER);

const normalize = (p: string) => p.replace(/\/$/, "") || "/";

export const isActivePath = (pathname: string, href: string, homeHref: string) => {
  const path = normalize(pathname);
  const target = normalize(href);
  if (target === normalize(homeHref)) return path === target;
  return path === target || path.startsWith(target + "/");
};
