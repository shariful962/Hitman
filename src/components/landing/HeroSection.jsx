import React from "react";
import Banner from "../../assets/Banner.png";
import Icons from "../../utils/images";

const HeroSection = () => {
  return (
    <div>
      <div className="">
      <section
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center  px-4">
            <h1 className="text-4xl text-white md:text-6xl font-bold mb-4">
              Every Journey’s a Mission
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Turn your travel ideas into your next hit adventure
            </p>

            {/* Input and Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:relative lg:w-[586px]">
              <input
                type="text"
                placeholder="Make your travel experience better"
                className="w-full sm:w-96 px-5 py-3 bg-white text-gray-900 rounded-[16px] focus:outline-none"
              />
              <button className="lg:absolute lg:top-0 lg:right-0 px-6 py-3 bg-red-500 text-white rounded-[16px] hover:bg-red-600 transition">
                Generate Plan
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 text-sm text-gray-300">
              <div className="flex items-center gap-x-2"> <img src={Icons.loveIcon} alt="" /> Loved by 10,000+ explorers</div>
              <div className="flex items-center gap-x-2"><img src={Icons.AiIcon} alt="" /> AI-powered itineraries</div>
              <div className="flex items-center gap-x-2"><img src={Icons.userIcon} alt="" /> Save & share trips</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default HeroSection;

