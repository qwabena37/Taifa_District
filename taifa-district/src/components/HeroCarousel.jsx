import { useEffect, useState } from "react";
import { useDistrictStore } from "../store/districtStore";

export function HeroCarousel() {
  const images = useDistrictStore((s) => s.carouselImages) || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  // 🚨 SAFETY CHECK
  if (!images.length) {
    return (
      <section className="h-[50vh] flex items-center justify-center">
        <p className="text-gray-500">Loading images…</p>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden bg-black">
      {images.map((img, i) => (
        <div
          key={img.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img.src}
            alt={img.caption}
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center">
              {img.caption}
            </h2>
          </div>
        </div>
      ))}
    </section>
  );
}
