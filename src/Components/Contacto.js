import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Contacto.css";

const Contacto = () => {
  return (
    <>
      <div className="containerContacto">
        <h2 className="contactoTitle">
          ¡Espero que les haya gustado la página!, por si quieren contactarme
          por cualquier motivo, les dejo mis datos de contacto!
        </h2>
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/ivancatacata"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> /IvanCatacata
          </a>
        </div>
        <div className="whatsapp">
          <a
            href="https://wa.me/+5491121659838"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> +54 9 1121659838
          </a>
        </div>
        <div className="mail">
          <a
            href="mailto:catacata.ivan@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} /> catacata.ivan@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Contacto;
