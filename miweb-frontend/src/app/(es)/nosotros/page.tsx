import type { Metadata } from "next";
import AboutView from "../../../views/AboutView";
import { getDictionary } from "../../../i18n/dictionaries";
import { languageAlternates } from "../../../i18n/config";

const t = getDictionary('es').meta;

export const metadata: Metadata = {
  title: t.aboutTitle,
  description: t.aboutDescription,
  alternates: languageAlternates('es', "about"),
};

export default function Page() {
  return <AboutView lang={'es'} />;
}
