"use client";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Puntos de venta", href: "/puntos" },
  { label: "Contacto", href: "/contacto" },
];

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Links */}
          <nav className="flex items-center">
            <ul className="flex items-center gap-x-12 list-none m-0 p-0">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="mr-12 last:mr-0">
                  <Link
                    href={item.href}
                    className="font-bold text-xl text-black no-underline hover:text-emerald-600 hover:no-underline transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

