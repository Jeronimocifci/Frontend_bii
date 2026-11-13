"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { alternatePath, Lang } from "../../i18n/config";
import { getDictionary } from "../../i18n/dictionaries";

interface LanguageSwitcherProps {
  lang: Lang;
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}

/** Enlace a la misma página en el otro idioma. */
export default function LanguageSwitcher({ lang, variant = "desktop", onNavigate }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const target: Lang = lang === "es" ? "en" : "es";
  const t = getDictionary(lang).nav;
  const href = alternatePath(pathname, target);

  if (variant === "mobile") {
    return (
      <Link
        href={href}
        hrefLang={target}
        onClick={onNavigate}
        aria-label={t.switchAria}
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-semibold text-gray-700 hover:bg-gray-100 hover:text-brand transition-colors"
      >
        <Globe size={20} />
        {t.switchTo}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      hrefLang={target}
      aria-label={t.switchAria}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 text-sm font-semibold text-neutral-dark hover:border-brand hover:text-brand transition-colors"
    >
      <Globe size={16} />
      {t.switchToShort}
    </Link>
  );
}
