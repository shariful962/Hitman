import React from "react";
import Icons from "../../utils/images";


const AiAssistant = () => {
    return (
        <div className="bg-dark">
            <div className="containerBox">
                <section className="py-20">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                        <img
                            src={Icons.travelAssist}
                            alt="AI Travel Assistant"
                            className="rounded-xl w-full md:w-1/2 object-cover h-[560px]"
                        />
                        <div className="text-left w-full md:w-1/2">
                            <h2 className="text-3xl md:text-[50px] font-bold mb-4 text-white">Your personal AI travel assistant</h2>
                            <ul className="text-gray-300 space-y-3">
                                <li className="flex items-center gap-x-2"> <img src={Icons.travel1} alt="" /> Smart, personalized planning</li>
                                <li className="flex items-center gap-x-2"><img src={Icons.travel2} alt="" /> One-click booking integration</li>
                                <li className="flex items-center gap-x-2"><img src={Icons.travel3} alt="" /> Save & reuse your itineraries</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AiAssistant;
