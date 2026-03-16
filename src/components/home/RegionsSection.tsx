import Link from "next/link";
import { regions } from "@/data/regions";

export default function RegionsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Hizmet Bölgelerimiz
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2">
            Menemen, Ulukent, Egekent ve Harmandalı&apos;nda Veteriner Hizmetleri
          </h2>
          <p className="text-gray mt-4 max-w-2xl mx-auto">
            İzmir&apos;in kuzey bölgelerinde evcil hayvanlarınız için güvenilir
            veteriner hizmeti sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={`/${region.slug}-veteriner`}
              className="group bg-gray-light rounded-xl p-6 hover:bg-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                <svg
                  className="w-6 h-6 text-primary group-hover:text-white transition-colors"
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
              <h3 className="text-lg font-bold text-dark group-hover:text-white mb-2 transition-colors">
                {region.name} Veteriner
              </h3>
              <p className="text-sm text-gray group-hover:text-white/80 transition-colors">
                {region.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
