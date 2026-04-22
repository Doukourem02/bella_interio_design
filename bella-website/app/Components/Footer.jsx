import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "À propos", href: "#apropos" },
      { name: "Approche", href: "#approche" },
      { name: "Prestations", href: "#prestations" },
      { name: "Témoignages", href: "#temoignages" },
      { name: "Contact", href: "/contact" },
    ],
    products: [
      { name: "Salon", href: "#salon" },
      { name: "Chambre", href: "#chambre" },
      { name: "Bureau", href: "#bureau" },
      { name: "Espaces familiaux", href: "#espaces" },
      { name: "Ambiance lumière", href: "#lumiere" },
    ],
    services: [
      { name: "Décoration d'intérieur", href: "#decoration" },
      { name: "Conseil couleurs", href: "#couleurs" },
      { name: "Agencement", href: "#agencement" },
      { name: "Accessoires & lumières", href: "#accessoires" },
      { name: "Acquis divers", href: "#acquis" },
    ],
    support: [
      { name: "Premier échange", href: "#contact" },
      { name: "À distance", href: "#distance" },
      { name: "Sur place", href: "#sur-place" },
      { name: "Conseils pratiques", href: "#conseils" },
      { name: "Suivi projet", href: "#suivi" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
  ];

  return (
    <footer className="bg-[#1E2B3A] text-white pt-20">
      <div className="container mx-auto px-10 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6 leading-none text-white">
              <div className="text-3xl font-bold tracking-wide">Bella</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.28em] text-white/60">
                création imagination
              </div>
            </div>
            <p className="text-gray-300 pb-10 leading-relaxed max-w-md ">
              Spécialisée dans la décoration de l&apos;intérieur et
              l&apos;apprentissage des acquis divers, Bella accompagne la
              transformation des espaces avec écoute, imagination et sens du
              détail.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={18} />
                <span>+33 6 05 53 24 20</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} />
                <span>britanie4@hotmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} />
                <span>France & Canada - accompagnement à distance possible</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Bella</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="relative text-gray-300 hover:text-primary transition-all duration-300 inline-block group pb-1"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Espaces</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="relative text-gray-300 hover:text-primary transition-all duration-300 inline-block group pb-1"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="relative text-gray-300 hover:text-primary transition-all duration-300 inline-block group pb-1"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Accompagnement</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="relative text-gray-300 hover:text-primary transition-all duration-300 inline-block group pb-1"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr  className="opacity-10"/>
        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Restons en contact</h3>
              <p className="text-gray-300">
                Recevez des inspirations déco, des conseils couleur et des
                idées simples pour faire évoluer votre intérieur.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                S&apos;inscrire
              </button>
            </div>
          </div>
        </div>
        <hr className="opacity-10" />
        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300 mr-2">Suivre Bella :</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-200 group"
                >
                  <social.icon
                    size={18}
                    className="text-gray-300 group-hover:text-white"
                  />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                Politique de confidentialité
              </a>
              <a
                href="/terms"
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                Conditions d&apos;utilisation
              </a>
              <a
                href="/cookies"
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                Politique des cookies
              </a>
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <span>© {currentYear} Bella création imagination. Réalisé avec</span>
              <Heart size={16} className="text-red-500" />
              <span>par l&apos;équipe Bella</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
