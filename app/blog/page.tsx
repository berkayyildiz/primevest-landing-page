import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/app/_lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Kuzey Kıbrıs gayrimenkul yatırımı hakkında güncel bilgiler, pazar analizleri, yasal rehberler ve uzman görüşleri.",
};

export default function BlogPage() {
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

      {/* Posts */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {BLOG_POSTS.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl p-8 hover:shadow-lg transition-all border border-transparent hover:border-accent/20 group"
              >
                <div className="flex items-center gap-3 text-sm text-text-muted mb-3">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full font-medium text-xs">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString("tr-TR", {
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
                <h2 className="text-xl sm:text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-text-light mt-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1 text-accent font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                  Devamını Okuyun
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
