/* eslint-disable no-restricted-globals */
import React from "react";
import "./styles.css";
import { Button } from "../Button/Button";

export const Ubication = () => {
  const maps = () => {
    location.href = "https://goo.gl/maps/sDAqAkWVbgF11PGz9";
  };
  return (
    <div className="content-ubication">
      <img
        src="https://lh3.googleusercontent.com/p/AF1QipMcwuOpzMFsCMyio5SLqnxo4FrUU-EzVt4QDQn9=s1360-w1360-h1020"
        alt=""
      />
      <p className="subtitle">Hacienda Alex Rodríguez</p>
      <p>Vereda Canelon, Via Puente Peralta #6 - 238, Cajicá, Cundinamarca</p>
      <Button text="Ver Ubicación" onClick={maps} />
    </div>
  );
};
