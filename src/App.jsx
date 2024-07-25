import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/favorite/:id" element={<Favorite />} />
        <Route path="/trending/:id" element={<Trending />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
