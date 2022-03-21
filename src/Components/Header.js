import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="burger-container" onClick={handleClick}>
            <div
              className={
                navOpen ? "burger burger-close" : "burger burger-branding"
              }
            ></div>
          </div>
          <div
            className={navOpen ? "navbar-responsive open" : "navbar-responsive"}
          >
            <Link
              to="/"
              className="link"
              onClick={() => {
                let selectSection = document.querySelector(".containerSobreMi");
                let selectedTop = selectSection.offsetTop - 100;
                window.scroll({
                  top: selectedTop,
                  behavior: "smooth",
                });
                setNavOpen(!navOpen);
              }}
            >
              Sobre Mi
            </Link>
            <Link
              to="/"
              className="link"
              onClick={() => {
                let selectSection = document.querySelector(
                  ".containerProyectos"
                );
                let selectedTop = selectSection.offsetTop - 100;
                window.scroll({
                  top: selectedTop,
                  behavior: "smooth",
                });
                setNavOpen(!navOpen);
              }}
            >
              Trabajos
            </Link>

            <Link
              to="/"
              className="link"
              onClick={() => {
                let selectSection =
                  document.querySelector(".containerContacto");
                let selectedTop = selectSection.offsetTop;
                window.scroll({
                  top: selectedTop,
                  behavior: "smooth",
                });
                setNavOpen(!navOpen);
              }}
            >
              Contacto
            </Link>
            <div className="redes">
              <a
                href="https://www.linkedin.com/in/ivancatacata"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://wa.me/+5491121659838"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                href="mailto:catacata.ivan@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
