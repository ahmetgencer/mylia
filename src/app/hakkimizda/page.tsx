import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Hakkımızda",
  description:
    "Mylia Veteriner Kliniği hakkında. 2018'den beri Menemen, Ulukent ve Egekent'te profesyonel veteriner hizmeti. Uzman kadro, modern ekipman, 7/24 acil servis.",
  path: "/hakkimizda",
  keywords: [
    "mylia veteriner hakkında",
    "menemen veteriner kliniği",
    "veteriner hekim menemen",
  ],
});

export default function HakkimizdaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", href: "/" },
          { name: "Hakkımızda", href: "/hakkimizda" },
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
            <span className="text-dark font-medium">Hakkımızda</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-dark">
            Mylia Veteriner <span className="text-primary">Hakkında</span>
          </h1>
          <p className="text-gray mt-4 max-w-2xl text-lg">
            2018&apos;den beri Menemen ve çevresinin güvenilir veteriner kliniği
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark mb-6">Hikayemiz</h2>
            <p className="text-gray leading-relaxed mb-4">
              Mylia Veteriner Kliniği, 28 Kasım 2024&apos;te resmen kurulmuş
              olup hayvan sağlığına olan tutkumuzla yola çıktık. Kliniğimizin
              adı, kurucumuzun eşinin kedisi <strong>Lia</strong>&apos;dan
              esinlenmiştir. Lia, iki insanın birleşmesine vesile olan özel bir
              can dostuydu.
            </p>
            <p className="text-gray leading-relaxed mb-4">
              Kurucumuz, İstanbul Üniversitesi Veterinerlik Fakültesi mezunu
              olup lisans ve yüksek lisans eğitimini tamamlamış, Ss. Cyril and
              Methodius University&apos;de staj yapmıştır. 2007 yılından bu yana
              veteriner hekimlik mesleğini büyük bir tutku ve özveriyle
              sürdürmektedir.
            </p>
            <p className="text-gray leading-relaxed">
              15 yılı aşkın deneyimimizle Menemen, Ulukent, Egekent ve
              Harmandalı başta olmak üzere İzmir&apos;in kuzey bölgelerindeki
              hayvan sahiplerine güvenilir veteriner hizmeti sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-light">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Misyonumuz</h3>
              <p className="text-gray leading-relaxed">
                Evcil hayvanların sağlığı ve refahı için en kaliteli veteriner
                hizmetlerini sunmak. Her hastamıza bireysel ilgi göstererek,
                modern tıbbın tüm olanaklarını kullanarak en iyi tedaviyi
                sağlamak.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Vizyonumuz</h3>
              <p className="text-gray leading-relaxed">
                Bölgenin en güvenilir veteriner kliniği olmak ve hayvan
                sağlığında standartları sürekli yükseltmek. Hayvan refahı
                konusunda toplumsal farkındalık yaratmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">
            Neden Mylia Veteriner?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Uzman Veteriner Hekimler",
                desc: "Deneyimli teknik personel ve uzman veteriner hekimler",
                icon: "👨‍⚕️",
              },
              {
                title: "Modern Ekipmanlar",
                desc: "Son teknoloji tanı ve tedavi cihazları",
                icon: "🔬",
              },
              {
                title: "7/24 Acil Hizmet",
                desc: "Pazar dahil her gün, her saat yanınızdayız",
                icon: "🕐",
              },
              {
                title: "Şefkatli Yaklaşım",
                desc: "Her hastamıza sevgi ve şefkatle yaklaşıyoruz",
                icon: "❤️",
              },
              {
                title: "Uygun Fiyatlandırma",
                desc: "Kaliteli hizmet, adil ve şeffaf fiyatlar",
                icon: "💰",
              },
              {
                title: "Sokak Hayvanları Desteği",
                desc: "Sokak hayvanlarına özel indirimli hizmetler",
                icon: "🐾",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl hover:bg-gray-light transition-colors"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-gray">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Evcil Dostunuz İçin Randevu Alın
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/iletisim"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary hover:bg-gray-100 transition-colors"
            >
              İletişime Geçin
            </a>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
