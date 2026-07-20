"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { defaultLocale, hasLocale, type Locale } from "@/app/_lib/i18n";

// not-found.tsx receives no params, so the locale is inferred from the URL.
// The strings live here instead of the server-only dictionaries because this
// must render as a client component.
const MESSAGES: Record<
  Locale,
  { title: string; text: string; backHome: string }
> = {
  tr: {
    title: "Sayfa Bulunamadı",
    text: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
    backHome: "Ana Sayfaya Dön",
  },
  en: {
    title: "Page Not Found",
    text: "The page you are looking for does not exist or may have been moved.",
    backHome: "Back to Home",
  },
};

export default function NotFound() {
  const pathname = usePathname();
  const first = pathname.split("/").filter(Boolean)[0];
  const locale = hasLocale(first) ? first : defaultLocale;
  const messages = MESSAGES[locale];

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-paper pt-20">
      <div className="text-center px-6">
        <p className="font-display italic text-8xl text-gold/50">404</p>
        <h1 className="font-display text-3xl text-ink mt-6">
          {messages.title}
        </h1>
        <div className="dual-rule mx-auto mt-6" aria-hidden="true" />
        <p className="text-text-light mt-6 max-w-md mx-auto">{messages.text}</p>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 bg-ink hover:bg-gold text-paper hover:text-ink px-7 py-3.5 text-sm font-medium tracking-wide transition-colors mt-9"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          {messages.backHome}
        </Link>
      </div>
    </div>
  );
}
