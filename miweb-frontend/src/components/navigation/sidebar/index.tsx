"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import LanguageSwitcher from "../LanguageSwitcher";
import { getNavItems, isActivePath } from "../navItems";
import { Lang, routePath } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/dictionaries";

interface SidebarProps {
  lang: Lang;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ lang, isOpen, onClose }: SidebarProps) {
  const pathname = usePathname() ?? "/";
  const items = getNavItems(lang, "mobile");
  const home = routePath(lang, "home");
  const t = getDictionary(lang).nav;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel lateral */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={t.menuLabel}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-xl font-bold text-brand">bii</span>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-500 hover:text-brand hover:bg-gray-100 transition-colors"
            aria-label={t.closeMenu}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="px-6 py-6">
          <ul className="space-y-2">
            {items.map((item) => {
              const isActive = isActivePath(pathname, item.href, home);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-lg text-lg font-semibold transition-colors ${
                      isActive ? "bg-brand text-white" : "text-gray-700 hover:bg-gray-100 hover:text-brand"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <LanguageSwitcher lang={lang} variant="mobile" onNavigate={onClose} />
          </div>
        </nav>
      </div>
    </>
  );
}
