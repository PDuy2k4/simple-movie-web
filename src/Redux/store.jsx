import { configureStore } from "@reduxjs/toolkit";
import movieSlicesReducer from "./MoviesFeature";
import favoriteSlicesReducer from "./FavoriteFeature";
import BannerSliceReducer from "./BannerFeature";
export const store = configureStore({
  reducer: {
    MoviesReducer: movieSlicesReducer,
    FavoriteReducer: favoriteSlicesReducer,
    BannerReducer: BannerSliceReducer,
  },
});
