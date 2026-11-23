import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickContact from "@/components/QuickContact";
import { JsonLd, siteJsonLd } from "@/lib/seo";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={siteJsonLd} />
      <span id="top" />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <QuickContact />
    </>
  );
}
