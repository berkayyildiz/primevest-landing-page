import type { NextConfig } from "next";

// The filesystem routes under app/[locale]/ use Turkish segment names
// (hizmetler, hakkimizda, iletisim). English visitors see translated URL
// segments (services, about, contact); the rewrites below map the public
// English URLs onto the internal routes without changing the address bar.
const SEGMENT_MAP = [
  { internal: "hizmetler", en: "services" },
  { internal: "hakkimizda", en: "about" },
  { internal: "iletisim", en: "contact" },
];

const LOCALES = ["tr", "en"] as const;

// Blog posts removed in the pivot away from real estate. Before the pivot the
// blog router also redirected cross-locale slug forms (e.g. /en/blog/<turkish
// slug>), so every retired slug is redirected under both locale prefixes.
const RETIRED_BLOG_SLUGS = [
  "kuzey-kibrista-gayrimenkul-yatirimi-rehberi",
  "2026-kuzey-kibris-emlak-piyasasi",
  "kuzey-kibrista-tapu-islemleri",
  "kuzey-kibrista-kira-getirisi",
  "long-beach-iskele-yatirim-rehberi",
  "kuzey-kibrista-yasam-kalitesi",
  "north-cyprus-property-investment-guide",
  "north-cyprus-real-estate-market-2026",
  "north-cyprus-title-deed-process",
  "north-cyprus-rental-income",
  "long-beach-iskele-investment-guide",
  "quality-of-life-in-north-cyprus",
];

const nextConfig: NextConfig = {
  async redirects() {
    // :path* matches zero or more segments, so each wildcard source also
    // covers the bare path.
    const legacyTurkishPaths = [
      ...SEGMENT_MAP.map(({ internal }) => ({
        source: `/${internal}`,
        destination: `/tr/${internal}`,
        permanent: true,
      })),
      { source: "/blog/:path*", destination: "/tr/blog/:path*", permanent: true },
    ];

    // The real estate project pages no longer exist. Every old project URL —
    // listing and detail, any locale form — lands on the services page.
    const retiredProjectPaths = [
      ...["/projeler/:path*", "/tr/projeler/:path*", "/tr/projects/:path*"].map(
        (source) => ({ source, destination: "/tr/hizmetler", permanent: true })
      ),
      ...["/en/projects/:path*", "/en/projeler/:path*"].map((source) => ({
        source,
        destination: "/en/services",
        permanent: true,
      })),
    ];

    const retiredBlogPaths = LOCALES.flatMap((locale) =>
      RETIRED_BLOG_SLUGS.map((slug) => ({
        source: `/${locale}/blog/${slug}`,
        destination: `/${locale}/blog`,
        permanent: true,
      }))
    );

    // A URL with the wrong language's segment (e.g. /en/hizmetler or
    // /tr/services) is corrected permanently so each page has exactly one
    // canonical URL per locale.
    const crossLocaleCorrections = SEGMENT_MAP.flatMap(({ internal, en }) => [
      { source: `/en/${internal}`, destination: `/en/${en}`, permanent: true },
      { source: `/tr/${en}`, destination: `/tr/${internal}`, permanent: true },
    ]);

    return [
      ...legacyTurkishPaths,
      ...retiredProjectPaths,
      ...retiredBlogPaths,
      ...crossLocaleCorrections,
    ];
  },

  async rewrites() {
    return {
      // beforeFiles: the [locale] catch-all route would otherwise swallow
      // these paths before afterFiles rewrites get a chance to run.
      beforeFiles: SEGMENT_MAP.map(({ internal, en }) => ({
        source: `/en/${en}`,
        destination: `/en/${internal}`,
      })),
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
