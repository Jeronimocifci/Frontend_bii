"use client";
import Script from "next/script";
import { useEffect } from "react";

// Google Analytics 4 (propiedad www.jugosbii.com), vinculada a Google Ads.
export const GA_MEASUREMENT_ID = "G-C1TJ610VXV";
// Evento que Google Ads importa como conversión "Contactar".
const CONTACT_CONVERSION_EVENT = "ads_conversion_Contactar_1";

type Gtag = (...args: unknown[]) => void;

export default function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      if (!gtag) return;
      if (href.includes("pedidos.jugosbii.com")) {
        gtag("event", "order_portal_click", { page_path: window.location.pathname });
        return;
      }
      const isWhatsApp = href.includes("wa.me/");
      const isPhone = href.startsWith("tel:");
      if (!isWhatsApp && !isPhone) return;
      gtag("event", CONTACT_CONVERSION_EVENT, {
        contact_method: isWhatsApp ? "whatsapp" : "telefono",
        page_path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
