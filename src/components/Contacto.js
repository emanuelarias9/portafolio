import React from "react";

export const Contacto = () => {
  return (
    <div className="page pageContact">
      <h1 className="heading">Contacto</h1>
      <form className="contact">
        <input type="text" placeholder="nombre" />
        <input type="text" placeholder="email" />
        <textarea placeholder="Motivo de contacto"></textarea>
        <input type="submit" value="Enviar" />
      </form>

      {/* Sección de información de contacto */}
      <div className="contact-info">
        <h2>También puedes contactarme por:</h2>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:emanuelarias9@gmail.com">emanuelarias9@gmail.com</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/emanuel-aj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/emanuel-aj/
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/emanuelarias9"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/emanuelarias9
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
