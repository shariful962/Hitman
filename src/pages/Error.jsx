import React from "react";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      {/* Big 404 Text */}
      <h1 className="text-9xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>

      {/* Description */}
      <p className="mt-2 text-gray-400 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist or may have been moved.
      </p>

      {/* Illustration (Optional SVG shape or emoji) */}
      <div className="mt-8">
        <span className="text-7xl animate-bounce">🚀</span>
      </div>

      {/* Back Home Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-10 flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
      >
        <FaArrowLeft />
        Go Back Home
      </button>
    </div>
  );
};

export default Error;

