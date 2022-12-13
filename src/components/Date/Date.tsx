import React from "react";
import Flores from "../../assets/Flores.png";
import Day from "../../assets/Date.png";
import "./styles.css";

export const Date = () => {
  return (
    <div className="date-content">
      <p className="title">Fecha</p>
      <img
        style={{ left: 0, marginTop: "0" }}
        className="flowers large"
        src={Flores}
        alt=""
      />
      <img src={Day} alt="" />
      <img className=" large right" src={Flores} alt="" />
    </div>
  );
};
