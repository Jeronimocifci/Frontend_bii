import type { Metadata } from "next";
import OrderView from "../../../views/OrderView";
import { getDictionary } from "../../../i18n/dictionaries";
import { languageAlternates } from "../../../i18n/config";

const t = getDictionary('es').meta;

export const metadata: Metadata = {
  title: t.orderTitle,
  description: t.orderDescription,
  alternates: languageAlternates('es', "order"),
};

export default function Page() {
  return <OrderView lang={'es'} />;
}
