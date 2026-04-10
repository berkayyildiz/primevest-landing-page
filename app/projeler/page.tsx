import type { Metadata } from "next";
import { PROJECTS } from "@/app/_lib/data";
import { ProjectCard } from "@/app/_components/project-card";
import { Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Kuzey Kıbrıs'ın en prestijli lokasyonlarında lüks konut projeleri. İskele, Girne, Long Beach, Esentepe bölgelerinde yatırım fırsatları.",
};

export default function ProjectsPage() {
  const girneProjects = PROJECTS.filter((p) => p.region === "Girne");
  const iskeleProjects = PROJECTS.filter((p) => p.region === "İskele");

  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white/90 text-sm mb-4">
            <Building2 className="w-4 h-4" />
            {PROJECTS.length} Proje
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Projelerimiz
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
            Kuzey Kıbrıs&apos;ın en değerli lokasyonlarında özenle seçilmiş
            gayrimenkul projeleri.
          </p>
        </div>
      </section>

      {/* Girne Region */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="section-divider mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              Girne Bölgesi
            </h2>
            <p className="text-text-light mt-2">
              Esentepe, Tatlısu, Bahçeli &mdash; Akdeniz&apos;in en güzel
              sahillerinde lüks yaşam projeleri.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {girneProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
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
              İskele Bölgesi
            </h2>
            <p className="text-text-light mt-2">
              Long Beach ve çevresinde &mdash; Kuzey Kıbrıs&apos;ın en hızlı
              gelişen yatırım bölgesi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iskeleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
