import React, { useState } from "react";
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff } from "react-icons/fi";
import authBg from "../../assets/authBg.jpg";
import { useNavigate } from "react-router";
import Icons from "../../utils/images";

const Signup = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);

    // API or Firebase 
    navigate('/otp')
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
       style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="authContainer">

        <h2 className="text-3xl md:text-[2.5rem]  font-medium text-center">Create Account</h2>
        <p className="text-center md:text-lg mt-1 mb-6">Sign up to get started</p>

        <form onSubmit={handleSignup}>
          
          {/* Full Name */}
          <label className="text-sm">Full Name</label>
          <div className="form-div">
            <FiUser />
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="form-control"
              required
            />
          </div>

          {/* Email */}
          <label className="text-sm mt-4 block">Email</label>
          <div className="form-div">
            <FiMail />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="form-control"
              required
            />
          </div>

          {/* Password */}
          <label className="text-sm mt-4 block">Password</label>
          <div className="form-div">
            <FiLock />
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="form-control"
              required
            />
            {showPass ? (
              <FiEyeOff className="cursor-pointer" onClick={() => setShowPass(false)} />
            ) : (
              <FiEye className="cursor-pointer" onClick={() => setShowPass(true)} />
            )}
          </div>

          {/* Confirm Password */}
          <label className="text-sm mt-4 block">Confirm Password</label>
          <div className="form-div">
            <FiLock />
            <input
              type={showConfirmPass ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              className="form-control"
              required
            />
            {showConfirmPass ? (
              <FiEyeOff className="cursor-pointer" onClick={() => setShowConfirmPass(false)} />
            ) : (
              <FiEye className="cursor-pointer" onClick={() => setShowConfirmPass(true)} />
            )}
          </div>

          <button
            type="submit"
            className="authButton mt-6"
          >
            Sign Up
          </button>
        </form>

        {/* Social login */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-white/30"></div>
          <span className="px-4 text-sm">Or Continue With</span>
          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-6">
          <button className="bg-white h-10 w-10 flexCenter p-2 rounded-full"> <img src={Icons.google} alt="google icon" /> </button>
          <button className="bg-white h-10 w-10 flexCenter p-2 rounded-full"> <img src={Icons.apple} alt="apple icon" /> </button>
        </div>

      </div>
    </div>
  );
};

export default Signup;
