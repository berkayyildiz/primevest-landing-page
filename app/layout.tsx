import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { WhatsAppFAB } from "./_components/whatsapp-fab";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primevestinvestment.com"),
  title: {
    default:
      "Primevest Investment | Kuzey Kıbrıs Gayrimenkul Yatırım Danışmanlığı",
    template: "%s | Primevest Investment",
  },
  description:
    "Kuzey Kıbrıs'ta güvenilir gayrimenkul yatırım danışmanlığı. 21 yıllık finans deneyimi ile doğru zamanda, doğru lokasyonda, doğru yatırım. Lüks konut projeleri, stratejik danışmanlık.",
  keywords: [
    "Kuzey Kıbrıs gayrimenkul",
    "KKTC yatırım",
    "North Cyprus property",
    "Kıbrıs emlak",
    "gayrimenkul danışmanlık",
    "İskele projeler",
    "Girne projeler",
    "Long Beach",
    "Esentepe",
    "lüks konut",
    "yatırım fırsatları",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Primevest Investment",
    title: "Primevest Investment | Kuzey Kıbrıs Gayrimenkul Yatırım Danışmanlığı",
    description:
      "Kuzey Kıbrıs'ta güvenilir gayrimenkul yatırım danışmanlığı. Lüks konut projeleri ve stratejik danışmanlık.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
