import type { Metadata } from "next";
import AboutView from "../../../views/AboutView";
import { getDictionary } from "../../../i18n/dictionaries";
import { languageAlternates } from "../../../i18n/config";

const t = getDictionary('en').meta;

export const metadata: Metadata = {
  title: t.aboutTitle,
  description: t.aboutDescription,
  alternates: languageAlternates('en', "about"),
};

export default function Page() {
  return <AboutView lang={'en'} />;
}
