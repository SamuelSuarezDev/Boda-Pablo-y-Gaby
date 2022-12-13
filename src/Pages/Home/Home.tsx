import "./styled.css";

import Logo from "../../assets/Logo.png";
import Divisor from "../../assets/Divisor.png";
import Smoke from "../../assets/Smoke.png";
import Hero from "../../components/Hero/Hero";
import { Date } from "../../components/Date/Date";
import { Player } from "../../components/Player/Player";
import { Moments } from "../../components/Moments/Moments";
import { Versicle } from "../../components/Versicle/Versicle";
import { ReactComponent as Email } from "../../assets/Mail.svg";
import { Ubication } from "../../components/Ubication/Ubication";
import { DressCode } from "../../components/DressCode/DressCode";
import { ParentsInfo } from "../../components/ParentsInfo/ParentsInfo";
import CardBoyfriend from "../../components/CardBoyfriend/CardBoyfriend";
import { SectionAction } from "../../components/SectionAction/SectionAction";

export const Home = () => {
  return (
    <>
      <Hero />

      <div className="song-container">
        <img src={Logo} alt="" />
        <p className="title">Nuestra canción</p>
        <p className="subtitle">Dale play a nuestra cancion</p>
        <Player />
      </div>
      <div className="history">
        <img className="humo" src={Smoke} alt="" />
        <p className="title">Nuestra historia</p>
        <p className="subtitle">
          Éramos niños cuando nos enamoramos, sín saber lo que era. ¡Quién diría
          que nuestros caminos se cruzarían 7 años después...! Y por la gracia
          de Dios está vez será para toda la vida. Un día dijimos sí para ser
          novios y hoy diremos sí en el altar para toda la vida y nos llamaremos
          esposos.
        </p>
      </div>
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
      <div className="divider">
        <img src={Divisor} alt="" />
      </div>
      <ParentsInfo />
      <div className="divider">
        <img src={Divisor} alt="" />
      </div>
      <Moments />
      <Versicle />
      <Date />
      <Ubication />
      <div className="divider">
        <img src={Divisor} alt="" />
      </div>
      <DressCode />
      <div className="divider">
        <img src={Divisor} alt="" />
      </div>
      <img
        style={{ marginTop: "-20%" }}
        className="smoke left"
        src={Smoke}
        alt=""
      />
      <SectionAction
        title="Asistencia"
        text="Para nosotros es muy importante contar con tu compañia."
        buttonText="Confirmar"
        iconButton={<Email />}
        button={true}
      />
      <SectionAction title={"Luvia de sobres"} />
    </>
  );
};

export default Home;
