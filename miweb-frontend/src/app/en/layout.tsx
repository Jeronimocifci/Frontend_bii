import type { Metadata } from "next";
import SiteShell, { siteMetadata } from "../../components/SiteShell";

export const metadata: Metadata = siteMetadata('en');

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang={'en'}>{children}</SiteShell>;
}
