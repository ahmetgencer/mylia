import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { services } from "@/data/services";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = generatePageMetadata({
  title: "Hizmetlerimiz",
  description:
    "Mylia Veteriner Kliniği hizmetleri: Aşılama, kısırlaştırma, mikroçip, muayene, cerrahi operasyonlar ve diş plağı temizliği. Menemen, Ulukent, Egekent'te profesyonel veteriner hizmetleri.",
  path: "/hizmetlerimiz",
  keywords: [
    "veteriner hizmetleri",
    "menemen veteriner hizmetleri",
    "kedi bakım",
    "köpek bakım",
  ],
});

export default function HizmetlerimizPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="text-sm text-gray mb-4">
            <Link href="/" className="hover:text-primary">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-dark font-medium">Hizmetlerimiz</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-dark">
            Veteriner <span className="text-primary">Hizmetlerimiz</span>
          </h1>
          <p className="text-gray mt-4 max-w-2xl text-lg">
            Modern ekipmanlar ve uzman kadromuzla evcil hayvanlarınıza en
            kapsamlı veteriner hizmetlerini sunuyoruz.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className="group bg-white rounded-xl overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Mylia Veteriner`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xl">{service.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-dark group-hover:text-primary transition-colors mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                    Detaylı Bilgi
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
