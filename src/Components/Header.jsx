import React, { useState } from "react";
import {
  BellIcon,
  MagnifyingGlassIcon,
  ArrowRightStartOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
export default function Header() {
  const [search, setSearch] = useState(false);
  const [notification, setNotification] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="absolute z-[2] text-[18px] px-6 py-11 flex items-center justify-between w-full">
      <span className="cursor-pointer inline-block">Movies</span>
      {search && (
        <div className="w-[50%] flex items-center gap-3 absolute translate-x-1/2">
          <input
            type="text"
            className="rounded-3xl w-full border-none text-black px-6 py-2 text-[18px] outline-none"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="absolute right-3 top-1 bottom-1 rounded-full z-10 hover:brightness-0"
            onClick={() => setSearch(false)}
          >
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      )}
      <div className="flex gap-4 items-center">
        <div
          className="hover:brightness-200 cursor-pointer transition duration-800"
          onClick={() => setSearch(true)}
        >
          {!search && <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />}
        </div>
        <div
          className="hover:brightness-200 cursor-pointer transition duration-800"
          onClick={() => setNotification((val) => !val)}
        >
          {notification ? (
            <BellAlertIcon className="h-6 w-6 brightness-200 " />
          ) : (
            <BellIcon className="h-6 w-6 text-gray-500" />
          )}
        </div>

        <NavLink
          to="/login"
          className="hover:brightness-200 transition duration-800"
        >
          <ArrowRightStartOnRectangleIcon className="h-6 w-6 text-gray-500" />
        </NavLink>
      </div>
    </div>
  );
}
