import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  defaultLocale,
  hasLocale,
  locales,
  LOCALE_COOKIE,
  type Locale,
} from "@/app/_lib/i18n";

// Known legacy Turkish paths (/projeler, /blog/...) are permanently redirected
// to /tr by next.config.ts before the proxy runs. The proxy only handles the
// remaining unprefixed requests — most importantly "/" — by choosing a locale
// from the visitor's cookie or Accept-Language header.
function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (hasLocale(cookie)) return cookie;

  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const qParam = params.find((p) => p.trim().startsWith("q="));
      const q = qParam ? parseFloat(qParam.split("=")[1]) : 1;
      return { language: tag.trim().toLowerCase().split("-")[0], q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { language } of preferred) {
    if (hasLocale(language)) return language;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocalePrefix) return;

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  // 307 (not permanent): the target depends on cookie/Accept-Language, so it
  // must never be cached by clients or crawlers.
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: [
    // Skip API routes, Next internals and any path with a file extension
    // (images, sitemap.xml, robots.txt, favicon.ico, ...).
    "/((?!api|_next|.*\\..*).*)",
  ],
};
