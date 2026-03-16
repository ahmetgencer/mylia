import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="bg-gray-light py-16 md:py-20" id="hizmetler">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2">
            Profesyonel Veteriner Hizmetleri
          </h2>
          <p className="text-gray mt-4 max-w-2xl mx-auto">
            Modern ekipmanlar ve uzman kadromuzla evcil hayvanlarınıza en iyi
            bakımı sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/hizmetler/${service.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Mylia Veteriner`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-4">
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
  );
}
