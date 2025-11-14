import React from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";

const ShareModal = ({ isOpen, onClose, post }) => {
  if (!isOpen) return null;
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm  flex justify-center items-center z-50">
      <div className="bg-dark2 rounded-2xl w-[500px] p-5 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white"
        >
          <IoClose size={24} className="cursor-pointer" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 mb-4">
          <img src={post.profile} className="w-10 h-10 rounded-full" />
          <p className="text-white font-medium">{post.name}</p>
        </div>

        {/* Post Image */}
        {post.image && (
          <div className="overflow-hidden rounded-lg mb-4">
            <img src={post.image} className="w-full h-[200px] object-cover" />
          </div>
        )}

        {/* Caption */}
        {post.caption && <p className="text-white mb-4">{post.caption}</p>}

        {/* Share Options */}
        <button className="w-full bg-Primary text-white py-2 rounded-lg mb-3 cursor-pointer" onClick={onClose}>
          Share to Timeline
        </button>
        <button className="w-full bg-gray-700 text-white py-2 rounded-lg cursor-pointer mb-4" onClick={onClose}>
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
