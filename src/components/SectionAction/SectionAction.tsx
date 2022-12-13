import React from "react";
import { Button } from "../Button/Button";
import Smoke from "../../assets/Smoke.png";

export const SectionAction = ({
  title,
  text,
  buttonText,
  iconButton,
  onClick,
  button,
  smoke,
}: any) => {
  return (
    <>
      {smoke && (
        <img
          style={{ marginTop: "-30%" }}
          className="smoke left"
          src={Smoke}
          alt=""
        />
      )}
      <div className="section">
        <p className="title">{title}</p>
        <p className="subtitle">{text}</p>
        {button && (
          <Button text={buttonText} icon={iconButton} onClick={onClick} />
        )}
      </div>
    </>
  );
};
