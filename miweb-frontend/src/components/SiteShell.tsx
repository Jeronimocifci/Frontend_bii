import "../styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./navigation/navbar";
import Footer from "./navigation/footer";
import WhatsAppButton from "./WhatsAppButton";
import Analytics from "./Analytics";
import { PHONE_DISPLAY } from "@/config/contact";
import { Lang, SITE_URL, languageAlternates } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

/** Metadatos base de cada idioma (los usan los layouts). */
export function siteMetadata(lang: Lang): Metadata {
  const t = getDictionary(lang).meta;
  return {
    metadataBase: new URL(SITE_URL),
    title: t.siteTitle,
    description: t.siteDescription,
    icons: {
      icon: "/logo_bii_transparent.png",
      shortcut: "/logo_bii_transparent.png",
    },
    alternates: languageAlternates(lang, "home"),
    openGraph: {
      type: "website",
      locale: t.ogLocale,
      alternateLocale: lang === "es" ? ["en_US"] : ["es_CO"],
      siteName: getDictionary(lang).footer.brand,
      images: ["/inicio.jpg"],
    },
  };
}

export default function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = getDictionary(lang);
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "bii jugos naturales",
    alternateName: "bii natural juices",
    description: t.meta.siteDescription,
    url: SITE_URL,
    image: `${SITE_URL}/inicio.jpg`,
    logo: `${SITE_URL}/logo_bii_transparent.png`,
    telephone: PHONE_DISPLAY,
    email: "jugosbii.col@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mercasa P30",
      addressLocality: "Pereira",
      addressRegion: "Risaralda",
      addressCountry: "CO",
    },
    sameAs: ["https://www.instagram.com/bii.col/"],
  };

  return (
    <html lang={lang === "es" ? "es-CO" : "en"}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
        <Navbar lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
        <WhatsAppButton lang={lang} />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
