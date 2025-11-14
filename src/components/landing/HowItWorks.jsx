import React from "react";
import Icons from "../../utils/images";

const steps = [
  {
    img: Icons.how1,
    title: "Tell AI your destination and vibe",
  },
  {
    img: Icons.how2,
    title: "Get instant trip plan",
  },
  {
    img: Icons.how3,
    title: "Save, share or edit",
  },
];

const HowItWorks = () => {
  return (
    <div className="">
      <div className="containerBox">
        <section className="py-20 text-center">
          <h2 className="text-3xl md:text-[50px] font-bold text-white mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
            {steps.map((item, i) => (
              <div key={i} className="bg-[#222] rounded-xl overflow-hidden shadow-lg">
                <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
                <p className="py-4 text-gray-300">{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
