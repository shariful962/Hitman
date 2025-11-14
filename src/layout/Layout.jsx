// import React from "react";
// import { Outlet } from "react-router";
// import Header from "../components/landing/Header";
// import Footer from "../components/landing/Footer";


// const Layout = () => {
//   return (
//     <div>
//       <Header />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;








// import React from "react";
// import { Outlet } from "react-router";
// // import Header from "../components/landing/Header";
// import Footer from "../components/landing/Footer";
// import Header from "../components/navbar/Header";

// const Layout = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header stays at the top */}
//       {/* <Header /> */}
//       <Header />

//       {/* Main content grows to fill available space */}
//       <main className="flex-grow bg-dark">
//         <Outlet />
//       </main>

//       {/* Footer stays at the bottom */}
//       <Footer />
//     </div>
//   );
// };

// export default Layout;







import React from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../components/navbar/Header";
// import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
// import Header from "../components/Header";

const Layout = () => {
  const location = useLocation();
  
  // Hide footer on the AI Trip Planner page
  const hideFooter = location.pathname === "/trip-planner";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow bg-dark ${!hideFooter ? "pb-0" : ""}`}>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;

