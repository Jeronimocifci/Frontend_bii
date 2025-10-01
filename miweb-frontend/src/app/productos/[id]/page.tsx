import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Importamos los datos. Manteniendo la ruta ajustada que funcionó.
import { MOCK_PRODUCTS, ProductInfo } from '../../../dataProducts'; 

interface ProductPageProps {
  params: Promise<{
    id: string; // El ID del producto viene de la URL (e.g., /productos/1)
  }>;
}

const ProductDetailPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { id: productId } = await params;

  // Buscar el producto en los datos MOCK
  const product: ProductInfo | undefined = MOCK_PRODUCTS.find(p => p.id === productId);

  // --- Manejo de Producto No Encontrado ---
  if (!product) {
    return (
      <div className="text-center mt-20 p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Producto No Encontrado</h1>
        <p className="text-lg text-gray-700 mb-8">
          El producto con ID: {productId} no existe. Por favor, verifica la ruta.
        </p>
        <Link href="/productos">
          <span className="text-blue-600 hover:underline cursor-pointer">
            Volver a la galería de productos
          </span>
        </Link>
      </div>
    );
  }

  // --- Vista de Detalle del Producto Encontrado (Diseño Solicitado) ---
  return (
    // Estilos para centrar la vista
    <div className="container mx-auto p-6 md:p-12 min-h-[85vh] flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-10 bg-white p-6 md:p-10 w-full max-w-5xl">
        
        {/* Columna de Imagen (Izquierda) */}
        <div className="md:w-1/2 flex justify-center items-center p-4">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={600}
            className="w-full max-w-xs md:max-w-md h-auto object-contain transition-transform transform duration-300"
            style={{ maxHeight: '600px' }} 
            priority
          />
        </div>
        
        {/* Columna de Descripción (Derecha) */}
        <div className="md:w-1/2 flex flex-col justify-center text-left py-10">
          
            {/* Nombre del Producto (Texto Grande) */}
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              {product.name}
            </h1>
            
            {/* Descripción principal (Intenso y Refrescante) */}
            {/* Tomamos la primera frase como el titular */}
            <p className="font-semibold text-xl text-gray-700 mb-4">
              {product.description.split('.')[0]} y Refrescante.
            </p>
            
            {/* Descripción completa */}
            <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
            
            <div className="mt-10">
              <Link href="/productos">
                <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                  &larr; Explorar más productos
                </span>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
