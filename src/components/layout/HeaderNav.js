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
          <li className="dropdown">
            <span>Curriculum</span>
            <ul className="submenu">
              <li>
                <a
                  href="/portafolio/Emanuel-Arias-Joiro-Resume.pdf"
                  download="Emanuel-Arias-Joiro-Resume.pdf"
                >
                  Curriculum - EN
                </a>
              </li>
              <li>
                <a
                  href="/portafolio/Emanuel-Arias-Joiro-CV.pdf"
                  download="Emanuel-Arias-Joiro-CV.pdf"
                >
                  Curriculum - ES
                </a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/portafolio/contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
