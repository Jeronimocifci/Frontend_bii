import React from 'react';
import ImageCard from '../molecules/productCard';
import { ProductInfo } from '../../dataProducts';

interface ProductsBarProps {
  products: ProductInfo[];
}

const ProductsBar: React.FC<ProductsBarProps> = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="py-8 px-4 md:px-8">
      <div className="flex justify-center flex-wrap gap-8">
        {products.map((product) => (
          <ImageCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsBar;
