export interface ProductInfo {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  /** Precio al por mayor en COP */
  wholesalePrice: number;
}

export const JUGO_PRICE = 5400;
export const SMOOTHIE_PRICE = 6500;

export const formatCOP = (value: number) =>
  `$${value.toLocaleString('es-CO')}`;

export const MOCK_PRODUCTS: ProductInfo[] = [
  {
    id: '1',
    name: 'Jugo de mora',
    description: 'Intenso y Refrescante. Disfruta del sabor natural de la mora en cada sorbo, rico en antioxidantes y vitaminas.',
    imageUrl: '/productos/mora.jpg',
    wholesalePrice: JUGO_PRICE,
  },
  {
    id: '2',
    name: '3 soles',
    description: 'Exótico y Energizante. Una mezcla única de sabores tropicales que te dará la energía que necesitas.',
    imageUrl: '/productos/3_soles.jpg',
    wholesalePrice: JUGO_PRICE,
  },
  {
    id: '3',
    name: 'Jugo de mango',
    description: 'Tropical y Revitalizante. El dulce sabor del mango maduro en su máxima expresión, lleno de vitamina C.',
    imageUrl: '/productos/mango.jpg',
    wholesalePrice: JUGO_PRICE,
  },
  {
    id: '4',
    name: 'Jugo de maracuyá',
    description: 'Exótico y Refrescante. El intenso sabor ácido-dulce de la maracuyá que despierta todos tus sentidos.',
    imageUrl: '/productos/maracuya.jpg',
    wholesalePrice: JUGO_PRICE,
  },
  {
    id: '5',
    name: 'Smoothie Verde',
    description: 'Batido de espinacas, manzana y plátano para un inicio de día potente. Rica fuente de hierro y vitaminas.',
    imageUrl: '/productos/smoothie_verde.jpg',
    wholesalePrice: SMOOTHIE_PRICE,
  },
  {
    id: '6',
    name: 'Toro Negro',
    description: 'Mezcla de fresas, arándanos y leche de almendras, ideal para el post-entreno. Alto contenido de antioxidantes.',
    imageUrl: '/productos/toro_negro.jpg',
    wholesalePrice: SMOOTHIE_PRICE,
  },
];
