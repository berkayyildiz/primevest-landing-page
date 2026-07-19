import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronDown, Phone } from "lucide-react";
import { COMPANY, getWhatsAppLink } from "@/app/_lib/data";
import { getDictionary } from "@/app/_lib/dictionaries";
import { hasLocale, paths } from "@/app/_lib/i18n";
import { ContactForm } from "@/app/_components/contact-form";
import { DICT_ICONS } from "@/app/_components/service-icons";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      {/* ====== HERO ====== */}
      <section className="relative min-h-[85vh] flex items-center pt-40 pb-24 sm:pt-40 sm:pb-28 overflow-hidden bg-primary">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute -top-48 -right-32 w-[620px] h-[620px] bg-accent/25 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -left-48 w-[520px] h-[520px] bg-gold/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-[420px] h-[420px] bg-accent-light/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-5 py-2 rounded-full text-white font-semibold text-sm mb-6 tracking-wide">
            PRIMEVEST INVESTMENT
          </div>
          <p className="text-lg sm:text-xl text-white/90 font-medium mb-4">
            {dict.home.heroTagline}
          </p>
          <h1 className="hero-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {dict.home.heroTitle}{" "}
            <span className="gradient-text">{dict.home.heroTitleHighlight}</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/85 mt-6 max-w-2xl mx-auto leading-relaxed">
            {dict.home.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Link
              href={paths.services(locale)}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:shadow-xl"
            >
              {dict.home.heroCtaServices}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={getWhatsAppLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-primary px-8 py-4 rounded-xl text-base font-semibold transition-all"
            >
              <Phone className="w-5 h-5" />
              {dict.home.heroCtaCall}
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-14 pt-10 border-t border-white/15">
            {dict.home.heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-gold-light">
                  {stat.value}
                </div>
                <div className="text-white/60 text-xs sm:text-sm mt-1 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <a
            href="#founder"
            className="animate-bounce inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ====== FOUNDER SPOTLIGHT ====== */}
      <section id="founder" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-divider mb-6" />
              <span className="inline-block bg-gold/10 text-gold-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                {dict.home.founderBadge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                {dict.home.founderTitle}
              </h2>
              <p className="text-text-light mt-4 leading-relaxed text-lg">
                {dict.home.founderParagraph1}
              </p>
              <p className="text-text-light mt-4 leading-relaxed">
                {dict.home.founderParagraph2}
              </p>
              <ul className="mt-6 space-y-3">
                {dict.home.founderHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-text-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={paths.about(locale)}
                className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold mt-8 group"
              >
                {dict.home.founderCta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative h-[480px] lg:h-[560px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team/gulay-yildiz.jpeg"
                alt={dict.home.founderImageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== SERVICES PREVIEW ====== */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              {dict.home.servicesTitle}
            </h2>
            <p className="text-text-light mt-4 max-w-2xl mx-auto text-lg">
              {dict.home.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.services.items.map((service) => (
              <Link
                key={service.id}
                href={`${paths.services(locale)}#${service.id}`}
                className="bg-white rounded-2xl p-7 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-accent/20 group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  {DICT_ICONS[service.icon]}
                </div>
                <h3 className="text-lg font-bold text-primary mt-5 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-light text-sm mt-2 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={paths.services(locale)}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
            >
              {dict.home.servicesCta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== WHY PRIMEVEST ====== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              {dict.home.whyTitle}
            </h2>
            <p className="text-text-light mt-4 max-w-2xl mx-auto text-lg">
              {dict.home.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.home.whyItems.map((item) => (
              <div
                key={item.title}
                className="bg-surface rounded-2xl p-7 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-accent/20 group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  {DICT_ICONS[item.icon]}
                </div>
                <h3 className="text-lg font-bold text-primary mt-5">
                  {item.title}
                </h3>
                <p className="text-text-light text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA / CONTACT ====== */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-accent/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-24 w-[520px] h-[520px] bg-gold/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                {dict.home.ctaTitle}
              </h2>
              <p className="text-white/70 mt-4 text-lg leading-relaxed">
                {dict.home.ctaText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={getWhatsAppLink(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-6 py-3.5 rounded-xl font-semibold transition-all"
                >
                  {dict.home.ctaWhatsapp}
                </a>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-6 py-3.5 rounded-xl font-semibold transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {COMPANY.phone}
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-primary mb-1">
                {dict.home.ctaFormTitle}
              </h3>
              <p className="text-text-light text-sm mb-6">
                {dict.home.ctaFormSubtitle}
              </p>
              <ContactForm variant="compact" dict={dict.contactForm} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
