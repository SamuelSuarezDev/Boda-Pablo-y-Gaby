import React from "react";
import { CardParentProps } from "./types";
import "./styled.css";

const CardParent = ({ image, names, phrase }: CardParentProps) => {
  return (
    <div className="parent">
      <img className="image-parents" src={image} alt="" />
      <p className="name">{names}</p>
      <p className="phrase">{phrase}</p>
    </div>
  );
};

export default CardParent;
