import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Badge from "./pages/badge.jsx";
import Card from "./pages/card.jsx";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/badge" element={<Badge />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}
