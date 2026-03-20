import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { regions } from "@/data/regions";
import { services } from "@/data/services";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

interface Props {
  params: Promise<{ bolge: string }>;
}

export async function generateStaticParams() {
  return regions.map((region) => ({ bolge: `${region.slug}-veteriner` }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bolge: rawBolge } = await params;
  if (!rawBolge.endsWith("-veteriner")) return {};
  const bolge = rawBolge.replace(/-veteriner$/, "");
  const region = regions.find((r) => r.slug === bolge);
  if (!region) return {};

  return generatePageMetadata({
    title: region.title,
    description: region.description,
    path: `/${region.slug}-veteriner`,
    keywords: region.keywords,
  });
}

export default async function RegionPage({ params }: Props) {
  const { bolge: rawBolge } = await params;
  if (!rawBolge.endsWith("-veteriner")) notFound();
  const bolge = rawBolge.replace(/-veteriner$/, "");
  const region = regions.find((r) => r.slug === bolge);

  if (!region) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: region.title, href: `/${region.slug}-veteriner` },
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
            <span className="text-dark font-medium">{region.title}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-dark">
            {region.name}{" "}
            <span className="text-primary">Veteriner Kliniği</span>
          </h1>
          <p className="text-gray mt-4 max-w-2xl text-lg">
            {region.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark mb-6">
                {region.name} Veteriner Hizmetleri
              </h2>
              <p className="text-gray leading-relaxed mb-8">
                {region.longDescription}
              </p>

              <h3 className="text-xl font-bold text-dark mb-4">
                {region.name}&apos;de Sunduğumuz Hizmetler
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/hizmetler/${service.slug}`}
                    className="flex items-center gap-3 p-4 rounded-lg border hover:border-primary hover:shadow-md transition-all"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <h4 className="font-semibold text-dark">
                        {service.title}
                      </h4>
                      <p className="text-xs text-gray">
                        {service.shortDescription}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <h3 className="text-xl font-bold text-dark mb-4">
                {region.name} Veteriner Kliniğimize Nasıl Ulaşılır?
              </h3>
              <p className="text-gray leading-relaxed mb-4">
                Kliniğimiz {SITE_CONFIG.address.full} adresinde bulunmaktadır.
                {region.name}&apos;den kolayca ulaşabilirsiniz. Acil
                durumlar için 7/24 bizi arayabilirsiniz.
              </p>
              <div className="rounded-xl overflow-hidden h-[300px] mb-8">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.5!2d${SITE_CONFIG.coordinates.lng}!3d${SITE_CONFIG.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDM2JzQyLjEiTiAyN8KwMDQnMTAuOSJF!5e0!3m2!1str!2str!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${region.name} Mylia Veteriner Kliniği Konum`}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  {region.name}&apos;de Veteriner mi Arıyorsunuz?
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  7/24 hizmet veren kliniğimize hemen ulaşın.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="flex items-center justify-center gap-2 w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-primary hover:bg-gray-100 transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  <a
                    href={SITE_CONFIG.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white hover:bg-[#1fb855] transition-colors"
                  >
                    WhatsApp ile Yazın
                  </a>
                  <Link
                    href="/iletisim"
                    className="flex items-center justify-center gap-2 w-full rounded-lg border-2 border-white px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    Randevu Formu
                  </Link>
                </div>
              </div>

              <div className="bg-gray-light rounded-xl p-6">
                <h3 className="text-lg font-bold text-dark mb-4">
                  Diğer Hizmet Bölgelerimiz
                </h3>
                <ul className="space-y-2">
                  {regions
                    .filter((r) => r.slug !== region.slug)
                    .map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/${r.slug}-veteriner`}
                          className="flex items-center gap-2 text-gray hover:text-primary transition-colors text-sm py-1"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                          </svg>
                          {r.name} Veteriner
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="bg-white border rounded-xl p-6">
                <h3 className="text-lg font-bold text-dark mb-3">
                  Çalışma Saatleri
                </h3>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {SITE_CONFIG.workingHours}
                </div>
                <p className="text-sm text-gray mt-1">
                  {SITE_CONFIG.workingHoursDetail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
