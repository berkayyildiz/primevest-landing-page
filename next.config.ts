import type { NextConfig } from "next";

// The filesystem routes under app/[locale]/ use Turkish segment names
// (projeler, hakkimizda, iletisim). English visitors see translated URL
// segments (projects, about, contact); the rewrites below map the public
// English URLs onto the internal routes without changing the address bar.
const SEGMENT_MAP = [
  { internal: "projeler", en: "projects", hasSlug: true },
  { internal: "hakkimizda", en: "about", hasSlug: false },
  { internal: "iletisim", en: "contact", hasSlug: false },
];

const nextConfig: NextConfig = {
  async redirects() {
    const legacyTurkishPaths = [
      ...SEGMENT_MAP.map(({ internal, hasSlug }) => ({
        source: hasSlug ? `/${internal}/:path*` : `/${internal}`,
        destination: hasSlug ? `/tr/${internal}/:path*` : `/tr/${internal}`,
        permanent: true,
      })),
      { source: "/blog/:path*", destination: "/tr/blog/:path*", permanent: true },
      { source: "/blog", destination: "/tr/blog", permanent: true },
    ];

    // A URL with the wrong language's segment (e.g. /en/projeler or
    // /tr/projects) is corrected permanently so each page has exactly one
    // canonical URL per locale.
    const crossLocaleCorrections = SEGMENT_MAP.flatMap(
      ({ internal, en, hasSlug }) => [
        {
          source: hasSlug ? `/en/${internal}/:path*` : `/en/${internal}`,
          destination: hasSlug ? `/en/${en}/:path*` : `/en/${en}`,
          permanent: true,
        },
        {
          source: hasSlug ? `/tr/${en}/:path*` : `/tr/${en}`,
          destination: hasSlug ? `/tr/${internal}/:path*` : `/tr/${internal}`,
          permanent: true,
        },
      ]
    );

    return [...legacyTurkishPaths, ...crossLocaleCorrections];
  },

  async rewrites() {
    return {
      // beforeFiles: the [locale] catch-all route would otherwise swallow
      // these paths before afterFiles rewrites get a chance to run.
      beforeFiles: SEGMENT_MAP.flatMap(({ internal, en, hasSlug }) => [
        { source: `/en/${en}`, destination: `/en/${internal}` },
        ...(hasSlug
          ? [{ source: `/en/${en}/:path*`, destination: `/en/${internal}/:path*` }]
          : []),
      ]),
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
