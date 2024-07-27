import React from "react";
import AddFavorite from "./AddFavorite";
import Header from "./Header";
import Genres from "../Constants/Genres";
import { useSelector } from "react-redux";
export default function Banner({ is_home }) {
  let genres = "";
  const currentBanner = useSelector((state) => state.BannerReducer);
  Genres?.map((genre) => {
    if (currentBanner?.genre_ids.includes(genre.id)) {
      genres += genre.name + " ";
    }
  });
  return (
    <div className="sticky top-0 left-0 right-0 min-h-[200px] z-[4] border-b-gray-400 border-b-[1px]">
      <Header is_home={is_home} />
      <img
        src={`https://image.tmdb.org/t/p/w500/${currentBanner?.backdrop_path}`}
        alt="banner"
        className="max-h-[350px] min-h-[250px] w-full object-cover"
      />
      <div className="flex flex-col gap-5 absolute bottom-4 left-6">
        <h2 className="text-[34px] font-bold">
          {currentBanner.original_title}
        </h2>
        <span className="text-[16px]">{`${currentBanner?.release_date.substr(
          0,
          4
        )} | ${genres} | ${currentBanner?.popularity} Views`}</span>
        <div className="text-[14px] flex items-center gap-3">
          <button className="px-4 py-2 rounded-md bg-[#6100C2] font-bold hover:brightness-105">
            Watch now
          </button>
          <AddFavorite movie={currentBanner} />
        </div>
      </div>
    </div>
  );
}
