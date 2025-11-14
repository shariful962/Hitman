// // src/components/posts/CreatePostModal.jsx
// import React, { useState } from "react";
// import { FiX } from "react-icons/fi";
// import { FaImage, FaMapMarkerAlt } from "react-icons/fa";

// const CreatePostModal = ({ onClose }) => {
//   const [postText, setPostText] = useState("");

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[1000]">
//       <div className="bg-[#111] text-white rounded-2xl w-[90%] max-w-md shadow-lg overflow-hidden relative">
//         {/* Header */}
//         <div className="flex justify-between items-center border-b border-gray-700 px-5 py-3">
//           <h2 className="text-lg font-semibold">Create post</h2>
//           <button onClick={onClose} className="text-gray-400 hover:text-red-500">
//             <FiX size={22} />
//           </button>
//         </div>

//         {/* User Info */}
//         <div className="flex items-center gap-3 px-5 py-4">
//           <img
//             src="https://via.placeholder.com/40"
//             alt="profile"
//             className="w-10 h-10 rounded-full"
//           />
//           <span className="font-medium">Tamim Sarker</span>
//         </div>

//         {/* Input Box */}
//         <textarea
//           value={postText}
//           onChange={(e) => setPostText(e.target.value)}
//           placeholder="What’s on your mind?"
//           className="w-full bg-transparent text-gray-300 px-5 outline-none resize-none h-32 placeholder-gray-500"
//         />

//         {/* Footer */}
//         <div className="flex justify-between items-center px-5 py-4 border-t border-gray-700">
//           <div className="flex items-center gap-4 text-xl text-gray-400">
//             <FaImage className="cursor-pointer hover:text-blue-400" />
//             <FaMapMarkerAlt className="cursor-pointer hover:text-red-400" />
//           </div>
//           <button
//             disabled={!postText.trim()}
//             className={`px-6 py-1.5 rounded-full font-medium ${
//               postText.trim()
//                 ? "bg-Primary hover:opacity-90"
//                 : "bg-gray-600 cursor-not-allowed"
//             }`}
//           >
//             Post
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePostModal;



// src/components/posts/CreatePostModal.jsx
import React, { useState, useRef } from "react";
import { FiX } from "react-icons/fi";
import { FaImage, FaMapMarkerAlt } from "react-icons/fa";
import Icons from "../../utils/images";
import { useNavigate } from "react-router";

const CreatePostModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [postText, setPostText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  //  handle image file select
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  //  remove selected image
  const removeImage = () => {
    setImagePreview(null);
    fileInputRef.current.value = null;
  };

  //  handle post submit (for now just console log)
  const handlePost = () => {
    console.log("Post content:", postText);
    console.log("Attached image:", imagePreview);
    onClose();
    navigate("/expedition")
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-[1000]">
      <div className="bg-dark2 text-white rounded-2xl w-[90%] max-w-[700px] shadow-lg overflow-hidden relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-700 px-5 py-3">
          <h2 className="text-lg font-semibold">Create post</h2>
          <button onClick={onClose} className="text-Primary cursor-pointer">
            <FiX size={22} />
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3 px-5 py-4">
          <img
            src={Icons.profile1}
            alt="profile"
            className="w-10 h-10 rounded-full ring-2 ring-white"
          />
          <span className="font-medium">Tamim Sarker</span>
        </div>

        {/* Input Box */}
        <textarea
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          placeholder="What’s on your mind?"
          className="w-full bg-transparent text-gray-300 px-5 outline-none resize-none h-32 md:h-44 placeholder-gray-500"
        />

        {/* Image Preview */}
        {imagePreview && (
          <div className="relative px-5 pb-4">
            <img
              src={imagePreview}
              alt="Preview"
              className="rounded-lg w-[150px] object-cover h-[150px]"
            />
            <button
              onClick={removeImage}
              className="absolute top-2 right-7 bg-black/60 hover:bg-black text-white rounded-full p-1"
            >
              <FiX size={18} className="cursor-pointer" />
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-between items-center px-5 py-4 border-t border-gray-700">
          <div className="flex items-center gap-4 text-xl text-gray-400">
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />

            {/* Image upload icon */}
            <FaImage size={28}
              className="cursor-pointer hover:text-blue-400"
              onClick={() => fileInputRef.current.click()}
            />

            {/* (Optional) Location icon */}
            <FaMapMarkerAlt size={28} className="cursor-pointer hover:text-Primary" />
          </div>

          <button
            onClick={handlePost}
            disabled={!postText.trim() && !imagePreview}
            className={`px-6 w-[150px] py-1.5 rounded-full font-medium ${
              postText.trim() || imagePreview
                ? "bg-Primary hover:opacity-90 cursor-pointer"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;

