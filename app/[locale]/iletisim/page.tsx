import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  AtSign,
  Clock,
  MessageCircle,
} from "lucide-react";
import { COMPANY, getWhatsAppLink } from "@/app/_lib/data";
import { getDictionary } from "@/app/_lib/dictionaries";
import { hasLocale, pageAlternates, paths } from "@/app/_lib/i18n";
import { ContactForm } from "@/app/_components/contact-form";
import { PageHeader } from "@/app/_components/page-header";

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

function InfoRow({
  icon,
  label,
  value,
  note,
  href,
  external = false,
  mono = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  note?: string;
  href?: string;
  external?: boolean;
  mono?: boolean;
}) {
  const body = (
    <>
      <span className="mt-1 text-gold flex-shrink-0">{icon}</span>
      <span>
        <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
          {label}
        </span>
        <span
          className={`block mt-1.5 text-ink font-medium ${
            mono ? "font-mono text-[15px]" : ""
          } ${href ? "group-hover:text-gold-dark transition-colors" : ""}`}
        >
          {value}
        </span>
        {note && (
          <span className="block text-sm text-text-light mt-0.5">{note}</span>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="group flex items-start gap-5"
      >
        {body}
      </a>
    );
  }
  return <div className="flex items-start gap-5">{body}</div>;
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
      <PageHeader title={dict.contact.title} subtitle={dict.contact.subtitle} />

      {/* Contact Content */}
      <section className="py-20 bg-paper">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl text-ink">
                {dict.contact.reachTitle}
              </h2>
              <div className="dual-rule mt-6" aria-hidden="true" />
              <p className="text-text-light mt-7 leading-relaxed">
                {dict.contact.reachText}
              </p>

              <div className="mt-10 space-y-8">
                <InfoRow
                  icon={<Phone className="w-5 h-5" strokeWidth={1.5} />}
                  label={dict.contact.phoneLabel}
                  value={COMPANY.phone}
                  note={COMPANY.contactPerson}
                  href={`tel:${COMPANY.phone}`}
                  mono
                />
                <InfoRow
                  icon={
                    <MessageCircle
                      className="w-5 h-5 text-[#25D366]"
                      strokeWidth={1.5}
                    />
                  }
                  label={dict.contact.whatsappLabel}
                  value={dict.contact.whatsappAction}
                  note={dict.contact.whatsappNote}
                  href={getWhatsAppLink(locale)}
                  external
                />
                <InfoRow
                  icon={<Mail className="w-5 h-5" strokeWidth={1.5} />}
                  label={dict.contact.emailLabel}
                  value={COMPANY.email}
                  href={`mailto:${COMPANY.email}`}
                />
                <InfoRow
                  icon={<MapPin className="w-5 h-5" strokeWidth={1.5} />}
                  label={dict.contact.addressLabel}
                  value={COMPANY.address.street}
                  note={`${COMPANY.address.city[locale]}, ${COMPANY.address.country[locale]}`}
                />
                <InfoRow
                  icon={<Clock className="w-5 h-5" strokeWidth={1.5} />}
                  label={dict.contact.hoursLabel}
                  value={dict.contact.hoursDays}
                  note={dict.contact.hoursTime}
                />
                <InfoRow
                  icon={<AtSign className="w-5 h-5" strokeWidth={1.5} />}
                  label={dict.contact.instagramLabel}
                  value={COMPANY.instagram}
                  href="https://instagram.com/primevestinvestment"
                  external
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-line p-8 sm:p-10">
                <div className="dual-rule mb-7" aria-hidden="true" />
                <h3 className="font-display text-2xl text-ink">
                  {dict.contact.formTitle}
                </h3>
                <p className="text-text-light text-sm mt-2 mb-8">
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
      <section className="h-[400px] bg-stone relative border-t border-line">
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
