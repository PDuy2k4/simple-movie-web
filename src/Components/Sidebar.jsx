import React from "react";
import { memo } from "react";
import CoffeeLogo from "../assets/coffee.svg";
import { HeartIcon, FilmIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
function Sidebar() {
  const minSidebarHeight = window.innerHeight;
  return (
    <div
      className={`bg-[#21201E] fixed left-0 top-0 bottom-0 min-w-[300px] z-[4] max-w-[500px] flex flex-col justify-between p-8 rounded-br-[8.5rem] shadow-xl`}
      style={{ minHeight: minSidebarHeight }}
    >
      <div className="flex flex-col gap-10">
        <NavLink to="/" className="flex gap-2 items-end">
          <img src={CoffeeLogo} alt="coffee" />
          <h1 className="text-xl font-bold">WATCH</h1>
        </NavLink>
        <div className="flex flex-col gap-4 text-[18px] leading-normal">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "brightness-200" : "brightness-75"
              } hover:brightness-200 transition-all duration-1000 font-bold`
            }
          >
            <FilmIcon className="w-6 h-6" />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "brightness-200" : "brightness-75"
              } hover:brightness-200 transition-all duration-1000 font-bold`
            }
          >
            <HeartIcon className="w-6 h-6" />
            <span>Favourites</span>
          </NavLink>
        </div>
      </div>
      <div className="flex gap-4 text-[12px] leading-normal">
        <span className="opacity-30 underline">phamdinhanhduy@gmail.com</span>
      </div>
    </div>
  );
}
export default memo(Sidebar);
