"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import Sidebar from "../sidebar";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Puntos de venta", href: "/puntos" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const pathnameRaw = usePathname() ?? "/";
  const pathname = pathnameRaw.replace(/\/$/, "") || "/";

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
        className="w-full bg-white shadow-md fixed top-0 left-0 z-50"
        style={{ minHeight: "4rem" }}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <Logo />

          {/* Nav desktop */}
          <nav className="hidden md:flex h-full items-center">
            <ul className="flex items-center list-none m-0 p-0 h-full" style={{ gap: "1.8rem" }}>
              {NAV_ITEMS.map((item) => {
                const hrefNormalized = item.href.replace(/\/$/, "") || "/";
                const isActive =
                  hrefNormalized === "/"
                    ? pathname === "/"
                    : pathname === hrefNormalized || pathname.startsWith(hrefNormalized + "/");

                const classes = [
                  "font-bold",
                  "text-xl",
                  "transition-colors",
                  "no-underline",
                  isActive ? "text-brand-light" : "text-neutral-dark",
                  "hover:text-brand-light",
                ].join(" ");

                return (
                  <li key={item.href}>
                    <Link href={item.href} className={classes} aria-current={isActive ? "page" : undefined}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Botón hamburguesa móvil */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-brand hover:bg-gray-100 transition-colors"
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* spacer dinámico */}
      <div aria-hidden style={{ height }} />

      {/* Sidebar móvil */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
