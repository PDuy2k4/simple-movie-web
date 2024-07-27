import { createSlice } from "@reduxjs/toolkit";
const initialBanner = {
  adult: false,
  backdrop_path: "/tncbMvfV0V07UZozXdBEq4Wu9HH.jpg",
  genre_ids: [28, 80, 53, 35],
  id: 573435,
  original_language: "en",
  original_title: "Bad Boys: Ride or Die",
  overview:
    "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
  popularity: 8530.679,
  poster_path: "/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg",
  release_date: "2024-06-05",
  title: "Bad Boys: Ride or Die",
  video: false,
  vote_average: 7.568,
  vote_count: 961,
};
const bannerSlices = createSlice({
  name: "banner",
  initialState: initialBanner,
  reducers: {
    setbanner: (state, action) => {
      return action.payload;
    },
  },
});
export const { setbanner } = bannerSlices.actions;
export default bannerSlices.reducer;
