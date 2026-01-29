// ================= src/pages/Home.jsx =================
import { HeroCarousel } from '../components/HeroCarousel'
import { FaYoutube, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { DonationCarousel } from '../components/DonationCarousel'

export default function Home() {
  return (
    <>
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

  <p className="max-w-3xl mx-auto mt-8 text-gray-600">
    We are one district made up of seventeen congregations united in faith,
    service and mission to the Glory of God.
  </p>
</section>

    </>
  )
}
