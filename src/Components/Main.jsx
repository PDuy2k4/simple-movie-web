import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Banner from "../assets/banner.jpg";
import AddFavorite from "./AddFavorite";
export default function Main(props) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="overlay"></div>
      <div className="w-full relative">
        <Header />
        {props.is_home ? (
          <div className="relative top-0 left-0 right-0 max-h-[350px] min-h-[250px] ] z-[1]">
            <img
              src={Banner}
              alt="banner"
              className="max-h-[350px] min-h-[250px] w-full object-cover"
            />
            <div className="flex flex-col gap-5 absolute bottom-4 left-6">
              <h2 className="text-[34px] font-bold">Insider</h2>
              <span className="text-[16px]">
                2022 | Comedy horror | 1 Season
              </span>
              <div className="text-[14px] flex items-center gap-3">
                <button className="px-4 py-2 rounded-md bg-[#6100C2] font-bold hover:brightness-105">
                  Watch now
                </button>
                <AddFavorite />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="text-[16px]">trending</div>
        {props.children ? props.children : ""}
      </div>
    </div>
  );
}
