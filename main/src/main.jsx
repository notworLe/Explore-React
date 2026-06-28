import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import TicToeTac from "./components/game/tic-toe-tac"
import Layout from "./components/teamplate/Layout"
import Vocabulary from "./components/vocabulary/Vocabulary"
import WhyAppFun from "./components/troll/WhyAppFun"
import './index.css';
import './App.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tic-toe-tac" element={<TicToeTac />} />
        <Route path="/vocabulary" element={<Vocabulary/>} />
        <Route path="/funapp" element={<WhyAppFun/>} />

      </Route>
    </Routes>
  </BrowserRouter>,
);  

