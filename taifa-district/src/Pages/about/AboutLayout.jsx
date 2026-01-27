// ========== src/pages/about/AboutLayout.jsx ==========
import { NavLink, Outlet } from 'react-router-dom'

export default function AboutLayout() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">About the District</h2>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4 space-y-3 text-sm">
          <NavLink to="district-minister" className="block hover:underline">District Minister</NavLink>
          <NavLink to="reverend-ministers" className="block hover:underline">Reverend Ministers</NavLink>
          <NavLink to="catechists" className="block hover:underline">Catechists</NavLink>
          <NavLink to="district-executives" className="block hover:underline">District Executives</NavLink>
        </aside>

        <div className="md:w-3/4 bg-white p-6 rounded shadow">
          <Outlet />
        </div>
      </div>
    </section>
  )
}