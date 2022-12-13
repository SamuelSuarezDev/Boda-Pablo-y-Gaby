import React from "react";
import Smoke from "../../assets/Smoke.png";

export const History = () => {
  return (
    <div className="history">
      <img className="humo" src={Smoke} alt="" />
      <p className="title">Nuestra historia</p>
      <p className="subtitle">
        Éramos niños cuando nos enamoramos, sín saber lo que era. ¡Quién diría
        que nuestros caminos se cruzarían 7 años después...! Y por la gracia de
        Dios está vez será para toda la vida. Un día dijimos sí para ser novios
        y hoy diremos sí en el altar para toda la vida y nos llamaremos esposos.
      </p>
    </div>
  );
};
