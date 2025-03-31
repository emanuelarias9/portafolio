import React from "react";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Home } from "../components/Home";
import { Portafolio } from "../components/Portafolio";
import { Curriculum } from "../components/Curriculum";
import { Contacto } from "../components/Contacto";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/portafolio" element={<Portafolio />}></Route>
        <Route path="/curriculum" element={<Curriculum />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
