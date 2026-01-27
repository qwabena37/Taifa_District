// ========== src/components/Navbar.jsx ==========
import { NavLink } from 'react-router-dom'

export function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-yellow-400 font-semibold'
      : 'hover:text-yellow-300'

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between">
        <h1 className="text-xl font-bold">PCG TAIFA DISTRICT</h1>

        <div className="flex gap-5 text-sm md:text-base">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about/district-minister" className={linkClass}>About Us</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/congregations" className={linkClass}>Congregations</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
        </div>
      </div>
    </nav>
  )
}