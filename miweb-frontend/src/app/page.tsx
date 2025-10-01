import Image from "next/image";

export default function HomePage() {
  return (
    <div className="p-8 space-y-4">
      {/* Prueba con color Tailwind normal */}
      <div className="text-green-500 text-3xl font-bold">
        Verde normal de Tailwind (debería funcionar)
      </div>
      
      {/* Prueba con tu color personalizado */}
      <div className="text-brand-light text-3xl font-bold">
        Verde claro personalizado
      </div>
      
      {/* Prueba con el verde oscuro personalizado */}
      <div className="text-brand text-3xl font-bold">
        Verde oscuro personalizado
      </div>
      
      {/* Prueba con CSS directo como fallback */}
      <div className="text-3xl font-bold" style={{ color: '#66BB6A' }}>
        Verde con CSS directo (#66BB6A)
      </div>
    </div>
  );
}