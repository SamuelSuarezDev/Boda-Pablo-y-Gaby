import Smoke from "../../assets/Smoke.png";
import CardBoyfriend from "../CardBoyfriend/CardBoyfriend";
export const ContainerCards = () => {
  return (
    <div className="cards-container">
      <CardBoyfriend
        image="https://i.ibb.co/KKTrmXx/Whats-App-Image-2022-12-01-at-8-48-06-PM.jpg"
        name="Pablo Rodríguez"
        phrase="Hoy con gran emoción, puedo decir que tendré la mujer más hermosa y valiosa de todas como compañera de vida, gracias a Dios, ella me dio un si como respuesta y aquí estamos, aquí empieza otra etapa de nuestra hermosa historia"
      />
      <img className="humo left" src={Smoke} alt="" />
      <CardBoyfriend
        image="https://i.ibb.co/ZfF133W/8dc284b7-22d5-4559-8ba4-15e56ee6aeb4.jpg"
        name="Gabriela González"
        phrase="Finalmente dije sí, porque no hay nada que yo quiera vivir con alguien que no sea Mi Pallis. Estoy lista para tener su apellido en mí nombre!"
      />
    </div>
  );
};
