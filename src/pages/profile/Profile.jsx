import React from "react";
import {
  User,
  Bookmark,
  Shield,
  FileText,
  HelpCircle,
  LogOut,
  Trash2,
} from "lucide-react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router";
import Icons from "../../utils/images";


const Profile = () => {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center py-10 text-white pt-20">
      {/* profile name and email with image  */}
      <div className="flex flex-col items-center mb-8">
        <img
          src={Icons.profile1}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-700 mb-4"
        />
        <h2 className="text-xl font-semibold">Tamim Sarker</h2>
        <p className="text-gray-400 text-sm">Tamim257@gmail.com</p>
      </div>
      <div className="w-full max-w-[600px] bg-black/40 rounded-2xl border border-gray-700 p-6">
        <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
          Account Information
        </h3>
        <div className="mt-4 space-y-2.5">
            <div>
                <Link to="/profile/edit">
                <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-x-3">
                    <User /> <span>Edit Profile</span>
                </div>
                <div>
                    <FaChevronRight />
                </div>
            </div>
            </Link>
            </div>
           <div>
             <Link to="/profile/saved">
            <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-x-3">
                    <Bookmark /> <span>Saved</span>
                </div>
                <div>
                    <FaChevronRight />
                </div>
            </div>
            </Link>
           </div>
        </div>
      </div>
       <div className="w-full max-w-[600px] bg-black/40 rounded-2xl border border-gray-700 p-6 mt-5">
        <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
          Policy Center
        </h3>
        <div className="mt-4 space-y-2.5">
            <div>
                <Link to="/profile/privacy-policy">
                <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-x-3">
                    <Shield /> <span>Privacy Policy</span>
                </div>
                <div>
                    <FaChevronRight />
                </div>
            </div>
            </Link>
            </div>
           <div>
             <Link to="/profile/terms-condition">
            <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-x-3">
                    <FileText /> <span>Terms & Condition</span>
                </div>
                <div>
                    <FaChevronRight />
                </div>
            </div>
            </Link>
           </div>
        </div>
      </div>
       <div className="w-full max-w-[600px] bg-black/40 rounded-2xl border border-gray-700 p-6 mt-5">
        <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
          Settings
        </h3>
        <div className="mt-4 space-y-2.5">
            <div>
                <Link to="/profile/help-support">
                <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-x-3">
                    <HelpCircle /> <span>Help & Support</span>
                </div>
                <div>
                    <FaChevronRight />
                </div>
            </div>
            </Link>
            </div>
           <div>
             <Link to="/profile/saved">
            <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-x-3">
                    <LogOut /> <span>Logout</span>
                </div>
                <div>
                    <FaChevronRight />
                </div>
            </div>
            </Link>
           </div>
           <div>
             <Link to="/profile/saved">
            <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-x-3 text-red-500">
                    <Trash2 /> <span>Delete Account</span>
                </div>
                <div>
                    <FaChevronRight />
                </div>
            </div>
            </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
