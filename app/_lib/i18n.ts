// Client-safe i18n configuration: locales, public route segments and URL
// helpers. Translated content lives in the server-only dictionaries and the
// data modules; nothing here should pull heavy content into client bundles.

export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export const SITE_URL = "https://primevestinvestment.com";

export function hasLocale(value: string | undefined): value is Locale {
  return (locales as readonly string[]).includes(value ?? "");
}

// The filesystem routes use the Turkish segment names (app/[locale]/hizmetler,
// hakkimizda, iletisim). English visitors see the `en` segments below;
// next.config.ts rewrites them to the internal Turkish-named routes.
export const ROUTE_SEGMENTS = {
  services: { tr: "hizmetler", en: "services" },
  about: { tr: "hakkimizda", en: "about" },
  contact: { tr: "iletisim", en: "contact" },
  blog: { tr: "blog", en: "blog" },
} as const;

export type RouteKey = keyof typeof ROUTE_SEGMENTS;

export const paths = {
  home: (locale: Locale) => `/${locale}`,
  services: (locale: Locale) => `/${locale}/${ROUTE_SEGMENTS.services[locale]}`,
  about: (locale: Locale) => `/${locale}/${ROUTE_SEGMENTS.about[locale]}`,
  contact: (locale: Locale) => `/${locale}/${ROUTE_SEGMENTS.contact[locale]}`,
  blog: (locale: Locale) => `/${locale}/${ROUTE_SEGMENTS.blog[locale]}`,
  blogPost: (locale: Locale, slug: string) =>
    `/${locale}/${ROUTE_SEGMENTS.blog[locale]}/${slug}`,
};

// Blog posts have locale-specific slugs. The canonical pairs live here so the
// client-side language switcher can translate URLs without importing the
// full blog content.
export const BLOG_SLUGS = {
  advisory: {
    tr: "bireysel-yatirim-danismanligi-nedir",
    en: "what-is-personal-investment-advisory",
  },
  cyprusEconomy: {
    tr: "kuzey-kibris-ekonomisi-ve-finansal-gorunum",
    en: "north-cyprus-economy-financial-outlook",
  },
  banking: {
    tr: "kktc-de-bankacilik-ve-mevduat-rehberi",
    en: "banking-and-deposits-in-north-cyprus",
  },
  portfolio: {
    tr: "portfoy-cesitlendirmesi-rehberi",
    en: "portfolio-diversification-guide",
  },
  fxSavings: {
    tr: "doviz-bazli-birikim-stratejileri",
    en: "foreign-currency-savings-strategies",
  },
  press: {
    tr: "primevest-investment-basinda",
    en: "primevest-investment-in-the-press",
  },
  financialPlanning: {
    tr: "finansal-hedef-planlamasi",
    en: "financial-goal-planning",
  },
} as const;

export type BlogKey = keyof typeof BLOG_SLUGS;

// Returns the target locale's slug for a blog post, given the slug in any
// locale. Unknown slugs are returned unchanged.
export function translateBlogSlug(slug: string, to: Locale): string {
  const pair = Object.values(BLOG_SLUGS).find((p) =>
    locales.some((locale) => p[locale] === slug)
  );
  return pair ? pair[to] : slug;
}

// Maps a pathname to its equivalent in the target locale. Used by the
// language switcher. Segments are matched against every locale's names
// because during SSR of a rewritten URL (e.g. /en/services) usePathname
// reports the internal path (/en/hizmetler), while the hydrated client
// reports the public one — both must resolve identically.
export function getAlternatePath(pathname: string, target: Locale): string {
  const [first, second, third] = pathname.split("/").filter(Boolean);
  if (!hasLocale(first)) return `/${target}`;
  if (!second) return `/${target}`;

  const key = (Object.keys(ROUTE_SEGMENTS) as RouteKey[]).find((k) =>
    locales.some((locale) => ROUTE_SEGMENTS[k][locale] === second)
  );
  if (!key) return `/${target}`;
  if (!third) return `/${target}/${ROUTE_SEGMENTS[key][target]}`;

  const slug = key === "blog" ? translateBlogSlug(third, target) : third;
  return `/${target}/${ROUTE_SEGMENTS[key][target]}/${slug}`;
}

// hreflang / canonical helper for generateMetadata. `pathsByLocale` are
// site-relative public URLs; x-default points to the Turkish version unless
// overridden (the homepage points it at "/", the language detector).
export function pageAlternates(
  locale: Locale,
  pathsByLocale: Record<Locale, string>,
  xDefault?: string
) {
  return {
    canonical: pathsByLocale[locale],
    languages: {
      tr: pathsByLocale.tr,
      en: pathsByLocale.en,
      "x-default": xDefault ?? pathsByLocale.tr,
    },
  };
}

export const OG_LOCALES: Record<Locale, string> = {
  tr: "tr_TR",
  en: "en_US",
};

// en-GB: savings and major transactions in North Cyprus are commonly GBP-based
// and the English-speaking audience is primarily UK-oriented.
export const DATE_LOCALES: Record<Locale, string> = {
  tr: "tr-TR",
  en: "en-GB",
};

export const LOCALE_COOKIE = "NEXT_LOCALE";
