import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trabajos } from "../data/trabajos";
export const Project = () => {
  const [proyecto, setProyecto] = useState({});
  const params = useParams();
  useEffect(() => {
    let proyecto = trabajos.filter((trabajo) => trabajo.id === params.id);
    setProyecto(proyecto[0]);
  }, []);
  return (
    <div className="page pageWork">
      <div className="mask">
        <img src={"/portafolio/images/" + proyecto.id + ".png"} alt="" />
      </div>
      <h1 className="heading">{proyecto.nombre} </h1>
      <p>{proyecto.tecnologias} </p>
      <p>{proyecto.descripcion} </p>
      <h2>
        <a href={proyecto.url} target="_blank" rel="noreferrer">
          Ir al proyecto
        </a>
      </h2>
    </div>
  );
};
