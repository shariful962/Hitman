import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { LuArrowLeft } from "react-icons/lu";
import { IoCameraOutline } from "react-icons/io5";
import Icons from "../../utils/images";
import { useNavigate } from "react-router";

const  EditProfile = () =>{
  const navigate = useNavigate()
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(Icons.profile1);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center pt-20">
      <div className="bg-black text-white p-8 rounded-xl shadow-lg w-full max-w-[600px] border border-gray-700">
        <div className="flex items-center gap-x-2.5 mb-6">
          <LuArrowLeft size={24} className="cursor-pointer" onClick={()=>navigate('/profile')} />
          <h2 className="text-xl font-semibold  text-gray-200">Edit Profile</h2>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-6 relative">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-600 ">
              <img
                src={
                  profileImage ||
                  "https://via.placeholder.com/150x150.png?text=Profile"
                }
                alt="Profile"
                className="object-cover w-full h-full"
              />
             
                <div className="bg-gray-400 z-200 h-8 w-8 rounded-full flex items-center justify-center absolute bottom-1 left-52">
                  <IoCameraOutline size={20}/>
                </div>
             
            </div>
          </label>
        </div>

        {/* Form Start */}
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm mb-1 text-white">Full Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 bg-transparent border border-white rounded-md focus:outline-none"
              required
            />
          </div>

          {/* Old Password */}
          <div className="mb-4 relative">
            <label className="block text-sm mb-1 text-white">Old Password</label>
            <input
              type={showOldPassword ? "text" : "password"}
              placeholder="********"
              className="w-full p-2 bg-transparent border border-white rounded-md focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="absolute right-2 top-9 text-gray-400 cursor-pointer"
            >
              {showOldPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* New Password */}
          <div className="mb-6 relative">
            <label className="block text-sm mb-1 text-white">New Password</label>
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="********"
              className="w-full p-2 bg-transparent border border-white rounded-md focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-2 top-9 text-gray-400 cursor-pointer"
            >
              {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-Secondary text-white font-medium py-2 rounded-md cursor-pointer"
          >
            Save & Change
          </button>
        </form>
        {/* Form End */}
      </div>
    </div>
  );
}

export default EditProfile;