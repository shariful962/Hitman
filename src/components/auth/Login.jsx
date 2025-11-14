



import React, { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import authBg from "../../assets/authBg.jpg";
import { useNavigate } from "react-router";
import Icons from "../../utils/images";

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    
    //  API call / authentication 
    navigate('/')
   
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
     style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="authContainer">

        <h2 className="text-3xl md:text-[2.5rem]  font-medium text-center">Welcome Back</h2>
        <p className="text-center md:text-lg mt-1 mb-6">Login to your account</p>

        {/* FORM START */}
        <form onSubmit={handleSubmit}>

          {/* Email Input */}
          <label className="text-sm">Enter your E-mail or Number</label>
          <div className="form-div">
            <FiMail />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail address or phone number"
              className="form-control"
            />
          </div>

          {/* Password Input */}
          <label className="text-sm mt-4 block">Password</label>
          <div className="form-div">
            <FiLock />
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="form-control"
            />
            {showPass ? (
              <FiEyeOff onClick={() => setShowPass(false)} className="cursor-pointer" />
            ) : (
              <FiEye onClick={() => setShowPass(true)} className="cursor-pointer" />
            )}
          </div>

          <div className="flex justify-between items-center text-xs mt-3">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="checkbox" /> Remember me
            </label>
            <button type="button" onClick={()=>navigate('/forgotpassword')} className="hover:underline cursor-pointer">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="authButton mt-6"
          >
            Login
          </button>

        </form>
        {/* FORM END */}

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

export default Login;


