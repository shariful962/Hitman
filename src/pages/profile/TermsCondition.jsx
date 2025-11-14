import React from 'react'
import { Lock } from "lucide-react";

const TermsCondition = () => {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <div className="bg-dark2 text-white border border-gray-700 rounded-xl p-6 w-full max-w-[600px] shadow-lg">
        {/* Header */}
        <div className="flex items-center mb-4">
          {/* <Lock size={18} className="text-gray-400 mr-2" /> */}
          <h2 className="text-lg font-semibold">Terms & Condition</h2>
        </div>

        {/* Body */}
        <div className="text-gray-300 text-base leading-relaxed space-y-2">
          <p> <span className='text-Primary'>By using</span> our platform, you agree to our travel guidelines and policies.</p>
          <p>
            We ensure a safe <span className='text-Primary'>and</span> secure experience, but users are responsible for their own bookings and activities.  

          </p>
          
          <p>
            <span className='text-Primary'>Read</span>{" "} details {" "}{" "}
            <a
              href="#"
              className="text-red-500 font-semibold hover:underline inline-block"
            >
              [View Full Terms]
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsCondition
