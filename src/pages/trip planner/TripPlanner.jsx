
// import React, { useState, useRef, useEffect } from "react";
// import { FiPlus, FiSearch } from "react-icons/fi";
// import { FaMicrophone } from "react-icons/fa";
// import TripCard from "./TripCard"
// import Icons from "../../utils/images";

// export default function TripPlanner() {
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hey there! Tell me where you’d like to go " },
//   ]);
//   const [input, setInput] = useState("");
//   const chatBoxRef = useRef(null);

//   // Auto-scroll chat box only
//   useEffect(() => {
//     if (chatBoxRef.current) {
//       chatBoxRef.current.scrollTo({
//         top: chatBoxRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   }, [messages]);

//   const handleSend = (e) => {
//     if (e.key === "Enter" && input.trim() !== "") {
//       const userMessage = { sender: "user", text: input };
//       setMessages((prev) => [...prev, userMessage]);
//       const userInput = input;
//       setInput("");

//       // Simulate bot reply
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
//       <div className="absolute bottom-0 w-64 h-[80vh] bg-dark2 flex flex-col p-4  rounded-lg">
//         <button className="flex items-center gap-2 bg-transparent rounded-md py-2 mb-4 cursor-pointer">
//           <img src={Icons.newChat} alt="chatIcon" />
//           <h1 className="text-base">New Chat</h1>
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

//       {/* Main Chat Section */}
//       <div className="flex-1 flex flex-col items-center justify-center p-4">
//         <p className="text-sm mb-6 text-gray-300 text-center pt-28 ">
//           Just tell us where you want to go and we will create your perfect trip.
//         </p>

//         <div className="bg-transparent rounded-2xl p-4 w-full max-w-[700px] min-h-[calc(85vh-112px)] flex flex-col overflow-y-auto shadow-md">
//           {/* Scrollable Chat Box */}
//           <div
//             ref={chatBoxRef}
//             className="flex-1 overflow-y-auto mb-3 space-y-3 scrollbar-hide"
//           >
//              {messages.map((msg, index) => (
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

//           {/* Input Box */}
//           <div className="flex items-center bg-white rounded-full px-4 py-4">
//             <FiPlus className="text-gray-400 text-lg mr-3 cursor-pointer" />
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleSend}
//               placeholder="Type your destination..."
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
import TripCard from "./TripCard";
import Icons from "../../utils/images";

export default function TripPlanner() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey there! Tell me where you’d like to go " },
  ]);

  const [input, setInput] = useState("");
  const [showMenu, setShowMenu] = useState(false); // <-- menu state

  const chatBoxRef = useRef(null);

  // Auto scroll chat
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top: chatBoxRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  // Handle Enter send
  const handleSend = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      const userMessage = { sender: "user", text: input };
      setMessages((prev) => [...prev, userMessage]);
      const userInput = input;
      setInput("");

      // Bot simulated reply
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

      {/* Sidebar */}
      <div className="absolute bottom-0 w-64 min-h-[82vh] bg-dark2 flex flex-col p-4 rounded-lg">
        <button className="flex items-center gap-2 bg-transparent rounded-md py-2 mb-4 cursor-pointer">
          <img src={Icons.newChat} alt="chatIcon" />
          <h1 className="text-base">New Chat</h1>
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

      {/* Main Chat Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <p className="text-sm mb-6 text-gray-300 text-center pt-28">
          Just tell us where you want to go and we will create your perfect trip.
        </p>

        <div className="bg-transparent rounded-2xl p-4 w-full max-w-[700px] min-h-[calc(85vh-112px)] flex flex-col shadow-md">

          {/* Scrollable Chat Box */}
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

          {/* Input Box */}
          <div className="relative flex items-center bg-white rounded-full px-4 py-4">

            {/* + Icon */}
            <FiPlus
              className="text-gray-400 text-lg mr-3 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />

            {/* Popover Menu */}
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

            {/* Input */}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleSend}
              placeholder="Type your destination..."
              className="bg-transparent outline-none text-sm text-gray-500 flex-grow placeholder:text-gray-500"
            />

            <FaMicrophone className="text-gray-400 text-lg ml-3 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

