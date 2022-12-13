import React from "react";
import VersicleImage from "../../assets/Versicle.png";
import "./styled.css";
export const Versicle = () => {
  return (
    <div className="versicle">
      <img src={VersicleImage} alt="" />
      <p>
        “Y si alguno prevaleciere contra uno, dos le resistirán; y cordón de
        tres dobleces no se rompe pronto.”
      </p>
      <p>- Eclesiastés 4:12 RVR1960</p>
    </div>
  );
};
