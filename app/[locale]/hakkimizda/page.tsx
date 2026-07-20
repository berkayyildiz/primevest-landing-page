import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { COMPANY, getFounder, getTeam, getWhatsAppLink } from "@/app/_lib/data";
import { getDictionary } from "@/app/_lib/dictionaries";
import {
  hasLocale,
  pageAlternates,
  paths,
  SITE_URL,
  type Locale,
} from "@/app/_lib/i18n";
import { DICT_ICONS } from "@/app/_components/service-icons";
import { PageHeader } from "@/app/_components/page-header";

// Person schema for the founder: her economics and Cyprus background is the
// centrepiece of the brand, so it is exposed to search engines explicitly.
function FounderJsonLd({ locale }: { locale: Locale }) {
  const founder = getFounder(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.title,
    ...(founder.image ? { image: `${SITE_URL}${founder.image}` } : {}),
    worksFor: {
      "@type": "FinancialService",
      name: COMPANY.name,
      url: `${SITE_URL}${paths.home(locale)}`,
    },
    knowsAbout:
      locale === "tr"
        ? [
            "Yatırım danışmanlığı",
            "Finansal planlama",
            "Bankacılık",
            "Ekonomi",
            "Kuzey Kıbrıs ekonomisi",
          ]
        : [
            "Investment advisory",
            "Financial planning",
            "Banking",
            "Economics",
            "North Cyprus economy",
          ],
    nationality: ["TR", "Northern Cyprus"],
    url: `${SITE_URL}${paths.about(locale)}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.about.title,
    description: dict.meta.about.description,
    alternates: pageAlternates(locale, {
      tr: paths.about("tr"),
      en: paths.about("en"),
    }),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const team = getTeam(locale);

  return (
    <>
      <PageHeader title={dict.about.title} subtitle={dict.about.subtitle} />

      {/* Story */}
      <section className="py-24 bg-paper">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
                {dict.about.storyTitle}
              </h2>
              <div className="dual-rule mt-7" aria-hidden="true" />
              <p className="text-text-light mt-8 leading-relaxed">
                {dict.about.storyParagraph1}
              </p>
              <p className="text-text-light mt-4 leading-relaxed">
                {dict.about.storyParagraph2}
              </p>
              <blockquote className="border-l-2 border-gold pl-6 my-9">
                <p className="font-display italic text-2xl text-ink leading-snug">
                  {dict.about.storyMotto}
                </p>
              </blockquote>
              <p className="text-text-light leading-relaxed">
                {dict.about.storyParagraph3}
              </p>
            </div>
            <figure className="lg:col-span-5 max-w-sm lg:max-w-none mx-auto lg:mx-0 w-full">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -top-4 -right-4 w-full h-full border border-gold/50"
                />
                <div className="relative aspect-[4/5] overflow-hidden border border-line">
                  <Image
                    src="/images/press/guclu-kadinlar-gulay-yildiz.jpg"
                    alt={dict.about.storyImageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 90vw, 40vw"
                  />
                </div>
              </div>
              <figcaption className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted mt-5">
                {dict.about.storyImageAlt}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-ink">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow eyebrow-light">{dict.about.valuesTitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 mt-12">
            {dict.about.values.map((value) => (
              <div key={value.title} className="border-t border-white/10 pt-7">
                <div className="text-gold-light">{DICT_ICONS[value.icon]}</div>
                <h3 className="text-paper text-lg font-medium mt-5">
                  {value.title}
                </h3>
                <p className="text-white/55 text-sm mt-3 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-paper">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow">{dict.about.teamTitle}</p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mt-5 max-w-2xl">
            {dict.about.teamSubtitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mt-14">
            {team.map((member) => (
              <figure key={member.name}>
                <div className="relative aspect-[4/5] overflow-hidden border border-line bg-stone">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-[50%_20%] grayscale hover:grayscale-0 transition-[filter] duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-ink">
                      <span className="font-display text-5xl text-gold/40">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                </div>
                <figcaption className="mt-6">
                  <h3 className="font-display text-xl text-ink">
                    {member.name}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dark mt-1.5">
                    {member.title}
                  </p>
                  <p className="text-text-light text-sm mt-4 line-clamp-5 leading-relaxed">
                    {member.bio}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
              {dict.about.ctaTitle}
            </h2>
            <div className="dual-rule mt-7" aria-hidden="true" />
            <p className="text-text-light mt-8 text-lg leading-relaxed">
              {dict.about.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href={paths.contact(locale)}
                className="inline-flex items-center justify-center gap-2 bg-ink hover:bg-gold text-paper hover:text-ink px-8 py-4 text-sm font-medium tracking-wide transition-colors"
              >
                {dict.about.ctaContact}
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <a
                href={getWhatsAppLink(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-ink/25 text-ink hover:border-gold-dark hover:text-gold-dark px-8 py-4 text-sm font-medium tracking-wide transition-colors"
              >
                {dict.about.ctaWhatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <FounderJsonLd locale={locale} />
    </>
  );
}
