/* eslint-disable no-restricted-globals */
import React from "react";
import "./styles.css";
import { Button } from "../Button/Button";
import Lugar from "../../assets/Lugar.png";

export const Ubication = ({ iconButton }: any) => {
  const maps = () => {
    location.href = "https://goo.gl/maps/sDAqAkWVbgF11PGz9";
  };
  return (
    <div className="content-ubication">
      <p style={{ margin: "0 0 30px" }} className="title">
        Ubicación
      </p>
      <img src={Lugar} alt="" />
      <p style={{ margin: "10px 0 5px" }} className="title site">
        Hacienda Alex Rodríguez
      </p>
      <p style={{ margin: "0 0 15px", width: "80%" }}>
        Vereda Canelón, Via Puente Peralta #6 - 238, Cajicá, Cundinamarca
      </p>
      <Button text="Ver Ubicación" onClick={maps} icon={iconButton} />
    </div>
  );
};
