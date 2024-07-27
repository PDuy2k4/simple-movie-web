import React, { useState } from "react";
import AddFavorite from "./AddFavorite";
import { Link } from "react-router-dom";
import { setbanner } from "../Redux/BannerFeature";
import { useDispatch } from "react-redux";
export default function Movie({ movie }) {
  const [mouseEnter, setMouseEnter] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-col flex-1 rounded-xl relative max-w-[280px] overflow-hidden opacity-95 border border-slate-300 cursor-pointer"
      onMouseEnter={() => {
        dispatch(setbanner(movie));
        setMouseEnter(true);
      }}
      onMouseLeave={() => setMouseEnter(false)}
    >
      {mouseEnter && (
        <div className="absolute z-[3] top-0 bottom-0 right-0 left-0 flex justify-center items-center">
          <Link
            className="px-3 py-2 bg-purple-900 text-white font-semibold rounded-md"
            to={`/detail/${movie.id}`}
          >
            Detail
          </Link>
        </div>
      )}
      <div className={`max-h-[200px] ${mouseEnter && "brightness-50"}`}>
        <img
          className="w-full max-h-[200px] object-fill"
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="absolute top-2 right-2 z-[4]">
        <AddFavorite movie={movie} />
      </div>
      <div
        className={`p-3 text-black flex flex-col flex-1 ${
          mouseEnter && "brightness-50"
        }`}
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
