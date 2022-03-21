import React, { useEffect } from "react";
import CardProyecto from "./CardProyecto";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Proyectos.css";

const Proyectos = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const info =
    "Página profesional para un cliente creada con react, hooks personalizados, librerias en react, css vanilla, conectada a un sistema realizado en php, base de datos mysql, formulario con validaciones personalizadas";
  return (
    <div className="proyectos">
      <div className="containerProyectos">
        <h2 data-aos="fade-up">Trabajos</h2>
        <p className="infor" data-aos="zoom-in">
          Estos son proyectos realizados por mi, algunos proyectos de practica
          por mi cuenta y otros desarrollos reales para empresas, ¡todos hechos
          con cariño!.
        </p>
        <CardProyecto
          img="images/Artistas.png"
          descripcion="Esta aplicación web la realicé con react, utilizando bootstrap, framework css para el diseño, consumi la api de LastFM, utilice modales, portales y clases como componentes. Es una aplicación web que te muestra artistas/bandas similares segun tu búsqueda"
          enlace="https://ivancatacata.github.io/Artistas/"
        />
        <CardProyecto
          img="images/laeco.png"
          descripcion={info}
          enlace="https://www.viviendaslaeconomica.com.ar/"
        />
        <CardProyecto
          img="images/eurocasa.png"
          descripcion={info}
          enlace="https://www.eurocasa.com.ar/"
        />
        <CardProyecto
          img="images/casablanca.svg"
          descripcion={info}
          enlace="https://casa-blanca.com.ar/"
        />
        <CardProyecto
          img="images/esperanza.svg"
          descripcion={info}
          enlace="https://www.viviendaslaesperanza.com/"
        />
      </div>
    </div>
  );
};

export default Proyectos;
