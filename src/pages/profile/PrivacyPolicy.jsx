import React from 'react'
import { Lock } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center">
      <div className="bg-black text-white border border-gray-700 rounded-xl p-6 w-full max-w-[600px] shadow-lg">
        {/* Header */}
        <div className="flex items-center mb-4">
          <Lock size={18} className="text-gray-400 mr-2" />
          <h2 className="text-lg font-semibold">Privacy Policy</h2>
        </div>

        {/* Body */}
        <div className="text-gray-300 text-sm leading-relaxed space-y-2">
          <p>We collect minimal data to personalize your travel experience.</p>
          <p>
            Your information stays private and secure —{" "}
            <span className="text-red-500 font-medium">no</span> third-party sales.
          </p>
          <p>
            You can{" "}
            <span className="text-blue-400 cursor-pointer hover:underline">view</span>
            ,{" "}
            <span className="text-blue-400 cursor-pointer hover:underline">update</span>
            , or{" "}
            <span className="text-blue-400 cursor-pointer hover:underline">delete</span>{" "}
            your data anytime.
          </p>
          <p>
            Learn more →{" "}
            <a
              href="#"
              className="text-red-500 font-semibold hover:underline"
            >
              [Read Full Policy]
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
