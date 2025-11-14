// import React from "react";
// import { FiMapPin } from "react-icons/fi";

// const Selected = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted!");
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-[#000000] p-4 rounded-lg flex flex-wrap gap-3 justify-center"
//       >
//         {/* Location */}
//         <div className="flex items-center gap-2 bg-[#1c1c1c] px-3 py-2 rounded-md flex-1 min-w-[180px]">
//           <FiMapPin className="text-gray-400" />
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             className="bg-transparent outline-none text-gray-200 placeholder-gray-500 w-full"
//           />
//         </div>

//         {/* Duration */}
//         <input
//           type="text"
//           name="duration"
//           placeholder="Write your duration"
//           className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-200 placeholder-gray-500 outline-none flex-1 min-w-[180px]"
//         />

//         {/* Budget */}
//         <select
//           name="budget"
//           className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-200 outline-none flex-1 min-w-[180px]"
//         >
//           <option>Budget</option>
//           <option>$ - Low</option>
//           <option>$$ - Medium</option>
//           <option>$$$ - High</option>
//         </select>

//         {/* Vibe */}
//         <select
//           name="vibe"
//           className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-200 outline-none flex-1 min-w-[180px]"
//         >
//           <option>Vibe</option>
//           <option>Relax</option>
//           <option>Adventure</option>
//           <option>Luxury</option>
//         </select>

//         {/* Submit Button (fixed width) */}
//         <button
//           type="submit"
//           className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold transition-all duration-200 w-[150px] sm:w-[180px]"
//         >
//           Explore
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Selected;


import React from "react";
import { FiMapPin, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router";

const Selected = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    navigate('/trip-planner')
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#000000] p-4 rounded-lg flex flex-wrap gap-3 justify-center"
      >
        {/* Location */}
        <div className="flex items-center gap-2 bg-[#1c1c1c] px-3 py-2 rounded-md flex-1 min-w-[180px]">
          <FiMapPin className="text-gray-400" />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="bg-transparent outline-none text-gray-200  w-full"
          />
        </div>

        {/* Duration */}
        <input
          type="text"
          name="duration"
          placeholder="Write your duration"
          className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-200 placeholder-gray-500 outline-none flex-1 min-w-[180px]"
        />

        {/* Budget */}
        <div className="relative flex-1 min-w-[180px]">
          <select
            name="budget"
            className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-200 outline-none w-full appearance-none pr-8"
          >
            <option>Budget</option>
            <option>$ - Low</option>
            <option>$$ - Medium</option>
            <option>$$$ - High</option>
          </select>
          <FiChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>

        {/* Vibe */}
        <div className="relative flex-1 min-w-[180px]">
          <select
            name="vibe"
            className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-200 outline-none w-full appearance-none pr-8"
          >
            <option>Vibe</option>
            <option>Relax</option>
            <option>Adventure</option>
            <option>Luxury</option>
          </select>
          <FiChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-Primary text-white px-6 py-2 rounded-md font-semibold transition-all duration-200 w-[150px] sm:w-[180px]"
        >
          Explore
        </button>
      </form>
    </div>
  );
};

export default Selected;
