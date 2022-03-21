import React from "react";
import "./SobreMi.css";

const SobreMi = () => {
  return (
    <>
      <div className="containerSobreMi">
        <h1 id="tituloSM">
          ¡Hola!, bienvenidos a mi página, muchas gracias por tomarse el tiempo
          de entrar.
        </h1>
        <img src="images/yo.png" alt="yo" id="yo" />
        <p id="descripcion">
          Me presento, mi nombre es <b>Iván Catacata</b> soy desarrollador full
          stack MERN, manejando JavaScript como lenguaje principal utilizando su
          framework ReactJS, MongoDB como base de datos noSQL, Express como
          framework de NodeJS. Adicionalmente tengo conocimientos en AWS,
          TypeScript, manejo de git, en otros lenguajes de programación y
          tambien en base de datos relacionales como MySQL, y Backend as a
          service como Firebase. Me mantengo en constante aprendizaje, todos los
          días me perfecciono en este rubro que tanto me apasiona!.
        </p>
      </div>
    </>
  );
};

export default SobreMi;
