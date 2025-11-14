// import React from "react";
// import Selected from "../../common/Selected";
// import { FaSearch } from "react-icons/fa";
// import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
// import { Heart, MessageCircle, Share2 } from "lucide-react";
// import Icons from "../../utils/images";
// import { IoLocationOutline } from "react-icons/io5";
// import { RiShareForwardLine } from "react-icons/ri";

// const trips = [
//   {
//     id: 1,
//     image: Icons.hitlist1,
//     title: "3-Day Cox’s Bazar ",
//     icon: Icons.hitlistIcon1,
//   },
//   {
//     id: 2,
//     image: Icons.hitlist2,
//     title: "3-Day Bandarban",
//     icon: Icons.hitlistIcon2,
//   },
//   {
//     id: 3,
//     image: Icons.hitlist3,
//     title: "3-Day Paris",
//     icon: Icons.hitlistIcon3,
//   },
//   {
//     id: 4,
//     image: Icons.hitlist4,
//     title: "3-Day Bandarban",
//     icon: Icons.hitlistIcon2,
//   },
// ];

// const Hitlists = () => {
//   return (
//     <div className="containerBox px-4">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl md:text-[42px] mt-28 font-medium mb-6 ml-3 text-white">
//           Hitlists
//         </h1>
//         <div className="mb-4.5">
//           <Selected />
//         </div>

//         <div className="ml-4">
//           <div className="flex items-center  rounded-[8px] p-2 bg-dark2 w-80">
//           <input
//             type="text"
//             placeholder="Search"
//             className="outline-none border-none bg-transparent text-white px-4 py-2 rounded-3xl w-full"
//           />
//           <button className="p-2 rounded-full  text-white/50">
//             <FaSearch />{" "}
//           </button>
//         </div>
//         </div>

//         <h1 className="text-3xl md:text-[42px] mt-6 font-medium mb-6 ml-2 text-white">
//           Misson Vault
//         </h1>

//         {/* mission vault card section  */}

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {trips.map((trip) => (
//             <div
//               key={trip.id}
//               className="bg-[#0f0f0f] rounded-2xl shadow-lg overflow-hidden  text-white p-4 pb-4"
//             >
//               <img
//                 src={trip.image}
//                 alt={trip.title}
//                 className="w-full h-44 object-cover rounded-lg"
//               />
//               <div className="mt-4">
//                 <div className="flex items-center gap-x-2.5">
//                   <img
//                     src={trip.icon}
//                     alt={trip.title}
//                     className="w-7.5 h-7.5 object-cover"
//                   />
//                   <h2 className="text-sm">{trip.title}</h2>
//                 </div>
//                 <button className="mt-4 w-full bg-Primary text-white py-2 rounded-lg font-medium cursor-pointer">
//                   View Details
//                 </button>

//                 <div className="flex justify-between items-center mt-4  text-white px-1">
//                   <button className="cursor-pointer">
//                     <FaRegHeart size={20} />
//                   </button>
//                   <button className="flex items-center gap-2 cursor-pointer">
//                     <RiShareForwardLine size={24} />
//                     <span className="text-sm">Share</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <h1 className="text-3xl md:text-[42px] mt-6 font-medium mb-6 text-white">
//           On the Radar
//         </h1>

//           {/* on the Radar card section  */}

//         <div className="my-10 flex items-center flex-col md:flex-row gap-6 ">
//           <div className="  bg-dark2 text-white rounded-2xl  w-full md:w-1/2">
//             {/* Header */}
//             <div className="flex items-center justify-between mb-3 p-4">
//               <div className="flex items-center gap-3">
//                 <img
//                   src={Icons.profile1}
//                   alt="profile"
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="text-lg font-medium">Anne Jones</p>
//                   <p className="text-xs text-white/50">25m ago</p>
//                 </div>
//               </div>
//               <p className="text-xs text-zinc-400">
//                 {" "}
//                 <IoLocationOutline size={18} className="inline" /> Italy
//               </p>
//             </div>

//             {/* Caption */}
//             <p className="mb-3 px-4">Hitman Jack planning so easy and convinient</p>

//             {/* Image */}
//             <div className="aspect-[4/3]  overflow-hidden">
//               <img
//                 src={Icons.expedition1}
//                 alt="Venice bridge"
//                 className="w-full h-full object-cover "
//               />
//             </div>

//             {/* Actions */}
//             <div className="flex justify-around py-8  border-zinc-800">
//               <button className="flex items-center gap-2 text-white cursor-pointer">
//                 <Heart size={18} /> Like
//               </button>
//               <button className="flex items-center gap-2 text-white cursor-pointer">
//                 <MessageCircle size={18} /> Comment
//               </button>
//               <button className="flex items-center gap-2 text-white cursor-pointer">
//                 <Share2 size={18} /> Share
//               </button>
//             </div>
//           </div>

//           <div className="  bg-dark2 text-white rounded-2xl  w-full md:w-1/2">
//             {/* Header */}
//             <div className="flex items-center justify-between mb-3 p-4">
//               <div className="flex items-center gap-3">
//                 <img
//                   src={Icons.profile1}
//                   alt="profile"
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="text-lg font-medium">Joshef Marlow</p>
//                   <p className="text-xs text-white/50">1h ago</p>
//                 </div>
//               </div>
//               <p className="text-xs text-zinc-400">
//                 {" "}
//                 <IoLocationOutline size={18} className="inline" /> Portugal
//               </p>
//             </div>

//             {/* Caption */}
//             <p className="mb-3 px-4">Hitman Jack planning so easy and convinient</p>

//             {/* Image */}
//             <div className="aspect-[4/3]  overflow-hidden">
//               <img
//                 src={Icons.expedition2}
//                 alt="Venice bridge"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Actions */}
//             <div className="flex justify-around py-8  border-zinc-800">
//               <button className="flex items-center gap-2 text-white cursor-pointer">
//                 <Heart size={18} /> Like
//               </button>
//               <button className="flex items-center gap-2 text-white cursor-pointer">
//                 <MessageCircle size={18} /> Comment
//               </button>
//               <button className="flex items-center gap-2 text-white cursor-pointer">
//                 <Share2 size={18} /> Share
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hitlists;

// import React from "react";
// import Selected from "../../common/Selected";
// import { FaSearch } from "react-icons/fa";
// import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
// import { Heart, MessageCircle, Share2 } from "lucide-react";
// import Icons from "../../utils/images";
// import { IoLocationOutline } from "react-icons/io5";
// import { RiShareForwardLine } from "react-icons/ri";
// import PostCard from "../expedition/PostCard";
// import { useNavigate, Outlet } from "react-router";

// const trips = [
//   {
//     id: 1,
//     image: Icons.hitlist1,
//     title: "3-Day Cox’s Bazar ",
//     icon: Icons.hitlistIcon1,
//   },
//   {
//     id: 2,
//     image: Icons.hitlist2,
//     title: "3-Day Bandarban",
//     icon: Icons.hitlistIcon2,
//   },
//   {
//     id: 3,
//     image: Icons.hitlist3,
//     title: "3-Day Paris",
//     icon: Icons.hitlistIcon3,
//   },
//   {
//     id: 4,
//     image: Icons.hitlist4,
//     title: "3-Day Bandarban",
//     icon: Icons.hitlistIcon2,
//   },
// ];

// const Hitlists = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="containerBox px-4">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl md:text-[42px] mt-28 font-medium mb-6 ml-3 text-white">
//           Hitlists
//         </h1>
//         <div className="mb-4.5">
//           <Selected />
//         </div>

//         <div className="ml-4">
//           <div className="flex items-center  rounded-[8px] p-2 bg-dark2 w-80">
//             <input
//               type="text"
//               placeholder="Search"
//               className="outline-none border-none bg-transparent text-white px-4 py-2 rounded-3xl w-full"
//             />
//             <button className="p-2 rounded-full  text-white/50">
//               <FaSearch />{" "}
//             </button>
//           </div>
//         </div>

//         <h1 className="text-3xl md:text-[42px] mt-6 font-medium mb-6 ml-2 text-white">
//           Misson Vault
//         </h1>

//         {/* mission vault card section  */}

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {trips.map((trip) => (
//             <div
//               key={trip.id}
//               className="bg-[#0f0f0f] rounded-2xl shadow-lg overflow-hidden  text-white p-4 pb-4"
//             >
//               <img
//                 src={trip.image}
//                 alt={trip.title}
//                 className="w-full h-44 object-cover rounded-lg"
//               />
//               <div className="mt-4">
//                 <div className="flex items-center gap-x-2.5">
//                   <img
//                     src={trip.icon}
//                     alt={trip.title}
//                     className="w-7.5 h-7.5 object-cover"
//                   />
//                   <h2 className="text-sm">{trip.title}</h2>
//                 </div>
//                 <button
//                   onClick={() => navigate(`/hitlists/trip/${trip.id}`)}
//                   className="mt-4 w-full bg-Primary text-white py-2 rounded-lg font-medium cursor-pointer"
//                 >
//                   View Details
//                 </button>

//                 <div className="flex justify-between items-center mt-4  text-white px-1">
//                   <button className="cursor-pointer">
//                     <FaRegHeart size={20} />
//                   </button>
//                   <button className="flex items-center gap-2 cursor-pointer">
//                     <RiShareForwardLine size={24} />
//                     <span className="text-sm">Share</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <h1 className="text-3xl md:text-[42px] mt-6 font-medium mb-6 text-white">
//           On the Radar
//         </h1>

//         {/* on the Radar card section  */}

//         <div className="my-10 flex items-center flex-col md:flex-row gap-6 ">
//           <PostCard
//             profile={Icons.profile1}
//             name="Anne Jones"
//             time="25m ago"
//             location="Italy"
//             caption="Hitman Jack planning so easy and convenient"
//             image={Icons.expedition1}
//           />

//           <PostCard
//             profile={Icons.profile1}
//             name="Shakib Al Hasan"
//             time="1h ago"
//             location="Italy"
//             caption="The plan was so awesome with #HitmanJack"
//             image={Icons.expedition3}
//           />
//         </div>
//         {/* Outlet will render the child route content here */}
//          <div className="mt-10">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hitlists;



// import React from "react";
// import Selected from "../../common/Selected";
// import { FaSearch, FaRegHeart } from "react-icons/fa";
// import { RiShareForwardLine } from "react-icons/ri";
// import Icons from "../../utils/images";
// import PostCard from "../expedition/PostCard";
// import { useNavigate, Outlet } from "react-router-dom";

// const trips = [
//   { id: 1, image: Icons.hitlist1, title: "3-Day Cox’s Bazar", icon: Icons.hitlistIcon1 },
//   { id: 2, image: Icons.hitlist2, title: "3-Day Bandarban", icon: Icons.hitlistIcon2 },
//   { id: 3, image: Icons.hitlist3, title: "3-Day Paris", icon: Icons.hitlistIcon3 },
//   { id: 4, image: Icons.hitlist4, title: "3-Day Bandarban", icon: Icons.hitlistIcon2 },
// ];

// const Hitlists = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="containerBox px-4">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl md:text-[42px] mt-28 font-medium mb-6 ml-3 text-white">
//           Hitlists
//         </h1>

//         <div className="mb-4.5">
//           <Selected />
//         </div>

//         <div className="ml-4 mb-6">
//           <div className="flex items-center rounded-[8px] p-2 bg-dark2 w-80">
//             <input
//               type="text"
//               placeholder="Search"
//               className="outline-none border-none bg-transparent text-white px-4 py-2 rounded-3xl w-full"
//             />
//             <button className="p-2 rounded-full text-white/50">
//               <FaSearch />
//             </button>
//           </div>
//         </div>

//         <h1 className="text-3xl md:text-[42px] mt-6 font-medium mb-6 ml-2 text-white">
//           Mission Vault
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {trips.map((trip) => (
//             <div
//               key={trip.id}
//               className="bg-[#0f0f0f] rounded-2xl shadow-lg overflow-hidden text-white p-4 pb-4"
//             >
//               <img
//                 src={trip.image}
//                 alt={trip.title}
//                 className="w-full h-44 object-cover rounded-lg"
//               />
//               <div className="mt-4">
//                 <div className="flex items-center gap-x-2.5">
//                   <img src={trip.icon} alt={trip.title} className="w-7.5 h-7.5 object-cover" />
//                   <h2 className="text-sm">{trip.title}</h2>
//                 </div>

//                 <button
//                   onClick={() => navigate(`/hitlists/trip/${trip.id}`)}
//                   className="mt-4 w-full bg-Primary text-white py-2 rounded-lg font-medium cursor-pointer"
//                 >
//                   View Details
//                 </button>

//                 <div className="flex justify-between items-center mt-4 text-white px-1">
//                   <button className="cursor-pointer">
//                     <FaRegHeart size={20} />
//                   </button>
//                   <button className="flex items-center gap-2 cursor-pointer">
//                     <RiShareForwardLine size={24} />
//                     <span className="text-sm">Share</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <h1 className="text-3xl md:text-[42px] mt-6 font-medium mb-6 text-white">
//           On the Radar
//         </h1>

//         <div className="my-10 flex items-center flex-col md:flex-row gap-6">
//           <PostCard
//             profile={Icons.profile1}
//             name="Anne Jones"
//             time="25m ago"
//             location="Italy"
//             caption="Hitman Jack planning so easy and convenient"
//             image={Icons.expedition1}
//           />

//           <PostCard
//             profile={Icons.profile1}
//             name="Shakib Al Hasan"
//             time="1h ago"
//             location="Italy"
//             caption="The plan was so awesome with #HitmanJack"
//             image={Icons.expedition3}
//           />
//         </div>

//         {/* Child route content (TripDetails) will render here */}
//         <div className="mt-10">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hitlists;




import React from "react";
import Selected from "../../common/Selected";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import Icons from "../../utils/images";
import PostCard from "../expedition/PostCard";
import { useNavigate, Outlet } from "react-router-dom";

const trips = [
  { id: 1, image: Icons.hitlist1, title: "3-Day Cox’s Bazar", icon: Icons.hitlistIcon1 },
  { id: 2, image: Icons.hitlist2, title: "3-Day Bandarban", icon: Icons.hitlistIcon2 },
  { id: 3, image: Icons.hitlist3, title: "3-Day Paris", icon: Icons.hitlistIcon3 },
  { id: 4, image: Icons.hitlist4, title: "3-Day Bandarban", icon: Icons.hitlistIcon2 },
];

const Hitlists = () => {
  const navigate = useNavigate();

  return (
    <div className="containerBox px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-[42px] mt-28 font-medium mb-6 ml-3 text-white">
          Hitlists
        </h1>

        <div className="mb-4.5">
          <Selected />
        </div>

        <div className="ml-4 mb-6">
          <div className="flex items-center rounded-[8px] p-2 bg-dark2 w-80">
            <input
              type="text"
              placeholder="Search"
              className="outline-none border-none bg-transparent text-white px-4 py-2 rounded-3xl w-full"
            />
            <button className="p-2 rounded-full text-white/50">
              <FaSearch />
            </button>
          </div>
        </div>

        <h1 className="text-3xl md:text-[42px] mt-6 font-medium mb-6 ml-2 text-white">
          Mission Vault
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-[#0f0f0f] rounded-2xl shadow-lg overflow-hidden text-white p-4 pb-4"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-44 object-cover rounded-lg"
              />
              <div className="mt-4">
                <div className="flex items-center gap-x-2.5">
                  <img src={trip.icon} alt={trip.title} className="w-7.5 h-7.5 object-cover" />
                  <h2 className="text-sm">{trip.title}</h2>
                </div>

                <button
                  onClick={() => navigate(`/hitlists/trip/${trip.id}`)}
                  className="mt-4 w-full bg-Primary text-white py-2 rounded-lg font-medium cursor-pointer"
                >
                  View Details
                </button>

                <div className="flex justify-between items-center mt-4 text-white px-1">
                  <button className="cursor-pointer">
                    <FaRegHeart size={20} />
                  </button>
                  <button className="flex items-center gap-2 cursor-pointer">
                    <RiShareForwardLine size={24} />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outlet renders TripDetails here */}
        <div className="mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Hitlists;
