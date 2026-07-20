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
  label,
  className = "",
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      aria-label={label}
      className={`flex items-center gap-1 font-mono text-xs tracking-widest ${className}`}
    >
      {locales.map((target, i) => (
        <span key={target} className="flex items-center gap-1">
          {i > 0 && <span className="text-white/25">/</span>}
          {target === locale ? (
            <span aria-current="true" className="px-1.5 py-1 text-gold-light">
              {target.toUpperCase()}
            </span>
          ) : (
            <Link
              href={getAlternatePath(pathname, target)}
              hrefLang={target}
              onClick={() => rememberLocale(target)}
              className="px-1.5 py-1 text-white/50 hover:text-white transition-colors"
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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: paths.home(locale), label: dict.home },
    { href: paths.services(locale), label: dict.services },
    { href: paths.about(locale), label: dict.about },
    { href: paths.blog(locale), label: dict.blog },
    { href: paths.contact(locale), label: dict.contact },
  ];

  const isActive = (href: string) =>
    href === paths.home(locale)
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo — original brand assets, standard white-reverse over ink */}
          <Link
            href={paths.home(locale)}
            className="flex-shrink-0 flex items-center gap-2.5"
          >
            <Image
              src="/images/brand/logo-icon.png"
              alt=""
              width={100}
              height={100}
              className="h-10 sm:h-11 w-auto brightness-0 invert"
              priority
            />
            <Image
              src="/images/brand/logo-wordmark.png"
              alt="Primevest Investment"
              width={260}
              height={60}
              className="h-7 sm:h-8 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-[15px] tracking-wide transition-colors ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 w-full h-px bg-gold"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <LanguageSwitcher
              locale={locale}
              label={dict.languageSwitcherLabel}
            />
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 font-mono text-[13px] text-white/60 hover:text-gold-light transition-colors"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
              {COMPANY.phone}
            </a>
            <Link
              href={paths.contact(locale)}
              className="border border-gold/60 text-gold-light hover:bg-gold hover:border-gold hover:text-ink px-5 py-2.5 text-sm font-medium tracking-wide transition-colors"
            >
              {dict.getInfo}
            </Link>
          </div>

          {/* Mobile: language switcher + toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher
              locale={locale}
              label={dict.languageSwitcherLabel}
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-gold-light transition-colors"
              aria-label={dict.openMenu}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-ink-deep border border-white/10 mt-2 mb-4 p-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-[15px] tracking-wide transition-colors ${
                  isActive(link.href)
                    ? "text-gold-light"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-white/10" />
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 px-4 py-3 font-mono text-[13px] text-white/60"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
              {COMPANY.phone}
            </a>
            <Link
              href={paths.contact(locale)}
              onClick={() => setIsOpen(false)}
              className="block text-center border border-gold/60 text-gold-light hover:bg-gold hover:text-ink px-5 py-3 text-sm font-medium tracking-wide transition-colors m-2"
            >
              {dict.getInfo}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
