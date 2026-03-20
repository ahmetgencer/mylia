export const SITE_CONFIG = {
  name: "Mylia Veteriner",
  title: "Mylia Veteriner Kliniği",
  url: "https://myliaveteriner.com",
  description:
    "Menemen, Ulukent ve Egekent uzman veteriner hizmeti. Kedi ve köpek dostlarınız için profesyonel veteriner bakımı, aşılama, kısırlaştırma, mikroçip, muayene ve acil müdahale hizmetleri.",
  locale: "tr_TR",
  phone: "+90 531 343 90 15",
  phoneRaw: "905313439015",
  email: "info@myliaveteriner.com",
  address: {
    street: "29 Ekim Mah. 8. Cad, 7605. Sk. 28/AA D:40",
    city: "Menemen",
    state: "İzmir",
    zip: "35875",
    country: "TR",
    full: "29 Ekim Mah. 8. Cad, 7605. Sk. 28/AA D:40, 35875 Menemen/İzmir",
  },
  coordinates: {
    lat: 38.6117,
    lng: 27.0697,
  },
  social: {
    instagram: "https://www.instagram.com/myliaveteriner",
    facebook: "https://www.facebook.com/myliaveteriner",
  },
  whatsapp: "https://wa.me/905313439015",
  workingHours: "7/24 Açık",
  workingHoursDetail: "Pazar dahil her gün hizmet veriyoruz",
  foundedYear: 2018,
  experience: "15+",
  priceRange: "$$",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
};

export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Hizmetlerimiz",
    href: "/hizmetlerimiz",
    children: [
      { label: "Aşılama", href: "/hizmetler/asilama" },
      { label: "Kısırlaştırma", href: "/hizmetler/kisirlastirma" },
      { label: "Mikroçip", href: "/hizmetler/mikrocip" },
      { label: "Muayene", href: "/hizmetler/muayene" },
      { label: "Cerrahi Operasyonlar", href: "/hizmetler/cerrahi" },
      { label: "Diş Plağı Temizliği", href: "/hizmetler/dis-plagi" },
    ],
  },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export const STATS = [
  { value: 5000, suffix: "+", label: "Mutlu Hasta" },
  { value: 15, suffix: "+", label: "Yıllık Deneyim" },
  { value: 24, suffix: "/7", label: "Saat Hizmet" },
  { value: 100, suffix: "%", label: "Memnuniyet" },
];

export const FAQ_ITEMS = [
  {
    question: "7/24 açık mısınız?",
    answer:
      "Evet, Mylia Veteriner Kliniği 7 gün 24 saat hizmet vermektedir. Acil durumlar dahil her zaman yanınızdayız. Pazar günleri de dahil olmak üzere kesintisiz hizmet sunuyoruz.",
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "Menemen, Ulukent, Egekent ve Harmandalı başta olmak üzere İzmir'in kuzey bölgelerine hizmet vermekteyiz. Kliniğimize kolayca ulaşabilir veya acil durumlarda bizi arayabilirsiniz.",
  },
  {
    question: "Randevu almam gerekiyor mu?",
    answer:
      "Randevu almanız bekleme süresini kısaltır ve size daha iyi hizmet vermemizi sağlar. Ancak acil durumlar için randevusuz da gelebilirsiniz. Randevu için bizi telefonla arayabilir veya WhatsApp üzerinden mesaj gönderebilirsiniz.",
  },
  {
    question: "Kısırlaştırma operasyonu sonrası bakım nasıl olmalı?",
    answer:
      "Kısırlaştırma sonrası hayvanınızın 24 saat dinlenmesi önemlidir. Yara bölgesini yalamayı engellemek için elizabet tasma kullanılmalıdır. Dikişler genellikle 10-14 gün sonra alınır. Operasyon sonrası detaylı bakım talimatlarını size vereceğiz.",
  },
  {
    question: "Evcil hayvanıma ne sıklıkla aşı yaptırmalıyım?",
    answer:
      "Yavru hayvanlarda aşılar 6-8 haftalıkken başlar ve belirli aralıklarla tekrarlanır. Yetişkin hayvanlarda yıllık aşı takvimine uyulmalıdır. Hayvanınızın yaşına ve sağlık durumuna göre özel aşı programı oluşturuyoruz.",
  },
];
