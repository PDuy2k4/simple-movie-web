import React, { memo, useEffect, useState } from "react";
import Main from "../Components/Main";
import { useSearchParams } from "react-router-dom";
import { newInstance } from "../../Instance";
import { useSelector } from "react-redux";
import AddFavorite from "../Components/AddFavorite";

import LoadingSkeleton from "../Components/LoadingSkeleton";
function Detail() {
  let genres = "";
  const [isLoading, setIsLoading] = useState(true);
  const [param] = useSearchParams();
  const [currentMovie, setCurrentMovie] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const allMovies = useSelector((state) => state.MoviesReducer.movies);
  console.log(allMovies);
  console.log(param.get("category"));
  console.log(allMovies[param.get("category")]);
  console.log(typeof param.get("id"));
  const currentFavoriteMovie = allMovies[param.get("category")].find(
    (movie) => movie.id.toString() === param.get("id")
  );
  console.log(currentFavoriteMovie);
  currentMovie?.genres?.map((genre) => {
    genres += genre.name + " ";
  });
  useEffect(() => {
    const getMovie_Video = async () => {
      try {
        const fetchMovies = newInstance.get(`/movie/${param.get("id")}`);
        const fetchVideos = newInstance.get(`/movie/${param.get("id")}/videos`);
        const [movie, video] = await Promise.all([fetchMovies, fetchVideos]);
        setCurrentMovie(movie.data);
        setCurrentVideo(video.data.results[0]?.key);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie_Video();
  }, [param]);
  return (
    <Main is_detailPage>
      <div className="px-6 py-8 flex items-center gap-8">
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <div className="relative min-w-[250px]  rounded-xl overflow-hidden  min-h-[400px]">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-white via-transparent opacity-25"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent to-white via-transparent opacity-25"></div>
              </div>

              <img
                className="max-w-full min-w-[250px] min-h-[400px] object-cover"
                src={`https://image.tmdb.org/t/p/w500/${currentMovie?.poster_path}`}
                alt=""
              />
            </div>
            <div className="max-w-[800px] min-w-[450px]  flex flex-col gap-6">
              <h2 className="text-[34px] font-bold">
                {currentMovie?.original_title}
              </h2>
              <p className="text-[18px]">{`${currentMovie?.release_date.substr(
                0,
                4
              )} | ${genres} | ${currentMovie?.runtime} Minutes`}</p>
              <p className="text-[16px]">{currentMovie?.overview}</p>
              <h3 className="text-[20px] font-semibold">
                Production Companies:
              </h3>
              <div className="flex items-center gap-5">
                {currentMovie?.production_companies?.map((company, idx) => (
                  <div
                    className="max-w-[90px] aspect-square overflow-hidden"
                    key={idx}
                  >
                    <img
                      className="max-w-full h-full object-scale-down"
                      src={`https://image.tmdb.org/t/p/w185/${company?.logo_path}`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <div className="text-[14px] flex items-center gap-5 mt-2">
                <a
                  href={`https://www.youtube.com/watch?v=${currentVideo}`}
                  target="_blank"
                  className="px-8 py-6 text-[24px] rounded-md bg-[#6100C2] font-bold hover:brightness-105"
                >
                  Watch now
                </a>
                {currentFavoriteMovie && (
                  <AddFavorite movie={currentFavoriteMovie} />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </Main>
  );
}

export default memo(Detail);
