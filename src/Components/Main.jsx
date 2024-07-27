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
      <OverlayWithProminentColor />
      <div className="w-full relative">
        {props.is_home ? <Banner is_home={props.is_home} /> : <Header />}
        {props.children ? props.children : ""}
      </div>
    </div>
  );
}
