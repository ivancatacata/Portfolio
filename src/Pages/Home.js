import React, { useEffect } from "react";
import Header from "../Components/Header";
import SobreMi from "../Components/SobreMi";
import Proyectos from "../Components/Proyectos";
import Contacto from "../Components/Contacto";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    let bg = document.getElementById("bg");
    let cometa = document.getElementById("cometa");
    let separador = document.getElementById("separador");
    let luna = document.getElementById("luna");
    let text = document.getElementById("text");
    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      bg.style.top = value * 0.5 + "px";
      cometa.style.left = -200 + value * 2 + "px";
      separador.style.bottom = -value * 0.2 + "px";
      luna.style.top = 300 - value * 0.3 + "px";
      text.style.top = 211 + value * 0.75 + "px";

      let tituloSM = document.getElementById("tituloSM");
      let yo = document.getElementById("yo");
      let desc = document.getElementById("descripcion");
      let descAlt = desc.offsetTop;
      let efecto = tituloSM.offsetTop;
      if (value > efecto - 600) {
        yo.style.right = 0 + "%";
        yo.style.opacity = "1";

        tituloSM.style.opacity = "1";
      } else {
        yo.style.right = 400 + "px";
        yo.style.opacity = "0";
        tituloSM.style.opacity = "0";
      }
      if (value > descAlt - 600) {
        desc.style.opacity = "1";
      } else {
        desc.style.opacity = "0";
      }
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="containerImg">
          <Header />
          <img
            src="images/fondo.jpg"
            alt="background"
            id="bg"
            className="homeImg"
          />
          <img
            src="images/cometa.png"
            alt="cometa"
            id="cometa"
            className="homeImg2"
          />
          <img
            src="images/separador.png"
            alt="separador"
            className="homeImg3"
            id="separador"
          />
          <img
            src="images/luna.png"
            alt="luna"
            id="luna"
            className="homeImg4"
          />
          <h2 id="text">
            IVAN CATACATA <br /> FULL STACK DEVELOPER
          </h2>
        </div>
        <SobreMi />
        <Proyectos />
      </div>
      <Contacto />
    </>
  );
};

export default Home;
