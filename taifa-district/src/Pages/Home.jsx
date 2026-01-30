import { useState, useEffect } from "react"
import { HeroCarousel } from '../components/HeroCarousel'
import { FaYoutube, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { DonationCarousel } from '../components/DonationCarousel'
import { Generational } from '../components/Generational'
import { Congregational } from '../components/Congregational'
import { VideoGallery } from "../components/VideoGallery"


function DateTimeBar() {
  const [dateTime, setDateTime] = useState(new Date())
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formatted = dateTime.toLocaleString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  })

  return (
    <div className="bg-gray-100 text-blue-700 text-sm font-medium shadow-md px-6 py-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Date & Time */}
        <div className="text-center md:text-left">
          {formatted}
        </div>

        {/* Utilities */}
        <div className="flex items-center gap-6 relative">

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 font-semibold hover:underline"
            >
              📂 Resources
              <span className="text-xs">{open ? "▲" : "▼"}</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-50">
                <ul className="text-sm text-gray-700">
                  <li>
                    <a
                      href="/resources/constitution.pdf"
                      download
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      📄 Constitution
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resources/almanac2026.pdf"
                      download
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      📘 Almanac
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resources/.pdf"
                      download
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      📊 Annual Report
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Divider */}
          <span className="hidden md:inline text-gray-400">|</span>

          {/* Live Stream */}
          <a
            href="https://www.youtube.com/@ramseyercongregationtaifap6723"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-red-600 font-semibold hover:underline"
          >
            <FaYoutube className="text-lg" />
            Join Live Stream
          </a>

        </div>
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <>
      <DateTimeBar />

      <HeroCarousel />

      {/* Connect With Us */}
      <section className="py-6 bg-gray-50">
        <h3 className="text-center text-xl font-semibold text-gray-800 mb-4">
          Connect With Us
        </h3>

        <div className="flex justify-center gap-6">
          <a
            href="http://www.youtube.com/@ramseyercongregationtaifap6723"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:scale-110 transition"
          >
            <FaYoutube size={32} />
          </a>

          <a
            href="https://web.facebook.com/share/g/17wxXMsxa8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:scale-110 transition"
          >
            <FaFacebook size={32} />
          </a>

          <a
            href="https://www.instagram.com/taifadistrictpresby2?igsh=MXgwNTkxMmxpeDQ0bw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:scale-110 transition"
          >
            <FaInstagram size={32} />
          </a>

          <a
            href="https://www.tiktok.com/@pcg_taifadistrict?_r=1&_t=ZS-93Rw6CN3gjl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:scale-110 transition"
          >
            <FaTiktok size={32} />
          </a>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-white bg-gradient-to-r from-blue-600 to-red-600">
          Our Vision . Our Mission
        </h2>

        <img
          src="/images/mv.PNG"
          alt="our mission and vision"
          className="w-full max-w-6xl mx-auto mt-4 object-contain"
        />

        {/* Donation Carousel */}
        <DonationCarousel />
        <Congregational />
        <Generational />
        <VideoGallery />
        <p className="max-w-3xl text-xl mx-auto mt-8 bg-gradient-to-r from-blue-600 to-red-600 text-white">
          Peace Be Unto You . Asomdwe Nka Wo
        </p>
      </section>
    </>
  )
}
