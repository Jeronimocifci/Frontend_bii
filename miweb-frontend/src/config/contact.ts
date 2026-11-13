// Datos de contacto de bii: cambiar aquí y se actualiza en toda la página.
export const WHATSAPP_NUMBER = "573137342087";
export const PHONE_DISPLAY = "+57 313 734 2087";
export const PHONE_TEL = `tel:+${WHATSAPP_NUMBER}`;
// Portal de pedidos para clientes registrados (entran con su NIT). App aparte en Firebase.
export const ORDER_PORTAL_URL = "https://pedidos.jugosbii.com";

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
