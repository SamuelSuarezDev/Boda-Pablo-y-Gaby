import React from "react";
import { CardParentProps } from "./types";
import "./styled.css";

const CardParent = ({ image, names, phrase }: CardParentProps) => {
  return (
    <div className="parent">
      <img src={image} alt="" />
      <p>{names}</p>
      <p>{phrase}</p>
    </div>
  );
};

export default CardParent;
