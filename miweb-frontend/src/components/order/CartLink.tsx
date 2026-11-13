"use client";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../../lib/cart";
import { Lang, routePath } from "../../i18n/config";
import { getDictionary } from "../../i18n/dictionaries";

/** Botón "Mi pedido" con el número de unidades, para la barra de navegación. */
export default function CartLink({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const { totalUnits } = useCart();
  const t = getDictionary(lang).nav;
  const label = totalUnits > 0 ? `${t.order} (${totalUnits})` : t.order;

  return (
    <Link
      href={routePath(lang, "order")}
      aria-label={label}
      className={`relative inline-flex items-center gap-2 rounded-full bg-brand text-white font-semibold hover:bg-brand-medium transition-colors ${
        compact ? "p-2.5" : "px-4 py-2 text-sm"
      }`}
    >
      <ShoppingBag size={compact ? 20 : 16} />
      {!compact && <span>{t.order}</span>}
      {totalUnits > 0 && (
        <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-full bg-accent-mango text-white text-[11px] font-bold flex items-center justify-center">
          {totalUnits}
        </span>
      )}
    </Link>
  );
}
