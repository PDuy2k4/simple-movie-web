import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../utils/fetchMovies";
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
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies.Now_Playing = action.payload[0].data.results;
        state.movies.Popular = action.payload[1].data.results;
        state.movies.Top_Rated = action.payload[2].data.results;
        state.movies.UpComing = action.payload[3].data.results;
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.loading = false;
        console.log("Error fetching movies");
      });
  },
});
export default moviesSlices.reducer;
