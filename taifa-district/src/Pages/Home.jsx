// ================= src/pages/Home.jsx =================
import { HeroCarousel } from '../components/HeroCarousel'

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold text-blue-900">Welcome to PCG Taifa District</h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-600">
          We are one district made up of sixteen congregations united in faith,
          service, and mission to the glory of God.
        </p>
      </section>
    </>
  )
}
