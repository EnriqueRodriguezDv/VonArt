import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { addHistory, closeSession, closeMonopolyPlayer } from "../../../action/index";

import "../../../assets/styles/components/headerPrincipal.scss";

const HeaderPrincipal = () => {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown cursor-show">
            <div
              className="nav-link"
              id="navbarDropdownMenuLink"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Galerías
            </div>
            <div
              className="dropdown-menu bg-dark m-0"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" 
              // to="/transfer"
              >
                Dibujos
              </Link>
              <Link className="dropdown-item" 
              // to="/moreMoney"
              >
                Customizaciones
              </Link>
              <Link className="dropdown-item" 
              // to="/monopoly"
              >
                Limpiezas faciales
              </Link>
              <Link className="dropdown-item" 
              // to="/history"
              >
                Otros
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  addHistory,
  closeSession,
  closeMonopolyPlayer
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderPrincipal));
