// import React from "react";

// const Footer = () => {
//     return (
//        <div className="bg-[#0c1a3a]">
//          <div className="containerBox">
//             <footer className="py-12 text-center text-white">
//                 <div className="max-w-4xl mx-auto px-4">
//                     <h3 className="text-lg mb-3 font-medium">
//                         No surprises. No weak links. Your travel mission is bulletproof.
//                     </h3>
//                     <p className="text-gray-300 text-sm mb-6">
//                         Subscribe for AI travel insights, trip ideas & mission updates.
//                     </p>
//                     <div className="flex justify-center gap-3">
//                         <input
//                             type="email"
//                             placeholder="Your email"
//                             className="px-4 py-2 rounded-full w-64 text-gray-900 outline-none"
//                         />
//                         <button className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-full transition">
//                             Subscribe
//                         </button>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//        </div>
//     );
// };

// export default Footer;


import React from "react";

const Footer = () => {
    return (
        <div className="bg-Blue">
            <div className="containerBox">
                <footer className="py-12 ">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="max-w-[481px]">
                            <h1 className="text-[24px] md:text-[28px] text-white font-medium">No surprises. No weak links. Your travel mission is bulletproof</h1>
                            <p className="text-white text-lg font-semiblod mt-6">Want exclusive deals, tips & travel info?</p>
                            <p className="text-sm text-white mt-2">Subscribe to our newsletter</p>
                        </div>
                        <form className="flex flex-wrap gap-4 max-w-4xl w-full mt-6">

                            {/* Name Input */}
                            <input
                                type="text"
                                placeholder="Name"
                                className="flex-1 bg-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            {/* Email Input */}
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 bg-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            {/* Button */}
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition font-semibold"
                            >
                                Subscribe
                            </button>

                        </form>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
