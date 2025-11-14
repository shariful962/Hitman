import React, { useState } from "react";
import { FiArrowLeft, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import authBg from "../../assets/authBg.jpg";
import { useNavigate } from "react-router";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("New Password:", password);
    //  password reset API / Firebase updatePassword add
    navigate('/signin')
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
            <button onClick={() => navigate('/otp')} className="text-white cursor-pointer">
              <FiArrowLeft size={22} />
            </button>
            <h2 className="text-[28px] md:text-[2rem]  font-medium md:text-center">Reset Password</h2>
          </div>
        </div>

        <p className="text-center md:text-lg mt-1 mb-6">
          Enter your new password below to reset your account password.
        </p>

        <form onSubmit={handleReset}>

          {/* New Password */}
          <label className="text-sm">New Password</label>
          <div className="form-div">
            <FiLock />
            <input
              type={showPass ? "text" : "password"}
              placeholder="********"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              placeholder="********"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            Reset Password
          </button>

        </form>

      </div>
    </div>
  );
};

export default ResetPassword;
