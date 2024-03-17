import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaVideo } from "react-icons/fa";
import { IoIosNotifications, IoMdMenu } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

export const Navbar = () => {
  return (
    <div className="h-[70px] flex items-center  justify-between border-2 border-red-800 ml-4 mr-4 text-[#FFFFFF]">
      <div className="flex items-center justify-center ml-3">
        <IoMdMenu size={30} />
        <img
          src="../image/YouTube.png"
          alt=""
          className="h-[35px] object-contain ml-5"
        />
      </div>
      <div>
        <div className="flex items-center  bg-transparent p-4 ">
          <input
            className="border-[1px] p-2 border-gray-500 bg-zinc-900 outline-none w-80 pr-5 rounded-lg focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
            {" "}
            <CiSearch size={25} />
          </button>
        </div>
      </div>
      <div className="flex gap-6 items-center mr-3 ">
        <FaVideo size={25} />
        <div>
          <IoIosNotifications size={25} />
          <span className="absolute top-5 bg-[#CD2827] pl-1 pr-1 rounded-full text-[14px] text-[#FFFFFF]">
            9+
          </span>
        </div>

        <RxAvatar size={25} />
      </div>
    </div>
  );
};
