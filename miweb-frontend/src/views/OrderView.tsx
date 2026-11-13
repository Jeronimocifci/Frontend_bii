"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import QuantityStepper from "../components/order/QuantityStepper";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { useCart } from "../lib/cart";
import { getProducts, ProductInfo } from "../dataProducts";
import { whatsappUrl } from "@/config/contact";
import { BUSINESS_INFO } from "@/config/business";
import { Lang, productPath } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition";

export default function OrderView({ lang }: { lang: Lang }) {
  const d = getDictionary(lang);
  const t = d.order;
  const { cart, totalUnits, setQty, clear } = useCart();
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [notes, setNotes] = useState("");

  const products = getProducts(lang);
  const groups: { title: string; items: ProductInfo[] }[] = [
    { title: d.products.juicesTitle, items: products.filter((p) => p.category === "jugo") },
    { title: d.products.smoothiesTitle, items: products.filter((p) => p.category === "smoothie") },
  ];
  const lines = products.filter((p) => (cart[p.id] ?? 0) > 0);

  const min = BUSINESS_INFO.minOrderUnits;
  const missing = min ? Math.max(0, min - totalUnits) : 0;

  const message = [
    d.whatsapp.orderIntro,
    "",
    ...lines.map((p) => `• ${cart[p.id]} x ${p.name} (${p.volumeMl} ml)`),
    "",
    d.whatsapp.orderTotal(totalUnits),
    name.trim() ? `*${d.whatsapp.orderName}:* ${name.trim()}` : null,
    place.trim() ? `*${d.whatsapp.orderPlace}:* ${place.trim()}` : null,
    notes.trim() ? `*${d.whatsapp.orderNotes}:* ${notes.trim()}` : null,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  return (
    <div className="px-4 md:px-8 py-10 md:py-14 bg-neutral-light min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">{t.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl">{t.intro}</p>
        </header>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-8 items-start">
          {/* Productos */}
          <div className="space-y-8 min-w-0">
            {groups.map((group) => (
              <section key={group.title}>
                <h2 className="text-xl font-bold text-brand mb-3">{group.title}</h2>
                <ul className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
                  {group.items.map((p) => (
                    <li key={p.id} className="flex items-center gap-3 md:gap-4 p-3 md:p-4">
                      <Link
                        href={productPath(lang, p.id)}
                        className="relative w-16 h-20 md:w-20 md:h-24 shrink-0 rounded-xl overflow-hidden"
                        style={{ backgroundColor: p.accent }}
                      >
                        <Image
                          src={p.imageUrl}
                          alt={p.name}
                          fill
                          sizes="80px"
                          className="object-contain mix-blend-multiply p-1.5"
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900">{p.name}</p>
                        <p className="text-sm text-gray-500 truncate">
                          {p.type} · {p.volumeMl} ml
                        </p>
                      </div>
                      <QuantityStepper
                        value={cart[p.id] ?? 0}
                        onChange={(v) => setQty(p.id, v)}
                        labels={t}
                        name={p.name}
                        size="sm"
                      />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {/* Resumen */}
          <aside className="min-w-0 bg-white rounded-2xl shadow-sm p-5 md:p-6 lg:sticky lg:top-28">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">{t.summaryTitle}</h2>
              {totalUnits > 0 && (
                <button
                  type="button"
                  onClick={clear}
                  className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-accent-mora transition-colors"
                >
                  <Trash2 size={14} /> {t.clear}
                </button>
              )}
            </div>

            {lines.length === 0 ? (
              <p className="text-gray-500 mb-6">{t.empty}</p>
            ) : (
              <ul className="space-y-2 mb-4">
                {lines.map((p) => (
                  <li key={p.id} className="flex justify-between gap-3 text-gray-700">
                    <span>
                      {p.name} <span className="text-gray-400">({p.volumeMl} ml)</span>
                    </span>
                    <span className="font-semibold">× {cart[p.id]}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex justify-between border-t border-gray-100 pt-3 mb-5 font-bold text-gray-900">
              <span>{t.total}</span>
              <span>{t.units(totalUnits)}</span>
            </div>

            {min && totalUnits > 0 && missing > 0 && (
              <p className="text-sm bg-accent-citrus/15 text-gray-800 rounded-lg px-3 py-2 mb-5">
                {t.minNotice(min, missing)}
              </p>
            )}

            <div className="space-y-3 mb-5">
              <div>
                <label htmlFor="order-name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.nameLabel}
                </label>
                <input
                  id="order-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="order-place" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.placeLabel}
                </label>
                <input
                  id="order-place"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  placeholder={t.placePlaceholder}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="order-notes" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.notesLabel}
                </label>
                <textarea
                  id="order-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.notesPlaceholder}
                  rows={2}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            {totalUnits > 0 ? (
              <a
                href={whatsappUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] transition-colors text-white font-semibold py-4 rounded-xl text-lg"
              >
                <WhatsAppIcon /> {t.send}
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="w-full inline-flex items-center justify-center gap-3 bg-gray-200 text-gray-500 font-semibold py-4 rounded-xl text-lg cursor-not-allowed"
              >
                <WhatsAppIcon /> {t.send}
              </button>
            )}
            <p className="text-xs text-gray-500 text-center mt-3">{t.sendHelp}</p>
          </aside>
        </div>
      </div>
    </div>
  );
}
