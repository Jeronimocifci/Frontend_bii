// Datos del negocio que aparecen en "Para negocios", "Preguntas frecuentes" y "Pedido".
// Si un dato está en null, esa parte NO se muestra en la página.
// Escribe cada texto en español (es) y en inglés (en).
import type { Lang } from '../i18n/config';

type Localized = Record<Lang, string> | null;

export const BUSINESS_INFO: {
  /** Pedido mínimo al por mayor, en unidades (null = no se muestra) */
  minOrderUnits: number | null;
  /** Cuánto duran los productos. Ej: { es: '15 días refrigerados', en: '15 days refrigerated' } */
  shelfLife: Localized;
  /** Cómo se conservan. Ej: { es: 'Siempre refrigerados entre 2 y 6 °C', en: '...' } */
  storage: Localized;
  /** Zonas y costo de entrega. Ej: { es: 'Pereira y Dosquebradas, sin costo desde 24 unidades', en: '...' } */
  delivery: Localized;
  /** Formas de pago. Ej: { es: 'Efectivo, Nequi y transferencia', en: 'Cash, Nequi and bank transfer' } */
  payment: Localized;
} = {
  minOrderUnits: null,
  shelfLife: null,
  storage: null,
  delivery: null,
  payment: null,
};
