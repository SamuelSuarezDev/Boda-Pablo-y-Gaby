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
      <p className="title">Ubicación</p>
      <img src={Lugar} alt="" />
      <p className="subtitle">Hacienda Alex Rodríguez</p>
      <p>Vereda Canelon, Via Puente Peralta #6 - 238, Cajicá, Cundinamarca</p>
      <Button text="Ver Ubicación" onClick={maps} icon={iconButton} />
    </div>
  );
};
