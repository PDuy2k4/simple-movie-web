import React, { memo } from "react";
import Main from "../Components/Main";
import Movie from "../Components/Movie";
import { useSelector } from "react-redux";

function Favorite() {
  const allMovies = useSelector((state) => state.MoviesReducer.movies);
  const favoriteMovies = [];
  for (const key in allMovies) {
    allMovies[key].forEach((movie) => {
      if (movie.isFavorite) {
        favoriteMovies.push(movie);
      }
    });
  }
  return (
    <Main>
      <div className="px-6 py-8 flex flex-col gap-3">
        <h2 className="text-2xl font-bold mb-2">Favorite Movie</h2>
        <div className="grid grid-cols-5 gap-y-4 gap-x-3">
          {favoriteMovies.length > 0 &&
            favoriteMovies.map((movie, index) => (
              <Movie key={index} movie={movie} is_favoritePage />
            ))}
        </div>
      </div>
    </Main>
  );
}
export default memo(Favorite);
