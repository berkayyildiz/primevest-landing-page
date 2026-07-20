import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader, Schibsted_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { Navbar } from "../_components/navbar";
import { Footer } from "../_components/footer";
import { WhatsAppFAB } from "../_components/whatsapp-fab";
import { Analytics } from "@vercel/analytics/react";
import { getDictionary } from "../_lib/dictionaries";
import { COMPANY, getFounder, getWhatsAppLink } from "../_lib/data";
import {
  hasLocale,
  locales,
  OG_LOCALES,
  pageAlternates,
  paths,
  SITE_URL,
  type Locale,
} from "../_lib/i18n";

// latin-ext covers the Turkish characters (ı, ğ, ş, İ …) in both locales.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin", "latin-ext"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.defaultTitle,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: pageAlternates(
      locale,
      { tr: paths.home("tr"), en: paths.home("en") },
      "/"
    ),
    openGraph: {
      type: "website",
      locale: OG_LOCALES[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => OG_LOCALES[l]),
      siteName: "Primevest Investment",
      title: dict.meta.defaultTitle,
      description: dict.meta.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function OrganizationJsonLd({
  locale,
  description,
}: {
  locale: Locale;
  description: string;
}) {
  const founder = getFounder(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: COMPANY.name,
    description,
    url: `${SITE_URL}${paths.home(locale)}`,
    logo: `${SITE_URL}/images/brand/logo.png`,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city[locale],
      addressCountry: COMPANY.address.country[locale],
    },
    founder: {
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.title,
    },
    sameAs: ["https://instagram.com/primevestinvestment"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${newsreader.variable} ${schibsted.variable} ${plexMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar locale={locale} dict={dict.nav} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <WhatsAppFAB
          dict={dict.whatsappFab}
          contactPerson={COMPANY.contactPerson}
          whatsappUrl={getWhatsAppLink(locale)}
        />
        <OrganizationJsonLd
          locale={locale}
          description={dict.meta.ogDescription}
        />
        <Analytics />
      </body>
    </html>
  );
}
