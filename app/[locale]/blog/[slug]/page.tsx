import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getBlogPosts, getBlogPostBySlug, type BlogPost } from "@/app/_lib/blog";
import { getDictionary } from "@/app/_lib/dictionaries";
import {
  BLOG_SLUGS,
  DATE_LOCALES,
  hasLocale,
  pageAlternates,
  paths,
  SITE_URL,
  translateBlogSlug,
  type Locale,
} from "@/app/_lib/i18n";
import { COMPANY } from "@/app/_lib/data";
import { ContactForm } from "@/app/_components/contact-form";
import { PostCover } from "@/app/_components/blog-cover";

// Blog slugs are localized, so they are generated per locale from the parent
// [locale] params.
export async function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  if (!hasLocale(params.locale)) return [];
  return getBlogPosts(params.locale).map((post) => ({ slug: post.slug }));
}

// Looks up the post for this locale; if the slug belongs to the other
// language (e.g. /en/blog/<turkish-slug>), redirects permanently to the
// localized slug so each post has one canonical URL per locale.
function resolvePost(locale: Locale, slug: string): BlogPost {
  const post = getBlogPostBySlug(locale, slug);
  if (post) return post;

  const translated = translateBlogSlug(slug, locale);
  if (translated !== slug && getBlogPostBySlug(locale, translated)) {
    permanentRedirect(paths.blogPost(locale, translated));
  }
  notFound();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) return {};
  const post = getBlogPostBySlug(locale, slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: pageAlternates(locale, {
      tr: paths.blogPost("tr", BLOG_SLUGS[post.key].tr),
      en: paths.blogPost("en", BLOG_SLUGS[post.key].en),
    }),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      // Explicit fallback: this openGraph object replaces the root
      // file-convention image, so omitting `images` would leave imageless
      // posts with no og:image at all.
      images: [post.image ?? "/opengraph-image.png"],
    },
  };
}

function BlogPostJsonLd({ post, locale }: { post: BlogPost; locale: Locale }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image ?? "/opengraph-image.png"}`,
    datePublished: post.date,
    inLanguage: locale,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: `${SITE_URL}${paths.home(locale)}`,
    },
    mainEntityOfPage: `${SITE_URL}${paths.blogPost(locale, post.slug)}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) notFound();
  const post = resolvePost(locale, slug);
  const dict = await getDictionary(locale);
  const allPosts = getBlogPosts(locale);

  return (
    <>
      {/* Header */}
      <section className="bg-ink pt-32 pb-14">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href={paths.blog(locale)}
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-white/50 hover:text-gold-light transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
            {dict.blogPost.allPosts}
          </Link>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] mb-5">
            <span className="text-gold-light">{post.category}</span>
            <span className="text-white/50">
              {new Date(post.date).toLocaleDateString(DATE_LOCALES[locale], {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="text-white/50">{post.readTime}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl text-paper leading-[1.15]">
            {post.title}
          </h1>
          <div className="dual-rule dual-rule-light mt-8" aria-hidden="true" />
        </div>
      </section>

      {/* Cover Image */}
      <section className="bg-paper">
        <div className="max-w-4xl mx-auto px-6 pt-10">
          <div className="relative h-[300px] sm:h-[420px] overflow-hidden border border-line">
            <PostCover
              post={post}
              sizes="(max-width: 896px) 100vw, 896px"
              imageClassName="object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-paper">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="font-display text-2xl text-ink mt-10 mb-4"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3 key={i} className="text-lg font-medium text-ink mt-8 mb-2">
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-text-light text-[16px] leading-[1.8] mb-5"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white border border-line p-7">
                  <div className="dual-rule mb-5" aria-hidden="true" />
                  <h3 className="font-display text-xl text-ink mb-2">
                    {dict.blogPost.advisoryTitle}
                  </h3>
                  <p className="text-text-light text-sm mb-6 leading-relaxed">
                    {dict.blogPost.advisoryText}
                  </p>
                  <ContactForm variant="compact" dict={dict.contactForm} />
                </div>

                {/* Other Posts */}
                <div className="bg-white border border-line p-7">
                  <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-gold-dark mb-5">
                    {dict.blogPost.otherPosts}
                  </h3>
                  <div className="space-y-4">
                    {allPosts
                      .filter((p) => p.slug !== post.slug)
                      .map((p) => (
                        <Link
                          key={p.slug}
                          href={paths.blogPost(locale, p.slug)}
                          className="block text-sm text-text-light hover:text-gold-dark transition-colors leading-snug"
                        >
                          {p.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <RelatedPosts
        currentSlug={post.slug}
        posts={allPosts}
        locale={locale}
        title={dict.blogPost.relatedPosts}
      />
      <BlogPostJsonLd post={post} locale={locale} />
    </>
  );
}

function RelatedPosts({
  currentSlug,
  posts,
  locale,
  title,
}: {
  currentSlug: string;
  posts: BlogPost[];
  locale: Locale;
  title: string;
}) {
  // Pick 3 posts, deterministic based on slug hash
  const others = posts.filter((p) => p.slug !== currentSlug);
  const hash = currentSlug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const shuffled = [...others].sort(
    (a, b) => ((a.slug.length * hash) % 97) - ((b.slug.length * hash) % 97)
  );
  const related = shuffled.slice(0, 3);

  return (
    <section className="py-20 bg-stone">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-gold-dark mb-10">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={paths.blogPost(locale, p.slug)}
              className="block bg-white border border-line group"
            >
              <div className="relative h-44 overflow-hidden">
                <PostCover post={p} sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold-dark">
                  {p.category}
                </span>
                <h3 className="font-display text-lg text-ink leading-snug mt-2.5 group-hover:text-gold-dark transition-colors line-clamp-2">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
