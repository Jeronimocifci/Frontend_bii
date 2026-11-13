import type { Metadata } from "next";
import FaqView from "../../../views/FaqView";
import { getDictionary } from "../../../i18n/dictionaries";
import { languageAlternates } from "../../../i18n/config";

const t = getDictionary('es').meta;

export const metadata: Metadata = {
  title: t.faqTitle,
  description: t.faqDescription,
  alternates: languageAlternates('es', "faq"),
};

export default function Page() {
  return <FaqView lang={'es'} />;
}
