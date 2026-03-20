import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutPreview from "@/components/home/AboutPreview";
import RegionsSection from "@/components/home/RegionsSection";
import GallerySection from "@/components/home/GallerySection";
import FAQSection from "@/components/home/FAQSection";
import { FAQJsonLd } from "@/components/seo/JsonLd";
import { FAQ_ITEMS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <FAQJsonLd faqs={FAQ_ITEMS} />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutPreview />
      <RegionsSection />
      <GallerySection />
      <FAQSection />

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Randevu almak veya sorularınız için bize ulaşın
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-primary hover:bg-gray-100 transition-colors"
            >
              Randevu Al
            </Link>
            <a
              href="https://wa.me/905313439015"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              WhatsApp ile Yazın
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
