import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Proyectos.css";

const CardProyecto = ({ img, descripcion, enlace }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="cardProyecto" data-aos="fade-up" data-aos-duration="3000">
      <div style={{ width: "100%" }}>
        <img src={img} alt="Proyecto" />
        <hr className="divisor" />
      </div>

      <p className="descripcion">{descripcion}</p>
      <a href={enlace} target="_blank" rel="noreferrer">
        <b>Ver web</b>
      </a>
    </div>
  );
};

export default CardProyecto;
