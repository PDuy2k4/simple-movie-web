import React, { useEffect, useState } from "react";
import CoffeeLogo from "../assets/coffee.svg";
import {
  HeartIcon,
  FilmIcon,
  ArrowTrendingUpIcon,
  AdjustmentsVerticalIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  const windowHeight = window.innerHeight;
  return (
    <div
      className={`bg-[#21201E] h-screen min-w-[300px] max-w-[500px] flex flex-col justify-between p-8 rounded-br-[8.5rem]`}
      style={{ minHeight: `${windowHeight}px` }}
    >
      <div className="flex flex-col gap-10">
        <div className="flex gap-2 items-end">
          <img src={CoffeeLogo} alt="coffee" />
          <h1 className="text-xl font-bold">WATCH</h1>
        </div>
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
          <NavLink
            to="/trending"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "brightness-200" : "brightness-75"
              } hover:brightness-200 transition-all duration-1000 font-bold`
            }
          >
            <ArrowTrendingUpIcon className="w-6 h-6" />
            <span>Trending</span>
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-[18px] leading-normal">
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive ? "brightness-200" : "brightness-75"
            } hover:brightness-200 transition-all duration-1000 font-bold`
          }
          to="/settings"
        >
          <AdjustmentsVerticalIcon className="w-6 h-6" />
          <span>Settings</span>
        </NavLink>
        <div className="flex items-center gap-2 brightness-75 cursor-pointer hover:brightness-200 transition-all duration-1000 font-bold">
          <ArrowLeftStartOnRectangleIcon className="w-6 h-6" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
