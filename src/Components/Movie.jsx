import React, { memo, useEffect, useState } from "react";
import AddFavorite from "./AddFavorite";
import { Link } from "react-router-dom";
import { setBanner } from "../Redux/BannerFeature";
import { useDispatch } from "react-redux";
import { newInstance } from "../../Instance";
function Movie({ movie, is_favoritePage }) {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [currentVideo, setCurrentVideo] = useState(null);
  useEffect(() => {
    const getMovie_Video = async () => {
      try {
        const video = await newInstance.get(`/movie/${movie.id}/videos`);
        setCurrentVideo(video.data.results[0]?.key);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie_Video();
  }, []);
  return (
    <div
      className="flex flex-col flex-1 rounded-xl relative max-w-[280px] overflow-hidden opacity-95 border border-slate-300 cursor-pointer shadow-white transition-all duration-300 ease-in-out hover:border-white hover:shadow-[0_0_10px_2px_rgba(255,255,255,1)]"
      onClick={() => {
        if (!is_favoritePage) dispatch(setBanner(movie));
        return;
      }}
      onMouseEnter={() => is_favoritePage && setMouseEnter(true)}
      onMouseLeave={() => is_favoritePage && setMouseEnter(false)}
    >
      {mouseEnter && (
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center gap-2 flex-col">
          <a
            href={`https://www.youtube.com/watch?v=${currentVideo}`}
            target="_blank"
            className={`px-4 py-2 rounded-md bg-[#6100C2] font-bold hover:brightness-105 ${
              isLoading && "pointer-events-none cursor-not-allowed"
            }`}
          >
            Watch now
          </a>
          <Link
            className="px-4 py-2 rounded-md bg-[#6100C2] font-bold hover:brightness-105"
            to={`/detail?id=${movie.id}&category=${movie.category}`}
          >
            Detail
          </Link>
        </div>
      )}
      <div className={`max-h-[200px]`}>
        <img
          className="w-full max-h-[200px] object-fill"
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt=""
        />
      </div>
      <div
        className="absolute top-2 right-2 z-[4]"
        onClick={(e) => e.stopPropagation()}
      >
        <AddFavorite movie={movie} />
      </div>
      <div
        className={`p-3 text-black flex flex-col flex-1 `}
        style={{
          backgroundImage:
            "linear-gradient(100deg, #FFF 12.94%, rgba(255, 255, 255, 0.00) 159.1%)",
        }}
      >
        <h2 className="text-lg font-semibold mb-3 truncate">{movie.title}</h2>
        <p className="font-bold text-[20px] mt-auto">{`${movie.release_date.substr(
          0,
          4
        )} | ${movie.original_language}`}</p>
      </div>
    </div>
  );
}
export default memo(Movie);
