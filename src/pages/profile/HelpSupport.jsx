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
import { FaDribbble } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router";
import Icons from "../../utils/images";


const HelpSupport = () => {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center py-10 text-white pt-20">
      
      <div className="w-full max-w-[600px] bg-black/40 rounded-2xl border border-gray-700 p-6">
        <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
          Help & Support
        </h3>
        <div className="mt-4 space-y-3">
            <div className="border p-2 rounded-[10px]">
                <Link to="/profile/edit/faq">
                <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-x-3">
                     <span>FAQ</span>
                </div>
                <div>
                    <FaChevronRight />
                </div>
            </div>
            </Link>
            </div>
           <div className="border p-2 rounded-[10px]">
                <Link to="/profile/edit">
                <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-x-3">
                     <span>Contract Us</span>
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
          Contract Us
        </h3>
        <div className="mt-4 space-y-3">
            <div className="border p-2 rounded-[10px]">
                <Link to="/profile/edit">
                <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-x-3">
                   <FaDribbble size={22} />  <span>Website</span>
                </div>
                <div>
                    <FaChevronRight />
                </div>
            </div>
            </Link>
            </div>
           <div className="border p-2 rounded-[10px]">
                <Link to="/profile/edit">
                <div className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-x-3">
                   <MdOutlineEmail size={22} />  <span>Email</span>
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

export default HelpSupport;
