import { useState, useEffect } from 'react'

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
       Our Recent Donation to the Taifa Polyclinic Hospital
      </h3>

      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <img
          src={images[current]}
          alt="Donation to Taifa Polyclinic Hospital"
className="w-full h-[28rem] md:h-[32rem] object-cover transition duration-700"
        />
        {/* Animated caption */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-6 py-3 rounded-md max-w-xl text-center
    animate-fadeIn">
    Donations to the Taifa Polyclinic Hospital
  </div>
        {/* Blue line (top) */}
  <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>

  {/* Red line (bottom) */}
  <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>

  {/* Optional: blue line (left side) */}
  <div className="absolute top-0 left-0 h-full w-1 bg-blue-600"></div>

  {/* Optional: red line (right side) */}
  <div className="absolute top-0 right-0 h-full w-1 bg-red-600"></div>
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
