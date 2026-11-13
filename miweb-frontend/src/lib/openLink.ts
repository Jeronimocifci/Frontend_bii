"use client";
/** Abre un enlace en otra pestaña simulando un clic real (así la medición de WhatsApp lo registra). */
export function openLink(url: string) {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  a.remove();
}
