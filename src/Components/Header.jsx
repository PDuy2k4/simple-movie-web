import React, { useState } from "react";
import {
  BellIcon,
  MagnifyingGlassIcon,
  ArrowRightStartOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
export default function Header(props) {
  const [search, setSearch] = useState(false);
  const [notification, setNotification] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div
      className={`${
        props.is_home ? "absolute " : "sticky"
      }  z-[2] text-[18px] px-6 py-11 flex items-center justify-between w-full`}
    >
      <span className="cursor-pointer inline-block font-bold">Movies</span>
      {search && (
        <div className="flex items-center gap-3 absolute translate-x-1/2 animate-expand">
          <input
            type="text"
            className="rounded-3xl w-full border-none text-black px-6 py-2 text-[18px] outline-none"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="absolute right-3 top-1 bottom-1 rounded-full z-10 hover:brightness-200"
            onClick={() => setSearch(false)}
          >
            <XMarkIcon className="h-7 w-7 text-black" />
          </button>
        </div>
      )}
      <div className="flex gap-4 items-center">
        <div
          className="hover:brightness-0 font-bold cursor-pointer transition duration-800"
          onClick={() => setSearch(true)}
        >
          {!search && <MagnifyingGlassIcon className="h-7 w-7 text-white" />}
        </div>
        <div
          className="hover:brightness-0 font-bold cursor-pointer transition duration-800"
          onClick={() => setNotification((val) => !val)}
        >
          {notification ? (
            <BellAlertIcon className="h-7 w-7 brightness-200  text-white" />
          ) : (
            <BellIcon className="h-7 w-7 text-white" />
          )}
        </div>

        <NavLink
          to="/login"
          className="hover:brightness-0 font-bold transition duration-800"
        >
          <ArrowRightStartOnRectangleIcon className="h-7 w-7 text-white" />
        </NavLink>
      </div>
    </div>
  );
}
