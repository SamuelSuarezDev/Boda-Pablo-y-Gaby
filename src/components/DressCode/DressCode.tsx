import "./styles.css";

import Smoke from "../../assets/Smoke.png";
import { Divider } from "../Divider/Divider";
import Colors from "../../assets/Colors.png";
import Flores from "../../assets/Flores.png";
import Elegant from "../../assets/Elegant.png";

export const DressCode = () => {
  return (
    <div className="content-dress">
      <img
        style={{ left: 0, marginTop: "0" }}
        className="flowers large"
        src={Flores}
        alt=""
      />
      <img src={Smoke} alt="" className="left" />
      <p className="title">Dress Code</p>
      <img src={Elegant} alt="" />
      <p className="subtitle">Elegante</p>
      <div className="reserv">
        <p className="title">Colores reservados</p>
        <img src={Colors} alt="" />
        <p className="subtitle">Se reserva la gama de azules y blancos</p>
      </div>
      <Divider />
    </div>
  );
};
