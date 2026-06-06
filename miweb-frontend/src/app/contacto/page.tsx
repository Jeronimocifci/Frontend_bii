"use client";
import React from 'react';
import { Mail, Phone, MapPin, Instagram, LucideIcon } from 'lucide-react';

interface ContactColumnProps {
  label: string;
  value: string;
  icon: LucideIcon;
  type: 'text' | 'email' | 'phone';
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ContactoPage: React.FC = () => {
  const contactInfo = [
    { label: 'Dirección', value: 'Mercasa P1 y P2, Pereira', icon: MapPin, type: 'text' as const },
    { label: 'Email', value: 'jugosbii.col@gmail.com', icon: Mail, type: 'email' as const },
    { label: 'Tel', value: '+57 (300) 425-4665', icon: Phone, type: 'phone' as const },
  ];

  const ContactColumn: React.FC<ContactColumnProps> = ({ label, value, type }) => (
    <div className="flex flex-col items-start p-4">
      <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white/90">{label}</h3>
      {type === 'email' ? (
        <a href={`mailto:${value}`} className="text-lg text-white hover:text-white/70 transition-colors">
          {value}
        </a>
      ) : type === 'phone' ? (
        <a href={`tel:${value}`} className="text-lg text-white hover:text-white/70 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-lg text-white">{value}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-[calc(100vh-64px)] w-full">
      {/* Título */}
      <div className="text-center py-12 bg-white">
        <h1 className="text-4xl md:text-6xl font-light tracking-widest text-gray-800">
          CONTACTO
        </h1>
      </div>

      {/* Fondo con gradiente de marca */}
      <div
        className="relative min-h-[500px] w-full"
        style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #388E3C 100%)' }}
      >
        <div className="relative z-10 p-8 md:p-16">
          <div className="flex flex-wrap justify-around gap-8 max-w-7xl mx-auto">

            {contactInfo.map((item) => (
              <ContactColumn
                key={item.label}
                label={item.label}
                value={item.value}
                icon={item.icon}
                type={item.type}
              />
            ))}

            {/* Redes Sociales */}
            <div className="flex flex-col items-start p-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white/90">Redes</h3>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://wa.me/573004254665"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full transition-transform hover:scale-110 text-green-500"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
                <a
                  href="https://www.instagram.com/bii.col/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full transition-transform hover:scale-110 text-pink-500"
                  aria-label="Instagram"
                >
                  <Instagram size={28} className="text-gray-700" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
