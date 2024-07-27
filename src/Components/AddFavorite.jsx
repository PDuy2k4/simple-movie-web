import React, { useState } from "react";
// import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../Redux/FavoriteFeature";
export default function AddFavorite(movie) {
  const [favorite, setFavorite] = useState(false);
  const Favorites = useSelector((state) => state.FavoriteReducer);
  const dispatch = useDispatch();
  return (
    <div
      className="p-2 flex items-center justify-center cursor-pointer bg-favorite-gradient rounded-sm hover:brightness-105"
      onClick={() => {
        if (favorite) {
          setFavorite(false);
          dispatch(removeFavorite(movie));
        } else {
          setFavorite(true);
          dispatch(addFavorite(movie));
        }
      }}
    >
      {favorite ? (
        <HeartIcon className="h-5 w-5 text-red-500" />
      ) : (
        <HeartIcon className="h-5 w-5 text-gray-500" />
      )}
    </div>
  );
}
