export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: "asilama",
    title: "Aşılama",
    shortDescription: "Kedi ve köpekleriniz için koruyucu aşılama programları",
    description:
      "Mylia Veteriner Kliniği olarak kedi ve köpekleriniz için kapsamlı aşılama hizmetleri sunuyoruz. Yavru hayvanlardan yetişkinlere kadar tüm yaş gruplarına uygun aşı programları hazırlıyoruz. Kuduz, karma, lösemi ve diğer koruyucu aşılar ile evcil dostlarınızın sağlığını güvence altına alıyoruz. Aşılama programınız hakkında detaylı bilgi almak için bizi arayın.",
    image: "/images/cat_vaccination_1765053844607.png",
    icon: "💉",
    keywords: [
      "kedi aşılama",
      "köpek aşılama",
      "veteriner aşı",
      "menemen aşılama",
      "yavru kedi aşı",
      "yavru köpek aşı",
      "kuduz aşısı",
      "karma aşı",
    ],
  },
  {
    slug: "kisirlastirma",
    title: "Kısırlaştırma",
    shortDescription: "Güvenli ve profesyonel kısırlaştırma operasyonları",
    description:
      "Modern cerrahi teknikler ve steril ortamda güvenli kısırlaştırma operasyonları gerçekleştiriyoruz. Kedi ve köpekleriniz için kısırlaştırma, hayvanınızın sağlığı için birçok avantaj sunar. Operasyon öncesi detaylı muayene, operasyon sırasında anestezi takibi ve operasyon sonrası bakım rehberliği hizmetlerimiz arasındadır.",
    image: "/images/pet_sterilization_1765053873511.png",
    icon: "🏥",
    keywords: [
      "kedi kısırlaştırma",
      "köpek kısırlaştırma",
      "veteriner kısırlaştırma",
      "menemen kısırlaştırma",
      "kısırlaştırma operasyonu",
      "kısırlaştırma fiyat",
    ],
  },
  {
    slug: "mikrocip",
    title: "Mikroçip",
    shortDescription:
      "Evcil hayvanınızın güvenliği için mikroçip uygulaması",
    description:
      "ISO standartlarında mikroçip uygulaması ile evcil hayvanınızın kimliğini kayıt altına alıyoruz. Mikroçip, hayvanınızın kaybolması durumunda bulunmasını kolaylaştırır. Ağrısız ve hızlı bir işlem olan mikroçip uygulaması, evcil hayvan sahipliğinin önemli bir parçasıdır. Yasal zorunluluk olan mikroçip uygulamasını kliniğimizde yaptırabilirsiniz.",
    image: "/images/microchipping_1765053887853.png",
    icon: "📡",
    keywords: [
      "mikroçip uygulaması",
      "evcil hayvan mikroçip",
      "kedi mikroçip",
      "köpek mikroçip",
      "menemen mikroçip",
      "hayvan kimlik çipi",
    ],
  },
  {
    slug: "muayene",
    title: "Muayene",
    shortDescription: "Kapsamlı veteriner muayenesi ve sağlık kontrolleri",
    description:
      "Evcil hayvanınız için kapsamlı genel muayene ve sağlık kontrol hizmetleri sunuyoruz. Fiziksel muayene, kan tahlili, idrar analizi ve gerekli görülen tüm tetkikleri modern ekipmanlarımızla gerçekleştiriyoruz. Düzenli sağlık kontrolleri, hastalıkların erken teşhisi için büyük önem taşır. Yavru, yetişkin ve yaşlı hayvanlar için özel muayene protokolleri uyguluyoruz.",
    image: "/images/pet_examination_1765053902850.png",
    icon: "🩺",
    keywords: [
      "veteriner muayene",
      "evcil hayvan muayene",
      "kedi muayene",
      "köpek muayene",
      "menemen veteriner muayene",
      "sağlık kontrolü",
    ],
  },
  {
    slug: "cerrahi",
    title: "Cerrahi Operasyonlar",
    shortDescription: "Profesyonel cerrahi müdahaleler",
    description:
      "Deneyimli veteriner hekim kadromuz ve modern cerrahi ekipmanlarımız ile genel cerrahi, ortopedik cerrahi ve yumuşak doku cerrahisi operasyonları gerçekleştiriyoruz. Operasyon öncesi detaylı değerlendirme, operasyon sırasında tam anestezi takibi ve operasyon sonrası kapsamlı bakım hizmetleri sunuyoruz. Her operasyon steril ortamda ve en yüksek güvenlik standartlarında yapılmaktadır.",
    image: "/images/emergency_care_1765053921035.png",
    icon: "⚕️",
    keywords: [
      "veteriner cerrahi",
      "hayvan operasyonu",
      "ortopedik cerrahi",
      "menemen veteriner cerrahi",
      "kedi operasyonu",
      "köpek operasyonu",
    ],
  },
  {
    slug: "dis-plagi",
    title: "Diş Plağı Temizliği",
    shortDescription:
      "Profesyonel diş temizliği ve ağız sağlığı hizmetleri",
    description:
      "Evcil hayvanınızın ağız ve diş sağlığı genel sağlığını doğrudan etkiler. Profesyonel diş plağı ve diş taşı temizliği hizmetimiz ile hayvanınızın ağız sağlığını koruyoruz. Ultrasonik diş temizliği cihazımız ile etkili ve güvenli temizlik yapıyoruz. Düzenli diş bakımı, diş eti hastalıkları ve diş kayıplarını önler.",
    image: "/images/dog_vaccination_1765053859173.png",
    icon: "🦷",
    keywords: [
      "diş plağı temizliği",
      "diş taşı temizliği",
      "veteriner diş bakımı",
      "kedi diş temizliği",
      "köpek diş temizliği",
      "menemen diş plağı",
    ],
  },
];
