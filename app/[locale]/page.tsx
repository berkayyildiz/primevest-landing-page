import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  TrendingUp,
  Globe,
  PiggyBank,
  Sun,
  MapPin,
  Building2,
  Shield,
  Users,
  Award,
  Phone,
  ChevronDown,
} from "lucide-react";
import { getFeaturedProjects, COMPANY, getWhatsAppLink } from "@/app/_lib/data";
import { getDictionary } from "@/app/_lib/dictionaries";
import { hasLocale, paths } from "@/app/_lib/i18n";
import { ProjectCard } from "@/app/_components/project-card";
import { ContactForm } from "@/app/_components/contact-form";

const ICON_MAP: Record<string, React.ReactNode> = {
  "trending-up": <TrendingUp className="w-7 h-7" />,
  globe: <Globe className="w-7 h-7" />,
  "piggy-bank": <PiggyBank className="w-7 h-7" />,
  sun: <Sun className="w-7 h-7" />,
  "map-pin": <MapPin className="w-7 h-7" />,
  "building-2": <Building2 className="w-7 h-7" />,
};

const BADGE_ICONS = [
  <Shield key="shield" className="w-6 h-6" />,
  <Users key="users" className="w-6 h-6" />,
  <Award key="award" className="w-6 h-6" />,
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const featuredProjects = getFeaturedProjects(locale);

  return (
    <>
      {/* ====== HERO ====== */}
      <section className="relative min-h-[85vh] flex items-center pt-40 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <Image
          src="/images/projects/querencia/2.webp"
          alt={dict.home.heroImageAlt}
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-5 py-2 rounded-full text-white font-semibold text-sm mb-6 tracking-wide">
            PRIMEVEST INVESTMENT
          </div>
          <p className="text-lg sm:text-xl text-white/90 font-medium mb-4 drop-shadow-md">
            {dict.home.heroTagline}
          </p>
          <h1 className="hero-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {dict.home.heroTitle}{" "}
            <span className="text-white">{dict.home.heroTitleHighlight}</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/85 mt-6 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {dict.home.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Link
              href={paths.projects(locale)}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:shadow-xl"
            >
              {dict.home.heroCtaProjects}
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
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <a href="#about" className="animate-bounce inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors">
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ====== ABOUT PREVIEW ====== */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-divider mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                {dict.home.aboutTitle}
              </h2>
              <p className="text-text-light mt-4 leading-relaxed text-lg">
                {dict.home.aboutIntro}
              </p>
              <p className="text-text-light mt-4 leading-relaxed">
                {dict.home.aboutListIntro}
              </p>
              <ul className="text-text-light mt-3 space-y-2 leading-relaxed">
                {dict.home.aboutListItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-text-light mt-4 leading-relaxed">
                {dict.home.aboutListOutro}
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                {dict.home.aboutBadges.map((label, i) => (
                  <div
                    key={label}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                      {BADGE_ICONS[i]}
                    </div>
                    <span className="text-sm font-medium text-primary">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href={paths.about(locale)}
                className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold mt-8 group"
              >
                {dict.home.aboutCta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/projects/querencia/1.webp"
                alt={dict.home.aboutImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURED PROJECTS ====== */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              {dict.home.featuredTitle}
            </h2>
            <p className="text-text-light mt-4 max-w-2xl mx-auto text-lg">
              {dict.home.featuredSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                dict={dict.projectCard}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={paths.projects(locale)}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
            >
              {dict.home.featuredCta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== WHY NORTH CYPRUS ====== */}
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
                  {ICON_MAP[item.icon]}
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
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/projects/phuket-wellness/1.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
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
