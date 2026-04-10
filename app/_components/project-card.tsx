import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Maximize2, ArrowRight } from "lucide-react";
import type { Project } from "@/app/_lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projeler/${project.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-accent/30"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              project.status === "satis"
                ? "bg-green-500 text-white"
                : "bg-gold text-primary"
            }`}
          >
            {project.status === "satis" ? "Satışta" : "Ön Satış"}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <div className="flex items-center gap-1 text-text-light text-sm mt-1">
          <MapPin className="w-3.5 h-3.5" />
          {project.location}
        </div>

        <p className="text-text-light text-sm mt-3 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Specs */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-1.5 text-sm text-text-light">
            <BedDouble className="w-4 h-4 text-accent" />
            <span>{project.bedrooms} Yatak</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-text-light">
            <Maximize2 className="w-4 h-4 text-accent" />
            <span>{project.sizeRange}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1 text-accent font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
          Detayları İncele
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
