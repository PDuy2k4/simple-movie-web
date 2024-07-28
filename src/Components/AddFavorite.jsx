import React from "react";
// import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { setFavorite } from "../Redux/MoviesFeature";
import { setBanner } from "../Redux/BannerFeature";
export default function AddFavorite({ movie }) {
  const dispatch = useDispatch();
  return (
    <div
      className="p-2 flex items-center justify-center cursor-pointer bg-favorite-gradient rounded-sm hover:brightness-105"
      onClick={() => {
        dispatch(setFavorite(movie));
        dispatch(setBanner({ ...movie, isFavorite: !movie.isFavorite }));
      }}
    >
      {movie.isFavorite ? (
        <HeartIcon className="h-5 w-5 text-red-500" />
      ) : (
        <HeartIcon className="h-5 w-5 text-gray-500" />
      )}
    </div>
  );
}
