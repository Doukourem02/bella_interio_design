"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Accueil", href: "/#accueil" },
  { name: "Prestations", href: "/#prestations" },
  { name: "Approche", href: "/#approche" },
  { name: "Témoignages", href: "/#temoignages" },
  { name: "Conseils", href: "/conseils" },
  { name: "Contact", href: "/#contact" },
];

export default function Header({ siteSettings, cmsAdminUrl }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navItems = cmsAdminUrl
    ? [
        ...navigation,
        {
          name: "Administration",
          href: cmsAdminUrl,
          external: true,
        },
      ]
    : navigation;

  return (
    <header
      className={cn(
        "top-0 z-50 w-full",
        isHome
          ? "absolute"
          : "sticky border-b border-slate-200/90 bg-white/95 shadow-sm backdrop-blur-sm supports-[backdrop-filter]:bg-white/90"
      )}
    >
      <div className="container mx-auto">
        <nav
          aria-label="Navigation principale"
          className="flex items-center justify-between px-4 py-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className={cn(isHome ? "text-white" : "text-slate-900")}
            >
              {siteSettings.logoUrl ? (
                <Image
                  src={siteSettings.logoUrl}
                  alt={siteSettings.brandName}
                  width={200}
                  height={48}
                  className={cn(
                    "h-10 w-auto max-w-[12rem] object-contain object-left",
                    isHome && "drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
                  )}
                  priority
                />
              ) : (
                <>
                  <span className="block text-2xl font-semibold leading-none tracking-wide">
                    {siteSettings.brandName}
                  </span>
                  <span
                    className={cn(
                      "text-xs uppercase tracking-[0.35em]",
                      isHome ? "text-white/80" : "text-slate-500"
                    )}
                  >
                    {siteSettings.brandTagline}
                  </span>
                </>
              )}
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
                isHome ? "text-white" : "text-slate-800"
              )}
              aria-label="Ouvrir le menu"
            >
              <Bars3Icon aria-hidden="true" className="size-8" />
            </button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-10">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  rel="noopener noreferrer"
                  className={cn(
                    "group relative text-base tracking-wide transition-all duration-300",
                    isHome
                      ? "text-white/90 hover:text-primary"
                      : "text-slate-600 hover:text-primary"
                  )}
                  title="Ouvrir le panneau de gestion du site (connexion)"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group relative text-base tracking-wide transition-all duration-300",
                    isHome
                      ? "text-white hover:text-primary"
                      : "text-slate-700 hover:text-primary"
                  )}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
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
            <Link href="/" className="text-white">
              {siteSettings.logoUrl ? (
                <Image
                  src={siteSettings.logoUrl}
                  alt={siteSettings.brandName}
                  width={180}
                  height={44}
                  className="h-9 w-auto max-w-[10rem] object-contain object-left"
                />
              ) : (
                <>
                  <span className="block text-2xl font-semibold leading-none">
                    {siteSettings.brandName}
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/70">
                    {siteSettings.brandTagline}
                  </span>
                </>
              )}
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
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  title="Ouvrir le panneau de gestion du site (connexion)"
                  className="block rounded-md border border-white/10 bg-white/5 px-4 py-3 text-base font-medium text-white/90 transition-colors hover:border-primary hover:text-primary"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md border border-white/10 bg-white/5 px-4 py-3 text-base font-medium text-white transition-colors hover:border-primary hover:text-primary"
                >
                  {item.name}
                </Link>
              )
            )}
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
