import type { Metadata } from "next";
import FaqView from "../../../views/FaqView";
import { getDictionary } from "../../../i18n/dictionaries";
import { languageAlternates } from "../../../i18n/config";

const t = getDictionary('en').meta;

export const metadata: Metadata = {
  title: t.faqTitle,
  description: t.faqDescription,
  alternates: languageAlternates('en', "faq"),
};

export default function Page() {
  return <FaqView lang={'en'} />;
}
