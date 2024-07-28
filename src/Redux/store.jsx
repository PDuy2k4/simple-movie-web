import { configureStore } from "@reduxjs/toolkit";
import movieSlicesReducer from "./MoviesFeature";
import BannerSliceReducer from "./BannerFeature";
export const store = configureStore({
  reducer: {
    MoviesReducer: movieSlicesReducer,
    BannerReducer: BannerSliceReducer,
  },
});
