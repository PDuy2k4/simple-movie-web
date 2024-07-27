import { createAsyncThunk } from "@reduxjs/toolkit";
import { newInstance } from "../../Instance";
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, thunkApi) => {
    try {
      const nowPlaying = newInstance.get("/movie/now_playing");
      const popular = newInstance.get("/movie/popular");
      const topRated = newInstance.get("/movie/top_rated");
      const upcoming = newInstance.get("/movie/upcoming");
      const allMovies = await Promise.all([
        nowPlaying,
        popular,
        topRated,
        upcoming,
      ]);
      return allMovies;
    } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
    }
  }
);
