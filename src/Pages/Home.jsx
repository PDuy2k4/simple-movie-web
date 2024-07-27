import React, { useEffect, useState } from "react";
import Main from "../Components/Main";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../Styles/customSliderStyle.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../utils/fetchMovies";
import LoadingSkeleton from "../Components/LoadingSkeleton";
import Movie from "../Components/Movie";
export default function Home() {
  const moviesState = useSelector((state) => state.MoviesReducer);
  const dispatch = useDispatch();
  const defaultSkeletons = new Array(4).fill(0);
  const [clientWidth, setClientWidth] = useState(window.innerWidth);
  useEffect(() => {
    dispatch(fetchMovies());
    const handleResize = () => {
      setClientWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const typeMovies = Object.keys(moviesState.movies);
  return (
    <Main is_home>
      <div className="px-4 py-8 flex flex-col gap-3">
        {typeMovies
          ? typeMovies.map((type) => (
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {type.split("_").join(" ")}
                </h2>
                {moviesState.loading ? (
                  <div className="flex justify-between gap-3">
                    {defaultSkeletons.map((_, index) => (
                      <LoadingSkeleton key={index} />
                    ))}
                  </div>
                ) : (
                  <div
                    className="overflow-hidden"
                    style={{ maxWidth: `${clientWidth - 350}px` }}
                  >
                    <Swiper
                      // install Swiper modules
                      modules={[Navigation, Scrollbar, A11y]}
                      spaceBetween={4}
                      slidesPerView={5}
                      navigation
                      scrollbar={{ draggable: true }}
                    >
                      {moviesState.movies[type].map((movie, index) => (
                        <SwiperSlide key={index}>
                          <Movie key={movie.id} movie={movie} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
              </div>
            ))
          : ""}
      </div>
    </Main>
  );
}
