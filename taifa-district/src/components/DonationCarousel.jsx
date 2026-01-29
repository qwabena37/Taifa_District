import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const images = [
  '/images/donations/d2.jpeg',
  '/images/donations/d6.jpeg',
  '/images/donations/d7.jpeg',
  '/images/donations/d8.jpeg',
  '/images/donations/d9.jpeg',
  '/images/donations/d10.jpeg',
  '/images/donations/d11.jpeg',
  '/images/donations/d12.jpeg',
]

export function DonationCarousel() {
  const [current, setCurrent] = useState(0)

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Handlers for arrows
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h3 className="text-2xl font-semibold text-white mb-4 bg-gradient-to-r from-red-600 to-blue-600 p-2 rounded-md">
        Community Service - Our Recent Donation to the Taifa Polyclinic Hospital
      </h3>

      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <img
          src={images[current]}
          alt="Donation to Taifa Polyclinic Hospital"
          className="w-full h-[28rem] md:h-[32rem] object-cover transition duration-700"
        />

        {/* Caption */}
        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-6 py-3 rounded-md max-w-xl text-center animate-fadeIn"
          key={current} // re-trigger animation on slide change
        >
          Donations to the Taifa Polyclinic Hospital
        </div>

        {/* Blue and red lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
        <div className="absolute top-0 left-0 h-full w-1 bg-blue-600"></div>
        <div className="absolute top-0 right-0 h-full w-1 bg-red-600"></div>

        {/* Left arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute top-1/2 left-3 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 z-10 focus:outline-none"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute top-1/2 right-3 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 z-10 focus:outline-none"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </div>
  )
}
