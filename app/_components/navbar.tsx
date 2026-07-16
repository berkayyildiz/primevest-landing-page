"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY } from "@/app/_lib/data";
import {
  getAlternatePath,
  LOCALE_COOKIE,
  locales,
  paths,
  type Locale,
} from "@/app/_lib/i18n";
import type { Dictionary } from "@/app/_lib/dictionaries";

function rememberLocale(target: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${target};path=/;max-age=31536000;samesite=lax`;
}

function LanguageSwitcher({
  locale,
  scrolled,
  label,
  className = "",
}: {
  locale: Locale;
  scrolled: boolean;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      aria-label={label}
      className={`flex items-center gap-1 text-sm font-semibold ${className}`}
    >
      {locales.map((target, i) => (
        <span key={target} className="flex items-center gap-1">
          {i > 0 && (
            <span className={scrolled ? "text-border" : "text-white/40"}>
              |
            </span>
          )}
          {target === locale ? (
            <span
              aria-current="true"
              className={`px-1.5 py-1 rounded ${
                scrolled ? "text-accent" : "text-white"
              }`}
            >
              {target.toUpperCase()}
            </span>
          ) : (
            <Link
              href={getAlternatePath(pathname, target)}
              hrefLang={target}
              onClick={() => rememberLocale(target)}
              className={`px-1.5 py-1 rounded transition-colors ${
                scrolled
                  ? "text-text-light hover:text-accent"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {target.toUpperCase()}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}

export function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["nav"];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: paths.home(locale), label: dict.home },
    { href: paths.projects(locale), label: dict.projects },
    { href: paths.about(locale), label: dict.about },
    { href: paths.blog(locale), label: dict.blog },
    { href: paths.contact(locale), label: dict.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link
            href={paths.home(locale)}
            className="flex-shrink-0 flex items-center gap-2.5"
          >
            <Image
              src="/images/brand/logo-icon.png"
              alt=""
              width={100}
              height={100}
              className={`h-12 w-auto transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
            <Image
              src="/images/brand/logo-wordmark.png"
              alt="Primevest Investment"
              width={260}
              height={60}
              className={`h-9 w-auto transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
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
            <LanguageSwitcher
              locale={locale}
              scrolled={scrolled}
              label={dict.languageSwitcherLabel}
            />
            <a
              href={`tel:${COMPANY.phone}`}
              className={`flex items-center gap-2 text-base font-medium transition-colors ${
                scrolled ? "text-primary" : "text-white/90"
              }`}
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
            <Link
              href={paths.contact(locale)}
              className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg text-base font-semibold transition-all hover:shadow-lg"
            >
              {dict.getInfo}
            </Link>
          </div>

          {/* Mobile: language switcher + toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher
              locale={locale}
              scrolled={scrolled}
              label={dict.languageSwitcherLabel}
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-primary hover:bg-surface"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label={dict.openMenu}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-2xl mt-2 p-4 animate-fade-in">
            {navLinks.map((link) => (
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
              href={paths.contact(locale)}
              onClick={() => setIsOpen(false)}
              className="block text-center bg-accent hover:bg-accent-dark text-white px-5 py-3 rounded-lg text-sm font-semibold transition-all mt-2"
            >
              {dict.getInfo}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
