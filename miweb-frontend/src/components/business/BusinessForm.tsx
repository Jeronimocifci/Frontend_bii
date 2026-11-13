"use client";
import React, { useState } from "react";
import WhatsAppIcon from "../WhatsAppIcon";
import { whatsappUrl } from "@/config/contact";
import { openLink } from "../../lib/openLink";
import type { Lang } from "../../i18n/config";
import { getDictionary } from "../../i18n/dictionaries";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition";

export default function BusinessForm({ lang }: { lang: Lang }) {
  const d = getDictionary(lang);
  const t = d.business;
  const [business, setBusiness] = useState("");
  const [type, setType] = useState(t.types[0]);
  const [name, setName] = useState("");
  const [zone, setZone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = whatsappUrl(d.whatsapp.business(business.trim(), type, name.trim(), zone.trim(), message.trim()));
    openLink(url);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="biz-name" className="block text-sm font-medium text-gray-700 mb-1">
            {t.businessName}
          </label>
          <input
            id="biz-name"
            required
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder={t.businessNamePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="biz-type" className="block text-sm font-medium text-gray-700 mb-1">
            {t.type}
          </label>
          <select id="biz-type" value={type} onChange={(e) => setType(e.target.value)} className={inputClass}>
            {t.types.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="biz-contact" className="block text-sm font-medium text-gray-700 mb-1">
            {t.contactName}
          </label>
          <input
            id="biz-contact"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.contactNamePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="biz-zone" className="block text-sm font-medium text-gray-700 mb-1">
            {t.zone}
          </label>
          <input
            id="biz-zone"
            required
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            placeholder={t.zonePlaceholder}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="biz-message" className="block text-sm font-medium text-gray-700 mb-1">
          {t.message}
        </label>
        <textarea
          id="biz-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.messagePlaceholder}
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] transition-colors text-white font-semibold py-4 rounded-xl text-lg"
      >
        <WhatsAppIcon /> {t.send}
      </button>
      <p className="text-xs text-gray-500 text-center">{t.sendHelp}</p>
    </form>
  );
}
