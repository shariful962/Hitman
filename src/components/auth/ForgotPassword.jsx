import React, { useState } from "react";
import { FiArrowLeft, FiMail } from "react-icons/fi";
import authBg from "../../assets/authBg.jpg";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSendOtp = (e) => {
    e.preventDefault();
    console.log("Reset OTP Sent To:", email);
    // ekhane API / Firebase password reset function call korba
    navigate('/otp');
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="authContainer">

        {/* Back + Title */}
        <div className="flex justify-center">
          <div className="flex gap-3">
            <button onClick={() => navigate('/signin')} className="text-white cursor-pointer">
              <FiArrowLeft size={22} />
            </button>
            <h2 className="text-[28px] md:text-[2rem]  font-medium md:text-center">Forgot Password</h2>
          </div>
        </div>

        <p className="text-center md:text-lg mt-1 mb-6">
          Please enter your email address to reset<br />your password.
        </p>

        <form onSubmit={handleSendOtp}>
          {/* Email Input */}
          <label className="text-sm">Email Address</label>
          <div className="form-div">
            <FiMail />
            <input
              type="email"
              placeholder="email@example.com"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="authButton mt-6"
          >
            Send OTP
          </button>
        </form>

      </div>
    </div>
  );
};

export default ForgotPassword;
