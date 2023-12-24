import React from "react";
import { connect } from "react-redux";

import SecondHeader from "../components/global/SecondHeader";
import OptionUser from "../components/principal/OptionUser";

import "../assets/styles/container/principal.scss";

import happyLion from "../assets/static/vonChica.jpg";
import transfer from "../assets/static/fuck.jpg";
import pig from "../assets/static/customCamiseta.jpg";
import monopoly from "../assets/static/fuck.jpg";
import lionMoney from "../assets/static/customCamiseta.jpg";

const Principal = (props) => {
  return (
    <section id="principal">
      <SecondHeader img={happyLion} title={"Tita Von Chica"} />
      <div className="container-fluid">
        <div className="row ">
          <OptionUser img={transfer} title={"Dibujos"} 
          // link="transfer" 
          />
          <OptionUser img={pig} title={"Customizaciones"} 
          // link="moreMoney" 
          />
        </div>
        <div className="row ">
          <OptionUser img={monopoly} title={"Limpiezas faciales"}
          //  link="monopoly"
            />
          <OptionUser img={lionMoney} title={"Otros"}
          //  link="history"
            />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Principal);
