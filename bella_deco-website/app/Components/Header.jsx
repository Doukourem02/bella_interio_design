"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const navigation = [
  { name: "Accueil", href: "#accueil" },
  { name: "Prestations", href: "#prestations" },
  { name: "Approche", href: "#approche" },
  { name: "Témoignages", href: "#temoignages" },
  { name: "Conseils", href: "/conseils" },
  { name: "Contact", href: "#contact" },
];

export default function Header({ siteSettings }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto">
        <nav
          aria-label="Navigation principale"
          className="flex items-center justify-between px-4 py-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="#accueil" className="text-white">
              <span className="block text-2xl font-semibold leading-none tracking-wide">
                {siteSettings.brandName}
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-white/80">
                {siteSettings.brandTagline}
              </span>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              aria-label="Ouvrir le menu"
            >
              <Bars3Icon aria-hidden="true" className="size-8" />
            </button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-base tracking-wide text-white hover:text-primary transition-all duration-300"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </PopoverGroup>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild>
              <a href={siteSettings.whatsappHref}>
                <Phone size={18} />
                Appeler
              </a>
            </Button>
          </div>
        </nav>
      </div>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-slate-950/40" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-950 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="#accueil" className="text-white">
              <span className="block text-2xl font-semibold leading-none">
                {siteSettings.brandName}
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-white/70">
                {siteSettings.brandTagline}
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
              aria-label="Fermer le menu"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-8 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md border border-white/10 bg-white/5 px-4 py-3 text-base font-medium text-white transition-colors hover:border-primary hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild className="w-full">
              <a href={siteSettings.whatsappHref}>
                <Phone size={18} />
                Appeler {siteSettings.brandName}
              </a>
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
