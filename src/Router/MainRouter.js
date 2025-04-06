import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../components/Home";
import { Portafolio } from "../components/Portafolio";
import { Curriculum } from "../components/Curriculum";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from "../components/layout/HeaderNav";
import { Footer } from "../components/layout/Footer";
import { Project } from "../components/Project";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <section className="content">
        <Routes>
          <Route path="/portafolio/home" element={<Home />}></Route>
          <Route
            path="/portafolio"
            element={<Navigate to="/portafolio/home" />}
          ></Route>
          <Route path="/portafolio/proyectos" element={<Portafolio />}></Route>
          <Route path="/portafolio/curriculum" element={<Curriculum />}></Route>
          <Route path="/portafolio/contacto" element={<Contacto />}></Route>
          <Route path="/portafolio/proyecto/:id" element={<Project />}></Route>
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
};
