// Información de productos tomada de las etiquetas reales.
// Si cambia una etiqueta (ingredientes, tamaño, sellos), actualízala aquí.

export type ProductCategory = 'jugo' | 'smoothie';

export interface ProductInfo {
  id: string;
  name: string;
  /** Denominación exacta de la etiqueta */
  type: string;
  category: ProductCategory;
  description: string;
  imageUrl: string;
  /** Contenido neto en ml */
  volumeMl: number;
  /** Precio por unidad al por mayor en COP */
  wholesalePrice: number;
  /** Color de fondo de la tarjeta (tono de la botella) */
  accent: string;
  /** Ingredientes listados en la etiqueta (si los trae) */
  ingredients?: string[];
  /** Sellos/declaraciones que se muestran como etiquetas en la ficha */
  labelClaims?: string[];
}

/** Cambiar a true para volver a mostrar los precios en la página */
export const SHOW_PRICES = false;

export const JUGO_PRICE = 5400;
export const SMOOTHIE_PRICE = 6500;

export const formatCOP = (value: number) => `$${value.toLocaleString('es-CO')}`;

export const MOCK_PRODUCTS: ProductInfo[] = [
  {
    id: '1',
    name: 'Selva Mora',
    type: 'Néctar de mora',
    category: 'jugo',
    description: 'El sabor intenso de la mora colombiana, listo para destapar. Agítalo y sírvelo bien frío.',
    imageUrl: '/productos/mora.jpg',
    volumeMl: 350,
    wholesalePrice: JUGO_PRICE,
    accent: '#F3E6F1',
    labelClaims: ['100% natural'],
  },
  {
    id: '2',
    name: '3 Soles',
    type: 'Néctar de mango, piña y maracuyá',
    category: 'jugo',
    description: 'Tres frutas tropicales en una sola botella: el dulce del mango, la frescura de la piña y el toque ácido de la maracuyá.',
    imageUrl: '/productos/3_soles.jpg',
    volumeMl: 350,
    wholesalePrice: JUGO_PRICE,
    accent: '#FCF6D4',
    labelClaims: ['100% natural'],
  },
  {
    id: '3',
    name: 'Trópico Mango',
    type: 'Néctar de mango',
    category: 'jugo',
    description: 'Mango maduro, suave y dulce. Un clásico que nunca falla.',
    imageUrl: '/productos/mango.jpg',
    volumeMl: 350,
    wholesalePrice: JUGO_PRICE,
    accent: '#FDEFD2',
    labelClaims: ['100% natural'],
  },
  {
    id: '4',
    name: 'Maracuyá',
    type: 'Néctar de maracuyá',
    category: 'jugo',
    description: 'El equilibrio ácido-dulce de la maracuyá, refrescante a cualquier hora.',
    imageUrl: '/productos/maracuya.jpg',
    volumeMl: 350,
    wholesalePrice: JUGO_PRICE,
    accent: '#FAF3DA',
    labelClaims: ['100% natural'],
  },
  {
    id: '5',
    name: 'Smoothie Verde',
    type: 'Mezcla de zumo de frutas y verduras',
    category: 'smoothie',
    description: 'Frutas y verduras frescas en una mezcla verde, sin azúcar ni agua añadida.',
    imageUrl: '/productos/smoothie_verde.jpg',
    volumeMl: 220,
    wholesalePrice: SMOOTHIE_PRICE,
    accent: '#E3EFE0',
    ingredients: ['Manzana', 'Piña', 'Pepino', 'Lulo', 'Guayaba', 'Brócoli', 'Acelga', 'Perejil'],
    labelClaims: ['Sin azúcar añadida', 'Cero agua añadida', '100% vegetales'],
  },
  {
    id: '6',
    name: 'Toro Negro',
    type: 'Néctar de manzana, tamarindo y jengibre',
    category: 'smoothie',
    description: 'Manzana, tamarindo y un golpe de jengibre. Una mezcla con carácter.',
    imageUrl: '/productos/toro_negro.jpg',
    volumeMl: 220,
    wholesalePrice: SMOOTHIE_PRICE,
    accent: '#F6E1E1',
    ingredients: ['Manzana', 'Tamarindo', 'Jengibre'],
    labelClaims: ['Sin azúcar añadida', 'Cero agua añadida', '100% fruta real'],
  },
];

export const getProduct = (id: string) => MOCK_PRODUCTS.find((p) => p.id === id);
export const productsByCategory = (category: ProductCategory) =>
  MOCK_PRODUCTS.filter((p) => p.category === category);
