import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const favoriteSlices = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { addFavorite, removeFavorite } = favoriteSlices.actions;
export default favoriteSlices.reducer;
