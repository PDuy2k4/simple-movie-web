import React, { useState } from "react";
// import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
export default function AddFavorite() {
  const [favorite, setFavorite] = useState(false);
  return (
    <div
      className="p-2 flex items-center justify-center cursor-pointer bg-favorite-gradient rounded-sm hover:brightness-105"
      onClick={() => setFavorite((val) => !val)}
    >
      {favorite ? (
        <HeartIcon className="h-5 w-5 text-red-500" />
      ) : (
        <HeartIcon className="h-5 w-5 text-gray-500" />
      )}
    </div>
  );
}
