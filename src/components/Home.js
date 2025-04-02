import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <h1>
        Hola, soy <strong> Emanuel Arias</strong> un ingeniero de sistemas con 6
        años de experiencia como <strong>fullstack developer.</strong>
      </h1>
      <section className="lasts-works">
        <h2 className="heading">Mis proyectos</h2>
        <p>Estos son algunos de mis proyectos</p>
        <div className="works"></div>
      </section>
    </div>
  );
};
