export interface Region {
  slug: string;
  name: string;
  title: string;
  description: string;
  longDescription: string;
  keywords: string[];
}

export const regions: Region[] = [
  {
    slug: "menemen",
    name: "Menemen",
    title: "Menemen Veteriner Kliniği",
    description:
      "Menemen'in güvenilir veteriner kliniği. Kedi, köpek ve diğer evcil hayvanlarınız için 7/24 profesyonel veteriner hizmeti.",
    longDescription:
      "Mylia Veteriner Kliniği, Menemen'de evcil hayvanlarınız için kapsamlı veteriner hizmetleri sunmaktadır. 29 Ekim Mahallesi'nde bulunan kliniğimiz, Menemen ve çevresindeki hayvan sahiplerine 7/24 hizmet vermektedir. Aşılama, kısırlaştırma, mikroçip uygulaması, genel muayene, cerrahi operasyonlar ve diş bakımı gibi tüm veteriner hizmetlerini modern ekipmanlarla sunuyoruz. Menemen'de veteriner arıyorsanız, deneyimli ekibimizle yanınızdayız.",
    keywords: [
      "menemen veteriner",
      "menemen veteriner kliniği",
      "menemen acil veteriner",
      "menemen kedi veteriner",
      "menemen köpek veteriner",
      "menemen 7/24 veteriner",
    ],
  },
  {
    slug: "ulukent",
    name: "Ulukent",
    title: "Ulukent Veteriner Kliniği",
    description:
      "Ulukent'in en yakın veteriner kliniği. Evcil hayvanlarınız için profesyonel bakım ve tedavi hizmetleri.",
    longDescription:
      "Ulukent sakinleri için en yakın ve güvenilir veteriner kliniği olarak hizmet veriyoruz. Ulukent'ten kliniğimize kolayca ulaşabilir, evcil hayvanlarınız için tüm veteriner hizmetlerinden faydalanabilirsiniz. Koruyucu aşılama, kısırlaştırma, mikroçip, genel sağlık kontrolleri ve acil müdahale hizmetlerimiz ile Ulukent'teki hayvan dostlarının sağlığını koruyoruz.",
    keywords: [
      "ulukent veteriner",
      "ulukent veteriner kliniği",
      "ulukent yakın veteriner",
      "ulukent kedi veteriner",
      "ulukent köpek veteriner",
    ],
  },
  {
    slug: "egekent",
    name: "Egekent",
    title: "Egekent Veteriner Kliniği",
    description:
      "Egekent bölgesine en yakın veteriner kliniği. 7/24 acil veteriner hizmeti ve profesyonel bakım.",
    longDescription:
      "Egekent ve çevresindeki hayvan sahiplerine profesyonel veteriner hizmetleri sunuyoruz. Egekent'ten kısa mesafede bulunan kliniğimizde, evcil hayvanlarınız için aşılama, kısırlaştırma, mikroçip, muayene, cerrahi operasyonlar ve diş bakımı hizmetleri mevcuttur. Egekent'te acil veteriner ihtiyacınız olduğunda 7/24 bizi arayabilirsiniz.",
    keywords: [
      "egekent veteriner",
      "egekent veteriner kliniği",
      "egekent acil veteriner",
      "egekent yakın veteriner",
      "egekent kedi veteriner",
    ],
  },
  {
    slug: "harmandali",
    name: "Harmandalı",
    title: "Harmandalı Veteriner Kliniği",
    description:
      "Harmandalı bölgesinin güvenilir veteriner kliniği. Tüm evcil hayvanlarınız için kapsamlı sağlık hizmetleri.",
    longDescription:
      "Harmandalı ve çevresindeki hayvan sahipleri için güvenilir veteriner hizmetleri sunuyoruz. Kliniğimiz Harmandalı'ya yakın konumuyla, bölgedeki evcil hayvan sahiplerine kolayca ulaşılabilir bir sağlık hizmeti sağlamaktadır. Aşılama, kısırlaştırma, mikroçip, genel muayene ve cerrahi operasyonlar dahil tüm hizmetlerimizden faydalanabilirsiniz.",
    keywords: [
      "harmandalı veteriner",
      "harmandalı veteriner kliniği",
      "harmandalı yakın veteriner",
      "harmandalı acil veteriner",
    ],
  },
];
