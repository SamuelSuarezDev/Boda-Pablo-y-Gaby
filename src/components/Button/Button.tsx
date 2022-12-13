import React from "react";
import "./styles.css";
export const Button = ({ icon, text, onClick }: any) => {
  return (
    <button onClick={onClick}>
      {icon}
      <p> {text}</p>
    </button>
  );
};
