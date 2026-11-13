"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, ShoppingBag } from "lucide-react";
import QuantityStepper from "./QuantityStepper";
import { useCart } from "../../lib/cart";
import { Lang, routePath } from "../../i18n/config";
import { getDictionary } from "../../i18n/dictionaries";

/** Selector de cantidad + "Agregar al pedido" para la ficha de producto. */
export default function AddToOrder({ id, name, lang }: { id: string; name: string; lang: Lang }) {
  const t = getDictionary(lang).order;
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <QuantityStepper value={qty} onChange={(v) => setQty(Math.max(1, v))} labels={t} name={name} />
        <button
          type="button"
          onClick={() => {
            add(id, qty);
            setAdded(true);
          }}
          className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-medium transition-colors text-white font-semibold px-6 py-3 rounded-xl text-lg"
        >
          {added ? <Check size={20} /> : <ShoppingBag size={20} />}
          {added ? t.added : t.addToOrder}
        </button>
      </div>
      {added && (
        <p className="text-sm">
          <Link href={routePath(lang, "order")} className="font-semibold text-brand hover:underline">
            {t.viewOrder} →
          </Link>
          <span className="text-gray-400 mx-2">·</span>
          <Link href={routePath(lang, "products")} className="text-gray-600 hover:underline">
            {t.orKeepBrowsing}
          </Link>
        </p>
      )}
    </div>
  );
}
