import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Icons from "../utils/images";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "AI Trip Planner", path: "/trip-planner" },
    { name: "Expedition Feed", path: "/expedition" },
    { name: "Hitlists", path: "/hitlists" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="w-full fixed top-2 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-x-10 ">

        {/* Logo */}
        <div className="md:ml-16">
          <img src={Icons.navLogo} alt="" className="h-[80px]" />
        </div>

        {/* Desktop Menu + Buttons (Glass Box) */}
        <div className="hidden md:flex items-center gap-4 border border-white/30 rounded-full px-6 py-1.5 backdrop-blur-md bg-white/10">

          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <div key={index} className="group flex items-center gap-1.5">

                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-Primary font-semibold"
                      : "text-white/80 hover:text-Primary transition"
                  }
                >
                  {item.name}
                </NavLink>

                {index !== menuItems.length - 1 && (
                  <span
                    className={
                      isActive
                        ? "text-Primary"
                        : "text-white/40 group-hover:text-Primary transition"
                    }
                  >
                    |
                  </span>
                )}
              </div>
            );
          })}

          <button onClick={()=>navigate('/signin')} className="ml-6 px-3 py-1.5 text-white/90 border border-white/40 rounded-full hover:bg-white/10 transition">
            Login
          </button>

          <button className="px-4 py-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown Glass Effect) */}
      {open && (
        <div className="md:hidden w-full px-4 pb-4">
          <div className="border border-white/30 rounded-2xl p-4 backdrop-blur-md bg-white/10">

            {/* Menu Items */}
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={
                      isActive
                        ? "text-blue-400 font-semibold"
                        : "text-white/80 hover:text-blue-400 transition"
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>

            <hr className="my-4 border-white/30" />

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <button className="w-full py-2 text-white/90 border border-white/40 rounded-xl hover:bg-white/10 transition">
                Login
              </button>

              <button className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
