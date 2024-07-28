import React, { memo, useEffect, useState } from "react";
import AddFavorite from "./AddFavorite";
import Header from "./Header";
import Genres from "../Constants/Genres";
import { newInstance } from "../../Instance";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Banner({ is_home }) {
  let genres = "";
  const currentBanner = useSelector((state) => state.BannerReducer);
  const [currentVideo, setCurrentVideo] = useState("");
  Genres?.map((genre) => {
    if (currentBanner?.genre_ids.includes(genre.id)) {
      genres += genre.name + " ";
    }
  });
  useEffect(() => {
    newInstance.get(`/movie/${currentBanner.id}/videos`).then((response) => {
      setCurrentVideo(response.data.results[0]?.key);
    });
  }, [currentBanner]);
  return (
    <div className="min-w-[900px] sticky top-0 left-0  right-0 bg-[rgba(0,0,0,0.4)] opacity-95 min-h-[230px] z-[4] border-black border-l-black border-l-[1px] border-b-[1px]">
      <Header is_home={is_home} />
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-white via-transparent opacity-25"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-transparent to-white via-transparent opacity-35"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-transparent to-white via-transparent opacity-35"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent to-white via-transparent opacity-25"></div>
        </div>
        <div className="min-h-[220px] w-full flex justify-center py-16 rounded-md transition duration-1000 animate-fadeIn">
          <img
            src={`https://image.tmdb.org/t/p/w500/${currentBanner?.backdrop_path}`}
            alt="banner"
            className="max-h-[300px] max-w-[550px] shadow-white-glow object-scale-down rounded-md"
          />
        </div>
        <div className="flex flex-col gap-5 absolute bottom-4 left-6 z-10">
          <h2 className="text-[34px] font-bold">
            {currentBanner.original_title}
          </h2>
          <span className="text-[16px]">{`${currentBanner?.release_date.substr(
            0,
            4
          )} | ${genres} | ${currentBanner?.popularity} Views`}</span>
          <div className="text-[14px] flex items-center gap-3">
            <a
              href={`https://www.youtube.com/watch?v=${currentVideo}`}
              target="_blank"
              className="px-4 py-2 rounded-md bg-[#6100C2] font-bold hover:brightness-105"
            >
              Watch now
            </a>
            <Link
              className="px-4 py-2 rounded-md bg-[#6100C2] font-bold hover:brightness-105"
              to={`/detail?id=${currentBanner.id}&category=${currentBanner.category}`}
            >
              Detail
            </Link>
            <AddFavorite movie={currentBanner} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Banner);
