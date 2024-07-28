import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Banner from "./Banner";
import OverlayWithProminentColor from "./OverlayWithProminentColor";
export default function Main(props) {
  return (
    <div className="flex">
      <div className="min-w-[300px] max-w-[500px]">
        <Sidebar />
      </div>
      {props.is_home && <OverlayWithProminentColor />}
      <div className="w-full relative">
        {props.is_home ? (
          <Banner is_home={props.is_home} />
        ) : (
          <div
            className={`sticky top-0 left-0 right-0 min-h-[100px] ${
              props.is_home ? "bg-[rgba(0,0,0,0.05)]" : "bg-gray-800"
            } z-[4]`}
          >
            <Header is_detailPage={props.is_detailPage} />
          </div>
        )}
        <div className="w-full min-w-[900px]">
          {props.children ? props.children : ""}
        </div>
      </div>
    </div>
  );
}
