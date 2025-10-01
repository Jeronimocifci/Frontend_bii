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
    description: 'Intenso y Refrescante...',
    imageUrl: 'https://picsum.photos/id/111/250/300', // URL ÚNICA
  },
  {
    id: '2',
    name: '3 soles',
    description: 'Exótico y Energizante...',
    imageUrl: 'https://picsum.photos/id/112/250/300', // URL ÚNICA
  },
  {
    id: '3',
    name: 'Jugo de mango',
    description: 'Tropical y Revitalizante...',
    imageUrl: 'https://picsum.photos/id/113/250/300', // URL ÚNICA
  },
  {
    id: '4',
    name: 'Jugo de maracuya',
    description: 'Exótico y Refrescante...',
    imageUrl: 'https://picsum.photos/id/114/250/300', // URL ÚNICA
  },
  {
    id: '5', // ⬅️ Este es tu primer Smoothie
    name: 'Smoothie Verde Energía',
    description: 'Batido de espinacas, manzana y plátano para un inicio de día potente.',
    imageUrl: 'https://picsum.photos/id/115/250/300', // URL ÚNICA
  },
  {
    id: '6', // ⬅️ Este es tu segundo Smoothie
    name: 'Smoothie Antiox Berry',
    description: 'Mezcla de fresas, arándanos y leche de almendras, ideal para el post-entreno.',
    imageUrl: 'https://picsum.photos/id/116/250/300', // URL ÚNICA
  }
];
