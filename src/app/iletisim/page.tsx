import { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = generatePageMetadata({
  title: "İletişim",
  description:
    "Mylia Veteriner Kliniği iletişim bilgileri. Randevu almak veya sorularınız için bize ulaşın. 7/24 açık. Menemen, İzmir.",
  path: "/iletisim",
  keywords: [
    "mylia veteriner iletişim",
    "menemen veteriner telefon",
    "veteriner randevu",
  ],
});

export default function IletisimPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "İletişim", href: "/iletisim" },
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
            <span className="text-dark font-medium">İletişim</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-dark">
            Bizimle <span className="text-primary">İletişime</span> Geçin
          </h1>
          <p className="text-gray mt-4 max-w-2xl text-lg">
            Randevu almak veya sorularınız için bize ulaşın. 7/24 hizmetinizdeyiz.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 -mt-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <svg
                  className="w-6 h-6 text-primary"
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
              </div>
              <h3 className="font-bold text-dark mb-1">Telefon</h3>
              <p className="text-primary font-semibold">{SITE_CONFIG.phone}</p>
              <p className="text-xs text-gray mt-1">7/24 Ulaşılabilir</p>
            </a>

            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center group"
            >
              <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#25D366]/20 transition-colors">
                <svg
                  className="w-6 h-6 text-[#25D366]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-1">WhatsApp</h3>
              <p className="text-[#25D366] font-semibold">Mesaj Gönderin</p>
              <p className="text-xs text-gray mt-1">Hızlı yanıt garantisi</p>
            </a>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-secondary"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-1">Adres</h3>
              <p className="text-gray text-sm">{SITE_CONFIG.address.full}</p>
              <p className="text-xs text-primary mt-1 font-medium">
                {SITE_CONFIG.workingHours}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">
                Bize Mesaj Gönderin
              </h2>
              <ContactForm />
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Konumumuz</h2>
              <div className="rounded-xl overflow-hidden h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.5!2d${SITE_CONFIG.coordinates.lng}!3d${SITE_CONFIG.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDM2JzQyLjEiTiAyN8KwMDQnMTAuOSJF!5e0!3m2!1str!2str!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mylia Veteriner Kliniği Konum"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
