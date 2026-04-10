"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY } from "@/app/_lib/data";

const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/projeler", label: "Projeler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5">
            <Image
              src="/images/brand/logo-icon.png"
              alt=""
              width={100}
              height={100}
              className={`h-10 w-auto transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
            <Image
              src="/images/brand/logo-wordmark.png"
              alt="Primevest Investment"
              width={260}
              height={60}
              className={`h-7 w-auto transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-primary hover:text-accent hover:bg-surface"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${COMPANY.phone}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? "text-primary" : "text-white/90"
              }`}
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
            <Link
              href="/iletisim"
              className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg"
            >
              Bilgi Alın
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-primary hover:bg-surface"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Menüyü aç"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-2xl mt-2 p-4 animate-fade-in">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-primary hover:text-accent hover:bg-surface rounded-lg text-base font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-3 border-border" />
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 px-4 py-3 text-primary text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
            <Link
              href="/iletisim"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-accent hover:bg-accent-dark text-white px-5 py-3 rounded-lg text-sm font-semibold transition-all mt-2"
            >
              Bilgi Alın
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
