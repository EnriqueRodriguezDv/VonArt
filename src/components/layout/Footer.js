import React from "react";

import instagram from "../../assets/static/instagram.png";
import facebook from "../../assets/static/facebook.svg";
import linkedIn from "../../assets/static/linkedin.svg";
import gmail from "../../assets/static/gmail.svg";

import "../../assets/styles/components/footer.scss";

const Footer = () => {
  return (
    <footer id="footer" className="footer bg-dark ">
      <nav className="navbar navbar-expand justify-content-center navbar-dark "></nav>
      <div className="row w-100 m-auto">
        <div className="col-12 col-md-6 d-flex justify-content-center p-0 mt-4 mb-5">
          {/* <a href="https://github.com/EnriqueRodriguezDv" target="_blank">
            <img className="mr-4" src={github}></img>
          </a> */}
          <a
            // href="https://www.facebook.com/Enrique-Rodriguez-Desarrollador-101686708213107"
            target="_blank"
          >
            <img className="mr-4" src={facebook}></img>
          </a>
          <a
            href="https://www.instagram.com/titavonart/"
            target="_blank"
          >
            <img className="footerLogo" src={instagram}></img>
          </a>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-0">
          <div
            id="email"
            className="d-flex align-items-center justify-content-center"
            onClick={() => {
              window.open("mailto:juanenriquerodriguezgarcia87@gmail.com");
            }}
          >
            <h2 className="mr-4">Email</h2>
            <img src={gmail}></img>
          </div>
        </div>
      </div>
      <div className="row w-100 m-auto">
        <div className="col-12 text-center mt-4 mb-1">
          <small>Copyright 2023 by Tita Von Chica</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
