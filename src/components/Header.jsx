// import React, { useState, useEffect } from "react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import Icons from "../utils/images";
// import CreatePostModal from "./navbar/CreatePostModal";

// export default function Header() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [open, setOpen] = useState(false);
//    const [modalOpen, setModalOpen] = useState(false);

//   // Check login status
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn");
//     setIsLoggedIn(loggedIn === "true");
//   }, [location.pathname]);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "AI Trip Planner", path: "/trip-planner" },
//     { name: "Expedition Feed", path: "/expedition" },
//     { name: "Hitlists", path: "/hitlists" },
//     { name: "Pricing", path: "/pricing" },
//     { name: "About", path: "/about" },
//   ];

//   return (
//     <nav className="w-full fixed top-2 left-0 z-50 bg-transparent">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-x-4">

//         {/* Logo */}
//         <div className="md:ml-16 mr-16 cursor-pointer" onClick={()=>navigate('/')} >
//           <img src={Icons.navLogo} alt="logo" className="h-[80px]" />
//         </div>

//         {/* Desktop Menu + Buttons inside glass box */}
//         <div className="hidden md:flex items-center gap-4 border border-white/30 rounded-full px-6 py-2.5 backdrop-blur-md bg-white/10">
//           {menuItems.map((item, index) => {
//             const isActive = location.pathname === item.path;
//             return (
//               <div key={index} className="group flex items-center gap-1.5">
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-Primary font-semibold"
//                       : "text-white/80 hover:text-Primary transition"
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//                 {index !== menuItems.length - 1 && (
//                   <span
//                     className={
//                       isActive
//                         ? "text-Primary"
//                         : "text-white/40 group-hover:text-Primary transition"
//                     }
//                   >
//                     |
//                   </span>
//                 )}
//               </div>
//             );
//           })}

//           {!isLoggedIn ? (
//             <>
//               <button
//                 onClick={() => navigate("/signin")}
//                 className="ml-6 px-3 py-1.5 text-white/90 bg-Primary rounded-lg cursor-pointer"
//               >
//                 Login
//               </button>
//               <button className="px-4 py-1.5 bg-Primary text-white rounded-lg">
//                 Get Started
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => setModalOpen(true)}
//               className="ml-6 px-3 py-1 bg-Primary text-white rounded-lg cursor-pointer flex items-center gap-x-1.5"
//             >
//               <span className="text-xl">+</span> Create Post
//             </button>
//           )}
//         </div>

//         {/* Profile Picture outside the glass box (Desktop) */}
//         {isLoggedIn && (
//           <button
//             onClick={() => navigate("/profile")}
//             className="ml-4 w-12 h-12 rounded-full border-2 border-white/30 overflow-hidden cursor-pointer"
//           >
//             <img
//               src={Icons.profile1}
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </button>
//         )}

//         {/* Mobile Hamburger Icon */}
//         <button
//           className="md:hidden text-white text-2xl"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden w-full px-4 pb-4">
//           <div className="border border-white/30 rounded-2xl p-4 backdrop-blur-md bg-white/10">

//             {/* Menu Items */}
//             <div className="flex flex-col gap-4">
//               {menuItems.map((item) => {
//                 const isActive = location.pathname === item.path;
//                 return (
//                   <NavLink
//                     key={item.name}
//                     to={item.path}
//                     onClick={() => setOpen(false)}
//                     className={
//                       isActive
//                         ? "text-blue-400 font-semibold"
//                         : "text-white/80 hover:text-blue-400 transition"
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 );
//               })}
//             </div>

//             <hr className="my-4 border-white/30" />

//             {/* Mobile Buttons */}
//             <div className="flex flex-col gap-3">
//               {!isLoggedIn ? (
//                 <>
//                   <button
//                     onClick={() => navigate("/signin")}
//                     className="w-full py-2 text-white/90 border border-white/40 rounded-xl hover:bg-white/10 transition"
//                   >
//                     Login
//                   </button>
//                   <button className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
//                     Get Started
//                   </button>
//                 </>
//               ) : (
//                 <div className="flex items-center gap-3 mt-3">
//                   <button
//                     onClick={() => setModalOpen(true)}
//                     className="flex-1 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
//                   >
//                     Create Post
//                   </button>

//                   {/* Profile Picture Mobile outside the border */}
//                   <button
//                     onClick={() => navigate("/profile")}
//                     className="w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden cursor-pointer"
//                   >
//                     <img
//                       src={Icons.profilePic}
//                       alt="Profile"
//                       className="w-full h-full object-cover"
//                     />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {modalOpen && <CreatePostModal onClose={() => setModalOpen(false)} />}
//     </nav>
//   );
// }



//responsive for middle 

// import React, { useState, useEffect } from "react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import Icons from "../utils/images";
// import CreatePostModal from "./navbar/CreatePostModal";

// export default function Header() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [open, setOpen] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);

//   // Check login status
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn");
//     setIsLoggedIn(loggedIn === "true");
//   }, [location.pathname]);

//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [open]);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "AI Trip Planner", path: "/trip-planner" },
//     { name: "Expedition Feed", path: "/expedition" },
//     { name: "Hitlists", path: "/hitlists" },
//     { name: "Pricing", path: "/pricing" },
//     { name: "About", path: "/about" },
//   ];

//   return (
//     <nav className="w-full fixed top-2 left-0 z-50 bg-transparent">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-x-4">
//         {/* Logo */}
//         <div
//           className="md:ml-16 mr-16 cursor-pointer"
//           onClick={() => navigate("/")}
//         >
//           <img src={Icons.navLogo} alt="logo" className="md:h-[80px] h-[60px]" />
//         </div>

//         {/* Desktop Menu + Buttons inside glass box */}
//         <div className="hidden md:flex items-center justify-between gap-4 border border-white/30 rounded-full px-6 py-2.5 backdrop-blur-md bg-white/10">
//           {menuItems.map((item, index) => {
//             const isActive = location.pathname === item.path;
//             return (
//               <div key={index} className="group flex items-center gap-1.5">
//                 {/* LEFT LINE */}
//                 {/* {index !== 0 && (
//                   <span
//                     className={`h-4 w-[1px] bg-white/40 transition
//           group-hover:bg-Primary
//           ${location.pathname === item.path ? "bg-Primary" : ""}
//         `}
//                   ></span>
//                 )} */}

//                 {/* MENU TEXT */}
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-Primary font-semibold"
//                       : "text-white/80 hover:text-Primary transition"
//                   }
//                 >
//                   {item.name}
//                 </NavLink>

//                 {/* RIGHT LINE */}
//                 {index !== menuItems.length - 1 && (
//                   <span
//                     className={`h-5 w-[1px] bg-white/40 ml-[8px] transition

//           ${location.pathname === item.path ? "bg-Primary" : ""}
//         `}
//                   ></span>
//                 )}
//               </div>
//             );
//           })}

//           {!isLoggedIn ? (
//             <>
//               <button
//                 onClick={() => navigate("/signin")}
//                 className="ml-6 px-3 py-1.5 text-white/90 bg-Primary rounded-lg cursor-pointer"
//               >
//                 Login
//               </button>
//               <button className="px-4 py-1.5 bg-Primary text-white rounded-lg">
//                 Get Started
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => setModalOpen(true)}
//               className="ml-6 px-3 py-1 bg-Primary text-white rounded-lg cursor-pointer flex items-center gap-x-1.5"
//             >
//               <span className="text-xl">+</span> Create Post
//             </button>
//           )}
//         </div>

//         {/* Profile Picture outside the glass box (Desktop) */}
//         {isLoggedIn && (
//           <button
//             onClick={() => navigate("/profile")}
//             className="hidden md:block ml-4 w-12 h-12 rounded-full border-2 border-white/30 overflow-hidden cursor-pointer"
//           >
//             <img
//               src={Icons.profile1}
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </button>
//         )}

//         {/* Mobile Hamburger Icon */}
//         <div className="ml-auto">
//           <button
//             className="md:hidden text-white text-2xl"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden w-full px-4 pb-4">
//           <div className="border border-white/30 rounded-2xl p-4 backdrop-blur-md bg-white/10">
//             {/* Menu Items */}
//             <div className="flex flex-col gap-4">
//               {menuItems.map((item) => {
//                 const isActive = location.pathname === item.path;
//                 return (
//                   <NavLink
//                     key={item.name}
//                     to={item.path}
//                     onClick={() => setOpen(false)}
//                     className={
//                       isActive
//                         ? "text-blue-400 font-semibold"
//                         : "text-white/80 hover:text-blue-400 transition"
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 );
//               })}
//             </div>

//             <hr className="my-4 border-white/30" />

//             {/* Mobile Buttons */}
//             <div className="flex flex-col gap-3">
//               {!isLoggedIn ? (
//                 <>
//                   <button
//                     onClick={() => navigate("/signin")}
//                     className="w-full py-2 text-white/90 border border-white/40 rounded-xl hover:bg-white/10 transition"
//                   >
//                     Login
//                   </button>
//                   <button className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
//                     Get Started
//                   </button>
//                 </>
//               ) : (
//                 <div className="flex items-center gap-3 mt-3">
//                   <button
//                     onClick={() => setModalOpen(true)}
//                     className="flex-1 py-2 bg-Primary text-white rounded-xl"
//                   >
//                     Create Post
//                   </button>

//                   {/* Profile Picture Mobile outside the border */}
//                   <button
//                     onClick={() => {
//                       navigate("/profile");
//                       setOpen(false);
//                     }}
//                     className="w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden cursor-pointer"
//                   >
//                     <img
//                       src={Icons.profile1}
//                       alt="Profile"
//                       className="w-full h-full object-cover"
//                     />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {modalOpen && <CreatePostModal onClose={() => setModalOpen(false)} />}
//     </nav>
//   );
// }

import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Icons from "../utils/images";
import CreatePostModal from "./navbar/CreatePostModal";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Check login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

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
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-x-4">
        {/* Logo */}
        <div
          className="lg:ml-16 mr-16 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={Icons.navLogo}
            alt="logo"
            className="md:h-[80px] h-[60px]"
          />
        </div>

        {/* Desktop Menu + Buttons inside glass box */}
        <div className="hidden lg:flex items-center justify-between gap-4 border border-white/30 rounded-full px-6 py-2.5 backdrop-blur-md bg-white/10">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <div key={index} className="group flex items-center gap-1.5">
                {/* LEFT LINE */}
                {/* {index !== 0 && (
                  <span
                    className={`h-4 w-[1px] bg-white/40 transition 
          group-hover:bg-Primary
          ${location.pathname === item.path ? "bg-Primary" : ""}
        `}
                  ></span>
                )} */}

                {/* MENU TEXT */}
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

                {/* RIGHT LINE */}
                {index !== menuItems.length - 1 && (
                  <span
                    className={`h-5 w-[1px] bg-white/40 ml-[8px] transition 
         
          ${location.pathname === item.path ? "bg-Primary" : ""}
        `}
                  ></span>
                )}
              </div>
            );
          })}

          {!isLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/signin")}
                className="ml-6 px-3 py-1.5 text-white/90 bg-Primary rounded-lg cursor-pointer"
              >
                Login
              </button>
              <button className="px-4 py-1.5 bg-Primary text-white rounded-lg">
                Get Started
              </button>
            </>
          ) : (
            <button
              onClick={() => setModalOpen(true)}
              className="ml-6 px-3 py-1 bg-Primary text-white rounded-lg cursor-pointer flex items-center gap-x-1.5"
            >
              <span className="text-xl">+</span> Create Post
            </button>
          )}
        </div>

        {/* Profile Picture outside the glass box (Desktop) */}
        {isLoggedIn && (
          <button
            onClick={() => navigate("/profile")}
            className="hidden lg:block ml-4 w-12 h-12 rounded-full border-2 border-white/30 overflow-hidden cursor-pointer"
          >
            <img
              src={Icons.profile1}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>
        )}

        {/* Mobile Hamburger Icon */}
        <div className="ml-auto">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-Primary text-white">
            <button
              className="lg:hidden text-white text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden w-full px-4 pb-4">
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
                        ? "text-Primary font-semibold"
                        : "text-white/80 hover:text-Primary"
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>

            <hr className="my-4 border-white/30" />

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3">
              {!isLoggedIn ? (
                <>
                  <button
                    onClick={() => navigate("/signin")}
                    className="w-full py-2 text-white/90 rounded-lg bg-Primary"
                  >
                    Login
                  </button>
                  <button className="w-full py-2 bg-Primary text-white rounded-lg">
                    Get Started
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex-1 py-2 bg-Primary text-white rounded-xl"
                  >
                    Create Post
                  </button>

                  {/* Profile Picture Mobile outside the border */}
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setOpen(false);
                    }}
                    className="w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={Icons.profile1}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {modalOpen && <CreatePostModal onClose={() => setModalOpen(false)} />}
    </nav>
  );
}
