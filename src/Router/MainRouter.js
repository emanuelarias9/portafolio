import React from "react";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Home } from "../components/Home";
import { Portafolio } from "../components/Portafolio";
import { Curriculum } from "../components/Curriculum";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from "../components/layout/HeaderNav";
import { Footer } from "../components/layout/Footer";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <section className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/portafolio" element={<Portafolio />}></Route>
          <Route path="/curriculum" element={<Curriculum />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
};
