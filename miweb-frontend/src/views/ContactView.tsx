"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { whatsappUrl, PHONE_DISPLAY, PHONE_TEL } from '@/config/contact';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { openLink } from '../lib/openLink';
import type { Lang } from '../i18n/config';
import { getDictionary } from '../i18n/dictionaries';

const inputClass =
  'w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition';

export default function ContactView({ lang }: { lang: Lang }) {
  const d = getDictionary(lang);
  const t = d.contact;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openLink(whatsappUrl(d.whatsapp.contactForm(name, phone, message)));
  };

  const contactInfo = [
    { label: t.address, value: 'Mercasa P30, Pereira', type: 'text' as const, icon: MapPin },
    { label: t.email, value: 'jugosbii.col@gmail.com', type: 'email' as const, icon: Mail },
    { label: t.phone, value: PHONE_DISPLAY, type: 'phone' as const, icon: Phone },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Hero */}
      <div className="bg-brand text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Info de contacto */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">{t.infoTitle}</h2>

          <ul className="space-y-5">
            {contactInfo.map(({ label, value, type, icon: Icon }) => (
              <li key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-brand" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{label}</p>
                  {type === 'email' ? (
                    <a href={`mailto:${value}`} className="text-gray-800 font-medium hover:text-brand transition-colors">
                      {value}
                    </a>
                  ) : type === 'phone' ? (
                    <a href={PHONE_TEL} className="text-gray-800 font-medium hover:text-brand transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-800 font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Redes */}
          <div>
            <p className="text-sm text-gray-500 mb-3">{t.social}</p>
            <div className="flex gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <WhatsAppIcon className="w-6 h-6" />
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.formTitle}</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                {t.name}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.namePlaceholder}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
                {t.phone}
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.phonePlaceholder}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                {t.message}
              </label>
              <textarea
                id="contact-message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.messagePlaceholder}
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] transition-colors text-white font-semibold py-4 rounded-xl text-lg"
            >
              <WhatsAppIcon className="w-7 h-7" />
              {t.send}
            </button>
            <p className="text-xs text-gray-400 text-center">{t.sendHelp}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
