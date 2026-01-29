import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const images = [
  {
    src: '/images/Generational/gg.jpeg',
    caption: 'Old school uniforms, timeless faith — Youth & Students Week celebration @ Grace Congregation.”',
  },
  {
    src: '/images/Generational/nn.jpeg',
    caption: 'Youth Fellowship outreach and community service',
  },
  {
    src: '/images/Generational/pp.jpeg',
    caption: 'Presbyterian Young Adults engagement session',
  },
  {
    src: '/images/Generational/ss.jpeg',
    caption: 'Sunday School activity and training',
  },
  {
    src: '/images/Generational/u.jpeg',
    caption: 'United generational fellowship gathering',
  },
]

export function Generational() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h3 className="text-2xl font-semibold text-white mb-4 bg-gradient-to-r from-red-600 to-blue-600 text-center">
        Our Generational Groups&apos; Spotlight
      </h3>

      <div className="relative overflow-hidden rounded-xl shadow-lg group">
        {/* Image */}
        <img
          src={images[current].src}
          alt={images[current].caption}
          className="w-full h-[24rem] sm:h-[28rem] md:h-[32rem] object-cover transition duration-700"
        />

        {/* Caption */}
        <div
          key={current}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-6 py-3 rounded-md max-w-xl text-center animate-fadeIn"
        >
          {images[current].caption}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full
            hover:bg-black/70 transition opacity-0 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full
            hover:bg-black/70 transition opacity-0 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-green-600"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
        <div className="absolute top-0 left-0 h-full w-1 bg-green-600"></div>
        <div className="absolute top-0 right-0 h-full w-1 bg-red-600"></div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </div>
  )
}
