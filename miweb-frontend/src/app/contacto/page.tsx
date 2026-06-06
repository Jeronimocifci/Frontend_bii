"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const WHATSAPP_NUMBER = '573137342087';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ContactoPage() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola bii! 👋\n\n*Nombre:* ${nombre}\n*Teléfono:* ${telefono}\n*Mensaje:* ${mensaje}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const contactInfo = [
    { label: 'Dirección', value: 'Mercasa P1 y P2, Pereira', type: 'text' as const, icon: MapPin },
    { label: 'Email', value: 'jugosbii.col@gmail.com', type: 'email' as const, icon: Mail },
    { label: 'Teléfono', value: '+57 313 734 2087', type: 'phone' as const, icon: Phone },
  ];

  return (
    <div className="min-h-screen w-full">

      {/* Hero */}
      <div className="bg-brand text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Escríbenos por WhatsApp, llámanos o déjanos tu mensaje. Te respondemos rápido.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Info de contacto */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">Información de contacto</h2>

          <ul className="space-y-5">
            {contactInfo.map(({ label, value, type, icon: Icon }) => (
              <li key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-brand" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{label}</p>
                  {type === 'email' ? (
                    <a href={`mailto:${value}`} className="text-gray-800 font-medium hover:text-brand transition-colors">{value}</a>
                  ) : type === 'phone' ? (
                    <a href={`tel:+573137342087`} className="text-gray-800 font-medium hover:text-brand transition-colors">{value}</a>
                  ) : (
                    <p className="text-gray-800 font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Redes */}
          <div>
            <p className="text-sm text-gray-500 mb-3">Redes sociales</p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://www.instagram.com/bii.col/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input
                type="text"
                required
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                placeholder="Tu nombre"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <input
                type="tel"
                required
                value={telefono}
                onChange={e => setTelefono(e.target.value)}
                placeholder="Tu número de teléfono"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea
                required
                value={mensaje}
                onChange={e => setMensaje(e.target.value)}
                placeholder="¿En qué te podemos ayudar?"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] transition-colors text-white font-semibold py-4 rounded-xl text-lg"
            >
              <WhatsAppIcon />
              Enviar por WhatsApp
            </button>
            <p className="text-xs text-gray-400 text-center">
              Al enviar, se abrirá WhatsApp con tu mensaje listo para enviar.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
