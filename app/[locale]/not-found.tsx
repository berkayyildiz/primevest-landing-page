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
    <div className="min-h-[60vh] flex items-center justify-center bg-surface">
      <div className="text-center px-4">
        <h1 className="text-7xl font-bold text-primary/20">404</h1>
        <h2 className="text-2xl font-bold text-primary mt-4">
          {messages.title}
        </h2>
        <p className="text-text-light mt-2 max-w-md mx-auto">
          {messages.text}
        </p>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-xl font-semibold transition-all mt-6"
        >
          <ArrowLeft className="w-4 h-4" />
          {messages.backHome}
        </Link>
      </div>
    </div>
  );
}
