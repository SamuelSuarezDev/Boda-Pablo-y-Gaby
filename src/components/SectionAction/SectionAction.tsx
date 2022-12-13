import React from "react";
import { Button } from "../Button/Button";

export const SectionAction = ({
  title,
  text,
  buttonText,
  iconButton,
  onClick,
  button,
}: any) => {
  return (
    <div className="section">
      <p className="title">{title}</p>
      <p className="subtitle">{text}</p>
      {button && (
        <Button text={buttonText} icon={iconButton} onClick={onClick} />
      )}
    </div>
  );
};
