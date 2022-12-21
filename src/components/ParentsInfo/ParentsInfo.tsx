import React, { useState } from "react";
import "./styled.css";
import CardParent from "./Components/CardParent";
import Flores from "../../assets/Flores.png";
import Smoke from "../../assets/Smoke.png";

export const ParentsInfo = () => {
  const [parentState, setParentState] = useState(1);
  return (
    <div className="container-parents">
      <p className="title">Con La Bendición de Nuestros Padres</p>
      {parentState == 1 && (
        <>
          <div className="menu-content">
            <p
              onClick={() => {
                if (parentState != 1) {
                  setParentState(2);
                }
              }}
              className="active"
            >
              Del novio
            </p>
            <p
              onClick={() => {
                if (parentState == 1) {
                  setParentState(2);
                }
              }}
              className="inactive"
            >
              De la Novia
            </p>
          </div>

          <CardParent
            names="Oscar & Carolina Rodríguez"
            phrase="En estos momentos que te vas a unir con el gran amor de tu vida , como padres sentimos en nuestro corazón un mar de emociones, nos sentimos felices porque sabemos que eres un gran ser humano y que serás un maravilloso esposo, deseamos que tu hogar esté lleno de muchas bendiciones, Te amamos"
            image="https://i.postimg.cc/TYZK35j5/Whats-App-Image-2022-12-20-at-12-03-18-PM.jpg"
          />
        </>
      )}
      {parentState == 2 && (
        <>
          <div className="menu-content">
            <p
              onClick={() => {
                if (parentState == 2) {
                  setParentState(1);
                }
              }}
              className="inactive"
            >
              Del novio
            </p>
            <p
              onClick={() => {
                if (parentState != 2) {
                  setParentState(2);
                }
              }}
              className="active"
            >
              De la Novia
            </p>
          </div>
          <CardParent
            names="Lorenzo & Marcela González"
            phrase="Entendemos que te vas , e inicias una nueva vida con quien te hace feliz y dibuja una sonrisa en tu rostro con tan solo una mirada ,es hora de soltar tu mano y que construyas tu propio camino , junto al hombre que te acompañará en esta maravillosa historia de amor. Que esta nueva etapa sea bendecida , oramos que esta unión sea para toda la vida .

"
            image="https://i.ibb.co/yhCwHMr/c080540e-bfd0-43b5-87b6-eae8e4a47308.jpg"
          />
        </>
      )}
      <img className="humo" src={Smoke} alt="" />
      <img
        className="flowers"
        src={Flores}
        style={{ marginTop: "15%" }}
        alt=""
      />
    </div>
  );
};
