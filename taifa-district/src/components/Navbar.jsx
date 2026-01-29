import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "text-red-400 font-semibold" : "hover:text-red-300";

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-3 py-4 flex items-center justify-between">

        {/* Logo + District Name */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="/images/logo.png"
            alt="Presbyterian Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl font-bold whitespace-nowrap">
            PCG – TAIFA DISTRICT
          </h1>
        </div>

        {/* Desktop Navigation Links (hidden on small screens) */}
        <div className="hidden md:flex gap-5 text-sm md:text-base">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about/district-minister" className={linkClass}>About Us</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/congregations" className={linkClass}>Congregations</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
        </div>

        {/* Hamburger Menu Button (shown on small screens) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu (dropdown) */}
     {isOpen && (
  <div
    className="md:hidden absolute right-0 mt-1 bg-blue-800 rounded-b-md shadow-lg flex flex-col w-48 p-3 space-y-2"
    style={{ top: "64px", zIndex: 50 }} // top: height of navbar approx 64px (adjust if needed)
  >
    <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
    <NavLink to="/about/district-minister" className={linkClass} onClick={() => setIsOpen(false)}>About Us</NavLink>
    <NavLink to="/projects" className={linkClass} onClick={() => setIsOpen(false)}>Projects</NavLink>
    <NavLink to="/congregations" className={linkClass} onClick={() => setIsOpen(false)}>Congregations</NavLink>
    <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>Contact Us</NavLink>
  </div>
)}
    </nav>
  );
}
