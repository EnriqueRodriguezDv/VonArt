import React from "react";
import HeaderPrincipal from "./HeaderPrincipal";

import logo from "../../../assets/static/logo.jpg";

const Header = () => {
  return (
    <section className="header">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand">
          <img
            src={logo}
            width="45"
            height="45"
            className="d-inline-block align-top mr-2"
            alt=""
            loading="lazy"
          />
          Tita Von Art
        </div>
        <HeaderPrincipal />
      </nav>
    </section>
  );
};

export default Header;
