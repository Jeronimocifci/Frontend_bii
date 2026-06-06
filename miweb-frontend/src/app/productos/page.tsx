import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Productos | Bii Jugos Naturales",
  description: "Jugos clásicos y smoothies 100% naturales. Sin agua, sin azúcar añadida, sin conservantes. Descubre todos los sabores de bii.",
};

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
        <h1 className="text-3xl font-bold text-brand mb-6">Jugos</h1>
        <p className="text-neutral-dark">
          Disfruta de jugos naturales con el sabor fresco y auténtico de los hechos en casa, ¡sin el esfuerzo! 100% naturales, sin aditivos ni conservantes
        </p>

        <ProductsBar 
          products={jugos} 
        />
        
        <h1 className="text-3xl font-bold text-brand mb-6">Smoothies</h1>
        <p className="text-neutral-dark text-center my-8">
          Extractos 100% Naturales
        </p>

        <p className="text-neutral-dark text-center my-8">
          Elaborados exclusivamente con frutas y/o verduras frescas, sin agua ni azúcares añadidos. Comienza tu día con la pureza de lo natural en cada sorbo.
        </p>
        
        <ProductsBar
          products={smoothies} 
        />
      </section>
      
    </div>
  );
}
