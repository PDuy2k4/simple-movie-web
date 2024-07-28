import React, { useState, useMemo } from "react";
import {
  BellIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import getMovieNames from "../utils/getMovieNames";

import { useNavigate } from "react-router-dom";
export default function Header(props) {
  const [searchParam, setSearchParam] = useState(null);
  const [search, setSearch] = useState(false);
  const [notification, setNotification] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const allMovies = useSelector((state) => state.MoviesReducer.movies);
  const allNames = useMemo(() => getMovieNames(allMovies), [allMovies]);
  const matchNames = new Map();
  const navigate = useNavigate();
  allNames
    .filter(({ name }) =>
      name.toLowerCase().split(" ").includes(searchValue.toLowerCase())
    )
    .forEach((movie) => {
      if (!matchNames.has(movie.name)) {
        matchNames.set(movie.name, movie);
      }
    });
  const matchUniqueNames = Array.from(matchNames.values());
  const handlSearch = (searchParam) => {
    if (searchParam) {
      console.log(
        `/detail?id=${searchParam[0].toString()}&category=${searchParam[1]}`
      );
      navigate(
        `/detail?id=${searchParam[0].toString()}&category=${searchParam[1]}`
      );
    } else alert("No movie found");
  };
  return (
    <div
      className={`absolute z-[2] text-[18px] px-6 py-11 flex items-center justify-between w-full`}
    >
      <div className="flex items-center gap-4">
        {props.is_detailPage ? (
          <span className="inline-block font-bold brightness-200">Detail</span>
        ) : (
          <span
            className={`inline-block ${
              props.is_detailPage ? "brightness-75" : "font-bold brightness-200"
            }`}
          >
            Movies
          </span>
        )}
      </div>
      {search && (
        <div className="flex items-center gap-3 absolute translate-x-1/2 animate-expand">
          <input
            type="text"
            className="rounded-3xl w-full border-none text-black px-6 py-2 text-[18px] outline-none"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handlSearch(searchParam)}
          />
          <div className="absolute z-10 right-3 top-1 bottom-1 flex gap-3 items-center">
            <button
              onClick={() => handlSearch(searchParam)}
              className="rounded-2xl py-1 px-3 bg-green-600 font-semibold hover:brightness-200"
            >
              search
            </button>
            <button
              className="rounded-full hover:brightness-200 brightness-75"
              onClick={() => setSearch(false)}
            >
              <XMarkIcon className="h-7 w-7 text-black" />
            </button>
          </div>
          <div
            className={`absolute top-14 max-h-[200px] left-0 right-0 bg-white rounded-3xl shadow-white overflow-hidden ${
              !(matchUniqueNames.length > 0) && "hidden"
            }`}
          >
            {matchUniqueNames.length > 0 &&
              matchUniqueNames.map(({ name, id, category }, index) => (
                <div
                  key={index}
                  className=" text-center px-6 text-black font-semibold py-2 hover:bg-slate-100 cursor-pointer"
                  onClick={() => {
                    setSearchParam([id, category]);
                    setSearchValue(name);
                  }}
                >
                  {name}
                </div>
              ))}
          </div>
        </div>
      )}
      <div className="flex gap-4 items-center">
        <div
          className="hover:brightness-200 brightness-75 font-bold cursor-pointer transition duration-800"
          onClick={() => setSearch(true)}
        >
          {!search && <MagnifyingGlassIcon className="h-7 w-7 text-white" />}
        </div>
        <div
          className="hover:brightness-200 brightness-75 font-bold cursor-pointer transition duration-800"
          onClick={() => setNotification((val) => !val)}
        >
          {notification ? (
            <BellAlertIcon className="h-7 w-7 brightness-200  text-white" />
          ) : (
            <BellIcon className="h-7 w-7 text-white" />
          )}
        </div>
      </div>
    </div>
  );
}
