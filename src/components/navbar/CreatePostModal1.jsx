// import { useState } from "react";

// const CreatePostModal1 = ({ onClose, prefillData }) => {
//   const [caption, setCaption] = useState(prefillData?.caption || "");
//   const [image, setImage] = useState(prefillData?.image || null);

//   const handlePost = () => {
//     // handle post submission
//     console.log("Posting:", { caption, image });
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//       <div className="bg-dark rounded-xl p-6 w-full max-w-md relative">
//         <button
//           className="absolute top-3 right-3 text-white"
//           onClick={onClose}
//         >
//           X
//         </button>

//         {image && <img src={image} alt="post" className="w-full h-40 object-cover rounded-lg mb-4" />}
//         <textarea
//           className="w-full p-2 bg-dark2 text-white rounded-lg"
//           placeholder="Write something..."
//           value={caption}
//           onChange={(e) => setCaption(e.target.value)}
//         />
//         <button
//           onClick={handlePost}
//           className="mt-4 w-full bg-Primary py-2 rounded-lg text-white"
//         >
//           Post
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CreatePostModal1;



import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const CreatePostModal1 = ({ onClose, trip }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-dark rounded-xl p-6 w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-white"
          onClick={onClose}
        >
          X
        </button>

        {/* Render exact same card inside modal */}
        <div className="bg-[#0f0f0f] rounded-2xl shadow-lg overflow-hidden text-white p-4 pb-4">
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

        {/* Caption input */}
        <textarea
          className="w-full p-2 bg-dark text-white rounded-lg mt-4"
          placeholder="Write something..."
        />
        <button className="mt-4 w-full bg-Primary py-2 rounded-lg text-white">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePostModal1;

