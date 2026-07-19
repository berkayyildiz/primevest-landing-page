import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Phone, Mail, Globe, Clock, MessageCircle } from "lucide-react";
import { COMPANY, getWhatsAppLink } from "@/app/_lib/data";
import { getDictionary } from "@/app/_lib/dictionaries";
import { hasLocale, pageAlternates, paths } from "@/app/_lib/i18n";
import { ContactForm } from "@/app/_components/contact-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
    alternates: pageAlternates(locale, {
      tr: paths.contact("tr"),
      en: paths.contact("en"),
    }),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            {dict.contact.title}
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
            {dict.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="section-divider mb-4" />
                <h2 className="text-2xl font-bold text-primary">
                  {dict.contact.reachTitle}
                </h2>
                <p className="text-text-light mt-2">
                  {dict.contact.reachText}
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">
                      {dict.contact.phoneLabel}
                    </div>
                    <div className="font-semibold text-primary">
                      {COMPANY.phone}
                    </div>
                    <div className="text-sm text-text-light">
                      {COMPANY.contactPerson}
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={getWhatsAppLink(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">
                      {dict.contact.whatsappLabel}
                    </div>
                    <div className="font-semibold text-primary">
                      {dict.contact.whatsappAction}
                    </div>
                    <div className="text-sm text-text-light">
                      {dict.contact.whatsappNote}
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">
                      {dict.contact.emailLabel}
                    </div>
                    <div className="font-semibold text-primary">
                      {COMPANY.email}
                    </div>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">
                      {dict.contact.addressLabel}
                    </div>
                    <div className="font-semibold text-primary">
                      {COMPANY.address.street}
                    </div>
                    <div className="text-sm text-text-light">
                      {COMPANY.address.city[locale]},{" "}
                      {COMPANY.address.country[locale]}
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">
                      {dict.contact.hoursLabel}
                    </div>
                    <div className="font-semibold text-primary">
                      {dict.contact.hoursDays}
                    </div>
                    <div className="text-sm text-text-light">
                      {dict.contact.hoursTime}
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <a
                  href="https://instagram.com/primevestinvestment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">
                      {dict.contact.instagramLabel}
                    </div>
                    <div className="font-semibold text-primary">
                      {COMPANY.instagram}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-1">
                  {dict.contact.formTitle}
                </h3>
                <p className="text-text-light text-sm mb-6">
                  {dict.contact.formSubtitle}
                </p>
                <ContactForm
                  dict={dict.contactForm}
                  services={dict.services.items}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] bg-surface-dark relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.155875412121!2d27.13887367630725!3d38.437868371825864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd85b1c5a3223%3A0x2f242830fc5d1cf5!2sProf.%20Dr.%20M.Serdar%20Saydam!5e0!3m2!1str!2str!4v1775814378012!5m2!1str!2str"
          className="w-full h-full border-0 grayscale"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={dict.contact.mapTitle}
        />
      </section>
    </>
  );
}
