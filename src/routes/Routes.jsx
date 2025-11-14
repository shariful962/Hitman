// import { createBrowserRouter } from "react-router";
// import Layout from "../layout/Layout";
// import Error from "../pages/Error";
// import App from "../App";
// import AuthLayout from "../layout/AuthLayout";
// import Login from "../components/auth/Login";
// import Signup from "../components/auth/Signup";
// import ForgotPassword from "../components/auth/ForgotPassword";
// import OtpVerify from "../components/auth/OtpVerify";
// import ResetPassword from "../components/auth/ResetPassword";

// import TripPlanner from "../pages/trip planner/TripPlanner";
// import PricingPlans from "../pages/pricing/PricingPlans";
// import Profile from "../pages/profile/Profile"
// import EditProfile from "../pages/profile/EditProfile";
// import PrivacyPolicy from "../pages/profile/PrivacyPolicy";
// import Expedition from "../pages/expedition/Expedition";
// import Hitlists from "../pages/hitlists/Hitlists";
// import TermsCondition from "../pages/profile/TermsCondition";
// import HelpSupport from "../pages/profile/HelpSupport";
// import FAQ from "../pages/profile/FAQ";
// import TripDetails from "../pages/hitlists/TripDetails";



// export const router = createBrowserRouter([
//     {
//         path: '/',
//         Component: Layout,
//         errorElement: <Error />,
//         children: [
//             {index: true, Component: App},
//             {path: 'trip-planner', Component: TripPlanner},
//             {path: 'expedition', Component: Expedition},
//             // {path: 'hitlists', Component: Hitlists},
//             {
//             path: 'hitlists',
//             Component: Hitlists,
//             children: [
//                 {
//                     path: 'trip/:id',   // 
//                     Component: TripDetails,
//                     loader: ({params}) => fetch(`http://10.10.7.126:5173/hitlists/trip/${params.id}`)
//                 }
//             ]
//         },
//             {path: 'pricing', Component: PricingPlans},
//             {path:'profile', Component: Profile},
//             {path:'profile/edit', Component: EditProfile},
//             {path:'profile/edit/faq', Component: FAQ},
//             {path:'profile/privacy-policy', Component: PrivacyPolicy},
//             {path:'profile/terms-condition', Component: TermsCondition},
//             {path:'profile/help-support', Component: HelpSupport},
//         ]
//     },
//     {
//         Component: AuthLayout,
//         children: [
//             {path: 'signin', Component: Login},
//             {path: 'signup', Component: Signup},
//             {path: 'forgotpassword', Component: ForgotPassword},
//             {path: 'otp', Component: OtpVerify},
//             {path: 'resetpassword', Component: ResetPassword}
//         ]
//     }
 
// ])




import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Error from "../pages/Error";
import App from "../App";

import AuthLayout from "../layout/AuthLayout";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import ForgotPassword from "../components/auth/ForgotPassword";
import OtpVerify from "../components/auth/OtpVerify";
import ResetPassword from "../components/auth/ResetPassword";

import TripPlanner from "../pages/trip planner/TripPlanner";
import PricingPlans from "../pages/pricing/PricingPlans";
import Profile from "../pages/profile/Profile";
import EditProfile from "../pages/profile/EditProfile";
import PrivacyPolicy from "../pages/profile/PrivacyPolicy";
import Expedition from "../pages/expedition/Expedition";
import Hitlists from "../pages/hitlists/Hitlists";
import TermsCondition from "../pages/profile/TermsCondition";
import HelpSupport from "../pages/profile/HelpSupport";
import FAQ from "../pages/profile/FAQ";
import TripDetails from "../pages/hitlists/TripDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <App /> },
      { path: "trip-planner", element: <TripPlanner /> },
      { path: "expedition", element: <Expedition /> },
{
  path: "hitlists",
  element: <Hitlists />,
},

{
  path: "hitlists/trip/:id",
  element: <TripDetails />,
  loader: ({ params }) =>
    fetch(`https://ai-travel-web2.vercel.app/hitlists/trip/${params.id}`)
},

      { path: "pricing", element: <PricingPlans /> },
      { path: "profile", element: <Profile /> },
      { path: "profile/edit", element: <EditProfile /> },
      { path: "profile/edit/faq", element: <FAQ /> },
      { path: "profile/privacy-policy", element: <PrivacyPolicy /> },
      { path: "profile/terms-condition", element: <TermsCondition /> },
      { path: "profile/help-support", element: <HelpSupport /> },
    ],
  },

  // Auth routes
  {
    element: <AuthLayout />,
    children: [
      { path: "signin", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "forgotpassword", element: <ForgotPassword /> },
      { path: "otp", element: <OtpVerify /> },
      { path: "resetpassword", element: <ResetPassword /> },
    ],
  },
]);
