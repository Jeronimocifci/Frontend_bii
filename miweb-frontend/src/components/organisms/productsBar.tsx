// components/organisms/productsBar.tsx

import React from 'react';
import ImageCard from '../molecules/productCard'; 
import { ProductInfo } from '../../dataProducts'

interface ProductsBarProps {
  products: ProductInfo[];
}

const ProductsBar: React.FC<ProductsBarProps> = ({ products}) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="py-8 px-4 md:px-8">
      <div 
        className="flex justify-center flex-wrap gap-6"
      >
        {products.map((product) => (
          <ImageCard
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            sizeClasses="w-[250px] h-[180px]" 
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsBar;