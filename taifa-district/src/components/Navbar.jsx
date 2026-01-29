import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-red-400 font-semibold"
      : "hover:text-red-300";

  return (
    <nav className="bg-blue-900 text-white relative">
      <div className="max-w-7xl mx-auto px-3 py-4 flex items-center justify-between">
        {/* Logo + District Name */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="Presbyterian Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-lg font-bold whitespace-nowrap">
            PCG – TAIFA DISTRICT
          </h1>
        </NavLink>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-5 text-sm md:text-base">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about/district-minister" className={linkClass}>
            About Us
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/congregations" className={linkClass}>
            Congregations
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact Us
          </NavLink>
        </div>

        {/* Hamburger Icon (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu dropdown panel - fixed width, right-aligned */}
      {open && (
        <div className="md:hidden absolute top-full right-0 w-48 bg-blue-900 border border-blue-700 rounded-bl-md rounded-br-md shadow-lg z-50">
          <nav className="flex flex-col divide-y divide-blue-700">
            {[
              { to: "/", label: "Home" },
              { to: "/about/district-minister", label: "About Us" },
              { to: "/projects", label: "Projects" },
              { to: "/congregations", label: "Congregations" },
              { to: "/contact", label: "Contact Us" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-4 text-right ${
                    isActive
                      ? "bg-blue-800 text-red-400 font-semibold"
                      : "hover:bg-blue-800"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}
