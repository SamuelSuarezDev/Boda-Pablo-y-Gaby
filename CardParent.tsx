import React from "react";
import { CardParentProps } from "./src/components/ParentsInfo/Components/types";
import "./styled.css";

const CardParent = ({ image, names, phrase }: CardParentProps) => {
  return (
    <div className="parent">
      <img src={image} alt="" />
      <p className="name">{names}</p>
      <p className="phrase">{phrase}</p>
    </div>
  );
};

export default CardParent;
