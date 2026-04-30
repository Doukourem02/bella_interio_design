import { Facebook, Instagram, Mail, Phone, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Accueil", href: "#accueil" },
    { name: "Prestations", href: "#prestations" },
    { name: "Approche", href: "#approche" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Décoration d'intérieur",
    "Conseil couleurs",
    "Agencement",
    "Apprentissage des acquis divers",
  ];

  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                <Sparkles size={24} />
              </div>
              <div>
                <div className="text-2xl font-semibold">
                  Bellarose création imagination
                </div>
                <div className="text-sm uppercase tracking-[0.25em] text-white/50">
                  Décoration intérieure
                </div>
              </div>
            </div>

            <p className="max-w-xl leading-8 text-white/70">
              Spécialisée dans la décoration de l&apos;intérieur et l&apos;apprentissage
              des acquis divers, Bellarose accompagne la transformation des espaces
              avec écoute, imagination et sens du détail.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="tel:+2250704225474"
                className="flex items-center gap-3 text-white/75 hover:text-primary"
              >
                <Phone size={18} />
                +2250704225474
              </a>
              <a
                href="tel:+14182955936"
                className="flex items-center gap-3 text-white/75 hover:text-primary"
              >
                <Phone size={18} />
                +1 418 295 5936
              </a>
              <a
                href="mailto:karamokojuniorkone52@gmail.com"
                className="flex items-center gap-3 text-white/75 hover:text-primary"
              >
                <Mail size={18} />
                karamokojuniorkone52@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Navigation</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/50">Suivre Bellarose</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-primary hover:text-white"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-primary hover:text-white"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>

          <p className="text-sm text-white/50">
            © {currentYear} Bellarose création imagination. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
