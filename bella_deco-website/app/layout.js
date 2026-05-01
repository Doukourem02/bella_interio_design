import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { getCmsAdminUrl, getServices, getSiteSettings } from "./lib/payloadClient";
import { mapServices, mapSiteSettings } from "./lib/cmsMappers";

export const metadata = {
  title: "Bellarose création imagination | Décoration d'intérieur",
  description:
    "Décoration d'intérieur, agencement, conseil couleur et apprentissage des acquis divers.",
};

export default async function RootLayout({ children }) {
  const [siteSettingsDoc, servicesDocs] = await Promise.all([
    getSiteSettings(),
    getServices(),
  ]);

  const siteSettings = mapSiteSettings(siteSettingsDoc);
  const services = mapServices(servicesDocs).slice(0, 6);

  return (
    <html lang="en">
      <body className="font-sans">
        <Header siteSettings={siteSettings} cmsAdminUrl={getCmsAdminUrl()} />
        {children}
        <Footer siteSettings={siteSettings} services={services} />
      </body>
    </html>
  );
}
