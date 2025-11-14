import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import Icons from "../utils/images";
// import Icons from "../../utils/images";
// import CreatePostModal from "./CreatePostModal";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // 👈 You can replace this with context later

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "AI Trip Planner", path: "/trip-planner" },
    { name: "Expedition Feed", path: "/expedition" },
    { name: "Hitlists", path: "/hitlists" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <div className="w-full top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10 fixed">
        <div className="containerBox">
          <header className="w-full">
            <div className="flex items-center justify-between px-4 lg:px-[120px] py-4">
              {/* Logo */}
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => navigate("/")}
              >
                <img
                  src={Icons.navLogo}
                  alt="Hitman Track"
                  className="w-[150px] h-16"
                />
                <p className="text-[#319EE1] font-bold ml-1 text-lg">
                  TrekBot.AI
                </p>
              </div>

              {/* 🔹 Desktop Nav */}
              <nav className="hidden lg:flex gap-6 text-base">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-500 font-semibold"
                        : "text-white hover:text-red-400 transition"
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              {/* 🔹 Right Side (Desktop) */}
              <div className="hidden lg:flex items-center gap-3">
                {!loggedIn ? (
                  <>
                    {/* Login & Signup Buttons */}
                    <button
                      onClick={() => navigate("/signin")}
                      className="px-4 py-1.5 border border-white rounded-full hover:bg-white hover:text-black transition"
                    >
                      Log in
                    </button>
                    <button
                      onClick={() => navigate("/signup")}
                      className="px-4 py-1.5 bg-[#319EE1] rounded-full hover:bg-[#1d7ec7] text-white transition"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    {/* Create Post & Profile */}
                    <button
                      onClick={() => setShowCreatePost(true)}
                      className="px-4 py-1.5 bg-Primary text-white rounded-lg cursor-pointer"
                    >
                      + Create Post
                    </button>
                    <button
                      className="cursor-pointer"
                      onClick={() => navigate("/profile")}
                    >
                      <img
                        src={Icons.profile1}
                        alt="profile"
                        className="w-10 h-10 rounded-full"
                      />
                    </button>
                  </>
                )}
              </div>

              {/* 🔹 Mobile Menu Button */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
              </div>
            </div>

            {/* 🔹 Mobile Menu */}
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
                    {!loggedIn ? (
                      <>
                        <button
                          onClick={() => {
                            navigate("/signin");
                            setMobileMenuOpen(false);
                          }}
                          className="w-[150px] px-4 py-1.5 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                        >
                          Log in
                        </button>
                        <button
                          onClick={() => {
                            navigate("/signup");
                            setMobileMenuOpen(false);
                          }}
                          className="w-[150px] px-4 py-1.5 bg-[#319EE1] rounded-full text-white hover:bg-[#1d7ec7] transition"
                        >
                          Sign up
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            setShowCreatePost(true);
                            setMobileMenuOpen(false);
                          }}
                          className="w-max px-4 py-1.5 border bg-Primary text-white"
                        >
                          + Create Post
                        </button>
                        <button
                          onClick={() => {
                            navigate("/profile");
                            setMobileMenuOpen(false);
                          }}
                          className="w-max flex items-center gap-2"
                        >
                          <img
                            src={Icons.profile1}
                            alt="profile"
                            className="w-8 h-8 rounded-full"
                          />
                          Profile
                        </button>
                      </>
                    )}
                  </div>
                </nav>
              </div>
            )}
          </header>
        </div>
      </div>

      {/* 🔹 Create Post Modal */}
      {showCreatePost && (
        <CreatePostModal onClose={() => setShowCreatePost(false)} />
      )}
    </>
  );
};

export default Header;
