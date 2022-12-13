import React from "react";
import { cardInfoBoyfriendProps } from "./types";
import "./styles.css";

const CardBoyfriend = ({ image, phrase, name }: cardInfoBoyfriendProps) => {
  return (
    <div className="container-card">
      <img className="card-image" src={image} alt="" />
      <p className="frase">{phrase}</p>
      <p className="nombre">-{name}</p>
    </div>
  );
};

export default CardBoyfriend;
