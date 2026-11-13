import { ShoppingBag } from "lucide-react";
import { ORDER_PORTAL_URL } from "@/config/contact";

interface OrderPortalLinkProps {
  label: string;
  className?: string;
  iconSize?: number;
  /** Solo ícono (para la barra en celular) */
  iconOnly?: boolean;
}

/** Enlace al portal de pedidos (pedidos.jugosbii.com), donde el cliente entra con su NIT. */
export default function OrderPortalLink({ label, className = "", iconSize = 18, iconOnly = false }: OrderPortalLinkProps) {
  return (
    <a
      href={ORDER_PORTAL_URL}
      target="_blank"
      rel="noopener"
      aria-label={iconOnly ? label : undefined}
      className={`inline-flex items-center justify-center gap-2 ${className}`}
    >
      <ShoppingBag size={iconSize} />
      {!iconOnly && <span>{label}</span>}
    </a>
  );
}
