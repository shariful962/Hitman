
// import React, { useState, useRef, useEffect } from "react";
// import { FiPlus, FiSearch } from "react-icons/fi";
// import { FaMicrophone } from "react-icons/fa";
// import TripCard from "./TripCard";
// import Icons from "../../utils/images";

// export default function TripPlanner() {
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "I will build your perfect Itinerary" },
//   ]);

//   const [input, setInput] = useState("");
//   const [showMenu, setShowMenu] = useState(false);
//   const [showMenuBubbles, setShowMenuBubbles] = useState(true); // NEW STATE

//   const chatBoxRef = useRef(null);

//   // Auto scroll chat
//   useEffect(() => {
//     if (chatBoxRef.current) {
//       chatBoxRef.current.scrollTo({
//         top: chatBoxRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   }, [messages]);

//   // Handle Enter send
//   const handleSend = (e) => {
//     if (e.key === "Enter" && input.trim() !== "") {
//       const userMessage = { sender: "user", text: input };
//       setMessages((prev) => [...prev, userMessage]);
//       const userInput = input;
//       setInput("");

//       // Bubble hide when user manually types
//       setShowMenuBubbles(false);

//       setTimeout(() => {
//         setMessages((prev) => [
//           ...prev,
//           { sender: "bot", type: "tripCard", destination: userInput },
//         ]);
//       }, 600);
//     }
//   };

//   return (
//     <div className="flex h-screen bg-[#1e1e1e] text-white">
      
//       {/* Sidebar */}
//       <div className="absolute bottom-0 w-64 min-h-[100vh] bg-dark2 flex flex-col p-4 rounded-lg">
//         <div className=" mb-8">
//           <h1 className="mt-4 font-bold ">Your Journey Starts Here</h1>
//         </div>

//         <button className="flex items-center gap-2 bg-transparent rounded-md py-2 mb-4 cursor-pointer z-50">
//           <img src={Icons.newChat} alt="chatIcon" className="cursor-pointer" />
//           <h1 className="text-base cursor-pointer ">New Chat</h1>
//         </button>

//         <div className="relative mb-4">
//           <FiSearch className="absolute left-0 top-2.5 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search chats..."
//             className="bg-transparent w-full rounded-md pl-9 pr-3 py-2 text-sm text-gray-300 outline-none"
//           />
//         </div>

//         <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-700">
//           <p className="text-white/50 mb-1">Chats</p>
//         </div>
//       </div>

//       {/* Main Chat */}
//       <div className="flex-1 flex flex-col items-center justify-center p-4">
//         <div></div>
//         {/* <p className="text-sm mb-6 text-gray-300 text-center pt-28">
//           Just tell us where you want to go and we will create your perfect trip.
//         </p> */}

//         <div className="bg-transparent rounded-2xl p-4 w-full max-w-[800px] min-h-[calc(100vh-80px)] flex flex-col shadow-md pt-24">

//           {/* Chat messages */}
//           <div
//             ref={chatBoxRef}
//             className="flex-1 overflow-y-auto mb-3 space-y-3 scrollbar-hide"
//           >
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div className="max-w-[80%]">

//                   {msg.type === "tripCard" ? (
//                     <TripCard destination={msg.destination} />

//                   ) : (
//                     <div
//                       className={`p-3 rounded-2xl text-sm break-words ${
//                         msg.sender === "user"
//                           ? "bg-dark text-white rounded-br-none"
//                           : "bg-dark2 text-gray-100 rounded-bl-none"
//                       }`}
//                     >
//                       {msg.text}
//                     </div>
//                   )}

//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* MENU BUBBLES ABOVE INPUT FIELD */}
//           {/* <div 
//             className={`overflow-hidden transition-all duration-300 ${
//     showMenuBubbles ? "h-auto mb-6" : "h-0 mb-0"
//   }`}
//           >
//             <div className="flex flex-wrap gap-2 w-full max-w-[600px]">
//               {[
//                 "What's the best 10-day itinerary for a first-timer in Japan, covering Tokyo and Kyoto?",
//                 "Plan a 5-day, family-friendly trip to London, including activities for kids and a budget under $4000.",
//                 "I need a 4-day foodie guide to Rome, focusing on the best local restaurants and food tours."
               
//               ].map((opt, i) => (
//                 <button
//                   key={i}
//                   onClick={() => {
//                     setMessages((prev) => [...prev, { sender: "user", text: opt }]);
//                     setShowMenuBubbles(false); // hide after click

//                     setTimeout(() => {
//                       setMessages((prev) => [
//                         ...prev,
//                         { sender: "bot", type: "tripCard", destination: opt }
//                       ]);
//                     }, 400);
//                   }}
//                   className="px-3 py-2 bg-dark2/20 text-white rounded-xl border border-dark cursor-pointer lext-left"
//                 >
//                   {opt}
//                 </button>
//               ))}
//             </div>
//           </div> */}
//           {/* MENU BUBBLES ABOVE INPUT FIELD */}
// <div 
//   className={`overflow-hidden transition-all duration-300 ${
//     showMenuBubbles ? "h-auto mb-6" : "h-0 mb-0"
//   }`}
// >
//   <div className="flex flex-col gap-2 w-full ">
//     {[
//       "What's the best 10-day itinerary for a first-timer in Japan, covering Tokyo and Kyoto?",
//       "Plan a 5-day, family-friendly trip to London, including activities for kids and a budget under $4000.",
//       "I need a 4-day foodie guide to Rome, focusing on the best local restaurants and food tours."
//     ].map((opt, i) => (
//       <div
//         key={i}
//         className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
//       >
//         <button
//           onClick={() => {
//             setMessages((prev) => [...prev, { sender: "user", text: opt }]);
//             setShowMenuBubbles(false); // hide after click

//             setTimeout(() => {
//               setMessages((prev) => [
//                 ...prev,
//                 { sender: "bot", type: "tripCard", destination: opt }
//               ]);
//             }, 400);
//           }}
//           className="px-3 py-2 bg-dark2 text-white rounded-xl border border-dark cursor-pointer text-left max-w-[90%]"
//         >
//           {opt}
//         </button>
//       </div>
//     ))}
//   </div>
// </div>


//           {/* Input Box */}
//           <div className="relative flex items-center bg-white rounded-full px-4 py-4">

//             <FiPlus
//               className="text-gray-400 text-lg mr-3 cursor-pointer"
//               onClick={() => setShowMenu(!showMenu)}
//             />

//             {showMenu && (
//               <div className="absolute bottom-14 left-8 bg-dark2 text-white rounded-xl shadow-lg p-3 w-40 space-y-2 z-50">
//                 <button className="w-full text-left px-2 py-1 hover:bg-dark rounded-md text-sm">
//                   Add Photos
//                 </button>
//                 <button className="w-full text-left px-2 py-1 hover:bg-dark rounded-md text-sm">
//                   Add Files
//                 </button>
//               </div>
//             )}

//             <input
//               type="text"
//               value={input}
//               onChange={(e) => {
//                 setInput(e.target.value);
//                 if (e.target.value !== "") setShowMenuBubbles(false);
//               }}
//               onKeyDown={handleSend}
//               placeholder="Tell me your destination, travel dates, group size, and the vibe you want (adventurous,luxury,etc.)"
//               className="bg-transparent outline-none text-sm text-gray-500 flex-grow placeholder:text-gray-500"
//             />

//             <FaMicrophone className="text-gray-400 text-lg ml-3 cursor-pointer" />
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useRef, useEffect } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import { CiStopSign1 } from "react-icons/ci";
import TripCard from "./TripCard";
import Icons from "../../utils/images";

export default function TripPlanner() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "I will build your perfect Itinerary" },
  ]);

  const [input, setInput] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuBubbles, setShowMenuBubbles] = useState(true);

  const [sidebarOpen, setSidebarOpen] = useState(false); // ⭐ NEW

  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top: chatBoxRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSend = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      const userMessage = { sender: "user", text: input };
      setMessages((prev) => [...prev, userMessage]);
      const userInput = input;
      setInput("");

      setShowMenuBubbles(false);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", type: "tripCard", destination: userInput },
        ]);
      }, 600);
    }
  };

  return (
    <div className="flex h-screen bg-[#1e1e1e] text-white">

      {/*  MOBILE TOGGLE BUTTON */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-[90px] left-3 z-[10] bg-dark2 text-white px-3 py-2 rounded-lg shadow-lg"
      >
        {sidebarOpen ? <CiStopSign1 /> : <CiStopSign1 />}
      </button>

      {/*  SIDEBAR WITH SLIDE ANIMATION */}
      <div
        className={`
          fixed md:static 
          bottom-0 
          w-64 min-h-[calc(100vh-125px)] md:min-h-[100vh] 
          bg-dark2 flex flex-col p-4 rounded-lg
          transform transition-transform duration-300
          z-20
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className=" mb-8 relative">
          <h1 className="mt-4 font-bold ">Your Journey Starts Here</h1>
        </div>

        <button className="flex items-center gap-2 bg-transparent rounded-md py-2 mb-4 cursor-pointer z-30">
          <img src={Icons.newChat} alt="chatIcon"  />
          <h1 className="text-base  ">New Chat</h1>
        </button>

        <div className="relative mb-4">
          <FiSearch className="absolute left-0 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search chats..."
            className="bg-transparent w-full rounded-md pl-9 pr-3 py-2 text-sm text-gray-300 outline-none"
          />
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-700">
          <p className="text-white/50 mb-1">Chats</p>
        </div>
      </div>

      {/* MAIN CHAT */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="bg-transparent rounded-2xl p-4 w-full max-w-[800px] min-h-[calc(100vh-80px)] flex flex-col shadow-md pt-24">

          {/* Chat Messages */}
          <div
            ref={chatBoxRef}
            className="flex-1 overflow-y-auto mb-3 space-y-3 scrollbar-hide"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="max-w-[80%]">
                  {msg.type === "tripCard" ? (
                    <TripCard destination={msg.destination} />
                  ) : (
                    <div
                      className={`p-3 rounded-2xl text-sm break-words ${
                        msg.sender === "user"
                          ? "bg-dark text-white rounded-br-none"
                          : "bg-dark2 text-gray-100 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bubble Options */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              showMenuBubbles ? "h-auto mb-6" : "h-0 mb-0"
            }`}
          >
            <div className="flex flex-col gap-2 w-full ">
              {[
                "What's the best 10-day itinerary for a first-timer in Japan, covering Tokyo and Kyoto?",
                "Plan a 5-day, family-friendly trip to London, including activities for kids and a budget under $4000.",
                "I need a 4-day foodie guide to Rome, focusing on the best local restaurants and food tours.",
              ].map((opt, i) => (
                <div
                  key={i}
                  className={`flex ${
                    i % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <button
                    onClick={() => {
                      setMessages((prev) => [
                        ...prev,
                        { sender: "user", text: opt },
                      ]);
                      setShowMenuBubbles(false);

                      setTimeout(() => {
                        setMessages((prev) => [
                          ...prev,
                          { sender: "bot", type: "tripCard", destination: opt },
                        ]);
                      }, 400);
                    }}
                    className="px-3 py-2 bg-dark2 text-white rounded-xl border border-dark cursor-pointer text-left max-w-[90%]"
                  >
                    {opt}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Placeholder */}
          {input.length === 0 && (
            <p className="text-center text-gray-400 mb-2 text-sm lg:hidden">
              Tell me your destination, travel dates, group size, and the vibe you want (adventurous,luxury,etc.)
            </p>
          )}

          {/* Input Bar */}
          <div className="relative flex items-center bg-white rounded-full px-4 py-4">
            <FiPlus
              className="text-gray-400 text-lg mr-3 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />

            {showMenu && (
              <div className="absolute bottom-14 left-8 bg-dark2 text-white rounded-xl shadow-lg p-3 w-40 space-y-2 z-50">
                <button className="w-full text-left px-2 py-1 hover:bg-dark rounded-md text-sm">
                  Add Photos
                </button>
                <button className="w-full text-left px-2 py-1 hover:bg-dark rounded-md text-sm">
                  Add Files
                </button>
              </div>
            )}

            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (e.target.value !== "") setShowMenuBubbles(false);
              }}
              onKeyDown={handleSend}
              placeholder="Tell me your destination, travel dates, group size, and the vibe you want (adventurous,luxury,etc.)"
              className="bg-transparent outline-none text-sm text-gray-500 flex-grow placeholder:text-gray-500 max-[1024px]:placeholder:text-transparent"
            />

            <FaMicrophone className="text-gray-400 text-lg ml-3 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}