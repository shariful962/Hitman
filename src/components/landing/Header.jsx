
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Icons from '../../utils/images';
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "AI Trip Planner", path: "/trip-planner" },
    { name: "Expedition Feed", path: "/expedition" },
    { name: "Hitlists", path: "/hitlists" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="w-full top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10 fixed">
      <div className="containerBox">
        <header className="w-full">
          <div className="flex items-center justify-between px-4 lg:px-[120px] py-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={Icons.navLogo} alt="Hitman Track" className="w-10 h-10" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-6 text-base">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold"
                      : "text-white"
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => navigate('/signin')}
                className="px-4 py-1.5 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                Login
              </button>
              <button className="px-4 py-1.5 bg-red-500 rounded-full hover:bg-red-600 transition">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white w-full border-t border-gray-200">
              <nav className="flex flex-col gap-4 px-4 py-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-500 font-semibold"
                        : "hover:text-red-400 transition"
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <button
                    onClick={() => { navigate('/signin'); setMobileMenuOpen(false); }}
                    className="w-[150px]  px-4 py-1.5 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-[150px] px-4 py-1.5 bg-red-500 rounded-full hover:bg-red-600 transition"
                  >
                    Get Started
                  </button>
                </div>
              </nav>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default Header;




