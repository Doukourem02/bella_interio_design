"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent absolute w-full top-0 z-50">
      <div className="container mx-auto ">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="">
              <span className="sr-only">Your Company</span>
              <Image
                src="/logo.png"
                alt="Next.js logo"
                width={250}
                height={80}
                className="w-[200px] lg:w-[250px]"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-8 text-primary" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Link
              href="#"
              className="relative text-lg tracking-wide text-white hover:text-primary hover:scale-110 transition-all hover:duration-500 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 ease-out"></span>
            </Link>
            <Link
              href="#"
              className="relative text-lg tracking-wide text-white hover:text-primary hover:scale-110 transition-all hover:duration-500 group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 ease-out"></span>
            </Link>
            <Link
              href="#"
              className="relative text-lg tracking-wide text-white hover:text-primary hover:scale-110 transition-all hover:duration-500 group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 ease-out"></span>
            </Link>
            <Link
              href="#"
              className="relative text-lg tracking-wide text-white hover:text-primary hover:scale-110 transition-all hover:duration-500 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 ease-out"></span>
            </Link>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button>
              <ShoppingBasket size={30} /> Shop Now
            </Button>
          </div>
        </nav>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="">
              <span className="sr-only">Your Company</span>
              <Image
                src="/logo.png"
                alt="Next.js logo"
                width={250}
                height={80}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-4 py-6">
                <Link
                  href="#"
                  className="-mx-1 relative rounded-sm block px-3 py-2 text-base/7 font-semibold text-white bg-gray-700/80 hover:bg-gray-200 hover:text-primary transition-all duration-300 group overflow-hidden"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
                <Link
                  href="#"
                  className="-mx-1 relative rounded-sm block px-3 py-2 text-base/7 font-semibold text-white bg-gray-700/80 hover:bg-gray-200 hover:text-primary transition-all duration-300 group overflow-hidden"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
                <Link
                  href="#"
                  className="-mx-1 relative rounded-sm block px-3 py-2 text-base/7 font-semibold text-white bg-gray-700/80 hover:bg-gray-200 hover:text-primary transition-all duration-300 group overflow-hidden"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
                <Link
                  href="#"
                  className="-mx-1 relative rounded-sm block px-3 py-2 text-base/7 font-semibold text-white bg-gray-700/80 hover:bg-gray-200 hover:text-primary transition-all duration-300 group overflow-hidden"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
              </div>
              <div className="py-6">
                <Button>
                  <ShoppingBasket size={30} /> Shop Now
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
