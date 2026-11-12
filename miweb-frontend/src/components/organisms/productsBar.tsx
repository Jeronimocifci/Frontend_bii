import React from 'react';
import ProductCard from '../molecules/productCard';
import { ProductInfo } from '../../dataProducts';

interface ProductsBarProps {
  products: ProductInfo[];
  priorityFirst?: boolean;
}

const ProductsBar: React.FC<ProductsBarProps> = ({ products, priorityFirst = false }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} priority={priorityFirst && i === 0} />
      ))}
    </div>
  );
};

export default ProductsBar;
