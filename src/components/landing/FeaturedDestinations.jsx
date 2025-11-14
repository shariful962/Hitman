import React from "react";
import Icons from "../../utils/images";


const destinations = [
    { img: Icons.feature1, title: "Paris", tag: "Generate Itinerary" },
    { img: Icons.feature2, title: "Bali", tag: "Generate Itinerary" },
    { img: Icons.feature3, title: "Switzerland", tag: "Generate Itinerary" },
    { img: Icons.feature4, title: "Japan", tag: "Generate Itinerary" },
];

const FeaturedDestinations = () => {
    return (
        <div className="bg-dark">
            <div className="containerBox">
            <section className="py-20">
                <h2 className="text-3xl md:text-[50px] text-center font-bold mb-10 text-white">Featured Destinations</h2>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
                    {destinations.map((item, i) => (
                        <div key={i} className="bg-[#1d1d1d] overflow-hidden rounded-2xl shadow-md border border-Primary/30 p-4">
                            <img src={item.img} alt={item.title} className="w-full h-48 rounded-xl object-cover" />
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                <button className="w-full bg-Secondary text-sm text-white rounded-2xl px-2 py-2 cursor-pointer">{item.tag}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
        </div>
    );
};

export default FeaturedDestinations;
