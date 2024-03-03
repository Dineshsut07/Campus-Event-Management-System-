import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";


export default function Sample() {
  const [open, setOpen] = useState(true);

  const menu = [
    { name: "Events", link: "/events", icon: MdOutlineDashboard },
    { name: "Category", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/saved", icon: AiOutlineHeart },
    { name: "Profile", link: "/profile", icon: AiOutlineUser },
    { name: "Setting", link: "/setting", icon: RiSettings4Line },
  ];

  return (
    <aside className="flex gap-4 top-7 h-[100vh]">
      <nav
        className={`bg-[#0e0e0e] flex h-screen flex-col justify-around gap-6 border-b py-6 ${
          open ? "w-48" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="flex items-center justify-between gap-2 pt-2">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`${open ? "w-32" : "hidden"}`}
            alt=""
          />
          <button className={`p-1.5 rounded-lg duration-500`}>
            {open ? (
              <HiMenuAlt3
                size={26}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <HiOutlineMenu
                size={26}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            )}
          </button>
        </div>

        <div className="relative scroll-auto">
          <div className="flex flex-col justify-center gap-4">
            {menu?.map((item, i) => (
              <Link
                to={item.link}
                key={i}
                className={`group flex text-sm gap-4 p-2 ps-0 rounded-md hover:bg-[#1e1e1e] capitalize`}
              >
                <div>{React.createElement(item?.icon, { size: "20" })}</div>
                <h2
                  style={{ transitionDelay: `${i + 1}00ms` }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {item?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
                >
                  {item?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>

        <div className={`border-t flex items-center p-2 gap-2`}>
          <div
            className={`flex items-center text-sm gap-4 rounded-md hover:bg-[#1e1e1e] capitalize h-[37px]`}
          >
            <div className={`leading-4 ${!open && "hidden"}`}>
              <h4 className="text-sm font-semibold">DAAN </h4>
              <span className="text-xs text-gray-600">daan07@gmail.com</span>
            </div>
            <RiLogoutBoxLine size={24} />
          </div>
        </div>
      </nav>
      <div className="">dasboard</div>
    </aside>
  );
}