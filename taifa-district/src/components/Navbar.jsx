// ========== src/components/Navbar.jsx ==========
import { NavLink } from "react-router-dom";

export function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-red-400 font-semibold"
      : "hover:text-red-300";

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-3 py-4 flex items-center justify-between">
        
        {/* Logo + District Name */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="Presbyterian Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl font-bold whitespace-nowrap">
            PCG – TAIFA DISTRICT
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-5 text-sm md:text-base">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about/district-minister" className={linkClass}>About Us</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/congregations" className={linkClass}>Congregations</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
        </div>

      </div>
    </nav>
  );
}
