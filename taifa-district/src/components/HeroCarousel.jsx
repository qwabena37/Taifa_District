// ========== src/components/HeroCarousel.jsx ==========
import { useEffect, useState } from 'react'
import { useDistrictStore } from '../store/districtStore'

export function HeroCarousel() {
  const images = useDistrictStore((s) => s.carouselImages)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section className="relative h-[60vh] overflow-hidden">
      {images.map((img, i) => (
        <div
          key={img.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={img.src} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold text-center">
              {img.caption}
            </h2>
          </div>
        </div>
      ))}
    </section>
  )
}