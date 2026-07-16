import type { MetadataRoute } from "next";
import { PROJECT_SLUGS } from "@/app/_lib/data";
import { BLOG_SLUGS, locales, paths, SITE_URL } from "@/app/_lib/i18n";
import { getBlogPosts } from "@/app/_lib/blog";

type SitemapEntry = MetadataRoute.Sitemap[number];

// One entry per locale per page, each carrying the full hreflang alternate
// set so Google can associate the language versions.
function localizedEntries(
  pathsByLocale: Record<"tr" | "en", string>,
  options: Pick<SitemapEntry, "lastModified" | "changeFrequency" | "priority">
): MetadataRoute.Sitemap {
  const languages = {
    tr: `${SITE_URL}${pathsByLocale.tr}`,
    en: `${SITE_URL}${pathsByLocale.en}`,
  };
  return locales.map((locale) => ({
    url: `${SITE_URL}${pathsByLocale[locale]}`,
    alternates: { languages },
    ...options,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    ...localizedEntries(
      { tr: paths.home("tr"), en: paths.home("en") },
      { lastModified: new Date(), changeFrequency: "weekly", priority: 1 }
    ),
    ...localizedEntries(
      { tr: paths.projects("tr"), en: paths.projects("en") },
      { lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 }
    ),
    ...localizedEntries(
      { tr: paths.about("tr"), en: paths.about("en") },
      { lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 }
    ),
    ...localizedEntries(
      { tr: paths.contact("tr"), en: paths.contact("en") },
      { lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 }
    ),
    ...localizedEntries(
      { tr: paths.blog("tr"), en: paths.blog("en") },
      { lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 }
    ),
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECT_SLUGS.flatMap((slug) =>
    localizedEntries(
      { tr: paths.project("tr", slug), en: paths.project("en", slug) },
      { lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 }
    )
  );

  const blogRoutes: MetadataRoute.Sitemap = getBlogPosts("tr").flatMap(
    (post) =>
      localizedEntries(
        {
          tr: paths.blogPost("tr", BLOG_SLUGS[post.key].tr),
          en: paths.blogPost("en", BLOG_SLUGS[post.key].en),
        },
        {
          lastModified: new Date(post.date),
          changeFrequency: "monthly",
          priority: 0.6,
        }
      )
  );

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
