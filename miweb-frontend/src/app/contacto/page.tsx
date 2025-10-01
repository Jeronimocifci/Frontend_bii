"use client";
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, LucideIcon } from 'lucide-react'; 

// 1. Interfaz para tipar las props del componente ContactColumn
interface ContactColumnProps {
    label: string;
    value: string;
    icon: LucideIcon; // Usamos LucideIcon para tipar el componente de icono
    type: 'text' | 'email' | 'phone';
}

// Esta es la página de Contacto, ubicada en src/app/contacto/page.tsx
const ContactoPage: React.FC = () => {

  // URL de la imagen de fondo (reemplazada por una URL temática de jugos)
  const backgroundImageUrl = 'https://placehold.co/1200x500/007bff/ffffff/png?text=Fondo+Azul+Bii+Jugos';
  // URL de la imagen de la botella superpuesta (simulando el diseño)
  const bottleImageUrl = 'https://th.bing.com/th/id/OIP.zkVogKMeoQq-JgY6NJU6qgHaHa?w=197&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'; 
  
  // Datos de Contacto de Bii Jugos
  const contactInfo = [
    { label: 'Dirección', value: 'Mercasa P1 y P2, Pereira', icon: MapPin, type: 'text' as const },
    { label: 'Email', value: 'jugosbii.col@gmail.com', icon: Mail, type: 'email' as const },
    { label: 'Tel', value: '+57 (300) 425-4665', icon: Phone, type: 'phone' as const },
  ];

  // Nota: Usamos el icono de Facebook para simular WhatsApp, ya que lucide-react no tiene WhatsApp
  const socialMedia = [
    { name: 'WhatsApp', icon: Facebook, href: 'https://wa.me/573004254665', color: 'text-green-500' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/bii.col/', color: 'text-pink-500' },
  ];

  // Componente para una columna de contacto (Tipado correctamente)
  const ContactColumn: React.FC<ContactColumnProps> = ({ label, value, icon: Icon, type }) => (
    <div className="flex flex-col items-start p-4">
      <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white/90">{label}</h3>
      {
        type === 'email' ?
          <a href={`mailto:${value}`} className="text-lg text-white hover:text-white/70 transition-colors">
            {value}
          </a>
          : type === 'phone' ?
          <a href={`tel:${value}`} className="text-lg text-white hover:text-white/70 transition-colors">
            {value}
          </a>
          :
          <p className="text-lg text-white">{value}</p>
      }
    </div>
  );


  return (
    <div className="min-h-[calc(100vh-64px)] w-full">
      {/* SECCIÓN 1: TÍTULO GRANDE */}
      <div className="text-center py-12 bg-white">
        <h1 className="text-4xl md:text-6xl font-light tracking-widest text-gray-800">
          CONTACTO
        </h1>
      </div>

      {/* SECCIÓN 2: IMAGEN DE FONDO Y CONTACTOS */}
      <div 
        className="relative min-h-[500px] w-full bg-cover bg-center"
        // He cambiado la URL de fondo por una temática que simula el fondo azul de tu diseño.
        // Reemplaza esta URL con una imagen de fondo real de tu proyecto.
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        {/* Overlay semi-transparente azul para asegurar la legibilidad del texto */}
        <div className="absolute inset-0 bg-blue-500/80 backdrop-brightness-75"></div>

        {/* Contenido de Contacto (Sobre el Overlay) */}
        <div className="relative z-10 p-8 md:p-16">
          
          {/* Fila de la Información de Contacto */}
          {/* Usamos justify-around para dar más espacio entre las columnas */}
          <div className="flex flex-wrap justify-around gap-8 max-w-7xl mx-auto">
            
            {/* Mapeo de las columnas de Dirección, Email y Tel */}
            {contactInfo.map((item) => (
              <ContactColumn 
                key={item.label}
                label={item.label} 
                value={item.value} 
                icon={item.icon} 
                type={item.type} 
              />
            ))}
            
            {/* Columna de Redes Sociales */}
            <div className="flex flex-col items-start p-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white/90">Redes</h3>
              <div className="flex space-x-4 mt-2">
                {socialMedia.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 bg-white rounded-full transition-transform hover:scale-110`}
                    aria-label={social.name}
                  >
                    <social.icon size={28} className="text-gray-700" />
                  </a>
                ))}
              </div>
            </div>

          </div>
          
          {/* Botella de Jugo Simulado (centrada abajo, parcialmente visible) */}
          {/* Esta simulación de la botella permanece en la parte inferior */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-12 hidden lg:block">
             <img 
               src={bottleImageUrl} 
               alt="Botella de Jugo Bii" 
               className="h-[400px] object-contain opacity-80"
             />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
