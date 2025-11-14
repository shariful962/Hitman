import React from "react";
import { FiX } from "react-icons/fi";
import Icons from "../../utils/images";
import { useNavigate } from "react-router";

const ShareModal = ({ isOpen, onClose, destinationData }) => {
  if (!isOpen) return null;
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[2000]">
      <div className="bg-dark text-white rounded-xl w-[90%] max-w-[500px] p-0 relative overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold">Create post</h2>
          <button onClick={onClose} className="text-red-400 hover:text-red-500">
            <FiX size={22} />
          </button>
        </div>

        {/* Profile + Caption */}
        {/* <div className="px-5 py-4">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={Icons.profile1}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium">{destinationData.name}</h3>
              <p className="text-gray-400 text-sm">What's on your mind?</p>
            </div>
          </div>
        </div> */}
        <div className="px-5 py-4">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={Icons.profile1}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium">{destinationData.name}</h3>
              <p className="text-gray-400 text-sm">What's on your mind?</p>
            </div>
          </div>

          {/* Text Input */}
          <textarea
            value={destinationData.userText}
            onChange={
              (e) => (destinationData.userText = e.target.value) // temporary local text
            }
            placeholder="Write something..."
            className="w-full bg-dark3 border border-white/10 rounded-lg p-3 text-sm text-gray-300 outline-none  resize-none h-12"
          ></textarea>
        </div>

        {/* ---- SHARE CARD BELOW ---- */}
        <div className="px-5 pb-5">
          <div className="bg-dark2 rounded-lg p-3 border border-white/5">
            {/* Image */}
            <img
              src={destinationData.image}
              alt="trip"
              className="w-full h-40 object-cover rounded-lg"
            />

            {/* Title */}
            <h2 className="flex items-center gap-x-3 mt-3">
              <img src={Icons.chatBotTitle} alt="" className="h-7.5 w-7.5" />{" "}
              {destinationData.title}
            </h2>

            <div className="flex items-center text-sm text-gray-300 gap-2 mt-2.5 mb-2">
              <div className="flex items-center gap-2.5">
                <img src={Icons.three} alt="" />
                <h1>3 days • 2 nights</h1>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2.5">
                <img src={Icons.sport} alt="" /> <h1>6 Spots</h1>
              </div>
            </div>

            <div className="flex gap-3 mb-3 text-sm mt-3">
              <div className="flex items-center gap-2">
                <img src={Icons.beach} alt="" className="w-6 h-6" />{" "}
                <h1>Beach</h1>
              </div>
              <div className="flex items-center gap-2">
                <img src={Icons.nature} alt="" className="w-6 h-6" />{" "}
                <h1>Nature</h1>
              </div>
              <div className="flex items-center gap-2">
                <img src={Icons.food} alt="" className="w-6 h-6" />{" "}
                <h1>Food</h1>
              </div>
            </div>
            {/* Description */}
            <p className="text-gray-300 text-sm mt-1">
              {destinationData.description}
            </p>

            {/* List */}
            <ul className="text-sm text-gray-400 space-y-2.5 mt-2">
              {destinationData.itinerary.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-Primary">✔</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center">
              <button className=" mt-6 bg-Primary  text-white text-sm font-medium rounded-lg w-[250px] py-2 cursor-pointer">
                View Details
              </button>
            </div>
          </div>

          {/* Post / Share Button */}
          <button
            onClick={async () => {
              try {
                if (navigator.canShare && navigator.canShare()) {
                  await navigator.share({
                    title: destinationData.title,
                    text: destinationData.description,
                  });
                }
                // Fallback: Just close modal silently (no alert)
                navigate("/expedition");
                onClose();
              } catch (error) {
                onClose(); // User cancels share → just close, no alert
              }
            }}
            className="w-full bg-Secondary py-2 rounded-lg font-semibold mt-4 cursor-pointer"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
