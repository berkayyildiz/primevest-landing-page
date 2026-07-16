import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Building2 } from "lucide-react";
import { getProjects } from "@/app/_lib/data";
import { getDictionary } from "@/app/_lib/dictionaries";
import { hasLocale, pageAlternates, paths } from "@/app/_lib/i18n";
import { ProjectCard } from "@/app/_components/project-card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.projects.title,
    description: dict.meta.projects.description,
    alternates: pageAlternates(locale, {
      tr: paths.projects("tr"),
      en: paths.projects("en"),
    }),
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  const projects = getProjects(locale);
  const girneProjects = projects.filter((p) => p.region === "girne");
  const iskeleProjects = projects.filter((p) => p.region === "iskele");

  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white/90 text-sm mb-4">
            <Building2 className="w-4 h-4" />
            {projects.length} {dict.projects.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            {dict.projects.title}
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
            {dict.projects.subtitle}
          </p>
        </div>
      </section>

      {/* Girne / Kyrenia Region */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="section-divider mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              {dict.projects.girneTitle}
            </h2>
            <p className="text-text-light mt-2">
              {dict.projects.girneSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {girneProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                dict={dict.projectCard}
              />
            ))}
          </div>
        </div>
      </section>

      {/* İskele Region */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="section-divider mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              {dict.projects.iskeleTitle}
            </h2>
            <p className="text-text-light mt-2">
              {dict.projects.iskeleSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iskeleProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                dict={dict.projectCard}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
