"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function ImageGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 py-4">
        {/* Main image */}
        <button
          onClick={() => setLightbox(0)}
          className="col-span-2 row-span-2 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden cursor-pointer group"
        >
          <Image
            src={images[0]}
            alt={`${name} - Ana görsel`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </button>

        {/* Secondary images */}
        {images.slice(1, 5).map((img, i) => (
          <button
            key={img}
            onClick={() => setLightbox(i + 1)}
            className="relative h-[145px] md:h-[195px] rounded-xl overflow-hidden cursor-pointer group"
          >
            <Image
              src={img}
              alt={`${name} - Görsel ${i + 2}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            {i === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  +{images.length - 5} Foto
                </span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
            onClick={() => setLightbox(null)}
            aria-label="Kapat"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                lightbox === 0 ? images.length - 1 : lightbox - 1
              );
            }}
            aria-label="Önceki"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div
            className="relative w-full max-w-5xl h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox]}
              alt={`${name} - Görsel ${lightbox + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              quality={90}
            />
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                lightbox === images.length - 1 ? 0 : lightbox + 1
              );
            }}
            aria-label="Sonraki"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-4 text-white/60 text-sm">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
