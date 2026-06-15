import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Game from "./pages/Game";
import TicToeTac from "./pages/tic-toe-tac"
import './index.css';
import './App.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/" element={<Game />} />
      <Route path="/game/TicToeTac" element={<TicToeTac />} />

    </Routes>
  </BrowserRouter>,
);