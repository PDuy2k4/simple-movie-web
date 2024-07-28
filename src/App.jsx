import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "./utils/fetchMovies";
import Detail from "./Pages/Detail";
import Error from "./Pages/Error";
import ErrorBoundary from "./utils/ErrorBoundary";
function App() {
  const dispatch = useDispatch();
  const deviceWidth = window.innerWidth;
  if (deviceWidth < 1024) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h2 className="text-4xl text-red-500 font-bold">
          Please Try With Laptop or PC
        </h2>
      </div>
    );
  }
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/detail/*" element={<Detail />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
