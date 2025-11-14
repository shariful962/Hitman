// import React, { useRef } from "react";
// import { FiArrowLeft } from "react-icons/fi";
// import authBg from "../../assets/authBg.jpg";
// import { useNavigate } from "react-router";

// const OtpVerify = () => {
//   const navigate = useNavigate()
//   const inputs = useRef([]);

//   const handleChange = (e, index) => {
//     const value = e.target.value;
//     if (!/^[0-9]?$/.test(value)) return;

//     if (value && index < 5) {
//       inputs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !e.target.value && index > 0) {
//       inputs.current[index - 1].focus();
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const otp = inputs.current.map((input) => input.value).join("");
//     console.log("OTP Entered:", otp);
//     // API / Firebase OTP Verification logic here
//   };

//   return (
//     <div
//       className="h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
//       style={{ backgroundImage: `url(${authBg})` }}
//     >
//       <div className="authContainer">

        
//         {/* Back + Title */}
//         <div className="flex justify-center">
//           <div className="flex gap-3">
//             <button onClick={() => navigate('/forgotpassword')} className="text-white cursor-pointer">
//               <FiArrowLeft size={22} />
//             </button>
//             <h2 className="text-[28px] md:text-[2rem]  font-medium md:text-center">Verify Email</h2>
//           </div>
//         </div>

//         <p className="text-center md:text-lg mt-1 mb-6">
//           Enter the 6-digit verification code we sent to your email.
//         </p>

//         <form onSubmit={handleSubmit}>

//           {/* OTP Boxes */}
//           <div className="flex justify-between gap-2 mb-6">
//             {Array(6)
//               .fill("")
//               .map((_, index) => (
//                 <input
//                   key={index}
//                   maxLength="1"
//                   ref={(el) => (inputs.current[index] = el)}
//                   onChange={(e) => handleChange(e, index)}
//                   onKeyDown={(e) => handleKeyDown(e, index)}
//                   className="w-12 h-12 text-center  font-medium bg-white/20 backdrop-blur-sm border border-white/30 rounded-md outline-none"
//                 />
//               ))}
//           </div>

//           <button
//             type="submit"
//             className="authButton"
//           >
//             Verify & Continue
//           </button>

//         </form>

//       </div>
//     </div>
//   );
// };

// export default OtpVerify;

import React, { useRef } from "react";
import { FiArrowLeft } from "react-icons/fi";
import authBg from "../../assets/authBg.jpg";
import { useNavigate } from "react-router";

const OtpVerify = () => {
  const navigate = useNavigate();
  const inputs = useRef([]);

  const focusInput = (index) => {
    const el = inputs.current[index];
    if (el) el.focus();
  };

  const handleChange = (e, index) => {
    // keep only last digit if user pasted or typed quickly
    const raw = e.target.value;
    const digit = raw.replace(/\D/g, ""); // remove non-digits
    if (!digit) {
      e.target.value = "";
      return;
    }

    // allow only one digit per box
    e.target.value = digit.slice(-1);

    // move to next
    if (index < inputs.current.length - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (e, index) => {
    const key = e.key;

    if (key === "Backspace") {
      // if current input has value, clear it
      if (e.target.value) {
        e.target.value = "";
        // prevent default so browser doesn't navigate back on empty input sometimes
        e.preventDefault();
        return;
      }
      // otherwise move to previous and clear it
      if (index > 0) {
        const prev = inputs.current[index - 1];
        if (prev) {
          prev.value = "";
          focusInput(index - 1);
        }
        e.preventDefault();
      }
    }

    if (key === "ArrowLeft") {
      if (index > 0) {
        focusInput(index - 1);
        e.preventDefault();
      }
    }

    if (key === "ArrowRight") {
      if (index < inputs.current.length - 1) {
        focusInput(index + 1);
        e.preventDefault();
      }
    }

    // prevent non-digit typed via keydown (optional)
    if (
      key.length === 1 && // printable
      !/^[0-9]$/.test(key) &&
      key !== "ArrowLeft" &&
      key !== "ArrowRight"
    ) {
      e.preventDefault();
    }
  };

  const handlePaste = (e, startIndex) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData("text");
    const digits = paste.replace(/\D/g, "").split("");

    if (!digits.length) return;

    let idx = startIndex;
    for (let i = 0; i < digits.length && idx < inputs.current.length; i += 1, idx += 1) {
      const el = inputs.current[idx];
      if (el) el.value = digits[i];
    }

    // focus next empty or last filled
    const firstEmpty = inputs.current.findIndex((el, i) => !el.value && i >= startIndex);
    if (firstEmpty !== -1) focusInput(firstEmpty);
    else focusInput(Math.min(inputs.current.length - 1, startIndex + digits.length - 1));
  };

  const handleFocus = (e) => {
    // select the value on focus so user can replace easily
    e.target.select();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = inputs.current.map((input) => input?.value || "").join("");
    console.log("OTP Entered:", otp);
    // TODO: API / Firebase OTP Verification logic here
    navigate('/resetpassword')
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
            <button
              onClick={() => navigate("/forgotpassword")}
              className="text-white cursor-pointer"
              aria-label="Back"
            >
              <FiArrowLeft size={22} />
            </button>
            <h2 className="text-[28px] md:text-[2rem]  font-medium md:text-center">Verify Email</h2>
          </div>
        </div>

        <p className="text-center md:text-lg mt-1 mb-6">
          Enter the 6-digit verification code we sent to your email.
        </p>

        <form onSubmit={handleSubmit}>
          {/* OTP Boxes */}
          <div className="flex justify-between gap-2 mb-6">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <input
                  key={index}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  ref={(el) => (inputs.current[index] = el)}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={(e) => handlePaste(e, index)}
                  onFocus={handleFocus}
                  className="w-12 h-12 text-center font-medium bg-white/20 backdrop-blur-sm border border-white/30 rounded-md outline-none"
                  aria-label={`Digit ${index + 1}`}
                />
              ))}
          </div>

          <button type="submit" className="authButton">
            Verify & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerify;

