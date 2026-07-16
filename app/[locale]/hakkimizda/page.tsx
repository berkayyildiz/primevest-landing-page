import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Target, Heart, Eye, Users } from "lucide-react";
import { getTeam, getWhatsAppLink } from "@/app/_lib/data";
import { getDictionary } from "@/app/_lib/dictionaries";
import { hasLocale, pageAlternates, paths } from "@/app/_lib/i18n";

const VALUE_ICONS: Record<string, React.ReactNode> = {
  heart: <Heart className="w-7 h-7" />,
  target: <Target className="w-7 h-7" />,
  eye: <Eye className="w-7 h-7" />,
  users: <Users className="w-7 h-7" />,
};

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
      {/* Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            {dict.about.title}
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
            {dict.about.subtitle}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-divider mb-6" />
              <h2 className="text-3xl font-bold text-primary">
                {dict.about.storyTitle}
              </h2>
              <p className="text-text-light mt-4 leading-relaxed">
                {dict.about.storyParagraph1}
              </p>
              <p className="text-text-light mt-4 leading-relaxed">
                {dict.about.storyParagraph2}
              </p>
              <p className="text-text-light mt-4 leading-relaxed font-medium text-primary/80">
                {dict.about.storyMotto}
              </p>
              <p className="text-text-light mt-4 leading-relaxed">
                {dict.about.storyParagraph3}
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/projects/aloha-beach-resort/1.jpg"
                alt={dict.about.storyImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary">
              {dict.about.valuesTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.about.values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-7 text-center hover:shadow-lg transition-all border border-transparent hover:border-accent/20"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto">
                  {VALUE_ICONS[value.icon]}
                </div>
                <h3 className="text-lg font-bold text-primary mt-4">
                  {value.title}
                </h3>
                <p className="text-text-light text-sm mt-2">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary">
              {dict.about.teamTitle}
            </h2>
            <p className="text-text-light mt-4 max-w-2xl mx-auto">
              {dict.about.teamSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-surface rounded-2xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="relative h-64 bg-primary-light overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-[50%_20%] group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary to-accent">
                      <span className="text-5xl font-bold text-white/30">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium">
                    {member.title}
                  </p>
                  <p className="text-text-light text-sm mt-3 line-clamp-4 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            {dict.about.ctaTitle}
          </h2>
          <p className="text-white/80 mt-4 text-lg">{dict.about.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href={paths.contact(locale)}
              className="inline-flex items-center justify-center gap-2 bg-white text-accent hover:bg-surface px-8 py-4 rounded-xl font-semibold transition-all"
            >
              {dict.about.ctaContact}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={getWhatsAppLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              {dict.about.ctaWhatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
