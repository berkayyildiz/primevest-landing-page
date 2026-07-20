import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/app/_lib/blog";
import { getWhatsAppLink } from "@/app/_lib/data";
import { getDictionary } from "@/app/_lib/dictionaries";
import {
  DATE_LOCALES,
  hasLocale,
  pageAlternates,
  paths,
} from "@/app/_lib/i18n";
import { PostCover } from "@/app/_components/blog-cover";
import { PageHeader } from "@/app/_components/page-header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.blog.title,
    description: dict.meta.blog.description,
    alternates: pageAlternates(locale, {
      tr: paths.blog("tr"),
      en: paths.blog("en"),
    }),
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const [featured, ...rest] = getBlogPosts(locale);
  const dateFormat = new Intl.DateTimeFormat(DATE_LOCALES[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <PageHeader
        eyebrow={dict.blog.badge}
        title={dict.blog.title}
        subtitle={dict.blog.subtitle}
      />

      {/* Featured Post */}
      <section className="pt-16 pb-8 bg-paper">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href={paths.blogPost(locale, featured.slug)}
            className="block bg-white border border-line group"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto min-h-[300px] overflow-hidden">
                <PostCover
                  post={featured}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.16em]">
                  <span className="text-gold-dark">{featured.category}</span>
                  <span className="text-text-muted">
                    {dateFormat.format(new Date(featured.date))}
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl text-ink leading-snug mt-4 group-hover:text-gold-dark transition-colors">
                  {featured.title}
                </h2>
                <p className="text-text-light mt-4 leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-ink font-medium text-sm mt-7 border-b border-gold pb-1 w-fit group-hover:text-gold-dark transition-colors">
                  {dict.blog.readMore}
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Other Posts */}
      <section className="pt-8 pb-20 bg-paper">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={paths.blogPost(locale, post.slug)}
                className="block bg-white border border-line group"
              >
                <div className="relative h-52 overflow-hidden">
                  <PostCover
                    post={post}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                    <span className="text-gold-dark">{post.category}</span>
                    <span className="text-text-muted">{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-xl text-ink leading-snug mt-3 group-hover:text-gold-dark transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-light text-sm mt-3 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ink">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl text-paper leading-tight">
              {dict.blog.ctaTitle}
            </h2>
            <div className="dual-rule dual-rule-light mt-7" aria-hidden="true" />
            <p className="text-white/60 mt-8 text-lg leading-relaxed">
              {dict.blog.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href={paths.contact(locale)}
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ink px-8 py-4 text-sm font-medium tracking-wide transition-colors"
              >
                {dict.blog.ctaContact}
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <a
                href={getWhatsAppLink(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white hover:border-gold-light hover:text-gold-light px-8 py-4 text-sm font-medium tracking-wide transition-colors"
              >
                {dict.blog.ctaWhatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
