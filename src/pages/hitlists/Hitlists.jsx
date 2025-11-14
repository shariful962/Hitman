
// import React, { useState } from "react";
// import Selected from "../../common/Selected";
// import { FaSearch, FaRegHeart, FaHeart } from "react-icons/fa";
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
//   const [likedTrips, setLikedTrips] = useState([]);

//   const toggleLike = (id) => {
//     setLikedTrips((prev) =>
//       prev.includes(id) ? prev.filter((tripId) => tripId !== id) : [...prev, id]
//     );
//   };

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

//         {/* Mission Vault cards */}
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
//                   className="mt-4 w-full bg-Primary text-white py-1.5 rounded-lg font-medium cursor-pointer"
//                 >
//                   View Details
//                 </button>

//                 <div className="flex justify-between items-center mt-4 text-white px-1">
//                   <button
//                     className="cursor-pointer"
//                     onClick={() => toggleLike(trip.id)}
//                   >
//                     {likedTrips.includes(trip.id) ? (
//                       <FaHeart size={20} className="text-red-500" />
//                     ) : (
//                       <FaRegHeart size={20} />
//                     )}
//                   </button>

//                   {/* Share button: UI only, no functionality */}
//                   <button
//                     className="flex items-center gap-2 cursor-pointer"
//                     onClick={(e) => e.preventDefault()} // do nothing on click
//                   >
//                     <RiShareForwardLine size={24} />
//                     <span className="text-sm">Share</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
// {/* on the radar  */}
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

//         <div className="mt-10">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hitlists;



// src/components/hitlists/Hitlists.jsx
import React, { useState } from "react";
import Selected from "../../common/Selected";
import { FaSearch, FaRegHeart, FaHeart } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import Icons from "../../utils/images";
import PostCard from "../expedition/PostCard";
import ShareModal from "./ShareModal";
import { useNavigate, Outlet } from "react-router-dom";

const trips = [
  { id: 1, image: Icons.hitlist1, title: "3-Day Cox’s Bazar", icon: Icons.hitlistIcon1 },
  { id: 2, image: Icons.hitlist2, title: "3-Day Bandarban", icon: Icons.hitlistIcon2 },
  { id: 3, image: Icons.hitlist3, title: "3-Day Paris", icon: Icons.hitlistIcon3 },
  { id: 4, image: Icons.hitlist4, title: "3-Day Bandarban", icon: Icons.hitlistIcon2 },
];

const Hitlists = () => {
  const navigate = useNavigate();
  const [likedTrips, setLikedTrips] = useState([]);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const toggleLike = (id) => {
    setLikedTrips((prev) =>
      prev.includes(id) ? prev.filter((tripId) => tripId !== id) : [...prev, id]
    );
  };

  const openShareModal = (trip) => {
    setSelectedTrip({
      ...trip,
      userText: "",
      description: "Explore this amazing destination!", // default text
      itinerary: ["Eiffel Tower & Seine Cruise", "Louvre & Montmartre Sunset ", "Versailles & Le Marais Walk "], // sample
      name: "John Doe", // sample user
    });
    setIsShareOpen(true);
  };

  return (
    <div className="containerBox px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-[42px] mt-34 font-medium mb-4 ml-3 text-white">
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
                  className="mt-4 w-full bg-Primary text-white py-1.5 rounded-lg font-medium cursor-pointer"
                >
                  View Details
                </button>

                <div className="flex justify-between items-center mt-4 text-white px-1">
                  <button
                    className="cursor-pointer"
                    onClick={() => toggleLike(trip.id)}
                  >
                    {likedTrips.includes(trip.id) ? (
                      <FaHeart size={20} className="text-red-500" />
                    ) : (
                      <FaRegHeart size={20} />
                    )}
                  </button>

                  <button
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => openShareModal(trip)}
                  >
                    <RiShareForwardLine size={24} />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Modal */}
        {selectedTrip && (
          <ShareModal
            isOpen={isShareOpen}
            onClose={() => setIsShareOpen(false)}
            destinationData={selectedTrip}
          />
        )}

        {/* On the Radar Section */}
        <h1 className="text-3xl md:text-[42px] mt-6 font-medium mb-6 text-white">
          On the Radar
        </h1>

        <div className="my-10 flex items-center flex-col md:flex-row gap-6">
          <PostCard
            profile={Icons.profile1}
            name="Anne Jones"
            time="25m ago"
            location="Italy"
            caption="Hitman Jack planning so easy and convenient"
            image={Icons.expedition1}
          />

          <PostCard
            profile={Icons.profile1}
            name="Shakib Al Hasan"
            time="1h ago"
            location="Italy"
            caption="The plan was so awesome with #HitmanJack"
            image={Icons.expedition3}
          />
        </div>

        <div className="mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Hitlists;




