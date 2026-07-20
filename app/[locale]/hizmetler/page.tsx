import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
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
      <PageHeader
        eyebrow={dict.services.badge}
        title={dict.services.title}
        subtitle={dict.services.subtitle}
      />

      {/* Services */}
      <section className="py-20 bg-paper">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dict.services.items.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28 bg-white border border-line p-8 sm:p-10 flex flex-col"
              >
                <div className="text-gold">{DICT_ICONS[service.icon]}</div>
                <h2 className="font-display text-2xl text-ink mt-6">
                  {service.title}
                </h2>
                <p className="text-text-light text-[15px] mt-3 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-7 pt-7 border-t border-line space-y-3.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-4 text-sm text-text-light"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-px w-5 bg-gold flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process — a real sequence, so the numbering carries information */}
      <section className="py-24 bg-ink">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow eyebrow-light">{dict.services.processTitle}</p>
          <h2 className="font-display text-3xl sm:text-4xl text-paper leading-tight mt-5 max-w-2xl">
            {dict.services.processSubtitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 mt-16">
            {dict.services.processSteps.map((step, i) => (
              <div key={step.title} className="border-t border-white/10 pt-7">
                <div className="font-mono text-sm text-gold-light">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-paper text-lg font-medium mt-4">
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
              {dict.services.ctaTitle}
            </h2>
            <div className="dual-rule mt-7" aria-hidden="true" />
            <p className="text-text-light mt-8 text-lg leading-relaxed">
              {dict.services.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href={paths.contact(locale)}
                className="inline-flex items-center justify-center gap-2 bg-ink hover:bg-gold text-paper hover:text-ink px-8 py-4 text-sm font-medium tracking-wide transition-colors"
              >
                {dict.services.ctaContact}
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <a
                href={getWhatsAppLink(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-ink/25 text-ink hover:border-gold-dark hover:text-gold-dark px-8 py-4 text-sm font-medium tracking-wide transition-colors"
              >
                {dict.services.ctaWhatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServicesJsonLd locale={locale} services={dict.services.items} />
    </>
  );
}
