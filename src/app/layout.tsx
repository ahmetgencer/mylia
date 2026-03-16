import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Menemen, Ulukent, Egekent Veteriner Kliniği | Mylia",
    template: "%s | Mylia Veteriner",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "veteriner",
    "menemen veteriner",
    "ulukent veteriner",
    "egekent veteriner",
    "harmandalı veteriner",
    "İzmir veteriner",
    "kedi veteriner",
    "köpek veteriner",
    "acil veteriner",
    "7/24 veteriner",
    "veteriner kliniği",
    "aşılama",
    "kısırlaştırma",
    "mikroçip",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Menemen, Ulukent, Egekent Veteriner Kliniği | Mylia",
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Mylia Veteriner Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menemen, Ulukent, Egekent Veteriner Kliniği | Mylia",
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      {SITE_CONFIG.gtmId && <GoogleTagManager gtmId={SITE_CONFIG.gtmId} />}
      <body className="antialiased">
        <LocalBusinessJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
