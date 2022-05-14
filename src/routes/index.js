import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import About from "../pages/about";
import Favourite from "../pages/favourite";
import Home from "../pages/home";

export default function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/favourite" exact element={<Favourite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
