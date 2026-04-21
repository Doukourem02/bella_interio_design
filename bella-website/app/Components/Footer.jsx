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
import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/story" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Contact", href: "/contact" },
    ],
    products: [
      { name: "Living Room", href: "/living-room" },
      { name: "Bedroom", href: "/bedroom" },
      { name: "Dining Room", href: "/dining-room" },
      { name: "Office", href: "/office" },
      { name: "Outdoor", href: "/outdoor" },
    ],
    services: [
      { name: "Interior Design", href: "/interior-design" },
      { name: "Free Consultation", href: "/consultation" },
      { name: "Delivery & Assembly", href: "/delivery" },
      { name: "Financing", href: "/financing" },
      { name: "Trade Program", href: "/trade" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Returns", href: "/returns" },
      { name: "Size Guide", href: "/size-guide" },
      { name: "Care Instructions", href: "/care" },
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
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Luxe Home"
                width={250}
                height={40}
                // className="w-10 h-10"
              />
            </div>
            <p className="text-gray-300 pb-10 leading-relaxed max-w-md ">
              Transform your living spaces with our premium furniture
              collection. We create beautiful, functional environments that
              reflect your unique style.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} />
                <span>hello@luxehome.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} />
                <span>123 Design Street, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Company</h3>
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
            <h3 className="text-xl font-medium mb-6">Products</h3>
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
            <h3 className="text-xl font-medium mb-6">Support</h3>
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
              <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
              <p className="text-gray-300">
                Subscribe to get special offers, free giveaways, and updates on
                new arrivals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                Subscribe
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
              <span className="text-gray-300 mr-2">Follow us:</span>
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
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <span>© {currentYear} Luxe Home. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by Luxe Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
