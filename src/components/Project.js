import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trabajos } from "../data/trabajos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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
      <div className="links">
        <h2>
          <FontAwesomeIcon icon={faGithub} />
          <a
            className="link"
            href={proyecto.urlGithub}
            target="_blank"
            rel="noreferrer"
          >
            Ver en GitHub
          </a>
        </h2>
        {proyecto.urlDeploy && (
          <h2>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <a
              className="link"
              href={proyecto.urlDeploy}
              target="_blank"
              rel="noreferrer"
            >
              Ir al proyecto
            </a>
          </h2>
        )}
      </div>
    </div>
  );
};
