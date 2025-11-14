import React from "react";
import { FiCheck } from "react-icons/fi";

const plans = [
    {
        name: "Basic Package",
        price: "Free",
        features: [
            "One free Hit List",
            "Basic city recommendations",
            "Standard Support",
            "3 - day itinerary limit",
        ],
        button: "Try for Free",
    },
    {
        name: "Insider Mode",
        price: "$4.99/mo",
        features: [
            "Unlimited Hit Lists",
            "Office mode access",
            "AI auto- builder",
            "Jack’s Vault storage",
            "Trip Collaboration",
            "Priority support",
        ],
        button: "Go Premium",
        highlight: true,
    },
    {
        name: "Hitman Mode",
        price: "$9.99/mo",
        features: [
            "Everything in Premium",
            "Ultra local itineraries",
            "Real - time alerts",
            "PDF export",
            "VIP support",
            "Early access features",
        ],
        button: "Get Started",
    },
];

const PricingPlans = () => {
    return (
        <div className="bg-dark">
            <div className="containerBox">
                <section className="py-20  text-center">
                    <h2 className="text-3xl md:text-[42px] font-bold mb-10 text-white pt-8">Subscription Plans</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                        {plans.map((plan, i) => (
                            <div
                                key={i}
                                className='bg-Blue rounded-xl px-6 py-8  shadow-lg border border-white/10 flex flex-col relative'
                            >
                                {plan.highlight && (
                                    <div className="bg-Secondary text-white px-3 py-1 rounded-full text-xs absolute top-1.5 right-2">
                                        Most Popular
                                    </div>
                                )}


                                <h3 className="text-xl md:text-[28px] text-white font-semibold mb-1">{plan.name}</h3>
                                <p className="text-white text-lg md:text-[28px] font-bold mb-4">{plan.price}</p>
                                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex gap-x-3"> <FiCheck size={22} className="text-Primary" /> {f}</li>
                                    ))}
                                </ul>
                                <button className={`cursor-pointer px-6 py-2 rounded-2xl transition mt-auto ${plan.highlight ? 'border border-Secondary text-Secondary hover:bg-Secondary hover:text-white' : 'bg-Secondary text-white'}`}>
                                    Get Started
                                </button>

                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PricingPlans;
