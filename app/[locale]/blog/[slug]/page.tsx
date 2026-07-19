import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
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
      <section className="bg-primary pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={paths.blog(locale)}
            className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {dict.blogPost.allPosts}
          </Link>
          <div className="flex items-center gap-3 text-sm text-white/60 mb-4">
            <span className="bg-accent/20 text-accent-light px-3 py-1 rounded-full font-medium text-xs">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString(DATE_LOCALES[locale], {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Cover Image */}
      <section className="bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
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
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2 prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-2xl font-bold text-primary mt-8 mb-4"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3
                      key={i}
                      className="text-lg font-bold text-primary mt-6 mb-2"
                    >
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-text-light leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-surface rounded-2xl p-6">
                  <h3 className="font-bold text-primary mb-4">
                    {dict.blogPost.advisoryTitle}
                  </h3>
                  <p className="text-text-light text-sm mb-4">
                    {dict.blogPost.advisoryText}
                  </p>
                  <ContactForm variant="compact" dict={dict.contactForm} />
                </div>

                {/* Other Posts */}
                <div className="bg-surface rounded-2xl p-6">
                  <h3 className="font-bold text-primary mb-4">
                    {dict.blogPost.otherPosts}
                  </h3>
                  <div className="space-y-3">
                    {allPosts
                      .filter((p) => p.slug !== post.slug)
                      .map((p) => (
                        <Link
                          key={p.slug}
                          href={paths.blogPost(locale, p.slug)}
                          className="block text-sm text-text-light hover:text-accent transition-colors"
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
    (a, b) =>
      ((a.slug.length * hash) % 97) - ((b.slug.length * hash) % 97)
  );
  const related = shuffled.slice(0, 3);

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="section-divider mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={paths.blogPost(locale, p.slug)}
              className="block bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-transparent hover:border-accent/20 group"
            >
              <div className="relative h-44 overflow-hidden">
                <PostCover post={p} sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <span className="bg-accent/10 text-accent px-2.5 py-0.5 rounded-full font-medium text-xs">
                  {p.category}
                </span>
                <h3 className="text-base font-bold text-primary mt-2 group-hover:text-accent transition-colors line-clamp-2">
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
