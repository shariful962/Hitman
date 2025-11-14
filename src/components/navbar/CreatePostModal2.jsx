import React, { useState } from "react";

const CreatePostModal2 = ({ onClose, content }) => {
  const [caption, setCaption] = useState(content.caption || "");

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-dark rounded-xl p-6 w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-white"
          onClick={onClose}
        >
          X
        </button>

        {/* Show the post content */}
        <div className="bg-[#0f0f0f] rounded-2xl shadow-lg overflow-hidden text-white p-4 pb-4">
          {content.image && (
            <img
              src={content.image}
              alt={content.name}
              className="w-full h-44 object-cover rounded-lg"
            />
          )}
          <div className="mt-4">
            <div className="flex items-center gap-3">
              <img src={content.profile} alt={content.name} className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-lg font-medium">{content.name}</p>
                <p className="text-xs text-white/50">{content.time} • {content.location}</p>
              </div>
            </div>

            {content.caption && <p className="mt-2">{content.caption}</p>}
          </div>
        </div>

        <textarea
          className="w-full p-2 bg-dark2 text-white rounded-lg mt-4"
          placeholder="Write something..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <button className="mt-4 w-full bg-Primary py-2 rounded-lg text-white">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePostModal2;
