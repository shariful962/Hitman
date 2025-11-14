import React, { useState, useRef, useEffect } from "react";
import { Heart, Share2 } from "lucide-react";
import Icons from "../../utils/images";
import { RiShareForwardLine } from "react-icons/ri";
import { FiRefreshCw } from "react-icons/fi";

const TripCard = ({ destination }) => {
  return (
    <div>
      <div className="bg-[#111] text-white rounded-2xl px-3 py-4 w-full max-w-sm mx-auto shadow-lg border border-gray-800">
        <img
          src={Icons.hitlist1}
          alt={destination}
          className="w-full h-40 object-cover rounded-xl mb-3"
        />

        <h2 className="text-lg font-semibold mb-2">
          {destination} 3-Day Getaway
        </h2>
        <div className="flex items-center text-sm text-gray-300 gap-2 mb-2">
          <span> 3 days • 2 nights</span>
          <span>•</span>
          <span> 6 Spots</span>
        </div>

        <div className="flex gap-3 mb-3 text-yellow-400 text-sm">
          <span> Beach</span>
          <span> Nature</span>
          <span> Food</span>
        </div>

        <p className="text-gray-400 text-xs mb-3">
          Explore the longest sea beach, scenic drives and local taste of
          Bangladesh’s coast, ideal for couples or weekend travelers.
        </p>

        <ul className="text-xs space-y-1 mb-4">
          <li> Day 1: Beach & Chill Laboni Beach, Sugandha Sunset</li>
          <li> Day 2: Nature & Adventure Himchari, Inani, Marine Drive</li>
          <li> Day 3: Local & Leisure Fish Market, Burmese Market</li>
        </ul>

        <button className="bg-Primary  text-white text-sm font-medium rounded-lg w-full py-2 cursor-pointer">
          View Details
        </button>
        <div className="flex justify-between  text-gray-400 mt-2 px-1">
          <span>
            <Heart className="cursor-pointer" />
          </span>
          <span className="flex gap-x-2.5 items-center cursor-pointer">
            {" "}
            <RiShareForwardLine size={24} /> Share{" "}
          </span>
        </div>
      </div>
      <div className="spacy-y-2">
        <h1 className="mt-2">“Not satisfied with this plan?”</h1>
        <button
          //   onClick={onClick}
          className="mt-2 cursor-pointer flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          <FiRefreshCw />
          Regenerate Plan
        </button>
      </div>
    </div>
  );
};
export default TripCard;
