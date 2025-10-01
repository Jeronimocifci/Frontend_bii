export interface ProductInfo {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export const MOCK_PRODUCTS: ProductInfo[] = [
  {
    id: '1',
    name: 'Jugo de mora',
    description: 'Intenso y Refrescante. Disfruta del sabor natural de la mora en cada sorbo, rico en antioxidantes y vitaminas.',
    imageUrl: '/example/mora.png',
  },
  {
    id: '2',
    name: '3 soles',
    description: 'Exótico y Energizante. Una mezcla única de sabores tropicales que te dará la energía que necesitas.',
    imageUrl: '/example/3_soles.png',
  },
  {
    id: '3',
    name: 'Jugo de mango',
    description: 'Tropical y Revitalizante. El dulce sabor del mango maduro en su máxima expresión, lleno de vitamina C.',
    imageUrl: '/example/mango.png',
  },
  {
    id: '4',
    name: 'Jugo de maracuyá',
    description: 'Exótico y Refrescante. El intenso sabor ácido-dulce de la maracuyá que despierta todos tus sentidos.',
    imageUrl: '/example/maracuya.png',
  },
  {
    id: '5', // ⬅️ Este es tu primer Smoothie
    name: 'Smoothie Verde Energía',
    description: 'Batido de espinacas, manzana y plátano para un inicio de día potente. Rica fuente de hierro y vitaminas.',
    imageUrl: '/example/smoothie_verde.jpg',
  },
  {
    id: '6', // ⬅️ Este es tu segundo Smoothie
    name: 'Smoothie Antiox Berry',
    description: 'Mezcla de fresas, arándanos y leche de almendras, ideal para el post-entreno. Alto contenido de antioxidantes.',
    imageUrl: '/example/toro_negro.png',
  }
];