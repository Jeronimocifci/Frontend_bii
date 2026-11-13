import type { Metadata } from "next";
import ContactView from "../../../views/ContactView";
import { getDictionary } from "../../../i18n/dictionaries";
import { languageAlternates } from "../../../i18n/config";

const t = getDictionary('es').meta;

export const metadata: Metadata = {
  title: t.contactTitle,
  description: t.contactDescription,
  alternates: languageAlternates('es', "contact"),
};

export default function Page() {
  return <ContactView lang={'es'} />;
}
