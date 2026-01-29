import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "text-red-400 font-semibold" : "hover:text-red-300";

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-3 py-4 flex items-center justify-between">

        {/* Logo + District Name wrapped in NavLink */}
        <NavLink to="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src="/images/logo.png"
            alt="Presbyterian Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl font-bold whitespace-nowrap">
            PCG – TAIFA DISTRICT
          </h1>
        </NavLink>

        {/* Hamburger button - visible only on small screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`
            flex-col md:flex-row md:flex
            absolute md:static
            top-full left-0 w-full md:w-auto
            bg-blue-900 md:bg-transparent
            transition-all duration-300 ease-in-out
            md:opacity-100
            ${
              isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible h-0 md:h-auto"
            }
            md:space-x-5
            px-4 md:px-0
            py-4 md:py-0
            md:items-center
          `}
        >
          <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink
            to="/about/district-minister"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink to="/projects" className={linkClass} onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
          <NavLink
            to="/congregations"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Congregations
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
