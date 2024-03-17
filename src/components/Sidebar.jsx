import React from "react";
import { AiFillLike } from "react-icons/ai";
import { LuThumbsUp } from "react-icons/lu";
import {
  MdHistory,
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdSubscriptions,
} from "react-icons/md";

export const Sidebar = () => {
  const sideLinks = [
    {
      icon: <MdHomeFilled size={30} />,
      text: "Home",
    },
    {
      icon: <MdOutlineSlowMotionVideo size={30} />,
      text: "Shorts",
    },
    {
      icon: <MdSubscriptions size={30} />,
      text: "Subscriptions",
    },
    {
      icon: <AiFillLike size={30} />,
      text: "Liked",
    },
  ];

  const otherLinks = [
    {
      icon: <MdOutlineVideoLibrary size={25} />,
      text: "Library",
    },
    {
      icon: <MdHistory size={35} />,
      text: "History",
    },
    {
      icon: <MdOutlineWatchLater size={35} />,
      text: "Watchlater",
    },
    {
      icon: <LuThumbsUp size={35} />,
      text: "Likes",
    },
  ];
  return (
    <div className="ml-4 mr-4 h-screen bg-[#212121] w-1/5 border-yellow-100">
      <ul className="">
        {sideLinks.map(({ icon, text }, index) => (
          <li
            className={`flex items-center px-4 p-2 text-white cursor-pointer hover:bg-gray-600 ${
              text.toLowerCase() === "home" ? "bg-slate-600" : ""
            } rounded-full`}
            key={index}
          >
            {icon} <p className="px-4 text-sm tracking-wider">{text}</p>
          </li>
        ))}
      </ul>
      <hr />
      <ul className="mt-4">
        {otherLinks.map(({ icon, text }, id) => (
          <li
            key={id}
            className={`flex items-center px-4 p-2 text-white cursor-pointer hover:bg-gray-600 ${
              text.toLowerCase() === "home" ? "bg-slate-600" : ""
            } rounded-full`}
          >
            {icon}{" "}
            <p className="px-4 text-sm tracking-wider text-center">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
