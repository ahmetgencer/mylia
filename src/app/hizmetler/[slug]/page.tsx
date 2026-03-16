import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return generatePageMetadata({
    title: `${service.title} Hizmeti`,
    description: service.description.slice(0, 160),
    path: `/hizmetler/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { name: service.title, href: `/hizmetler/${service.slug}` },
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
            <Link href="/hizmetlerimiz" className="hover:text-primary">
              Hizmetlerimiz
            </Link>
            <span className="mx-2">/</span>
            <span className="text-dark font-medium">{service.title}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-dark">
            <span className="text-3xl mr-3">{service.icon}</span>
            {service.title}
          </h1>
          <p className="text-gray mt-4 max-w-2xl text-lg">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                <Image
                  src={service.image}
                  alt={`${service.title} - Mylia Veteriner Kliniği`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-dark mb-4">
                  {service.title} Hizmeti
                </h2>
                <p className="text-gray leading-relaxed text-base">
                  {service.description}
                </p>

                <h3 className="text-xl font-bold text-dark mt-8 mb-4">
                  Neden Mylia Veteriner?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray">
                      Deneyimli ve uzman veteriner hekim kadrosu
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray">
                      Modern ve steril ekipmanlar
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray">
                      7/24 acil hizmet imkanı
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray">
                      Uygun fiyat ve şeffaf fiyatlandırma
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Randevu Alın</h3>
                <p className="text-white/80 text-sm mb-4">
                  {service.title} hizmeti için hemen randevu alın.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="flex items-center justify-center gap-2 w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-primary hover:bg-gray-100 transition-colors"
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
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
                </div>
              </div>

              {/* Other Services */}
              <div className="bg-gray-light rounded-xl p-6">
                <h3 className="text-lg font-bold text-dark mb-4">
                  Diğer Hizmetlerimiz
                </h3>
                <ul className="space-y-2">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/hizmetler/${s.slug}`}
                        className="flex items-center gap-2 text-gray hover:text-primary transition-colors text-sm py-1"
                      >
                        <span>{s.icon}</span>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
