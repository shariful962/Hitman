// import React, { useState } from "react";
// import { Heart, Share2 } from "lucide-react";
// import Icons from "../../utils/images";
// import { RiShareForwardLine } from "react-icons/ri";
// import { FiCheck, FiRefreshCw } from "react-icons/fi";

// const TripCard = ({ destination }) => {
//   const [liked, setLiked] = useState(false);

//   return (
//     <div>
//       <h1 className="mb-6">
//         <strong> Cox’s Bazar tour plan </strong>can be an amazing short getaway!
//         I’ll make this plan balanced — a mix of relaxation, adventure, local
//         food, and photogenic spots.
//       </h1>

//       <div className="bg-[#111] text-white rounded-2xl p-4  w-full max-w-[319px]">
//         <img
//           src={Icons.hitlist1}
//           alt={destination}
//           className="w-full h-40 object-cover rounded-2xl rounded-xl mb-3"
//         />

//         <div className="flex items-center gap-x-3.5 mb-3">
//           <img src={Icons.chatBotTitle} alt="" className="h-7.5 w-7.5" />
//           <div>
//             <h1 className="text-lg">{destination} 3-Day Getaway</h1>
//           </div>
//         </div>

        // <div className="flex items-center text-sm text-gray-300 gap-2 mt-2.5 mb-2">
        //   <div className="flex items-center gap-2.5">
        //     <img src={Icons.three} alt="" />
        //     <h1>3 days • 2 nights</h1>
        //   </div>
        //   <span>•</span>
        //   <div className="flex items-center gap-2.5">
        //     <img src={Icons.sport} alt="" /> <h1>6 Spots</h1>
        //   </div>
        // </div>

        // <div className="flex gap-3 mb-3 text-sm mt-3">
        //   <div className="flex items-center gap-2">
        //     <img src={Icons.beach} alt="" className="w-6 h-6" /> <h1>Beach</h1>
        //   </div>
        //   <div className="flex items-center gap-2">
        //     <img src={Icons.nature} alt="" className="w-6 h-6" /> <h1>Nature</h1>
        //   </div>
        //   <div className="flex items-center gap-2">
        //     <img src={Icons.food} alt="" className="w-6 h-6" /> <h1>Food</h1>
        //   </div>
        // </div>

//         <p className="text-white my-3">
//           Explore the longest sea beach, scenic drives and local taste of
//           Bangladesh’s coast, ideal for couples or weekend travelers.
//         </p>

//         <ul className="text-xs space-y-1 mb-4">
//           <li className="flex gap-2">
//             <FiCheck size={22} className="text-Primary" /> Day 1: Beach & Chill
//             Laboni Beach, Sugandha Sunset
//           </li>
//           <li className="flex gap-2">
//             <FiCheck size={22} className="text-Primary" /> Day 2: Nature &
//             Adventure Himchari, Inani, Marine Drive
//           </li>
//           <li className="flex gap-2">
//             <FiCheck size={22} className="text-Primary" /> Day 3: Local & Leisure
//             Fish Market, Burmese Market
//           </li>
//         </ul>

        // <button className="bg-Primary  text-white text-sm font-medium rounded-lg w-full py-2 cursor-pointer">
        //   View Details
        // </button>

//         {/* ❤️ Like & Share */}
//         <div className="flex justify-between text-gray-400 mt-2 px-1">
//           <span
//             className="cursor-pointer"
//             onClick={() => setLiked(!liked)}
//           >
//             {liked ? (
//               <Heart fill="red" color="red" />
//             ) : (
//               <Heart />
//             )}
//           </span>

//           <span className="flex gap-x-2.5 items-center cursor-pointer">
//             <RiShareForwardLine size={24} /> Share
//           </span>
//         </div>
//       </div>

      // <div className="spacy-y-2">
      //   <h1 className="mt-2">“Not satisfied with this plan?”</h1>
      //   <button className="mt-3 mb-4 cursor-pointer flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md ">
      //     <FiRefreshCw />
      //     Regenerate Plan
      //   </button>
      // </div>
    // </div>
//   );
// };

// export default TripCard;




import React, { useState } from "react";
import { Heart } from "lucide-react";
import { RiShareForwardLine } from "react-icons/ri";
import Icons from "../../utils/images";
import { FiCheck, FiRefreshCw } from "react-icons/fi";
import ShareModal from "./ShareModal";

const TripCard = ({ destination }) => {
  const [liked, setLiked] = useState(false);
  const [openShare, setOpenShare] = useState(false);

  const modalData = {
    image: Icons.hitlist1,
    title: `${destination} 3-Day Getaway`,
    description:
      "Explore the longest sea beach, scenic drives and local taste of Bangladesh’s coast.",
    itinerary: [
      "Day 1: Beach & Chill — Laboni Beach, Sugandha Sunset",
      "Day 2: Nature & Adventure — Himchari, Inani, Marine Drive",
      "Day 3: Local & Leisure — Fish Market, Burmese Market",
    ],
  };

  return (
    <div>
      {/* Card Content */}
      <div className="bg-[#111] text-white rounded-2xl p-4 max-w-[319px]">
        <img
          src={Icons.hitlist1}
          className="w-full h-40 object-cover rounded-2xl mb-3"
        />

        <div className="flex items-center gap-x-2.5 mb-1">
          <img src={Icons.chatBotTitle} alt="" className="h-7.5 w-7.5" /> {destination} 3-Day Getaway
        </div>

        <div className="flex items-center text-sm text-gray-300 gap-2 mt-4 mb-2">
          <div className="flex items-center gap-2.5">
            <img src={Icons.three} alt="" />
            <h1>3 days • 2 nights</h1>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2.5">
            <img src={Icons.sport} alt="" /> <h1>6 Spots</h1>
          </div>
        </div>

        <div className="flex gap-3 mb-3 text-sm mt-4">
          <div className="flex items-center gap-2">
            <img src={Icons.beach} alt="" className="w-6 h-6" /> <h1>Beach</h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={Icons.nature} alt="" className="w-6 h-6" /> <h1>Nature</h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={Icons.food} alt="" className="w-6 h-6" /> <h1>Food</h1>
          </div>
        </div>

        <p className="text-white mb-3">
          Explore the longest sea beach, scenic drives and local taste of
          Bangladesh’s coast.
        </p>

        <ul className="text-xs space-y-2 mb-4">
          <li className="flex gap-2">
            <FiCheck className="text-Primary" /> Day 1: Beach & Chill
          </li>
          <li className="flex gap-2">
            <FiCheck className="text-Primary" /> Day 2: Nature & Adventure
          </li>
          <li className="flex gap-2">
            <FiCheck className="text-Primary" /> Day 3: Local & Leisure
          </li>
        </ul>
        <button className="bg-Primary  text-white text-sm font-medium rounded-lg w-full py-2 cursor-pointer">
          View Details
        </button>

        {/* Buttons */}
        <div className="flex justify-between text-gray-400 mt-2">
          <span
            className="cursor-pointer"
            onClick={() => setLiked(!liked)}
          >
            {liked ? <Heart fill="red" color="red" /> : <Heart />}
          </span>

          <span
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setOpenShare(true)}
          >
            <RiShareForwardLine size={22} /> Share
          </span>
        </div>
      </div>
       <div className="spacy-y-2">
        <h1 className="mt-2">“Not satisfied with this plan?”</h1>
        <button className="mt-3 mb-4 cursor-pointer flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md ">
          <FiRefreshCw />
          Regenerate Plan
        </button>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={openShare}
        onClose={() => setOpenShare(false)}
        destinationData={modalData}
      />
    </div>
  );
};

export default TripCard;
