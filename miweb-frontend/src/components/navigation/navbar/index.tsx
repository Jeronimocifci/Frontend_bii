"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Puntos de venta", href: "/puntos" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const pathnameRaw = usePathname() ?? "/";
  // Normalizamos para evitar problemas con slash final
  const pathname = pathnameRaw.replace(/\/$/, "") || "/";

  const headerRef = useRef<HTMLElement | null>(null);
  const [height, setHeight] = useState<number>(0);

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
        style={{ minHeight: "5rem" }}
      >
        <div className="container mx-auto px-6 h-full flex items-center gap-4">
          <Logo />
          
          <div className="flex justify-start" style={{ 
            marginLeft: 'clamp(0px, calc(100vw - 900px), 800px)' 
          }}>
            <nav>
              <ul className="flex items-center list-none m-0 p-0" style={{ gap: "1.8rem" }}>
              {NAV_ITEMS.map((item) => {
                // normalizar href también
                const hrefNormalized = item.href.replace(/\/$/, "") || "/";
                const isActive =
                  hrefNormalized === "/"
                    ? pathname === "/"
                    : pathname === hrefNormalized || pathname.startsWith(hrefNormalized + "/");

                // Construimos clase con nombres literales para que Tailwind las vea
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
          </div>
        </div>
      </header>

      {/* spacer dinámico */}
      <div aria-hidden style={{ height }} />
    </>
  );
}

