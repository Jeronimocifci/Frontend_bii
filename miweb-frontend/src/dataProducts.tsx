// Información de productos tomada de las etiquetas reales.
// Si cambia una etiqueta (ingredientes, tamaño, sellos), actualízala aquí en los dos idiomas.
import type { Lang } from './i18n/config';

export type ProductCategory = 'jugo' | 'smoothie';

/** Textos de un producto que cambian según el idioma */
interface ProductText {
  /** Denominación de la etiqueta */
  type: string;
  description: string;
  /** Ingredientes listados en la etiqueta (si los trae) */
  ingredients?: string[];
  /** Sellos/declaraciones que se muestran como etiquetas en la ficha */
  labelClaims?: string[];
}

interface ProductBase {
  id: string;
  /** Nombre comercial (igual en todos los idiomas) */
  name: string;
  category: ProductCategory;
  imageUrl: string;
  /** Contenido neto en ml */
  volumeMl: number;
  /** Precio por unidad al por mayor en COP */
  wholesalePrice: number;
  /** Color de fondo de la tarjeta (tono de la botella) */
  accent: string;
  text: Record<Lang, ProductText>;
}

/** Producto con los textos ya en el idioma elegido */
export type ProductInfo = Omit<ProductBase, 'text'> & ProductText;

/** Cambiar a true para volver a mostrar los precios en la página */
export const SHOW_PRICES = false;

export const JUGO_PRICE = 5400;
export const SMOOTHIE_PRICE = 6500;

export const formatCOP = (value: number) => `$${value.toLocaleString('es-CO')}`;

const PRODUCTS: ProductBase[] = [
  {
    id: '1',
    name: 'Selva Mora',
    category: 'jugo',
    imageUrl: '/productos/mora.jpg',
    volumeMl: 350,
    wholesalePrice: JUGO_PRICE,
    accent: '#F3E6F1',
    text: {
      es: {
        type: 'Néctar de mora',
        description: 'El sabor intenso de la mora colombiana, listo para destapar. Agítalo y sírvelo bien frío.',
        labelClaims: ['100% natural'],
      },
      en: {
        type: 'Blackberry nectar',
        description: 'The bold flavor of Colombian blackberry, ready to drink. Shake well and serve chilled.',
        labelClaims: ['100% natural'],
      },
    },
  },
  {
    id: '2',
    name: '3 Soles',
    category: 'jugo',
    imageUrl: '/productos/3_soles.jpg',
    volumeMl: 350,
    wholesalePrice: JUGO_PRICE,
    accent: '#FCF6D4',
    text: {
      es: {
        type: 'Néctar de mango, piña y maracuyá',
        description:
          'Tres frutas tropicales en una sola botella: el dulce del mango, la frescura de la piña y el toque ácido de la maracuyá.',
        labelClaims: ['100% natural'],
      },
      en: {
        type: 'Mango, pineapple and passion fruit nectar',
        description:
          'Three tropical fruits in one bottle: sweet mango, refreshing pineapple and a tangy touch of passion fruit.',
        labelClaims: ['100% natural'],
      },
    },
  },
  {
    id: '3',
    name: 'Trópico Mango',
    category: 'jugo',
    imageUrl: '/productos/mango.jpg',
    volumeMl: 350,
    wholesalePrice: JUGO_PRICE,
    accent: '#FDEFD2',
    text: {
      es: {
        type: 'Néctar de mango',
        description: 'Mango maduro, suave y dulce. Un clásico que nunca falla.',
        labelClaims: ['100% natural'],
      },
      en: {
        type: 'Mango nectar',
        description: 'Ripe mango, smooth and sweet. A classic that never fails.',
        labelClaims: ['100% natural'],
      },
    },
  },
  {
    id: '4',
    name: 'Maracuyá',
    category: 'jugo',
    imageUrl: '/productos/maracuya.jpg',
    volumeMl: 350,
    wholesalePrice: JUGO_PRICE,
    accent: '#FAF3DA',
    text: {
      es: {
        type: 'Néctar de maracuyá',
        description: 'El equilibrio ácido-dulce de la maracuyá, refrescante a cualquier hora.',
        labelClaims: ['100% natural'],
      },
      en: {
        type: 'Passion fruit nectar',
        description: 'The sweet-and-tangy balance of passion fruit, refreshing at any time of day.',
        labelClaims: ['100% natural'],
      },
    },
  },
  {
    id: '5',
    name: 'Smoothie Verde',
    category: 'smoothie',
    imageUrl: '/productos/smoothie_verde.jpg',
    volumeMl: 220,
    wholesalePrice: SMOOTHIE_PRICE,
    accent: '#E3EFE0',
    text: {
      es: {
        type: 'Mezcla de zumo de frutas y verduras',
        description: 'Frutas y verduras frescas en una mezcla verde, sin azúcar ni agua añadida.',
        ingredients: ['Manzana', 'Piña', 'Pepino', 'Lulo', 'Guayaba', 'Brócoli', 'Acelga', 'Perejil'],
        labelClaims: ['Sin azúcar añadida', 'Cero agua añadida', '100% vegetales'],
      },
      en: {
        type: 'Fruit and vegetable juice blend',
        description: 'Fresh fruits and vegetables in a green blend, with no added sugar or water.',
        ingredients: ['Apple', 'Pineapple', 'Cucumber', 'Lulo', 'Guava', 'Broccoli', 'Chard', 'Parsley'],
        labelClaims: ['No added sugar', 'Zero added water', '100% plant-based'],
      },
    },
  },
  {
    id: '6',
    name: 'Toro Negro',
    category: 'smoothie',
    imageUrl: '/productos/toro_negro.jpg',
    volumeMl: 220,
    wholesalePrice: SMOOTHIE_PRICE,
    accent: '#F6E1E1',
    text: {
      es: {
        type: 'Néctar de manzana, tamarindo y jengibre',
        description: 'Manzana, tamarindo y un golpe de jengibre. Una mezcla con carácter.',
        ingredients: ['Manzana', 'Tamarindo', 'Jengibre'],
        labelClaims: ['Sin azúcar añadida', 'Cero agua añadida', '100% fruta real'],
      },
      en: {
        type: 'Apple, tamarind and ginger nectar',
        description: 'Apple, tamarind and a kick of ginger. A blend with character.',
        ingredients: ['Apple', 'Tamarind', 'Ginger'],
        labelClaims: ['No added sugar', 'Zero added water', '100% real fruit'],
      },
    },
  },
];

const localize = (p: ProductBase, lang: Lang): ProductInfo => {
  const { text, ...rest } = p;
  return { ...rest, ...text[lang] };
};

export const PRODUCT_IDS = PRODUCTS.map((p) => p.id);

export const getProducts = (lang: Lang): ProductInfo[] => PRODUCTS.map((p) => localize(p, lang));

export const getProduct = (id: string, lang: Lang): ProductInfo | undefined => {
  const p = PRODUCTS.find((x) => x.id === id);
  return p ? localize(p, lang) : undefined;
};

export const productsByCategory = (category: ProductCategory, lang: Lang) =>
  getProducts(lang).filter((p) => p.category === category);
