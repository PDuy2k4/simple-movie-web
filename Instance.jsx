import axios from "axios";

export const newInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    common: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  },
});
