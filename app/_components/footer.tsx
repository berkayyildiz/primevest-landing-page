import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { COMPANY } from "@/app/_lib/data";
import { getDictionary } from "@/app/_lib/dictionaries";
import { paths, type Locale } from "@/app/_lib/i18n";

const FEATURED_PROJECT_LINKS = [
  { slug: "grand-sapphire-blu", label: "Grand Sapphire Blu" },
  { slug: "querencia", label: "Querencia" },
  { slug: "d-point", label: "D-Point" },
  { slug: "phuket-wellness", label: "Phuket Wellness" },
  { slug: "aloha-beach-resort", label: "Aloha Beach Resort" },
];

export async function Footer({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);

  const quickLinks = [
    { href: paths.home(locale), label: dict.nav.home },
    { href: paths.projects(locale), label: dict.nav.projects },
    { href: paths.about(locale), label: dict.nav.about },
    { href: paths.blog(locale), label: dict.nav.blog },
    { href: paths.contact(locale), label: dict.nav.contact },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/brand/logo.png"
              alt="Primevest Investment"
              width={180}
              height={56}
              className="h-14 w-auto brightness-0 invert mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed mt-4">
              {dict.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              {dict.footer.featuredProjects}
            </h3>
            <ul className="space-y-3">
              {FEATURED_PROJECT_LINKS.map((link) => (
                <li key={link.slug}>
                  <Link
                    href={paths.project(locale, link.slug)}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              {dict.footer.contact}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start gap-3 text-white/70 hover:text-gold transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    {COMPANY.contactPerson}
                    <br />
                    {COMPANY.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-white/70 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
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
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
                >
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  {COMPANY.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Primevest Investment.{" "}
            {dict.footer.rights}
          </p>
          <p className="text-white/50 text-xs">{dict.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
