import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/favorite/:id" element={<Favorite />} />
        <Route path="/trending/:id" element={<Trending />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default App;
