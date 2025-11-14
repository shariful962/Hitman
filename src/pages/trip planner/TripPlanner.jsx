
import React, { useState, useRef, useEffect } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import TripCard from "./TripCard"

export default function TripPlanner() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey there! Tell me where you’d like to go " },
  ]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);

  // Auto-scroll chat box only
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

      // Simulate bot reply
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
      <div className="absolute bottom-0 w-64 h-[80vh] bg-[#2a2a2a] border-r border-gray-700 flex flex-col p-4 pt-32 rounded-lg">
        <button className="flex items-center justify-center bg-[#1e1e1e] rounded-md py-2 mb-4 cursor-pointer">
          <FiPlus className="mr-2" /> New Chat
        </button>

        <div className="relative mb-4">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search chats..."
            className="bg-[#1e1e1e] w-full rounded-md pl-9 pr-3 py-2 text-sm text-gray-300 outline-none placeholder:text-gray-500"
          />
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-700">
          <p className="text-xs text-gray-400 mb-1">Recent Chats</p>
          {["Trip to Japan", "Europe Plan", "Weekend Getaway"].map(
            (title, i) => (
              <div
                key={i}
                className="bg-[#1e1e1e] hover:bg-[#3a3a3a] transition rounded-md px-3 py-2 text-sm cursor-pointer"
              >
                {title}
              </div>
            )
          )}
        </div>
      </div>

      {/* Main Chat Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <p className="text-sm mb-6 text-gray-300 text-center pt-28 ">
          Just tell us where you want to go and we will create your perfect trip.
        </p>

        <div className="bg-transparent rounded-2xl p-4 w-full max-w-[700px] min-h-[calc(85vh-112px)] flex flex-col overflow-y-auto shadow-md">
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
          <div className="flex items-center bg-white rounded-full px-4 py-4">
            <FiPlus className="text-gray-400 text-lg mr-3 cursor-pointer" />
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
