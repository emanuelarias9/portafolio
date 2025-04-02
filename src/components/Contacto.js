import React from "react";

export const Contacto = () => {
  return (
    <div className="page">
      <h1 className="heading">Contacto</h1>
      <form className="contact">
        <input type="text" placeholder="nombre" />
        <input type="text" placeholder="email" />
        <textarea placeholder="Motivo de contacto"></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
