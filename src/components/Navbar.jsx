import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { siteConfig } from "../data/content";
import logo from "../images/pov-logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium capitalize ${
      isActive
        ? "text-amber-700"
        : "text-gray-500 hover:text-amber-600"
    }`;
const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Get Involved", path: "/get-involved" },
  { name: "News", path: "/news" },
/*   { name: "Resources", path: "/resources" }, */
  { name: "Contact", path: "/contact" },
  {name: "FAQ",path: "/faq"},
  
];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
      <Link to="/about" className="flex items-center">
  <img
    src={logo}
    alt="POV Logo"
    className="h-25 w-auto"
  />
</Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 list-none">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/donate"
            className="hidden md:block bg-amber-600 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-amber-700"
          >
            Donate
          </Link>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4 bg-white">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-left text-sm font-medium ${
                  isActive ? "text-amber-700" : "text-gray-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/donate"
            onClick={closeMenu}
            className="bg-amber-600 text-white text-sm font-medium px-5 py-2 rounded-lg"
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
}