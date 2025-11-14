import React, { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";
import { RiShareForwardLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";

const PostCard = ({ profile, name, time, location, caption, image }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);

  // LIKE
  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => (liked ? prev - 1 : prev + 1));
  };

  // COMMENT
  const handleAddComment = () => {
    if (commentInput.trim() === "") return;
    setComments([...comments, commentInput]);
    setCommentInput("");
  };

  // SHARE
  const handleShare = async () => {
    const fakeLink = "https://yourapp.com/post/123"; // dynamic id later
    await navigator.clipboard.writeText(fakeLink);
    alert("Link Copied! ");
  };

  return (
    <div className="bg-dark2 text-white rounded-2xl w-full max-w-[730px] mx-auto mb-10">
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 mb-3">
        <div className="flex items-center gap-3">
          <img src={profile} className="w-12 h-12 rounded-full" />
          <div>
            <p className="text-lg font-medium">{name}</p>
            <p className="text-xs text-white/50">{time}</p>
          </div>
        </div>
        <p className="text-xs text-zinc-400">
          <IoLocationOutline size={18} className="inline" /> {location}
        </p>
      </div>

      {/* Caption */}
      {caption && <p className="px-4 mb-3">{caption}</p>}

      {/* Image */}
      {image && (
        <div className="overflow-hidden">
          <img src={image} className="w-full h-[350px] object-cover" />
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-around py-6">
        <button
          onClick={handleLike}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Heart size={20} color={liked ? "red" : "white"} />
          <span>{liked ? "Liked" : "Like"}</span>
          {likeCount > 0 && <span>({likeCount})</span>}
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <MessageCircle size={20} /> Comment
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 cursor-pointer"
        >
          <RiShareForwardLine size={24} /> Share
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="px-4 pb-4">
          {/* Show comments */}
          {/* <div className="space-y-2 mb-3">
            {comments.map((c, i) => (
              <p key={i} className="bg-dark p-2 rounded-lg text-sm">
                {c}
              </p>
            ))}
          </div> */}

          {/* Input */}
          <div className="flex gap-2">
            <input
              className="w-full bg-dark px-3 py-2 rounded-lg text-sm outline-none"
              placeholder="Write a comment..."
              value={commentInput}
              onChange={e => setCommentInput(e.target.value)}
            />
            <button
              onClick={handleAddComment}
              className="bg-Primary px-3 py-2 rounded-lg text-sm"
            >
              comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
