"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import Sidebar from "../sidebar";
import LanguageSwitcher from "../LanguageSwitcher";
import OrderPortalLink from "../../OrderPortalLink";
import { getNavItems, isActivePath } from "../navItems";
import { Lang, routePath } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/dictionaries";

export default function Navbar({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? "/";
  const items = getNavItems(lang);
  const home = routePath(lang, "home");
  const t = getDictionary(lang).nav;

  const headerRef = useRef<HTMLElement | null>(null);
  const [height, setHeight] = useState<number>(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      const h = headerRef.current?.getBoundingClientRect().height ?? 0;
      setHeight(h);
      document.documentElement.style.setProperty("--navbar-height", `${h}px`);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("orientationchange", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("orientationchange", updateHeight);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="w-full bg-white shadow-md fixed top-0 left-0 z-50 flex items-center"
        style={{ minHeight: "5rem" }}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <Logo href={home} alt={t.logoAlt} />

          {/* Nav desktop */}
          <nav className="hidden md:flex h-full items-center gap-6">
            <ul className="flex items-center list-none m-0 p-0 h-full" style={{ gap: "1.5rem" }}>
              {items.map((item) => {
                const isActive = isActivePath(pathname, item.href, home);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`font-semibold text-base transition-colors no-underline hover:text-brand-light ${
                        isActive ? "text-brand-light" : "text-neutral-dark"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <OrderPortalLink
              label={t.order}
              iconSize={16}
              className="rounded-full bg-brand text-white text-sm font-semibold px-4 py-2 hover:bg-brand-medium transition-colors"
            />
            <LanguageSwitcher lang={lang} />
          </nav>

          {/* Móvil: pedido + menú */}
          <div className="md:hidden flex items-center gap-2">
          <OrderPortalLink
            label={t.order}
            iconOnly
            iconSize={20}
            className="rounded-full bg-brand text-white p-2.5 hover:bg-brand-medium transition-colors"
          />
          <button
            className="p-2 rounded-md text-gray-600 hover:text-brand hover:bg-gray-100 transition-colors"
            onClick={() => setSidebarOpen(true)}
            aria-label={t.openMenu}
          >
            <Menu size={28} />
          </button>
          </div>
        </div>
      </header>

      {/* spacer dinámico */}
      <div aria-hidden style={{ height }} />

      {/* Sidebar móvil */}
      <Sidebar lang={lang} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
