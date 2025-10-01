import React from 'react';
import Link from 'next/link';

interface ImageCardProps {
  id: string;
  imageUrl: string;
  sizeClasses?: string;
}

const ProductCard: React.FC<ImageCardProps> = ({ 
  id, 
  imageUrl, 
  sizeClasses = 'w-[200px] h-[300px]' 
}) => {
  return (
    // Usa el 'id' para construir el enlace
    <Link href={`/productos/${id}`} passHref>
      <div 
        className={`
          bg-white 
          rounded-lg 
          shadow-md 
          cursor-pointer 
          overflow-hidden 
          hover:shadow-xl 
          transition-shadow 
          duration-300 
          transform 
          hover:-translate-y-1
          ${sizeClasses}
        `}
      >
        <img
          src={imageUrl}
          alt={`Producto con ID ${id}`} 
          className="w-full h-full object-cover" 
        />
      </div>
    </Link>
  );
};

export default ProductCard;