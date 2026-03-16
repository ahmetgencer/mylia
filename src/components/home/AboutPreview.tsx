import Link from "next/link";

export default function AboutPreview() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Modern Ekipmanlar",
      description: "En son teknoloji tanı ve tedavi cihazları",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Uzman Veteriner Hekimler",
      description: "Deneyimli ve alanında uzman kadro",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "7/24 Acil Servis",
      description: "Her an yanınızdayız, acil durumlar için arayın",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Sevgi Dolu Yaklaşım",
      description: "Her hastamıza şefkat ve sevgiyle yaklaşıyoruz",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Hakkımızda
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
              Mylia Veteriner Hakkında
            </h2>
            <p className="text-gray leading-relaxed mb-4">
              Mylia Veteriner Kliniği, 2018 yılında kurulmuş olup İstanbul
              Üniversitesi Veterinerlik Fakültesi mezunu, lisans ve yüksek
              lisans eğitimi almış uzman veteriner hekim tarafından
              yönetilmektedir.
            </p>
            <p className="text-gray leading-relaxed mb-4">
              Adımız, kurucumuzun eşinin kedisi Lia&apos;dan esinlenmiştir. Lia, iki
              insanın birleşmesine vesile olan özel bir can dostuydu.
            </p>
            <p className="text-gray leading-relaxed mb-6">
              Kedi, köpek, tavşan ve kuş tedavisi yapılmaktadır. Sokak
              hayvanlarına özel indirimli hizmetler sunuyoruz. 15 yılı aşkın
              deneyimimizle Menemen ve çevresinin güvenilir veteriner
              kliniğiyiz.
            </p>
            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Daha Fazla Bilgi
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-light rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-dark mb-1">{feature.title}</h3>
                <p className="text-sm text-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
