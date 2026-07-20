import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
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
      <section className="bg-ink">
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            {/* Copy */}
            <div className="lg:col-span-7">
              <p className="eyebrow eyebrow-light animate-fade-in-up">
                {dict.home.heroTagline}
              </p>
              <h1 className="font-display text-[2.75rem] leading-[1.08] sm:text-6xl text-paper mt-6 animate-fade-in-up delay-100">
                {dict.home.heroTitle}{" "}
                <em className="text-gold-light">
                  {dict.home.heroTitleHighlight}
                </em>
              </h1>
              <p className="text-white/65 text-lg leading-relaxed mt-7 max-w-xl animate-fade-in-up delay-200">
                {dict.home.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in-up delay-300">
                <a
                  href={getWhatsAppLink(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ink px-8 py-4 text-sm font-medium tracking-wide transition-colors"
                >
                  {dict.home.heroCtaCall}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <Link
                  href={paths.services(locale)}
                  className="inline-flex items-center justify-center gap-2 border border-white/25 text-white hover:border-gold-light hover:text-gold-light px-8 py-4 text-sm font-medium tracking-wide transition-colors"
                >
                  {dict.home.heroCtaServices}
                </Link>
              </div>
            </div>

            {/* Portrait — the practice is the founder */}
            <figure className="lg:col-span-5 max-w-sm lg:max-w-none mx-auto lg:mx-0 w-full animate-fade-in delay-200">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -top-4 -right-4 w-full h-full border border-gold/40"
                />
                <div className="relative aspect-[4/5] overflow-hidden border border-white/15">
                  <Image
                    src="/images/team/gulay-yildiz.jpeg"
                    alt={dict.home.founderImageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    priority
                  />
                </div>
              </div>
              <figcaption className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50 mt-5">
                {dict.home.founderImageAlt}
              </figcaption>
            </figure>
          </div>

          {/* Stats */}
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mt-16 pt-10 border-t border-white/10 animate-fade-in-up delay-400">
            {dict.home.heroStats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-4xl sm:text-5xl text-gold-light">
                  {stat.value}
                </dd>
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50 mt-3 leading-relaxed">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ====== FOUNDER ====== */}
      <section id="founder" className="py-24 bg-paper">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow">{dict.home.founderBadge}</p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mt-5">
                {dict.home.founderTitle}
              </h2>
              <div className="dual-rule mt-7" aria-hidden="true" />
              <p className="text-text-light mt-8 leading-relaxed text-lg">
                {dict.home.founderParagraph1}
              </p>
              <p className="text-text-light mt-4 leading-relaxed">
                {dict.home.founderParagraph2}
              </p>
              <ul className="mt-8 space-y-4">
                {dict.home.founderHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-3 h-px w-6 bg-gold flex-shrink-0"
                    />
                    <span className="text-text-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={paths.about(locale)}
                className="inline-flex items-center gap-2 text-ink font-medium border-b border-gold pb-1 mt-10 hover:text-gold-dark transition-colors group"
              >
                {dict.home.founderCta}
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
            <figure className="lg:col-span-5 max-w-sm lg:max-w-none mx-auto lg:mx-0 w-full">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -left-4 w-full h-full border border-gold/50"
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

      {/* ====== SERVICES INDEX ====== */}
      <section className="py-24 bg-stone">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow">{dict.services.badge}</p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mt-5 max-w-xl">
                {dict.home.servicesTitle}
              </h2>
              <p className="text-text-light mt-4 max-w-xl leading-relaxed">
                {dict.home.servicesSubtitle}
              </p>
            </div>
            <Link
              href={paths.services(locale)}
              className="hidden sm:inline-flex items-center gap-2 text-ink font-medium border-b border-gold pb-1 hover:text-gold-dark transition-colors flex-shrink-0 group"
            >
              {dict.home.servicesCta}
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                strokeWidth={1.5}
              />
            </Link>
          </div>

          <div className="border-t border-line">
            {dict.services.items.map((service) => (
              <Link
                key={service.id}
                href={`${paths.services(locale)}#${service.id}`}
                className="group grid sm:grid-cols-12 gap-2 sm:gap-8 items-baseline py-7 px-3 -mx-3 border-b border-line hover:bg-paper transition-colors"
              >
                <h3 className="sm:col-span-4 font-display text-xl text-ink group-hover:text-gold-dark transition-colors">
                  {service.title}
                </h3>
                <p className="sm:col-span-7 text-sm text-text-light leading-relaxed">
                  {service.description}
                </p>
                <span
                  aria-hidden="true"
                  className="hidden sm:block sm:col-span-1 justify-self-end self-center text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>

          <Link
            href={paths.services(locale)}
            className="sm:hidden inline-flex items-center gap-2 text-ink font-medium border-b border-gold pb-1 mt-8 hover:text-gold-dark transition-colors"
          >
            {dict.home.servicesCta}
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* ====== WHY PRIMEVEST ====== */}
      <section className="py-24 bg-ink">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow eyebrow-light">{dict.home.whyTitle}</p>
          <h2 className="font-display text-3xl sm:text-4xl text-paper leading-tight mt-5 max-w-2xl">
            {dict.home.whySubtitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mt-16">
            {dict.home.whyItems.map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-7">
                <div className="text-gold-light">{DICT_ICONS[item.icon]}</div>
                <h3 className="text-paper text-lg font-medium mt-5">
                  {item.title}
                </h3>
                <p className="text-white/55 text-sm mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA / CONTACT ====== */}
      <section className="py-24 bg-paper">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
                {dict.home.ctaTitle}
              </h2>
              <div className="dual-rule mt-7" aria-hidden="true" />
              <p className="text-text-light mt-8 text-lg leading-relaxed">
                {dict.home.ctaText}
              </p>
              <div className="mt-10 space-y-5">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-4 group w-fit"
                >
                  <Phone
                    className="w-5 h-5 text-gold"
                    strokeWidth={1.5}
                  />
                  <span className="font-mono text-[15px] text-ink group-hover:text-gold-dark transition-colors">
                    {COMPANY.phone}
                  </span>
                </a>
                <a
                  href={getWhatsAppLink(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group w-fit"
                >
                  <MessageCircle
                    className="w-5 h-5 text-[#25D366]"
                    strokeWidth={1.5}
                  />
                  <span className="text-ink font-medium group-hover:text-gold-dark transition-colors">
                    {dict.home.ctaWhatsapp}
                  </span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="bg-white border border-line p-8 sm:p-10">
                <div className="dual-rule mb-7" aria-hidden="true" />
                <h3 className="font-display text-2xl text-ink">
                  {dict.home.ctaFormTitle}
                </h3>
                <p className="text-text-light text-sm mt-2 mb-8">
                  {dict.home.ctaFormSubtitle}
                </p>
                <ContactForm variant="compact" dict={dict.contactForm} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
