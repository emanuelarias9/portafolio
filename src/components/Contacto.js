import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contacto = () => {
  const [success, setSuccess] = useState(false);
  const form = useRef();
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey: "cxOahMqeuvqW1iH85",
      });

      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("FAILED...", error);
    }
  };
  return (
    <div className="page pageContact">
      <h1 className="heading">Contacto</h1>
      <form ref={form} className="contact" onSubmit={sendEmail}>
        <input type="text" placeholder="nombre" name="nombre" />
        <input type="email" placeholder="email" name="email" />
        <textarea placeholder="Motivo de contacto" name="mensaje"></textarea>
        <input type="submit" value="Enviar" />
      </form>
      {success && (
        <div className="toast-notification">
          <p> Mensaje enviado correctamente</p>
        </div>
      )}
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
