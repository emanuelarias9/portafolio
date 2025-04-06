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
          <Route path="/Portafolio/Home" element={<Home />}></Route>
          <Route
            path="/Portafolio"
            element={<Navigate to="/Portafolio/Home" />}
          ></Route>
          <Route path="/Portafolio/Proyectos" element={<Portafolio />}></Route>
          <Route path="/Portafolio/curriculum" element={<Curriculum />}></Route>
          <Route path="/Portafolio/contacto" element={<Contacto />}></Route>
          <Route path="/Portafolio/proyecto/:id" element={<Project />}></Route>
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
};
