import type { Metadata } from "next";
import ContactView from "../../../views/ContactView";
import { getDictionary } from "../../../i18n/dictionaries";
import { languageAlternates } from "../../../i18n/config";

const t = getDictionary('en').meta;

export const metadata: Metadata = {
  title: t.contactTitle,
  description: t.contactDescription,
  alternates: languageAlternates('en', "contact"),
};

export default function Page() {
  return <ContactView lang={'en'} />;
}
