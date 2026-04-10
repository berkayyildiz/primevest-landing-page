import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen, Phone } from "lucide-react";
import { BLOG_POSTS, getWhatsAppLink } from "@/app/_lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Kuzey Kıbrıs gayrimenkul yatırımı hakkında güncel bilgiler, pazar analizleri, yasal rehberler ve uzman görüşleri.",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white/90 text-sm mb-4">
            <BookOpen className="w-4 h-4" />
            Yatırım Rehberi
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Blog</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
            Kuzey Kıbrıs gayrimenkul yatırımı hakkında bilmeniz gereken her
            şey: pazar analizleri, yasal süreçler ve uzman tavsiyeleri.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/blog/${featured.slug}`}
            className="block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-transparent hover:border-accent/20 group"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto min-h-[280px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-text-muted mb-3">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full font-medium text-xs">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(featured.date).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-text-light mt-3 leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-1 text-accent font-semibold text-sm mt-5 group-hover:gap-2 transition-all">
                  Devamını Okuyun
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Other Posts */}
      <section className="py-12 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-transparent hover:border-accent/20 group"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
                    <span className="bg-accent/10 text-accent px-2.5 py-0.5 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-light text-sm mt-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-accent font-semibold text-xs mt-3 group-hover:gap-2 transition-all">
                    Devamını Okuyun
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Yatırım Danışmanlığı Almak İster Misiniz?
          </h2>
          <p className="text-white/70 mt-3 text-lg">
            Yazılarımızda bahsettiğimiz fırsatları değerlendirmek için uzman
            ekibimizle görüşün. İlk danışmanlık ücretsizdir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              İletişime Geçin
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              WhatsApp ile Yazın
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
