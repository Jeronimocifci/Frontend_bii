"use client";
// Pedido armado en el navegador del cliente (no hay pagos: se envía por WhatsApp).
// Se guarda en localStorage para que no se pierda al navegar entre páginas.
import { useSyncExternalStore } from "react";

export type Cart = Record<string, number>;

const KEY = "bii-cart";
const EVENT = "bii-cart-change";
const EMPTY: Cart = {};

let cache: Cart | null = null;

function read(): Cart {
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as Cart) : {};
    cache = typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    cache = {};
  }
  return cache;
}

function write(next: Cart) {
  const clean: Cart = {};
  for (const [id, qty] of Object.entries(next)) {
    const n = Math.max(0, Math.min(999, Math.floor(qty)));
    if (n > 0) clean[id] = n;
  }
  cache = clean;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(clean));
  } catch {
    // Sin almacenamiento disponible: el pedido vive solo en memoria.
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(callback: () => void) {
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = null;
      callback();
    }
  };
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", onStorage);
  };
}

export function useCart() {
  const cart = useSyncExternalStore(subscribe, read, () => EMPTY);
  const totalUnits = Object.values(cart).reduce((a, b) => a + b, 0);
  return {
    cart,
    totalUnits,
    setQty: (id: string, qty: number) => write({ ...read(), [id]: qty }),
    add: (id: string, qty = 1) => write({ ...read(), [id]: (read()[id] ?? 0) + qty }),
    clear: () => write({}),
  };
}
