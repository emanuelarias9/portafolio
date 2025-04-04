import React from "react";
import { trabajos } from "../data/trabajos";
import { Link } from "react-router-dom";

export const ListadoTrabajos = ({ limite }) => {
  return (
    <section className="works">
      {trabajos.slice(0, limite).map((trabajo) => (
        <article key={trabajo.id} className="workItem">
          <div className="mask">
            <Link to={"/proyecto/" + trabajo.id}>
              <img src={"/images/" + trabajo.id + ".png"} />
            </Link>
          </div>
          <span>{trabajo.categoria} </span>
          <h2>
            <Link to={"/proyecto/" + trabajo.id}> {trabajo.nombre} </Link>
          </h2>
          <h3>{trabajo.tecnologias} </h3>
        </article>
      ))}
    </section>
  );
};
