import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Surah from "../components/Surah";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surah" element={<Surah />} />
      </Routes>
    </BrowserRouter>
  );
}
