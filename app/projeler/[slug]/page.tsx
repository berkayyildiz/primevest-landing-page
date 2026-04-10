import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  BedDouble,
  Maximize2,
  Calendar,
  Building2,
  CheckCircle2,
  ArrowLeft,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PROJECTS, getProjectBySlug, COMPANY, getWhatsAppLink } from "@/app/_lib/data";
import { ContactForm } from "@/app/_components/contact-form";
import { ImageGallery } from "./gallery";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description.slice(0, 160),
    openGraph: {
      title: `${project.name} | Primevest Investment`,
      description: project.shortDescription,
      images: [project.images[0]],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const whatsappMsg = `Merhaba, ${project.name} projesi hakkında bilgi almak istiyorum.`;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-primary pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projeler"
            className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tüm Projeler
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                  project.status === "satis"
                    ? "bg-green-500 text-white"
                    : "bg-gold text-primary"
                }`}
              >
                {project.status === "satis" ? "Satışta" : "Ön Satış"}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {project.name}
              </h1>
              <div className="flex items-center gap-2 text-white/70 mt-2">
                <MapPin className="w-4 h-4" />
                {project.location}, Kuzey Kıbrıs
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href={getWhatsAppLink(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1fb855] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                WhatsApp ile Bilgi Alın
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Arayın
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-surface-dark py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageGallery images={project.images} name={project.name} />
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    icon: <BedDouble className="w-5 h-5" />,
                    label: "Yatak Odası",
                    value: project.bedrooms,
                  },
                  {
                    icon: <Maximize2 className="w-5 h-5" />,
                    label: "Alan",
                    value: project.sizeRange,
                  },
                  {
                    icon: <Calendar className="w-5 h-5" />,
                    label: "Teslim",
                    value: project.completion,
                  },
                  {
                    icon: <Building2 className="w-5 h-5" />,
                    label: "Toplam Ünite",
                    value: project.totalUnits > 0 ? `${project.totalUnits}` : "—",
                  },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-surface rounded-xl p-4 text-center"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent mx-auto">
                      {spec.icon}
                    </div>
                    <div className="text-sm text-text-muted mt-2">
                      {spec.label}
                    </div>
                    <div className="text-base font-bold text-primary mt-0.5">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Unit Types */}
              <div>
                <h2 className="text-xl font-bold text-primary mb-3">
                  Daire Tipleri
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.unitTypes.map((type) => (
                    <span
                      key={type}
                      className="px-4 py-2 bg-surface rounded-lg text-sm font-medium text-primary border border-border"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-bold text-primary mb-3">
                  Proje Hakkında
                </h2>
                <p className="text-text-light leading-relaxed text-base">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-bold text-primary mb-4">
                  Özellikler & Tesisler
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-text-light"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-1">
                  Bu Proje Hakkında Bilgi Alın
                </h3>
                <p className="text-text-light text-sm mb-6">
                  Fiyat, ödeme planı ve detaylar için formu doldurun.
                </p>
                <ContactForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
