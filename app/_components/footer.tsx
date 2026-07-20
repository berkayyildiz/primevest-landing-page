import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, AtSign } from "lucide-react";
import { COMPANY } from "@/app/_lib/data";
import { getDictionary } from "@/app/_lib/dictionaries";
import { paths, type Locale } from "@/app/_lib/i18n";

export async function Footer({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);

  const quickLinks = [
    { href: paths.home(locale), label: dict.nav.home },
    { href: paths.services(locale), label: dict.nav.services },
    { href: paths.about(locale), label: dict.nav.about },
    { href: paths.blog(locale), label: dict.nav.blog },
    { href: paths.contact(locale), label: dict.nav.contact },
  ];

  const serviceLinks = dict.services.items.map((service) => ({
    href: `${paths.services(locale)}#${service.id}`,
    label: service.title,
  }));

  return (
    <footer className="bg-ink-deep text-white border-t border-gold/25">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand — original logo asset, standard white-reverse over ink */}
          <div className="lg:col-span-1">
            <Image
              src="/images/brand/logo.png"
              alt="Primevest Investment"
              width={180}
              height={180}
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-white/55 text-sm leading-relaxed mt-6">
              {dict.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-gold-light/80 mb-5">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-gold-light/80 mb-5">
              {dict.footer.servicesTitle}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-gold-light/80 mb-5">
              {dict.footer.contact}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start gap-3 text-white/60 hover:text-gold-light transition-colors text-sm"
                >
                  <Phone
                    className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold/70"
                    strokeWidth={1.5}
                  />
                  <span>
                    {COMPANY.contactPerson}
                    <br />
                    <span className="font-mono text-[13px]">
                      {COMPANY.phone}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-white/60 hover:text-gold-light transition-colors text-[13px] break-all"
                >
                  <Mail
                    className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold/70"
                    strokeWidth={1.5}
                  />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin
                    className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold/70"
                    strokeWidth={1.5}
                  />
                  <span>
                    {COMPANY.address.street}
                    <br />
                    {COMPANY.address.city[locale]},{" "}
                    {COMPANY.address.country[locale]}
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="https://instagram.com/primevestinvestment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-gold-light transition-colors text-sm"
                >
                  <AtSign
                    className="w-4 h-4 flex-shrink-0 text-gold/70"
                    strokeWidth={1.5}
                  />
                  {COMPANY.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Primevest Investment.{" "}
            {dict.footer.rights}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            {dict.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
