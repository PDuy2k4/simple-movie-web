import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../utils/fetchMovies";
import AddFavorite from "../Components/AddFavorite";
const initialMovies = {
  loading: true,
  movies: {
    Now_Playing: [],
    Popular: [],
    Top_Rated: [],
    UpComing: [],
  },
};
const moviesSlices = createSlice({
  name: "movies",
  initialState: initialMovies,
  reducers: {
    setFavorite: (state, { payload }) => {
      console.log(payload);
      const index = state.movies[payload.category].findIndex(
        (item) => item.id === payload.id
      );
      state.movies[payload.category][index].isFavorite =
        !state.movies[payload.category][index].isFavorite;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies.Now_Playing = action.payload[0].data.results.map(
          (movie) => ({ ...movie, isFavorite: false, category: "Now_Playing" })
        );
        state.movies.Popular = action.payload[1].data.results.map((movie) => ({
          ...movie,
          category: "Popular",
          isFavorite: false,
        }));
        state.movies.Top_Rated = action.payload[2].data.results.map(
          (movie) => ({ ...movie, category: "Top_Rated", isFavorite: false })
        );
        state.movies.UpComing = action.payload[3].data.results.map((movie) => ({
          ...movie,
          category: "UpComing",
          isFavorite: false,
        }));
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.loading = false;
        console.log("Error fetching movies");
      });
  },
});
export const { setFavorite } = moviesSlices.actions;
export default moviesSlices.reducer;
