import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Briefcase, CheckCircle2 } from "lucide-react";
import { COMPANY, getWhatsAppLink } from "@/app/_lib/data";
import { getDictionary, type Dictionary } from "@/app/_lib/dictionaries";
import {
  hasLocale,
  pageAlternates,
  paths,
  SITE_URL,
  type Locale,
} from "@/app/_lib/i18n";
import { DICT_ICONS } from "@/app/_components/service-icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.services.title,
    description: dict.meta.services.description,
    alternates: pageAlternates(locale, {
      tr: paths.services("tr"),
      en: paths.services("en"),
    }),
  };
}

function ServicesJsonLd({
  locale,
  services,
}: {
  locale: Locale;
  services: Dictionary["services"]["items"];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        serviceType: service.title,
        description: service.description,
        provider: {
          "@type": "FinancialService",
          name: COMPANY.name,
        },
        url: `${SITE_URL}${paths.services(locale)}#${service.id}`,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function ServicesPage({
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
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white/90 text-sm mb-4">
            <Briefcase className="w-4 h-4" />
            {dict.services.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            {dict.services.title}
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
            {dict.services.subtitle}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.services.items.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 bg-white rounded-2xl p-7 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-accent/20 group flex flex-col"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  {DICT_ICONS[service.icon]}
                </div>
                <h2 className="text-xl font-bold text-primary mt-5">
                  {service.title}
                </h2>
                <p className="text-text-light text-sm mt-2 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-5 pt-5 border-t border-border space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-text-light"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary">
              {dict.services.processTitle}
            </h2>
            <p className="text-text-light mt-4 max-w-2xl mx-auto">
              {dict.services.processSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.services.processSteps.map((step, i) => (
              <div
                key={step.title}
                className="bg-surface rounded-2xl p-7 text-center hover:shadow-lg transition-all border border-transparent hover:border-accent/20"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-gold font-bold text-lg mx-auto">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-primary mt-4">
                  {step.title}
                </h3>
                <p className="text-text-light text-sm mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            {dict.services.ctaTitle}
          </h2>
          <p className="text-white/80 mt-4 text-lg">{dict.services.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href={paths.contact(locale)}
              className="inline-flex items-center justify-center gap-2 bg-white text-accent hover:bg-surface px-8 py-4 rounded-xl font-semibold transition-all"
            >
              {dict.services.ctaContact}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={getWhatsAppLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              {dict.services.ctaWhatsapp}
            </a>
          </div>
        </div>
      </section>

      <ServicesJsonLd locale={locale} services={dict.services.items} />
    </>
  );
}
