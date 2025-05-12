import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>E</span>
        <h2>Emanuel Arias</h2>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/portafolio/home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portafolio/proyectos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Portafolio
            </NavLink>
          </li>
          <li>
            <a
              href="/portafolio/Emanuel-Arias-software-engineer.pdf"
              download="Emanuel-Arias-software-engineer.pdf"
            >
              Curriculum
            </a>
          </li>
          <li>
            <NavLink to="/portafolio/contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
