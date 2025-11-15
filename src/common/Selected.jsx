// import React from "react";
// import { FiMapPin, FiChevronDown } from "react-icons/fi";
// import { useNavigate } from "react-router";

// const Selected = () => {
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted!");
//     navigate('/trip-planner')
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
//             className="bg-transparent outline-none text-gray-200  w-full"
//           />
//         </div>

//         {/* Duration */}
//         <input
//           type="text"
//           name="duration"
//           placeholder="Write your duration"
//           className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-200  outline-none flex-1 min-w-[180px]"
//         />

//         {/* Budget */}
//         <div className="relative flex-1 min-w-[180px]">
//           <select
//             name="budget"
//             className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-400 outline-none w-full appearance-none pr-8"
//           >
//             <option>Budget</option>
//             <option>$ 1000-2999 </option>
//             <option>$ 3000- 4999</option>
//             <option>$ 5000+ </option>
//           </select>
//           <FiChevronDown
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
//           />
//         </div>

//         {/* Vibe */}
//         <div className="relative flex-1 min-w-[180px]">
//           <select
//             name="vibe"
//             className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-400 outline-none w-full appearance-none pr-8"
//           >
//             <option>Vibe</option>
//             <option>Chill & Relax</option>
//             <option>Adventure & Thrill</option>
//             <option>Romantic Escape</option>
//             <option>Urban & Culture</option>
//             <option>Social & Fun</option>
//           </select>
//           <FiChevronDown
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-Primary text-white px-6 py-2 rounded-md font-semibold transition-all duration-200 w-[150px] sm:w-[180px] cursor-pointer"
//         >
//           Explore
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Selected;





// import React, { useState } from "react";
// import { FiMapPin, FiChevronDown, FiCalendar } from "react-icons/fi";
// import { DayPicker } from "react-day-picker";
// import { format } from "date-fns";
// import { useNavigate } from "react-router";

// const Selected = () => {
//   const navigate = useNavigate();

//   const [open, setOpen] = useState(false);
//   const [range, setRange] = useState({
//     from: undefined,
//     to: undefined,
//   });

//   const formattedRange =
//     range.from && range.to
//       ? `${format(range.from, "dd MMM")} - ${format(range.to, "dd MMM")}`
//       : "Select Duration";

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/trip-planner");
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-[#000] p-4 rounded-lg flex flex-wrap gap-3 justify-center relative"
//       >
//         {/* Location */}
//         <div className="flex items-center gap-2 bg-[#1c1c1c] px-3 py-2 rounded-md flex-1 min-w-[180px]">
//           <FiMapPin className="text-gray-400" />
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             className="bg-transparent outline-none text-gray-200 w-full"
//           />
//         </div>

//         {/* Duration (Custom UI + Clean Calendar Popup) */}
//         <div className="relative flex-1 min-w-[180px]">
//           <div
//             className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-300 flex items-center justify-between cursor-pointer"
//             onClick={() => setOpen(!open)}
//           >
//             <div className="flex items-center gap-2">
//               <FiCalendar className="text-gray-400" />
//               <span className="text-gray-200">
//                 {formattedRange}
//               </span>
//             </div>
//             <FiChevronDown className="text-gray-400" />
//           </div>

//           {open && (
//             <div className="absolute z-50 mt-2 bg-dark border border-[#333] rounded-lg shadow-lg p-3 w-[360px]">
//               <DayPicker
//                 mode="range"
//                 selected={range}
//                 onSelect={setRange}
//                 pagedNavigation
//                 numberOfMonths={1}
//                 styles={{
//                   caption: { color: "white" },
//                   head_cell: { color: "#aaa" },
//                   day: { color: "white" },
//                   day_selected: {
//                     backgroundColor: "#1f5cff",
//                     color: "#fff",
//                   },
//                   day_range_middle: {
//                     backgroundColor: "#1f5cff55",
//                     color: "#fff",
//                   },
//                 }}
//               />
//             </div>
//           )}
//         </div>

//         {/* Budget */}
//         <div className="relative flex-1 min-w-[180px]">
//           <select
//             name="budget"
//             className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-400 outline-none w-full appearance-none pr-8"
//           >
//             <option>Budget</option>
//             <option>$ 1000-2999 </option>
//             <option>$ 3000- 4999</option>
//             <option>$ 5000+ </option>
//           </select>
//           <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//         </div>

//         {/* Vibe */}
//         <div className="relative flex-1 min-w-[180px]">
//           <select
//             name="vibe"
//             className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-400 outline-none w-full appearance-none pr-8"
//           >
//             <option>Vibe</option>
//             <option>Chill & Relax</option>
//             <option>Adventure & Thrill</option>
//             <option>Romantic Escape</option>
//             <option>Urban & Culture</option>
//             <option>Social & Fun</option>
//           </select>
//           <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="bg-Primary text-white px-6 py-2 rounded-md font-semibold transition-all duration-200 w-[150px] sm:w-[180px] cursor-pointer"
//         >
//           Explore
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Selected;





import React, { useState, useRef, useEffect } from "react";
import { FiMapPin, FiChevronDown, FiCalendar, FiX } from "react-icons/fi";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { useNavigate } from "react-router";
import "react-day-picker/dist/style.css";

const Selected = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState({ from: undefined, to: undefined });
  const calendarRef = useRef(null);

  const formattedRange =
    range.from && range.to
      ? `${format(range.from, "dd MMM")} - ${format(range.to, "dd MMM")}`
      : "Select Duration";

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/trip-planner");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // DayPicker inline modifier styles (stronger than external CSS)
  const modifiersStyles = {
    // the middle days of a selected range
    range_middle: {
      background: "transparent",
      color: "inherit",
      boxShadow: "none",
    },
    // start and end of the range
    range_start: {
      background: "#1f5cff",
      color: "#fff",
      borderRadius: "50%",
      boxShadow: "none",
    },
    range_end: {
      background: "#1f5cff",
      color: "#fff",
      borderRadius: "50%",
      boxShadow: "none",
    },
    // selected single days (safety)
    selected: {
      background: "#1f5cff",
      color: "#fff",
      borderRadius: "50%",
      boxShadow: "none",
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#000] p-4 rounded-lg flex flex-wrap gap-3 justify-center relative"
      >
        {/* Location */}
        <div className="flex items-center gap-2 bg-[#1c1c1c] px-3 py-2 rounded-md flex-1 min-w-[180px]">
          <FiMapPin className="text-gray-400" />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="bg-transparent outline-none text-gray-200 w-full"
          />
        </div>

        {/* Duration */}
        <div className="relative flex-1 min-w-[180px]" ref={calendarRef}>
          <div
            className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-300 flex items-center justify-between cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div className="flex items-center gap-2">
              <FiCalendar className="text-gray-400" />
              <span className="text-gray-200">{formattedRange}</span>
            </div>
            <FiChevronDown className="text-gray-400" />
          </div>

          {open && (
            <div className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg p-4 w-[400px]">
              <div className="flex justify-end mb-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="dark"
                >
                  <FiX size={20} />
                </button>
              </div>

              <DayPicker
                mode="range"
                selected={range}
                onSelect={setRange}
                numberOfMonths={1}
                modifiersStyles={modifiersStyles}
                // small safety: also set styles prop for text colors
                styles={{
                  caption: { color: "white" },
                  head_cell: { color: "#aaa" },
                  day: { color: "black" },
                }}
              />
            </div>
          )}
        </div>

        {/* Budget */}
        <div className="relative flex-1 min-w-[180px]">
          <select
            name="budget"
            className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-400 outline-none w-full appearance-none pr-8"
          >
            <option>Budget</option>
            <option>$ 1000-2999 </option>
            <option>$ 3000- 4999</option>
            <option>$ 5000+ </option>
          </select>
          <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        {/* Vibe */}
        <div className="relative flex-1 min-w-[180px]">
          <select
            name="vibe"
            className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-400 outline-none w-full appearance-none pr-8"
          >
            <option>Vibe</option>
            <option>Chill & Relax</option>
            <option>Adventure & Thrill</option>
            <option>Romantic Escape</option>
            <option>Urban & Culture</option>
            <option>Social & Fun</option>
          </select>
          <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-Primary text-white px-6 py-2 rounded-md font-semibold transition-all duration-200 w-[150px] sm:w-[180px] cursor-pointer"
        >
          Explore
        </button>
      </form>
    </div>
  );
};

export default Selected;

