import type { Metadata } from "next";
import OrderView from "../../../views/OrderView";
import { getDictionary } from "../../../i18n/dictionaries";
import { languageAlternates } from "../../../i18n/config";

const t = getDictionary('en').meta;

export const metadata: Metadata = {
  title: t.orderTitle,
  description: t.orderDescription,
  alternates: languageAlternates('en', "order"),
};

export default function Page() {
  return <OrderView lang={'en'} />;
}
