import React from 'react';
import ProductsBar from '../../components/organisms/productsBar'; 
import { MOCK_PRODUCTS, ProductInfo } from '../../dataProducts'; 

const filterProductsByIds = (ids: string[]): ProductInfo[] => {
  return MOCK_PRODUCTS.filter(product => ids.includes(product.id));
};

export default function ProductosPage() {
  
  const jugoIds = ['1', '2', '3', '4'];
  const smoothieIds = ['5', '6'];

  const jugos = filterProductsByIds(jugoIds); 
  const smoothies = filterProductsByIds(smoothieIds);

  return (
    <div className="pt-8">
      <section className="text-center text-lg mt-8 mb-12">
        <h1 className="text-3xl font-bold text-brand mb-6">Nuestros Productos</h1>
        <p className="text-neutral-dark">
          Aquí encontrarás la variedad de jugos naturales que ofrecemos.
        </p>
      </section>

      <ProductsBar 
        products={jugos} 
      />
      
      <p className="text-neutral-dark text-center my-8">
        ¡Prueba nuestra deliciosa variedad de Smoothies y batidos energéticos!
      </p>
      
      <ProductsBar
        products={smoothies} 
      />
      
    </div>
  );
}
