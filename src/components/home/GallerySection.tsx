import Image from "next/image";

const galleryImages = [
  {
    src: "/images/cat_vaccination_1765053844607.png",
    alt: "Kedi aşılama - Mylia Veteriner",
  },
  {
    src: "/images/dog_vaccination_1765053859173.png",
    alt: "Köpek bakımı - Mylia Veteriner",
  },
  {
    src: "/images/pet_sterilization_1765053873511.png",
    alt: "Kısırlaştırma operasyonu - Mylia Veteriner",
  },
  {
    src: "/images/microchipping_1765053887853.png",
    alt: "Mikroçip uygulaması - Mylia Veteriner",
  },
  {
    src: "/images/pet_examination_1765053902850.png",
    alt: "Evcil hayvan muayenesi - Mylia Veteriner",
  },
  {
    src: "/images/emergency_care_1765053921035.png",
    alt: "Acil veteriner bakım - Mylia Veteriner",
  },
];

export default function GallerySection() {
  return (
    <section className="py-16 md:py-20 bg-gray-light">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Galeri
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2">
            Mutlu Hasta Dostlarımız
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
